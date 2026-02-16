import React from 'react';
import { Page } from '../types';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

interface Props {
    onNavigate: (page: Page) => void;
}

const Contact: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="fade-in bg-gray-50 flex flex-col min-h-screen">
            {/* Header Section */}
            <div className="bg-anthracite text-white pt-12 pb-32 md:pt-24 md:pb-48 rounded-b-[3rem] relative shadow-xl overflow-hidden mb-[-80px] md:mb-[-100px]">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-10 rotate-180">
                    <svg className="relative block w-[calc(110%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-3xl md:text-6xl font-heading font-bold mb-6">Contact</h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
                        Wil je één partner die alles rondom sport, kunst en cultuur organiseert? We denken graag met je mee.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-12 md:py-16 relative z-10 flex-grow">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2">
                        {/* Info Side */}
                        <div className="bg-anthracite text-white p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>

                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h2 className="text-3xl font-heading font-bold mb-4 text-gold">Neem contact op</h2>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        Of het nu gaat om een enkele sportdag, structurele invalgym of het volledige naschoolse aanbod. Wij staan klaar voor scholen en gemeenten.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <a href="tel:0650402352" className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                                        <div className="bg-gold p-3 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Bel ons direct</p>
                                            <span className="text-xl font-bold text-white group-hover:text-gold transition-colors">0650402352</span>
                                        </div>
                                    </a>

                                    <a href="mailto:info@lufit.nl" className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                                        <div className="bg-gold p-3 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Stuur een mail</p>
                                            <span className="text-xl font-bold text-white group-hover:text-gold transition-colors">info@lufit.nl</span>
                                        </div>
                                    </a>

                                    <div className="flex items-center space-x-6 p-4 rounded-2xl">
                                        <div className="bg-anthracite border border-gray-600 p-3 rounded-full text-gray-400">
                                            <Calendar size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Kennismaken?</p>
                                            <p className="text-lg font-medium text-white">Vul het formulier in <ArrowRight className="inline ml-1" size={16} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="p-8 md:p-16 bg-white">
                            <h2 className="text-2xl font-heading font-bold text-anthracite mb-8">Stuur een bericht</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;