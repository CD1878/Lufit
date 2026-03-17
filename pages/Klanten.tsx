import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Building2, MapPin } from 'lucide-react';

interface Props {
    onNavigate: (page: Page) => void;
}

const Klanten: React.FC<Props> = ({ onNavigate }) => {
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
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Onze Klanten</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Trots op de scholen, kinderopvangorganisaties en gemeenten waar we dagelijks impact maken.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16 relative z-10 flex-grow">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-anthracite mb-6">Een greep uit onze samenwerkingen</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Wij zijn er trots op om dagelijks waarde toe te voegen bij diverse vooruitstrevende scholen en organisaties.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
                    {[
                        {
                            name: "Basisschool De Regenboog",
                            location: "Amsterdam",
                            type: "Basisonderwijs",
                            desc: "Sinds 2022 verzorgt Lu Fit de dagelijkse pauzesport en de coördinatie van de naschoolse activiteiten. Dit geeft ons docententeam de ruimte om écht pauze te houden en verlaagt de werkdruk substantieel."
                        },
                        {
                            name: "Gemeente Haarlem",
                            location: "Regio Kennemerland",
                            type: "Gemeente & Brede Scholen",
                            desc: "In samenwerking met Lu Fit bieden wij een divers sport- en cultuuraanbod op 5 verschillende brede scholen in de regio. Hun flexibiliteit en het brede netwerk aan vakdocenten maken hen tot een onmisbare partner."
                        }
                    ].map((client, idx) => (
                        <div key={idx} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl border border-gray-100 flex flex-col h-full transform transition-all hover:-translate-y-2 duration-300">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-anthracite mb-2">{client.name}</h3>
                                    <div className="flex items-center text-gold font-semibold text-sm tracking-wide uppercase">
                                        <Building2 size={16} className="mr-2" />
                                        {client.type}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed flex-grow mb-6 italic">
                                "{client.desc}"
                            </p>
                            <div className="flex items-center text-gray-400 text-sm mt-auto pt-6 border-t border-gray-100">
                                <MapPin size={16} className="mr-2" />
                                Locatie: {client.location}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-anthracite rounded-[3rem] text-white p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">
                        Ook partner worden?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                        Ontdek wat Lu Fit voor jouw school of organisatie kan betekenen.
                    </p>
                    <div className="relative z-10">
                        <Button variant="primary" size="lg" onClick={() => onNavigate(Page.Contact)}>
                            Plan een kennismaking
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Klanten;
