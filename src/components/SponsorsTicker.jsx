import React from 'react';
import { SPONSORS_DATA } from '../data/sponsors';
import { 
  Globe, 
  Server, 
  Cpu, 
  Database, 
  Radio, 
  CreditCard, 
  Laptop, 
  Award, 
  BookOpen, 
  GraduationCap, 
  CheckCircle, 
  ShieldCheck, 
  Navigation, 
  Zap,
  Globe2,
  BookMarked
} from 'lucide-react';

const iconMap = {
  Globe,
  Server,
  Cpu,
  Database,
  Radio,
  CreditCard,
  Laptop,
  Award,
  BookOpen,
  GraduationCap,
  CheckCircle,
  ShieldCheck,
  Navigation,
  Zap,
  Globe2,
  BookMarked
};

export default function SponsorsTicker() {
  // Duplicate for smooth infinite loop
  const displaySponsors = [...SPONSORS_DATA, ...SPONSORS_DATA];

  return (
    <section id="expositores" style={{
      padding: '64px 0',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
        marginBottom: '36px'
      }}>
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
          textTransform: 'uppercase',
          marginBottom: '14px'
        }}>
          RED INSTITUCIONAL UNAM · DIE
        </div>
        <h2 style={{ fontSize: '30px', color: '#0A192F', fontWeight: 800 }}>
          Colaboradores, Expositores & Aliados Académicos
        </h2>
        <p style={{ color: '#475569', fontSize: '15px', marginTop: '8px', maxWidth: '640px', margin: '8px auto 0' }}>
          Organizaciones, centros de investigación e industrias que impulsan el desarrollo de la Semana DIE 2026.
        </p>
      </div>

      <div className="ticker-wrap">
        <div className="ticker-content">
          {displaySponsors.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Globe;
            return (
              <div
                key={`${item.name}-${idx}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 26px',
                  margin: '0 12px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: '#0A192F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F2C24C'
                }}>
                  <IconComponent size={20} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#0A192F', letterSpacing: '-0.01em' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>
                    {item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
