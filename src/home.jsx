import React from 'react';
import Hero from './hero';
import About from './about';
import About2 from './about2';
import NewsCarousel from './carouselnoticias';
import NewsCarousel2 from './carousel2';
import Footer from './footer';
import Navbar from './navbar';
import CarouselNoticias from './carouselnoticias';

function Home() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div>
        <Navbar />
        <Hero />
        <About />
        <About2 />
        <CarouselNoticias />
        <NewsCarousel2 />
      </div>
    
      <Footer />
    </div>
  );
}

export default Home; 
