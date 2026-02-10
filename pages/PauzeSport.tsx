import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Smile, BatteryCharging, Clock } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const PauzeSport: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="fade-in">
       {/* Hero */}
       <div className="relative bg-gold/10 py-20 overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-anthracite mb-6">
                Meer energie tijdens de schooldag. <br />
                <span className="text-gold">Zonder extra werk voor het team.</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                Pauzesport zorgt voor beweging, plezier en rust in de klas. Wij organiseren het hele programma van planning tot begeleiding en materialen.
            </p>
         </div>
       </div>

       <div className="container mx-auto px-4 py-16">
         <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <img 
                    src="https://picsum.photos/600/400?random=3" 
                    alt="Pauzesport" 
                    className="rounded-xl shadow-xl border-4 border-white"
                />
            </div>
            <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-anthracite">Wat wij doen</h2>
                <p className="text-gray-600 leading-relaxed">
                    Sportcoaches begeleiden activiteiten op het plein en in de zaal. Wij maken een vaste planning, sturen het team aan en zorgen voor continuïteit. Geen gedoe met surveilleren, maar professionele begeleiding.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                        <Clock className="text-gold mt-1" />
                        <span>Strakke planning en organisatie</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <Smile className="text-gold mt-1" />
                        <span>Plezier staat voorop</span>
                    </li>
                </ul>
            </div>
         </div>

         <div className="bg-anthracite text-white rounded-xl p-10 md:p-16 text-center">
            <BatteryCharging className="mx-auto text-gold w-16 h-16 mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">Resultaat</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Minder onrust, betere concentratie en een positieve sfeer op school. Jullie team hoeft alleen de deur open te doen.
            </p>
            <Button variant="primary" onClick={() => onNavigate(Page.Contact)}>Besteed jullie pauzesport uit</Button>
         </div>
       </div>
    </div>
  );
};

export default PauzeSport;