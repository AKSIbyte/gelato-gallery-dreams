
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-95 shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="gelato-container flex items-center justify-between">
        <a href="#" className="text-2xl font-playfair font-bold">
          Gelato Gallery
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#home" className="gelato-link">Home</a>
          <a href="#about" className="gelato-link">Our Story</a>
          <a href="#flavors" className="gelato-link">Flavors</a>
          <a href="#locations" className="gelato-link">Locations</a>
          <a href="#lab" className="gelato-link">The Lab</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="gelato-button">Order Now</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gelato-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="gelato-link">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="gelato-link">Our Story</a>
            <a href="#flavors" onClick={() => setIsMenuOpen(false)} className="gelato-link">Flavors</a>
            <a href="#locations" onClick={() => setIsMenuOpen(false)} className="gelato-link">Locations</a>
            <a href="#lab" onClick={() => setIsMenuOpen(false)} className="gelato-link">The Lab</a>
            <button className="gelato-button mt-6">Order Now</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
