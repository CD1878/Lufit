import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Palette, Utensils, Dna, Music, Trophy } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const Naschools: React.FC<Props> = ({ onNavigate }) => {
  const activities = [
    { title: "Sport & Clinics", icon: <Trophy size={32} />, desc: "Kennismaken met diverse sporten." },
    { title: "Creatief", icon: <Palette size={32} />, desc: "Tekenen, schilderen en knutselen." },
    { title: "Cultuur & Dans", icon: <Music size={32} />, desc: "Theater, dans en expressie." },
    { title: "Culinair", icon: <Utensils size={32} />, desc: "Gezonde kooklessen." },
    { title: "Techniek", icon: <Dna size={32} />, desc: "Wetenschap en proefjes." },
  ];

  return (
    <div className="fade-in">
       {/* Hero */}
       <div className="bg-anthracite text-white py-20 text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Ontdekken na schooltijd.</h1>
            <p className="text-xl text-gray-300">Wij regelen het complete programma.</p>
         </div>
       </div>

       {/* Cards Grid */}
       <div className="container mx-auto px-4 py-16">
         <h2 className="text-3xl font-heading font-bold text-center text-anthracite mb-12">Ons Aanbod</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((act, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-gold hover:shadow-2xl transition-shadow">
                    <div className="w-16 h-16 bg-lightgray rounded-full flex items-center justify-center text-gold mb-6">
                        {act.icon}
                    </div>
                    <h3 className="text-xl font-bold text-anthracite mb-2">{act.title}</h3>
                    <p className="text-gray-600">{act.desc}</p>
                </div>
            ))}
         </div>

         {/* Coordinator Role */}
         <div className="mt-20 grid md:grid-cols-2 gap-12 bg-lightgray rounded-2xl p-8 md:p-12 items-center">
            <div>
                <h3 className="text-2xl font-heading font-bold text-anthracite mb-4">Onze rol als coördinator</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Lu Fit stelt het programma samen, werft docenten, regelt inschrijvingen, onderhoudt contact met ouders en bewaakt de kwaliteit. Jullie hebben één aanspreekpunt voor alles.
                </p>
                <div className="space-y-2">
                    <h4 className="font-bold text-gold">Waarom dit werkt:</h4>
                    <p className="text-gray-600">Meer deelname, minder administratie en een breed aanbod dat past bij de schoolvisie.</p>
                </div>
            </div>
            <div className="text-center">
                <Button variant="primary" size="lg" onClick={() => onNavigate(Page.Contact)}>Stel samen een programma op</Button>
            </div>
         </div>
       </div>
    </div>
  );
};

export default Naschools;