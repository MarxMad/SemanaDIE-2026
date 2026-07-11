import React, { useState } from 'react';
import { TRACKS_DATA } from '../data/tracks';
import { Users, PlusCircle, Search, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function TeamsView({ teams, onCreateTeam }) {
  const [mode, setMode] = useState('explorar'); // 'explorar' | 'crear'
  const [selectedTrack, setSelectedTrack] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Form state for creating team
  const [teamName, setTeamName] = useState('');
  const [teamTrack, setTeamTrack] = useState('electronica');
  const [teamDesc, setTeamDesc] = useState('');
  const [teamSeeking, setTeamSeeking] = useState('');
  const [teamMax, setTeamMax] = useState(4);
  const [createdSuccess, setCreatedSuccess] = useState(false);

  const filteredTeams = teams.filter((t) => {
    const matchesTrack = selectedTrack === 'todos' || t.track === selectedTrack;
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.seeking.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTrack && matchesSearch;
  });

  const handleCreate = (e) => {
    e.preventDefault();
    if (!teamName) return;

    const newTeam = {
      id: `t_${Date.now()}`,
      name: teamName,
      track: teamTrack,
      membersCount: 1,
      maxMembers: Number(teamMax) || 4,
      seeking: teamSeeking || 'Colaboradores motivados',
      description: teamDesc || 'Proyecto de innovación para Semana DIE 2026',
      avatar: teamName.slice(0, 2).toUpperCase()
    };

    onCreateTeam(newTeam);
    setCreatedSuccess(true);
    setTimeout(() => {
      setCreatedSuccess(false);
      setMode('explorar');
      setTeamName('');
      setTeamDesc('');
      setTeamSeeking('');
    }, 1500);
  };

  return (
    <div style={{
      padding: '50px 24px 110px',
      background: 'var(--bg-primary)',
      minHeight: '85vh'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '36px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div className="section-tag">HACKATHON PLATFORM</div>
            <h1 style={{ fontSize: '34px', color: '#FFFFFF', margin: 0 }}>
              Encuentra tu <span className="text-gradient-gold">Equipo</span>
            </h1>
          </div>

          <div style={{
            display: 'flex',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '999px',
            padding: '4px'
          }}>
            <button
              onClick={() => setMode('explorar')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: 'none',
                background: mode === 'explorar' ? 'var(--gold-primary)' : 'transparent',
                color: mode === 'explorar' ? '#0a0d24' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Explorar equipos ({teams.length})
            </button>
            <button
              onClick={() => setMode('crear')}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: 'none',
                background: mode === 'crear' ? 'var(--gold-primary)' : 'transparent',
                color: mode === 'crear' ? '#0a0d24' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              + Crear equipo
            </button>
          </div>
        </div>

        {mode === 'explorar' ? (
          <>
            {/* Search & Track Filters */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '32px'
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <button
                  onClick={() => setSelectedTrack('todos')}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '999px',
                    border: selectedTrack === 'todos' ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.15)',
                    background: selectedTrack === 'todos' ? 'rgba(213,159,15,0.18)' : 'rgba(255,255,255,0.03)',
                    color: selectedTrack === 'todos' ? 'var(--gold-light)' : 'var(--text-secondary)',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Todos
                </button>
                {TRACKS_DATA.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTrack(t.id)}
                    style={{
                      padding: '8px 18px',
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

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '999px',
                width: '280px'
              }}>
                <Search size={16} color="var(--text-muted)" />
                <input
                  type="text"
                  placeholder="Buscar por equipo o habilidad..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    width: '100%',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Teams Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '24px'
            }}>
              {filteredTeams.map((t) => {
                const isFull = t.membersCount >= t.maxMembers;
                const trackInfo = TRACKS_DATA.find((x) => x.id === t.track);

                return (
                  <div key={t.id} className="card-glass" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <span style={{
                          padding: '5px 12px',
                          borderRadius: '999px',
                          background: trackInfo?.bgColor || 'rgba(255,255,255,0.1)',
                          color: trackInfo?.color || '#FFFFFF',
                          fontSize: '12px',
                          fontWeight: 700
                        }}>
                          {trackInfo?.title || t.track}
                        </span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: isFull ? '#F87171' : '#34D399' }}>
                          {t.membersCount}/{t.maxMembers} {isFull ? 'Completo' : 'Disponibles'}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <div style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #161b4e, var(--gold-primary))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          fontSize: '15px'
                        }}>
                          {t.avatar}
                        </div>
                        <h3 style={{ fontSize: '20px', color: '#FFFFFF', margin: 0 }}>
                          {t.name}
                        </h3>
                      </div>

                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                        {t.description}
                      </p>

                      <div style={{
                        padding: '12px 14px',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        border: '1px solid rgba(255,255,255,0.06)'
                      }}>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '4px' }}>
                          BUSCAN CO-EQUIPEROS EN:
                        </div>
                        <div style={{ fontSize: '13px', color: 'var(--gold-light)', fontWeight: 600 }}>
                          {t.seeking}
                        </div>
                      </div>
                    </div>

                    <button
                      disabled={isFull}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '10px',
                        background: isFull ? 'rgba(255,255,255,0.04)' : 'linear-gradient(135deg, var(--gold-light), var(--gold-primary))',
                        border: isFull ? '1px solid rgba(255,255,255,0.1)' : 'none',
                        color: isFull ? 'var(--text-muted)' : '#0a0d24',
                        fontWeight: 700,
                        fontSize: '14px',
                        cursor: isFull ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isFull ? 'Equipo Completo (4/4)' : 'Solicitar Unirme →'}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* Create Team Form */
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '28px', alignItems: 'start' }}>
            <form onSubmit={handleCreate} className="card-glass" style={{ padding: '34px' }}>
              <h2 style={{ fontSize: '24px', color: '#FFFFFF', marginBottom: '20px' }}>
                Crear Nuevo Equipo
              </h2>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  Nombre del Equipo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Circuit Breakers FI"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(0,0,0,0.3)',
                    color: '#FFFFFF',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  Categoría / Track *
                </label>
                <select
                  value={teamTrack}
                  onChange={(e) => setTeamTrack(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: '#10133a',
                    color: '#FFFFFF',
                    fontSize: '14px'
                  }}
                >
                  {TRACKS_DATA.map((tr) => (
                    <option key={tr.id} value={tr.id}>
                      {tr.number} - {tr.title}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  Descripción de la idea o proyecto
                </label>
                <textarea
                  rows={3}
                  placeholder="¿Qué problema planean resolver en las 48 horas?"
                  value={teamDesc}
                  onChange={(e) => setTeamDesc(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(0,0,0,0.3)',
                    color: '#FFFFFF',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: '16px', marginBottom: '28px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Habilidades que buscan
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Firmware, Diseño PCB, Frontend"
                    value={teamSeeking}
                    onChange={(e) => setTeamSeeking(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(0,0,0,0.3)',
                      color: '#FFFFFF',
                      fontSize: '14px'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Cupo Máx.
                  </label>
                  <input
                    type="number"
                    min="2"
                    max="5"
                    value={teamMax}
                    onChange={(e) => setTeamMax(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(0,0,0,0.3)',
                      color: '#FFFFFF',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
              >
                {createdSuccess ? (
                  <>
                    <CheckCircle2 size={18} /> ¡Equipo Publicado en la Plataforma!
                  </>
                ) : (
                  'Publicar Equipo'
                )}
              </button>
            </form>

            {/* Tips Card */}
            <div className="card-glass" style={{ padding: '28px', background: 'rgba(213, 159, 15, 0.08)', border: '1px solid rgba(213, 159, 15, 0.3)' }}>
              <h3 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '14px' }}>
                Consejos para tu Equipo
              </h3>
              <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                <li>Selecciona el track oficial que mejor se alinee a tu solución tecnológica.</li>
                <li>Específica con claridad las habilidades que necesitan para complementar el equipo.</li>
                <li>Un equipo de 4 estudiantes multidisciplinarios avanza más ágilmente.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
