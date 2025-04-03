
import { LucideIcon } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface Service {
  name: string;
  description: string;
  imageUrl: string;
  url: string;
}

interface ServiceCategoryProps {
  title: string;
  icon: LucideIcon;
  services: Service[];
}

const ServiceCategory = ({ title, icon: Icon, services }: ServiceCategoryProps) => {
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="h-8 w-8 text-travel-primary" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={`${title}-${index}`}
            name={service.name}
            description={service.description}
            icon={Icon}
            imageUrl={service.imageUrl}
            url={service.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
