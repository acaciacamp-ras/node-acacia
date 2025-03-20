
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dining = () => {
  const diningOptions = [
    {
      title: "The Acacia Restaurant",
      description: "Our main restaurant offers a blend of local and international cuisine, with an emphasis on locally-sourced ingredients and traditional Bedouin recipes with a modern twist.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      hours: "Breakfast: 06:30 - 10:30, Dinner: 18:00 - 22:00"
    },
    {
      title: "Desert Sky Lounge",
      description: "Perched on our highest terrace, this bar and casual dining venue offers stunning panoramic views of the mountains and stars, perfect for sunset cocktails and light meals.",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
      hours: "12:00 - 00:00"
    },
    {
      title: "Oasis Pool Bar",
      description: "Located beside our natural pool, this casual spot serves refreshing drinks, smoothies, and simple lunch options perfect for a day of relaxation.",
      image: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?q=80&w=2080&auto=format&fit=crop",
      hours: "10:00 - 18:00"
    },
    {
      title: "Private Dining Experiences",
      description: "Choose from a variety of unique dining setups, from romantic dinners under the stars to traditional Bedouin feasts in a secluded wadi.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
      hours: "By reservation only"
    }
  ];

  const specialtyDishes = [
    {
      name: "Zarb",
      description: "Traditional Bedouin barbecue cooked underground in a sand oven, featuring slow-cooked meats and vegetables infused with desert herbs."
    },
    {
      name: "Seafood Sayadieh",
      description: "Fresh Red Sea fish served on spiced rice with caramelized onions, pine nuts, and a tangy tahini sauce."
    },
    {
      name: "Desert Herb Crusted Rack of Lamb",
      description: "Local lamb coated with indigenous herbs served with roasted root vegetables and date molasses."
    },
    {
      name: "Hibiscus Berry Pavlova",
      description: "Meringue dessert topped with local berries and hibiscus syrup, garnished with fresh mint."
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
                src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070&auto=format&fit=crop" 
                alt="Acacia Camp Dining" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-3">Dining Experiences</h1>
                <p className="text-white/90 max-w-2xl">
                  Discover a culinary journey that reflects the richness of local ingredients and traditions,
                  all while enjoying breathtaking views and impeccable service.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Our Dining Venues</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {diningOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card overflow-hidden rounded-xl"
                  >
                    <div className="h-60">
                      <img 
                        src={option.image} 
                        alt={option.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                      <p className="text-muted-foreground mb-4">{option.description}</p>
                      <p className="text-sm font-medium">
                        <span className="text-primary">Hours:</span> {option.hours}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Our Culinary Philosophy</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg mb-6">
                    At Acacia Camp, we believe that dining is an integral part of the travel experience. 
                    Our culinary team works closely with local producers and foragers to source the freshest ingredients, 
                    many of which come from our own organic garden.
                  </p>
                  <p className="text-lg mb-6">
                    We celebrate the rich culinary heritage of the Sinai Peninsula, 
                    incorporating traditional Bedouin techniques and flavors while adding contemporary twists. 
                    Our menus change seasonally to reflect the availability of local produce.
                  </p>
                  <p className="text-lg">
                    Whether you're enjoying a formal dinner at our main restaurant or a casual meal under the stars, 
                    we strive to create memorable dining experiences that connect you to the land and culture of Sinai.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                    alt="Fresh ingredients" 
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-8">Signature Dishes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialtyDishes.map((dish, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                    <p className="text-muted-foreground">{dish.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dining;
