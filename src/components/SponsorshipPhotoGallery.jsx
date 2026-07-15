import React from 'react';
import { SPONSORSHIP_PHOTOS } from '../data/sponsorshipCopy';

export default function SponsorshipPhotoGallery({ lang, title, description }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#0A192F', marginBottom: '8px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '15px', color: '#475569', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
          {description}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px'
      }}>
        {SPONSORSHIP_PHOTOS.map((photo) => (
          <figure
            key={photo.src}
            style={{
              margin: 0,
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)'
            }}
          >
            <div style={{
              height: photo.cover || photo.src.includes('/sponsorship/') ? '200px' : '200px',
              background: '#0A192F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: photo.cover || photo.src.includes('/sponsorship/') ? '0' : '24px'
            }}>
              <img
                src={photo.src}
                alt={photo.caption[lang]}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: photo.cover || photo.src.includes('/sponsorship/') ? 'cover' : 'contain'
                }}
              />
            </div>
            <figcaption style={{
              padding: '14px 16px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#334155',
              borderTop: '1px solid #E2E8F0',
              background: '#F8FAFC'
            }}>
              {photo.caption[lang]}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
