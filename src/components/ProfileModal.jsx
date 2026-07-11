import React from 'react';
import { X, Award, Cpu, CheckCircle2, Users, FolderGit2, LogOut, Edit3, ShieldCheck } from 'lucide-react';

export default function ProfileModal({ isOpen, onClose, setScreen, userProfile, onLogout }) {
  if (!isOpen) return null;

  const profile = userProfile || {
    name: 'Valeria Torres Méndez',
    role: 'Estudiante FI · Track Electrónica & IA',
    email: 'valeria.torres@ingenieria.unam.mx',
    initials: 'VT',
    career: 'Ingeniería en Computación · 7° Semestre FI UNAM',
    teamName: 'Circuit Breakers (3/4)',
    projectName: 'PCB Vision AI',
    skills: ['Python', 'C++', 'Diseño PCB', 'OpenCV', 'ROS', 'Microcontroladores']
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(10, 13, 36, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '24px'
    }}>
      <div className="card-glass" style={{
        maxWidth: '680px',
        width: '100%',
        padding: '36px',
        position: 'relative',
        border: '1px solid var(--border-gold)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.7)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '84px',
            height: '84px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #2B338C, var(--gold-primary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            color: '#FFFFFF',
            fontSize: '32px',
            boxShadow: '0 0 20px rgba(213, 159, 15, 0.4)'
          }}>
            {profile.initials || 'VT'}
          </div>

          <div>
            <span style={{
              padding: '4px 12px',
              borderRadius: '999px',
              background: 'rgba(213, 159, 15, 0.18)',
              color: 'var(--gold-light)',
              fontSize: '12px',
              fontWeight: 700
            }}>
              CREDENCIAL ACTIVA · SEMANA DIE 2026
            </span>
            <h2 style={{ fontSize: '26px', color: '#FFFFFF', margin: '6px 0 2px' }}>
              {profile.name}
            </h2>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              {profile.career || profile.role}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--gold-light)', marginTop: '4px' }}>
              ✉️ {profile.email}
            </div>
          </div>
        </div>

        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
          Usuario autenticado en la plataforma de <strong>Semana DIE 2026</strong>. Habilitado para inscripciones a Hackathon, carga de proyectos técnicos, registro a talleres prácticos y networking corporativo.
        </p>

        {/* Skills badges */}
        {profile.skills && (
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '10px' }}>
              ESPECIALIDAD / ÁREAS TÉCNICAS
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {profile.skills.map((sk, i) => (
                <span
                  key={i}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: 500
                  }}
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Current Team & Project Quick Access */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginBottom: '26px'
        }}>
          <div style={{
            padding: '18px',
            borderRadius: '14px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-light)', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>
              <Users size={14} /> MI EQUIPO O TRACK
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
              {profile.teamName || 'Equipo Inscrito'}
            </div>
            <button
              onClick={() => { onClose(); setScreen('equipos'); }}
              style={{ background: 'none', border: 'none', color: 'var(--gold-light)', fontSize: '13px', fontWeight: 600, cursor: 'pointer', padding: 0 }}
            >
              Ver en Plataforma →
            </button>
          </div>

          <div style={{
            padding: '18px',
            borderRadius: '14px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>
              <FolderGit2 size={14} /> ACTIVIDAD / PROYECTO
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
              {profile.projectName || 'Proyecto Innovación'}
            </div>
            <button
              onClick={() => { onClose(); setScreen('galeria'); }}
              style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', fontSize: '13px', fontWeight: 600, cursor: 'pointer', padding: 0 }}
            >
              Inspeccionar en Galería →
            </button>
          </div>
        </div>

        {/* Actions: Close & Logout */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={onClose}
            className="btn-gold"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            Cerrar Perfil
          </button>
          <button
            onClick={() => {
              if (onLogout) onLogout();
              onClose();
            }}
            style={{
              padding: '12px 20px',
              borderRadius: '12px',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              color: '#FCA5A5',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <LogOut size={16} /> Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
