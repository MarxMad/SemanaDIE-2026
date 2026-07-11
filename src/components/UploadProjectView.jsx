import React, { useState } from 'react';
import { TRACKS_DATA } from '../data/tracks';
import { 
  UploadCloud, 
  CheckCircle2, 
  Code2, 
  ExternalLink, 
  AlertCircle, 
  FileText, 
  Users, 
  Video, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function UploadProjectView({ teams = [], onUploadProject, setScreen }) {
  const [title, setTitle] = useState('');
  const [teamName, setTeamName] = useState(teams[0]?.name || 'Circuit Breakers');
  const [track, setTrack] = useState('electronica');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [techInput, setTechInput] = useState('');
  const [technologies, setTechnologies] = useState(['Python', 'ESP32', 'React']);
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [pitchDoc, setPitchDoc] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddTech = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && techInput.trim()) {
      e.preventDefault();
      if (!technologies.includes(techInput.trim())) {
        setTechnologies([...technologies, techInput.trim()]);
      }
      setTechInput('');
    }
  };

  const handleRemoveTech = (index) => {
    setTechnologies(technologies.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newProject = {
      id: `p_${Date.now()}`,
      title,
      team: teamName,
      track,
      tagline: tagline || 'Proyecto oficial de innovación Semana DIE 2026',
      description: description || 'Desarrollo tecnológico para el Hackathon 48 horas en la Facultad de Ingeniería UNAM.',
      technologies: technologies.length ? technologies : ['Ingeniería UNAM'],
      repo: repo || 'https://github.com/semanadie/hackathon2026',
      demo: demo || 'https://die.unam.mx',
      pitchDoc: pitchDoc || '',
      featured: true
    };

    onUploadProject(newProject);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setScreen('galeria');
    }, 1800);
  };

  const currentTrackObj = TRACKS_DATA[track] || TRACKS_DATA['electronica'];

  return (
    <div style={{
      padding: '48px 24px 96px',
      background: '#F8FAFC',
      minHeight: '88vh',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            background: '#E2E8F0',
            color: '#0A192F',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.08em',
            marginBottom: '14px'
          }}>
            HACKATHON SEMANA DIE 2026 · REGISTRO INSTITUCIONAL
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#0A192F', margin: '0 0 8px' }}>
            Registro de <span style={{ color: '#D59F0F' }}>Proyecto Tecnológico</span>
          </h1>
          <p style={{ fontSize: '16px', color: '#475569', margin: 0, maxWidth: '720px', lineHeight: 1.6 }}>
            Documenta tu solución para la evaluación oficial del comité académico y el jurado de la industria tecnológica en la Facultad de Ingeniería UNAM.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '36px', alignItems: 'start' }}>
          
          {/* Main Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #CBD5E1',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
              padding: '40px'
            }}
          >
            {/* SECCIÓN 1: INFORMACIÓN GENERAL */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>
                  1
                </div>
                <h2 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', margin: 0 }}>
                  Información General del Proyecto
                </h2>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                  Título del Proyecto *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. PumaEnergy AI: Optimización de Microredes C.U."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    background: '#FFFFFF',
                    color: '#0A192F',
                    fontSize: '14.5px'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                    Track de Innovación *
                  </label>
                  <select
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1px solid #CBD5E1',
                      background: '#FFFFFF',
                      color: '#0A192F',
                      fontSize: '14px',
                      fontWeight: 600
                    }}
                  >
                    {Object.entries(TRACKS_DATA).map(([key, t]) => (
                      <option key={key} value={key}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                    Equipo Participante *
                  </label>
                  <input
                    type="text"
                    required
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Nombre del equipo"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #CBD5E1',
                      background: '#FFFFFF',
                      color: '#0A192F',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                  Resumen Ejecutivo (Elevator Pitch en 1 oración) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Sistema inteligente de monitoreo energético basado en IoT e IA para laboratorios universitarios"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    background: '#FFFFFF',
                    color: '#0A192F',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                  Descripción Técnica & Arquitectura de Solución *
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Describe el problema que resuelve tu proyecto, la arquitectura técnica, metodología utilizada y el impacto para la industria..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    background: '#FFFFFF',
                    color: '#0A192F',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    lineHeight: 1.6
                  }}
                />
              </div>
            </div>

            {/* SECCIÓN 2: STACK TECNOLÓGICO */}
            <div style={{ marginBottom: '36px', borderTop: '1px solid #E2E8F0', paddingTop: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>
                  2
                </div>
                <h2 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', margin: 0 }}>
                  Stack Tecnológico & Herramientas
                </h2>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                  Agrega Tecnologías (Presiona Enter o Coma para añadir)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Python, React, ESP32, Docker, OpenCV..."
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={handleAddTech}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    background: '#FFFFFF',
                    color: '#0A192F',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      background: '#EFF6FF',
                      color: '#1E40AF',
                      fontSize: '13px',
                      fontWeight: 700,
                      border: '1px solid #BFDBFE'
                    }}
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTech(i)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#1E40AF',
                        cursor: 'pointer',
                        fontWeight: 900,
                        fontSize: '14px',
                        padding: 0
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* SECCIÓN 3: EVIDENCIA DIGITAL & REPOSITORIO */}
            <div style={{ marginBottom: '36px', borderTop: '1px solid #E2E8F0', paddingTop: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#0A192F', color: '#F2C24C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>
                  3
                </div>
                <h2 style={{ fontSize: '19px', fontWeight: 800, color: '#0A192F', margin: 0 }}>
                  Repositorio y Enlaces del Proyecto
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                    Repositorio GitHub (Código Fuente)
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/..."
                    value={repo}
                    onChange={(e) => setRepo(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #CBD5E1',
                      background: '#FFFFFF',
                      color: '#0A192F',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                    Demo en Vivo / Video YouTube
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={demo}
                    onChange={(e) => setDemo(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #CBD5E1',
                      background: '#FFFFFF',
                      color: '#0A192F',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                  Enlace al Pitch Deck o PDF Técnico (Opcional)
                </label>
                <input
                  type="url"
                  placeholder="https://drive.google.com/..."
                  value={pitchDoc}
                  onChange={(e) => setPitchDoc(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #CBD5E1',
                    background: '#FFFFFF',
                    color: '#0A192F',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>

            {/* BOTONES DE ACCIÓN */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '16px', borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
              <button
                type="button"
                onClick={() => setScreen('galeria')}
                style={{
                  padding: '14px 26px',
                  borderRadius: '12px',
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                  color: '#475569',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>

              <button
                type="submit"
                style={{
                  padding: '14px 32px',
                  borderRadius: '12px',
                  border: 'none',
                  background: '#0A192F',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '15px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(10, 25, 47, 0.25)'
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} color="#22C55E" /> ¡Proyecto Registrado!
                  </>
                ) : (
                  <>
                    <UploadCloud size={18} /> Publicar Proyecto Oficial
                  </>
                )}
              </button>
            </div>
          </form>

          {/* RIGHT PREVIEW PANEL */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#64748B', letterSpacing: '0.08em', marginBottom: '12px' }}>
              VISTA PREVIA PARA EVALUADORES
            </div>

            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #CBD5E1',
              padding: '32px',
              boxShadow: '0 12px 36px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '8px',
                  background: '#0A192F',
                  color: '#F2C24C',
                  fontSize: '11px',
                  fontWeight: 800
                }}>
                  {currentTrackObj?.title || 'Track FI UNAM'}
                </span>

                <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748B' }}>
                  {teamName || 'Equipo FI'}
                </span>
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0A192F', marginBottom: '10px' }}>
                {title || 'Título de tu Proyecto'}
              </h3>

              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                {tagline || 'Resumen ejecutivo claro y convincente de tu innovación tecnológica para la Semana DIE.'}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {technologies.map((t, idx) => (
                  <span key={idx} style={{ padding: '4px 10px', borderRadius: '6px', background: '#F1F5F9', color: '#334155', fontSize: '12px', fontWeight: 700 }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16A34A', fontSize: '13px', fontWeight: 700 }}>
                  <CheckCircle2 size={16} /> Listo para Jurado
                </div>
                <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Hackathon 48 hrs</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
