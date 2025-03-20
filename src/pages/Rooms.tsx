
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoomCard from '@/components/RoomCard';
import { motion } from 'framer-motion';

// Sample room data - in a real app, this would come from an API
const roomsData = [
  {
    id: "deluxe-tent",
    name: "Deluxe Safari Tent",
    description: "Spacious safari tent with a king-sized bed, private bathroom, and panoramic mountain views.",
    price: 180,
    image: "https://images.unsplash.com/photo-1605637297167-5d994582c522?q=80&w=2187&auto=format&fit=crop",
    capacity: 2,
    size: 30,
    amenities: ["Wi-Fi", "Private bathroom", "Air conditioning", "Breakfast included"]
  },
  {
    id: "premium-cabin",
    name: "Premium Mountain Cabin",
    description: "Luxury cabin with separate bedroom, living area, private terrace, and stunning sea views.",
    price: 250,
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=2070&auto=format&fit=crop",
    capacity: 3,
    size: 45,
    amenities: ["Wi-Fi", "Private bathroom", "Air conditioning", "Breakfast included", "Mini bar"]
  },
  {
    id: "eco-lodge",
    name: "Eco Lodge Suite",
    description: "Sustainable suite built with natural materials, featuring a queen bed, outdoor shower, and garden views.",
    price: 220,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    capacity: 2,
    size: 35,
    amenities: ["Wi-Fi", "Outdoor shower", "Breakfast included", "Eco-friendly amenities"]
  },
  {
    id: "family-bungalow",
    name: "Family Bungalow",
    description: "Spacious bungalow with two bedrooms, perfect for families with a private garden and patio.",
    price: 320,
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070&auto=format&fit=crop",
    capacity: 4,
    size: 60,
    amenities: ["Wi-Fi", "Two bathrooms", "Air conditioning", "Breakfast included", "Kitchen"]
  }
];

const Rooms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRooms, setFilteredRooms] = useState(roomsData);
  
  useEffect(() => {
    // Filter rooms based on search term
    const filtered = roomsData.filter(room => 
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRooms(filtered);
  }, [searchTerm]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-3">Our Accommodations</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Discover our carefully designed rooms and tents, each offering unique experiences while 
              maintaining the highest standards of comfort and luxury in harmony with nature.
            </p>
          </motion.div>
          
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search accommodations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, index) => (
                <RoomCard key={room.id} {...room} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">No accommodations found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rooms;
