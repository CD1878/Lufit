import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';

interface Props {
  onNavigate: (page: Page) => void;
}

const TotaalOntzorgen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="fade-in">
        <div className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-anthracite mb-6">
                        Eén partner voor alles.
                    </h1>
                    <p className="text-xl text-gray-600">
                        Geen losse aanbieders of verschillende contactpersonen. Lu Fit neemt de regie. Wij coördineren, plannen en voeren uit. Van gymles tot naschoolse workshop.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-anthracite text-white p-10 rounded-xl">
                        <h2 className="text-2xl font-heading font-bold text-gold mb-6">Wij nemen over</h2>
                        <ul className="space-y-4">
                            {[
                                "Programma ontwerp",
                                "Planning en roosters",
                                "Aansturing van docenten",
                                "Communicatie met ouders en school",
                                "Administratie en facturatie",
                                "Monitoring en evaluatie"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 border-b border-gray-700 pb-2 last:border-0">
                                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-lightgray p-10 rounded-xl flex flex-col justify-center">
                        <h2 className="text-2xl font-heading font-bold text-anthracite mb-6">Voor wie?</h2>
                        <p className="text-gray-700 text-lg mb-8">
                            Scholen, besturen en gemeenten die rust, kwaliteit en continuïteit willen.
                        </p>
                        <Button onClick={() => onNavigate(Page.Contact)}>Bespreek jullie situatie</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TotaalOntzorgen;