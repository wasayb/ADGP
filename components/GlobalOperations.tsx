
import React, { useState } from 'react';

export const GlobalOperations: React.FC<{ progress: number }> = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const locations = [
    { 
      name: "Pakistan", 
      sub: "Operational HQ", 
      top: "55%", 
      left: "68%",
      labelPos: "right" 
    },
    { 
      name: "Dubai", 
      sub: "Global Logistics Hub", 
      top: "65%", 
      left: "58%",
      labelPos: "left"
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-8 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-[#D4AF37] font-black">Strategic Footprint</h2>
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter text-white uppercase">
            CORE <br /><span className="text-[#D4AF37]">HUBS.</span>
          </h3>
          <p className="text-gray-400 mb-10 max-w-md leading-relaxed text-base md:text-lg font-medium opacity-80">
            Our infrastructure power operations are anchored in the most strategic logistics corridors. Karachi and Dubai serve as our primary high-capacity deployment centers for global trade.
          </p>
          <ul className="space-y-6 md:space-y-8">
            {locations.map((loc, i) => (
              <li 
                key={i} 
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setHoveredIdx(hoveredIdx === i ? null : i)}
                className={`flex items-center gap-4 md:gap-6 text-xl md:text-2xl font-black transition-all duration-500 cursor-pointer group ${
                  hoveredIdx !== null && hoveredIdx !== i ? 'opacity-20' : 'opacity-100'
                } ${hoveredIdx === i ? 'text-white translate-x-2 md:translate-x-4' : 'text-gray-500'}`}
              >
                <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 shrink-0">
                   <span className={`absolute inset-0 border border-[#D4AF37]/20 rounded-full transition-all duration-500 ${hoveredIdx === i ? 'scale-110 opacity-100' : 'scale-75 opacity-0'}`} />
                   <span className={`h-[2px] transition-all duration-500 ${hoveredIdx === i ? 'w-full bg-[#D4AF37]' : 'w-6 bg-gray-700'}`} />
                </div>
                <div className="flex flex-col">
                  <span className="tracking-tight uppercase">{loc.name}</span>
                  <span className={`text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold transition-all duration-500 ${hoveredIdx === i ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    {loc.sub}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Technical Schematic Map */}
        <div className="relative aspect-square sm:aspect-[4/3] md:aspect-[16/10] bg-[#080808] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden group rounded-sm">
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: 'clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px)' }} 
          />
          
          {/* Faint Geographic Vectors */}
          <div className="absolute inset-0 opacity-[0.05] grayscale pointer-events-none p-6 md:p-12">
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-white">
              <path d="M150,150 L200,100 L300,120 L400,80 L500,100 L600,70 L700,90 L850,150 L900,250 L800,350 L600,400 L400,420 L200,380 Z" opacity="0.3" />
            </svg>
          </div>

          {/* Map Content */}
          <div className="absolute inset-0">
            {locations.map((loc, idx) => {
              const isHovered = hoveredIdx === idx;
              const isDimmed = hoveredIdx !== null && !isHovered;

              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`absolute transition-all duration-700 cursor-pointer ${isHovered ? 'z-30 scale-110 md:scale-125' : 'z-10'} ${isDimmed ? 'opacity-10 grayscale blur-[1px]' : 'opacity-100'}`}
                  style={{ top: loc.top, left: loc.left }}
                >
                  {/* Dynamic Marker Node */}
                  <div className="relative flex items-center justify-center p-4 -m-4"> {/* Increased hit area */}
                    <div className={`absolute w-10 h-10 md:w-14 md:h-14 bg-[#D4AF37]/10 rounded-full transition-all duration-700 ${isHovered ? 'scale-150 opacity-100 animate-pulse' : 'scale-0 opacity-0'}`} />
                    <div className={`absolute w-8 h-8 md:w-10 md:h-10 border border-[#D4AF37]/40 rounded-full transition-all duration-700 ${isHovered ? 'scale-110 opacity-100' : 'scale-50 opacity-0'}`} />
                    <div className={`relative w-3.5 h-3.5 md:w-4 md:h-4 bg-[#D4AF37] border-2 border-white rounded-full transition-all duration-300 ${isHovered ? 'shadow-[0_0_20px_rgba(212,175,55,1)] scale-110' : 'shadow-none'}`} />
                  </div>
                  
                  {/* Directional Label Architecture */}
                  <div className={`absolute top-0 transition-all duration-500 transform ${
                    loc.labelPos === 'right' ? 'left-6 md:left-8 translate-x-0' : 'right-6 md:right-8 translate-x-0'
                  } ${isHovered ? (loc.labelPos === 'right' ? 'translate-x-1 md:translate-x-2' : '-translate-x-1 md:-translate-x-2') : ''}`}>
                    
                    <div className={`backdrop-blur-xl border px-3 py-2 md:px-5 md:py-3 transition-all duration-500 whitespace-nowrap ${
                      isHovered 
                      ? 'bg-black/95 border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.2)]' 
                      : 'bg-black/40 border-white/10'
                    }`}>
                      <span className={`text-[10px] md:text-[12px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] block leading-tight transition-colors duration-500 ${isHovered ? 'text-white' : 'text-gray-400'}`}>
                        {loc.name}
                      </span>
                      <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold block mt-0.5 md:mt-1 transition-colors duration-500 ${isHovered ? 'text-[#D4AF37]' : 'text-gray-600'}`}>
                        {loc.sub}
                      </span>
                    </div>

                    {/* Industrial Connection Line */}
                    <div className={`absolute top-1/2 -z-10 h-[1px] transition-all duration-500 ${
                      loc.labelPos === 'right' ? '-left-6 md:-left-8 w-6 md:w-8' : '-right-6 md:-right-8 w-6 md:w-8'
                    } ${isHovered ? 'bg-[#D4AF37] scale-x-110' : 'bg-white/10 scale-x-100'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interface Elements */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col items-end gap-0.5 pointer-events-none">
            <span className="text-[7px] md:text-[9px] font-mono text-gray-600 uppercase tracking-widest">System Status</span>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[8px] md:text-[10px] font-black text-[#D4AF37] tracking-[0.2em]">OPERATIONAL</span>
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#D4AF37] rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,1)]" />
            </div>
          </div>

          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-end gap-6 md:gap-10 pointer-events-none w-[calc(100%-2rem)]">
             <div className="flex flex-col gap-1 shrink-0">
                <span className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-600 font-bold">Node Selection Matrix</span>
                <div className="h-[2px] w-20 md:w-32 bg-gray-900 overflow-hidden relative">
                   <div 
                    className="absolute top-0 left-0 h-full bg-[#D4AF37] transition-all duration-1000 ease-out"
                    style={{ width: hoveredIdx !== null ? '100%' : '20%' }}
                   />
                </div>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#D4AF37] font-black h-3 md:h-4 truncate">
                  {hoveredIdx !== null ? locations[hoveredIdx].name : ''}
                </span>
             </div>
             <div className="text-[24px] md:text-[32px] font-black text-white/5 leading-none select-none tracking-tighter italic ml-auto">
               GEO-ADGP
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
