import React from 'react';
import { Mic } from 'lucide-react';

const logoBar = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
    <img src="/Logo-UNAM.png" alt="UNAM" style={{ height: '36px' }} />
    <img src="/escudofi_azul-modified.png" alt="FI" style={{ height: '36px' }} />
    <img src="/logo-criptounam.png" alt="CriptoUNAM" style={{ height: '36px' }} />
    <img src="/LogoSemanaDIE.png" alt="DIE" style={{ height: '36px' }} />
  </div>
);

export function HackathonFlyerSlide({ flyers }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: '#0A192F', color: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', border: '2px solid #38BDF8' }}>
      <div style={{ position: 'relative', height: '200px' }}>
        <img src={flyers.heroImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,25,47,0.15) 0%, rgba(10,25,47,0.92) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '16px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
          {logoBar}
          <span style={{ padding: '6px 14px', borderRadius: '999px', background: '#38BDF8', color: '#0A192F', fontWeight: 800, fontSize: '12px' }}>
            {flyers.tag}
          </span>
        </div>
      </div>

      <div style={{ padding: '28px 32px', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '28px', flex: 1 }}>
        <div>
          <h2 style={{ fontSize: '34px', fontWeight: 900, lineHeight: 1.15, marginBottom: '12px' }}>{flyers.title}</h2>
          <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '20px' }}>{flyers.description}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '18px' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(56,189,248,0.35)' }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#F2C24C' }}>{flyers.tracksTitle}</div>
              <div style={{ fontSize: '13px', color: '#CBD5E1' }}>{flyers.tracksSub}</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(56,189,248,0.35)' }}>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#38BDF8' }}>{flyers.mentoringTitle}</div>
              <div style={{ fontSize: '13px', color: '#CBD5E1' }}>{flyers.mentoringSub}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', fontSize: '13px', fontWeight: 700, color: '#F2C24C' }}>
            <span>{flyers.date}</span>
            <span style={{ color: '#64748B' }}>·</span>
            <span style={{ color: '#E2E8F0' }}>{flyers.venue}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ borderRadius: '14px', overflow: 'hidden', border: '2px solid rgba(242,194,76,0.45)', height: '120px' }}>
            <img src={flyers.accentImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ background: '#1E293B', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)', flex: 1 }}>
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#F2C24C', marginBottom: '12px' }}>{flyers.howToTitle}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#E2E8F0' }}>
              {flyers.steps.map((step, idx) => (
                <div key={step}><strong style={{ color: '#38BDF8' }}>{idx + 1}.</strong> {step}</div>
              ))}
            </div>
            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '12.5px', fontWeight: 700, color: '#94A3B8' }}>
              {flyers.cta}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpeakerFlyerSlide({ flyers }) {
  return (
    <div style={{ display: 'flex', flex: 1, background: '#0A192F', color: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', border: '2px solid #D59F0F' }}>
      <div style={{ width: '42%', position: 'relative', minHeight: '420px' }}>
        <img src={flyers.heroImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,25,47,0.1) 40%, rgba(10,25,47,0.95) 100%)' }} />
      </div>
      <div style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', gap: '12px' }}>
          <div style={{ fontSize: '12px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>{flyers.eyebrow}</div>
          <span style={{ padding: '4px 12px', borderRadius: '999px', background: '#F2C24C', color: '#0A192F', fontWeight: 800, fontSize: '11px' }}>{flyers.tag}</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 900, lineHeight: 1.25, marginBottom: '16px' }}>{flyers.talkTitle}</h2>
        <div style={{ fontSize: '22px', fontWeight: 800, color: '#F2C24C', marginBottom: '4px' }}>{flyers.speakerName}</div>
        <div style={{ fontSize: '14.5px', color: '#CBD5E1', marginBottom: '24px' }}>{flyers.role}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {[
            { label: flyers.labels.date, value: flyers.date },
            { label: flyers.labels.time, value: flyers.time },
            { label: flyers.labels.venue, value: flyers.venue },
          ].map((item) => (
            <div key={item.label} style={{ background: 'rgba(255,255,255,0.08)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(242,194,76,0.25)' }}>
              <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700 }}>{item.label}</div>
              <div style={{ fontSize: '14px', fontWeight: 800, marginTop: '4px' }}>{item.value}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '22px' }}>{logoBar}</div>
      </div>
    </div>
  );
}

