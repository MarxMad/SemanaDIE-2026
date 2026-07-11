import React from 'react';
import { 
  Code2, 
  Users, 
  UploadCloud, 
  Sparkles, 
  Clock, 
  Award, 
  Target, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin
} from 'lucide-react';
import { TRACKS_DATA } from '../data/tracks';

export default function HackathonHubView({ setScreen }) {
  return (
    <div style={{
      padding: '48px 24px 96px',
      background: '#F8FAFC',
      minHeight: '88vh'
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Back to Home */}
        <div style={{ marginBottom: '28px' }}>
          <button
            onClick={() => setScreen('landing')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 18px',
              borderRadius: '12px',
              background: '#FFFFFF',
              color: '#0A192F',
              border: '1px solid #CBD5E1',
              fontWeight: 700,
              fontSize: '13.5px',
              cursor: 'pointer'
            }}
          >
            ← Volver al Inicio
          </button>
        </div>

        {/* Hero Banner Hackathon */}
        <div style={{
          background: '#0A192F',
          color: '#FFFFFF',
          borderRadius: '28px',
          padding: '48px 56px',
          marginBottom: '48px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(10, 25, 47, 0.15)'
        }}>
          <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(242, 194, 76, 0.2)',
              color: '#F2C24C',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              marginBottom: '16px'
            }}>
              CONVOCATORIA OFICIAL · FACULTAD DE INGENIERÍA UNAM
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: '18px'
            }}>
              Hackathon <span style={{ color: '#F2C24C' }}>Semana DIE 2026</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#CBD5E1',
              lineHeight: 1.6,
              marginBottom: '32px'
            }}>
              48 horas intensivas de desarrollo tecnológico e innovación multidisciplinaria. Conecta con mentores de la industria, resuelve retos reales y presenta tu prototipo ante el jurado calificador.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button
                onClick={() => setScreen('subir')}
                style={{
                  padding: '14px 28px',
                  borderRadius: '14px',
                  background: '#F2C24C',
                  color: '#0A192F',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '15px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <UploadCloud size={18} /> Registrar Proyecto Oficial
              </button>

              <button
                onClick={() => setScreen('equipos')}
                style={{
                  padding: '14px 24px',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.25)',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Users size={18} /> Ver Equipos Formados
              </button>
            </div>
          </div>
        </div>

        {/* THREE PORTAL ACTION CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '24px', marginBottom: '56px' }}>
          
          <div
            onClick={() => setScreen('equipos')}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #CBD5E1',
              padding: '32px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#EFF6FF', color: '#1E40AF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Users size={26} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
                Directorio de Equipos
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                Explora los equipos multidisciplinarios formados por estudiantes de Eléctrica, Electrónica, Computación y Telecomunicaciones.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1E40AF', fontWeight: 800, fontSize: '14px' }}>
              Explorar Equipos <ArrowRight size={16} />
            </div>
          </div>

          <div
            onClick={() => setScreen('galeria')}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #CBD5E1',
              padding: '32px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#FEF3C7', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Code2 size={26} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
                Galería de Proyectos
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                Consulta el repositorio oficial de prototipos y soluciones presentadas en ediciones y tracks del Hackathon Semana DIE.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B45309', fontWeight: 800, fontSize: '14px' }}>
              Ver Galería <ArrowRight size={16} />
            </div>
          </div>

          <div
            onClick={() => setScreen('subir')}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1.5px solid #0A192F',
              padding: '32px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <UploadCloud size={26} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
                Subir / Registrar Proyecto
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                Accede al formulario institucional en 3 pasos para documentar tu prototipo, stack técnico, GitHub y video demo.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0A192F', fontWeight: 800, fontSize: '14px' }}>
              Comenzar Registro <ArrowRight size={16} />
            </div>
          </div>

        </div>

        {/* 5 TRACKS SECTION */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#D59F0F', letterSpacing: '0.08em', marginBottom: '8px' }}>
            EJES TECNOLÓGICOS DEL HACKATHON
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0A192F', marginBottom: '24px' }}>
            Tracks de Innovación 2026
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
            {Object.entries(TRACKS_DATA).map(([key, track]) => (
              <div
                key={key}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '18px',
                  padding: '24px'
                }}
              >
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#0A192F', marginBottom: '8px' }}>
                  {track.title}
                </div>
                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
