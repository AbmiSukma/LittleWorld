import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTimeEngine } from './hooks/useTimeEngine';
import GlobalNav from './components/layout/GlobalNav';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import Journal from './pages/Journal';
import Notes from './pages/Notes';
import Play from './pages/Play';

function App() {
  useTimeEngine(); // Initializes time engine and CSS variables

  return (
    <Router>
      <GlobalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/playground" element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;
