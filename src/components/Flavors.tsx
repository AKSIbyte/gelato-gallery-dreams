
import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';

interface Flavor {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
  ingredients: string[];
  category: 'classic' | 'vegan' | 'limited';
}

const flavors: Flavor[] = [
  {
    id: 1,
    name: "Mascarpone & Berries",
    description: "Exclusive recipe, made in Italy with mascarpone cheese combined with swirls of berries from Argentine Patagonia.",
    image: "https://images.unsplash.com/photo-1539256003631-f409f9ad9e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    color: "bg-gelato-pink",
    ingredients: ["Mascarpone cheese", "Blueberries", "Raspberries", "Strawberries", "Cream"],
    category: "classic"
  },
  {
    id: 2,
    name: "Pistachio Dream",
    description: "Authentic Sicilian pistachios blended into a creamy base for a flavor that's rich, nutty and unforgettable.",
    image: "https://images.unsplash.com/photo-1597048544262-69b24af6e48b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    color: "bg-gelato-green",
    ingredients: ["Sicilian pistachios", "Organic milk", "Cream", "Cane sugar"],
    category: "classic"
  },
  {
    id: 3,
    name: "Passion Mango",
    description: "Tropical explosion of ripe mangoes and passion fruit for an exotic flavor adventure.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    color: "bg-gelato-yellow",
    ingredients: ["Alphonso mangoes", "Passion fruit", "Lime zest", "Agave nectar"],
    category: "vegan"
  },
  {
    id: 4,
    name: "Dark Chocolate Truffle",
    description: "Intense chocolate experience using premium single-origin dark chocolate from Ecuador.",
    image: "https://images.unsplash.com/photo-1588685232180-8bb64cb4837a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    color: "bg-gelato-black",
    ingredients: ["Ecuadorian dark chocolate", "Fresh cream", "Madagascar vanilla", "Sea salt"],
    category: "classic"
  },
  {
    id: 5,
    name: "Caramelized Fig",
    description: "Sweet Mediterranean figs caramelized to perfection and swirled into a creamy base.",
    image: "https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    color: "bg-gelato-cream",
    ingredients: ["Fresh figs", "Caramelized sugar", "Mascarpone", "Honey", "Lemon zest"],
    category: "limited"
  },
  {
    id: 6,
    name: "Matcha Zen",
    description: "Ceremonial grade Japanese matcha creates a perfectly balanced earthy and sweet experience.",
    image: "https://images.unsplash.com/photo-1561845730-208ad5910553?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    color: "bg-gelato-green",
    ingredients: ["Kyoto matcha powder", "Coconut milk", "Organic cane sugar", "Vanilla bean"],
    category: "vegan"
  }
];

const Flavors = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const filteredFlavors = activeCategory === 'all' 
    ? flavors 
    : flavors.filter(flavor => flavor.category === activeCategory);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };
  
  return (
    <section id="flavors" className="py-20 md:py-32 bg-gelato-cream bg-opacity-20">
      <div className="gelato-container">
        <div className="text-center animate-on-scroll">
          <h2 className="section-title">Our Flavors</h2>
          <p className="section-subtitle mx-auto">
            Explore our collection of handcrafted flavors, each one a unique sensory experience
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          <button 
            onClick={() => setActiveCategory('all')} 
            className={`px-6 py-2 rounded-full transition-all ${activeCategory === 'all' ? 'bg-gelato-black text-white' : 'bg-white text-gelato-black border border-gelato-black'}`}
          >
            All Flavors
          </button>
          <button 
            onClick={() => setActiveCategory('classic')} 
            className={`px-6 py-2 rounded-full transition-all ${activeCategory === 'classic' ? 'bg-gelato-black text-white' : 'bg-white text-gelato-black border border-gelato-black'}`}
          >
            Classic
          </button>
          <button 
            onClick={() => setActiveCategory('vegan')} 
            className={`px-6 py-2 rounded-full transition-all ${activeCategory === 'vegan' ? 'bg-gelato-black text-white' : 'bg-white text-gelato-black border border-gelato-black'}`}
          >
            Vegan
          </button>
          <button 
            onClick={() => setActiveCategory('limited')} 
            className={`px-6 py-2 rounded-full transition-all ${activeCategory === 'limited' ? 'bg-gelato-black text-white' : 'bg-white text-gelato-black border border-gelato-black'}`}
          >
            Limited Edition
          </button>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hidden md:block"
          >
            <ArrowLeft size={24} />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredFlavors.map((flavor) => (
              <div 
                key={flavor.id} 
                className="min-w-[280px] md:min-w-[350px] snap-center animate-on-scroll"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-64 overflow-hidden group">
                    <img 
                      src={flavor.image} 
                      alt={flavor.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => setSelectedFlavor(flavor)} 
                        className="bg-white text-gelato-black p-3 rounded-full"
                      >
                        <Plus size={24} />
                      </button>
                    </div>
                    <div className={`absolute bottom-0 left-0 w-full ${flavor.color} h-1`}></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-medium mb-2">{flavor.name}</h3>
                    <p className="text-gray-600 line-clamp-3">{flavor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hidden md:block"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Flavor Detail Modal */}
      {selectedFlavor && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row animate-scale-in">
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={selectedFlavor.image} 
                alt={selectedFlavor.name} 
                className="w-full h-full object-cover"
              />
              <div className={`absolute bottom-0 left-0 w-full ${selectedFlavor.color} h-1 md:h-full md:w-1 md:left-auto md:right-0 md:top-0`}></div>
            </div>
            <div className="md:w-1/2 p-6 md:p-10 overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-playfair font-medium">{selectedFlavor.name}</h3>
                <button 
                  onClick={() => setSelectedFlavor(null)}
                  className="text-gray-500 hover:text-gelato-black"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-700 mb-6">{selectedFlavor.description}</p>
              
              <h4 className="font-playfair text-lg mb-3">Ingredients</h4>
              <ul className="mb-8">
                {selectedFlavor.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${selectedFlavor.color}`}></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="gelato-button">Add to Order</button>
                <button 
                  onClick={() => setSelectedFlavor(null)}
                  className="border border-gelato-black text-gelato-black py-3 px-8 text-sm uppercase tracking-wider font-medium transition-all hover:bg-gelato-black hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Flavors;
