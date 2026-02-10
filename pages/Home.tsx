import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { ArrowRight, CheckCircle, Calendar, Users, Activity, Layout } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative bg-anthracite text-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/1920/1080?random=1&grayscale"
            alt="Kinderen in beweging"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Kinderen in beweging. <br />
              <span className="text-gold">Scholen volledig ontzorgd.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Wij verzorgen inval gymlessen, pauzesport en naschoolse activiteiten én nemen de complete coördinatie over.
              <br /><span className="font-semibold text-white">Eén partner. Alles geregeld.</span>
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button onClick={() => onNavigate(Page.Contact)}>Plan kennismaking</Button>
              <Button variant="outline" onClick={() => onNavigate(Page.Naschools)}>Bekijk ons aanbod</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Snelle Keuzes (Cards) */}
      <section className="py-20 -mt-32 relative z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Inval Gymlessen', desc: 'Direct professionele vervanging bij uitval', icon: <Activity />, page: Page.InvalGym },
            { title: 'Pauzesport', desc: 'Actieve en energieke pauzes voor meer focus', icon: <Users />, page: Page.PauzeSport },
            { title: 'Naschools', desc: 'Inspirerend aanbod na schooltijd', icon: <Layout />, page: Page.Naschools },
            { title: 'Coördinatie & Regie', desc: 'Wij organiseren het volledige programma', icon: <Calendar />, page: Page.TotaalOntzorgen },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-gold group cursor-pointer" onClick={() => onNavigate(item.page)}>
              <div className="w-12 h-12 bg-lightgray rounded-full flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-anthracite">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <div className="flex items-center text-gold font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Lees meer <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wat we oplossen */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-gold font-bold uppercase tracking-wider text-sm">Het Probleem</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-anthracite">Scholen hebben al genoeg te regelen.</h2>
              <p className="text-gray-600 leading-relaxed">
                Roosters, vervanging, aanbieders, communicatie met ouders en administratie kosten veel tijd.
                Lu Fit neemt het volledige sport, kunst, cultuur en recreatieaanbod over.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold">
                Wij plannen, organiseren, coördineren en voeren uit. Het team houdt tijd over voor onderwijs.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/600/400?random=2"
                alt="Leraar aan het werk"
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-heading font-bold text-xl">"100% Ontzorgd"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat wij regelen */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-anthracite mb-4">Wat wij voor jullie regelen</h2>
            <p className="text-gray-600">Van uitvoering tot administratie, wij pakken het op.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Inval en structurele gymlessen",
              "Pauzesport en pleinactiviteiten",
              "Naschoolse programma’s",
              "Aansturing van docenten",
              "Planning en roosters",
              "Communicatie met ouders",
              "Administratie en inschrijvingen",
              "Evaluatie en rapportage"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="text-gold flex-shrink-0" size={20} />
                <span className="font-medium text-anthracite">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-20 bg-anthracite text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-16 text-white">Hoe werkt het?</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Kennismaken", desc: "We brengen jullie wensen in kaart." },
              { step: "02", title: "Plan op maat", desc: "We ontwerpen het volledige programma." },
              { step: "03", title: "Uitvoering", desc: "Wij regelen docenten en organisatie." },
              { step: "04", title: "Ontzorging", desc: "Eén aanspreekpunt, alles loopt." },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-6xl font-heading font-bold text-gray-700 opacity-30 mb-4 group-hover:text-gold group-hover:opacity-20 transition-colors">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Afsluitende CTA */}
      <section className="py-24 bg-gold bg-opacity-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-anthracite mb-6">Klaar om het hele aanbod uit handen te geven?</h2>
          <Button size="lg" onClick={() => onNavigate(Page.Contact)}>Plan een vrijblijvende kennismaking</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;