import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';

interface Props {
    onNavigate: (page: Page) => void;
}

const Reviews: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="fade-in bg-gray-50 flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="bg-anthracite text-white pt-24 pb-32 md:pt-32 md:pb-48 rounded-b-[3rem] relative shadow-xl overflow-hidden mb-[-50px] md:mb-[-100px]">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-10 rotate-180">
                    <svg className="relative block w-[calc(110%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ervaringen</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Lees wat scholen, ouders en kinderen zeggen over de impact van Lu Fit.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16 relative z-10 flex-grow">
                <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 mb-16">
                    <h2 className="text-3xl font-heading font-bold mb-8 text-center">In Ontwikkeling</h2>
                    <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto mb-12">
                        Hier komen binnenkort de reviews en succesverhalen te staan.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="bg-anthracite rounded-[3rem] text-white p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">
                        Zelf de Lu Fit impact ervaren?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                        Neem contact op en we bespreken graag de mogelijkheden voor jouw organisatie.
                    </p>
                    <div className="relative z-10">
                        <Button variant="primary" size="lg" onClick={() => onNavigate(Page.Contact)}>
                            Plan een kennismaking
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
