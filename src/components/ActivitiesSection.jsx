import React from 'react';
import { 
  Mic, 
  Wrench, 
  Monitor, 
  GraduationCap, 
  Globe2, 
  Award, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';

export default function ActivitiesSection() {
  const pillars = [
    {
      icon: Mic,
      title: 'Conferencias Magistrales',
      color: '#00F0FF',
      bgColor: 'rgba(0, 240, 255, 0.12)',
      desc: 'Ponencias de líderes de la industria sobre IA, transición energética, ciberseguridad y el futuro de las ingenierías.'
    },
    {
      icon: Wrench,
      title: 'Workshops Prácticos',
      color: 'var(--gold-light)',
      bgColor: 'rgba(213, 159, 15, 0.15)',
      desc: 'Talleres formativos en laboratorios de la Facultad con tecnologías Open Source, Smart Contracts, PCB y ROS.'
    },
    {
      icon: Monitor,
      title: 'Exposiciones & Stands',
      color: '#8B5CF6',
      bgColor: 'rgba(139, 92, 246, 0.15)',
      desc: 'Muestra interactiva de proyectos tecnológicos universitarios, empresas patrocinadoras y reclutamiento especializado.'
    }
  ];

  const universities = [
    { name: 'University of Illinois (UIUC)', country: 'Estados Unidos', topic: 'Maestrías e Investigación en Eléctrica' },
    { name: 'University of Florida (UF)', country: 'Estados Unidos', topic: 'Ética e Inteligencia Artificial aplicada' },
    { name: 'University of Groningen', country: 'Países Bajos', topic: 'Transición Energética e Innovación Europea' },
    { name: 'Campus France México', country: 'Francia', topic: 'Becas de Excelencia e Intercambio Científico' },
    { name: 'British Council México', country: 'Reino Unido', topic: 'Oportunidades STEM en Universidades Británicas' },
    { name: 'COMEXUS Fulbright', country: 'EE.UU. / México', topic: 'Becas Fulbright-García Robles de Posgrado' }
  ];

  return (
    <section id="actividades" style={{
      padding: '100px 24px',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top: 3 Activities Pillars */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: '999px',
            background: '#F1F5F9',
            border: '1px solid #CBD5E1',
            color: '#0A192F',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            marginBottom: '14px'
          }}>
            PROGRAMA ACADÉMICO UNAM
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 3.8vw, 44px)',
            fontWeight: 800,
            color: '#0A192F'
          }}>
            Tres pilares de aprendizaje y desarrollo profesional
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '80px'
        }}>
          {pillars.map((p, i) => {
            const IconC = p.icon;
            return (
              <div key={i} style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '36px 30px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '14px',
                  background: '#0A192F',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F2C24C',
                  marginBottom: '24px'
                }}>
                  <IconC size={30} />
                </div>
                <h3 style={{ fontSize: '22px', color: '#0A192F', marginBottom: '14px', fontWeight: 800 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom: Posgrado Internacional Section */}
        <div id="posgrado" style={{
          padding: '48px 40px',
          borderRadius: '20px',
          background: '#0A192F',
          border: '1px solid #1E293B',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '999px',
                background: 'rgba(242, 194, 76, 0.15)',
                color: '#F2C24C',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                marginBottom: '12px'
              }}>
                <GraduationCap size={15} /> POSGRADO E INTERCAMBIO
              </div>
              <h3 style={{ fontSize: '32px', color: '#FFFFFF', margin: 0, fontWeight: 800 }}>
                Oportunidades Académicas Internacionales
              </h3>
            </div>
            <p style={{
              fontSize: '15px',
              color: '#CBD5E1',
              maxWidth: '440px',
              margin: 0
            }}>
              Sesiones informativas institucionales con universidades líderes y agencias de cooperación internacional para continuar tus estudios de posgrado.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px'
          }}>
            {universities.map((u, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 22px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F2C24C', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>
                  <Globe2 size={14} /> {u.country}
                </div>
                <h4 style={{ fontSize: '17px', color: '#FFFFFF', marginBottom: '8px', fontWeight: 700 }}>
                  {u.name}
                </h4>
                <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                  {u.topic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
