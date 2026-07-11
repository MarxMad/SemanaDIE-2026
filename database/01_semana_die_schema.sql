-- ==============================================================================
-- SEMANA DIE 2026 · FACULTAD DE INGENIERÍA UNAM
-- ESQUEMA DE BASE DE DATOS RELACIONAL (POSTGRESQL / SUPABASE COMPATIBLE)
-- ==============================================================================
-- Contiene definiciones para:
-- 1. Autenticación, Usuarios, Perfiles institucionales y Preferencias
-- 2. Sesiones de Usuario y Trazabilidad SSO
-- 3. Equipos del Hackathon y Miembros
-- 4. Proyectos del Hackathon (Entregables, Repositorios, Evidencia)
-- 5. Chat Grupal de Equipo (Mensajería en tiempo real e historial)
-- 6. Solicitudes y Leads de Patrocinio Corporativo
-- ==============================================================================

-- Habilitar extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 1. TABLA: users (Usuarios de la Plataforma)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(180) NOT NULL,
    role VARCHAR(50) DEFAULT 'student' CHECK (role IN ('student', 'researcher', 'mentor', 'judge', 'sponsor', 'admin')),
    
    -- Información Académica / Profesional FI UNAM
    career VARCHAR(120),
    semester INTEGER CHECK (semester >= 1 AND semester <= 12),
    track_preference VARCHAR(80), -- e.g. 'Electrónica & IA', 'IoT', 'Ciberseguridad'
    skills TEXT[] DEFAULT '{}',    -- Array de habilidades (Python, C++, ROS, PCB, etc.)
    bio TEXT,
    avatar_url VARCHAR(512),
    
    -- Preferencias de Usuario (JSONB para UI theme, notificaciones, privacidad)
    preferences JSONB DEFAULT '{
        "theme": "dark",
        "email_notifications": true,
        "team_invites_enabled": true,
        "show_public_profile": true
    }'::jsonb,

    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- ==============================================================================
-- 2. TABLA: user_sessions (Control de Sesiones activas y SSO UNAM)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    sso_provider VARCHAR(50) DEFAULT 'fi_unam_sso', -- 'fi_unam_sso', 'local', 'google'
    ip_address VARCHAR(45),
    user_agent TEXT,
    is_active BOOLEAN DEFAULT true,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sessions_user_id ON user_sessions(user_id);
CREATE INDEX idx_sessions_token ON user_sessions(session_token);

-- ==============================================================================
-- 3. TABLA: teams (Equipos Inscritos en el Hackathon Semana DIE)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS teams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(120) UNIQUE NOT NULL,
    tagline VARCHAR(220),
    track VARCHAR(100) NOT NULL, -- 'Electrónica & Sistemas Embebidos', 'IA & Visión', etc.
    invite_code VARCHAR(20) UNIQUE NOT NULL,
    max_members INTEGER DEFAULT 4 CHECK (max_members <= 6),
    status VARCHAR(50) DEFAULT 'recruiting' CHECK (status IN ('recruiting', 'full', 'submitted', 'disqualified')),
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_teams_track ON teams(track);
CREATE INDEX idx_teams_invite_code ON teams(invite_code);

-- ==============================================================================
-- 4. TABLA: team_members (Relación Usuario <-> Equipo con roles internos)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS team_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    team_role VARCHAR(50) DEFAULT 'member' CHECK (team_role IN ('leader', 'hardware_lead', 'software_lead', 'member', 'mentor')),
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_team_user UNIQUE (team_id, user_id)
);

CREATE INDEX idx_team_members_team ON team_members(team_id);
CREATE INDEX idx_team_members_user ON team_members(user_id);

-- ==============================================================================
-- 5. TABLA: hackathon_projects (Subida de Proyectos / Entregables)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS hackathon_projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID NOT NULL UNIQUE REFERENCES teams(id) ON DELETE CASCADE,
    title VARCHAR(180) NOT NULL,
    short_description VARCHAR(280) NOT NULL,
    detailed_description TEXT NOT NULL,
    track VARCHAR(100) NOT NULL,
    
    -- Enlaces y Entregables
    repository_url VARCHAR(512),       -- GitHub / GitLab repo
    demo_video_url VARCHAR(512),       -- YouTube / Loom / Drive demo video
    pitch_deck_url VARCHAR(512),       -- PDF o Slides presentation
    schematics_url VARCHAR(512),       -- Archivos Gerber o diagramas PCB
    
    -- Tech Stack (JSON array o Postgres array)
    tech_stack TEXT[] DEFAULT '{}',
    
    -- Estado de Evaluación
    evaluation_status VARCHAR(50) DEFAULT 'submitted' CHECK (evaluation_status IN ('draft', 'submitted', 'under_review', 'finalist', 'winner')),
    score NUMERIC(5,2) DEFAULT 0.00,
    
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_projects_team ON hackathon_projects(team_id);
CREATE INDEX idx_projects_track ON hackathon_projects(track);
CREATE INDEX idx_projects_status ON hackathon_projects(evaluation_status);

-- ==============================================================================
-- 6. TABLA: team_chat_messages (Chat Grupal por Equipo)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS team_chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    message_content TEXT NOT NULL,
    
    -- Tipo de mensaje e información extra
    message_type VARCHAR(30) DEFAULT 'text' CHECK (message_type IN ('text', 'code', 'file', 'announcement', 'system')),
    attachments JSONB DEFAULT '[]'::jsonb, -- Enlaces a archivos, imágenes o esquemáticos subidos
    
    is_pinned BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_chat_team_time ON team_chat_messages(team_id, created_at DESC);
CREATE INDEX idx_chat_sender ON team_chat_messages(sender_id);

-- ==============================================================================
-- 7. TABLA: sponsorship_leads (Registro de Interés de Empresas Patrocinadoras)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS sponsorship_leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name VARCHAR(150) NOT NULL,
    contact_name VARCHAR(150) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(50),
    tier_requested VARCHAR(80) NOT NULL, -- e.g. 'Puma Oro', 'Hackathon Track Sponsor'
    notes TEXT,
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'dossier_sent', 'closed_won', 'closed_lost')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sponsorship_email ON sponsorship_leads(contact_email);
CREATE INDEX idx_sponsorship_tier ON sponsorship_leads(tier_requested);

-- ==============================================================================
-- FUNCIONES AUTOMÁTICAS: Actualización de updated_at
-- ==============================================================================
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_users_time
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER trg_update_teams_time
    BEFORE UPDATE ON teams
    FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER trg_update_projects_time
    BEFORE UPDATE ON hackathon_projects
    FOR EACH ROW EXECUTE FUNCTION update_timestamp();
