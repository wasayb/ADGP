
import React, { useState } from 'react';

export const WhatsAppFAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      label: "Operations / Sales Head",
      number: "+92 334 3459615",
      link: "https://wa.me/923343459615"
    },
    {
      label: "CEO – Direct Contact",
      number: "+92 321 3768945",
      link: "https://wa.me/923213768945"
    }
  ];

  return (
    <div 
      className="fixed bottom-8 right-8 z-[200] flex flex-col items-end gap-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Expanded Menu */}
      <div className={`flex flex-col gap-3 transition-all duration-500 origin-bottom ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'}`}>
        {contacts.map((contact, idx) => (
          <a 
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#D4AF37]/30 px-6 py-4 hover:border-[#D4AF37] hover:bg-white/5 transition-all group rounded-sm shadow-2xl"
          >
            <div className="flex flex-col items-end">
              <span className="text-[9px] uppercase tracking-[0.3em] font-black text-[#D4AF37] mb-1">{contact.label}</span>
              <span className="text-xs font-bold text-white tracking-wider">{contact.number}</span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center border border-[#D4AF37]/20 rounded-full group-hover:bg-[#D4AF37] transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D4AF37] group-hover:text-black fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Primary Trigger Button */}
      <div className="relative group">
        <div className={`absolute inset-0 bg-[#D4AF37] opacity-20 rounded-sm blur-xl transition-opacity duration-700 ${isOpen ? 'opacity-40 scale-125' : 'animate-pulse'}`} />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center w-16 h-16 bg-[#0a0a0a] border transition-all duration-500 shadow-2xl rounded-sm overflow-hidden ${isOpen ? 'border-[#D4AF37] rotate-90' : 'border-[#D4AF37]/30'}`}
        >
          <div className={`absolute inset-0 bg-[#D4AF37]/5 transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} />
          {isOpen ? (
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#D4AF37] fill-none stroke-current" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#D4AF37] fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </button>
        
        {/* Tooltip (Only when closed) */}
        {!isOpen && (
          <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
            Technical Support Desk
          </div>
        )}
      </div>
    </div>
  );
};
