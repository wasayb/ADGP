import React from 'react';

interface Client {
  name: string;
  domain: string;
}

export const ValuableClients: React.FC<{ progress: number }> = () => {
  const clients: Client[] = [
    { name: "FWO", domain: "fwo.com.pk" },
    { name: "Nestlé", domain: "nestle.com" },
    { name: "TOTAL", domain: "totalenergies.com" },
    { name: "PSO", domain: "psopk.com" },
    { name: "Subway", domain: "subway.com" },
    { name: "Bahria Town", domain: "bahriatown.com" },
    { name: "DHA", domain: "dhakarachi.org" },
    { name: "Khaadi", domain: "khaadi.com" },
    { name: "Hascol", domain: "hascol.com" },
    { name: "Transworld", domain: "transworld.com.pk" },
    { name: "Al Ghurair Giga", domain: "alghurairgiga.com" },
    { name: "IBA", domain: "iba.edu.pk" },
    { name: "Alkaram", domain: "alkaram.com" },
    { name: "Meat One", domain: "meatone.net" },
    { name: "Dawn Bread", domain: "dawnbread.com.pk" },
    { name: "Tameer", domain: "tameer.net" },
    { name: "Hyperstar", domain: "carrefourpk.com" },
    { name: "ACC", domain: "accpk.com" }
  ];

  return (
    <section id="partners" className="py-32 px-6 md:px-24 bg-black/30">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-10">
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.8em] text-[#D4AF37] font-black mb-6">TRUSTED BY LEADERS</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">CLIENT PORTFOLIO.</h3>
          </div>
          <div className="hidden lg:block text-right">
            <div className="text-[100px] font-black text-white/5 leading-none select-none tracking-tighter">NETWORK</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 bg-transparent overflow-hidden">
          {clients.map((c, i) => (
            <div 
              key={i} 
              className="group relative bg-white/5 backdrop-blur-sm aspect-video flex items-center justify-center p-8 transition-all duration-500 border border-white/5 hover:border-[#D4AF37]/40 hover:bg-white/10 shadow-lg rounded-sm overflow-hidden"
            >
              {/* Scanline hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img 
                  src={`https://logo.clearbit.com/${c.domain}`}
                  alt={`${c.name} Logo`}
                  className="max-w-full max-h-[60%] object-contain filter grayscale brightness-200 invert opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const text = document.createElement('span');
                      text.className = "fallback-text text-xs md:text-sm font-black text-gray-500 group-hover:text-[#D4AF37] transition-all duration-300 uppercase tracking-[0.3em] text-center";
                      text.innerText = c.name;
                      parent.appendChild(text);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};