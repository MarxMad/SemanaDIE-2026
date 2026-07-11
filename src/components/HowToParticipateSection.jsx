import React from 'react';
import { UserCheck, Users, Upload, Presentation, ArrowRight } from 'lucide-react';

export default function HowToParticipateSection({ setScreen, openAuthModal }) {
  const steps = [
    {
      num: '01',
      icon: UserCheck,
      title: 'Crea tu Cuenta',
      desc: 'Regístrate con tu correo institucional UNAM o cuenta personal en menos de un minuto.'
    },
    {
      num: '02',
      icon: Users,
      title: 'Únete o Crea tu Equipo',
      desc: 'Encuentra compañeros o publica tu equipo de 3 a 4 integrantes en tu track preferido.'
    },
    {
      num: '03',
      icon: Upload,
      title: 'Desarrolla & Sube Proyecto',
      desc: 'Construye tu solución durante el hackathon y documenta tu repositorio y pitch deck.'
    },
    {
      num: '04',
      icon: Presentation,
      title: 'Pitch ante el Jurado',
      desc: 'Presenta tu demostración en vivo el domingo en la ceremonia oficial de clausura.'
    }
  ];

  return (
    <section style={{
      padding: '110px 24px',
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '60px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div className="section-tag">
              CÓMO PARTICIPAR
            </div>
            <h2 style={{
              fontSize: 'clamp(32px, 3.8vw, 44px)',
              fontWeight: 800,
              color: '#FFFFFF'
            }}>
              De la inscripción al <span className="text-gradient-gold">pitch final</span>
            </h2>
          </div>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '380px',
            margin: 0
          }}>
            Cuatro sencillos pasos para ser parte de la competencia de innovación más grande de Ingeniería Eléctrica.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {steps.map((step, i) => {
            const IconComp = step.icon;
            return (
              <div
                key={i}
                className="card-glass"
                style={{
                  padding: '36px 28px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '16px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '64px',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.04)',
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}>
                  {step.num}
                </div>

                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: 'rgba(213, 159, 15, 0.15)',
                  border: '1px solid rgba(213, 159, 15, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)',
                  marginBottom: '24px'
                }}>
                  <IconComp size={26} />
                </div>

                <h3 style={{ fontSize: '22px', color: '#FFFFFF', marginBottom: '12px' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div style={{
          padding: '50px 40px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(213, 159, 15, 0.22), rgba(16, 19, 58, 0.9))',
          border: '1px solid var(--border-gold)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ fontSize: '28px', color: '#FFFFFF', marginBottom: '8px' }}>
              ¿Listo para construir algo increíble en la UNAM?
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', margin: 0 }}>
              Cupo limitado a 150 participantes presenciales. Cierre de registro: 6 de noviembre, 2026.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => openAuthModal('register')}
              className="btn-gold"
              style={{ padding: '15px 30px', fontSize: '15px' }}
            >
              Crea tu Cuenta <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setScreen('equipos')}
              className="btn-outline"
              style={{ padding: '15px 30px', fontSize: '15px' }}
            >
              Ver Equipos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
