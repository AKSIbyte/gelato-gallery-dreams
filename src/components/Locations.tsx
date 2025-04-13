
import { MapPin } from 'lucide-react';

const locations = [
  {
    id: 1,
    city: "Milan",
    country: "Italy",
    address: "Via Montenapoleone, 24",
    hours: "10:00 - 22:00",
    phone: "+39 02 1234 5678",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80",
    color: "bg-gelato-pink"
  },
  {
    id: 2,
    city: "New York",
    country: "USA",
    address: "5th Avenue, 263",
    hours: "11:00 - 23:00",
    phone: "+1 212 555 6789",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    color: "bg-gelato-yellow"
  },
  {
    id: 3,
    city: "Buenos Aires",
    country: "Argentina",
    address: "Palermo, Av. Libertador 3720",
    hours: "12:00 - 00:00",
    phone: "+54 11 4321 5678",
    image: "https://images.unsplash.com/photo-1596787659400-40352dfa4d35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    color: "bg-gelato-green"
  }
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 md:py-32 bg-white">
      <div className="gelato-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Our Locations</h2>
          <p className="section-subtitle mx-auto">
            Find our artisanal gelato galleries around the world
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div 
              key={location.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 animate-on-scroll"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={`${location.city}, ${location.country}`} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-0 left-0 ${location.color} text-white px-4 py-2 rounded-br-lg font-medium`}>
                  {location.city}, {location.country}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-gelato-black mt-1" size={18} />
                  <div>
                    <h3 className="font-playfair text-xl mb-2">
                      {location.city} Gelato Gallery
                    </h3>
                    <p className="text-gray-600">
                      {location.address}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-gray-600 mb-6">
                  <p>Hours: {location.hours}</p>
                  <p>Phone: {location.phone}</p>
                </div>
                <button className="w-full border border-gelato-black py-3 text-sm uppercase tracking-wider font-medium transition-all hover:bg-gelato-black hover:text-white">
                  View Store
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
