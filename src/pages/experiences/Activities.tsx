
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Activities = () => {
  const activitiesData = [
    {
      title: "Desert Hiking",
      description: "Explore the stunning landscapes of South Sinai with our expert Bedouin guides. Discover hidden canyons, ancient rock formations, and breathtaking vistas on treks ranging from easy walks to challenging all-day adventures.",
      image: "https://images.unsplash.com/photo-1503480207415-fdddcc21d5fc?q=80&w=2070&auto=format&fit=crop",
      duration: "2-8 hours",
      difficulty: "Easy to Difficult"
    },
    {
      title: "Stargazing Tours",
      description: "Away from city lights, the Sinai desert offers some of the clearest night skies in the world. Join our astronomy expert for a guided tour of the constellations, complete with powerful telescopes and traditional Bedouin tea around a campfire.",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
      duration: "2 hours",
      difficulty: "Easy"
    },
    {
      title: "Mountain Biking",
      description: "Experience the thrill of mountain biking through varied desert terrain. Our routes cater to different skill levels, from beginners to advanced riders, with quality bikes and safety equipment provided.",
      image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop",
      duration: "3-5 hours",
      difficulty: "Moderate to Difficult"
    },
    {
      title: "Cultural Experiences",
      description: "Immerse yourself in Bedouin culture with activities like bread making, traditional crafts, or music sessions. Learn about the rich heritage and customs of the Sinai's indigenous people from local community members.",
      image: "https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?q=80&w=2070&auto=format&fit=crop",
      duration: "2-3 hours",
      difficulty: "Easy"
    },
    {
      title: "Rock Climbing",
      description: "The granite mountains of South Sinai offer excellent climbing opportunities for all levels. Our certified guides provide instruction, equipment, and ensure safety while you challenge yourself on natural rock faces.",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2093&auto=format&fit=crop",
      duration: "4 hours",
      difficulty: "Moderate to Difficult"
    },
    {
      title: "Camel Treks",
      description: "Experience the desert as travelers have for centuries - on camelback. Our half-day and full-day treks follow ancient Bedouin routes through valleys and plains, with stops at oases and scenic viewpoints.",
      image: "https://images.unsplash.com/photo-1561041695-d2faab72e33a?q=80&w=2070&auto=format&fit=crop",
      duration: "4-8 hours",
      difficulty: "Easy"
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
                src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop" 
                alt="Acacia Camp Activities" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-3">Activities & Adventures</h1>
                <p className="text-white/90 max-w-2xl">
                  Immerse yourself in the natural beauty and cultural richness of the Sinai Peninsula
                  with our range of guided activities and unforgettable adventures.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <p className="text-lg mb-8 max-w-4xl">
                At Acacia Camp, we believe that truly experiencing a destination means engaging with its 
                landscape and culture in meaningful ways. Our carefully curated activities allow you to 
                explore South Sinai's dramatic natural beauty and rich heritage, guided by local experts 
                who share their deep knowledge and passion for this unique region.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activitiesData.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card overflow-hidden rounded-xl h-full flex flex-col"
                  >
                    <div className="h-48">
                      <img 
                        src={activity.image} 
                        alt={activity.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{activity.description}</p>
                      <div className="flex justify-between text-sm">
                        <span><strong>Duration:</strong> {activity.duration}</span>
                        <span><strong>Difficulty:</strong> {activity.difficulty}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Custom Experiences</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg mb-6">
                    Looking for something special? We can create custom experiences tailored to your interests, 
                    fitness level, and schedule. Whether it's a private sunrise yoga session on a mountain peak, 
                    a photography expedition to capture the desert's changing light, or a multi-day trek through 
                    remote wadis, our team will craft an unforgettable adventure just for you.
                  </p>
                  <p className="text-lg">
                    All activities can be booked through our concierge, either in advance of your stay or once 
                    you've arrived. Our experienced team will help you select the perfect adventures to make 
                    your time at Acacia Camp truly memorable.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop" 
                    alt="Custom experience" 
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4">Ready for Adventure?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Contact our activities team to learn more or book your next adventure during your stay at Acacia Camp.
              </p>
              <button className="btn-primary py-3 px-6">
                Inquire About Activities
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Activities;
