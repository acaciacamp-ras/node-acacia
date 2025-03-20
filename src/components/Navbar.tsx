
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-stone-dark/90 backdrop-blur-md shadow-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="page-container">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-semibold">
            <span className="text-primary">Acacia</span> Camp
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/rooms" 
              className={({ isActive }) => 
                `font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
              }
            >
              Rooms
            </NavLink>
            <div className="relative group">
              <button className="flex items-center font-medium transition-colors hover:text-primary">
                Experiences <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="glass-card rounded-md p-2 flex flex-col space-y-1">
                  <NavLink to="/experiences/dining" className="px-3 py-2 rounded-md hover:bg-muted transition-colors">
                    Dining
                  </NavLink>
                  <NavLink to="/experiences/activities" className="px-3 py-2 rounded-md hover:bg-muted transition-colors">
                    Activities
                  </NavLink>
                  <NavLink to="/experiences/spa" className="px-3 py-2 rounded-md hover:bg-muted transition-colors">
                    Spa & Wellness
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <NavLink to="/login">
              <Button variant="outline" className="hover:bg-primary/10">
                Login
              </Button>
            </NavLink>
            <NavLink to="/dashboard">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <User className="mr-1 h-4 w-4" /> My Account
              </Button>
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-background pt-20 z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="page-container flex flex-col space-y-6 p-5">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-xl font-medium p-2 rounded-md ${isActive ? 'bg-muted text-primary' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/rooms" 
            className={({ isActive }) => 
              `text-xl font-medium p-2 rounded-md ${isActive ? 'bg-muted text-primary' : ''}`
            }
          >
            Rooms
          </NavLink>
          <div className="border-b border-border my-2"></div>
          <div className="text-xl font-medium p-2">Experiences</div>
          <NavLink 
            to="/experiences/dining" 
            className={({ isActive }) => 
              `text-lg font-medium p-2 pl-6 rounded-md ${isActive ? 'bg-muted text-primary' : ''}`
            }
          >
            Dining
          </NavLink>
          <NavLink 
            to="/experiences/activities" 
            className={({ isActive }) => 
              `text-lg font-medium p-2 pl-6 rounded-md ${isActive ? 'bg-muted text-primary' : ''}`
            }
          >
            Activities
          </NavLink>
          <NavLink 
            to="/experiences/spa" 
            className={({ isActive }) => 
              `text-lg font-medium p-2 pl-6 rounded-md ${isActive ? 'bg-muted text-primary' : ''}`
            }
          >
            Spa & Wellness
          </NavLink>
          <div className="border-b border-border my-2"></div>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-xl font-medium p-2 rounded-md ${isActive ? 'bg-muted text-primary' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-xl font-medium p-2 rounded-md ${isActive ? 'bg-muted text-primary' : ''}`
            }
          >
            Contact
          </NavLink>
          <div className="border-b border-border my-2"></div>
          <div className="flex flex-col space-y-3 pt-4">
            <NavLink to="/login">
              <Button variant="outline" className="w-full justify-center">
                Login
              </Button>
            </NavLink>
            <NavLink to="/dashboard">
              <Button className="w-full justify-center bg-primary">
                <User className="mr-2 h-4 w-4" /> My Account
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
