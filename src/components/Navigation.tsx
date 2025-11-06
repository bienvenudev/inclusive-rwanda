import React, { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', page: 'home' },
    { id: 'why-matters', label: 'Why It Matters', page: 'why-matters' },
    { id: 'quick-start', label: 'Quick Start', page: 'quick-start' },
    { id: 'resources', label: 'Resources', page: 'resources' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent, page: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavigate(page);
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <button
              onClick={() => handleNavigate('home')}
              className="brand-button"
              aria-label="Inclusive Rwanda - Go to home page"
            >
              <span className="brand-text">Inclusive Rwanda</span>
            </button>
          </div>

          <nav className="nav" role="navigation" aria-label="Main navigation">
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <ul
              id="main-menu"
              className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`}
              role="menubar"
            >
              {navItems.map((item) => (
                <li key={item.id} role="none">
                  <button
                    className={`nav-link ${currentPage === item.page ? 'nav-link--active' : ''}`}
                    onClick={() => handleNavigate(item.page)}
                    onKeyDown={(e) => handleKeyDown(e, item.page)}
                    role="menuitem"
                    aria-current={currentPage === item.page ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;