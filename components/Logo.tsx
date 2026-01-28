import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-20" }) => {
  const base = import.meta.env.BASE_URL;
  
  const logoSrc = `${base}content/logo.png`;

  return (
    <div className={`flex items-center justify-center bg-white ${className}`}>
      <img 
        src={logoSrc} 
        alt="Here Comes The Creations" 
        className="h-full w-auto object-contain"
        style={{ mixBlendMode: 'multiply' }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          // Fallback if the logo fails to load
          target.src = "https://placehold.co/800x600/ffffff/D4AF37?text=HERE+COMES+THE+CREATIONS";
        }}
      />
    </div>
  );
};

export default Logo;