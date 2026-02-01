import React from 'react';

interface Props {
  progress: number;
}

export const PowerStatement: React.FC<Props> = ({ progress }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 md:pt-20 overflow-hidden">
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-100 ease-out opacity-60"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000')`,
            transform: `scale(${1 + progress * 0.12}) translateY(${progress * 40}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_110%)] opacity-80" />
      </div>

      <div className="relative z-10 max-w-[1800px] w-full text-center">
        <div className="inline-flex items-center gap-3 md:gap-4 mb-10 md:mb-16 px-6 md:px-8 py-3 border border-white/20 bg-black/40 backdrop-blur-xl rounded-full">
          <div className="w-2 h-2 bg-[#D4AF37] animate-pulse rounded-full" />
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] md:tracking-[0.8em] font-black text-white">
            Industrial Power Infrastructure
          </span>
        </div>
        
        <div className="relative mb-8 md:mb-12 flex flex-col items-center">
          <h1 className="text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] font-black tracking-[-0.05em] leading-[0.9] text-white uppercase select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            PRECISION
          </h1>
          <h1 className="text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] font-black tracking-[-0.05em] leading-[0.9] uppercase select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-white/10">
            ENERGY.
          </h1>
        </div>
        
        <p className="text-base md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto font-medium tracking-wide leading-relaxed drop-shadow-2xl mb-12 md:mb-16 px-4 opacity-90">
          Tier-1 power generation solutions for critical global infrastructure. <br />
          <span className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-[10px] md:text-base mt-8 block border-t border-white/10 pt-8 max-w-md mx-auto">
            Authorized Perkins & Lovol Distribution
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 md:px-16 py-4 md:py-6 bg-[#D4AF37] text-black transition-all duration-500 text-[10px] md:text-[12px] lg:text-[13px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-black inline-block overflow-hidden rounded-full shadow-[0_15px_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transform hover:-translate-y-1"
          >
            <span className="relative z-10 group-hover:tracking-[0.8em] transition-all duration-700">Initialize Inquiry</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </div>

        <div className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 opacity-50 animate-bounce">
          <div className="w-[1.5px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </div>
    </section>
  );
};