import React from 'react';
import { Link } from 'react-router-dom';

const Packages: React.FC = () => {
  const collections = [
    {
      id: "cupid",
      name: "Cupid Arrow",
      price: "1,000",
      hours: "6",
      tagline: "The Essential Coverage",
      isFeatured: false,
      nextDay: ["1 Social Media Trend", "200+ Raw Footage Items", "150+ Candids & Photos"],
      twoDay: ["2 Highlight Reels", "4 Short Form Videos", "10 Edited Photos"]
    },
    {
      id: "ido",
      name: "I Do",
      price: "1,200",
      hours: "8",
      tagline: "The Signature Experience",
      isFeatured: true,
      nextDay: ["2 Social Media Trends", "250+ Raw Footage Items", "200+ Candids & Photos"],
      twoDay: ["3 Highlight Reels", "6 Short Form Videos", "15 Edited Photos"]
    },
    {
      id: "honeymoon",
      name: "Honeymoon",
      price: "1,400",
      hours: "10",
      tagline: "The Ultimate Story",
      isFeatured: false,
      nextDay: ["3 Social Media Trends", "300+ Raw Footage Items", "250+ Candids & Photos"],
      twoDay: ["4 Highlight Reels", "8 Short Form Videos", "20 Edited Photos"]
    }
  ];

  return (
    <div className="pt-20 pb-24 bg-wedding-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-wedding-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold mb-4 block">
            Investment
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-wedding-slate mb-6 italic px-2">
            Choose Your Collection
          </h1>
          <p className="max-w-xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed px-4">
            Fast-turnaround content creation for modern couples. 
            Receive your raw footage and trends while the celebration is still fresh.
          </p>
        </div>

        {/* Packages Grid - Optimized for Mobile Stacking */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {collections.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative flex flex-col p-8 md:p-10 shadow-xl border-t-4 transition-all duration-500 ${
                pkg.isFeatured 
                  ? "bg-wedding-slate border-wedding-gold md:-translate-y-4 ring-4 ring-wedding-gold/10" 
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Badge for Featured Package */}
              {pkg.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-wedding-gold text-white text-[10px] uppercase font-bold px-6 py-2 tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              {/* Package Header */}
              <div className="mb-8 text-center border-b pb-6 border-gray-100/10">
                <h3 className={`font-serif text-3xl italic mb-1 ${pkg.isFeatured ? "text-white" : "text-wedding-slate"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-[10px] uppercase tracking-[0.2em] mb-4 ${pkg.isFeatured ? "text-gray-400" : "text-gray-400"}`}>
                  {pkg.tagline}
                </p>
                <div className={`text-5xl font-light mb-1 ${pkg.isFeatured ? "text-wedding-gold" : "text-wedding-slate"}`}>
                  ${pkg.price}
                </div>
                <div className={`text-[9px] uppercase tracking-widest font-bold ${pkg.isFeatured ? "text-gray-400" : "text-gray-500"}`}>
                  {pkg.hours} Hours of Coverage
                </div>
              </div>

              {/* Deliverables Sections */}
              <div className="flex-grow space-y-8 mb-10">
                {/* Next Day */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="h-[1px] flex-grow bg-wedding-gold/30"></div>
                    <h4 className="mx-3 text-[10px] uppercase font-bold tracking-widest text-wedding-gold whitespace-nowrap">
                      Next Day Delivery
                    </h4>
                    <div className="h-[1px] flex-grow bg-wedding-gold/30"></div>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {pkg.nextDay.map((item, i) => (
                      <li key={i} className={`flex items-start ${pkg.isFeatured ? "text-gray-300" : "text-gray-600"}`}>
                        <i className="fa-solid fa-bolt text-wedding-gold mt-1 mr-3 text-[10px]"></i>
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Within 48 Hours */}
                <div>
                   <div className="flex items-center mb-4">
                    <div className="h-[1px] flex-grow bg-gray-400/20"></div>
                    <h4 className={`mx-3 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap ${pkg.isFeatured ? "text-gray-400" : "text-gray-400"}`}>
                      Within 48 Hours
                    </h4>
                    <div className="h-[1px] flex-grow bg-gray-400/20"></div>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {pkg.twoDay.map((item, i) => (
                      <li key={i} className={`flex items-start ${pkg.isFeatured ? "text-gray-300" : "text-gray-600"}`}>
                        <i className="fa-solid fa-check text-wedding-gold mt-1 mr-3 text-[10px]"></i>
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <Link 
                to="/contact" 
                className={`w-full py-5 text-center uppercase text-xs tracking-[0.2em] font-bold transition-all duration-300 ${
                  pkg.isFeatured 
                    ? "bg-wedding-gold text-wedding-slate hover:bg-white hover:scale-[1.02]" 
                    : "border-2 border-wedding-slate text-wedding-slate hover:bg-wedding-slate hover:text-white"
                }`}
              >
                Reserve Your Date
              </Link>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-16 text-center px-6">
             <p className="text-gray-400 text-xs italic mb-4 tracking-wide">
               *Travel fees may apply for locations outside our standard service area.
             </p>
             <Link to="/contact" className="inline-block text-wedding-gold uppercase text-[10px] tracking-[0.3em] font-bold border-b-2 border-wedding-gold/30 hover:border-wedding-gold transition-all pb-1">
                Custom Multi-Day Packages
             </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;