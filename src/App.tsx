import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import WhyItMatters from './pages/WhyItMatters';
import QuickStart from './pages/QuickStart';
import Resources from './pages/Resources';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="container">
        {currentPage === 'home' && <Home />}
        {currentPage === 'why-matters' && <WhyItMatters />}
        {currentPage === 'quick-start' && <QuickStart />}
        {currentPage === 'resources' && <Resources />}
      </div>
    </div>
  );
}

export default App;
