
import React from 'react';

export const OurValues: React.FC<{ progress: number }> = () => {
  const values = [
    "Enterprising, Innovative Structure",
    "Operational Speed & Goal Achievement",
    "Global Market Credibility",
    "Solution-Oriented Engineering",
    "Value-Adding Consciousness",
    "Human & Environmental Respect"
  ];

  return (
    <section className="py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-20">
          <h2 className="text-[11px] uppercase tracking-[0.8em] text-[#D4AF37] font-black mb-6">INTERNAL STANDARDS</h2>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-white leading-none">CORE <br />VALUES.</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-y-16 gap-x-32">
          {values.map((v, i) => (
            <div key={i} className="flex items-center gap-10 group">
              <div className="flex flex-col items-center">
                <span className="text-xs font-mono font-black text-gray-700 mb-3">0{i+1}</span>
                <div className="w-[2px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
              </div>
              <p className="text-2xl md:text-4xl font-black text-gray-500 group-hover:text-white transition-all duration-500 leading-none tracking-tight">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
