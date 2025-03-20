
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Users, Maximize2, Coffee } from 'lucide-react';

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  capacity: number;
  size: number;
  amenities: string[];
  index?: number;
}

const RoomCard = ({ id, name, description, price, image, capacity, size, amenities, index = 0 }: RoomCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <p className="text-white font-medium text-sm">From</p>
          <p className="text-white font-bold text-2xl">${price}<span className="text-sm font-normal">/night</span></p>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-muted-foreground mt-2 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-5">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{capacity} Guests</span>
          </div>
          <div className="flex items-center">
            <Maximize2 className="h-4 w-4 mr-1" />
            <span>{size} m²</span>
          </div>
          <div className="flex items-center">
            <Coffee className="h-4 w-4 mr-1" />
            <span>Breakfast</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <NavLink 
            to={`/rooms/${id}`}
            className="text-primary font-medium flex items-center group/btn"
          >
            View Details
            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
          </NavLink>
          
          <NavLink 
            to={`/booking/${id}`}
            className="btn-primary py-2 px-4"
          >
            Book Now
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
