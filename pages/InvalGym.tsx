import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Check } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const InvalGym: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="fade-in">
      {/* Hero */}
      <div className="bg-anthracite text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Altijd een gymdocent. <br /><span className="text-gold">Zonder regelwerk voor school.</span></h1>
            <p className="text-xl text-gray-300 mb-8">
                Wij verzorgen niet alleen de vervanging, maar regelen ook de planning, afstemming en administratie rondom inval.
            </p>
            <Button onClick={() => onNavigate(Page.Contact)}>Regel direct inval</Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Probleem & Oplossing */}
        <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-400">
                <h3 className="text-xl font-heading font-bold text-red-900 mb-4">Het Probleem</h3>
                <p className="text-red-800">
                    Bij uitval moeten intern roosters worden aangepast en collega’s inspringen. Dat zorgt voor stress en kwaliteitsverlies.
                </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl border-l-4 border-gold">
                <h3 className="text-xl font-heading font-bold text-green-900 mb-4">Onze Oplossing</h3>
                <p className="text-green-800">
                    Lu Fit neemt de volledige organisatie over. Wij matchen een docent, stemmen af met school en zorgen dat de lessen zelfstandig draaien. Jullie hoeven niets te regelen.
                </p>
            </div>
        </div>

        {/* Checklist */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold text-anthracite mb-8 text-center">Wat je mag verwachten</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {[
                    "Ervaren vakdocenten",
                    "Kant en klare lessenreeksen",
                    "Veilige en pedagogisch sterke aanpak",
                    "Flexibel inzetbaar",
                    "Volledige coördinatie",
                    "Heldere communicatie"
                ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 bg-lightgray rounded-lg">
                        <div className="bg-gold rounded-full p-1 text-white">
                            <Check size={16} />
                        </div>
                        <span className="font-semibold text-anthracite">{item}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-anthracite text-white rounded-2xl p-12">
            <h2 className="text-2xl font-bold mb-6">Laat ons alles rondom inval regelen.</h2>
            <Button variant="primary" onClick={() => onNavigate(Page.Contact)}>Neem contact op</Button>
        </div>
      </div>
    </div>
  );
};

export default InvalGym;