import React from 'react';
import { Mail, Share2, Globe, Sparkles, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer({ setScreen }) {
  return (
    <footer style={{
      background: '#07091A',
      padding: '76px 24px 36px',
      borderTop: '1px solid var(--border-subtle)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '56px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div style={{
                background: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(213, 159, 15, 0.3)'
              }}>
                <img
                  src="/Logo-UNAM.png"
                  alt="Logo UNAM"
                  style={{
                    height: '26px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
                <img
                  src="/escudofi_azul-modified.png"
                  alt="Escudo Facultad de Ingeniería"
                  style={{
                    height: '26px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
                <img
                  src="/CI8N.png"
                  alt="CI8N"
                  style={{
                    height: '24px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
                <img
                  src="/logo-criptounam.png"
                  alt="CriptoUNAM"
                  title="CriptoUNAM · Comunidad Web 3.0"
                  style={{
                    height: '24px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
                <div style={{ width: '1px', height: '20px', background: '#CBD5E1' }} />
                <img
                  src="/LogoSemanaDIE.png"
                  alt="Logo Semana DIE"
                  style={{
                    height: '26px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#FFFFFF', fontSize: '18px' }}>
                SEMANA DIE <span style={{ color: 'var(--gold-light)' }}>2026</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '290px', marginBottom: '16px' }}>
              División de Ingeniería Eléctrica · Facultad de Ingeniería, Universidad Nacional Autónoma de México (UNAM).
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.5 }}>
              <MapPin size={16} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Facultad de Ingeniería, Ciudad Universitaria, Coyoacán 04510</span>
            </div>
          </div>

          {/* Evento */}
          <div>
            <div style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--gold-light)',
              marginBottom: '20px'
            }}>
              SEMANA DIE 2026
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#acerca" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Acerca del Evento</a>
              <a href="#objetivos" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Objetivos</a>
              <a href="#actividades" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Conferencias & Workshops</a>
              <a href="#expositores" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Expositores & Aliados</a>
              <a href="#agenda" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Agenda Minuto a Minuto</a>
            </div>
          </div>

          {/* Plataforma Hackathon */}
          <div>
            <div style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--gold-light)',
              marginBottom: '20px'
            }}>
              PLATAFORMA HACKATHON
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={() => setScreen('equipos')}
                style={{ textAlign: 'left', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '14px', color: 'var(--text-secondary)' }}
              >
                Explorar Equipos
              </button>
              <button
                onClick={() => setScreen('galeria')}
                style={{ textAlign: 'left', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '14px', color: 'var(--text-secondary)' }}
              >
                Galería de Proyectos
              </button>
              <button
                onClick={() => setScreen('subir')}
                style={{ textAlign: 'left', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '14px', color: 'var(--text-secondary)' }}
              >
                Subir Proyecto
              </button>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <div style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--gold-light)',
              marginBottom: '20px'
            }}>
              CONTACTO OFICIAL
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                <Phone size={15} color="var(--gold-primary)" />
                <span>55 5622 3116 / 55 5622 2128</span>
              </div>
              <a
                href="mailto:transformaciondigital@unam.mx"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                <Mail size={15} color="var(--gold-primary)" /> transformaciondigital@unam.mx
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--text-secondary)' }}>
                <Clock size={15} color="var(--accent-cyan)" style={{ marginTop: '2px' }} />
                <span>Lunes - Viernes: 9:00AM - 02:00PM | 4:00PM - 06:00PM</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            © 2026 Semana DIE — Facultad de Ingeniería, UNAM. Todos los derechos reservados.
          </span>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} color="var(--gold-light)" /> Hecho por y para la comunidad universitaria FI UNAM
          </span>
        </div>
      </div>
    </footer>
  );
}
