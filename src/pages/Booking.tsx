
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from "@/components/ui/use-toast";
import { addDays, format, differenceInDays } from 'date-fns';

// In a real app, this would come from an API
const roomsData = {
  "deluxe-tent": {
    id: "deluxe-tent",
    name: "Deluxe Safari Tent",
    price: 180,
    image: "https://images.unsplash.com/photo-1605637297167-5d994582c522?q=80&w=2187&auto=format&fit=crop"
  },
  "premium-cabin": {
    id: "premium-cabin",
    name: "Premium Mountain Cabin",
    price: 250,
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=2070&auto=format&fit=crop"
  },
  "eco-lodge": {
    id: "eco-lodge",
    name: "Eco Lodge Suite",
    price: 220,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
  },
  "family-bungalow": {
    id: "family-bungalow",
    name: "Family Bungalow",
    price: 320,
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070&auto=format&fit=crop"
  }
};

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>(addDays(new Date(), 2));
  const [guests, setGuests] = useState(2);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  
  // Get room data based on ID
  const room = id ? roomsData[id as keyof typeof roomsData] : null;
  
  useEffect(() => {
    // If check-in date is after check-out date, update check-out date
    if (checkIn && checkOut && checkIn > checkOut) {
      setCheckOut(addDays(checkIn, 1));
    }
  }, [checkIn, checkOut]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        title: "Error",
        description: "Please select check-in and check-out dates.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Successful!",
        description: `Your stay at ${room?.name} has been confirmed.`,
      });
      
      // Redirect to dashboard (in a real app, this would redirect to a booking confirmation page)
      navigate('/dashboard');
    }, 1500);
  };
  
  if (!room) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 pb-16">
          <div className="page-container text-center">
            <h1 className="text-3xl font-bold mb-4">Room Not Found</h1>
            <p className="mb-6">The room you're trying to book doesn't exist or has been removed.</p>
            <Button 
              onClick={() => navigate('/rooms')}
              className="bg-primary"
            >
              Browse All Rooms
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Calculate total nights and price
  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const totalPrice = nights * room.price;
  
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
            <h1 className="text-3xl font-bold mb-6">Complete Your Booking</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="glass-card p-6 rounded-xl mb-8">
                  <h2 className="text-xl font-bold mb-6">Guest Information</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">Special Requests (Optional)</label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <h2 className="text-xl font-bold mb-4">Select Dates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Check-in Date</label>
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          className="border rounded-md"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Check-out Date</label>
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          className="border rounded-md"
                          disabled={(date) => {
                            if (!checkIn) return false;
                            return date <= checkIn || date < new Date();
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="guests" className="block text-sm font-medium mb-2">Number of Guests</label>
                      <select
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                    <p className="text-muted-foreground mb-8">
                      Your card will not be charged now. Payment will be processed upon check-in.
                    </p>
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Complete Booking'}
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Booking Summary */}
              <div className="lg:col-span-1">
                <div className="glass-card p-6 rounded-xl sticky top-28">
                  <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
                  
                  <div className="flex items-center mb-6">
                    <img 
                      src={room.image} 
                      alt={room.name} 
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-medium">{room.name}</h3>
                      <p className="text-primary">${room.price} / night</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-b border-border py-4 mb-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Check-in</span>
                      <span className="font-medium">
                        {checkIn ? format(checkIn, 'MMM dd, yyyy') : '-'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-out</span>
                      <span className="font-medium">
                        {checkOut ? format(checkOut, 'MMM dd, yyyy') : '-'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests</span>
                      <span className="font-medium">{guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Length of stay</span>
                      <span className="font-medium">{nights} {nights === 1 ? 'night' : 'nights'}</span>
                    </div>
                  </div>
                  
                  <div className="border-b border-border pb-4 mb-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Room rate</span>
                      <span>${room.price} x {nights} nights</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & fees</span>
                      <span>${Math.round(totalPrice * 0.1)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total</span>
                    <span>${Math.round(totalPrice * 1.1)}</span>
                  </div>
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

export default Booking;
