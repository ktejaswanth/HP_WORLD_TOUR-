
import { Bus, Train, Plane, Car, Hotel } from 'lucide-react';
import ServiceCategory from '../components/ServiceCategory';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  // Data for Bus Services
  const busServices = [
    {
      name: 'RedBus',
      description: 'India\'s largest online bus ticketing platform.',
      imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.redbus.in/'
    },
    {
      name: 'AbhiBus',
      description: 'Book bus tickets online with exclusive discounts.',
      imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.abhibus.com/'
    },
    {
      name: 'ZingBus',
      description: 'Premium intercity bus travel experience.',
      imageUrl: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.zingbus.com/'
    },
    {
      name: 'IntrCity SmartBus',
      description: 'Luxury bus service with safety features.',
      imageUrl: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.intrcity.com/'
    },
    {
      name: 'Morning Star Travels',
      description: 'Reliable bus service across major cities.',
      imageUrl: 'https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.morningstartravels.in/'
    }
  ];

  // Data for Train Services
  const trainServices = [
    {
      name: 'IRCTC',
      description: 'Official Indian Railways ticket booking portal.',
      imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.irctc.co.in/'
    },
    {
      name: 'RailYatri',
      description: 'Train PNR status, seat availability & more.',
      imageUrl: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.railyatri.in/'
    },
    {
      name: 'ConfirmTkt',
      description: 'AI-based train ticket confirmation prediction.',
      imageUrl: 'https://images.unsplash.com/photo-1500283281129-71410a42e4e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.confirmtkt.com/'
    },
    {
      name: 'Trainman',
      description: 'Train running status and PNR status check.',
      imageUrl: 'https://images.unsplash.com/photo-1473862170180-84fd39baa1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.trainman.in/'
    }
  ];

  // Data for Flight Services
  const flightServices = [
    {
      name: 'MakeMyTrip',
      description: 'India\'s leading online travel company.',
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxpZ2h0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.makemytrip.com/'
    },
    {
      name: 'Goibibo',
      description: 'Book flights with best deals and offers.',
      imageUrl: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.goibibo.com/'
    },
    {
      name: 'Cleartrip',
      description: 'Fast and hassle-free flight bookings.',
      imageUrl: 'https://images.unsplash.com/photo-1470155429730-65bfd86972c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.cleartrip.com/'
    },
    {
      name: 'Expedia',
      description: 'Book flights, hotels and vacation packages.',
      imageUrl: 'https://images.unsplash.com/photo-1539727239999-062328711f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZsaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.expedia.com/'
    },
    {
      name: 'Skyscanner',
      description: 'Compare flights from all major airlines.',
      imageUrl: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZsaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.skyscanner.com/'
    }
  ];

  // Data for Cab Services
  const cabServices = [
    {
      name: 'Uber',
      description: 'Ride-hailing service available worldwide.',
      imageUrl: 'https://images.unsplash.com/photo-1590060876886-05a3beb07326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.uber.com/'
    },
    {
      name: 'Ola',
      description: 'India\'s largest mobility platform.',
      imageUrl: 'https://images.unsplash.com/photo-1570125909328-e05ef0c10cce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.olacabs.com/'
    },
    {
      name: 'Rapido',
      description: 'Bike taxi service for quick commutes.',
      imageUrl: 'https://images.unsplash.com/photo-1603932743786-9a069a74e632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZSUyMHRheGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.rapido.bike/'
    },
    {
      name: 'BluSmart',
      description: 'Electric cab service for eco-friendly rides.',
      imageUrl: 'https://images.unsplash.com/photo-1520105072000-f44fc083e508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.blu-smart.com/'
    },
    {
      name: 'Savaari',
      description: 'Outstation car rentals with professional drivers.',
      imageUrl: 'https://images.unsplash.com/photo-1573116026045-0e8f02821ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.savaari.com/'
    }
  ];

  // Data for Hotel Services
  const hotelServices = [
    {
      name: 'OYO',
      description: 'Affordable hotel chain with standardized rooms.',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.oyorooms.com/'
    },
    {
      name: 'Trivago',
      description: 'Hotel price comparison site for best deals.',
      imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.trivago.in/'
    },
    {
      name: 'Airbnb',
      description: 'Unique stays and experiences around the world.',
      imageUrl: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.airbnb.co.in/'
    },
    {
      name: 'Agoda',
      description: 'Hotel bookings with free cancellation options.',
      imageUrl: 'https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.agoda.com/'
    },
    {
      name: 'Booking.com',
      description: 'Hotels, apartments, villas & more worldwide.',
      imageUrl: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.booking.com/'
    },
    {
      name: 'Hotels.com',
      description: 'Book now, pay later with loyalty rewards.',
      imageUrl: 'https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      url: 'https://www.hotels.com/'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-travel-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Travel Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our curated list of trusted travel partners. We connect you with the best services for all your travel needs in one convenient location.
            </p>
          </div>
          
          <div id="buses">
            <ServiceCategory 
              title="Bus Services" 
              icon={Bus}
              services={busServices} 
            />
          </div>
          
          <div id="trains">
            <ServiceCategory 
              title="Train Services" 
              icon={Train}
              services={trainServices} 
            />
          </div>
          
          <div id="flights">
            <ServiceCategory 
              title="Flight Services" 
              icon={Plane}
              services={flightServices} 
            />
          </div>
          
          <div id="cabs">
            <ServiceCategory 
              title="Cab Services" 
              icon={Car}
              services={cabServices} 
            />
          </div>
          
          <div id="hotels">
            <ServiceCategory 
              title="Hotel Services" 
              icon={Hotel}
              services={hotelServices} 
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