export function PanelFlyerSlide({ flyers }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: '#FFFFFF', color: '#0A192F', borderRadius: '20px', overflow: 'hidden', border: '2px solid #CBD5E1' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', height: '160px' }}>
        <img src={flyers.heroImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <img src={flyers.accentImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', gap: '12px' }}>
          <div style={{ fontSize: '12px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>{flyers.eyebrow}</div>
          <span style={{ padding: '4px 12px', borderRadius: '999px', background: '#EFF6FF', color: '#1E40AF', fontWeight: 800, fontSize: '11px' }}>{flyers.tag}</span>
        </div>
        <h2 style={{ fontSize: '26px', fontWeight: 900, marginBottom: '8px' }}>{flyers.title}</h2>
        <p style={{ fontSize: '14.5px', color: '#475569', marginBottom: '22px', lineHeight: 1.55 }}>{flyers.description}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', flex: 1 }}>
          {flyers.panelists.map((panelist) => (
            <div key={panelist.name} style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '14px', padding: '16px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#0A192F', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                <Mic size={22} color="#F2C24C" />
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800 }}>{panelist.name}</div>
              <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px', lineHeight: 1.35 }}>{panelist.role}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '18px' }}>{logoBar}</div>
      </div>
    </div>
  );
}

export function ExpoMapSlide({ mapCopy }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <div style={{ fontSize: '13px', color: '#D59F0F', fontWeight: 800, letterSpacing: '0.08em' }}>{mapCopy.eyebrow}</div>
          <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#0A192F', margin: 0 }}>{mapCopy.title}</h2>
        </div>
        <span style={{ padding: '6px 14px', borderRadius: '8px', background: '#EFF6FF', color: '#1E40AF', fontWeight: 700, fontSize: '12px' }}>
          {mapCopy.badge}
        </span>
      </div>

      <div style={{ background: '#F8FAFC', border: '2px solid #CBD5E1', borderRadius: '20px', padding: '24px', flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ background: '#0A192F', color: '#FFFFFF', padding: '20px', borderRadius: '14px', textAlign: 'center', fontWeight: 800, fontSize: '15px' }}>
            {mapCopy.auditorium}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {mapCopy.stands.slice(0, 4).map((s) => (
              <div key={s} style={{ background: '#EFF6FF', border: '1.5px solid #1D4ED8', color: '#1E40AF', padding: '16px 8px', borderRadius: '10px', textAlign: 'center', fontWeight: 800, fontSize: '11px' }}>
                {s}
              </div>
            ))}
          </div>
          <div style={{ background: '#E2E8F0', padding: '10px', borderRadius: '8px', textAlign: 'center', color: '#475569', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em' }}>
            {mapCopy.corridor}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {mapCopy.stands.slice(4, 8).map((s) => (
              <div key={s} style={{ background: '#FEF3C7', border: '1.5px solid #B45309', color: '#92400E', padding: '16px 8px', borderRadius: '10px', textAlign: 'center', fontWeight: 800, fontSize: '11px' }}>
                {s}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '16px', padding: '24px' }}>
          <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#0A192F', marginBottom: '16px' }}>{mapCopy.legendTitle}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#334155' }}>
            {[
              { color: '#0A192F', text: mapCopy.legendAuditorium },
              { color: '#EFF6FF', border: '#1D4ED8', text: mapCopy.legendSilverGold },
              { color: '#FEF3C7', border: '#B45309', text: mapCopy.legendPuma },
              { color: '#22C55E', text: mapCopy.legendHackathon },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: item.color, border: item.border ? `1.5px solid ${item.border}` : undefined, flexShrink: 0 }} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
