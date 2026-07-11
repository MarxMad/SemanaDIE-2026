import React from 'react';
import { 
  Award, 
  Users, 
  FolderGit2, 
  UploadCloud, 
  User, 
  LogIn, 
  Sparkles,
  Calendar,
  Layers,
  Building2,
  Menu,
  X,
  Presentation
} from 'lucide-react';

export default function Navbar({ 
  currentScreen, 
  setScreen, 
  isLoggedIn, 
  setIsLoggedIn, 
  userProfile,
  openAuthModal, 
  openProfileModal,
  openPPTMode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'landing', label: 'Inicio', icon: Sparkles },
    { id: 'equipos', label: 'Equipos', icon: Users },
    { id: 'galeria', label: 'Proyectos', icon: FolderGit2 },
    { id: 'subir', label: 'Subir Proyecto', icon: UploadCloud },
  ];

  const scrollToSection = (sectionId) => {
    if (currentScreen !== 'landing') {
      setScreen('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar-glass" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '0 24px',
      height: '76px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <button 
          onClick={() => setScreen('landing')} 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <div style={{
            background: '#FFFFFF',
            padding: '6px 14px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(213, 159, 15, 0.35)'
          }}>
            <img
              src="/Logo-UNAM.png"
              alt="Logo UNAM"
              title="UNAM"
              style={{
                height: '32px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
            <img
              src="/escudofi_azul-modified.png"
              alt="Facultad de Ingeniería"
              title="Facultad de Ingeniería"
              style={{
                height: '32px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
            <div className="navbar-brand-extra">
              <img
                src="/CI8N.png"
                alt="CI8N"
                title="CI8N"
                style={{
                  height: '28px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              <div style={{ width: '1px', height: '24px', background: '#CBD5E1' }} />
              <img
                src="/LogoSemanaDIE.png"
                alt="Logo Semana DIE"
                title="Semana DIE"
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.15 }}>
            <span style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontWeight: 700, 
              color: '#FFFFFF', 
              fontSize: '17px', 
              letterSpacing: '0.02em' 
            }}>
              SEMANA DIE <span style={{ color: 'var(--gold-light)' }}>2026</span>
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.08em', fontWeight: 600 }}>
              FI · UNAM & HACKATHON
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links (Compact & Clean) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          <button
            onClick={() => setScreen('landing')}
            style={{
              background: currentScreen === 'landing' ? 'rgba(213, 159, 15, 0.15)' : 'none',
              border: currentScreen === 'landing' ? '1px solid var(--border-gold)' : '1px solid transparent',
              color: currentScreen === 'landing' ? 'var(--gold-light)' : 'var(--text-secondary)',
              padding: '7px 16px',
              borderRadius: '999px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '14px'
            }}
          >
            Inicio
          </button>

          <button
            onClick={() => setScreen('hackathon')}
            style={{
              background: currentScreen === 'hackathon' ? 'rgba(213, 159, 15, 0.15)' : 'none',
              border: currentScreen === 'hackathon' ? '1px solid var(--border-gold)' : '1px solid transparent',
              color: currentScreen === 'hackathon' ? 'var(--gold-light)' : 'var(--text-secondary)',
              padding: '7px 16px',
              borderRadius: '999px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '14px'
            }}
          >
            Hackathon 48h
          </button>

          <button
            onClick={() => {
              setScreen('landing');
              setTimeout(() => scrollToSection('agenda'), 100);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              padding: '7px 14px',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '14px'
            }}
          >
            Agenda
          </button>

          <button
            onClick={() => {
              setScreen('landing');
              setTimeout(() => scrollToSection('posgrado'), 100);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              padding: '7px 14px',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '14px'
            }}
          >
            Posgrado
          </button>
        </div>

        {/* Right Area: Condensed Profile / Hackathon Actions (Proyectos · Equipos · Subir) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="desktop-nav">
          {/* Condensed Hackathon & Profile Pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '999px',
            padding: '3px 4px',
            border: '1px solid rgba(255,255,255,0.12)',
            gap: '2px'
          }}>
            <button
              onClick={() => setScreen('equipos')}
              style={{
                background: currentScreen === 'equipos' ? 'rgba(213, 159, 15, 0.2)' : 'transparent',
                color: currentScreen === 'equipos' ? '#F2C24C' : '#CBD5E1',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '999px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '12.5px'
              }}
              title="Directorio de Equipos"
            >
              Equipos
            </button>
            <button
              onClick={() => setScreen('galeria')}
              style={{
                background: currentScreen === 'galeria' ? 'rgba(213, 159, 15, 0.2)' : 'transparent',
                color: currentScreen === 'galeria' ? '#F2C24C' : '#CBD5E1',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '999px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '12.5px'
              }}
              title="Galería de Proyectos"
            >
              Proyectos
            </button>
            <button
              onClick={() => setScreen('subir')}
              style={{
                background: currentScreen === 'subir' ? '#D59F0F' : 'transparent',
                color: currentScreen === 'subir' ? '#FFFFFF' : '#E2E8F0',
                border: 'none',
                padding: '6px 13px',
                borderRadius: '999px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '12.5px'
              }}
              title="Subir nuevo proyecto"
            >
              + Subir
            </button>
          </div>
        </div>

        {/* Right CTA / Auth Area & Mobile Hamburger Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {!isLoggedIn ? (
            <button
              onClick={() => openAuthModal('login')}
              className="btn-gold"
              style={{
                padding: '8px 18px',
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontWeight: 700,
                borderRadius: '999px',
                cursor: 'pointer'
              }}
            >
              <LogIn size={15} /> Acceder
            </button>
          ) : (
            <button
              onClick={openProfileModal}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(213,159,15,0.4)',
                padding: '6px 14px 6px 6px',
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #2B338C, var(--gold-primary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                color: '#FFFFFF',
                fontSize: '13px'
              }}>
                {userProfile?.initials || 'VT'}
              </div>
              <div style={{ textAlign: 'left' }} className="desktop-nav">
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1 }}>
                  {userProfile?.name?.split(' ').slice(0, 2).join(' ') || 'Valeria Torres'}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--gold-light)' }}>
                  {userProfile?.role?.split('·')[0] || 'Participante FI'}
                </div>
              </div>
            </button>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only"
            aria-label="Abrir menú"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '76px',
          left: 0,
          right: 0,
          background: '#0A192F',
          borderBottom: '1px solid rgba(213, 159, 15, 0.3)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 16px 36px rgba(0,0,0,0.45)'
        }}>
          <button
            onClick={() => { setScreen('landing'); setMobileMenuOpen(false); }}
            style={{
              textAlign: 'left',
              padding: '12px 16px',
              borderRadius: '12px',
              background: currentScreen === 'landing' ? 'rgba(213, 159, 15, 0.15)' : 'rgba(255,255,255,0.04)',
              color: currentScreen === 'landing' ? '#F2C24C' : '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.1)',
              fontWeight: 700,
              fontSize: '15px'
            }}
          >
            Inicio
          </button>

          <button
            onClick={() => { setScreen('hackathon'); setMobileMenuOpen(false); }}
            style={{
              textAlign: 'left',
              padding: '12px 16px',
              borderRadius: '12px',
              background: currentScreen === 'hackathon' ? 'rgba(213, 159, 15, 0.15)' : 'rgba(255,255,255,0.04)',
              color: currentScreen === 'hackathon' ? '#F2C24C' : '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.1)',
              fontWeight: 700,
              fontSize: '15px'
            }}
          >
            Hackathon 48h
          </button>

          <button
            onClick={() => {
              setScreen('landing');
              setMobileMenuOpen(false);
              setTimeout(() => scrollToSection('agenda'), 120);
            }}
            style={{
              textAlign: 'left',
              padding: '12px 16px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.04)',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.1)',
              fontWeight: 600,
              fontSize: '15px'
            }}
          >
            Agenda
          </button>

          <button
            onClick={() => {
              setScreen('landing');
              setMobileMenuOpen(false);
              setTimeout(() => scrollToSection('posgrado'), 120);
            }}
            style={{
              textAlign: 'left',
              padding: '12px 16px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.04)',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.1)',
              fontWeight: 600,
              fontSize: '15px'
            }}
          >
            Posgrado
          </button>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', margin: '4px 0' }} />

          <button
            onClick={() => { setScreen('equipos'); setMobileMenuOpen(false); }}
            style={{
              textAlign: 'left',
              padding: '12px 16px',
              borderRadius: '12px',
              background: currentScreen === 'equipos' ? 'rgba(213, 159, 15, 0.15)' : 'rgba(255,255,255,0.04)',
              color: currentScreen === 'equipos' ? '#F2C24C' : '#CBD5E1',
              border: '1px solid rgba(255,255,255,0.1)',
              fontWeight: 600,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Users size={18} /> Directorio de Equipos
          </button>

          <button
            onClick={() => { setScreen('galeria'); setMobileMenuOpen(false); }}
            style={{
              textAlign: 'left',
              padding: '12px 16px',
              borderRadius: '12px',
              background: currentScreen === 'galeria' ? 'rgba(213, 159, 15, 0.15)' : 'rgba(255,255,255,0.04)',
              color: currentScreen === 'galeria' ? '#F2C24C' : '#CBD5E1',
              border: '1px solid rgba(255,255,255,0.1)',
              fontWeight: 600,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <FolderGit2 size={18} /> Galería de Proyectos
          </button>

          <button
            onClick={() => { setScreen('subir'); setMobileMenuOpen(false); }}
            style={{
              textAlign: 'left',
              padding: '12px 16px',
              borderRadius: '12px',
              background: '#D59F0F',
              color: '#0A192F',
              border: 'none',
              fontWeight: 800,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <UploadCloud size={18} /> + Subir Proyecto
          </button>
        </div>
      )}
    </nav>
  );
}
