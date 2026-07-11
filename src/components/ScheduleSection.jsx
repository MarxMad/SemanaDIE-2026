import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../data/schedule';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export default function ScheduleSection() {
  const [activeTab, setActiveTab] = useState('posgrado');

  const tabs = [
    { id: 'posgrado', label: 'Posgrado & Conferencias' },
    { id: 'talleres', label: 'Talleres Técnicos' },
    { id: 'hackathon', label: 'Hackathon 48h' },
    { id: 'pitch', label: 'Pitch & Clausura' },
  ];

  const currentList = SCHEDULE_DATA[activeTab] || [];

  return (
    <section id="agenda" style={{
      padding: '100px 24px',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            PROGRAMA OFICIAL UNAM
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 3.8vw, 44px)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '16px'
          }}>
            Toda la semana, minuto a minuto
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#475569',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Desde conferencias magistrales internacionales hasta las 48 horas continuas de desarrollo de soluciones.
          </p>
        </div>

        {/* Schedule Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '48px'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 24px',
                borderRadius: '999px',
                border: activeTab === tab.id ? '2px solid #0A192F' : '1px solid #CBD5E1',
                background: activeTab === tab.id ? '#0A192F' : '#F8FAFC',
                color: activeTab === tab.id ? '#FFFFFF' : '#475569',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Schedule Items List */}
        <div style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '20px',
          padding: '36px 40px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
        }}>
          {currentList.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: '28px',
                padding: '24px 0',
                borderBottom: index < currentList.length - 1 ? '1px solid #E2E8F0' : 'none',
                alignItems: 'center'
              }}
            >
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '15px',
                color: '#0A192F',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Clock size={16} color="#D59F0F" /> {item.date}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  {item.tag && (
                    <span style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      borderRadius: '6px',
                      background: '#E2E8F0',
                      color: '#0A192F',
                      fontSize: '11px',
                      fontWeight: 700,
                      marginBottom: '6px'
                    }}>
                      {item.tag}
                    </span>
                  )}
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#0A192F', marginBottom: '6px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '14px', color: '#475569' }}>
                    {item.speaker}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  color: '#475569',
                  fontSize: '13px',
                  fontWeight: 600
                }}>
                  <MapPin size={15} color="#D59F0F" /> {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
