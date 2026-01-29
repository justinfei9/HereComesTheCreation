import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wedding-slate text-wedding-cream pt-16 pb-8 border-t border-wedding-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-12 w-auto mb-4" />
            <p className="font-serif italic text-lg text-wedding-gold/70">
              Inclusive to all love.
            </p>
            <p className="text-[9px] tracking-[0.3em] uppercase mt-2 text-gray-500">
              Est. 2025
            </p>
          </div>

          {/* Column 2: Simplified Navigation */}
          <div className="flex flex-col items-center">
            <h4 className="uppercase tracking-[0.4em] text-[9px] font-bold mb-6 text-wedding-gold/50">Navigate</h4>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] tracking-[0.2em] uppercase font-light">
              <li><Link to="/" className="hover:text-wedding-gold transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-wedding-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/packages" className="hover:text-wedding-gold transition-colors">Investment</Link></li>
              <li><Link to="/faq" className="hover:text-wedding-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-wedding-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Icons */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="uppercase tracking-[0.4em] text-[9px] font-bold mb-6 text-wedding-gold/50">Connect</h4>
            <div className="flex space-x-6 text-xl">
              <a 
                href="https://instagram.com/herecomesthecreations" 
                target="_blank" 
                rel="noreferrer" 
                className="text-wedding-cream hover:text-wedding-gold transition-all hover:-translate-y-1"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a 
                href="https://tiktok.com/@herecomesthecreations" 
                target="_blank" 
                rel="noreferrer" 
                className="text-wedding-cream hover:text-wedding-gold transition-all hover:-translate-y-1"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <p className="mt-4 text-[9px] tracking-[0.2em] text-gray-600 uppercase">
              @herecomesthecreations
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-gray-500">
          /*get date*/ 
          <p>© {new Date().getFullYear()} Here Comes The Creations</p>
          <div className="mt-4 md:mt-0 space-x-8">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className="hover:text-wedding-gold transition-colors border-l border-gray-800 pl-8 hidden md:inline"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;