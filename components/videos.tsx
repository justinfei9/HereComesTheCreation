import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoItem {
  id: string;
  url: string;
  title: string;
  loc: string;
}

const VIDEO_DATA: VideoItem[] = [
    { id: 'v1', url: '/content/Highlights-2.MOV', title: 'p1', loc: 'p1' },
    { id: 'v2', url: '/content/video9.MOV', title: 'p2', loc: 'p2' },
    { id: 'v3', url: '/content/highlight1NM.MOV', title: 'p3', loc: 'p3' },
    { id: 'v4', url: '/content/highlight2NM.MOV', title: 'p4', loc: 'p4' },
    { id: 'v5', url: '/content/video1.MOV', title: 'p5', loc: 'p5' },
    { id: 'v6', url: '/content/short1.MOV', title: 'p6', loc: 'p6' },
    { id: 'v7', url: '/content/highlight7.MOV', title: 'p7', loc: 'p7' },
    { id: 'v8', url: '/content/Highlights-3.MOV', title: 'p8', loc: 'p8' },
    { id: 'v9', url: '/content/hightlight6.MOV', title: 'p9', loc: 'p9' },
    { id: 'v10', url: '/content/short1NM.MOV', title: 'p10', loc: 'p10' },
    { id: 'v11', url: '/content/noMusic1.MOV', title: 'p11', loc: 'p11' },
    { id: 'v12', url: '/content/video3.MOV', title: 'p12', loc: 'p12' },
    { id: 'v13', url: '/content/video4.MOV', title: 'p13', loc: 'p13' },
    { id: 'v14', url: '/content/video5.MOV', title: 'p14', loc: 'p14' },
    { id: 'v15', url: '/content/video6.MOV', title: 'p15', loc: 'p15' },
    { id: 'v16', url: '/content/video7.MOV', title: 'p16', loc: 'p16' },
    { id: 'v17', url: '/content/video8.MOV', title: 'p17', loc: 'p17' },
    { id: 'v18', url: '/content/hightlightNM3.MOV', title: 'p18', loc: 'p18' },
    { id: 'v19', url: '/content/video2.MOV', title: 'p19', loc: 'p19' },
    { id: 'v20', url: '/content/sisterVideo.MOV', title: 'p20', loc: 'p20' },
];

const VideoPlayer = ({ url, isActive }: { url: string; isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // When the URL or active state changes, handle playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive, url]);

  return (
    <video 
      ref={videoRef} 
      loop 
      muted 
      playsInline 
      key={url} // Force re-render when URL changes to update source
      className="w-full h-full object-cover"
    >
      <source src={url} type="video/mp4" />
    </video>
  );
};

export const VideoReels: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Get the base URL for GitHub Pages
  const base = import.meta.env.BASE_URL;

  const getWrappedIndex = (index: number) => (index + VIDEO_DATA.length) % VIDEO_DATA.length;
  
  const paginate = (newDir: number) => {
    setDirection(newDir);
    setCurrentIndex(prev => getWrappedIndex(prev + newDir));
  };

  const visibleIndices = [getWrappedIndex(currentIndex - 1), currentIndex, getWrappedIndex(currentIndex + 1)];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-32 md:mb-16">
      <div className="text-center mb-16">
        <span className="text-wedding-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Film Works</span>
        <h2 className="font-serif text-5xl text-wedding-slate italic">The Reels</h2>
      </div>

      <div className="relative h-[550px] md:h-[650px] flex flex-col items-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            {visibleIndices.map((dataIndex, i) => {
              const item = VIDEO_DATA[dataIndex];
              const position = i - 1;

              // Helper to clean path and add base
              const cleanPath = item.url.startsWith('/') ? item.url.slice(1) : item.url;
              const fullUrl = `${base}${cleanPath}`;

              return (
                <motion.div
                  key={`${item.id}-${dataIndex}`}
                  custom={direction}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 100) paginate(-1);
                    else if (info.offset.x < -100) paginate(1);
                  }}
                  initial={{ opacity: 0, x: direction > 0 ? 300 : -300, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    x: position * (window.innerWidth < 768 ? 280 : 380), 
                    scale: position === 0 ? 1 : 0.8,
                    zIndex: position === 0 ? 20 : 10 
                  }}
                  exit={{ opacity: 0, x: direction > 0 ? -300 : 300, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className="absolute w-[240px] md:w-[300px] shadow-2xl overflow-hidden rounded-sm bg-gray-100 touch-pan-y"
                >
                  <div className="aspect-[9/16]">
                    <VideoPlayer url={fullUrl} isActive={position === 0} />
                  </div>
                  {position === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-center px-4">
                      <h3 className="font-serif text-xl md:text-2xl italic text-wedding-slate">{item.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-wedding-gold mt-1">{item.loc}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        <div className="flex justify-between items-center w-full max-w-2xl mt-16 px-4">
            <button onClick={() => paginate(-1)} className="text-[10px] uppercase tracking-[0.3em] text-wedding-slate hover:text-wedding-gold hidden sm:block">← PREV</button>
            <div className="flex flex-col items-center flex-1">
                <div className="h-[1px] w-16 md:w-24 bg-wedding-slate/20 mb-3"></div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-black text-wedding-slate/30">SWIPE TO BROWSE</span>
            </div>
            <button onClick={() => paginate(1)} className="text-[10px] uppercase tracking-[0.3em] text-wedding-slate hover:text-wedding-gold hidden sm:block">NEXT →</button>
        </div>
      </div>
    </section>
  );
};