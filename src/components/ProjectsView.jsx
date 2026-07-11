import React, { useState } from 'react';
import { TRACKS_DATA } from '../data/tracks';
import { FolderGit2, Code2, ExternalLink, Sparkles, Star } from 'lucide-react';

export default function ProjectsView({ projects }) {
  const [selectedTrack, setSelectedTrack] = useState('todos');

  const filteredProjects = projects.filter(
    (p) => selectedTrack === 'todos' || p.track === selectedTrack
  );

  return (
    <div style={{
      padding: '50px 24px 110px',
      background: 'var(--bg-primary)',
      minHeight: '85vh'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '36px' }}>
          <div className="section-tag">GALERÍA DE PROYECTOS</div>
          <h1 style={{ fontSize: '34px', color: '#FFFFFF', margin: 0 }}>
            Proyectos de la <span className="text-gradient-gold">Comunidad</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginTop: '8px' }}>
            Explora soluciones tecnológicas creadas por estudiantes en Semana DIE.
          </p>
        </div>

        {/* Filter Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
          <button
            onClick={() => setSelectedTrack('todos')}
            style={{
              padding: '9px 20px',
              borderRadius: '999px',
              border: selectedTrack === 'todos' ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.15)',
              background: selectedTrack === 'todos' ? 'rgba(213,159,15,0.18)' : 'rgba(255,255,255,0.03)',
              color: selectedTrack === 'todos' ? 'var(--gold-light)' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            Todos ({projects.length})
          </button>
          {TRACKS_DATA.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTrack(t.id)}
              style={{
                padding: '9px 20px',
                borderRadius: '999px',
                border: selectedTrack === t.id ? `1px solid ${t.color}` : '1px solid rgba(255,255,255,0.15)',
                background: selectedTrack === t.id ? t.bgColor : 'rgba(255,255,255,0.03)',
                color: selectedTrack === t.id ? t.color : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              {t.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '26px'
        }}>
          {filteredProjects.map((p) => {
            const trackObj = TRACKS_DATA.find((x) => x.id === p.track);
            return (
              <div
                key={p.id}
                className="card-glass"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{
                      padding: '5px 12px',
                      borderRadius: '999px',
                      background: trackObj?.bgColor || 'rgba(255,255,255,0.1)',
                      color: trackObj?.color || '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: 700
                    }}>
                      {trackObj?.title || p.track}
                    </span>

                    {p.featured && (
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'var(--gold-light)',
                        fontSize: '12px',
                        fontWeight: 700
                      }}>
                        <Star size={14} fill="var(--gold-light)" /> Destacado
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '22px', color: '#FFFFFF', marginBottom: '6px' }}>
                    {p.title}
                  </h3>

                  <div style={{ fontSize: '13px', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '14px' }}>
                    Equipo: {p.team}
                  </div>

                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {p.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {p.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'rgba(255,255,255,0.05)',
                          fontSize: '12px',
                          color: 'var(--text-muted)',
                          fontWeight: 500
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: '10px',
                          background: 'rgba(255,255,255,0.06)',
                          color: '#FFFFFF',
                          fontSize: '13px',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <Code2 size={15} /> Repositorio
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: '10px',
                          background: 'rgba(213,159,15,0.18)',
                          color: 'var(--gold-light)',
                          fontSize: '13px',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <ExternalLink size={15} /> Demo Vivo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
