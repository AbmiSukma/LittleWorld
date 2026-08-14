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
    label: 'Pagi',
    colors: {
      '--sky-top': '#6896B2',
      '--sky-mid': '#9CAAB7',
      '--sky-bottom': '#EBC1A4',

      '--mountain-back': '#697A8C',
      '--mountain-front': '#4A5C6D',

      '--terrain-base': '#5A7553',
      '--terrain-dark': '#42583C',

      '--fog': 'rgba(215, 225, 235, 0.28)',

      '--light': '#FFE8AC',
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
    label: 'Sore',
    colors: {
      '--sky-top': '#525571',
      '--sky-mid': '#9A6D7A',
      '--sky-bottom': '#D98A6C',

      '--mountain-back': '#544D63',
      '--mountain-front': '#3D364A',

      '--terrain-base': '#4E6152',
      '--terrain-dark': '#38483B',

      '--fog': 'rgba(217, 138, 108, 0.15)',

      '--light': '#FFC88A',
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
