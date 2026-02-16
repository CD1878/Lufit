import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
    onNavigate: (page: Page) => void;
}

const TotaalOntzorgen: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="fade-in bg-gray-50">
            {/* Hero - Rounded Bottom */}
            <div className="bg-white pt-12 pb-20 md:pt-20 md:pb-32 rounded-b-[3rem] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-6xl font-heading font-bold text-anthracite mb-8 leading-tight">
                            Eén partner voor <span className="text-gold">alles</span>.
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-600 leading-relaxed mb-10">
                            Geen losse aanbieders of verschillende contactpersonen. Lu Fit neemt de regie. Wij coördineren, plannen en voeren uit. Van gymles tot naschoolse workshop.
                        </p>
                        <div className="flex justify-center">
                            <Button size="xl" onClick={() => onNavigate(Page.Contact)}>Bespreek jullie situatie</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20 -mt-10 md:-mt-20 relative z-20">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    {/* Wij nemen over Card */}
                    <div className="bg-anthracite text-white p-8 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-heading font-bold text-gold mb-8">Wij nemen over</h2>
                            <ul className="space-y-5">
                                {[
                                    "Programma ontwerp",
                                    "Planning en roosters",
                                    "Aansturing van docenten",
                                    "Communicatie met ouders en school",
                                    "Administratie en facturatie",
                                    "Monitoring en evaluatie"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-4">
                                        <div className="bg-gold/20 p-1.5 rounded-full text-gold">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="text-lg font-medium text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Voor wie Card */}
                    <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-xl flex flex-col justify-center border border-gray-100 relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <h2 className="text-3xl font-heading font-bold text-anthracite mb-6">Voor wie?</h2>
                        <p className="text-gray-600 text-xl leading-relaxed mb-10">
                            Scholen, besturen en gemeenten die rust, kwaliteit en continuïteit willen. Wij zijn er voor organisaties die durven te kiezen voor een duurzame oplossing.
                        </p>
                        <div className="mt-auto">
                            <Button variant="outline" onClick={() => onNavigate(Page.Contact)} className="w-full md:w-auto">
                                Ontvang een totaalplan <ArrowRight className="ml-2" size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotaalOntzorgen;