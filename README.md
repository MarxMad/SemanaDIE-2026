# Semana DIE 2026 — Plataforma & Landing Page

Proyecto migrado a **React + Vite** combinando la información oficial del Congreso y Hackathon de la **División de Ingeniería Eléctrica (DIE) de la Facultad de Ingeniería de la UNAM** con una plataforma interactiva para registro de equipos y galería de proyectos.

---

## 🏛️ Características Principales

1. **Landing Oficial de Semana DIE 2026**
   - Integración de contenido oficial de [die.unam.mx/semanaDIE/2026/](https://www.die.unam.mx/semanaDIE/2026/).
   - Carrusel / Ticker animado con todas las empresas expositoras y universidades aliadas (**Google, Red Hat, IBM, Oracle, Huawei, Capital One, PC PUMA, British Council, COMEXUS, University of Illinois, University of Florida, University of Groningen**, etc.).
   - Sección de **Posgrado Internacional** con información sobre becas y estancias científicas.
   - **Agenda minuto a minuto** filtrable por Posgrado, Talleres Técnicos, Hackathon 48h y Ceremonia de Clausura.

2. **Plataforma Hackathon 48 Horas**
   - **Buscador y Creador de Equipos**: Permite explorar equipos por track de competencia (`Agentes de IA`, `Blockchain & Web3`, `Desarrollo Sostenible`, `Energías Renovables`, `Electrónica & Sistemas Embebidos`).
   - **Galería de Proyectos**: Visualización y filtrado de proyectos por categoría con enlaces a repositorio y demo.
   - **Formulario de Registro de Proyectos**: Formulario interactivo con etiquetas dinámicas de tecnologías.
   - **Perfil de Estudiante y Modal de Autenticación**.

---

## 🚀 Cómo ejecutar en desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar el servidor local de desarrollo (Vite)
npm run dev
```

El servidor estará disponible normalmente en `http://localhost:5173`.

---

## 📦 Estructura del Proyecto

```
SemanaDIE/
├── index.html                  # HTML con tipografías Google Fonts (Space Grotesk, Outfit, IBM Plex Sans)
├── src/
│   ├── data/
│   │   ├── sponsors.js         # Datos de empresas expositoras y universidades
│   │   ├── tracks.js           # Las 5 categorías oficiales del Hackathon
│   │   ├── schedule.js         # Programa académico y cronograma del Hackathon
│   │   └── platformData.js     # Equipos y proyectos iniciales
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación Glassmorphism
│   │   ├── HeroSection.jsx     # Hero institucional e interactivo
│   │   ├── SponsorsTicker.jsx  # Ticker animado infinito
│   │   ├── AboutSection.jsx    # Descripción y numeralia institucional
│   │   ├── ObjectivesSection.jsx # Objetivos oficiales
│   │   ├── ActivitiesSection.jsx # Conferencias, Workshops y Posgrado Internacional
│   │   ├── TracksSection.jsx   # Categorías del Hackathon
│   │   ├── ScheduleSection.jsx # Agenda interactiva por pestañas
│   │   ├── HowToParticipateSection.jsx # Pasos de participación
│   │   ├── TeamsView.jsx       # Explorador y creador de equipos
│   │   ├── ProjectsView.jsx    # Galería de proyectos
│   │   ├── UploadProjectView.jsx # Subida de proyectos
│   │   ├── ProfileModal.jsx    # Modal de perfil de estudiante
│   │   ├── AuthModal.jsx       # Registro e inicio de sesión
│   │   └── Footer.jsx          # Pie de página institucional FI UNAM
│   ├── index.css               # Sistema de diseño, tokens y estilos de vanguardia
│   ├── App.jsx                 # Controlador principal de vistas
│   └── main.jsx                # Punto de entrada de React
└── package.json
```
