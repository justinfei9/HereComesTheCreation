import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "We cannot thank Ellie enough for the incredible content she created... somehow Ellie captured it all so beautifully and effortlessly. Not forgetting we got all this back in less than 24 hours.",
    author: "Kayleigh Moylan",
  },
  {
    id: 2,
    quote: "The content beautifully captured the vibe of our wedding and gave us candid moments we’ll truly cherish. We were very impressed with the quality of what she delivered.",
    author: "Sophie",
  },
  {
    id: 3,
    quote: "Everything was seamless and professional. She truly captured the story of the day and all of the little details I wanted to remember forever.",
    author: "Lindsay Schenk",
  },
  {
    id: 4,
    quote: "Eliana was great to work with! She was super responsive and understood exactly what I wanted... She also partnered perfectly with our photo and video team. Would highly recommend!",
    author: "Megan S",
  },
  {
    id: 5,
    quote: "Eliana was referred to us by our planner and she did such an amazing job! Super sweet and communicative and received our pictures only a few days after! Highly recommend her!",
    author: "Jasmine Joseph",
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    
    if (!isPaused) {
      // The timer now resets every time 'index' or 'isPaused' changes
      timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 7000); 
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [index, isPaused]); // Added 'index' here to reset the 7s clock on every click

  const handleManualNav = (i: number) => {
    setIndex(i);
    // The useEffect will catch this change, clear the old interval, 
    // and start a fresh 7-second countdown for the new slide.
  };

  return (
    <section className="py-32 bg-wedding-cream/30 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-wedding-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-12 block">
          The Experience
        </span>

        <div 
          className="relative min-h-[450px] md:min-h-[320px] flex items-center justify-center cursor-default"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={TESTIMONIALS[index].id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="space-y-10"
            >
              <blockquote className="space-y-8">
                <p className="font-serif text-2xl md:text-4xl text-wedding-slate italic leading-[1.5] tracking-tight px-4 max-w-4xl mx-auto">
                  "{TESTIMONIALS[index].quote}"
                </p>
                <footer className="flex flex-col items-center gap-4 pt-4">
                  <div className="h-[1px] w-12 bg-wedding-gold/40"></div>
                  <cite className="text-[10px] uppercase tracking-[0.4em] text-wedding-slate font-black not-italic">
                    {TESTIMONIALS[index].author}
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManualNav(i)}
              className={`h-1 transition-all duration-700 ease-in-out ${
                i === index ? 'w-10 bg-wedding-gold' : 'w-2 bg-wedding-gold/20'
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;