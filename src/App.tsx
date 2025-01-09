import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeArea from './components/PracticeArea';
import Tips from './components/Tips';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <PracticeArea />
        <Tips />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;