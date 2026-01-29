import React from 'react';
// Make sure the file paths match where you saved the previous files
import { VideoReels } from '../components/videos'; 
import { PhotoStills } from '../components/photos';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-20 pb-24 bg-wedding-cream min-h-screen overflow-x-hidden">
      
      {/* Section 1: The Swiping Video Reels 
      */}
      <VideoReels />

      {/* Section 2: The Stitched Staggered Stills 
      */}
      <PhotoStills />

      {/* Subtle Editorial Footer */}
      <footer className="mt-40 md:mt-16 text-center px-6">
          <p className="mt-8 text-[9px] uppercase tracking-[0.6em] text-wedding-gold font-bold">
            Based in New York — Available Worldwide
          </p>
      </footer>
    </div>
  );
};

export default Portfolio;