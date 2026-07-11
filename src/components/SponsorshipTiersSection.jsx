import React, { useState } from 'react';
import { Check, X, Shield, Award, Sparkles, Wifi, Zap, Layout, Monitor, FileText, Users, ArrowRight, Presentation } from 'lucide-react';

export default function SponsorshipTiersSection({ setScreen, openPPTMode }) {
  const [activeTab, setActiveTab] = useState('tabla'); // 'tabla' | 'stand'

  const tiers = [
    {
      name: 'Goya',
      price: '$15,000.00',
      color: '#0A192F',
      badgeBg: '#E2E8F0',
      badgeText: '#0A192F',
      benefits: {
        webLogo: true,
        digitalChannels: false,
        auditoriumPresence: true,
        emailFlyer: false,
        socialMediaPost: false,
        stand2x1: false,
        stand3x1: false,
        keynoteSpace: true,
      }
    },
    {
      name: 'Puma',
      price: '$25,000.00',
      color: '#1E3A8A',
      badgeBg: '#DBEAFE',
      badgeText: '#1E40AF',
      benefits: {
        webLogo: true,
        digitalChannels: false,
        auditoriumPresence: true,
        emailFlyer: true,
        socialMediaPost: false,
        stand2x1: true,
        stand3x1: false,
        keynoteSpace: false,
      }
    },
    {
      name: 'Puma Plata',
      price: '$35,000.00',
      color: '#475569',
      badgeBg: '#F1F5F9',
      badgeText: '#334155',
      benefits: {
        webLogo: true,
        digitalChannels: true,
        auditoriumPresence: true,
        emailFlyer: true,
        socialMediaPost: false,
        stand2x1: false,
        stand3x1: true,
        keynoteSpace: true,
      }
    },
    {
      name: 'Puma Oro',
      price: '$50,000.00',
      color: '#D59F0F',
      badgeBg: '#FEF3C7',
      badgeText: '#B45309',
      popular: true,
      benefits: {
        webLogo: true,
        digitalChannels: true,
        auditoriumPresence: true,
        emailFlyer: true,
        socialMediaPost: true,
        stand2x1: false,
        stand3x1: true,
        keynoteSpace: true,
      }
    },
    {
      name: 'Todo Incluido',
      price: 'A la medida',
      color: '#0A192F',
      badgeBg: '#FEF3C7',
      badgeText: '#92400E',
      benefits: {
        webLogo: true,
        digitalChannels: true,
        auditoriumPresence: true,
        emailFlyer: true,
        socialMediaPost: true,
        stand2x1: false,
        stand3x1: true,
        keynoteSpace: true,
      }
    }
  ];

  const benefitRows = [
    { key: 'webLogo', label: 'Logotipo en página web del evento' },
    { key: 'digitalChannels', label: 'Logotipo en canales de comunicación digitales (FI UNAM)' },
    { key: 'auditoriumPresence', label: 'Presencia digital al inicio de cada evento en auditorio' },
    { key: 'emailFlyer', label: 'Flyer de agradecimiento por correo' },
    { key: 'socialMediaPost', label: 'Posteo de agradecimiento en redes sociales' },
    { key: 'stand2x1', label: 'Stand de 2x1 metros' },
    { key: 'stand3x1', label: 'Stand de 3x1 metros' },
    { key: 'keynoteSpace', label: 'Espacio para una conferencia magistral' }
  ];

  return (
    <section id="patrocinios" style={{
      padding: '96px 24px',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Back navigation & Private Portal badge */}
        <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          {setScreen ? (
            <button
              onClick={() => setScreen('landing')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '12px',
                background: '#F1F5F9',
                color: '#0A192F',
                border: '1px solid #CBD5E1',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              ← Volver al Inicio
            </button>
          ) : <div />}

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              color: '#991B1B',
              fontSize: '12px',
              fontWeight: 800
            }}>
              🔒 PORTAL PRIVADO DE COMITÉ · SALES DECK 2026
            </span>
          </div>
        </div>

        {/* COMBINED SALES EXECUTIVE PRESENTATION DECK BANNER */}
        <div style={{
          background: '#0A192F',
          color: '#FFFFFF',
          borderRadius: '24px',
          padding: '38px 48px',
          marginBottom: '48px',
          border: '2px solid #D59F0F',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '32px',
          alignItems: 'center',
          boxShadow: '0 20px 50px rgba(10, 25, 47, 0.2)'
        }}>
          <div>
            <div style={{ fontSize: '13px', color: '#F2C24C', fontWeight: 800, letterSpacing: '0.08em', marginBottom: '10px' }}>
              DOSSIER EJECUTIVO DE VENTAS · SEMANA DIE 2026
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '14px', lineHeight: 1.2 }}>
              Presentación Comercial para Patrocinadores
            </h2>
            <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '22px' }}>
              Explora las 12 diapositivas ejecutivas a pantalla completa con cifras UNAM, beneficios por tier, especificaciones de stand 3x1 y 2x1, y flyers de difusión.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', fontSize: '12px', fontWeight: 700 }}>1. Portada UNAM</span>
              <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', fontSize: '12px', fontWeight: 700 }}>2. Objetivos</span>
              <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', fontSize: '12px', fontWeight: 700 }}>3. DIE en Cifras</span>
              <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', fontSize: '12px', fontWeight: 700 }}>4. Aportaciones</span>
              <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', fontSize: '12px', fontWeight: 700 }}>5. Stands</span>
              <span style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', fontSize: '12px', fontWeight: 700 }}>6. Flyers & Mapa</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '20px',
            padding: '28px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#F2C24C', marginBottom: '16px' }}>
              MODO PRESENTACIÓN PPT
            </div>
            {openPPTMode && (
              <button
                onClick={openPPTMode}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  borderRadius: '14px',
                  background: '#F2C24C',
                  color: '#0A192F',
                  border: 'none',
                  fontWeight: 900,
                  fontSize: '15px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 8px 25px rgba(242, 194, 76, 0.35)'
                }}
              >
                <Presentation size={20} /> ▶ Iniciar Deck PPT (12 Slides)
              </button>
            )}
            <div style={{ fontSize: '12.5px', color: '#94A3B8', marginTop: '12px' }}>
              Compatible con pantalla completa y navegación con flechas
            </div>
          </div>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '999px',
            background: '#F8FAFC',
            border: '1px solid #CBD5E1',
            color: '#0A192F',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            marginBottom: '16px'
          }}>
            <Award size={14} color="#D59F0F" />
            VINCULACIÓN E INDUSTRIA · 21 AL 24 DE SEPTIEMBRE 2026
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '16px'
          }}>
            Tipos de Aportación y Especificaciones de Stand
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#475569',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Conoce los paquetes institucionales de patrocinio y las facilidades para estantes y conferencias magistrales en la Facultad de Ingeniería UNAM.
          </p>

          {/* Toggle Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            background: '#F1F5F9',
            padding: '6px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            marginTop: '32px',
            gap: '6px'
          }}>
            <button
              onClick={() => setActiveTab('tabla')}
              style={{
                padding: '10px 18px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'tabla' ? '#0A192F' : 'transparent',
                color: activeTab === 'tabla' ? '#FFFFFF' : '#475569',
                fontWeight: 700,
                fontSize: '13.5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Award size={16} /> Paquetes Institucionales
            </button>
            <button
              onClick={() => setActiveTab('hackathon')}
              style={{
                padding: '10px 18px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'hackathon' ? '#1E3A8A' : 'transparent',
                color: activeTab === 'hackathon' ? '#FFFFFF' : '#475569',
                fontWeight: 700,
                fontSize: '13.5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Zap size={16} /> Paquetes Hackathon 48H
            </button>
            <button
              onClick={() => setActiveTab('talleres')}
              style={{
                padding: '10px 18px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'talleres' ? '#0F766E' : 'transparent',
                color: activeTab === 'talleres' ? '#FFFFFF' : '#475569',
                fontWeight: 700,
                fontSize: '13.5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Monitor size={16} /> Talleres & Masterclass
            </button>
            <button
              onClick={() => setActiveTab('conceptos')}
              style={{
                padding: '10px 18px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'conceptos' ? '#B45309' : 'transparent',
                color: activeTab === 'conceptos' ? '#FFFFFF' : '#475569',
                fontWeight: 700,
                fontSize: '13.5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={16} /> Conceptos a la Carta
            </button>
            <button
              onClick={() => setActiveTab('stand')}
              style={{
                padding: '10px 18px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === 'stand' ? '#0A192F' : 'transparent',
                color: activeTab === 'stand' ? '#FFFFFF' : '#475569',
                fontWeight: 700,
                fontSize: '13.5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Layout size={16} /> Especificaciones Stand
            </button>
          </div>
        </div>

        {/* TAB 1: COMPARATIVE TABLE */}
        {activeTab === 'tabla' && (
          <div>
            <div style={{
              overflowX: 'auto',
              borderRadius: '20px',
              border: '1px solid #CBD5E1',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.05)',
              background: '#FFFFFF'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#0A192F', color: '#FFFFFF' }}>
                    <th style={{ padding: '24px 28px', fontSize: '15px', fontWeight: 800, minWidth: '280px' }}>
                      Concepto / Beneficio
                    </th>
                    {tiers.map((tier, i) => (
                      <th key={i} style={{
                        padding: '24px 16px',
                        textAlign: 'center',
                        minWidth: '160px',
                        background: tier.popular ? '#1E293B' : undefined,
                        borderLeft: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        {tier.popular && (
                          <div style={{
                            fontSize: '11px',
                            color: '#F2C24C',
                            fontWeight: 800,
                            letterSpacing: '0.08em',
                            marginBottom: '4px'
                          }}>
                            ★ RECOMENDADO
                          </div>
                        )}
                        <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF' }}>
                          {tier.name}
                        </div>
                        <div style={{ fontSize: '14px', color: tier.name === 'Puma Oro' ? '#F2C24C' : '#94A3B8', marginTop: '4px' }}>
                          {tier.price}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {benefitRows.map((row, idx) => (
                    <tr
                      key={row.key}
                      style={{
                        background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                        borderBottom: '1px solid #E2E8F0'
                      }}
                    >
                      <td style={{ padding: '18px 28px', fontSize: '14.5px', fontWeight: 700, color: '#1E293B' }}>
                        {row.label}
                      </td>
                      {tiers.map((tier, i) => {
                        const hasBenefit = tier.benefits[row.key];
                        return (
                          <td
                            key={i}
                            style={{
                              padding: '18px 16px',
                              textAlign: 'center',
                              borderLeft: '1px solid #E2E8F0',
                              background: tier.popular ? (idx % 2 === 0 ? '#FFFBEB' : '#FEF3C7') : undefined
                            }}
                          >
                            {hasBenefit ? (
                              <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: '#DCFCE7',
                                color: '#16A34A'
                              }}>
                                <Check size={18} strokeWidth={3} />
                              </div>
                            ) : (
                              <span style={{ color: '#CBD5E1', fontSize: '18px' }}>—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Note */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginTop: '24px',
              padding: '20px 24px',
              borderRadius: '14px',
              background: '#F8FAFC',
              border: '1px solid #E2E8F0'
            }}>
              <div style={{ fontSize: '14px', color: '#475569' }}>
                ¿Deseas personalizar un paquete de aportación o patrocinio para tu organización?
              </div>
              <a
                href="mailto:transformaciondigital@unam.mx?subject=Información%20Aportación%20Semana%20DIE%202026"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  background: '#0A192F',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none'
                }}
              >
                Solicitar Dossier & Cotización <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: PAQUETES Y RETOS HACKATHON 48H */}
        {activeTab === 'hackathon' && (
          <div>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
              <span style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', background: '#DBEAFE', color: '#1E40AF', fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>
                INNOVACIÓN & RECLUTAMIENTO TECNOLÓGICO
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
                Paquetes de Patrocinio Hackathon Semana DIE 2026
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                Conecta directamente con más de 400 estudiantes de ingeniería, desarrolladores y creadores resolviendo retos reales de la industria.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              {[
                {
                  title: 'Track Sponsor Exclusivo',
                  tag: 'MÁXIMO IMPACTO',
                  price: '$45,000 MXN',
                  color: '#1E3A8A',
                  desc: 'El track temático (IA, IoT, Ciberseguridad o Robótica) lleva el nombre oficial de tu empresa.',
                  points: [
                    'Definición del Reto Tecnológico oficial del Track',
                    '2 espacios en el Jurado Evaluador de proyectos',
                    'Entrega estelar de premios en Auditorio',
                    'Acceso prioritario a la base de talento (Talent Pool CVs)'
                  ]
                },
                {
                  title: 'Naming de Premio Especial',
                  tag: 'RECONOCIMIENTO',
                  price: '$25,000 MXN',
                  color: '#0F766E',
                  desc: 'Patrocina un galardón especial de innovación o desarrollo sustentable entregado por tu directivo.',
                  points: [
                    'Premio co-branded con el logotipo de tu marca',
                    'Mención estelar en la ceremonia de clausura UNAM',
                    'Fotografía oficial con el equipo ganador',
                    'Difusión en comunicados de prensa FI UNAM'
                  ]
                },
                {
                  title: 'Mentoría & Tech Hub 48H',
                  tag: 'ENGAGEMENT TÉCNICO',
                  price: '$20,000 MXN',
                  color: '#B45309',
                  desc: 'Posiciona a tus ingenieros como mentores oficiales asesorando a los equipos durante el hackathon.',
                  points: [
                    'Stand / Mesa técnica de asesoría en el Hackathon Hub',
                    'Branding en los canales oficiales del Hackathon (Discord/Web)',
                    'Acceso al Talent Pool de participantes inscritos',
                    'Taller de inducción tecnológica previo al reto'
                  ]
                },
                {
                  title: 'Acceso VIP Talent Pool',
                  tag: 'RECLUTAMIENTO FI',
                  price: '$15,000 MXN',
                  color: '#475569',
                  desc: 'Acceso corporativo directo a perfiles, repositorios GitHub y currículums de los participantes.',
                  points: [
                    'Base de datos curricular verificada por especialidad',
                    'Filtro por tecnologías (Python, C++, ROS, Cloud, PCB)',
                    'Permiso para agendar entrevistas en la semana del evento',
                    'Logotipo como Empresa Reclutadora Aliada'
                  ]
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: item.color, background: `${item.color}15`, padding: '4px 10px', borderRadius: '999px' }}>
                        {item.tag}
                      </span>
                      <span style={{ fontSize: '18px', fontWeight: 800, color: '#0A192F' }}>
                        {item.price}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
                      {item.desc}
                    </p>
                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#334155' }}>
                          <Check size={16} color={item.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href="mailto:transformaciondigital@unam.mx?subject=Cotización%20Paquete%20Hackathon%20Semana%20DIE"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      marginTop: '24px',
                      padding: '12px',
                      borderRadius: '12px',
                      background: item.color,
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '13.5px',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s'
                    }}
                  >
                    Cotizar Paquete Hackathon →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TALLERES & MASTERCLASS */}
        {activeTab === 'talleres' && (
          <div>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
              <span style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', background: '#CCFBF1', color: '#0F766E', fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>
                TRANSFERENCIA DE CONOCIMIENTO & BRANDING TÉCNICO
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
                Paquetes de Talleres y Capacitación Especializada
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                Enseña tus plataformas, software o hardware directamente en las aulas y laboratorios de la Facultad de Ingeniería UNAM.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              {[
                {
                  title: 'Taller Técnico / Certificación',
                  tag: 'CAPACITACIÓN PRÁCTICA',
                  price: '$20,000 MXN',
                  color: '#0F766E',
                  desc: 'Imparte una sesión práctica de 3 a 4 horas con cupo de 40 a 80 estudiantes de ingeniería.',
                  points: [
                    'Aula o laboratorio de cómputo FI asignado y equipado',
                    'Registro previo gestionado en la plataforma oficial',
                    'Entrega de constancias digitales avaladas por tu empresa',
                    'Base de datos de asistentes inscritos al taller'
                  ]
                },
                {
                  title: 'Masterclass Magistral',
                  tag: 'AUDITORIO PRINCIPAL',
                  price: '$25,000 MXN',
                  color: '#1E3A8A',
                  desc: 'Conferencia estelar de 60 minutos en el Auditorio Javier Barros Sierra o Sotero Prieto.',
                  points: [
                    'Transmisión en vivo por canales oficiales FI UNAM',
                    'Presencia de marca en pantallas gigantes y presídium',
                    'Sesión de Q&A con profesores e investigadores',
                    'Grabación oficial entregada en alta definición'
                  ]
                },
                {
                  title: 'Aula o Lab Patrocinado',
                  tag: 'BRANDING SEMANAL',
                  price: '$30,000 MXN',
                  color: '#475569',
                  desc: 'Nombrar y decorar un aula técnica durante los 4 días de la Semana DIE 2026.',
                  points: [
                    'Señalética exterior e interior con logotipo corporativo',
                    'Material promocional en escritorios del alumnado',
                    'Uso preferencial del aula para demostraciones de empresa',
                    'Mención en el mapa oficial interactivo ExpoDIE'
                  ]
                },
                {
                  title: 'Hardware & Cloud Grant',
                  tag: 'IMPACTO ESTUDIANTIL',
                  price: 'A la medida',
                  color: '#B45309',
                  desc: 'Patrocina kits de desarrollo, tarjetas embebidas o créditos cloud para prácticas estudiantiles.',
                  points: [
                    'Agradecimiento público durante la inauguración del evento',
                    'Demostraciones en vivo de proyectos construidos con tu kit',
                    'Artículos técnicos publicados en la gaceta universitaria',
                    'Deducibilidad fiscal conforme a normatividad UNAM'
                  ]
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: item.color, background: `${item.color}15`, padding: '4px 10px', borderRadius: '999px' }}>
                        {item.tag}
                      </span>
                      <span style={{ fontSize: '18px', fontWeight: 800, color: '#0A192F' }}>
                        {item.price}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
                      {item.desc}
                    </p>
                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#334155' }}>
                          <Check size={16} color={item.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href="mailto:transformaciondigital@unam.mx?subject=Cotización%20Taller%20o%20Masterclass%20Semana%20DIE"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      marginTop: '24px',
                      padding: '12px',
                      borderRadius: '12px',
                      background: item.color,
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '13.5px',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s'
                    }}
                  >
                    Agendar Sesión / Taller →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CONCEPTOS A LA CARTA */}
        {activeTab === 'conceptos' && (
          <div>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
              <span style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '999px', background: '#FEF3C7', color: '#92400E', fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>
                PATROCINIOS A LA CARTA · HIGH VISIBILITY
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
                Conceptos Específicos & Experiencias VIP
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>
                Selecciona conceptos individuales para maximizar la recordación de tu marca frente a toda la comunidad de la Facultad de Ingeniería.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              {[
                {
                  name: 'Lanyards & Gafetes Oficiales',
                  price: '$25,000 MXN',
                  icon: '🏷️',
                  desc: 'Logotipo exclusivo impreso en el 100% de los gafetes y cintas portados por asistentes, ponentes y staff.'
                },
                {
                  name: 'Coffee Break & VIP Lounge',
                  price: '$18,000 MXN',
                  icon: '☕',
                  desc: 'Branding en el área exclusiva de café y networking entre ponentes magistrales, empresas aliadas y académicos.'
                },
                {
                  name: 'Kit Oficial / Merch Bag UNAM',
                  price: '$22,000 MXN',
                  icon: '🎒',
                  desc: 'Tu marca co-diseñada en la bolsa oficial entregada a participantes del Hackathon y congresistas.'
                },
                {
                  name: 'Naming Rights Auditorio (Día)',
                  price: '$20,000 MXN',
                  icon: '🏛️',
                  desc: 'El auditorio sede toma el nombre patrocinado por un día completo con mampara y menciones continuas.'
                },
                {
                  name: 'Spot & Cintilla Digital Live Stream',
                  price: '$12,000 MXN',
                  icon: '📺',
                  desc: 'Spot de 30 segundos transmitido en los descansos de las transmisiones en vivo y cintilla permanente.'
                },
                {
                  name: 'Sala de Entrevistas 1-on-1 VIP',
                  price: '$15,000 MXN',
                  icon: '🤝',
                  desc: 'Espacio privado acondicionado para realizar entrevistas de reclutamiento directas con talento FI.'
                }
              ].map((c, i) => (
                <div key={i} style={{
                  background: '#F8FAFC',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '24px' }}>{c.icon}</span>
                      <span style={{ fontSize: '15px', fontWeight: 800, color: '#D59F0F', background: '#FEF3C7', padding: '4px 10px', borderRadius: '8px' }}>
                        {c.price}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F', marginBottom: '8px' }}>
                      {c.name}
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5 }}>
                      {c.desc}
                    </p>
                  </div>
                  <a
                    href={`mailto:transformaciondigital@unam.mx?subject=Cotización%20Concepto%20${encodeURIComponent(c.name)}`}
                    style={{
                      display: 'inline-block',
                      marginTop: '18px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#0A192F',
                      textDecoration: 'none'
                    }}
                  >
                    Solicitar concepto →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: STAND SPECIFICATIONS */}
        {activeTab === 'stand' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            
            {/* Stand Overview Card */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '36px'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '8px',
                background: '#0A192F',
                color: '#F2C24C',
                fontWeight: 800,
                fontSize: '12px',
                marginBottom: '18px'
              }}>
                SEMANA DIE 2026 · ÁREA DE EXPOSITORES
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#0A192F', marginBottom: '16px' }}>
                Especificaciones de Stand
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                Espacios diseñados para la interacción directa con estudiantes de ingeniería, investigadores y profesionales del sector tecnológico de la UNAM.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>MODALIDAD 1</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#0A192F' }}>2 x 1 metros</div>
                  <div style={{ fontSize: '13px', color: '#475569', marginTop: '4px' }}>Incluido en paquete Puma</div>
                </div>
                <div style={{ background: '#FFFFFF', padding: '18px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>MODALIDAD 2</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#0A192F' }}>3 x 1 metros</div>
                  <div style={{ fontSize: '13px', color: '#475569', marginTop: '4px' }}>Puma Plata & Oro</div>
                </div>
              </div>

              <div style={{
                padding: '20px',
                borderRadius: '14px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#EFF6FF',
                  color: '#1D4ED8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Users size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>
                    Horario de Exhibición
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#475569' }}>
                    10:00 AM a 6:00 PM (21 al 24 de Septiembre 2026)
                  </div>
                </div>
              </div>
            </div>

            {/* What is Included & Allowed Elements */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Include checklist */}
              <div style={{
                background: '#FFFFFF',
                border: '1.5px solid #CBD5E1',
                borderRadius: '20px',
                padding: '32px'
              }}>
                <h4 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', marginBottom: '20px' }}>
                  ¿Qué incluye cada Stand?
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#DBEAFE', color: '#1E40AF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Wifi size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0A192F' }}>Conexión WI-FI</div>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>Alta velocidad dedicada</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#FEF3C7', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Zap size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0A192F' }}>Conexión Eléctrica</div>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>Multicontactos regulados</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Layout size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0A192F' }}>Mobiliario Completo</div>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>Mesa institucional + 2 Sillas</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proposed elements */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '32px'
              }}>
                <h4 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', marginBottom: '18px' }}>
                  Propuesta de Elementos para Expositores
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0A192F' }} />
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B' }}>Carteles y Roll-ups de marca corporativa</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0A192F' }} />
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B' }}>Trípticos, folletos informativos y material promocional</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0A192F' }} />
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#1E293B' }}>Presentaciones digitales en pantallas o dispositivos interactivos</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
