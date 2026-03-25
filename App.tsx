import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import InvalGym from './pages/InvalGym';
import PauzeSport from './pages/PauzeSport';
import Naschools from './pages/Naschools';
import TotaalOntzorgen from './pages/TotaalOntzorgen';
import OverOns from './pages/OverOns';
import Contact from './pages/Contact';
import Klanten from './pages/Klanten';
import Reviews from './pages/Reviews';
import Team from './pages/Team';
import WerkenBij from './pages/WerkenBij';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={setCurrentPage} />;
      case Page.InvalGym: return <InvalGym onNavigate={setCurrentPage} />;
      case Page.PauzeSport: return <PauzeSport onNavigate={setCurrentPage} />;
      case Page.Naschools: return <Naschools onNavigate={setCurrentPage} />;
      case Page.TotaalOntzorgen: return <TotaalOntzorgen onNavigate={setCurrentPage} />;
      case Page.OverOns: return <OverOns onNavigate={setCurrentPage} />;
      case Page.Team: return <Team onNavigate={setCurrentPage} />;
      case Page.Klanten: return <Klanten onNavigate={setCurrentPage} />;
      case Page.Reviews: return <Reviews onNavigate={setCurrentPage} />;
      case Page.WerkenBij: return <WerkenBij onNavigate={setCurrentPage} />;
      case Page.Contact: return <Contact onNavigate={setCurrentPage} />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="font-body text-gray-800 antialiased flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow flex flex-col relative w-full overflow-x-hidden">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;