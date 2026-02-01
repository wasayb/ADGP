
import React from 'react';

export const WhatWeSupply: React.FC<{ progress: number }> = () => {
  const partners = [
    { name: "Perkins", tag: "Authorized Distributor" },
    { name: "Lovol", tag: "Authorized Distributor" },
    { name: "Stamford", tag: "Power Generation" },
    { name: "Leroy Somer", tag: "Industrial Alternators" },
    { name: "Deep Sea (DSE)", tag: "Control Systems" }
  ];

  return (
    <section className="py-32 px-6 md:px-24 bg-black/30">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.5em] text-[#D4AF37] font-black mb-4">Strategic Inventory</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-white">TIER-1 PARTNERSHIPS.</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {partners.map((p, idx) => (
            <div 
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col items-center justify-center hover:border-[#D4AF37]/40 transition-all duration-500 group shadow-2xl rounded-sm"
            >
              <div className="text-xl font-black text-gray-400 group-hover:text-white transition-all mb-2 tracking-tighter italic">
                {p.name}
              </div>
              <div className="text-[9px] uppercase tracking-widest text-gray-600 group-hover:text-[#D4AF37] transition-all text-center font-bold">
                {p.tag}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-12">
          <div className="p-8 border border-white/10 backdrop-blur-lg hover:border-[#D4AF37] transition-all duration-500 bg-white/5 group rounded-sm shadow-xl">
            <h4 className="text-lg font-black mb-4 text-[#D4AF37] tracking-tight group-hover:translate-x-1 transition-transform">Brand New Systems</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">Direct imports of latest Perkins/Lovol units. 50kVA - 3000kVA capacity ranges for high-demand infrastructure.</p>
          </div>
          <div className="p-8 border border-white/10 backdrop-blur-lg hover:border-[#D4AF37] transition-all duration-500 bg-white/5 group rounded-sm shadow-xl">
            <h4 className="text-lg font-black mb-4 text-[#D4AF37] tracking-tight group-hover:translate-x-1 transition-transform">Certified Spare Parts</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">Fully equipped store department stocking critical components to arrange delivery in shortest possible timeframes.</p>
          </div>
          <div className="p-8 border border-white/10 backdrop-blur-lg hover:border-[#D4AF37] transition-all duration-500 bg-white/5 group rounded-sm shadow-xl">
            <h4 className="text-lg font-black mb-4 text-[#D4AF37] tracking-tight group-hover:translate-x-1 transition-transform">Custom Assemblies</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">Bespoke diesel and gas solutions paired with Stamford or Leroy Somer alternators and DSE intelligent controllers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
