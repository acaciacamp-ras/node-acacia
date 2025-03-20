
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RoomCard from '@/components/RoomCard';
import Footer from '@/components/Footer';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Palmtree, Coffee, UserCheck, Waves } from 'lucide-react';

// Sample data for rooms
const featuredRooms = [
  {
    id: 'desert-view',
    name: 'Desert View Suite',
    description: 'Experience the tranquility of the desert from your private balcony in our luxurious Desert View Suite.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    capacity: 2,
    size: 40,
    amenities: ['Free WiFi', 'Private balcony', 'Minibar', 'Air conditioning']
  },
  {
    id: 'garden-oasis',
    name: 'Garden Oasis Room',
    description: 'Surrounded by lush gardens, our Garden Oasis Rooms offer a peaceful retreat with direct access to our landscaped grounds.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    capacity: 2,
    size: 35,
    amenities: ['Garden view', 'King bed', 'Smart TV', 'Tea & coffee facilities']
  },
  {
    id: 'beachfront-villa',
    name: 'Beachfront Villa',
    description: 'Our spacious Beachfront Villas offer unparalleled luxury with direct access to private beach areas and stunning sea views.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    capacity: 4,
    size: 85,
    amenities: ['Private pool', 'Sea view', 'Kitchenette', 'Butler service']
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with the reveal-element class
    document.querySelectorAll('.reveal-element').forEach(element => {
      observer.observe(element);
    });
    
    // Observe staggered elements
    document.querySelectorAll('.stagger-item').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="section-padding bg-sand-light dark:bg-stone-dark">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-element">
              <span className="inline-block px-3 py-1 mb-5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                Our Oasis
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Sanctuary in South Sinai</h2>
              <p className="text-muted-foreground mb-4">
                Acacia Camp is nestled between the majestic mountains of South Sinai and the crystal-clear waters of the Red Sea. Our resort offers an exclusive retreat where luxury meets natural beauty.
              </p>
              <p className="text-muted-foreground mb-6">
                From serene desert views to lush gardens and pristine beaches, we provide an unforgettable experience that captures the essence of this magical region.
              </p>
              <NavLink 
                to="/about"
                className="btn-primary inline-flex items-center"
              >
                Discover More <ChevronRight className="ml-1 h-4 w-4" />
              </NavLink>
            </div>
            
            <div className="grid grid-cols-2 gap-4 h-full reveal-element">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-40 shadow-subtle">
                  <img 
                    src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Acacia Camp" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-60 shadow-subtle">
                  <img 
                    src="https://images.unsplash.com/photo-1621275471769-e6aa344546d5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Acacia Camp" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="rounded-lg overflow-hidden h-64 shadow-subtle">
                  <img 
                    src="https://images.unsplash.com/photo-1605538031242-71d10cece92e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Acacia Camp" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-36 shadow-subtle">
                  <img 
                    src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Acacia Camp" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding">
        <div className="page-container">
          <div className="text-center mb-16 reveal-element">
            <span className="inline-block px-3 py-1 mb-5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              Resort Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Exceptional</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the unique features that make Acacia Camp an unparalleled destination for relaxation, adventure, and luxury in South Sinai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 rounded-xl reveal-element stagger-item stagger-delay-1">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Palmtree className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Beauty</h3>
              <p className="text-muted-foreground">
                Experience the incredible landscapes of South Sinai, from desert expanses to pristine shores.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl reveal-element stagger-item stagger-delay-2">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gourmet Dining</h3>
              <p className="text-muted-foreground">
                Indulge in exquisite cuisine crafted from local ingredients at our premium restaurants.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl reveal-element stagger-item stagger-delay-3">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Waves className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wellness Retreats</h3>
              <p className="text-muted-foreground">
                Rejuvenate your body and mind with our spa services and wellness activities.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl reveal-element stagger-item stagger-delay-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
              <p className="text-muted-foreground">
                Enjoy attentive, personalized service from our experienced staff throughout your stay.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rooms Section */}
      <section className="section-padding bg-sea-light dark:bg-accent">
        <div className="page-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 reveal-element">
            <div>
              <span className="inline-block px-3 py-1 mb-5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                Accommodations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Luxurious Retreats</h2>
              <p className="text-muted-foreground max-w-2xl">
                Choose from our range of elegantly designed accommodations, each offering comfort, privacy, and stunning views.
              </p>
            </div>
            <NavLink 
              to="/rooms"
              className="btn-primary hidden md:inline-flex items-center mt-5 md:mt-0"
            >
              View All Rooms <ChevronRight className="ml-1 h-4 w-4" />
            </NavLink>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <RoomCard key={room.id} {...room} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-10 md:hidden">
            <NavLink 
              to="/rooms"
              className="btn-primary inline-flex items-center"
            >
              View All Rooms <ChevronRight className="ml-1 h-4 w-4" />
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1604937888250-dc97a32e5044?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Acacia Camp" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background" />
        </div>
        
        <div className="page-container relative z-10">
          <div className="max-w-2xl reveal-element">
            <span className="inline-block px-3 py-1 mb-5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Magic of South Sinai</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book your stay now and receive complimentary breakfast and a spa treatment. Your perfect desert retreat awaits.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <NavLink to="/booking" className="btn-primary inline-block text-center">
                Book Your Stay
              </NavLink>
              <NavLink to="/contact" className="btn-outline inline-block text-center">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-desert-light dark:bg-stone-dark">
        <div className="page-container">
          <div className="text-center mb-16 reveal-element">
            <span className="inline-block px-3 py-1 mb-5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              Guest Experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Guests Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from guests who have experienced the exceptional hospitality and beauty of Acacia Camp.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl reveal-element stagger-item stagger-delay-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Guest" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">United Kingdom</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "The perfect blend of luxury and natural beauty. The staff went above and beyond to make our stay memorable. We'll definitely be returning to Acacia Camp."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl reveal-element stagger-item stagger-delay-2">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Guest" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">Singapore</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "An oasis of calm and luxury. The Desert View Suite was spectacular, and the guided excursions were informative and breathtaking. Highly recommended!"
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl reveal-element stagger-item stagger-delay-3">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Guest" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Olivia Martinez</h4>
                  <p className="text-sm text-muted-foreground">Spain</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "The perfect escape from city life. The beachfront villa exceeded all expectations, and the food was divine. Acacia Camp is truly a hidden gem in Sinai."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
