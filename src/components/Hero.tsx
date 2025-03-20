
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1605538032404-d7f64d9f6496?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          transform: 'translateY(0px)'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background/90" />
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="page-container pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 mb-5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              South Sinai's Premier Retreat
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md mb-6">
              Experience Tranquility at Acacia Camp
            </h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md mb-8 max-w-2xl">
              Nestled between mountains and sea, Acacia Camp offers unparalleled luxury and serenity in the heart of South Sinai's natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <NavLink to="/rooms" className="btn-primary inline-block text-center">
                Explore Accommodations
              </NavLink>
              <NavLink to="/about" className="btn-outline border-white text-white hover:bg-white/20 inline-block text-center">
                Discover Our Story
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-white/80 rounded-full"
            animate={{ 
              y: [0, 13, 0],
              opacity: [0.8, 0.2, 0.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
