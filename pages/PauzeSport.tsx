import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Smile, BatteryCharging, Clock, CheckCircle } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const PauzeSport: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="fade-in bg-gray-50 text-anthracite">
      {/* Hero - Rounded Bottom */}
      <section className="relative bg-gold/10 py-12 md:py-24 overflow-hidden rounded-b-[3rem] shadow-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-3xl md:text-6xl font-heading font-bold text-anthracite mb-6 leading-tight">
            Meer energie tijdens de schooldag. <br />
            <span className="text-gold">Zonder extra werk voor het team.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            Pauzesport zorgt voor beweging, plezier en rust in de klas. Wij organiseren het hele programma van planning tot begeleiding en materialen.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20 space-y-12 md:space-y-20">
        {/* Wat wij doen */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gold rounded-[2rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              src="/fotos/pauzesport_watwijdoen.jpeg"
              alt="Pauzesport"
              className="relative rounded-[2rem] shadow-xl border-4 border-white w-full object-cover h-[300px] md:h-[450px]"
            />
          </div>
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-bold uppercase tracking-wider text-sm">
              Onze Aanpak
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-anthracite">Wat wij doen</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sportcoaches begeleiden activiteiten op het plein en in de zaal. Wij maken een vaste planning, sturen het team aan en zorgen voor continuïteit. Geen gedoe met surveilleren, maar professionele begeleiding.
            </p>
            <ul className="space-y-4">
              {[
                "Strakke planning en organisatie",
                "Plezier staat voorop",
                "Professionele begeleiding"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-transparent hover:border-gold/30 transition-colors">
                  <div className="bg-gold/10 p-2 rounded-full text-gold">
                    <CheckCircle size={20} />
                  </div>
                  <span className="font-medium text-anthracite">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resultaat - Rounded Box */}
        <div className="bg-anthracite text-white rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-10">
            <svg className="relative block w-full h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <BatteryCharging className="text-gold w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Het Resultaat</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Minder onrust, betere concentratie en een positieve sfeer op school. Jullie team hoeft alleen de deur open te doen.
            </p>
            <Button size="xl" onClick={() => onNavigate(Page.Contact)}>Besteed jullie pauzesport uit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PauzeSport;