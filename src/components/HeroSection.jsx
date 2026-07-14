import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  MapPin
} from 'lucide-react';

export default function HeroSection({ setScreen, openAuthModal }) {
  return (
    <section className="hero-bg" style={{
      padding: '70px 24px 80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="hero-grid" style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        {/* Left Column: Headline & Event Identity */}
        <div>

          {/* Official Institutional Header Bar: UNAM · FI · CI8N · Semana DIE */}
          <div className="hero-logos-bar" style={{
            display: 'inline-flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            background: '#FFFFFF',
            padding: '14px 26px',
            borderRadius: '16px',
            marginBottom: '28px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
            border: '1.5px solid rgba(213, 159, 15, 0.45)'
          }}>
            <img 
              src="/Logo-UNAM.png" 
              alt="Logo UNAM" 
              title="Universidad Nacional Autónoma de México"
              style={{
                height: '52px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }} 
            />
            <img 
              src="/escudofi_azul-modified.png" 
              alt="Escudo Facultad de Ingeniería" 
              title="Facultad de Ingeniería UNAM"
              style={{
                height: '52px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }} 
            />
            <img 
              src="/CI8N.png" 
              alt="CI8N" 
              title="CI8N"
              style={{
                height: '48px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }} 
            />
            <div style={{ width: '1.5px', height: '40px', background: '#CBD5E1' }} />
            <img 
              src="/LogoSemanaDIE.png" 
              alt="Logo Oficial Semana DIE" 
              title="Semana DIE 2026"
              style={{
                height: '52px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }} 
            />
          </div>

          <h1 style={{
            fontSize: 'clamp(44px, 5.8vw, 74px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '26px'
          }}>
            Semana DIE <br />
            <span className="text-gradient-gold">Hackathon & Congreso</span>
          </h1>

          <p style={{
            fontSize: '20px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            maxWidth: '640px',
            marginBottom: '36px'
          }}>
            El evento de innovación anual de la <strong>División de Ingeniería Eléctrica</strong> de la UNAM. Una semana completa de conferencias con especialistas de la industria, posgrado internacional y <strong>48 horas de Hackathon intensivo</strong>.
          </p>

          {/* Event Metadata */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '42px',
            padding: '20px 24px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(213, 159, 15, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-light)'
              }}>
                <Calendar size={18} />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>FECHA OFICIAL</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>9–15 de Noviembre, 2026</div>
              </div>
            </div>

            <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(0, 240, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)'
              }}>
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>SEDE PRESENCIAL</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>División Ing. Eléctrica, C.U.</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <button
              onClick={() => openAuthModal('register')}
              className="btn-gold"
              style={{ padding: '15px 28px', fontSize: '15px' }}
            >
              Regístrate al Hackathon <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setScreen('equipos')}
              className="btn-outline"
              style={{ padding: '15px 28px', fontSize: '15px' }}
            >
              Explorar Equipos & Tracks
            </button>
          </div>
        </div>

        {/* Right Column: Main Hero Image world-tec-1.png in Round Frame */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{
            width: 'clamp(320px, 35vw, 490px)',
            height: 'clamp(320px, 35vw, 490px)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid rgba(213, 159, 15, 0.45)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 45px rgba(213, 159, 15, 0.18)',
            background: 'rgba(10, 25, 47, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            margin: '0 auto'
          }}>
            <img
              src="/world-tec-1.png"
              alt="Innovación Tecnológica UNAM · Semana DIE"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
