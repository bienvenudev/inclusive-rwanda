import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <ScrollToTop />
      <Navigation />
        <Outlet />
    </div>
  );
}

export default App;
