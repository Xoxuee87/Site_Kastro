import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstagramFeed from './components/InstagramFeed';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import EventsSchedule from './components/EventsSchedule';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/WhatsAppButton'; // Import the new component

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <InstagramFeed />
        <AboutUs />
        <Services />
        <Gallery />
        <EventsSchedule />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton /> {/* Add the WhatsApp button here */}
    </div>
  );
};

export default App;