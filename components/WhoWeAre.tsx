
import React from 'react';

export const WhoWeAre: React.FC<{ progress: number }> = () => {
  return (
    <section className="py-32 md:py-56 px-6 md:px-24 bg-black/20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-20 md:gap-32 max-w-[1800px] mx-auto items-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-6 mb-10 md:mb-16">
            <span className="h-[3px] w-16 md:w-24 bg-[#D4AF37]"></span>
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.6em] md:tracking-[1em] text-[#D4AF37] font-black">LEGACY ARCHITECTURE</h2>
          </div>
          
          <h3 className="text-[8vw] md:text-[10vw] font-black tracking-[-0.06em] mb-12 md:mb-20 uppercase leading-[0.8] text-white">
            FOUNDED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white/40">IN 1995.</span>
          </h3>
          
          <div className="space-y-8 md:space-y-12 text-gray-300 leading-relaxed text-lg md:text-2xl max-w-2xl">
            <p className="opacity-95 font-medium">
              ADGP is an elite technology and engineering platform. We operate at the high-stakes intersection of Electrical Contracting, Renewable Energy, and Heavy Industrial Infrastructure.
            </p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 border-l-4 md:border-l-[12px] border-l-[#D4AF37] italic text-gray-400 font-light rounded-sm shadow-2xl">
              As an authorized partner for <span className="text-white font-black">Perkins</span> and <span className="text-white font-black">Lovol</span>, we deliver a standard of reliability that exceeds international compliance.
            </div>
            <div className="flex flex-wrap gap-12 md:gap-24 mt-8">
              <div className="group cursor-default">
                <div className="text-3xl md:text-5xl font-black text-white group-hover:text-[#D4AF37] transition-colors duration-500">Karachi</div>
                <div className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-[#D4AF37] font-black mt-2">Operational Headquarters</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-5xl font-black text-white group-hover:text-[#D4AF37] transition-colors duration-500">Dubai</div>
                <div className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-[#D4AF37] font-black mt-2">Global Logistics Hub</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block relative group">
          <div className="absolute inset-0 border-4 border-[#D4AF37]/20 -m-10 -z-10 group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="relative aspect-[3/4] bg-[#0a0a0a] overflow-hidden border-2 border-white/10 shadow-[0_80px_150px_rgba(0,0,0,0.8)] rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200" 
              alt="Industrial Precision" 
              className="object-cover w-full h-full opacity-60 grayscale transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-16 left-16 bg-black/40 backdrop-blur-md p-8 border border-white/10 rounded-sm">
              <div className="text-[8vw] font-black text-white/10 leading-none select-none tracking-tighter">ADGP</div>
              <div className="text-[10px] md:text-sm uppercase tracking-[0.6em] text-[#D4AF37] font-black mt-4 border-l-2 border-[#D4AF37] pl-6">ISO CERTIFIED QUALITY OPS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
