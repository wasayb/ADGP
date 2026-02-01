import React from 'react';

export const CallToAction: React.FC<{ progress: number }> = () => {
  return (
    <section id="inquiry" className="py-32 px-6">
      <div className="max-w-6xl w-full mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 p-12 md:p-24 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] rounded-sm">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.05] -mr-48 -mt-48 rotate-45 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-12 mb-16">
             <div>
                <h2 className="text-[11px] uppercase tracking-[0.8em] text-[#D4AF37] font-black mb-4">GLOBAL REACH</h2>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none">INITIALIZE <br />INQUIRY.</h3>
             </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-12">
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md opacity-90 font-medium">
                Authorized technical desk for Al-Wasay Diesel & Gas Power. Access high-stakes energy assets for global infrastructure projects.
              </p>
              
              <div className="space-y-10 border-l border-[#D4AF37]/30 pl-10">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-gray-500 tracking-[0.4em] font-black mb-3">Primary Terminal</span>
                  <a href="mailto:INFO@ADGPPOWER.COM" className="text-xl md:text-2xl font-black text-[#D4AF37] hover:text-white transition-colors duration-300 break-all drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">INFO@ADGPPOWER.COM</a>
                </div>

                <div className="flex flex-col space-y-6 pt-2">
                  <span className="text-[10px] uppercase text-gray-500 tracking-[0.4em] font-black mb-1">Direct Technical Link</span>
                  
                  <div className="group">
                    <a href="mailto:sheikhleo18@gmail.com" className="text-lg md:text-xl font-black text-white hover:text-[#D4AF37] transition-colors duration-300 break-all flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                      sheikhleo18@gmail.com
                    </a>
                  </div>

                  <div className="grid gap-4 pt-2">
                    {/* Operations Link */}
                    <a 
                      href="https://wa.me/923343459615" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-6 px-6 py-4 border border-[#D4AF37]/20 text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-500 group rounded-sm"
                    >
                      <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-green-500/10 rounded-full animate-ping scale-125" />
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-[0.3em] font-black text-[#D4AF37]">Operations / Sales Head</span>
                        <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">+92 334 3459615</span>
                      </div>
                    </a>

                    {/* CEO Link */}
                    <a 
                      href="https://wa.me/923213768945" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-6 px-6 py-4 border border-white/5 text-white hover:border-[#D4AF37] hover:bg-white/5 transition-all duration-500 group rounded-sm"
                    >
                      <div className="w-2 h-2 bg-gray-600 group-hover:bg-[#D4AF37] rounded-full transition-colors" />
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500 group-hover:text-[#D4AF37]">CEO – Direct Contact</span>
                        <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">+92 321 3768945</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-gray-500 tracking-[0.4em] font-black mb-3">Hub Operations</span>
                  <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">Dubai | Holland | Russia | Pakistan</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl p-10 border border-white/20 space-y-6 rounded-sm shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="ENTITY NAME" className="w-full bg-black/40 border border-white/10 px-5 py-4 text-xs font-bold text-white focus:border-[#D4AF37] focus:bg-black/60 outline-none transition-all placeholder:text-gray-600 rounded-sm" />
                <input type="email" placeholder="OFFICIAL EMAIL" className="w-full bg-black/40 border border-white/10 px-5 py-4 text-xs font-bold text-white focus:border-[#D4AF37] focus:bg-black/60 outline-none transition-all placeholder:text-gray-600 rounded-sm" />
              </div>
              <textarea rows={5} placeholder="PROJECT SPECIFICATIONS & LOAD REQUIREMENTS" className="w-full bg-black/40 border border-white/10 px-5 py-4 text-xs font-bold text-white focus:border-[#D4AF37] focus:bg-black/60 outline-none transition-all resize-none placeholder:text-gray-600 rounded-sm"></textarea>
              <button className="w-full py-5 bg-[#D4AF37] text-black font-black uppercase tracking-[0.4em] text-[11px] hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] rounded-full">
                SECURE QUOTATION
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 px-12 pb-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] text-gray-600 gap-6">
        <span className="font-black italic">© 1995-2024 ADGP POWER SYSTEMS</span>
        <div className="flex items-center gap-6">
          <span className="h-[1px] w-8 bg-gray-800"></span>
          <span className="text-[#D4AF37]/50 font-black">ISO 9001:2015 CERTIFIED</span>
          <span className="h-[1px] w-8 bg-gray-800"></span>
        </div>
        <span className="font-bold opacity-40 tracking-[0.2em]">Designed for Industrial Dominance</span>
      </footer>
    </section>
  );
};