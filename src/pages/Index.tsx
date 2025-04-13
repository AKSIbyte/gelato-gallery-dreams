
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Flavors from '@/components/Flavors';
import Locations from '@/components/Locations';
import Lab from '@/components/Lab';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { X } from 'lucide-react';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <OurStory />
      <Flavors />
      <Locations />
      <Lab />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
