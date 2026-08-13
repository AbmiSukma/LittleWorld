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
