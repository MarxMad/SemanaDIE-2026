import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SponsorsTicker from './components/SponsorsTicker';
import AboutSection from './components/AboutSection';
import ObjectivesSection from './components/ObjectivesSection';
import ActivitiesSection from './components/ActivitiesSection';
import TracksSection from './components/TracksSection';
import ScheduleSection from './components/ScheduleSection';
import HowToParticipateSection from './components/HowToParticipateSection';
import ContactSection from './components/ContactSection';
import SponsorshipTiersSection from './components/SponsorshipTiersSection';
import PresentationDeckView from './components/PresentationDeckView';
import TeamsView from './components/TeamsView';
import ProjectsView from './components/ProjectsView';
import UploadProjectView from './components/UploadProjectView';
import HackathonHubView from './components/HackathonHubView';
import ProfileModal from './components/ProfileModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

import { INITIAL_TEAMS, INITIAL_PROJECTS } from './data/platformData';
import { isPrivateDossierAccess, clearPrivateDossierRoute } from './config/privateRoutes';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(() =>
    isPrivateDossierAccess() ? 'aportaciones' : 'landing'
  ); // 'landing' | 'equipos' | 'galeria' | 'subir' | 'aportaciones'
  const [isPrivatePortal, setIsPrivatePortal] = useState(() => isPrivateDossierAccess());
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Inicia en falso para que el usuario pueda probar el flujo simulado de inicio de sesión
  const [userProfile, setUserProfile] = useState({
    name: 'Valeria Torres Méndez',
    role: 'Estudiante FI · Track Electrónica & IA',
    email: 'valeria.torres@ingenieria.unam.mx',
    initials: 'VT',
    career: 'Ingeniería en Computación · 7° Semestre FI UNAM',
    teamName: 'Circuit Breakers (3/4)',
    projectName: 'PCB Vision AI',
    skills: ['Python', 'C++', 'Diseño PCB', 'OpenCV', 'ROS', 'Microcontroladores']
  });

  // Dynamic state for Hackathon Platform
  const [teams, setTeams] = useState(INITIAL_TEAMS);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  // Modals & Presentation PPT Mode
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [isPPTModeOpen, setIsPPTModeOpen] = useState(false);
  const [sponsorshipLang, setSponsorshipLang] = useState('es');

  useEffect(() => {
    const syncPrivateRoute = () => {
      const isPrivate = isPrivateDossierAccess();
      setIsPrivatePortal(isPrivate);
      if (isPrivate) {
        setCurrentScreen('aportaciones');
      }
    };

    syncPrivateRoute();
    window.addEventListener('hashchange', syncPrivateRoute);
    window.addEventListener('popstate', syncPrivateRoute);

    return () => {
      window.removeEventListener('hashchange', syncPrivateRoute);
      window.removeEventListener('popstate', syncPrivateRoute);
    };
  }, []);

  const navigateToScreen = useCallback((screen) => {
    if (screen !== 'aportaciones' && isPrivatePortal) {
      clearPrivateDossierRoute();
      setIsPrivatePortal(false);
    }
    setCurrentScreen(screen);
  }, [isPrivatePortal]);

  const openPPTMode = useCallback(() => {
    if (isPrivatePortal) {
      setIsPPTModeOpen(true);
    }
  }, [isPrivatePortal]);

  const handleCreateTeam = (newTeam) => {
    setTeams([newTeam, ...teams]);
  };

  const handleUploadProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleLoginSuccess = (profile) => {
    if (profile) setUserProfile(profile);
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {/* Sticky Glass Navbar */}
      <Navbar
        currentScreen={currentScreen}
        setScreen={navigateToScreen}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userProfile={userProfile}
        openAuthModal={openAuthModal}
        openProfileModal={() => setProfileModalOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {currentScreen === 'landing' && (
          <>
            <HeroSection
              setScreen={navigateToScreen}
              openAuthModal={openAuthModal}
            />
            <SponsorsTicker />
            <AboutSection />
            <ObjectivesSection />
            <ActivitiesSection />
            <TracksSection setScreen={navigateToScreen} />
            <ScheduleSection />
            <HowToParticipateSection
              setScreen={navigateToScreen}
              openAuthModal={openAuthModal}
            />
            <ContactSection />
          </>
        )}

        {currentScreen === 'hackathon' && (
          <HackathonHubView
            setScreen={navigateToScreen}
          />
        )}

        {currentScreen === 'aportaciones' && isPrivatePortal && (
          <SponsorshipTiersSection
            setScreen={navigateToScreen}
            openPPTMode={openPPTMode}
            lang={sponsorshipLang}
            setLang={setSponsorshipLang}
          />
        )}

        {currentScreen === 'equipos' && (
          <TeamsView
            teams={teams}
            onCreateTeam={handleCreateTeam}
          />
        )}

        {currentScreen === 'galeria' && (
          <ProjectsView
            projects={projects}
          />
        )}

        {currentScreen === 'subir' && (
          <UploadProjectView
            teams={teams}
            onUploadProject={handleUploadProject}
            setScreen={navigateToScreen}
          />
        )}
      </main>

      {/* Modals */}
      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        setScreen={navigateToScreen}
        userProfile={userProfile}
        onLogout={() => setIsLoggedIn(false)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
        onLoginSuccess={handleLoginSuccess}
      />

      {isPrivatePortal && isPPTModeOpen && (
        <PresentationDeckView
          onClose={() => setIsPPTModeOpen(false)}
          lang={sponsorshipLang}
          setLang={setSponsorshipLang}
        />
      )}

      {/* Footer */}
      <Footer setScreen={navigateToScreen} />
    </div>
  );
}
