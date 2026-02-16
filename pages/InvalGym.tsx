import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { Check, ShieldCheck, XCircle } from 'lucide-react';

interface Props {
    onNavigate: (page: Page) => void;
}

const InvalGym: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="fade-in bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-anthracite text-white py-12 md:py-24 rounded-b-[3rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/fotos/invalgym_hero.jpeg"
                        alt="Inval gymnastiek"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/90 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                    <h1 className="text-3xl md:text-6xl font-heading font-bold mb-6 leading-tight">Altijd een gymdocent. <br /><span className="text-gold">Zonder regelwerk voor school.</span></h1>
                    <p className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                        Wij verzorgen niet alleen de vervanging, maar regelen ook de planning, afstemming en administratie rondom inval.
                    </p>
                    <Button size="lg" onClick={() => onNavigate(Page.Contact)}>Regel direct inval</Button>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 md:py-20 space-y-12 md:space-y-20">
                {/* Probleem & Oplossing */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border-l-8 border-red-400 transform transition-transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="bg-red-100 p-3 rounded-full text-red-500">
                                <XCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-anthracite">Het Probleem</h3>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Bij uitval moeten intern roosters worden aangepast en collega’s inspringen. Dat zorgt voor stress en kwaliteitsverlies.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border-l-8 border-gold transform transition-transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="bg-gold/10 p-3 rounded-full text-gold">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-anthracite">Onze Oplossing</h3>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Lu Fit neemt de volledige organisatie over. Wij matchen een docent, stemmen af met school en zorgen dat de lessen zelfstandig draaien. Jullie hoeven niets te regelen.
                        </p>
                    </div>
                </div>

                {/* Checklist */}
                <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lightgray rounded-full -mr-32 -mt-32 opacity-50"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-anthracite mb-12 text-center">Wat je mag verwachten</h2>
                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {[
                                "Ervaren vakdocenten",
                                "Kant en klare lessenreeksen",
                                "Veilige en pedagogisch sterke aanpak",
                                "Flexibel inzetbaar",
                                "Volledige coördinatie",
                                "Heldere communicatie"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-4 p-5 bg-lightgray rounded-2xl hover:bg-gold/5 transition-colors duration-300">
                                    <div className="bg-gold rounded-full p-1 text-white flex-shrink-0">
                                        <Check size={18} />
                                    </div>
                                    <span className="font-semibold text-anthracite text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-anthracite text-white rounded-[3rem] p-16 md:p-24 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gold/5"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Laat ons alles rondom inval regelen.</h2>
                        <Button variant="primary" size="xl" onClick={() => onNavigate(Page.Contact)}>Neem contact op</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvalGym;