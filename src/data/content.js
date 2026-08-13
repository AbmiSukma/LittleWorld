export const navigation = [
  { id: 'home', path: '/', label: 'HOME', icon: 'home' },
  { id: 'resume', path: '/resume', label: 'RESUME', icon: 'file' },
  { id: 'work', path: '/work', label: 'WORK', icon: 'briefcase' },
]; 

export const environmentStates = {
  fajar: {
    id: 'fajar',
    start: 5,
    end: 6,
    label: 'Fajar',
    colors: {
      '--sky-top': '#182536',
      '--sky-mid': '#344657',
      '--sky-bottom': '#7A7C82',

      '--mountain-back': '#3A4A58',
      '--mountain-front': '#253340',

      '--terrain-base': '#56604E',
      '--terrain-dark': '#394238',

      '--fog': 'rgba(150, 155, 158, 0.22)',

      '--light': '#D8E2E6',
      '--text-primary': '#F4F1EA',

      '--card-bg': '#F3F0E9',
      '--card-line': '#D9D4CB',

      '--cloud-color': 'rgba(40, 50, 70, 0.8)',
      '--hill-color': '#38433d',
      '--ground-color': '#2b332e',
      '--tree-color': '#1c2420',
      '--tree-shadow': '#121715',
      '--tent-light': '#8c9da6',
      '--tent-dark': '#60707a',
      '--tent-inside': '#1a2024',
      '--tent-flag': '#8a4242',
      '--fire-glow': 'rgba(255, 140, 60, 0.2)',
      '--fire-orange': '#ff8c3c',
      '--fire-yellow': '#ffc857',
    }
  },

  sunrise: {
    id: 'sunrise',
    start: 7,
    end: 11,
    label: 'Sunrise',
    colors: {
      '--sky-top': '#8C6F78',
      '--sky-mid': '#C58C78',
      '--sky-bottom': '#E9B68A',

      '--mountain-back': '#725D5A',
      '--mountain-front': '#4A3D3A',

      '--terrain-base': '#685349',
      '--terrain-dark': '#453A36',

      '--fog': 'rgba(245, 191, 153, 0.28)',

      '--light': '#FFD79A',
      '--text-primary': '#2D2726',

      '--card-bg': '#F5F0E7',
      '--card-line': '#DED5C8',

      '--cloud-color': 'rgba(180, 120, 110, 0.7)',
      '--hill-color': '#5c4b44',
      '--ground-color': '#423530',
      '--tree-color': '#2b221f',
      '--tree-shadow': '#1a1413',
      '--tent-light': '#d2ac9a',
      '--tent-dark': '#9e7a68',
      '--tent-inside': '#382a24',
      '--tent-flag': '#a85042',
      '--fire-glow': 'rgba(255, 140, 60, 0.1)',
      '--fire-orange': '#ff9c5c',
      '--fire-yellow': '#ffe877',
    }
  },

  daylight: {
    id: 'daylight',
    start: 12,
    end: 14,
    label: 'Day Light',
    colors: {
      '--sky-top': '#4F88B8',
      '--sky-mid': '#73AFC0',
      '--sky-bottom': '#B5D4C7',

      '--mountain-back': '#628E91',
      '--mountain-front': '#486F75',

      '--terrain-base': '#879B70',
      '--terrain-dark': '#64795B',

      '--fog': 'rgba(190, 220, 213, 0.30)',

      '--light': '#FFF0A8',
      '--text-primary': '#263531',

      '--card-bg': '#F5F1E8',
      '--card-line': '#D8D8CF',

      '--cloud-color': 'rgba(255, 255, 255, 0.8)',
      '--hill-color': '#738c5b',
      '--ground-color': '#586b45',
      '--tree-color': '#3a472d',
      '--tree-shadow': '#26301d',
      '--tent-light': '#e3dbb8',
      '--tent-dark': '#b5ad8c',
      '--tent-inside': '#474332',
      '--tent-flag': '#c45858',
      '--fire-glow': 'rgba(0, 0, 0, 0)',
      '--fire-orange': 'rgba(0, 0, 0, 0)',
      '--fire-yellow': 'rgba(0, 0, 0, 0)',
    }
  },

  sunset: {
    id: 'sunset',
    start: 15,
    end: 17,
    label: 'Sunset',
    colors: {
      '--sky-top': '#6C5A67',
      '--sky-mid': '#A87567',
      '--sky-bottom': '#D49A6C',

      '--mountain-back': '#59606A',
      '--mountain-front': '#3E4650',

      '--terrain-base': '#76624F',
      '--terrain-dark': '#51473E',

      '--fog': 'rgba(220, 165, 125, 0.25)',

      '--light': '#FFD18A',
      '--text-primary': '#2B2929',

      '--card-bg': '#F4EFE5',
      '--card-line': '#DCD3C5',

      '--cloud-color': 'rgba(180, 120, 130, 0.7)',
      '--hill-color': '#665243',
      '--ground-color': '#4a3b30',
      '--tree-color': '#30261f',
      '--tree-shadow': '#1f1814',
      '--tent-light': '#d4a37b',
      '--tent-dark': '#a17452',
      '--tent-inside': '#3b2819',
      '--tent-flag': '#b85248',
      '--fire-glow': 'rgba(255, 120, 60, 0.15)',
      '--fire-orange': '#ff8c3c',
      '--fire-yellow': '#ffc857',
    }
  },

  evening: {
    id: 'evening',
    start: 18,
    end: 21,
    label: 'Evening',
    colors: {
      '--sky-top': '#263445',
      '--sky-mid': '#405363',
      '--sky-bottom': '#68717A',

      '--mountain-back': '#354653',
      '--mountain-front': '#25333F',

      '--terrain-base': '#4E594E',
      '--terrain-dark': '#343D37',

      '--fog': 'rgba(112, 126, 134, 0.22)',

      '--light': '#C8D8D8',
      '--text-primary': '#EAE8E2',

      '--card-bg': '#F1EEE7',
      '--card-line': '#D7D3CC',

      '--cloud-color': 'rgba(50, 60, 80, 0.8)',
      '--hill-color': '#3e4740',
      '--ground-color': '#2d332e',
      '--tree-color': '#1c211e',
      '--tree-shadow': '#111412',
      '--tent-light': '#9cb5ba',
      '--tent-dark': '#6b848a',
      '--tent-inside': '#22292b',
      '--tent-flag': '#964242',
      '--fire-glow': 'rgba(255, 140, 60, 0.2)',
      '--fire-orange': '#ff8c3c',
      '--fire-yellow': '#ffc857',
    }
  },

  night: {
    id: 'night',
    start: 22,
    end: 4,
    label: 'Midnight Sleep',
    colors: {
      '--sky-top': '#111B2B',
      '--sky-mid': '#1D2B3C',
      '--sky-bottom': '#344252',

      '--mountain-back': '#273746',
      '--mountain-front': '#1D2B37',

      '--terrain-base': '#3F4D45',
      '--terrain-dark': '#2D3833',

      '--fog': 'rgba(100, 117, 125, 0.20)',

      '--light': '#D7E3E6',
      '--text-primary': '#E8E9E4',

      '--card-bg': '#EDEAE3',
      '--card-line': '#D5D1C9',

      '--cloud-color': 'rgba(60, 56, 92, 0.8)',
      '--hill-color': '#38354c',
      '--ground-color': '#2a2538',
      '--tree-color': '#191c26',
      '--tree-shadow': '#11131a',
      '--tent-light': '#a49fc4',
      '--tent-dark': '#7b7899',
      '--tent-inside': '#1f1a26',
      '--tent-flag': '#a84242',
      '--fire-glow': 'rgba(255, 140, 60, 0.2)',
      '--fire-orange': '#ff8c3c',
      '--fire-yellow': '#ffc857',
    }
  }
};

