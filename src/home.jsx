import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import About from './about';
import About2 from './about2';
import NewsCarousel from './carousel';
import NewsCarousel2 from './carousel2';

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Navbar */}
        <Navbar />

      {/* Hero Section */}
  <div>
    <Hero />
    <About />
    <About2 />
    <NewsCarousel />
    <NewsCarousel2 />
  </div>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Footer.</p>
      </footer>
    </div>
  );
}

export default App;
