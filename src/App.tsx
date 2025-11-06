import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import WhyItMatters from './pages/WhyItMatters';
import QuickStart from './pages/QuickStart';
import Resources from './pages/Resources';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'why-matters':
        return <WhyItMatters />;
      case 'quick-start':
        return <QuickStart />;
      case 'resources':
        return <Resources />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
