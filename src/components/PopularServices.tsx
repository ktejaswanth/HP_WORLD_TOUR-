
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const PopularServices = () => {
  const services = [
    {
      category: "Bus",
      name: "RedBus",
      description: "India's largest online bus ticketing platform",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      url: "https://www.redbus.in/"
    },
    {
      category: "Train",
      name: "IRCTC",
      description: "Official Indian Railways ticket booking portal",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      url: "https://www.irctc.co.in/"
    },
    {
      category: "Flight",
      name: "MakeMyTrip",
      description: "India's leading online travel company",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxpZ2h0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      url: "https://www.makemytrip.com/"
    },
    {
      category: "Cab",
      name: "Uber",
      description: "Ride-hailing service available worldwide",
      image: "https://images.unsplash.com/photo-1590060876886-05a3beb07326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      url: "https://www.uber.com/"
    },
    {
      category: "Hotel",
      name: "Booking.com",
      description: "Hotels, apartments, villas & more worldwide",
      image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      url: "https://www.booking.com/"
    },
    {
      category: "Hotel",
      name: "Airbnb",
      description: "Unique stays and experiences around the world",
      image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      url: "https://www.airbnb.co.in/"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Travel Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our most popular travel booking partners that travelers trust for their journeys.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/services" className="flex items-center">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a 
              key={index} 
              href={service.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-travel-primary transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-travel-primary font-medium">
                  <span>Visit Website</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
