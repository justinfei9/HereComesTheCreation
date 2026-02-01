import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/testimonials';
import Founder from '../components/Founder';

const Home: React.FC = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-[0.4]"
          >
            <source src={`${base}content/video1.MOV`} type="video/mp4" />
            <img src={`${base}content/image1.JPEG`} alt="Fallback" />
          </video>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="block uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 font-bold text-wedding-gold drop-shadow-md">
              Luxury Wedding Content Creation • NY & Destinations
            </span>
            <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-[1.1] tracking-tight">
              The Memories You'll <br />
              <span className="italic">Actually</span> Watch.
            </h1>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-wedding-gold text-wedding-slate font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all shadow-xl">
                Book Your Date
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-[0.2em] text-[10px] backdrop-blur-sm hover:bg-white hover:text-wedding-slate transition-all shadow-xl">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Founder (Replaces Philosophy) */}
      <Founder />

      {/* The Social Grid */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl italic text-wedding-slate mb-4">The Highlight Edit</h3>
            <p className="text-gray-400 uppercase tracking-widest text-[10px]">What you'll be sharing within 48 hours</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 'highlight1NM.MOV', 'short1.MOV', 'video3.MOV' ].map((vid, index) => (
              <div key={index} className="aspect-[9/16] bg-gray-100 overflow-hidden shadow-2xl">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={`${base}content/${vid}`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/portfolio" className="text-wedding-gold uppercase text-xs tracking-[0.3em] font-bold border-b-2 border-wedding-gold pb-2 hover:text-wedding-slate transition-all">
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Full-Width Feature Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src={`${base}content/image2.JPEG`} 
          alt="Wedding BTS" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-wedding-slate/40"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="font-serif text-5xl md:text-7xl text-white italic mb-8">Unfiltered Love</h2>
          <Link to="/contact" className="inline-block px-12 py-5 bg-white text-wedding-slate font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-wedding-gold hover:text-white transition-all">
            Inquire For 2026 & 2027
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;