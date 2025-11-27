import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SupportStrip from './components/SupportStrip';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import Architecture from './components/Architecture';
import Enterprise from './components/Enterprise';
import GlobalCompliance from './components/GlobalCompliance';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <SupportStrip />
        <Features />
        <DashboardPreview />
        <Architecture />
        <Enterprise />
        <GlobalCompliance />
        <Comparison />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;