import React from 'react';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';

export default function ContactSection() {
  const contactItems = [
    {
      icon: MapPin,
      title: 'Dirección Oficial',
      content: (
        <>
          <strong>Facultad de Ingeniería</strong><br />
          Ciudad Universitaria, Coyoacán 04510<br />
          CDMX, México
        </>
      ),
      linkText: 'Ver en Mapa',
      href: 'https://maps.google.com/?q=Facultad+de+Ingenieria+UNAM+Ciudad+Universitaria'
    },
    {
      icon: Phone,
      title: 'Teléfonos Institucionales',
      content: (
        <>
          <a href="tel:5556223116" style={{ color: '#0A192F', fontWeight: 700, textDecoration: 'none', display: 'block' }}>
            55 5622 3116
          </a>
          <a href="tel:5556222128" style={{ color: '#0A192F', fontWeight: 700, textDecoration: 'none', display: 'block', marginTop: '4px' }}>
            55 5622 2128
          </a>
        </>
      ),
      linkText: 'Llamar a Dirección',
      href: 'tel:5556223116'
    },
    {
      icon: Mail,
      title: 'Correo Electrónico',
      content: (
        <>
          Atención y Transformación Digital:<br />
          <a href="mailto:transformaciondigital@unam.mx" style={{ color: '#D59F0F', fontWeight: 700, wordBreak: 'break-all' }}>
            transformaciondigital@unam.mx
          </a>
        </>
      ),
      linkText: 'Enviar Correo',
      href: 'mailto:transformaciondigital@unam.mx'
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      content: (
        <>
          <strong>Lunes - Viernes</strong><br />
          9:00 AM - 02:00 PM<br />
          4:00 PM - 06:00 PM
        </>
      ),
      linkText: 'Atención Presencial',
      href: '#contacto'
    }
  ];

  return (
    <section id="contacto" style={{
      padding: '96px 24px',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
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
            DIRECTORIO INSTITUCIONAL UNAM
          </div>
          <h2 style={{
            fontSize: 'clamp(30px, 3.6vw, 40px)',
            fontWeight: 800,
            color: '#0A192F',
            marginBottom: '14px'
          }}>
            Información y Datos de Contacto
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#475569',
            maxWidth: '580px',
            margin: '0 auto'
          }}>
            Ponte en contacto con la coordinación de la Semana DIE para dudas académicas, patrocinios, registro al hackathon y atención general.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {contactItems.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '32px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    background: '#0A192F',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F2C24C',
                    marginBottom: '20px'
                  }}>
                    <IconComp size={24} />
                  </div>
                  <h3 style={{
                    fontSize: '19px',
                    fontWeight: 800,
                    color: '#0A192F',
                    marginBottom: '12px'
                  }}>
                    {item.title}
                  </h3>
                  <div style={{
                    fontSize: '14.5px',
                    color: '#475569',
                    lineHeight: 1.65,
                    marginBottom: '24px'
                  }}>
                    {item.content}
                  </div>
                </div>

                {item.href.startsWith('http') || item.href.startsWith('mailto') || item.href.startsWith('tel') ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#0A192F',
                      textDecoration: 'none'
                    }}
                  >
                    {item.linkText} →
                  </a>
                ) : (
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#64748B'
                  }}>
                    {item.linkText}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
