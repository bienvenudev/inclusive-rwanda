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

      <header className="glass-card border-b border-gray-700/50 sticky top-0 z-40">
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

            <nav className="hidden lg:flex items-center space-x-2" role="navigation" aria-label="Main navigation">
              <ul className="flex gap-1">
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

              {/* GitHub Link */}
              <div className="ml-4 pl-4 border-l border-gray-700">
                <a
                  href="https://github.com/bienvenudev/inclusive-rwanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 focus-ring group"
                  aria-label="View project on GitHub (opens in new tab)"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.918.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.479C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                  </svg>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
            </nav>

            <Menu as="div" className="lg:hidden relative">
              <MenuButton className="inline-flex items-center justify-center p-3 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 focus-ring transition-all duration-300 group">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="block h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                portal={false}
                modal={false}
                anchor="bottom end"
                className="mt-2 w-52 glass-card border border-gray-700/50 rounded-xl shadow-xl z-[60] overflow-hidden"
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

                  {/* GitHub Link in Mobile Menu */}
                  <div className="border-t border-gray-700/50 mt-2 pt-2">
                    <MenuItem>
                      <a
                        href="https://github.com/bienvenudev/inclusive-rwanda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full text-left px-4 py-3 text-base text-gray-200 hover:text-white hover:bg-white/10 data-focus:bg-white/10 data-focus:text-white transition-all duration-200"
                      >
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.918.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.479C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                        </svg>
                        <span className="flex-1">GitHub</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </MenuItem>
                  </div>
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