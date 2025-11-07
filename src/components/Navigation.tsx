import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Button from './Button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', page: 'home' },
    { id: 'why-matters', label: 'Why It Matters', page: 'why-matters' },
    { id: 'quick-start', label: 'Quick Start', page: 'quick-start' },
    { id: 'resources', label: 'Resources', page: 'resources' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="bg-gray-900 border-b border-gray-600 sticky top-0 z-50">
        <div className="container ">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Button
                onClick={() => handleNavigate('home')}
                variant="ghost"
                className="p-2 text-white text-xl font-bold"
                aria-label="Inclusive Rwanda - Go to home page"
              >
                <span className="text-blue-500">Inclusive Rwanda</span>
              </Button>
            </div>

            <nav className="hidden md:flex space-x-2" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.page ? 'secondary' : 'ghost'}
                  size="md"
                  onClick={() => handleNavigate(item.page)}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                  className={currentPage === item.page ? 'text-blue-500 font-semibold' : ''}
                >
                  {item.label}
                </Button>
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
                      <button
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 data-[focus]:bg-gray-800 data-[focus]:text-white ${currentPage === item.page
                          ? 'text-blue-500 font-semibold'
                          : 'text-gray-100'
                          }`}
                        onClick={() => handleNavigate(item.page)}
                        aria-current={currentPage === item.page ? 'page' : undefined}
                      >
                        {item.label}
                      </button>
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