import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
