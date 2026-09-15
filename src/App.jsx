import React, { useState } from 'react';
import StyleGuidePreview from './components/StyleGuidePreview';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Location from './components/Location';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';
import Chatbot from './components/Chatbot';

export default function App() {
  // Temporary view toggle: defaults to the new brochure style-guide preview
  const [currentView, setCurrentView] = useState('styleguide');

  if (currentView === 'styleguide') {
    return (
      <StyleGuidePreview onSwitchToSite={() => setCurrentView('site')} />
    );
  }

  return (
    <div className="min-h-screen bg-coral text-ink font-sans flex flex-col selection:bg-teal selection:text-cream relative">
      {/* Return to Style Guide Banner */}
      <aside aria-label="Style Guide Notice" className="bg-ink text-cream px-4 py-2 text-xs flex items-center justify-between z-50">
        <span>Previewing existing site structure with updated global tokens.</span>
        <button
          type="button"
          onClick={() => setCurrentView('styleguide')}
          className="bg-coral hover:bg-coral-light text-ink font-bold px-3 py-1 text-xs cursor-pointer transition-colors"
        >
          Back to Brochure Style Guide &rarr;
        </button>
      </aside>

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

      {/* Floating Chatbot Widget */}
      <Chatbot />
    </div>
  );
}
