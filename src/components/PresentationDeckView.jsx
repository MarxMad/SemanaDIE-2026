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
  Map,
  Compass,
  ArrowRight
} from 'lucide-react';
import { PPT_COPY, TAX_DISCLAIMER, SPONSORSHIP_PHOTOS, EXPO_STAND_PHOTOS } from '../data/sponsorshipCopy';
import { SPONSORSHIP_TIERS_MXN, SPONSORSHIP_TIERS_USD } from '../data/sponsorshipTiers';
import SponsorshipTierTableSlide from './SponsorshipTierTableSlide';
import { HackathonFlyerSlide, SpeakerFlyerSlide, PanelFlyerSlide, ExpoMapSlide } from './PresentationDeckFlyers';

export default function PresentationDeckView({ onClose, lang = 'es', setLang }) {
  const ppt = PPT_COPY[lang];
  const flyers = ppt.flyers;
  const mapCopy = ppt.map;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  const slideTitles = ppt.slideTitles;

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
            {ppt.dossierLabel} · {slideTitles[currentSlide]}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {setLang && (
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              style={{
                background: 'rgba(56, 189, 248, 0.2)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38BDF8',
                padding: '7px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 800
              }}
            >
              {ppt.ui.langLabel} · {ppt.ui.langToggle}
            </button>
          )}

          <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 600 }}>
            {ppt.ui.slide} {currentSlide + 1} / {totalSlides}
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
            {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />} {ppt.ui.fullscreen}
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
                {ppt.cover.tag}
              </div>

              <h1 style={{
                fontSize: 'clamp(34px, 4vw, 52px)',
                fontWeight: 900,
                color: '#0A192F',
                lineHeight: 1.15,
                marginBottom: '16px'
              }}>
                {ppt.cover.brand}<br />
                <span style={{ color: '#D59F0F' }}>{ppt.cover.title}</span>
              </h1>

              <p style={{
                fontSize: '19px',
                color: '#475569',
                maxWidth: '720px',
                lineHeight: 1.6,
                marginBottom: '30px'
              }}>
                {ppt.cover.subtitle}<br />
                <strong>{ppt.cover.date}</strong>
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
                {ppt.cover.cta}
              </button>
            </div>
          )}

          {/* SLIDE 1: OBJETIVOS */}
          {currentSlide === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                  {ppt.objectives.eyebrow}
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0A192F' }}>
                  {ppt.objectives.title}
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '22px', flex: 1 }}>
                {ppt.objectives.items.map((item, i) => {
                  const icons = [Award, Share2, Handshake, Network];
                  const Icon = icons[i];
                  return (
                    <div key={item.title} style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                        <Icon size={22} />
                      </div>
                      <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', marginBottom: '8px' }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6 }}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SLIDE 2: DIE EN CIFRAS E ISO */}
          {currentSlide === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                  {ppt.stats.eyebrow}
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0A192F' }}>
                  {ppt.stats.title}
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', marginBottom: '22px' }}>
                <div style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: '18px', padding: '22px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#1E40AF', marginBottom: '8px' }}>
                    {ppt.stats.isoTitle}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#0A192F', marginBottom: '4px' }}>
                    {ppt.stats.isoLine1}
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#1D4ED8' }}>
                    {ppt.stats.isoLine2}
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '22px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#64748B', marginBottom: '8px' }}>
                    {ppt.stats.programsTitle}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px', fontWeight: 700, color: '#0A192F' }}>
                    {ppt.stats.programs.map((p) => <div key={p}>• {p}</div>)}
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
                {[
                  { val: '+4,200', label: ppt.stats.metrics[0], color: '#F2C24C' },
                  { val: '2,415', label: ppt.stats.metrics[1], color: '#FFFFFF' },
                  { val: '+50', label: ppt.stats.metrics[2], color: '#F2C24C' },
                  { val: '+500', label: ppt.stats.metrics[3], color: '#FFFFFF' },
                ].map((m) => (
                  <div key={m.label} style={{ background: '#0A192F', color: '#FFFFFF', padding: '24px', borderRadius: '18px', textAlign: 'center' }}>
                    <div style={{ fontSize: '34px', fontWeight: 900, color: m.color }}>{m.val}</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#CBD5E1', marginTop: '6px' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 3: MÉTRICAS DEL EVENTO SEMANA DIE */}
          {currentSlide === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '18px', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                    {ppt.impact.eyebrow}
                  </div>
                  <h2 style={{ fontSize: '30px', fontWeight: 900, color: '#0A192F', margin: 0 }}>
                    {ppt.impact.title}
                  </h2>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { val: '+3,000', label: ppt.impact.attendees },
                    { val: '+70 H', label: ppt.impact.streaming },
                    { val: '+30', label: ppt.impact.experts },
                  ].map((stat) => (
                    <div key={stat.label} style={{ background: '#0A192F', color: '#FFFFFF', padding: '12px 16px', borderRadius: '12px', textAlign: 'center', minWidth: '90px' }}>
                      <div style={{ fontSize: '20px', fontWeight: 900, color: '#F2C24C' }}>{stat.val}</div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#CBD5E1', marginTop: '4px' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '16px', flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#64748B', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  {ppt.photosTitle}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: '12px' }}>
                  {SPONSORSHIP_PHOTOS.map((photo, idx) => (
                    <div
                      key={photo.src}
                      style={{
                        gridColumn: idx === 0 ? '1 / 3' : undefined,
                        borderRadius: '14px',
                        overflow: 'hidden',
                        border: '2px solid #E2E8F0',
                        background: '#0A192F',
                        position: 'relative'
                      }}
                    >
                      <img
                        src={photo.src}
                        alt={photo.caption[lang]}
                        style={{
                          width: '100%',
                          height: idx === 0 ? '200px' : '150px',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '8px 12px',
                        background: 'linear-gradient(transparent, rgba(10,25,47,0.92))',
                        color: '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: 700,
                        lineHeight: 1.35
                      }}>
                        {photo.caption[lang]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#0A192F', color: '#FFFFFF', padding: '16px 22px', borderRadius: '14px' }}>
                <div style={{ fontSize: '14px', fontWeight: 800, marginBottom: '4px' }}>
                  {ppt.impact.showcase}
                </div>
                <p style={{ fontSize: '12.5px', color: '#CBD5E1', lineHeight: 1.5, margin: 0 }}>
                  {ppt.impact.showcaseDesc}
                </p>
              </div>
            </div>
          )}

          {/* SLIDE 4: PAQUETES MXN */}
          {currentSlide === 4 && (
            <SponsorshipTierTableSlide
              tiers={SPONSORSHIP_TIERS_MXN}
              lang={lang}
              currency="MXN"
              title={ppt.packages.title}
              subtitle={ppt.packages.subtitle}
              eyebrow={ppt.packages.eyebrow}
              showDualCurrency
            />
          )}

          {/* SLIDE 5: PAQUETES USD */}
          {currentSlide === 5 && (
            <SponsorshipTierTableSlide
              tiers={SPONSORSHIP_TIERS_USD}
              lang={lang}
              currency="USD"
              title={ppt.packages.title}
              subtitle={ppt.packages.subtitle}
              eyebrow={ppt.packages.eyebrow}
            />
          )}

          {/* SLIDE 6: STAND Y ELEMENTOS */}
          {currentSlide === 6 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                  {ppt.stand.eyebrow}
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0A192F' }}>
                  {ppt.stand.title}
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '18px' }}>
                {EXPO_STAND_PHOTOS.map((photo) => (
                  <div key={photo.src} style={{ borderRadius: '14px', overflow: 'hidden', border: '2px solid #CBD5E1', position: 'relative' }}>
                    <img
                      src={photo.src}
                      alt={photo.caption[lang]}
                      style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '8px 10px',
                      background: 'linear-gradient(transparent, rgba(10,25,47,0.9))',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontWeight: 700
                    }}>
                      {photo.caption[lang]}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '20px', padding: '24px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', marginBottom: '14px' }}>
                    {ppt.stand.dimensions}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ padding: '14px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: '#0A192F' }}>2 x 1 {ppt.stand.metersUnit}</div>
                      <div style={{ fontSize: '13px', color: '#64748B' }}>{ppt.stand.includedPuma}</div>
                    </div>
                    <div style={{ padding: '14px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: '#0A192F' }}>3 x 1 {ppt.stand.metersUnit}</div>
                      <div style={{ fontSize: '13px', color: '#64748B' }}>{ppt.stand.includedSilverGold}</div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: '20px', padding: '24px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#1E40AF', marginBottom: '14px' }}>
                    {ppt.stand.includes}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>{ppt.stand.hours}</div>
                      <div style={{ fontSize: '13px', color: '#334155' }}>{ppt.stand.hoursVal}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>{ppt.stand.wifi}</div>
                      <div style={{ fontSize: '13px', color: '#334155' }}>{ppt.stand.wifiVal}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>{ppt.stand.power}</div>
                      <div style={{ fontSize: '13px', color: '#334155' }}>{ppt.stand.powerVal}</div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#FFFBEB', border: '1.5px solid #FDE68A', borderRadius: '20px', padding: '24px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#92400E', marginBottom: '14px' }}>
                    {ppt.stand.elements}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>{ppt.stand.rollups}</div>
                      <div style={{ fontSize: '13px', color: '#475569' }}>{ppt.stand.rollupsVal}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>{ppt.stand.brochures}</div>
                      <div style={{ fontSize: '13px', color: '#475569' }}>{ppt.stand.brochuresVal}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#0A192F' }}>{ppt.stand.screens}</div>
                      <div style={{ fontSize: '13px', color: '#475569' }}>{ppt.stand.screensVal}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 7: DIRECTORIO Y CONTACTO */}
          {currentSlide === 7 && (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>
                  {ppt.contact.eyebrow}
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0A192F' }}>
                  {ppt.contact.title}
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '22px' }}>
                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>{ppt.contact.addressLabel}</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F' }}>{ppt.contact.addressTitle}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '14.5px', color: '#334155', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {ppt.contact.address}
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '18px', padding: '26px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>{ppt.contact.phoneLabel}</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F' }}>{ppt.contact.phoneTitle}</div>
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
                      <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>{ppt.contact.emailLabel}</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F' }}>{ppt.contact.emailTitle}</div>
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
                      <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>{ppt.contact.hoursLabel}</div>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F' }}>{ppt.contact.hoursTitle}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '14.5px', color: '#334155', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {ppt.contact.hours}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 8: FLYER · HACKATHON */}
          {currentSlide === 8 && <HackathonFlyerSlide flyers={flyers.hackathon} />}

          {/* SLIDE 9: FLYER · CONFERENCIA MAGISTRAL */}
          {currentSlide === 9 && <SpeakerFlyerSlide flyers={flyers.speaker} />}

          {/* SLIDE 10: FLYER · PANELES */}
          {currentSlide === 10 && <PanelFlyerSlide flyers={flyers.panel} />}

          {/* SLIDE 11: MAPA EXPODIE */}
          {currentSlide === 11 && <ExpoMapSlide mapCopy={mapCopy} />}

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
            <span>{ppt.nav.footer}</span>
            <span>{ppt.nav.slideOf} {currentSlide + 1} / {totalSlides}</span>
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
          <ChevronLeft size={18} /> {ppt.nav.prev}
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
          {ppt.nav.next} <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
