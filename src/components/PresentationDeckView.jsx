import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Award, 
  Check, 
  Wifi, 
  Zap, 
  Layout, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Maximize2, 
  Minimize2, 
  Presentation,
  Target,
  Share2,
  Handshake,
  Network,
  ShieldCheck,
  Calendar,
  Sparkles,
  User,
  Mic,
  Map,
  Compass,
  ArrowRight
} from 'lucide-react';

export default function PresentationDeckView({ onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isEditingFlyer, setIsEditingFlyer] = useState(false);
  const [flyerTheme, setFlyerTheme] = useState('navy'); // 'navy' | 'dark' | 'light'

  const [flyers, setFlyers] = useState({
    promo: {
      tag: 'FLYER PROMOCIONAL DEL EVENTO',
      headline: 'Sé parte del Futuro Tecnológico en Semana DIE 2026',
      subheadline: 'Conferencias Magistrales · Mesas Redondas · Expo DIE · Hackathon de Innovación de 48 Horas con las empresas líderes de tecnología en México.',
      date: '21 al 24 de Septiembre 2026',
      venue: 'Facultad de Ingeniería UNAM',
      cta: 'die.unam.mx/semanadie'
    },
    hackathon: {
      tag: 'RETO 48 HORAS CONTINUAS',
      title: 'Hackathon Semana DIE 2026',
      description: 'Demuestra tu talento en equipos multidisciplinarios. Resuelve desafíos reales en Electrónica, IA, Robótica y Energía Sustentable.',
      tracksText: '5 Tracks Oficiales',
      mentoringText: 'Asesoría de Expertos UNAM e Industria'
    },
    speaker: {
      tag: 'SPEAKER INVITADO',
      talkTitle: '"Inteligencia Artificial y Redes Eléctricas del Futuro"',
      speakerName: 'Dra. Elena Gómez Torres',
      role: 'Directora de Innovación Tecnológica · Aliado Estratégico UNAM',
      photoUrl: '',
      date: '21 Sept 2026',
      time: '11:00 AM',
      venue: 'Auditorio Principal FI'
    },
    panel: {
      tag: 'MESA DE DEBATE E INNOVACIÓN',
      title: 'Panel de Expertos: Retos Tecnológicos México 2026–2030',
      description: 'Un encuentro de ideas entre líderes corporativos, investigadores de la UNAM y reguladores del sector industrial.',
      panelists: [
        { name: 'Dr. Fernando Reyes', role: 'Investigador Eléctrica UNAM' },
        { name: 'Ing. Mariana Salazar', role: 'Directora de Redes Inteligentes' },
        { name: 'Mtro. Carlos Mendoza', role: 'VP de Telecomunicaciones' },
        { name: 'Dra. Claudia Vargas', role: 'Especialista en Transmisión' }
      ]
    }
  });

  const totalSlides = 12;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullScreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullScreen(false);
    }
  };

  const slideTitles = [
    'Portada Oficial',
    'Objetivos Institucionales',
    'División DIE en Cifras',
    'Impacto del Evento',
    'Tipos de Aportación',
    'Especificaciones de Stand',
    'Directorio Institucional',
    'Flyer Promo · Semana DIE',
    'Flyer Promo · Hackathon 48h',
    'Flyer Promo · Speaker Magistral',
    'Flyer Promo · Paneles & Mesas Redondas',
    'Plano & Mapa ExpoDIE'
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#070C1A',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: '#FFFFFF',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Top Controls Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 28px',
        background: '#0A1329',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            background: '#FFFFFF',
            padding: '4px 10px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <img src="/Logo-UNAM.png" alt="UNAM" style={{ height: '22px' }} />
            <img src="/escudofi_azul-modified.png" alt="FI" style={{ height: '22px' }} />
            <img src="/logo-criptounam.png" alt="CriptoUNAM" style={{ height: '22px' }} />
            <img src="/LogoSemanaDIE.png" alt="DIE" style={{ height: '22px' }} />
          </div>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#F2C24C' }}>
            DOSSIER INSTITUCIONAL PPT · {slideTitles[currentSlide]}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {currentSlide >= 7 && currentSlide <= 10 && (
            <>
              <button
                onClick={() => setIsEditingFlyer(!isEditingFlyer)}
                style={{
                  background: isEditingFlyer ? '#F2C24C' : 'rgba(242, 194, 76, 0.2)',
                  border: '1px solid #D59F0F',
                  color: isEditingFlyer ? '#0A192F' : '#F2C24C',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  fontWeight: 800
                }}
              >
                <Sparkles size={16} /> {isEditingFlyer ? 'Cerrar Editor' : '🎨 Diseñar Flyer'}
              </button>
              <button
                onClick={() => window.print()}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#FFFFFF',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  fontWeight: 700
                }}
                title="Imprimir o exportar diapositiva como PDF / Imagen"
              >
                🖨️ Exportar Flyer
              </button>
            </>
          )}

          <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 600 }}>
            Slide {currentSlide + 1} / {totalSlides}
          </span>
          <button
            onClick={toggleFullScreen}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#FFFFFF',
              padding: '7px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: 600
            }}
          >
            {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />} Pantalla Completa
          </button>
          <button
            onClick={onClose}
            style={{
              background: '#EF4444',
              border: 'none',
              color: '#FFFFFF',
              padding: '7px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: 700
            }}
          >
            <X size={16} /> Salir del Modo PPT
          </button>
        </div>
      </div>

      {/* Slide Area */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 40px',
        overflowY: 'auto'
      }}>
        <div
          className="presentation-slide-print"
          style={{
            width: '100%',
            maxWidth: '1240px',
            minHeight: '620px',
            background: '#FFFFFF',
            color: '#0A192F',
            borderRadius: '24px',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
            padding: '40px 52px',
            display: 'flex',
            flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative'
        }}>
          
          {/* SLIDE 0: PORTADA */}
          {currentSlide === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: 1 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                marginBottom: '32px',
                padding: '16px 32px',
                borderRadius: '16px',
                background: '#F8FAFC',
                border: '1px solid #CBD5E1'
              }}>
                <img src="/Logo-UNAM.png" alt="UNAM" style={{ height: '68px' }} />
                <img src="/escudofi_azul-modified.png" alt="FI" style={{ height: '68px' }} />
                <img src="/CI8N.png" alt="CI8N" style={{ height: '62px' }} />
                <img src="/logo-criptounam.png" alt="CriptoUNAM" style={{ height: '62px' }} />
                <div style={{ width: '2px', height: '48px', background: '#CBD5E1' }} />
                <img src="/LogoSemanaDIE.png" alt="DIE" style={{ height: '68px' }} />
              </div>

              <div style={{
                padding: '6px 18px',
                borderRadius: '999px',
                background: '#FEF3C7',
                color: '#B45309',
                fontSize: '14px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                marginBottom: '16px'
              }}>
                POSGRADO INTERNACIONAL & VINCULACIÓN INSTITUCIONAL
              </div>

              <h1 style={{
                fontSize: 'clamp(34px, 4vw, 52px)',
                fontWeight: 900,
                color: '#0A192F',
                lineHeight: 1.15,
                marginBottom: '16px'
              }}>
                Semana DIE 2026<br />
                <span style={{ color: '#D59F0F' }}>Congreso & Hackathon de Innovación</span>
              </h1>

              <p style={{
                fontSize: '19px',
                color: '#475569',
                maxWidth: '720px',
                lineHeight: 1.6,
                marginBottom: '30px'
              }}>
                Facultad de Ingeniería, Universidad Nacional Autónoma de México (UNAM)<br />
                <strong>Del 21 al 24 de Septiembre de 2026</strong> · Ciudad Universitaria
              </p>

              <button
                onClick={() => setCurrentSlide(1)}
                style={{
                  padding: '14px 32px',
                  borderRadius: '12px',
                  background: '#0A192F',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '15px',
                  cursor: 'pointer'
                }}
              >
                Ver Diapositivas Institucionales →
              </button>
            </div>
          )}

          {/* SLIDE 1: OBJETIVOS */}
          {currentSlide === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                  FACULTAD DE INGENIERÍA UNAM
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0A192F' }}>
                  Objetivos Institucionales
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '22px', flex: 1 }}>
                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <Award size={22} />
                  </div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', marginBottom: '8px' }}>
                    Apoyo y Realización ExpoDIE
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6 }}>
                    Consolidar la realización de la ExpoDIE en la Facultad de Ingeniería como escaparate de innovación y encuentro académico.
                  </p>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <Share2 size={22} />
                  </div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', marginBottom: '8px' }}>
                    Intercambio Industria - Academia
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6 }}>
                    Fomentar el intercambio de conocimientos entre la industria y la academia en el campo de la ingeniería y la tecnología.
                  </p>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <Handshake size={22} />
                  </div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', marginBottom: '8px' }}>
                    Colaboración Tecnológica Aplicada
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6 }}>
                    Facilitar la colaboración directa entre empresas y la academia para promover la aplicación práctica de avances tecnológicos.
                  </p>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <Network size={22} />
                  </div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', marginBottom: '8px' }}>
                    Networking & Alianzas Estratégicas
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6 }}>
                    Ofrecer oportunidades de networking y establecimiento de alianzas estratégicas entre profesionales, académicos y líderes del sector.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: DIE EN CIFRAS E ISO */}
          {currentSlide === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                  COMUNIDAD Y CALIDAD CERTIFICADA
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0A192F' }}>
                  División de Ingeniería Eléctrica en Cifras
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', marginBottom: '22px' }}>
                <div style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: '18px', padding: '22px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#1E40AF', marginBottom: '8px' }}>
                    CERTIFICACIONES DE CALIDAD ISO
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#0A192F', marginBottom: '4px' }}>
                    Norma ISO 9001 en 9 Laboratorios
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#1D4ED8' }}>
                    1 Laboratorio de Investigación con ISO 17025
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '22px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#64748B', marginBottom: '8px' }}>
                    3 PROGRAMAS ACREDITADOS INTERNACIONALMENTE
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px', fontWeight: 700, color: '#0A192F' }}>
                    <div>• Ingeniería Eléctrica Electrónica</div>
                    <div>• Ingeniería en Computación</div>
                    <div>• Ingeniería en Telecomunicaciones</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
                <div style={{ background: '#0A192F', color: '#FFFFFF', padding: '24px', borderRadius: '18px', textAlign: 'center' }}>
                  <div style={{ fontSize: '34px', fontWeight: 900, color: '#F2C24C' }}>+4,200</div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#CBD5E1', marginTop: '6px' }}>Alumnos Activos</div>
                </div>
                <div style={{ background: '#0A192F', color: '#FFFFFF', padding: '24px', borderRadius: '18px', textAlign: 'center' }}>
                  <div style={{ fontSize: '34px', fontWeight: 900, color: '#FFFFFF' }}>2,415</div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#CBD5E1', marginTop: '6px' }}>Académicos</div>
                </div>
                <div style={{ background: '#0A192F', color: '#FFFFFF', padding: '24px', borderRadius: '18px', textAlign: 'center' }}>
                  <div style={{ fontSize: '34px', fontWeight: 900, color: '#F2C24C' }}>+50</div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#CBD5E1', marginTop: '6px' }}>Laboratorios</div>
                </div>
                <div style={{ background: '#0A192F', color: '#FFFFFF', padding: '24px', borderRadius: '18px', textAlign: 'center' }}>
                  <div style={{ fontSize: '34px', fontWeight: 900, color: '#FFFFFF' }}>+500</div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#CBD5E1', marginTop: '6px' }}>Titulados en 2025</div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 3: MÉTRICAS DEL EVENTO SEMANA DIE */}
          {currentSlide === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                  CONFERENCIAS · MESAS REDONDAS · WORKSHOPS
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0A192F' }}>
                  Impacto del Evento Semana DIE
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px', marginBottom: '28px' }}>
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                  <div style={{ fontSize: '40px', fontWeight: 900, color: '#0A192F' }}>+3,000</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#1E293B', marginTop: '8px' }}>Asistentes</div>
                  <div style={{ fontSize: '13px', color: '#64748B', marginTop: '6px' }}>Estudiantes, tesistas y profesionales</div>
                </div>

                <div style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                  <div style={{ fontSize: '40px', fontWeight: 900, color: '#1D4ED8' }}>+70 H</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#1E40AF', marginTop: '8px' }}>Contenido Streaming</div>
                  <div style={{ fontSize: '13px', color: '#334155', marginTop: '6px' }}>Transmisiones en vivo FI</div>
                </div>

                <div style={{ background: '#FFFBEB', border: '1.5px solid #FDE68A', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                  <div style={{ fontSize: '40px', fontWeight: 900, color: '#B45309' }}>+30</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#92400E', marginTop: '8px' }}>Expertos en Industria</div>
                  <div style={{ fontSize: '13px', color: '#78350F', marginTop: '6px' }}>Ponentes y líderes tecnológicos</div>
                </div>
              </div>

              <div style={{ background: '#0A192F', color: '#FFFFFF', padding: '22px 30px', borderRadius: '18px' }}>
                <div style={{ fontSize: '16px', fontWeight: 800, marginBottom: '6px' }}>
                  Escaparate Tecnológico UNAM
                </div>
                <p style={{ fontSize: '14px', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                  Expositores históricos: Amazon, Microsoft, Oracle, Cisco, Schneider Electric, Siemens, Condumex, Hitachi Energy, Fluke, DEHN y PC PUMA.
                </p>
              </div>
            </div>
          )}

          {/* SLIDE 4: TABLA TIPOS DE APORTACIÓN */}
          {currentSlide === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                    PROPUESTA INSTITUCIONAL DE PATROCINIOS
                  </div>
                  <h2 style={{ fontSize: '30px', fontWeight: 900, color: '#0A192F' }}>
                    Tipos de Aportación
                  </h2>
                </div>
                <div style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                  Semana DIE 2026 · FI UNAM
                </div>
              </div>

              <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid #CBD5E1' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#0A192F', color: '#FFFFFF' }}>
                      <th style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 800 }}>Concepto / Beneficio</th>
                      <th style={{ padding: '13px 12px', textAlign: 'center' }}>
                        <div>Goya</div>
                        <div style={{ fontSize: '11px', color: '#CBD5E1' }}>$15,000.00</div>
                      </th>
                      <th style={{ padding: '13px 12px', textAlign: 'center' }}>
                        <div>Puma</div>
                        <div style={{ fontSize: '11px', color: '#CBD5E1' }}>$25,000.00</div>
                      </th>
                      <th style={{ padding: '13px 12px', textAlign: 'center' }}>
                        <div>Puma Plata</div>
                        <div style={{ fontSize: '11px', color: '#CBD5E1' }}>$35,000.00</div>
                      </th>
                      <th style={{ padding: '13px 12px', textAlign: 'center', background: '#1E293B' }}>
                        <div style={{ color: '#F2C24C' }}>Puma Oro</div>
                        <div style={{ fontSize: '11px', color: '#F2C24C' }}>$50,000.00</div>
                      </th>
                      <th style={{ padding: '13px 12px', textAlign: 'center' }}>
                        <div>Todo Incluido</div>
                        <div style={{ fontSize: '11px', color: '#CBD5E1' }}>Personalizado</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: 'Logotipo en página web del evento', vals: [true, true, true, true, true] },
                      { label: 'Logotipo en canales de comunicación digitales (FI UNAM)', vals: [false, false, true, true, true] },
                      { label: 'Presencia digital al inicio de cada evento en auditorio', vals: [true, true, true, true, true] },
                      { label: 'Flyer de agradecimiento por correo', vals: [false, true, true, true, true] },
                      { label: 'Posteo de agradecimiento en redes sociales', vals: [false, false, false, true, true] },
                      { label: 'Stand de 2x1', vals: [false, true, false, false, false] },
                      { label: 'Stand de 3x1', vals: [false, false, true, true, true] },
                      { label: 'Espacio para una conferencia magistral', vals: [true, false, true, true, true] },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                        <td style={{ padding: '9px 16px', fontSize: '12.5px', fontWeight: 700, color: '#1E293B' }}>{row.label}</td>
                        {row.vals.map((has, colIdx) => (
                          <td key={colIdx} style={{ padding: '9px 12px', textAlign: 'center', borderLeft: '1px solid #E2E8F0' }}>
                            {has ? (
                              <span style={{ color: '#16A34A', fontWeight: 900 }}>✔</span>
                            ) : (
                              <span style={{ color: '#CBD5E1' }}>—</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SLIDE 5: STAND Y ELEMENTOS */}
          {currentSlide === 5 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                  ESPACIOS E INFRAESTRUCTURA DE EXHIBICIÓN
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0A192F' }}>
                  Stand Semana DIE 2026
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '20px', padding: '24px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', marginBottom: '14px' }}>
                    Dimensiones de Stand
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ padding: '14px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: '#0A192F' }}>2 x 1 metros</div>
                      <div style={{ fontSize: '13px', color: '#64748B' }}>Incluido en Paquete Puma</div>
                    </div>
                    <div style={{ padding: '14px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: '#0A192F' }}>3 x 1 metros</div>
                      <div style={{ fontSize: '13px', color: '#64748B' }}>Paquetes Puma Plata y Puma Oro</div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: '20px', padding: '24px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#1E40AF', marginBottom: '14px' }}>
                    ¿Qué Incluye?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>Horario de Exhibición</div>
                      <div style={{ fontSize: '13px', color: '#334155' }}>10:00 AM a 6:00 PM</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>Conexión WI-FI</div>
                      <div style={{ fontSize: '13px', color: '#334155' }}>Red institucional dedicada</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>Conexión Eléctrica & Mobiliario</div>
                      <div style={{ fontSize: '13px', color: '#334155' }}>Mesa oficial y 2 sillas por stand</div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#FFFBEB', border: '1.5px solid #FDE68A', borderRadius: '20px', padding: '24px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#92400E', marginBottom: '14px' }}>
                    Propuesta de Elementos
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>Carteles Corporativos</div>
                      <div style={{ fontSize: '13px', color: '#475569' }}>Roll-ups del patrocinador</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>Trípticos y Folletos</div>
                      <div style={{ fontSize: '13px', color: '#475569' }}>Literatura promocional de marca</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>Presentaciones Digitales</div>
                      <div style={{ fontSize: '13px', color: '#475569' }}>Pantallas interactivas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 6: DIRECTORIO Y CONTACTO */}
          {currentSlide === 6 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                  COORDINACIÓN Y VINCULACIÓN
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0A192F' }}>
                  Directorio Institucional y Contacto
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '22px' }}>
                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>DIRECCIÓN OFICIAL</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F' }}>Facultad de Ingeniería UNAM</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '14.5px', color: '#334155', lineHeight: 1.6 }}>
                    Ciudad Universitaria, Coyoacán 04510<br />
                    CDMX, México
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>TELÉFONOS INSTITUCIONALES</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F' }}>Atención Directa</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#0A192F' }}>
                    55 5622 3116 / 55 5622 2128
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>CORREO ELECTRÓNICO</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F' }}>Transformación Digital</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#D59F0F' }}>
                    transformaciondigital@unam.mx
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Clock size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>HORARIO DE ATENCIÓN</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F' }}>Lunes - Viernes</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '14.5px', color: '#334155', lineHeight: 1.6 }}>
                    <strong>9:00 AM - 02:00 PM</strong><br />
                    <strong>4:00 PM - 06:00 PM</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 7: FLYER PROMOCIONAL · SEMANA DIE */}
          {currentSlide === 7 && (
            <div style={{ display: 'flex', gap: '24px', flex: 1, width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: flyerTheme === 'light' ? '#FFFFFF' : (flyerTheme === 'dark' ? '#020617' : '#0A192F'), color: flyerTheme === 'light' ? '#0A192F' : '#FFFFFF', borderRadius: '20px', padding: '36px', border: '2px solid #D59F0F', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <img src="/Logo-UNAM.png" alt="UNAM" style={{ height: '40px' }} />
                    <img src="/escudofi_azul-modified.png" alt="FI" style={{ height: '40px' }} />
                    <img src="/logo-criptounam.png" alt="CriptoUNAM" style={{ height: '40px' }} />
                    <img src="/LogoSemanaDIE.png" alt="DIE" style={{ height: '40px' }} />
                  </div>
                  <div style={{ padding: '6px 14px', borderRadius: '999px', background: '#F2C24C', color: '#0A192F', fontWeight: 800, fontSize: '12px' }}>
                    {flyers.promo.tag}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '32px', alignItems: 'center', flex: 1 }}>
                  <div>
                    <div style={{ fontSize: '14px', color: '#F2C24C', fontWeight: 800, letterSpacing: '0.08em', marginBottom: '10px' }}>
                      CONGRESO INTERNACIONAL DE INGENIERÍA
                    </div>
                    <h2 style={{ fontSize: '36px', fontWeight: 900, lineHeight: 1.15, marginBottom: '16px', color: flyerTheme === 'light' ? '#0A192F' : '#FFFFFF' }}>
                      {flyers.promo.headline}
                    </h2>
                    <p style={{ fontSize: '15.5px', color: flyerTheme === 'light' ? '#475569' : '#CBD5E1', lineHeight: 1.6, marginBottom: '24px' }}>
                      {flyers.promo.subheadline}
                    </p>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{ background: flyerTheme === 'light' ? '#F1F5F9' : 'rgba(255,255,255,0.08)', padding: '12px 18px', borderRadius: '12px', border: '1px solid rgba(213,159,15,0.3)' }}>
                        <div style={{ fontSize: '12px', color: '#94A3B8' }}>FECHA OFICIAL</div>
                        <div style={{ fontSize: '15px', fontWeight: 800, color: '#F2C24C' }}>{flyers.promo.date}</div>
                      </div>
                      <div style={{ background: flyerTheme === 'light' ? '#F1F5F9' : 'rgba(255,255,255,0.08)', padding: '12px 18px', borderRadius: '12px', border: '1px solid rgba(213,159,15,0.3)' }}>
                        <div style={{ fontSize: '12px', color: '#94A3B8' }}>SEDE PRESENCIAL</div>
                        <div style={{ fontSize: '15px', fontWeight: 800, color: flyerTheme === 'light' ? '#0A192F' : '#FFFFFF' }}>{flyers.promo.venue}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: '#FFFFFF', color: '#0A192F', padding: '24px', borderRadius: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(213,159,15,0.4)' }}>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F', marginBottom: '12px' }}>
                      REGISTRO Y DOSSIER DE PATROCINIO
                    </div>
                    <div style={{ width: '130px', height: '130px', background: '#F8FAFC', border: '2px dashed #0A192F', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', fontWeight: 800, fontSize: '13px', color: '#475569' }}>
                      [ CÓDIGO QR FI ]
                    </div>
                    <div style={{ fontSize: '13px', color: '#475569' }}>
                      Entra a <strong>{flyers.promo.cta}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flyer Editor Panel */}
              {isEditingFlyer && (
                <div style={{ width: '330px', background: '#F8FAFC', color: '#0A192F', borderRadius: '18px', padding: '22px', border: '1px solid #CBD5E1', display: 'flex', flexDirection: 'column', gap: '14px', overflowY: 'auto', maxHeight: '580px' }}>
                  <div style={{ fontWeight: 800, fontSize: '15px', color: '#0A192F', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                    🎨 Personalizar Flyer Promo
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Tema de Color</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => setFlyerTheme('navy')} style={{ flex: 1, padding: '6px', borderRadius: '8px', border: flyerTheme === 'navy' ? '2px solid #D59F0F' : '1px solid #CBD5E1', background: '#0A192F', color: '#FFF', fontSize: '12px', fontWeight: 700 }}>Institucional</button>
                      <button onClick={() => setFlyerTheme('dark')} style={{ flex: 1, padding: '6px', borderRadius: '8px', border: flyerTheme === 'dark' ? '2px solid #D59F0F' : '1px solid #CBD5E1', background: '#020617', color: '#FFF', fontSize: '12px', fontWeight: 700 }}>Oscuro</button>
                      <button onClick={() => setFlyerTheme('light')} style={{ flex: 1, padding: '6px', borderRadius: '8px', border: flyerTheme === 'light' ? '2px solid #D59F0F' : '1px solid #CBD5E1', background: '#FFF', color: '#0A192F', fontSize: '12px', fontWeight: 700 }}>Blanco</button>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Título Principal</label>
                    <input
                      type="text"
                      value={flyers.promo.headline}
                      onChange={(e) => setFlyers({ ...flyers, promo: { ...flyers.promo, headline: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Descripción</label>
                    <textarea
                      rows={3}
                      value={flyers.promo.subheadline}
                      onChange={(e) => setFlyers({ ...flyers, promo: { ...flyers.promo, subheadline: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', fontFamily: 'inherit' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Fecha Oficial</label>
                    <input
                      type="text"
                      value={flyers.promo.date}
                      onChange={(e) => setFlyers({ ...flyers, promo: { ...flyers.promo, date: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Enlace / Web</label>
                    <input
                      type="text"
                      value={flyers.promo.cta}
                      onChange={(e) => setFlyers({ ...flyers, promo: { ...flyers.promo, cta: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SLIDE 8: FLYER PROMOCIONAL · HACKATHON 48H */}
          {currentSlide === 8 && (
            <div style={{ display: 'flex', gap: '24px', flex: 1, width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: flyerTheme === 'light' ? '#FFFFFF' : '#0A192F', color: flyerTheme === 'light' ? '#0A192F' : '#FFFFFF', borderRadius: '20px', padding: '36px', border: '2px solid #38BDF8', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <img src="/Logo-UNAM.png" alt="UNAM" style={{ height: '36px' }} />
                    <img src="/escudofi_azul-modified.png" alt="FI" style={{ height: '36px' }} />
                    <img src="/logo-criptounam.png" alt="CriptoUNAM" style={{ height: '36px' }} />
                    <img src="/LogoSemanaDIE.png" alt="DIE" style={{ height: '36px' }} />
                  </div>
                  <div style={{ padding: '6px 14px', borderRadius: '999px', background: '#38BDF8', color: '#0A192F', fontWeight: 800, fontSize: '12px' }}>
                    {flyers.hackathon.tag}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', alignItems: 'center', flex: 1 }}>
                  <div>
                    <h2 style={{ fontSize: '38px', fontWeight: 900, lineHeight: 1.15, marginBottom: '16px' }}>
                      {flyers.hackathon.title}
                    </h2>
                    <p style={{ fontSize: '16px', color: flyerTheme === 'light' ? '#475569' : '#CBD5E1', lineHeight: 1.6, marginBottom: '24px' }}>
                      {flyers.hackathon.description}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                      <div style={{ background: flyerTheme === 'light' ? '#F8FAFC' : 'rgba(255,255,255,0.08)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(56,189,248,0.3)' }}>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: '#F2C24C' }}>{flyers.hackathon.tracksText}</div>
                        <div style={{ fontSize: '13px', color: flyerTheme === 'light' ? '#475569' : '#CBD5E1' }}>Retos de Industria UNAM</div>
                      </div>
                      <div style={{ background: flyerTheme === 'light' ? '#F8FAFC' : 'rgba(255,255,255,0.08)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(56,189,248,0.3)' }}>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: '#38BDF8' }}>Mentorías en Vivo</div>
                        <div style={{ fontSize: '13px', color: flyerTheme === 'light' ? '#475569' : '#CBD5E1' }}>{flyers.hackathon.mentoringText}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: '#1E293B', color: '#FFFFFF', padding: '28px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#F2C24C', marginBottom: '14px' }}>
                      ¿Cómo participar?
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#E2E8F0' }}>
                      <div>1. Forma tu equipo de 3 a 5 estudiantes</div>
                      <div>2. Elige un Track de Innovación Tecnológica</div>
                      <div>3. Desarrolla tu prototipo en 48 horas</div>
                      <div>4. Presenta ante jurado académico e industrial</div>
                    </div>
                  </div>
                </div>
              </div>

              {isEditingFlyer && (
                <div style={{ width: '330px', background: '#F8FAFC', color: '#0A192F', borderRadius: '18px', padding: '22px', border: '1px solid #CBD5E1', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ fontWeight: 800, fontSize: '15px', color: '#0A192F', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                    🎨 Personalizar Hackathon
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Título</label>
                    <input
                      type="text"
                      value={flyers.hackathon.title}
                      onChange={(e) => setFlyers({ ...flyers, hackathon: { ...flyers.hackathon, title: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Descripción</label>
                    <textarea
                      rows={3}
                      value={flyers.hackathon.description}
                      onChange={(e) => setFlyers({ ...flyers, hackathon: { ...flyers.hackathon, description: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', fontFamily: 'inherit' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Tracks</label>
                    <input
                      type="text"
                      value={flyers.hackathon.tracksText}
                      onChange={(e) => setFlyers({ ...flyers, hackathon: { ...flyers.hackathon, tracksText: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SLIDE 9: FLYER PROMOCIONAL · SPEAKER MAGISTRAL */}
          {currentSlide === 9 && (
            <div style={{ display: 'flex', gap: '24px', flex: 1, width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: flyerTheme === 'navy' ? '#0A192F' : '#F8FAFC', color: flyerTheme === 'navy' ? '#FFFFFF' : '#0A192F', borderRadius: '20px', padding: '34px', border: '2px solid #D59F0F' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                    PLANTILLA OFICIAL · CONFERENCIA MAGISTRAL
                  </div>
                  <span style={{ padding: '4px 12px', borderRadius: '999px', background: flyerTheme === 'navy' ? '#F2C24C' : '#0A192F', color: flyerTheme === 'navy' ? '#0A192F' : '#F2C24C', fontWeight: 800, fontSize: '11px' }}>
                    {flyers.speaker.tag}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '36px', alignItems: 'center', flex: 1 }}>
                  {/* Speaker Photo / Dynamic Headshot */}
                  <div style={{
                    width: '100%',
                    height: '270px',
                    borderRadius: '20px',
                    background: '#E2E8F0',
                    border: '3px solid #D59F0F',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#475569',
                    textAlign: 'center',
                    position: 'relative'
                  }}>
                    {flyers.speaker.photoUrl ? (
                      <img
                        src={flyers.speaker.photoUrl}
                        alt={flyers.speaker.speakerName}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ padding: '20px' }}>
                        <User size={56} strokeWidth={1.5} color="#0A192F" style={{ marginBottom: '12px' }} />
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>
                          ESPACIO FOTO SPEAKER
                        </div>
                        <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '6px' }}>
                          Pega una URL de foto en el panel de edición
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Speaker Info Area */}
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 800, color: flyerTheme === 'navy' ? '#F2C24C' : '#1E40AF', marginBottom: '8px' }}>
                      CONFERENCIA MAGISTRAL DE INAUGURACIÓN
                    </div>
                    <h2 style={{ fontSize: '30px', fontWeight: 900, marginBottom: '14px', lineHeight: 1.2 }}>
                      {flyers.speaker.talkTitle}
                    </h2>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: flyerTheme === 'navy' ? '#F2C24C' : '#0A192F', marginBottom: '4px' }}>
                      {flyers.speaker.speakerName}
                    </div>
                    <div style={{ fontSize: '15px', color: flyerTheme === 'navy' ? '#CBD5E1' : '#475569', marginBottom: '24px' }}>
                      {flyers.speaker.role}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                      <div style={{ background: flyerTheme === 'navy' ? 'rgba(255,255,255,0.08)' : '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
                        <div style={{ fontSize: '12px', color: flyerTheme === 'navy' ? '#94A3B8' : '#64748B', fontWeight: 700 }}>FECHA</div>
                        <div style={{ fontSize: '14.5px', fontWeight: 800 }}>{flyers.speaker.date}</div>
                      </div>
                      <div style={{ background: flyerTheme === 'navy' ? 'rgba(255,255,255,0.08)' : '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
                        <div style={{ fontSize: '12px', color: flyerTheme === 'navy' ? '#94A3B8' : '#64748B', fontWeight: 700 }}>HORARIO</div>
                        <div style={{ fontSize: '14.5px', fontWeight: 800 }}>{flyers.speaker.time}</div>
                      </div>
                      <div style={{ background: flyerTheme === 'navy' ? 'rgba(255,255,255,0.08)' : '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid #CBD5E1' }}>
                        <div style={{ fontSize: '12px', color: flyerTheme === 'navy' ? '#94A3B8' : '#64748B', fontWeight: 700 }}>LUGAR</div>
                        <div style={{ fontSize: '14.5px', fontWeight: 800 }}>{flyers.speaker.venue}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {isEditingFlyer && (
                <div style={{ width: '330px', background: '#F8FAFC', color: '#0A192F', borderRadius: '18px', padding: '22px', border: '1px solid #CBD5E1', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', maxHeight: '580px' }}>
                  <div style={{ fontWeight: 800, fontSize: '15px', color: '#0A192F', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                    🎨 Personalizar Speaker
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Foto Speaker (URL)</label>
                    <input
                      type="text"
                      placeholder="https://..."
                      value={flyers.speaker.photoUrl}
                      onChange={(e) => setFlyers({ ...flyers, speaker: { ...flyers.speaker, photoUrl: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '12.5px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Nombre del Ponente</label>
                    <input
                      type="text"
                      value={flyers.speaker.speakerName}
                      onChange={(e) => setFlyers({ ...flyers, speaker: { ...flyers.speaker, speakerName: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Cargo / Institución</label>
                    <input
                      type="text"
                      value={flyers.speaker.role}
                      onChange={(e) => setFlyers({ ...flyers, speaker: { ...flyers.speaker, role: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Título Conferencia</label>
                    <input
                      type="text"
                      value={flyers.speaker.talkTitle}
                      onChange={(e) => setFlyers({ ...flyers, speaker: { ...flyers.speaker, talkTitle: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Fecha</label>
                      <input
                        type="text"
                        value={flyers.speaker.date}
                        onChange={(e) => setFlyers({ ...flyers, speaker: { ...flyers.speaker, date: e.target.value } })}
                        style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '12.5px' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Hora</label>
                      <input
                        type="text"
                        value={flyers.speaker.time}
                        onChange={(e) => setFlyers({ ...flyers, speaker: { ...flyers.speaker, time: e.target.value } })}
                        style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '12.5px' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SLIDE 10: FLYER PROMOCIONAL · PANELES Y MESAS REDONDAS */}
          {currentSlide === 10 && (
            <div style={{ display: 'flex', gap: '24px', flex: 1, width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: flyerTheme === 'navy' ? '#0A192F' : '#FFFFFF', color: flyerTheme === 'navy' ? '#FFFFFF' : '#0A192F', borderRadius: '20px', padding: '34px', border: '2px solid #CBD5E1' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                  <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                    PLANTILLA OFICIAL · PANELES Y MESAS REDONDAS
                  </div>
                  <span style={{ padding: '4px 12px', borderRadius: '999px', background: '#EFF6FF', color: '#1E40AF', fontWeight: 800, fontSize: '11px' }}>
                    {flyers.panel.tag}
                  </span>
                </div>

                <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '10px' }}>
                  {flyers.panel.title}
                </h2>
                <p style={{ fontSize: '15px', color: flyerTheme === 'navy' ? '#CBD5E1' : '#475569', marginBottom: '24px' }}>
                  {flyers.panel.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', flex: 1 }}>
                  {flyers.panel.panelists.map((panelist, idx) => (
                    <div key={idx} style={{ background: flyerTheme === 'navy' ? 'rgba(255,255,255,0.08)' : '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '16px', padding: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                        <Mic size={26} color="#0A192F" />
                      </div>
                      <div style={{ fontSize: '15px', fontWeight: 800 }}>{panelist.name}</div>
                      <div style={{ fontSize: '12.5px', color: flyerTheme === 'navy' ? '#94A3B8' : '#64748B', marginTop: '4px' }}>{panelist.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {isEditingFlyer && (
                <div style={{ width: '330px', background: '#F8FAFC', color: '#0A192F', borderRadius: '18px', padding: '22px', border: '1px solid #CBD5E1', display: 'flex', flexDirection: 'column', gap: '14px', overflowY: 'auto', maxHeight: '580px' }}>
                  <div style={{ fontWeight: 800, fontSize: '15px', color: '#0A192F', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                    🎨 Personalizar Panel
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>Título del Panel</label>
                    <input
                      type="text"
                      value={flyers.panel.title}
                      onChange={(e) => setFlyers({ ...flyers, panel: { ...flyers.panel, title: e.target.value } })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                    />
                  </div>
                  {flyers.panel.panelists.map((p, idx) => (
                    <div key={idx} style={{ background: '#FFFFFF', padding: '10px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0A192F', marginBottom: '4px' }}>Panelista {idx + 1}</div>
                      <input
                        type="text"
                        placeholder="Nombre"
                        value={p.name}
                        onChange={(e) => {
                          const updated = [...flyers.panel.panelists];
                          updated[idx].name = e.target.value;
                          setFlyers({ ...flyers, panel: { ...flyers.panel, panelists: updated } });
                        }}
                        style={{ width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '12px', marginBottom: '4px' }}
                      />
                      <input
                        type="text"
                        placeholder="Cargo / Institución"
                        value={p.role}
                        onChange={(e) => {
                          const updated = [...flyers.panel.panelists];
                          updated[idx].role = e.target.value;
                          setFlyers({ ...flyers, panel: { ...flyers.panel, panelists: updated } });
                        }}
                        style={{ width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '12px' }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SLIDE 11: MAPA ARQUITECTÓNICO DE LA EXPODIE */}
          {currentSlide === 11 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                    CROQUIS Y DISTRIBUCIÓN DE ESPACIOS
                  </div>
                  <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#0A192F' }}>
                    Mapa de la ExpoDIE · Facultad de Ingeniería
                  </h2>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ padding: '6px 14px', borderRadius: '8px', background: '#EFF6FF', color: '#1E40AF', fontWeight: 700, fontSize: '12px' }}>
                    Edificio Principal C.U.
                  </span>
                </div>
              </div>

              {/* Architectural Layout Map visual */}
              <div style={{
                background: '#F8FAFC',
                border: '2px solid #CBD5E1',
                borderRadius: '20px',
                padding: '24px',
                flex: 1,
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr',
                gap: '24px',
                alignItems: 'center'
              }}>
                {/* Graphical map blocks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Top: Auditorium */}
                  <div style={{ background: '#0A192F', color: '#FFFFFF', padding: '20px', borderRadius: '14px', textAlign: 'center', fontWeight: 800, fontSize: '16px' }}>
                    AUDITORIO PRINCIPAL · CONFERENCIAS MAGISTRALES & INAUGURACIÓN
                  </div>

                  {/* Middle: Stand corridor */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                    {['STAND 01 (3x1m)', 'STAND 02 (3x1m)', 'STAND 03 (2x1m)', 'STAND 04 (2x1m)'].map((s, idx) => (
                      <div key={idx} style={{ background: '#EFF6FF', border: '1.5px solid #1D4ED8', color: '#1E40AF', padding: '16px 8px', borderRadius: '10px', textAlign: 'center', fontWeight: 800, fontSize: '12px' }}>
                        {s}
                      </div>
                    ))}
                  </div>

                  {/* Pasillo central */}
                  <div style={{ background: '#E2E8F0', padding: '10px', borderRadius: '8px', textAlign: 'center', color: '#475569', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em' }}>
                    PASILLO CENTRAL DE VINCULACIÓN TECNOLÓGICA & NETWORKING
                  </div>

                  {/* Bottom stands */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                    {['STAND 05 (3x1m)', 'STAND 06 (3x1m)', 'STAND 07 (2x1m)', 'STAND 08 (2x1m)'].map((s, idx) => (
                      <div key={idx} style={{ background: '#FEF3C7', border: '1.5px solid #B45309', color: '#92400E', padding: '16px 8px', borderRadius: '10px', textAlign: 'center', fontWeight: 800, fontSize: '12px' }}>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map legend */}
                <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '16px', padding: '24px' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F', marginBottom: '16px' }}>
                    Simbología del Plano
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#334155' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#0A192F' }} />
                      <span><strong>Auditorio FI:</strong> Conferencias y premiación</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#EFF6FF', border: '1.5px solid #1D4ED8' }} />
                      <span><strong>Stands Puma Oro & Plata:</strong> 3 x 1 metros</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#FEF3C7', border: '1.5px solid #B45309' }} />
                      <span><strong>Stands Puma:</strong> 2 x 1 metros</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#22C55E' }} />
                      <span><strong>Área Hackathon:</strong> Edificio A (48 hrs)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide Footer / Numbering inside card */}
          <div style={{
            borderTop: '1px solid #E2E8F0',
            paddingTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: '#64748B',
            fontWeight: 600
          }}>
            <span>División de Ingeniería Eléctrica · Facultad de Ingeniería UNAM</span>
            <span>Diapositiva {currentSlide + 1} / {totalSlides}</span>
          </div>

        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding: '16px 28px',
        background: '#0A1329',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <button
          onClick={() => setCurrentSlide((p) => Math.max(p - 1, 0))}
          disabled={currentSlide === 0}
          style={{
            padding: '9px 20px',
            borderRadius: '10px',
            background: currentSlide === 0 ? 'rgba(255,255,255,0.08)' : '#FFFFFF',
            color: currentSlide === 0 ? '#64748B' : '#0A192F',
            border: 'none',
            fontWeight: 700,
            cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13.5px'
          }}
        >
          <ChevronLeft size={18} /> Anterior
        </button>

        {/* Slide Selector Dots */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: currentSlide === idx ? '26px' : '10px',
                height: '10px',
                borderRadius: '999px',
                background: currentSlide === idx ? '#F2C24C' : 'rgba(255,255,255,0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title={`Diapositiva ${idx + 1}: ${slideTitles[idx]}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((p) => Math.min(p + 1, totalSlides - 1))}
          disabled={currentSlide === totalSlides - 1}
          style={{
            padding: '9px 20px',
            borderRadius: '10px',
            background: currentSlide === totalSlides - 1 ? 'rgba(255,255,255,0.08)' : '#FFFFFF',
            color: currentSlide === totalSlides - 1 ? '#64748B' : '#0A192F',
            border: 'none',
            fontWeight: 700,
            cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13.5px'
          }}
        >
          Siguiente <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
