import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Target, Smile, Users, Clock, Briefcase, CheckCircle } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const WerkenBij: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="fade-in bg-gray-50 flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-anthracite text-white pt-24 pb-16 md:pt-32 md:pb-20 rounded-b-[3rem] relative shadow-xl overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Werken bij Lu Fit</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lu Fit is altijd op zoek naar enthousiaste en gedreven docenten die kinderen willen inspireren en in beweging brengen.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ben jij energiek, zelfstandig en werk je graag met kinderen? Dan zijn er volop mogelijkheden. 
            Je kunt aan de slag als invaldocent, een lessenreeks verzorgen of jouw eigen specialisme inzetten binnen ons aanbod.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Sport en bewegen', 'Techniek', 'Creativiteit', 'Muziek', 'Koken', 'Wetenschap'].map((specialty, idx) => (
              <span key={idx} className="bg-white px-6 py-3 rounded-full text-anthracite font-semibold shadow-md border border-gray-100 flex items-center">
                <Target size={18} className="text-gold mr-2" />
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-anthracite mb-6">Onze Visie</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Bij Lu Fit geloven we in een brede ontwikkeling van kinderen, waarin plezier en ontdekken centraal staan.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Wij verzorgen tussen- en naschoolse activiteiten op basis- en middelbare scholen in en rondom Amsterdam. Daarnaast organiseren we sportdagen, workshops en complete activiteitenprogramma's voor scholen.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-[2rem] text-center shadow-inner">
                <Smile className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-bold text-anthracite mb-2">Plezier</h3>
                <p className="text-sm text-gray-500">Staat bij ons centraal</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-[2rem] text-center shadow-inner mt-8">
                <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-bold text-anthracite mb-2">Ontdekken</h3>
                <p className="text-sm text-gray-500">Brede ontwikkeling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-heading font-bold text-anthracite mb-8 text-center">Wie zoeken wij?</h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-gold">
            <h3 className="text-xl font-bold mb-4 text-anthracite">Wij zoeken docenten die:</h3>
            <ul className="space-y-4">
              {[
                "beschikbaar zijn overdag, tijdens of na schooltijd",
                "energiek, representatief en zelfstandig zijn",
                "affiniteit hebben met kinderen van 4 tot 18 jaar",
                "het leuk vinden om hun kennis en enthousiasme over te dragen"
              ].map((req, idx) => (
                <li key={idx} className="flex items-start text-gray-700 text-lg">
                  <CheckCircle className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-anthracite rounded-[3rem] text-white p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">
            Wil jij onderdeel worden van Lu Fit?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
            Stuur een bericht en we nemen snel contact met je op.
          </p>
          <div className="relative z-10">
            <a href="mailto:info@lufit.nl" className="inline-block bg-gold hover:bg-yellow-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold/30 text-lg">
              Solliciteer nu (info@lufit.nl)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WerkenBij;
