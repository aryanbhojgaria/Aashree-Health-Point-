import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Location from './components/Location';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans flex flex-col selection:bg-primary-subtle selection:text-ink">
      {/* Brand Navigation Bar */}
      <Navbar />

      {/* Complete Single-Page Flow */}
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Location />
        <FAQ />
      </main>

      {/* Contact & Closing Footer */}
      <ContactFooter />
    </div>
  );
}
