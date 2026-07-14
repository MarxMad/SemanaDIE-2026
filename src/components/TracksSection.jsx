import React from 'react';
import { TRACKS_DATA } from '../data/tracks';
import { 
  Bot, 
  Blocks, 
  Leaf, 
  Sun, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';

const trackIcons = {
  Bot,
  Blocks,
  Leaf,
  Sun,
  Cpu
};

export default function TracksSection({ setScreen }) {
  return (
    <section id="tracks" style={{
      padding: '110px 24px',
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '56px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div className="section-tag">
              CATEGORÍAS DE COMPETENCIA
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              background: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '12px',
              marginBottom: '16px',
              border: '1px solid rgba(213, 159, 15, 0.35)'
            }}>
              <img src="/Logo-UNAM.png" alt="UNAM" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
              <img src="/escudofi_azul-modified.png" alt="Facultad de Ingeniería" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
              <img src="/CI8N.png" alt="CI8N" style={{ height: '26px', width: 'auto', objectFit: 'contain' }} />
              <img src="/logo-criptounam.png" alt="CriptoUNAM" title="CriptoUNAM · Comunidad Web 3.0" style={{ height: '26px', width: 'auto', objectFit: 'contain' }} />
              <div style={{ width: '1px', height: '22px', background: '#CBD5E1' }} />
              <img src="/LogoSemanaDIE.png" alt="Semana DIE" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 3.8vw, 44px)',
              fontWeight: 800,
              color: '#FFFFFF'
            }}>
              Los 5 Tracks del <span className="text-gradient-gold">Hackathon 48h</span>
            </h2>
          </div>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '380px',
            margin: 0
          }}>
            Cada equipo compite en un track especializado evaluado por mentores e investigadores del área.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '20px'
        }}>
          {TRACKS_DATA.map((track) => {
            const IconComponent = trackIcons[track.icon] || Cpu;
            return (
              <div
                key={track.id}
                className="card-glass"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `4px solid ${track.color}`
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '18px'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: track.bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: track.color
                    }}>
                      <IconComponent size={24} />
                    </div>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: '14px',
                      color: 'var(--text-muted)'
                    }}>
                      {track.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '10px' }}>
                    {track.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {track.description}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {track.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'rgba(255,255,255,0.04)',
                          fontSize: '11px',
                          color: 'var(--text-muted)',
                          fontWeight: 500
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setScreen('equipos')}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Explorar Equipos <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
