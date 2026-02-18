import React from 'react';
import { Page } from '../types';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-anthracite text-white pt-16 pb-8 border-t-4 border-gold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 text-center md:text-left">
          {/* Column 1: Brand */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3">
              <img src="/Final.png" alt="Lu Fit Logo" className="h-10 w-auto" />
              <span className="text-xl font-heading font-bold">LU FIT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Wij zorgen dat ieder kind kan bewegen, ontdekken en groeien. Eén partner die alles regelt voor scholen en gemeenten.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-gold font-heading font-bold text-lg">Snel naar</h3>
            <ul className="space-y-2">
              {[
                { label: 'Inval Gymlessen', page: Page.InvalGym },
                { label: 'Pauzesport', page: Page.PauzeSport },
                { label: 'Naschoolse Activiteiten', page: Page.Naschools },
                { label: 'Coördinatie & Regie', page: Page.TotaalOntzorgen },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-gold font-heading font-bold text-lg">Contact</h3>
            <div className="space-y-4 w-fit md:w-full">
              <a href="tel:0650402352" className="flex items-center space-x-4 text-gray-400 hover:text-gold transition-colors group">
                <div className="bg-gray-800 p-3 rounded-full group-hover:bg-gold group-hover:text-white transition-colors flex-shrink-0 shadow-lg">
                  <Phone size={18} />
                </div>
                <span className="text-lg">0650402352</span>
              </a>
              <a href="mailto:info@lufit.nl" className="flex items-center space-x-4 text-gray-400 hover:text-gold transition-colors group">
                <div className="bg-gray-800 p-3 rounded-full group-hover:bg-gold group-hover:text-white transition-colors flex-shrink-0 shadow-lg">
                  <Mail size={18} />
                </div>
                <span className="text-lg">info@lufit.nl</span>
              </a>
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="bg-gray-800 p-3 rounded-full flex-shrink-0 shadow-lg">
                  <MapPin size={18} />
                </div>
                <span className="text-lg">Amsterdam & Omstreken</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Lu Fit. All rights reserved | Made by <a href="https://www.chefdigital.nl" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Chef Digital</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;