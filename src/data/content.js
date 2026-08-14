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
      '--sky-top': '#26324A',
      '--sky-mid': '#58647A',
      '--sky-bottom': '#C4A69A',

      '--mountain-back': '#5C6474',
      '--mountain-front': '#3E4657',

      '--terrain-base': '#66705F',
      '--terrain-dark': '#4D554A',

      '--fog': 'rgba(220, 210, 205, 0.24)',

      '--light': '#F4D6A3',
      '--text-primary': '#F7F2EA',

      '--card-bg': '#F7F3EA',
      '--card-line': '#DCD5CA',
    }
  },

  sunrise: {
    id: 'sunrise',
    start: 7,
    end: 11,
    label: 'Sunrise',
    colors: {
      '--sky-top': '#B87870',
      '--sky-mid': '#D79A79',
      '--sky-bottom': '#F2C99B',

      '--mountain-back': '#687080',
      '--mountain-front': '#4B5362',

      '--terrain-base': '#786A58',
      '--terrain-dark': '#5B5146',

      '--fog': 'rgba(255, 220, 190, 0.28)',

      '--light': '#FFD58A',
      '--text-primary': '#2F3034',

      '--card-bg': '#FAF6ED',
      '--card-line': '#DDD5C8',
    }
  },

  daylight: {
    id: 'daylight',
    start: 12,
    end: 14,
    label: 'Daylight',
    colors: {
      '--sky-top': '#6FA9C0',
      '--sky-mid': '#9CCBD5',
      '--sky-bottom': '#D9E7D8',

      '--mountain-back': '#66828A',
      '--mountain-front': '#4B6870',

      '--terrain-base': '#687B5D',
      '--terrain-dark': '#4E6249',

      '--fog': 'rgba(235, 242, 229, 0.25)',

      '--light': '#FFF0B0',
      '--text-primary': '#26332D',

      '--card-bg': '#F8F4EA',
      '--card-line': '#D8D5CA',
    }
  },

  sunset: {
    id: 'sunset',
    start: 15,
    end: 17,
    label: 'Sunset',
    colors: {
      '--sky-top': '#665C78',
      '--sky-mid': '#B27B78',
      '--sky-bottom': '#E6B27F',

      '--mountain-back': '#625A68',
      '--mountain-front': '#45414F',

      '--terrain-base': '#756653',
      '--terrain-dark': '#564A40',

      '--fog': 'rgba(237, 194, 166, 0.25)',

      '--light': '#FFD28C',
      '--text-primary': '#302B31',

      '--card-bg': '#FAF3E6',
      '--card-line': '#DED3C3',
    }
  },

  evening: {
    id: 'evening',
    start: 18,
    end: 21,
    label: 'Evening',
    colors: {
      '--sky-top': '#293653',
      '--sky-mid': '#52617A',
      '--sky-bottom': '#8E8290',

      '--mountain-back': '#4D5668',
      '--mountain-front': '#384152',

      '--terrain-base': '#4F5B4C',
      '--terrain-dark': '#394238',

      '--fog': 'rgba(150, 156, 175, 0.22)',

      '--light': '#DCCFA8',
      '--text-primary': '#F0ECE4',

      '--card-bg': '#F2EEE6',
      '--card-line': '#D5D0C7',
    }
  },

  night: {
    id: 'night',
    start: 22,
    end: 4,
    label: 'Midnight Sleep',
    colors: {
      // Tetap malam, tapi tidak pure black
      '--sky-top': '#182235',
      '--sky-mid': '#293951',
      '--sky-bottom': '#45566A',

      // Gunung masih punya silhouette yang jelas
      '--mountain-back': '#3E4C5E',
      '--mountain-front': '#2E3A4A',

      // Tanah tetap visible
      '--terrain-base': '#3E4A40',
      '--terrain-dark': '#2D3730',

      // Sedikit moonlit atmosphere
      '--fog': 'rgba(155, 175, 195, 0.18)',

      '--light': '#C8D8E8',
      '--text-primary': '#F0F2EE',

      // Card tetap terang agar readable
      '--card-bg': '#EEEAE1',
      '--card-line': '#D2CEC5',
    }
  }
};

export const profile = {
  name: 'Abmi S. Edri',
  nickname: 'Abmi',
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
