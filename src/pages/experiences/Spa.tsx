
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Spa = () => {
  const treatmentsData = [
    {
      name: "Desert Harmony Massage",
      duration: "60 / 90 min",
      price: "$120 / $160",
      description: "A deeply relaxing full-body massage using warm desert sand pouches and locally-sourced olive oil infused with native herbs. This signature treatment relieves tension and restores balance."
    },
    {
      name: "Bedouin Ritual",
      duration: "120 min",
      price: "$190",
      description: "Experience traditional Bedouin wellness practices with this comprehensive treatment that includes a coffee scrub, clay wrap using minerals from the Sinai mountains, and a relaxing massage with warm herb-infused oils."
    },
    {
      name: "Mountain Stone Therapy",
      duration: "90 min",
      price: "$150",
      description: "Hot basalt stones from nearby mountains are used to massage the body, releasing deep muscle tension and improving circulation while promoting a profound sense of relaxation."
    },
    {
      name: "Desert Rose Facial",
      duration: "60 min",
      price: "$110",
      description: "This rejuvenating facial harnesses the power of local botanical ingredients including rose water, honey, and aloe vera to cleanse, exfoliate, and hydrate, leaving your skin glowing and refreshed."
    }
  ];
  
  const wellnessActivities = [
    {
      name: "Sunrise Yoga",
      schedule: "Daily, 6:30 AM",
      location: "Mountain Platform",
      description: "Start your day with energizing yoga as the sun rises over the mountains. All levels welcome."
    },
    {
      name: "Meditation Sessions",
      schedule: "Daily, 7:30 PM",
      location: "Stargazing Deck",
      description: "Guided meditation under the stars to calm the mind and connect with the peaceful desert energy."
    },
    {
      name: "Sound Healing",
      schedule: "Tuesdays & Fridays, 5:00 PM",
      location: "Wellness Dome",
      description: "Experience the therapeutic vibrations of traditional instruments in a deeply restorative sound journey."
    },
    {
      name: "Desert Herbal Workshop",
      schedule: "Wednesdays, 3:00 PM",
      location: "Garden Pavilion",
      description: "Learn about local medicinal plants and create your own herbal tea blend or natural skincare product."
    }
  ];
  
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
            <div className="relative h-80 mb-12 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
                alt="Acacia Camp Spa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-3">Spa & Wellness</h1>
                <p className="text-white/90 max-w-2xl">
                  Rejuvenate your body and mind in our serene desert sanctuary, where ancient healing 
                  traditions meet modern wellness practices.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <p className="text-lg mb-8 max-w-4xl">
                Our spa philosophy draws inspiration from the healing traditions of the Bedouin people
                who have thrived in this desert landscape for centuries. Using locally-sourced natural
                ingredients and time-honored techniques, our treatments are designed to restore balance,
                promote deep relaxation, and connect you to the unique energy of the Sinai desert.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-8">Spa Treatments</h2>
                  
                  <div className="space-y-6">
                    {treatmentsData.map((treatment, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card p-6 rounded-xl"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{treatment.name}</h3>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">{treatment.duration}</p>
                            <p className="font-medium text-primary">{treatment.price}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{treatment.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="glass-card p-6 rounded-xl sticky top-28">
                    <h3 className="text-xl font-bold mb-4">Spa Hours</h3>
                    <p className="mb-6">
                      <span className="block font-medium">Daily</span>
                      <span className="text-muted-foreground">9:00 AM - 8:00 PM</span>
                    </p>
                    
                    <h3 className="text-xl font-bold mb-4">Reservations</h3>
                    <p className="text-muted-foreground mb-6">
                      We recommend booking spa treatments in advance to ensure availability.
                      Room guests receive priority booking.
                    </p>
                    
                    <button className="btn-primary w-full py-3">
                      Book a Treatment
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Wellness Activities</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wellnessActivities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card p-6 rounded-xl"
                    >
                      <h3 className="text-xl font-bold mb-2">{activity.name}</h3>
                      <div className="mb-3">
                        <p className="text-sm">
                          <span className="text-primary font-medium">Schedule:</span> {activity.schedule}
                        </p>
                        <p className="text-sm">
                          <span className="text-primary font-medium">Location:</span> {activity.location}
                        </p>
                      </div>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Spa Facilities</h2>
                  <p className="text-lg mb-4">
                    Nestled among the natural rock formations of our property, our spa facilities include:
                  </p>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Four treatment rooms, including one couple's suite</li>
                    <li>Natural mineral pool with mountain views</li>
                    <li>Traditional hammam (steam room)</li>
                    <li>Desert herb sauna</li>
                    <li>Relaxation lounge with herbal teas</li>
                    <li>Outdoor yoga and meditation spaces</li>
                  </ul>
                  <p className="text-muted-foreground">
                    All spa facilities are complimentary for guests staying at Acacia Camp.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecf9?q=80&w=2070&auto=format&fit=crop" 
                    alt="Spa facilities" 
                    className="rounded-xl"
                  />
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

export default Spa;
