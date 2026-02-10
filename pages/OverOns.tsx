import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';

interface Props {
  onNavigate: (page: Page) => void;
}

const OverOns: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="fade-in">
        <div className="bg-anthracite text-white py-24">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <span className="text-gold font-bold uppercase tracking-widest mb-4 block">Over Lu Fit</span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-8">
                    Wij zorgen dat ieder kind kan bewegen, ontdekken en groeien.
                </h1>
                <p className="text-xl text-gray-400">Zonder dat scholen extra werkdruk ervaren.</p>
            </div>
        </div>

        <div className="container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-heading font-bold text-anthracite mb-6">Onze Visie</h2>
                    <p className="text-gray-600 leading-loose mb-6">
                        Lu Fit is geen losse aanbieder, maar een partner die het volledige activiteitenaanbod regisseert en uitvoert. Wij geloven in duurzame samenwerking en kwaliteit op lange termijn.
                    </p>
                    <div className="h-1 w-20 bg-gold"></div>
                </div>
                <div>
                    <h2 className="text-3xl font-heading font-bold text-anthracite mb-6">Wie we zijn</h2>
                    <p className="text-gray-600 leading-loose mb-6">
                        Een betrokken team van vakdocenten, sportcoaches en programmacoördinatoren met hart voor onderwijs. We denken mee, schakelen snel en nemen verantwoordelijkheid.
                    </p>
                     <Button onClick={() => onNavigate(Page.Contact)}>Maak kennis met ons team</Button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OverOns;