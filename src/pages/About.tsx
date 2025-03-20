
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1527824404775-dce343118ebc?q=80&w=2070&auto=format&fit=crop" 
                alt="Acacia Camp landscape" 
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              
              <p className="text-lg mb-6">
                Acacia Camp was born from a vision to create a sanctuary where luxury meets nature in the heart of South Sinai's breathtaking landscape. Founded in 2018 by adventure enthusiasts Sarah and Mohammed, our camp combines traditional Bedouin hospitality with modern comforts.
              </p>
              
              <p className="text-lg mb-6">
                Named after the iconic acacia trees that dot the Sinai Peninsula, our camp was designed to integrate seamlessly with its surroundings. Each structure was carefully positioned to minimize environmental impact while maximizing the stunning views of mountains and sea that make this region so special.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
            <div className="mb-12">
              <p className="text-lg mb-6">
                At Acacia Camp, we believe that luxury travel should be sustainable and respectful of local communities and environments. Our philosophy centers around three core principles:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                  <p>We minimize our ecological footprint through solar power, water conservation, and waste reduction practices.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Community</h3>
                  <p>We employ local Bedouin staff and source materials and food locally whenever possible.</p>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Authenticity</h3>
                  <p>We offer genuine experiences that connect guests with the rich cultural heritage of the Sinai.</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
                  alt="Sarah Ahmed - Founder" 
                  className="w-48 h-48 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">Sarah Ahmed</h3>
                <p className="text-muted-foreground mb-3">Founder & Experience Director</p>
                <p className="text-center">
                  With a background in sustainable tourism, Sarah oversees our guest experiences and sustainability initiatives.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop" 
                  alt="Mohammed Ali - Founder" 
                  className="w-48 h-48 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">Mohammed Ali</h3>
                <p className="text-muted-foreground mb-3">Founder & Operations Director</p>
                <p className="text-center">
                  Born and raised in the Sinai, Mohammed brings local knowledge and expertise to our operations.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <p className="text-lg mb-6">
              Acacia Camp is located in South Sinai, Egypt, nestled between the mountains of the Saint Catherine Protectorate and the shores of the Red Sea. Our remote location offers tranquility and connection with nature, while still being accessible from Sharm El-Sheikh (2 hours drive) and Cairo (6 hours drive or a short domestic flight).
            </p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
