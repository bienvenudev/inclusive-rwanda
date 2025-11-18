import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { IoAccessibility } from 'react-icons/io5';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'why-matters', label: 'Why It Matters', path: '/why-it-matters' },
    { id: 'quick-start', label: 'Quick Start', path: '/quick-start' },
    { id: 'resources', label: 'Resources', path: '/resources' },
  ];

  const isCurrentPage = (path: string) => location.pathname === path;

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="skip-link fixed top-4 left-4 bg-purple-600 text-white px-6 py-3 rounded-xl text-sm font-medium z-50 transform -translate-y-full opacity-0 focus:translate-y-0 focus:opacity-100 transition-all duration-300 focus-ring shadow-xl"
      >
        Skip to main content
      </a>

      <header className="glass-card border-b border-gray-700/50 sticky top-0 z-50">
        <div className="container">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center">
              <Link
                to="/"
                onClick={handleLogoClick}
                className="group flex items-center space-x-2 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 focus-ring"
                aria-label="Inclusive Rwanda - Go to Home page"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">
                    <IoAccessibility className="w-8 h-8 text-purple-300" />

                  </span>
                </div>
                <span className="text-white text-xl font-bold font-display">
                  Inclusive Rwanda
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex" role="navigation" aria-label="Main navigation">
              <ul className="flex space-x-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className={`relative px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300 focus-ring group ${isCurrentPage(item.path)
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                        }`}
                      aria-current={isCurrentPage(item.path) ? 'page' : undefined}
                    >
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Menu as="div" className="md:hidden relative">
              <MenuButton className="inline-flex items-center justify-center p-3 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 focus-ring transition-all duration-300 group">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="block h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                anchor="bottom end"
                className="mt-2 w-52 glass-card border border-gray-700/50 rounded-xl shadow-xl z-50 overflow-hidden"
              >
                <div className="py-2">
                  {navItems.map((item) => (
                    <MenuItem key={item.id}>
                      <Link
                        to={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className={`flex items-center w-full text-left px-4 py-3 text-base transition-all duration-200 ${isCurrentPage(item.path)
                          ? 'bg-purple-600 text-white font-semibold'
                          : 'text-gray-200 hover:text-white hover:bg-white/10 data-focus:bg-white/10 data-focus:text-white'
                          }`}
                        aria-current={isCurrentPage(item.path) ? 'page' : undefined}
                      >
                        <span className="flex-1">{item.label}</span>
                        {isCurrentPage(item.path) && (
                          <div className="w-2 h-2 rounded-full bg-white ml-2"></div>
                        )}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;