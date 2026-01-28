import React from 'react';
import { motion } from 'framer-motion';

// --- Data Interfaces ---
interface PhotoItem {
  id: string;
  url: string;
  names: string;
  loc: string;
}


interface PhotoCardProps {
  photo: PhotoItem;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => (
  <div className="flex flex-col group">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="w-full overflow-hidden shadow-sm"
    >
      <img 
        src={photo.url} 
        alt={photo.names} 
        className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[1500ms] hover:scale-105" 
      />
    </motion.div>
    <div className="mt-8 px-2">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-wedding-gold text-xl font-light">+</span>
        <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-wedding-slate">
          {photo.names}
        </h3>
      </div>
      <p className="text-[10px] font-serif italic text-gray-500 ml-7 tracking-widest">{photo.loc}</p>
    </div>
  </div>
);

export const PhotoStills: React.FC = () => {
const PHOTO_DATA: PhotoItem[] = [
  { id: 'p1', url: '/content/image1.JPEG', names: 't1', loc: 'p1' },
  { id: 'p2', url: '/content/image2.JPEG', names: 't2', loc: 'p2' },
  { id: 'p3', url: '/content/image3.JPEG', names: 't3', loc: 'p3' },
  { id: 'p4', url: '/content/image4.JPEG', names: 't4', loc: 'p4' },
  { id: 'p5', url: '/content/image5.JPEG', names: 't5', loc: 'p5' },
  { id: 'p6', url: '/content/image7.JPEG', names: 't6', loc: 'p6' },
  { id: 'p7', url: '/content/image8.JPEG', names: 't7', loc: 'p7' },
  { id: 'p8', url: '/content/image9.JPEG', names: 't8', loc: 'p8' },
  { id: 'p9', url: '/content/image10.JPEG', names: 't9', loc: 'p9' },
  { id: 'p10', url: '/content/image11.JPEG', names: 't10', loc: 'p10' },
  { id: 'p11', url: '/content/image12.JPEG', names: 't11', loc: 'p11' },
  { id: 'p12', url: '/content/image13.JPEG', names: 't12', loc: 'p12' },
  { id: 'p13', url: '/content/image14.JPEG', names: 't13', loc: 'p13' },
  { id: 'p14', url: '/content/image15.JPEG', names: 't14', loc: 'p14' },
  { id: 'p15', url: '/content/image16.JPEG', names: 't15', loc: 'p15' },
  { id: 'p16', url: '/content/image17.JPEG', names: 't16', loc: 'p16' },
  { id: 'p17', url: '/content/image18.JPEG', names: 't17', loc: 'p17' },
  { id: 'p18', url: '/content/image19.JPEG', names: 't18', loc: 'p18' },
  { id: 'p19', url: '/content/image20.JPEG', names: 't19', loc: 'p19' },
  { id: 'p20', url: '/content/image21.JPEG', names: 't20', loc: 'p20' },
  { id: 'p21', url: '/content/image22.JPEG', names: 't21', loc: 'p21' },
  { id: 'p22', url: '/content/image23.JPEG', names: 't22', loc: 'p22' },
];

  // Split data into two columns (Even index = Left, Odd index = Right)
  const leftColumn = PHOTO_DATA.filter((_, idx) => idx % 2 === 0);
  const rightColumn = PHOTO_DATA.filter((_, idx) => idx % 2 !== 0);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-32">
      <div className="text-center mb-8">
        <div className="h-[1px] w-full bg-wedding-gold/20 mb-8"></div>
        <span className="text-wedding-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Captures</span>
        <h2 className="font-serif text-5xl text-wedding-slate italic">The Stills</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
        
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col gap-16 md:gap-24">
          {leftColumn.map((photo, index) => (
            <PhotoCard key={`left-col-${photo.id}-${index}`} photo={photo} />
          ))}
        </div>

        {/* RIGHT COLUMN (The staggered lane) */}
        <div className="flex-1 flex flex-col gap-16 md:gap-24 md:mt-[350px]">
          {rightColumn.map((photo, index) => (
            <PhotoCard key={`right-col-${photo.id}-${index}`} photo={photo} />
          ))}
        </div>

      </div>
    </section>
  );
};