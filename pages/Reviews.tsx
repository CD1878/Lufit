import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Star, Quote } from 'lucide-react';

interface Props {
    onNavigate: (page: Page) => void;
}

const Reviews: React.FC<Props> = ({ onNavigate }) => {
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
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ervaringen</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Lees wat scholen, ouders en kinderen zeggen over de impact van Lu Fit.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16 relative z-10 flex-grow">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-anthracite mb-6">Wat onze partners zeggen</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ontdek waarom scholen en gemeenten kiezen voor de ontzorging van Lu Fit.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            name: "Sanne de Vries",
                            role: "Directeur Basisschool, Amsterdam",
                            text: "Sinds Lu Fit de pauzesport verzorgt, is er veel meer rust op het plein. De kinderen kijken er elke dag naar uit en ons team heeft eindelijk tijd voor een échte pauze.",
                            stars: 5
                        },
                        {
                            name: "Mark Janssen",
                            role: "Intern Begeleider",
                            text: "Wat een verademing. De inval is perfect geregeld. Als wij een zieke docent hebben, staat er de volgende ochtend een enthousiaste professional klaar met een kant-en-klaar programma.",
                            stars: 5
                        },
                        {
                            name: "Fatima El Amrani",
                            role: "Coördinator Kinderopvang",
                            text: "Eén partij die werkelijk alles uit handen neemt. Het team van Lu Fit denkt proactief met ons mee en de communicatie verloopt altijd ontzettend soepel.",
                            stars: 5
                        },
                        {
                            name: "Lisa van den Berg",
                            role: "Ouderraad Voorzitter",
                            text: "De naschoolse activiteiten zijn een groot succes! Mijn zoon komt altijd vol enthousiasme thuis. Vooral de techniek- en creatieve workshops vallen enorm in de smaak.",
                            stars: 4
                        },
                        {
                            name: "Tom Peters",
                            role: "Gymdocent",
                            text: "Als ik er een tijdje niet ben, weet ik dat mijn lessen bij Lu Fit in goede handen zijn. Ze hanteren dezelfde pedagogische visie, en dat merk je aan de leerlingen.",
                            stars: 5
                        },
                        {
                            name: "Gemeente Haarlem",
                            role: "Beleidsmedewerker Sport",
                            text: "Betrouwbaar, energiek en professioneel. Lu Fit is een onmisbare sportpartner geworden voor onze naschoolse projecten en brede-school programma's.",
                            stars: 5
                        }
                    ].map((review, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full relative group">
                            <div className="absolute top-6 right-6 text-gray-100 group-hover:text-gold/10 transition-colors">
                                <Quote size={64} />
                            </div>
                            <div className="flex text-gold mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill={i < review.stars ? "currentColor" : "none"} className={i < review.stars ? "text-gold" : "text-gray-300"} />
                                ))}
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed flex-grow mb-8 relative z-10 italic">
                                "{review.text}"
                            </p>
                            <div className="relative z-10 border-t border-gray-100 pt-6">
                                <p className="font-heading font-bold text-anthracite text-lg">{review.name}</p>
                                <p className="text-gold text-sm font-semibold uppercase tracking-wider">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-anthracite rounded-[3rem] text-white p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">
                        Zelf de Lu Fit impact ervaren?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                        Neem contact op en we bespreken graag de mogelijkheden voor jouw organisatie.
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

export default Reviews;
