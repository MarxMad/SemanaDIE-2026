import React from 'react';
import { 
  Building2, 
  Cpu, 
  Users, 
  Globe2, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Video, 
  Monitor,
  ShieldCheck
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="acerca" style={{
      padding: '96px 24px',
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        
        {/* TOP ROW: Institutional overview & Division Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '56px',
          alignItems: 'start',
          marginBottom: '64px'
        }}>
          {/* Left Column: Official DIE UNAM Description */}
          <div>
            <div style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '999px',
              background: '#E2E8F0',
              color: '#0A192F',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              marginBottom: '14px'
            }}>
              ¿QUÉ ES LA SEMANA DIE?
            </div>
            <h2 style={{
              fontSize: 'clamp(30px, 3.8vw, 42px)',
              fontWeight: 800,
              color: '#0A192F',
              marginBottom: '20px',
              lineHeight: 1.15
            }}>
              Vinculando la <span style={{ color: '#D59F0F' }}>Academia UNAM</span> con la Industria Tecnológica
            </h2>

            <p style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#334155',
              marginBottom: '18px'
            }}>
              <strong>Semana DIE</strong> es el evento insignia y congreso internacional anual de la <strong>División de Ingeniería Eléctrica de la Facultad de Ingeniería, UNAM</strong>. Se enfoca en las últimas tendencias en ingeniería eléctrica, computación y telecomunicaciones, sirviendo como escaparate tecnológico para promover la innovación.
            </p>

            <p style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#334155',
              marginBottom: '28px'
            }}>
              Del <strong>21 al 24 de septiembre de 2026</strong>, estudiantes, investigadores y empresas líderes participan en conferencias, mesas redondas, workshops de especialización y posgrado internacional.
            </p>

            {/* ISO Certifications badge box */}
            <div style={{
              padding: '24px',
              borderRadius: '16px',
              background: '#FFFFFF',
              border: '1.5px solid #CBD5E1',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <ShieldCheck size={24} color="#0A192F" />
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#0A192F' }}>
                  Calidad y Certificaciones Internacionales
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14.5px', color: '#334155' }}>
                <div>✓ <strong>Norma ISO 9001</strong> en 9 Laboratorios experimentales y docentes</div>
                <div>✓ <strong>Norma ISO 17025</strong> en 1 Laboratorio de Investigación</div>
                <div>✓ <strong>3 Programas de Ingeniería</strong> acreditados internacionalmente</div>
              </div>
            </div>
          </div>

          {/* Right Column: Division Stats from PDF Page 3 */}
          <div>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '36px',
              border: '1px solid #CBD5E1',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 800,
                color: '#D59F0F',
                letterSpacing: '0.08em',
                marginBottom: '8px'
              }}>
                DIVISIóN DE INGENIERÍA ELÉCTRICA EN CIFRAS
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0A192F', marginBottom: '24px' }}>
                Comunidad Universitaria FI UNAM
              </h3>

              {/* 3 Carreras */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#64748B', marginBottom: '12px' }}>
                  TRES CARRERAS INSTITUCIONALES
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ padding: '8px 14px', borderRadius: '10px', background: '#EFF6FF', color: '#1E40AF', fontWeight: 700, fontSize: '13.5px' }}>
                    Ingeniería Eléctrica Electrónica
                  </span>
                  <span style={{ padding: '8px 14px', borderRadius: '10px', background: '#EFF6FF', color: '#1E40AF', fontWeight: 700, fontSize: '13.5px' }}>
                    Ingeniería en Computación
                  </span>
                  <span style={{ padding: '8px 14px', borderRadius: '10px', background: '#EFF6FF', color: '#1E40AF', fontWeight: 700, fontSize: '13.5px' }}>
                    Ingeniería en Telecomunicaciones
                  </span>
                </div>
              </div>

              {/* Grid 4 Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div style={{ padding: '20px', borderRadius: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '26px', fontWeight: 900, color: '#0A192F' }}>+4,200</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', marginTop: '4px' }}>Alumnos Activos</div>
                </div>
                <div style={{ padding: '20px', borderRadius: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '26px', fontWeight: 900, color: '#0A192F' }}>2,415</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', marginTop: '4px' }}>Académicos</div>
                </div>
                <div style={{ padding: '20px', borderRadius: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '26px', fontWeight: 900, color: '#D59F0F' }}>+50</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', marginTop: '4px' }}>Laboratorios</div>
                </div>
                <div style={{ padding: '20px', borderRadius: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '26px', fontWeight: 900, color: '#D59F0F' }}>+500</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#475569', marginTop: '4px' }}>Titulados en 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BANNER: Event Scope Metrics from PDF Page 13 */}
        <div style={{
          background: '#0A192F',
          borderRadius: '24px',
          padding: '40px 48px',
          color: '#FFFFFF',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '13px', color: '#F2C24C', fontWeight: 800, letterSpacing: '0.08em' }}>
              SEMANA DIE · IMPACTO DEL EVENTO
            </div>
            <div style={{ fontSize: '22px', fontWeight: 800, marginTop: '6px' }}>
              Conferencias, Mesas Redondas y Workshops
            </div>
          </div>

          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '24px' }}>
            <div style={{ fontSize: '32px', fontWeight: 900, color: '#F2C24C' }}>+3,000</div>
            <div style={{ fontSize: '14px', color: '#CBD5E1', fontWeight: 600 }}>Asistentes Presenciales</div>
          </div>

          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '24px' }}>
            <div style={{ fontSize: '32px', fontWeight: 900, color: '#FFFFFF' }}>+70 Horas</div>
            <div style={{ fontSize: '14px', color: '#CBD5E1', fontWeight: 600 }}>Contenido vía Streaming</div>
          </div>

          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '24px' }}>
            <div style={{ fontSize: '32px', fontWeight: 900, color: '#F2C24C' }}>+30</div>
            <div style={{ fontSize: '14px', color: '#CBD5E1', fontWeight: 600 }}>Expertos en la Industria</div>
          </div>
        </div>

      </div>
    </section>
  );
}
