import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import InvalGym from './pages/InvalGym';
import PauzeSport from './pages/PauzeSport';
import Naschools from './pages/Naschools';
import TotaalOntzorgen from './pages/TotaalOntzorgen';
import OverOns from './pages/OverOns';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
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
      case Page.Contact: return <Contact onNavigate={setCurrentPage} />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;