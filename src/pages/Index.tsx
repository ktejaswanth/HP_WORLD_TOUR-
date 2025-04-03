
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PopularServices from '../components/PopularServices';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-travel-background">
      <Navbar />
      <Hero />
      <Features />
      <PopularServices />
      <Footer />
    </div>
  );
};

export default Index;
