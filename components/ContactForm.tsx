import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [extraEvents, setExtraEvents] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setResult("Configuration Error: Access Key Missing");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("Interested_in_Additional_Events", extraEvents ? "Yes" : "No");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your inquiry has been sent.");
        event.target.reset();
        setExtraEvents(false);
      } else {
        setResult(data.message || "Error submitting form");
      }
    } catch (error) {
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Anti-Spam Honeypot (Hidden from humans) */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Row 1: Names */}
          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Your Full Name</label>
            <input 
              type="text" name="name" placeholder="First Last" required
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm"
            />
          </div>

          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Partner's Full Name</label>
            <input 
              type="text" name="fiance_name" placeholder="First Last" required
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm"
            />
          </div>

          {/* Row 2: Contact Info */}
          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Email Address</label>
            <input 
              type="email" name="email" placeholder="email@example.com" required
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm"
            />
          </div>

          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Phone Number</label>
            <input 
              type="tel" name="phone" placeholder="(000) 000-0000" required
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm"
            />
          </div>

          {/* Row 3: Logistics */}
          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Wedding Date</label>
            <input 
              type="date" name="wedding_date" required
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm cursor-pointer"
            />
          </div>

          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Venue & Location</label>
            <input 
              type="text" name="venue" placeholder="Venue Name, City" required
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm"
            />
          </div>

          {/* Row 4: Source & Updated Packages */}
          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">How did you hear about us?</label>
            <input 
              type="text" name="referral_source" placeholder="e.g. Instagram, Friend, etc." required
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm"
            />
          </div>

          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Interested Package</label>
            <select 
              name="package" required
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm appearance-none"
            >
              <option value="">Select a package</option>
              <option value="Cupid Arrow">Cupid Arrow ($1,000)</option>
              <option value="I Do">I Do ($1,200)</option>
              <option value="Honeymoon">Honeymoon ($1,400)</option>
            </select>
          </div>
        </div>

        {/* Additional Events Toggle */}
        <div className="flex flex-col space-y-3 pt-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate text-left">Additional Coverage</label>
          <button
            type="button"
            onClick={() => setExtraEvents(!extraEvents)}
            className={`w-full p-4 text-left transition-all border ${extraEvents ? 'border-wedding-gold bg-wedding-gold/5' : 'border-gray-200 bg-white'}`}
          >
            <div className="flex items-center justify-between">
              <div className="pr-4">
                <p className="text-sm font-serif italic text-wedding-slate leading-tight">Interested in coverage for additional events?</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1 leading-tight">(Engagement Party, Bridal Shower, etc. • $150/hr • 3hr min)</p>
              </div>
              <div className={`flex-shrink-0 w-5 h-5 rounded-full border border-wedding-gold flex items-center justify-center`}>
                {extraEvents && <div className="w-2.5 h-2.5 bg-wedding-gold rounded-full" />}
              </div>
            </div>
          </button>
        </div>

        {/* Vision Area */}
        <div className="flex flex-col space-y-2 text-left">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">The Vision</label>
          <textarea 
            name="message" rows={4} placeholder="Tell us more about your dream day..." required
            className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate resize-none rounded-none text-sm"
          />
        </div>

        <div className="pt-8 flex justify-center">
          <button 
            type="submit" 
            className="px-16 py-5 bg-wedding-slate text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-wedding-gold transition-all duration-500 shadow-sm"
          >
            Submit Inquiry
          </button>
        </div>

        {result && (
          <p className="text-wedding-gold font-serif italic text-center mt-6 text-lg animate-pulse">
            {result}
          </p>
        )}
      </form>
    </div>
  );
}