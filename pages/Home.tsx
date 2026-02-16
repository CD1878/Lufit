import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { ArrowRight, CheckCircle, Calendar, Users, Activity, Layout } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="fade-in bg-gray-50">
      {/* Hero Section - Straight Bottom */}
      <section className="relative bg-anthracite text-white min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="/fotos/home_hero.jpeg"
            alt="Kinderen in beweging"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative py-12 md:py-0">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Kinderen in beweging. <br />
              <span className="text-gold">Scholen volledig ontzorgd.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Wij verzorgen inval gymlessen, pauzesport en naschoolse activiteiten én nemen de complete coördinatie van sport, kunst, cultuur en recreatie over.
              <br /><span className="font-semibold text-white block mt-4 text-xl">Eén partner. Alles geregeld.</span>
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
              <Button onClick={() => onNavigate(Page.Contact)}>Plan kennismaking</Button>
              <Button variant="outline" onClick={() => onNavigate(Page.Naschools)}>Bekijk ons aanbod</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Snelle Keuzes (Cards) - Overlapping the Hero */}
      <section className="py-12 md:py-20 mt-6 md:-mt-24 relative z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Inval Gymlessen', desc: 'Direct professionele vervanging bij uitval', icon: <Activity />, page: Page.InvalGym },
            { title: 'Pauzesport', desc: 'Actieve en energieke pauzes voor meer focus', icon: <Users />, page: Page.PauzeSport },
            { title: 'Naschools', desc: 'Inspirerend aanbod na schooltijd', icon: <Layout />, page: Page.Naschools },
            { title: 'Coördinatie & Regie', desc: 'Wij organiseren het volledige programma', icon: <Calendar />, page: Page.TotaalOntzorgen },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-gold group cursor-pointer"
              onClick={() => onNavigate(item.page)}
            >
              <div className="w-14 h-14 bg-lightgray rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300 shadow-sm">
                {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-anthracite group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
              <div className="flex items-center text-gold font-bold text-sm tracking-wide group-hover:translate-x-1 transition-transform uppercase">
                Lees meer <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wat we oplossen - Clean Top */}
      <section className="py-12 md:py-20 bg-white relative">

        <div className="container mx-auto px-4 mt-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-bold uppercase tracking-wider text-sm">
                Het Probleem & De Oplossing
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-anthracite leading-tight">
                Scholen hebben al genoeg te regelen.
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Roosters, vervanging, aanbieders, communicatie met ouders en administratie kosten veel tijd.
                </p>
                <p className="font-medium text-anthracite">
                  Lu Fit neemt het volledige sport, kunst, cultuur en recreatieaanbod over. Wij plannen, organiseren, coördineren en voeren uit.
                </p>
                <p className="font-bold text-gold text-xl">
                  Het team houdt tijd over voor onderwijs.
                </p>
              </div>
            </div>
            <div className="relative group mt-8 md:mt-0">
              <div className="absolute -inset-4 bg-gold/20 rounded-[2.5rem] rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
              <img
                src="/fotos/luciano_hero.jpeg"
                alt="Leraar aan het werk"
                className="relative rounded-[2rem] shadow-2xl w-full object-cover object-[50%_25%] h-[300px] md:h-[500px] transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border-l-4 border-gold">
                <p className="text-anthracite font-heading font-bold text-2xl">"100% Ontzorgd"</p>
                <p className="text-gray-500 text-sm">Eén partner voor alles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat wij regelen - Straight Section */}
      <section className="py-24 bg-lightgray relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#2F2F2F" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-anthracite mb-6">Wat wij voor jullie regelen</h2>
            <p className="text-xl text-gray-600">Van uitvoering tot administratie, wij pakken het op.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
              <div key={idx} className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-gold/20">
                <div className="bg-gold/10 p-2 rounded-full text-gold">
                  <CheckCircle size={24} />
                </div>
                <span className="font-semibold text-anthracite text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt het - Dark Section */}
      <section className="py-24 bg-anthracite text-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Hoe werkt het?</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-700 -z-0"></div>

            {[
              { step: "01", title: "Kennismaken", desc: "We brengen jullie wensen in kaart." },
              { step: "02", title: "Plan op maat", desc: "We ontwerpen het volledige programma." },
              { step: "03", title: "Uitvoering", desc: "Wij regelen docenten en organisatie." },
              { step: "04", title: "Ontzorging", desc: "Eén aanspreekpunt, alles loopt." },
            ].map((item, idx) => (
              <div key={idx} className="relative group text-center z-10">
                <div className="w-24 h-24 mx-auto bg-anthracite border-4 border-gray-700 rounded-full flex items-center justify-center text-3xl font-heading font-bold text-gray-400 group-hover:border-gold group-hover:text-gold transition-all duration-300 bg-anthracite mb-6 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Afsluitende CTA - Gold Overlay */}
      <section className="py-24 bg-gold/10 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-anthracite mb-8 max-w-3xl mx-auto leading-tight">
            Klaar om het hele aanbod uit handen te geven?
          </h2>
          <div className="flex justify-center">
            <Button size="xl" onClick={() => onNavigate(Page.Contact)}>Plan een vrijblijvende kennismaking</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;