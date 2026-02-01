import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center bg-gradient-to-b from-[#050505] via-[#050505]/95 to-transparent backdrop-blur-[20px] border-b border-white/5">
      {/* Branding Section */}
      <div 
        className="flex items-center gap-4 group cursor-pointer select-none" 
        onClick={() => window.location.hash = '#home'}
      >
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-[-0.05em] text-white leading-none group-hover:text-[#D4AF37] transition-colors duration-500">ADGP</span>
          <span className="text-[8px] uppercase tracking-[0.15em] text-[#D4AF37] font-black mt-1.5 opacity-90 whitespace-nowrap group-hover:tracking-[0.25em] transition-all duration-700">
            AL-WASAY DIESEL GAS POWER
          </span>
        </div>
      </div>
      
      {/* Central Link Terminal */}
      <div className="hidden xl:flex items-center bg-white/[0.02] border border-white/5 px-10 py-3 rounded-full gap-2 backdrop-blur-md shadow-2xl relative overflow-hidden">
        {/* Subtle scanline background effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,transparent_0%,#D4AF37_50%,transparent_100%)] w-20 h-full -translate-x-full animate-[shimmer_8s_infinite]" />
        
        <NavItem label="Network" href="#company" index="01" />
        <div className="w-[1px] h-3 bg-white/10 mx-2" />
        <NavItem label="Assets" href="#assets" index="02" />
        <div className="w-[1px] h-3 bg-white/10 mx-2" />
        <NavItem label="Partners" href="#partners" index="03" />
        <div className="w-[1px] h-3 bg-white/10 mx-2" />
        <NavItem label="Logistics" href="#global-log" index="04" />
        <div className="w-[1px] h-3 bg-white/10 mx-2" />
        <NavItem label="Intelligence" href="#news" index="05" />
      </div>

      {/* Action Section */}
      <div className="flex items-center md:min-w-[150px] justify-end gap-6">
        <div className="text-[8px] font-mono text-white/20 tracking-widest hidden lg:block uppercase">
          Status: Optimal
        </div>
        
        <button 
          onClick={() => window.location.hash = '#inquiry'}
          className="group relative px-6 py-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/50 rounded-full text-[#D4AF37] text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] shadow-[0_0_15px_rgba(212,175,55,0.1)] active:scale-95 overflow-hidden"
        >
          <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-500">Secure Quote</span>
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none skew-x-12" />
        </button>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ label: string; href: string; index: string }> = ({ label, href, index }) => (
  <a 
    href={href} 
    className="group relative px-6 py-2 flex flex-col items-center transition-all duration-500"
  >
    {/* Background Glow */}
    <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-all duration-500 rounded-sm" />
    
    {/* Index Number */}
    <span className="text-[6px] font-mono text-gray-700 group-hover:text-[#D4AF37] transition-colors duration-300 mb-1 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 tracking-widest">
      {index}
    </span>

    {/* Label */}
    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 group-hover:text-white group-hover:tracking-[0.35em] transition-all duration-500 relative z-10">
      {label}
    </span>

    {/* Bottom Scan Line */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
    
    {/* Top Marker */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-0 bg-[#D4AF37] group-hover:h-1 transition-all duration-300 delay-100 rounded-full" />
    
    {/* Vertical Trace Line (Scroll Guide Hint) */}
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-0 bg-gradient-to-b from-[#D4AF37] to-transparent group-hover:h-6 transition-all duration-700 ease-in-out opacity-40" />
  </a>
);