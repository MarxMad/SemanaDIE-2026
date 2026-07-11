export const INITIAL_TEAMS = [
  {
    id: 't1',
    name: 'Circuit Breakers',
    track: 'electronica',
    membersCount: 3,
    maxMembers: 4,
    seeking: 'Diseño de PCB multicapa y firmware en C++',
    description: 'Sistema de inspección óptica automatizada para circuitos impresos utilizando visión por computadora y cámaras embebidas.',
    avatar: 'CB'
  },
  {
    id: 't2',
    name: 'Nodo Cero',
    track: 'blockchain',
    membersCount: 2,
    maxMembers: 4,
    seeking: 'Desarrollo en Solidity y Frontend React/Ethers.js',
    description: 'Plataforma descentralizada para certificar créditos de energía solar y trazabilidad comunitaria en redes universitarias.',
    avatar: 'N0'
  },
  {
    id: 't3',
    name: 'EcoLoop',
    track: 'sostenible',
    membersCount: 4,
    maxMembers: 4,
    seeking: 'Equipo completo',
    description: 'Red de sensores IoT de bajo costo para el monitoreo en tiempo real de la calidad del agua en cisternas de Ciudad Universitaria.',
    avatar: 'EL'
  },
  {
    id: 't4',
    name: 'AgentIA',
    track: 'agentes',
    membersCount: 1,
    maxMembers: 4,
    seeking: 'Especialistas en Machine Learning y Backend Fastify',
    description: 'Agente autónomo multi-herramienta que ayuda a estudiantes de ingeniería a planificar rutas de estudio adaptativas.',
    avatar: 'AI'
  },
  {
    id: 't5',
    name: 'Vatios',
    track: 'renovables',
    membersCount: 3,
    maxMembers: 4,
    seeking: 'Electrónica de potencia y modelado de baterías',
    description: 'Seguidor solar automático de doble eje con control difuso para maximizar la captación en edificios académicos.',
    avatar: 'VT'
  },
  {
    id: 't6',
    name: 'Los del Lab 3',
    track: 'electronica',
    membersCount: 2,
    maxMembers: 4,
    seeking: 'Especialista en FreeRTOS y diseño en Altium',
    description: 'Dispositivo wearable de bajo consumo para monitoreo de fatiga en operadores industriales mediante señales bioeléctricas.',
    avatar: 'L3'
  }
];

export const INITIAL_PROJECTS = [
  {
    id: 'p1',
    title: 'PCB Vision AI',
    team: 'Circuit Breakers',
    track: 'electronica',
    tagline: 'Inspección automática de placas en tiempo real con visión embebida',
    description: 'Un sistema hardware + software que utiliza una cámara montada en un brazo robótico de bajo costo y modelos YOLO optimizados para detectar cortocircuitos y soldaduras frías.',
    technologies: ['Python', 'OpenCV', 'ESP32-CAM', 'Diseño PCB', 'PyTorch'],
    repo: 'https://github.com/circuit-breakers/pcb-vision',
    demo: 'https://youtube.com/watch?v=demo',
    featured: true
  },
  {
    id: 'p2',
    title: 'VoltChain UNAM',
    team: 'Nodo Cero',
    track: 'blockchain',
    tagline: 'Trazabilidad descentralizada de energía solar universitaria',
    description: 'Contratos inteligentes desplegados en una red Layer 2 que registran la generación limpia de paneles solares y permiten transaccionar excedentes.',
    technologies: ['Solidity', 'Hardhat', 'React', 'Ethers.js', 'Web3'],
    repo: 'https://github.com/nodocero/voltchain',
    demo: 'https://voltchain-unam.mx',
    featured: true
  },
  {
    id: 'p3',
    title: 'AquaSense CU',
    team: 'EcoLoop',
    track: 'sostenible',
    tagline: 'Monitoreo autónomo de calidad del agua con sensores de bajo costo',
    description: 'Dispositivos flotantes autosustentables con paneles solares que miden pH, turbidez y temperatura, enviando telemetría vía LoRaWAN.',
    technologies: ['C++', 'LoRaWAN', 'IoT', 'Sensores', 'Dashboard React'],
    repo: 'https://github.com/ecoloop/aquasense',
    featured: true
  },
  {
    id: 'p4',
    title: 'AutoTutor FI',
    team: 'AgentIA',
    track: 'agentes',
    tagline: 'Agente conversacional que genera laboratorios interactivos personalizados',
    description: 'Un agente construido con LangChain y modelos locales que analiza el programa de estudio de un alumno y crea guías prácticas interactivas.',
    technologies: ['Python', 'LangChain', 'FastAPI', 'Multi-Agent', 'Tailwind'],
    repo: 'https://github.com/agentia/autotutor',
    featured: false
  },
  {
    id: 'p5',
    title: 'SolTrack Dual',
    team: 'Vatios',
    track: 'renovables',
    tagline: 'Seguidor solar inteligente de doble eje para azoteas universitarias',
    description: 'Sistema mecatrónico que calcula la posición óptima del sol combinando algoritmos astronómicos y sensores LDR fotovoltaicos.',
    technologies: ['Arduino', 'Mecatrónica', 'Python', 'Energía Solar'],
    repo: 'https://github.com/vatios/soltrack',
    featured: false
  },
  {
    id: 'p6',
    title: 'GridDAO',
    team: 'Cadena Norte',
    track: 'blockchain',
    tagline: 'Gobernanza descentralizada para microrredes eléctricas comunitarias',
    description: 'DAO que permite a vecinos de una comunidad votar y financiar mejoras en su infraestructura eléctrica compartida.',
    technologies: ['Ethereum', 'IPFS', 'NextJS', 'Smart Contracts'],
    repo: 'https://github.com/cadenanorte/grid-dao',
    featured: false
  }
];
