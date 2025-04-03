
import { useState, useEffect } from "react";
import { Tag, Gift, Sparkles, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type Offer = {
  id: number;
  title: string;
  description: string;
  code: string;
  discountPercent: number;
  expiryDays: number;
  icon: "tag" | "gift" | "sparkles";
  category: string;
  serviceUrl: string;
  bgColor: string;
};

const Offers = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const offers: Offer[] = [
    {
      id: 1,
      title: "10% Off First Flight Booking!",
      description: "Get 10% off on your first flight booking through MakeMyTrip",
      code: "FIRST10FLIGHT",
      discountPercent: 10,
      expiryDays: 15,
      icon: "tag",
      category: "Flight",
      serviceUrl: "https://www.makemytrip.com/",
      bgColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "50% Off Hotel Booking!",
      description: "Special offer: 50% discount on OYO bookings this month",
      code: "HOTEL50",
      discountPercent: 50,
      expiryDays: 7,
      icon: "gift",
      category: "Hotel",
      serviceUrl: "https://www.oyorooms.com/",
      bgColor: "bg-gradient-to-r from-orange-400 to-pink-500",
    },
    {
      id: 3,
      title: "Free Cab Ride",
      description: "Get a free first ride up to ₹150 with Uber",
      code: "UBERRFREE",
      discountPercent: 100,
      expiryDays: 10,
      icon: "sparkles",
      category: "Cab",
      serviceUrl: "https://www.uber.com/",
      bgColor: "bg-gradient-to-r from-green-400 to-emerald-500",
    }
  ];

  useEffect(() => {
    // Rotate through offers every 5 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
        setIsVisible(true);
      }, 600); // Wait for fade out before changing offer
    }, 5000);

    return () => clearInterval(interval);
  }, [offers.length]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "tag": return <Tag className="h-7 w-7" />;
      case "gift": return <Gift className="h-7 w-7" />;
      case "sparkles": return <Sparkles className="h-7 w-7" />;
      default: return <Tag className="h-7 w-7" />;
    }
  };

  const currentOffer = offers[currentOfferIndex];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hot Travel Deals</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Exclusive offers and discounts from our partners to make your journey even more affordable.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/services" className="flex items-center">
              View All Offers <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main featured offer */}
          <div 
            className={`col-span-1 lg:col-span-3 rounded-xl overflow-hidden shadow-lg 
                      ${currentOffer.bgColor} text-white
                      transform transition-all duration-500 ease-in-out
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-white/20 p-4 rounded-full mb-6 md:mb-0 md:mr-8">
                {renderIcon(currentOffer.icon)}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center mb-2">
                  <span className="bg-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full mr-3">
                    {currentOffer.category}
                  </span>
                  <span className="flex items-center text-white/80 text-sm">
                    <Clock className="h-3 w-3 mr-1" /> Expires in {currentOffer.expiryDays} days
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{currentOffer.title}</h3>
                <p className="text-white/90 mb-4 max-w-2xl">{currentOffer.description}</p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg">
                    <span className="text-sm text-white/70">Use code:</span>
                    <span className="ml-2 font-mono font-bold">{currentOffer.code}</span>
                  </div>
                  
                  <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-white/90">
                    <a 
                      href={currentOffer.serviceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Offer indicator dots */}
          <div className="col-span-1 lg:col-span-3 flex justify-center space-x-2 mt-4">
            {offers.map((offer, idx) => (
              <button
                key={offer.id}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                          ${idx === currentOfferIndex ? 'bg-travel-primary scale-125' : 'bg-gray-300'}`}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentOfferIndex(idx);
                    setIsVisible(true);
                  }, 600);
                }}
                aria-label={`View offer ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Additional stationary offers */}
          {offers.map((offer) => (
            <div 
              key={offer.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden 
                        hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`h-2 ${offer.bgColor}`} />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded">
                    {offer.category}
                  </span>
                  <div className={`text-travel-primary flex items-center text-sm font-medium`}>
                    <Clock className="h-3 w-3 mr-1" /> {offer.expiryDays} days left
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-travel-primary transition-colors">
                  {offer.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {offer.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="bg-gray-50 px-3 py-1 rounded text-sm font-mono">
                    {offer.code}
                  </div>
                  
                  <a 
                    href={offer.serviceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-travel-primary font-medium flex items-center text-sm hover:underline"
                  >
                    Redeem <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
