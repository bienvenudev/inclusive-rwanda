import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import FeedbackButton from './components/FeedbackButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <FeedbackButton />
    </div>
  );
}

export default App;
