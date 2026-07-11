import React, { useState } from 'react';
import { X, LogIn, UserPlus, CheckCircle2, ShieldCheck, User, Building2, GraduationCap, ArrowRight } from 'lucide-react';

const MOCK_PROFILES = [
  {
    id: 'student',
    name: 'Valeria Torres Méndez',
    role: 'Estudiante FI · Track Electrónica & IA',
    email: 'valeria.torres@ingenieria.unam.mx',
    initials: 'VT',
    career: 'Ingeniería en Computación · 7° Semestre FI UNAM',
    teamName: 'Circuit Breakers (3/4)',
    projectName: 'PCB Vision AI',
    skills: ['Python', 'C++', 'Diseño PCB', 'OpenCV', 'ROS', 'Microcontroladores']
  },
  {
    id: 'sponsor',
    name: 'Ing. Carlos Mendoza Rivera',
    role: 'Director de Innovación · Patrocinador Tech',
    email: 'c.mendoza@techindustry.mx',
    initials: 'CM',
    career: 'Socio Estratégico · Jurado Hackathon Semana DIE',
    teamName: 'Comité de Evaluación & Retos',
    projectName: 'Reto IA Industrial 2026',
    skills: ['Cloud AI', 'Estrategia Tecnológica', 'Venture Capital', 'Mentoría Técnica']
  },
  {
    id: 'researcher',
    name: 'Dr. Fernando Reyes Ortiz',
    role: 'Investigador Titular · Posgrado UNAM',
    email: 'f.reyes@fi-a.unam.mx',
    initials: 'FR',
    career: 'Profesor e Investigador en Robótica & Electrónica UNAM',
    teamName: 'Comité Organizador DIE',
    projectName: 'Laboratorio de Sistemas Embebidos',
    skills: ['Control Óptimo', 'Sistemas Inteligentes', 'Electrónica de Potencia']
  }
];

export default function AuthModal({ isOpen, onClose, mode, setMode, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedMockId, setSelectedMockId] = useState('student');
  const [validating, setValidating] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSimulatedLogin = (profileToUse) => {
    setValidating(true);
    setTimeout(() => {
      setValidating(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onLoginSuccess(profileToUse);
        onClose();
      }, 900);
    }, 1100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockFound = MOCK_PROFILES.find(p => p.id === selectedMockId) || MOCK_PROFILES[0];
    const customProfile = {
      ...mockFound,
      name: name.trim() || mockFound.name,
      email: email.trim() || mockFound.email,
      initials: (name.trim() ? name.trim().split(' ').slice(0, 2).map(n => n[0]).join('') : mockFound.initials).toUpperCase()
    };
    handleSimulatedLogin(customProfile);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(10, 13, 36, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '24px'
    }}>
      <div className="card-glass" style={{
        maxWidth: '480px',
        width: '100%',
        padding: '36px',
        position: 'relative',
        border: '1px solid var(--border-gold)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.7)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer'
          }}
        >
          <X size={22} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--gold-light), var(--gold-primary))',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            color: '#0a0d24',
            fontSize: '20px',
            marginBottom: '12px'
          }}>
            DIE
          </div>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', margin: 0 }}>
            {mode === 'login' ? 'Portal Institucional UNAM' : 'Registro de Estudiante / Equipo'}
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px' }}>
            Acceso seguro a la plataforma interactiva de Semana DIE 2026
          </p>
        </div>

        <div style={{
          display: 'flex',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
          padding: '4px',
          marginBottom: '22px'
        }}>
          <button
            onClick={() => setMode('login')}
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: '8px',
              border: 'none',
              background: mode === 'login' ? 'var(--gold-primary)' : 'transparent',
              color: mode === 'login' ? '#0a0d24' : '#FFFFFF',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => setMode('register')}
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: '8px',
              border: 'none',
              background: mode === 'register' ? 'var(--gold-primary)' : 'transparent',
              color: mode === 'register' ? '#0a0d24' : '#FFFFFF',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Registro Nuevo
          </button>
        </div>

        {validating ? (
          <div style={{ textAlign: 'center', padding: '36px 0' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              border: '4px solid rgba(213,159,15,0.2)',
              borderTopColor: 'var(--gold-primary)',
              margin: '0 auto 16px',
              animation: 'spin 1s linear infinite'
            }} />
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>
              Verificando identidad en SSO UNAM...
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px' }}>
              Conectando con servidores de la Facultad de Ingeniería
            </div>
          </div>
        ) : success ? (
          <div style={{ textAlign: 'center', padding: '36px 0' }}>
            <CheckCircle2 size={56} color="var(--gold-light)" style={{ margin: '0 auto 14px' }} />
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF' }}>
              ¡Acceso Autorizado!
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px' }}>
              Bienvenido(a) al Portal Semana DIE 2026
            </div>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '22px' }}>
              <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                ⚡ Selecciona un perfil simulado rápido:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {MOCK_PROFILES.map((profile) => {
                  const isSelected = selectedMockId === profile.id;
                  return (
                    <div
                      key={profile.id}
                      onClick={() => {
                        setSelectedMockId(profile.id);
                        setEmail(profile.email);
                        setPassword('••••••••');
                        if (mode === 'register') setName(profile.name);
                      }}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '12px',
                        background: isSelected ? 'rgba(213, 159, 15, 0.16)' : 'rgba(255,255,255,0.04)',
                        border: isSelected ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.08)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          background: isSelected ? 'var(--gold-primary)' : 'rgba(255,255,255,0.1)',
                          color: isSelected ? '#0a0d24' : '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '13px'
                        }}>
                          {profile.initials}
                        </div>
                        <div>
                          <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#FFFFFF' }}>{profile.name}</div>
                          <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)' }}>{profile.role}</div>
                        </div>
                      </div>
                      {isSelected && (
                        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold-light)', background: 'rgba(213,159,15,0.2)', padding: '3px 8px', borderRadius: '999px' }}>
                          SELECCIONADO
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {mode === 'register' && (
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Escribe tu nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#FFFFFF',
                      fontSize: '13.5px',
                      outline: 'none'
                    }}
                  />
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  Correo Institucional o Profesional
                </label>
                <input
                  type="email"
                  required
                  placeholder="usuario@ingenieria.unam.mx"
                  value={email || (selectedMockId ? MOCK_PROFILES.find(p => p.id === selectedMockId)?.email : '')}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    fontSize: '13.5px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={password || '••••••••'}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    fontSize: '13.5px',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-gold"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: '6px',
                  padding: '13px',
                  fontSize: '14.5px'
                }}
              >
                {mode === 'login' ? 'Entrar al Portal' : 'Completar Registro'} <ArrowRight size={18} />
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
              <ShieldCheck size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              Simulación del entorno SSO Facultad de Ingeniería UNAM
            </div>
          </>
        )}
      </div>
    </div>
  );
}
