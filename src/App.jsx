import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import TrainingHome from './pages/training/TrainingHome';
import TrainingCurriculum from './pages/training/TrainingCurriculum';
import TrainingWebinar from './pages/training/TrainingWebinar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/training" element={<TrainingHome />} />
        <Route path="/training/curriculum" element={<TrainingCurriculum />} />
        <Route path="/training/webinar" element={<TrainingWebinar />} />
      </Routes>
    </Router>
  );
}

export default App;
