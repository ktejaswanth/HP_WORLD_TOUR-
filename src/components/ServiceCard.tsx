
import { ExternalLink } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  url: string;
}

const ServiceCard = ({ name, description, icon: Icon, imageUrl, url }: ServiceCardProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="service-card group block"
    >
      <div className="aspect-video relative overflow-hidden rounded-t-xl">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="service-icon">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <ExternalLink className="h-4 w-4 text-travel-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default ServiceCard;
