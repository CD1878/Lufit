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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <Shield className="h-6 w-6 text-gold fill-gold" />
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
          <div className="space-y-4">
            <h3 className="text-gold font-heading font-bold text-lg">Contact</h3>
            <div className="space-y-3">
              <a href="tel:0650402352" className="flex items-center space-x-3 text-gray-400 hover:text-gold transition-colors group">
                <div className="bg-gray-800 p-2 rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <span>0650402352</span>
              </a>
              <a href="mailto:info@lufit.nl" className="flex items-center space-x-3 text-gray-400 hover:text-gold transition-colors group">
                <div className="bg-gray-800 p-2 rounded-full group-hover:bg-gold group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <span>info@lufit.nl</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <div className="bg-gray-800 p-2 rounded-full">
                  <MapPin size={16} />
                </div>
                <span>Amsterdam & Omstreken</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Lu Fit. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;