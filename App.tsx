import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WelcomeVideo from './components/WelcomeVideo';
import Locations from './components/Locations';
import About from './components/About';
import ImageCarousel from './components/ImageCarousel';
import Ministries from './components/Ministries';
import LatestSermon from './components/LatestSermon';
import UpcomingEvents from './components/UpcomingEvents';
import FAQ from './components/FAQ';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <section className="py-16 bg-primary-bg dark:bg-background-dark">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <WelcomeVideo />
            <Locations />
          </div>
        </section>

        <About />
        
        <ImageCarousel />

        <Ministries />
        
        <section className="py-20 bg-white dark:bg-[#251e30]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <LatestSermon />
              <UpcomingEvents />
            </div>
          </div>
        </section>

        <FAQ />

        <Testimonial />
        
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default App;