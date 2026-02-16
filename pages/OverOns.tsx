import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Users, Heart, Target } from 'lucide-react';

interface Props {
    onNavigate: (page: Page) => void;
}

const OverOns: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="fade-in bg-gray-50">
            {/* Hero - Rounded Bottom */}
            <div className="bg-anthracite text-white pt-12 pb-24 md:pt-24 md:pb-32 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/fotos/overons_hero.jpeg"
                        alt="Over Ons"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/90 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <span className="bg-gold/20 text-gold px-4 py-1 rounded-full font-bold uppercase tracking-widest mb-6 inline-block backdrop-blur-sm">Over Lu Fit</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8">
                        Wij zorgen dat ieder kind kan bewegen, ontdekken en groeien.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                        Zonder dat scholen extra werkdruk ervaren.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12 md:py-20 -mt-10 md:-mt-16 relative z-20">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Onze Visie */}
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border-t-8 border-gold">
                        <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center text-gold mb-6">
                            <Target size={32} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-anthracite mb-6">Onze Visie</h2>
                        <p className="text-gray-600 leading-loose text-lg">
                            Lu Fit is geen losse aanbieder, maar een partner die het volledige activiteitenaanbod regisseert en uitvoert. Wij geloven in duurzame samenwerking en kwaliteit op lange termijn.
                        </p>
                    </div>

                    {/* Wie we zijn */}
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border-t-8 border-anthracite">
                        <div className="bg-anthracite/10 w-16 h-16 rounded-2xl flex items-center justify-center text-anthracite mb-6">
                            <Users size={32} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-anthracite mb-6">Wie we zijn</h2>
                        <p className="text-gray-600 leading-loose text-lg mb-8">
                            Een betrokken team van vakdocenten, sportcoaches en programmacoördinatoren met hart voor onderwijs. We denken mee, schakelen snel en nemen verantwoordelijkheid.
                        </p>
                        <Button variant="outline" onClick={() => onNavigate(Page.Contact)}>Maak kennis met ons team</Button>
                    </div>
                </div>

                {/* Quote / Mission */}
                <div className="mt-16 text-center max-w-3xl mx-auto">
                    <div className="inline-block p-4 rounded-full bg-red-50 text-red-400 mb-6">
                        <Heart fill="currentColor" size={24} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-anthracite leading-snug">
                        "Wij geloven dat een gezonde school begint met ontzorgde leraren en blije leerlingen."
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default OverOns;