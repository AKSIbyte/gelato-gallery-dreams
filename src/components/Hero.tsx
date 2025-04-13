
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gelato-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/043276b4-25a6-42d7-b743-1bc5bb73e33a.png" 
          alt="Artisanal gelato" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="gelato-container relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium mb-6 animate-scale-in">
          Gelato, <span className="italic">but make it art.</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto animate-fade-in">
          Tradition meets innovation in every scoop of our artisanal gelato.
        </p>
        <button 
          onClick={() => scrollToSection('about')}
          className="gelato-button bg-white text-gelato-black hover:bg-gelato-cream"
        >
          Discover Our World
        </button>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
