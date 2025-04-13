
import { Beaker, Sparkles, Zap } from 'lucide-react';

const Lab = () => {
  return (
    <section id="lab" className="py-20 md:py-32 bg-gelato-black text-white">
      <div className="gelato-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">The Lab</h2>
          <p className="section-subtitle mx-auto">
            Where innovation meets tradition to create extraordinary gelato experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-gelato-red bg-opacity-60 rounded-full -z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1563291589-4e9a1757428d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Gelato innovation lab" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-5 -left-5 w-48 h-48 bg-gelato-yellow bg-opacity-60 rounded-full -z-0"></div>
            </div>
          </div>
          
          <div className="space-y-10 animate-on-scroll">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gelato-pink bg-opacity-20 p-3 rounded-full">
                  <Beaker size={24} className="text-gelato-pink" />
                </div>
                <h3 className="font-playfair text-2xl">Flavor Innovation</h3>
              </div>
              <p className="text-gray-300">
                Our flavor artists constantly experiment with unexpected ingredient combinations, pushing the boundaries of what gelato can be. From cocktail-inspired creations to collaborations with renowned chefs, our innovation lab is where gelato dreams become reality.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gelato-green bg-opacity-20 p-3 rounded-full">
                  <Sparkles size={24} className="text-gelato-green" />
                </div>
                <h3 className="font-playfair text-2xl">Texture Exploration</h3>
              </div>
              <p className="text-gray-300">
                We're obsessed with creating the perfect mouthfeel. Our lab explores various techniques to achieve the ideal balance of creaminess and structure, often incorporating unexpected elements like crispy inclusions or velvet-smooth infusions.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gelato-yellow bg-opacity-20 p-3 rounded-full">
                  <Zap size={24} className="text-gelato-yellow" />
                </div>
                <h3 className="font-playfair text-2xl">Limited Editions</h3>
              </div>
              <p className="text-gray-300">
                Our lab is where we craft our coveted limited-edition flavors, often inspired by art, fashion, and cultural moments. These exclusive creations are available for a short time, making each visit to Gelato Gallery a unique experience.
              </p>
            </div>
            
            <button className="gelato-button bg-white text-gelato-black hover:bg-gelato-cream">
              Discover The Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lab;
