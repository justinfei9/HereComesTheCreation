import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What exactly is a Wedding Content Creator?",
      answer: "A wedding content creator captures footage from the guest perspective. We focus on behind-the-scenes footage, candid interactions, and trending moments using professional mobile devices, delivering raw content within 24 hours."
    },
    {
      question: "Do you replace a videographer or photographer?",
      answer: "No, we are a complementary service! Photographers and videographers create high-end portraits and cinematic films. We capture the uncurated, live-feel moments."
    },
    {
      question: "How long until I get my content?",
      answer: "All raw video and photo clips are sent to you via a shared folder within 24 hours of the wedding. Highlights, edited pics, and short-form content are delivered within 48 hours."
    },
    {
      question: "Do you travel for weddings?",
      answer: "Absolutely! We are based in New York but love traveling to destinations beyond to capture beautiful stories wherever they happen."
    },
    {
      question: "What equipment do you use?",
      answer: "We use the latest iPhones equipped with professional stabilization (gimbals) and external microphones for high-quality audio."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pt-24 pb-32 bg-wedding-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-wedding-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Common Questions</span>
          <h1 className="font-serif text-5xl md:text-6xl text-wedding-slate italic">Need to Know</h1>
        </div>

        {/* Accordion List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const number = (index + 1).toString().padStart(2, '0'); 

            return (
              <div key={index} className="border-b border-wedding-gold/30">
                <button
                  className="w-full py-8 flex items-start text-left focus:outline-none group"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={`mr-4 md:mr-6 font-serif text-2xl italic transition-colors duration-300 ${
                    isOpen ? 'text-wedding-gold' : 'text-wedding-slate/30 group-hover:text-wedding-gold/60'
                  }`}>
                    {number}
                  </span>

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className={`text-xl md:text-2xl font-serif tracking-wide transition-colors duration-300 ${
                        isOpen ? 'text-wedding-gold' : 'text-wedding-slate group-hover:text-wedding-gold'
                      }`}>
                        {faq.question}
                      </h3>
                      
                      <motion.div 
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 0V14" stroke={isOpen ? "#D4AF37" : "#1F2937"} strokeWidth="1"/>
                          <path d="M0 7H14" stroke={isOpen ? "#D4AF37" : "#1F2937"} strokeWidth="1"/>
                        </svg>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-6 pb-2 text-sm md:text-base text-gray-500 leading-loose font-serif italic max-w-xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Footer */}
        <div className="mt-32 text-center">
          <p className="mb-8 font-serif text-2xl italic text-wedding-slate">Still have something on your mind?</p>
          <Link 
            to="/contact" 
            className="inline-block px-12 py-4 border border-wedding-slate text-wedding-slate text-[10px] uppercase tracking-[0.3em] hover:bg-wedding-slate hover:text-white transition-all duration-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;