export const profile = {
  name: 'Abmi S. Edri',
  nickname: 'Amey',
  title: 'UI/UX DESIGN LABS',
  email: 'abmisukma.e@gmail.com',
  bio: 'tinkerer pursuing quiet clarity with playfulness and curiosity. designing digital products, making games, building systems, and telling stories.',
  illustration: null, // Will use placeholder SVG
};

export const socials = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/abmi-sukma-1948ab250/', icon: 'in' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/abmisukma/', icon: 'ig' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/AbmiSukma', icon: 'gh' },
];

export const workCards = [
  {
    id: 'traveloka',
    company: 'TRAVELOKA',
    period: '2024–present',
    bullets: [
      'worked as ui/ux designer intern',
      'at traveloka, focusing on',
      'mobile app features and',
      'design system components.',
      'collaborated with product and',
      'engineering teams daily.',
    ],
    icon: '✈️',
  },
  {
    id: 'jestersuit',
    company: 'JESTERSUIT STUDIO',
    period: '2023–2024',
    bullets: [
      'co-founded a small indie',
      'game studio. designed ui/ux',
      'for mobile games, built',
      'prototypes in godot engine,',
      'and handled brand identity',
      'and visual direction.',
    ],
    icon: '🎮',
  },
];

export const academicCard = {
  id: 'informatics',
  title: 'INFORMATICS ENGINEERING',
  period: '2022–2026',
  bullets: [
    'gained b.eng., informatics',
    'engineering from uin sultan',
    'syarif kasim riau, pekanbaru.',
    'my final thesis is about',
    'design and development of',
    'interactive portfolio using',
    'modern web technologies.',
  ],
  icon: 'uin-suska',
};
