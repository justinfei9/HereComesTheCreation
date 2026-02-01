import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Safety check: If the key is missing, stop and show error
    if (!accessKey) {
      setResult("Configuration Error: Access Key Missing");
      console.error("VITE_WEB3FORMS_ACCESS_KEY is not defined in the environment.");
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData // Sending as FormData is correct for Web3Forms
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your inquiry has been sent.");
        event.target.reset();
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
        
        {/* Simple Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Name */}
          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Full Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="First Last"
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm"
              required 
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="email@example.com"
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm"
              required 
            />
          </div>

          {/* Wedding Date */}
          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Wedding Date</label>
            <input 
              type="date" 
              name="wedding_date"
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm cursor-pointer"
              required 
            />
          </div>

          {/* Venue & Location */}
          <div className="flex flex-col space-y-2 text-left">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">Venue & Location</label>
            <input 
              type="text" 
              name="venue"
              placeholder="e.g. The Plaza, NYC"
              className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate rounded-none text-sm"
              required 
            />
          </div>
        </div>

        {/* Message / Vision */}
        <div className="flex flex-col space-y-2 text-left">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-slate">The Vision</label>
          <textarea 
            name="message" 
            rows={4} 
            placeholder="Tell us about your day..."
            className="w-full p-4 border border-gray-200 bg-white focus:border-wedding-gold outline-none transition-all text-wedding-slate resize-none rounded-none text-sm"
            required 
          />
        </div>

        {/* Original Centered Button Style */}
        <div className="pt-8 flex justify-center">
          <button 
            type="submit" 
            className="px-16 py-5 bg-wedding-slate text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-wedding-gold transition-all duration-500 shadow-sm"
          >
            Submit Inquiry
          </button>
        </div>

        {/* Success / Error Message */}
        {result && (
          <p className="text-wedding-gold font-serif italic text-center mt-6 text-lg animate-pulse">
            {result}
          </p>
        )}
      </form>
    </div>
  );
}