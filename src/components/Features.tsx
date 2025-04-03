
import { Check, Clock, Globe, ShieldCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Globe className="h-10 w-10 text-travel-primary" />,
      title: 'One-Stop Travel Hub',
      description: 'Access all your favorite travel booking platforms in one convenient location. Save time by eliminating the need to visit multiple websites.'
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-travel-primary" />,
      title: 'Trusted Partners',
      description: 'We only connect you with reputable travel services that have been vetted for reliability, quality, and customer satisfaction.'
    },
    {
      icon: <Clock className="h-10 w-10 text-travel-primary" />,
      title: 'Quick Comparisons',
      description: 'Easily compare options across different platforms to find the best deals and services that match your specific travel requirements.'
    },
    {
      icon: <Check className="h-10 w-10 text-travel-primary" />,
      title: 'Seamless Experience',
      description: 'Enjoy a seamless transition to your chosen booking platform with our direct links that take you straight to what you need.'
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HP Tour World</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We simplify your travel planning process by connecting you to the best booking platforms all in one place.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
