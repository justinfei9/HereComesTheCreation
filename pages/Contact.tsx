import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-32 bg-wedding-cream min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full px-6">
        
        {/* Header Section */}
        <header className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-wedding-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block"
          >
            Inquiry
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl text-wedding-slate italic leading-tight"
          >
            Let's create.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-serif italic text-xl mt-10 max-w-xl mx-auto leading-relaxed"
          >
            Limited availability for 2026. Now booking destination and local celebrations.
          </motion.p>
        </header>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-px md:bg-wedding-gold/20">
          
          {/* Left Side: Direct Contact */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-wedding-cream py-16 md:pr-12 text-center md:text-right flex flex-col justify-center"
          >
            <h4 className="text-wedding-gold uppercase tracking-[0.4em] text-[9px] font-bold mb-6">Direct Inquiries</h4>
            <a 
              href="mailto:herecomesthecreations@gmail.com" 
              className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-wedding-slate hover:text-wedding-gold transition-colors duration-500"
            >
              herecomesthecreations@gmail.com
            </a>
            <p className="mt-4 text-gray-400 tracking-[0.3em] text-xs font-light">631.275.3791</p>
          </motion.div>

          {/* Right Side: Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-wedding-cream py-16 md:pl-12 text-center md:text-left flex flex-col justify-center"
          >
            <h4 className="text-wedding-gold uppercase tracking-[0.4em] text-[9px] font-bold mb-8">The Socials</h4>
            <div className="flex justify-center md:justify-start space-x-10 text-3xl text-wedding-slate">
              <a 
                href="https://instagram.com/herecomesthecreations" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-wedding-gold transition-all duration-500 hover:-translate-y-1"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a 
                href="https://tiktok.com/@herecomesthecreations" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-wedding-gold transition-all duration-500 hover:-translate-y-1"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium">@herecomesthecreations</p>
          </motion.div>

        </div>

        {/* Footer Detail */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-32 text-center"
        >
          <div className="h-[1px] w-12 bg-wedding-gold/30 mx-auto mb-10"></div>
          <p className="text-[9px] uppercase tracking-[0.6em] text-gray-400">
              New York <span className="mx-4 text-wedding-gold">/</span> Worldwide
          </p>
        </motion.footer>

      </div>
    </div>
  );
};

export default Contact;