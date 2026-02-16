import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Palette, Utensils, Dna, Music, Trophy, CheckCircle, ArrowRight } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const Naschools: React.FC<Props> = ({ onNavigate }) => {
  const activities = [
    { title: "Sport & Clinics", icon: <Trophy size={32} />, desc: "Kennismaken met diverse sporten.", image: "/fotos/naschools_sport_v2.jpeg" },
    { title: "Creatief", icon: <Palette size={32} />, desc: "Tekenen, schilderen en knutselen.", image: "/fotos/naschools_creatief.jpeg" },
    { title: "Cultuur & Dans", icon: <Music size={32} />, desc: "Theater, dans en expressie.", image: "/fotos/naschools_dans.jpeg" },
    { title: "Culinair", icon: <Utensils size={32} />, desc: "Gezonde kooklessen.", image: "/fotos/naschools_sport.jpeg" },
    { title: "Techniek", icon: <Dna size={32} />, desc: "Wetenschap en proefjes.", image: "/fotos/naschools_bottom.jpeg" },
  ];

  return (
    <div className="fade-in bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-anthracite text-white py-12 md:py-24 rounded-b-[3rem] overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10 pt-8 md:pt-12">
          <h1 className="text-3xl md:text-6xl font-heading font-bold mb-6 leading-tight">Ontdekken na schooltijd. <br /><span className="text-gold">Wij regelen het complete programma.</span></h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-0 leading-relaxed max-w-3xl mx-auto">
            Lu Fit stelt het programma samen, werft docenten, regelt inschrijvingen, onderhoudt contact met ouders en bewaakt de kwaliteit.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-anthracite mb-12 md:mb-16">Een breed en uitdagend aanbod</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, i) => (
            <div key={i} className="group bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-anthracite/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={act.image} alt={act.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full text-gold shadow-md z-20">
                  {act.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-anthracite mb-3 group-hover:text-gold transition-colors">{act.title}</h3>
                <p className="text-gray-600 leading-relaxed">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Coordinator Role - Rounded Section */}
        <div className="mt-16 md:mt-24 bg-white rounded-[3rem] shadow-xl p-8 md:p-16 relative overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-bold uppercase tracking-wider text-sm">
                Totale Ontzorging
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-anthracite">Onze rol als coördinator</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jullie hebben één aanspreekpunt voor alles. Wij zorgen dat het loopt, van de eerste inschrijving tot de laatste les.
              </p>

              <div className="bg-lightgray/50 rounded-2xl p-6 border border-gold/20">
                <h4 className="font-bold text-gold text-lg mb-3 flex items-center">
                  <CheckCircle className="mr-2" size={20} /> Waarom dit werkt:
                </h4>
                <p className="text-anthracite font-medium">Meer deelname, minder administratie en een breed aanbod dat past bij de schoolvisie.</p>
              </div>

              <div className="pt-4">
                <Button variant="primary" size="lg" onClick={() => onNavigate(Page.Contact)}>Stel samen een programma op</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
              <img
                src="/fotos/naschools_hero.jpeg"
                alt="Coördinatie"
                className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[300px] md:h-[400px] z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naschools;