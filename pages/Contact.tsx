import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-wedding-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Simple Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-wedding-slate italic mb-6"
          >
            Inquire
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg italic font-serif"
          >
            Now booking local and destination celebrations for 2026 & 2027.
          </motion.p>
        </div>

        {/* The Form Wrapper with Curved Edges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-wedding-gold/10"
        >
          <ContactForm />
        </motion.div>

        {/* Direct Contact Links - Centered Row */}
        <div className="mt-24 pt-12 border-t border-wedding-gold/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            
            {/* Email Section */}
            <div className="flex flex-col items-center">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-wedding-gold mb-3">Direct Email</h4>
              <a href="mailto:herecomesthecreations@gmail.com" className="text-wedding-slate hover:text-wedding-gold transition-colors font-medium">
                herecomesthecreations@gmail.com
              </a>
              <a href="tel:+1234567890" className="text-wedding-slate hover:text-wedding-gold transition-colors font-medium mt-2">
                (631) 275-3791
              </a>
            </div>

            {/* Social Icons Section */}
            <div className="flex flex-col items-center">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-wedding-gold mb-3">Follow Along</h4>
              <div className="flex gap-8 text-2xl text-wedding-slate">
                <a 
                  href="https://instagram.com/herecomesthecreations" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-wedding-gold transition-colors"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a 
                  href="https://tiktok.com/@herecomesthecreations" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-wedding-gold transition-colors"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;