import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './GlobalNav.css';

const navItems = [
  {
    id: 'home',
    path: '/',
    label: 'HOME',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    id: 'resume',
    path: '/resume',
    label: 'RESUME',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7V3.5L18.5 9H15zm-7 4h8v2H8v-2zm0 4h5v2H8v-2z" />
      </svg>
    ),
  },
  {
    id: 'work',
    path: '/work',
    label: 'WORK',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20 6h-2.18c.07-.44.18-.88.18-1.34C18 2.54 15.46 0 12.34 0c-1.6 0-3.08.64-4.14 1.67L7 3H4C2.9 3 2 3.9 2 5v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9.71 3.08A2.999 2.999 0 0 1 12.34 2c1.54 0 2.79 1.25 2.79 2.8 0 .46-.12.9-.3 1.2H9.41l.3-2.92z" />
      </svg>
    ),
  },
  {
    id: 'journal',
    path: '/journal',
    label: 'JOURNAL',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 14H7v-2h6v2zm3-4H7v-2h9v2zm0-4H7V6h9v2z" />
      </svg>
    ),
  },
  {
    id: 'notes',
    path: '/notes',
    label: 'NOTES',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M3 18h12v-2H3v2zm0-5h12v-2H3v2zm0-7v2h12V6H3zm13 9.41V9h5V7h-7v11.41l2-2z" />
      </svg>
    ),
  },
  {
    id: 'playground',
    path: '/playground',
    label: 'PLAY',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-6v-2h6v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
      </svg>
    ),
  },
];

const GlobalNav = () => {
  const location = useLocation();
  const [hoveredId, setHoveredId] = useState(null);

  const isActive = (item) =>
    item.path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(item.path);

  return (
    <nav className="global-nav" aria-label="Main navigation">
      <ul className="nav-pill">
        {navItems.map((item) => {
          const active = isActive(item);
          return (
            <li
              key={item.id}
              className="nav-item"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link
                to={item.path}
                className={`nav-link ${active ? 'nav-link--active' : ''}`}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
              >
                {/* Active bubble behind icon+label */}
                {active && (
                  <motion.span
                    className="nav-active-bg"
                    layoutId="nav-active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <span className="nav-icon">{item.icon}</span>

                {/* Label – only visible when active */}
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.span
                      className="nav-label"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* Hover tooltip – only show when NOT active */}
              <AnimatePresence>
                {hoveredId === item.id && !active && (
                  <motion.div
                    className="nav-tooltip"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.12 }}
                  >
                    {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default GlobalNav;
