import React from 'react';
import { Page } from '../types';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, Calendar } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const Contact: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="fade-in">
        <div className="bg-anthracite text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-heading font-bold mb-4">Contact</h1>
                <p className="text-xl text-gray-300">We denken graag met je mee.</p>
            </div>
        </div>

        <div className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <h2 className="text-3xl font-heading font-bold text-anthracite">Wil je één partner die alles regelt?</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Of het nu gaat om een enkele sportdag, structurele invalgym of het volledige naschoolse aanbod. Wij staan klaar voor scholen en gemeenten.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gold/10 p-3 rounded-full text-gold">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase">Bel ons direct</p>
                                <a href="tel:0650402352" className="text-xl font-bold text-anthracite hover:text-gold transition-colors">0650402352</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-gold/10 p-3 rounded-full text-gold">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-bold uppercase">Stuur een mail</p>
                                <a href="mailto:info@lufit.nl" className="text-xl font-bold text-anthracite hover:text-gold transition-colors">info@lufit.nl</a>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="bg-gold/10 p-3 rounded-full text-gold">
                                <Calendar size={24} />
                            </div>
                             <div>
                                <p className="text-sm text-gray-500 font-bold uppercase">Kennismaken?</p>
                                <p className="text-xl font-bold text-anthracite">Plan een gesprek</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;