import React from 'react';
import { motion } from 'framer-motion';

const Founder: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="py-24 px-6 bg-wedding-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT SIDE: VERTICAL TEXT & IMAGE CONTAINER */}
        <div className="relative order-2 lg:order-1 flex items-stretch gap-6 md:gap-10">
          
          {/* VERTICAL TEXT: "THE FOUNDER" */}
          <div className="flex flex-col justify-center">
            <p 
              className="font-serif italic text-black/80 text-3xl md:text-5xl uppercase tracking-[0.5em] select-none whitespace-nowrap"
              style={{ 
                writingMode: 'vertical-rl', 
                transform: 'rotate(180deg)',
              }}
            >
              The Founder
            </p>
          </div>

          {/* IMAGE CONTAINER */}
          <div className="relative flex-1">
            {/* Decorative Offset Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-wedding-gold/30 -z-10 translate-x-2 translate-y-2"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img 
                src={`${base}content/founderPic.JPG`}
                alt="Eliana - Founder" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: THE CONTENT */}
        <div className="space-y-8 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-wedding-gold uppercase tracking-[0.4em] text-[10px] font-black block mb-4">
              The Face Behind the Lens
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-wedding-slate leading-tight italic mb-6">
              Meet Eliana
            </h2>
            
            <p className="text-wedding-slate/70 leading-relaxed text-lg font-light mb-6">
              "I created <span className="text-wedding-gold font-medium">Here Comes The Creation</span> because I believe the most beautiful parts of a wedding aren't just the posed and planned moments. They’re the in between laughs, the heartfelt reactions, and the raw moments."
            </p>

            <p className="text-wedding-slate/70 leading-relaxed text-base font-light italic border-l-2 border-wedding-gold/30 pl-6">
              My goal is to be your extra wedding guest with a professional eye, ensuring you can relive your favorite day the next morning.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-10">
              <div>
                <h4 className="font-serif text-2xl text-wedding-gold italic mb-2">24h Delivery</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Instant Gratification</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-wedding-gold italic mb-2">Artistic Eye</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Editorial Perspective</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;