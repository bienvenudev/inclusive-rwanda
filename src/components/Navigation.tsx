import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'why-matters', label: 'Why It Matters', path: '/why-it-matters' },
    { id: 'quick-start', label: 'Quick Start', path: '/quick-start' },
    { id: 'resources', label: 'Resources', path: '/resources' },
  ];

  const isCurrentPage = (path: string) => location.pathname === path;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="bg-gray-900 border-b border-gray-600 sticky top-0 z-50">
        <div className="container ">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="p-2 text-white text-xl font-bold hover:opacity-80 transition-opacity duration-200">
                <span className="text-blue-500">Inclusive Rwanda</span>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-2" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900 ${isCurrentPage(item.path)
                      ? 'bg-gray-800 text-blue-500 font-semibold border border-gray-600'
                      : 'text-gray-200 hover:text-gray-50 hover:bg-gray-800'
                    }`}
                  aria-current={isCurrentPage(item.path) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Menu as="div" className="md:hidden relative">
              <MenuButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                anchor="bottom end"
                className="mt-2 w-48 bg-gray-900 border border-gray-600 rounded-md shadow-lg focus:outline-none z-50"
              >
                <div className="py-1">
                  {navItems.map((item) => (
                    <MenuItem key={item.id}>
                      <Link
                        to={item.path}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 data-[focus]:bg-gray-800 data-[focus]:text-white ${isCurrentPage(item.path)
                            ? 'text-blue-500 font-semibold'
                            : 'text-gray-100'
                          }`}
                        aria-current={isCurrentPage(item.path) ? 'page' : undefined}
                      >
                        {item.label}
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