import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';

interface Props {
    onNavigate: (page: Page) => void;
}

const Team: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="fade-in bg-gray-50 flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="bg-anthracite text-white pt-24 pb-32 md:pt-32 md:pb-48 rounded-b-[3rem] relative shadow-xl overflow-hidden mb-[-50px] md:mb-[-100px]">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-10 rotate-180">
                    <svg className="relative block w-[calc(110%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ons Team & Structuur</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Maak kennis met de drijvende krachten achter Lu Fit. Van planners tot gedreven trainers.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16 relative z-10 flex-grow">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-anthracite mb-6">Ontmoet onze mensen</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Passie voor sport, cultuur en ontwikkeling. Ons team staat dagelijks klaar voor honderden kinderen.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20 max-w-6xl mx-auto">
                    {[
                        {
                            name: "Sarah van den Berg",
                            role: "Programmacoördinator",
                            desc: "Sarah onderhoudt nauw contact met scholen en zorgt ervoor dat alle roosters perfect lopen. Met haar achtergrond in het onderwijs weet ze precies wat scholen nodig hebben.",
                            image: "/fotos/naschools_sport_v2.jpeg"
                        },
                        {
                            name: "Luciano",
                            role: "Oprichter & Hoofdtrainer",
                            desc: "De drijvende kracht achter Lu Fit. Luciano heeft jarenlange ervaring met pauzesport en gymlessen, en brengt ongeëvenaarde energie in elke sessie.",
                            image: "/fotos/luciano_hero.jpeg"
                        },
                        {
                            name: "Kevin de Ruiter",
                            role: "Combinatiefunctionaris",
                            desc: "Kevin verbindt sport, structuur en plezier. Of het nu gaat om het organiseren van toernooien of het geven van gymlessen, zijn focus ligt altijd op de groei van de kinderen.",
                            image: "/fotos/home_hero.jpeg"
                        }
                    ].map((member, idx) => (
                        <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-anthracite/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-8 text-center relative">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gold text-white font-bold px-6 py-2 rounded-full shadow-lg text-sm tracking-wider uppercase whitespace-nowrap">
                                    {member.role}
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-anthracite mt-4 mb-3">{member.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {member.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-anthracite rounded-[3rem] text-white p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">
                        Onderdeel worden van ons team?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                        We zijn altijd op zoek naar enthousiaste trainers, stagiaires en professionals.
                    </p>
                    <div className="relative z-10">
                        <Button variant="primary" size="lg" onClick={() => onNavigate(Page.Contact)}>
                            Neem contact op
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
