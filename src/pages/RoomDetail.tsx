
import { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Users, Maximize2, Coffee, Check } from 'lucide-react';

// In a real app, this would come from an API
const roomsData = {
  "deluxe-tent": {
    id: "deluxe-tent",
    name: "Deluxe Safari Tent",
    description: "Experience luxury camping in our spacious safari tent with a king-sized bed, private bathroom, and panoramic mountain views. Each tent is carefully positioned to offer privacy while maintaining stunning vistas of the surrounding landscape. Wake up to the sound of birds and enjoy your morning coffee on your private deck.",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1605637297167-5d994582c522?q=80&w=2187&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618767689021-3cac4d062018?q=80&w=1974&auto=format&fit=crop"
    ],
    capacity: 2,
    size: 30,
    amenities: ["Wi-Fi", "Private bathroom", "Air conditioning", "Breakfast included", "Mountain view", "Daily housekeeping"]
  },
  "premium-cabin": {
    id: "premium-cabin",
    name: "Premium Mountain Cabin",
    description: "Our luxury cabin features a separate bedroom with a king-sized bed, spacious living area, private terrace, and stunning sea views. Designed with local materials to blend with the surroundings, this cabin offers the perfect balance of rustic charm and modern luxury. Ideal for couples looking for a romantic getaway or small families.",
    price: 250,
    images: [
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=2065&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=2070&auto=format&fit=crop"
    ],
    capacity: 3,
    size: 45,
    amenities: ["Wi-Fi", "Private bathroom", "Air conditioning", "Breakfast included", "Mini bar", "Sea view", "Daily housekeeping", "Separate living area"]
  },
  "eco-lodge": {
    id: "eco-lodge",
    name: "Eco Lodge Suite",
    description: "Our sustainable suite is built with natural materials, featuring a queen bed, outdoor shower, and peaceful garden views. The eco-lodge is powered by solar energy and uses rainwater harvesting systems. Enjoy the unique experience of being close to nature while minimizing your environmental impact. The outdoor shower under the stars is an experience not to be missed.",
    price: 220,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629078691977-dc51b7a89d5e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop"
    ],
    capacity: 2,
    size: 35,
    amenities: ["Wi-Fi", "Outdoor shower", "Breakfast included", "Eco-friendly amenities", "Garden view", "Solar powered", "Organic toiletries"]
  },
  "family-bungalow": {
    id: "family-bungalow",
    name: "Family Bungalow",
    description: "Spacious bungalow with two bedrooms, perfect for families with a private garden and patio. The master bedroom has a king-sized bed, while the second bedroom features two twin beds. The bungalow includes a fully equipped kitchenette, dining area, and a comfortable living space. Enjoy meals on your private patio surrounded by lush gardens.",
    price: 320,
    images: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop"
    ],
    capacity: 4,
    size: 60,
    amenities: ["Wi-Fi", "Two bathrooms", "Air conditioning", "Breakfast included", "Kitchen", "Private garden", "Daily housekeeping", "Family-friendly"]
  }
};

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  // Get room data based on ID
  const room = id ? roomsData[id as keyof typeof roomsData] : null;
  
  if (!room) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 pb-16">
          <div className="page-container text-center">
            <h1 className="text-3xl font-bold mb-4">Room Not Found</h1>
            <p className="mb-6">The room you're looking for doesn't exist or has been removed.</p>
            <NavLink to="/rooms" className="btn-primary inline-block">
              Browse All Rooms
            </NavLink>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm mb-6">
              <NavLink to="/" className="text-muted-foreground hover:text-foreground">Home</NavLink>
              <span className="mx-2">•</span>
              <NavLink to="/rooms" className="text-muted-foreground hover:text-foreground">Rooms</NavLink>
              <span className="mx-2">•</span>
              <span className="font-medium">{room.name}</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Image Gallery */}
              <div className="lg:col-span-2">
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={room.images[selectedImage]} 
                    alt={room.name} 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="flex space-x-3">
                  {room.images.map((image, index) => (
                    <button 
                      key={index}
                      className={`w-24 h-16 rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-primary' : 'border-transparent'}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`${room.name} - view ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Room Info and Booking */}
              <div className="lg:col-span-1">
                <div className="glass-card p-6 rounded-xl mb-6">
                  <h1 className="text-2xl font-bold mb-2">{room.name}</h1>
                  <p className="text-xl mb-4">${room.price}<span className="text-sm text-muted-foreground">/night</span></p>
                  
                  <div className="flex flex-col space-y-4 mb-6">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-primary" />
                      <span>Up to {room.capacity} guests</span>
                    </div>
                    <div className="flex items-center">
                      <Maximize2 className="h-5 w-5 mr-3 text-primary" />
                      <span>{room.size} m²</span>
                    </div>
                    <div className="flex items-center">
                      <Coffee className="h-5 w-5 mr-3 text-primary" />
                      <span>Breakfast included</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="font-medium mb-2">Select check-in date:</p>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="border rounded-md"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                  
                  <NavLink to={`/booking/${room.id}`}>
                    <Button className="w-full bg-primary">
                      Book Now
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
            
            {/* Description and Amenities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground mb-8">
                  {room.description}
                </p>
                
                <h2 className="text-xl font-bold mb-4">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-primary" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoomDetail;
