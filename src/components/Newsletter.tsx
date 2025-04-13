
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    // This would normally connect to a backend service
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setEmail('');
  };
  
  return (
    <section className="py-20 md:py-32 bg-gelato-cream bg-opacity-30 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gelato-pink rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gelato-yellow rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="gelato-container relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 className="section-title">Stay Connected</h2>
          <p className="section-subtitle mx-auto">
            Subscribe to our newsletter for exclusive flavors, events, and special offers
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow py-3 px-6 border border-gelato-black rounded-none focus:outline-none focus:ring-2 focus:ring-gelato-black"
            />
            <button type="submit" className="gelato-button whitespace-nowrap">
              Subscribe
            </button>
          </form>
          
          <p className="mt-4 text-sm text-gray-500">
            By subscribing, you agree to receive marketing communications from us.
            Don't worry, we respect your privacy and you can unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
