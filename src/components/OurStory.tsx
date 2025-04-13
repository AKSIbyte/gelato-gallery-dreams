
const OurStory = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gelato-white">
      <div className="gelato-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 animate-on-scroll">
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">
              The perfect blend of Italian tradition and modern innovation
            </p>
            <div className="space-y-6 text-lg">
              <p>
                Founded in Milan in 2015 by Master Gelatier Marco Rossi, Gelato Gallery was born from a passion for authentic Italian craftsmanship and a vision to elevate gelato to an art form.
              </p>
              <p>
                Every flavor we create tells a story—a narrative of carefully selected ingredients, time-honored techniques, and unexpected twists that surprise and delight. We source only the finest ingredients from around the world, from Sicilian pistachios to Madagascar vanilla, ensuring each scoop is an unforgettable experience.
              </p>
              <p>
                What sets us apart is our dedication to pushing boundaries. Our lab is where tradition meets innovation, where classics are reimagined, and where pop culture inspires new flavor sensations that captivate the palate and imagination alike.
              </p>
            </div>
            <button className="gelato-button mt-10">Read More</button>
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-48 h-48 bg-gelato-pink rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1563589173312-476d8c36b242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Gelato making process" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gelato-green rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
