import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when switching pages
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Investment', path: '/packages' },
    { name: 'FAQ', path: '/faq' },
  ];

  // Determine if we should use dark text (when scrolled or not on Home)
  const isDarkText = isScrolled || location.pathname !== '/';

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-wedding-cream/80 backdrop-blur-lg py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="z-[110]">
          <Logo className={`transition-all duration-500 ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-14'}`} />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-[10px] uppercase tracking-[0.3em] transition-all duration-500 hover:tracking-[0.4em] group ${
                location.pathname === item.path 
                  ? 'text-wedding-gold' 
                  : (isDarkText ? 'text-wedding-slate' : 'text-white')
              }`}
            >
              {item.name}
              {/* Subtle underline for active item */}
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-wedding-gold/50" 
                />
              )}
            </Link>
          ))}
          
          <Link 
            to="/contact" 
            className={`px-8 py-2.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border ${
              isDarkText
              ? 'border-wedding-slate bg-wedding-slate text-white hover:bg-transparent hover:text-wedding-slate'
              : 'border-white bg-white text-wedding-slate hover:bg-transparent hover:text-white'
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className={`md:hidden z-[110] p-2 focus:outline-none transition-colors ${
            isMenuOpen ? 'text-wedding-slate' : (isDarkText ? 'text-wedding-slate' : 'text-white')
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-[1px] bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* MOBILE OVERLAY (Framer Motion) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-wedding-cream z-[100] md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-10 text-center">
              {navItems.concat({ name: 'Contact', path: '/contact' }).map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    to={item.path}
                    className={`text-lg uppercase tracking-[0.4em] font-serif italic ${
                      location.pathname === item.path ? 'text-wedding-gold' : 'text-wedding-slate'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Branding */}
            <div className="absolute bottom-12 text-center">
              <p className="text-[8px] uppercase tracking-[0.5em] text-wedding-gold/60 font-bold mb-2">Based in New York</p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-wedding-slate/40">Est. 2025</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;