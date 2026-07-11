import React from 'react';
import { 
  Target, 
  Share2, 
  TrendingUp, 
  Handshake, 
  Network, 
  CheckCircle2,
  Award
} from 'lucide-react';

export default function ObjectivesSection() {
  const objectives = [
    {
      icon: Award,
      title: 'Realización de la ExpoDIE',
      desc: 'Apoyo para la realización y consolidación de la ExpoDIE en la Facultad de Ingeniería como escaparate tecnológico.'
    },
    {
      icon: Share2,
      title: 'Intercambio Industria-Academia',
      desc: 'Fomentar el intercambio de conocimientos entre la industria y la academia en el campo de la ingeniería y tecnología.'
    },
    {
      icon: Handshake,
      title: 'Aplicación Práctica Tecnológica',
      desc: 'Facilitar la colaboración entre empresas y la academia para promover la aplicación práctica de avances tecnológicos.'
    },
    {
      icon: Network,
      title: 'Networking & Alianzas Estratégicas',
      desc: 'Ofrecer oportunidades de networking y establecimiento de alianzas estratégicas entre profesionales, académicos y líderes del sector tecnológico.'
    }
  ];

  return (
    <section id="objetivos" style={{
      padding: '96px 24px',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            OBJETIVOS INSTITUCIONALES · EXPODIE & SEMANA DIE
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 3.8vw, 44px)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '16px'
          }}>
            ¿Por qué organizamos la Semana DIE?
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#475569',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Nuestra visión institucional es tender un puente sólido entre la comunidad académica de la Facultad de Ingeniería UNAM y los líderes del sector tecnológico.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {objectives.map((obj, i) => {
            const IconComp = obj.icon;
            return (
              <div
                key={i}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '18px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: '#0A192F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F2C24C',
                    marginBottom: '22px'
                  }}>
                    <IconComp size={24} />
                  </div>

                  <h3 style={{
                    fontSize: '21px',
                    fontWeight: 800,
                    color: '#0A192F',
                    marginBottom: '12px'
                  }}>
                    {obj.title}
                  </h3>

                  <p style={{
                    fontSize: '15px',
                    color: '#475569',
                    lineHeight: 1.65
                  }}>
                    {obj.desc}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px solid #E2E8F0',
                  color: '#1E40AF',
                  fontSize: '13px',
                  fontWeight: 700
                }}>
                  <CheckCircle2 size={16} color="#D59F0F" /> Eje Institucional FI UNAM
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
