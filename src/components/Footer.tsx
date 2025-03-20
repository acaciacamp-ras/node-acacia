
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-light dark:bg-stone-dark border-t border-border">
      <div className="page-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <NavLink to="/" className="inline-block mb-5">
              <h2 className="text-2xl font-semibold">
                <span className="text-primary">Acacia</span> Camp
              </h2>
            </NavLink>
            <p className="text-muted-foreground mb-6">
              Experience luxury and tranquility in the heart of South Sinai, where desert beauty meets exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/rooms" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Accommodations
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/experiences" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experiences
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Acacia Camp, South Sinai Governorate, Egypt</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+20123456789" className="text-muted-foreground hover:text-primary transition-colors">
                  +20 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@acaciacamp.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@acaciacamp.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Acacia Camp. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <NavLink to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </NavLink>
            <NavLink to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
