
import React from 'react';

export const WhyADGP: React.FC<{ progress: number }> = () => {
  const points = [
    { title: "Rigorous Inspection", desc: "Every unit undergoes a 48-point diagnostic load-test before dispatch." },
    { title: "Trusted Supply", desc: "Decade-long relationships with global energy asset owners." },
    { title: "Export Compliance", desc: "Navigating international maritime and environmental regulations." },
    { title: "Heavy Duty Build", desc: "Units engineered for 24/7 industrial performance in extreme climates." }
  ];

  return (
    <section className="py-32 md:py-48 px-4 md:px-24 overflow-hidden bg-[#050505]">
      <div className="max-w-[1800px] mx-auto w-full">
        <div className="text-center mb-24 md:mb-40">
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="h-[2px] w-12 md:w-20 bg-[#D4AF37]"></span>
            <h2 className="text-[9px] md:text-[11px] uppercase tracking-[0.8em] text-[#D4AF37] font-black">PREMIUM STANDARDS</h2>
            <span className="h-[2px] w-12 md:w-20 bg-[#D4AF37]"></span>
          </div>
          
          <div className="relative flex flex-col items-center">
            <h3 className="text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] font-black text-white tracking-[-0.06em] uppercase leading-[0.9] mb-4 select-none opacity-100 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
              UNCOMPROMISING
            </h3>
            <h3 className="text-[9vw] sm:text-[10vw] md:text-[11vw] lg:text-[12vw] font-black tracking-[-0.06em] uppercase leading-[0.9] select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white/30 to-white/5">
              RELIABILITY.
            </h3>
          </div>
          
          <p className="text-gray-500 text-[9px] md:text-xs uppercase tracking-[0.4em] font-black mt-10 opacity-50">
            Engineered for Total Infrastructure Continuity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {points.map((p, i) => (
            <div key={i} className="group relative border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 hover:border-[#D4AF37] hover:bg-white/5 hover:backdrop-blur-md transition-all duration-700 rounded-sm shadow-xl">
              <span className="absolute -top-6 left-6 text-5xl md:text-7xl font-black text-white/[0.03] group-hover:text-[#D4AF37]/10 transition-colors duration-500 pointer-events-none italic">
                0{i+1}
              </span>
              <h4 className="text-xl md:text-2xl font-black mb-5 text-white tracking-tight uppercase group-hover:translate-x-3 transition-transform duration-500">
                {p.title}
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium opacity-60 group-hover:opacity-100 transition-opacity max-w-xs">
                {p.desc}
              </p>
              
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#D4AF37] group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
