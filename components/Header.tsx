import React, { useState } from 'react';
import { Page, NavItem } from '../types';
import { Menu, X, Shield } from 'lucide-react';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', page: Page.Home },
  { label: 'Inval Gymlessen', page: Page.InvalGym },
  { label: 'Pauzesport', page: Page.PauzeSport },
  { label: 'Naschools', page: Page.Naschools },
  { label: 'Totaal Ontzorgen', page: Page.TotaalOntzorgen },
  { label: 'Over Lu Fit', page: Page.OverOns },
  { label: 'Contact', page: Page.Contact },
];

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-anthracite text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick(Page.Home)}
          >
            <img src="/Final.png" alt="Lu Fit Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-gold ${currentPage === item.page ? 'text-gold border-b-2 border-gold' : 'text-gray-300'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-anthracite border-t border-gray-700 animate-fadeIn">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`text-left text-lg font-medium py-2 px-4 rounded transition-colors ${currentPage === item.page ? 'bg-gray-800 text-gold' : 'text-gray-200 hover:bg-gray-800'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;