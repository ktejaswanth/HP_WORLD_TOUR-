
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Discover Your Perfect Journey
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          HP Tour World connects you to the best travel services all in one place. 
          Book buses, trains, flights, cabs, and hotels effortlessly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="bg-travel-primary hover:bg-travel-primary/90">
            <Link to="/services">
              Explore Services <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            <Link to="/about">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
