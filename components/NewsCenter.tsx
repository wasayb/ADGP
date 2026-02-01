
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface NewsItem {
  title: string;
  summary: string;
  date?: string;
}

export const NewsCenter: React.FC<{ progress: number }> = () => {
  const [loading, setLoading] = useState(false);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [sources, setSources] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeMode, setActiveMode] = useState<'general' | 'specialized' | null>(null);

  const fetchNews = async (mode: 'general' | 'specialized') => {
    setLoading(true);
    setError(null);
    setActiveMode(mode);
    
    const prompt = mode === 'general' 
      ? "Provide the 4-5 latest general industrial and economic news items affecting the energy sector in Pakistan and Dubai. Focus on infrastructure and investment."
      : "Provide the 4-5 latest industrial news items regarding diesel/gas generators and solar energy infrastructure specifically for Pakistan and Dubai. Focus on high-capacity projects, market trends, and policy shifts.";

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "Clear industrial headline" },
                summary: { type: Type.STRING, description: "Professional 2-3 sentence summary" },
                date: { type: Type.STRING, description: "Approximate date or relative time" }
              },
              required: ["title", "summary"]
            }
          }
        },
      });

      const parsedNews = JSON.parse(response.text || "[]");
      setNewsItems(parsedNews);
      setSources(response.candidates?.[0]?.groundingMetadata?.groundingChunks || []);
    } catch (error) {
      console.error("Error fetching industrial intelligence:", error);
      setError("Connection to global intelligence network interrupted. Please verify connectivity and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 px-6 md:px-24 bg-black/40">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#D4AF37] animate-pulse rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <h2 className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-[#D4AF37] font-black">MARKET INTELLIGENCE</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
              POWER <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">INSIGHTS.</span>
            </h3>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            {/* General News Button */}
            <button 
              onClick={() => fetchNews('general')}
              disabled={loading}
              className={`group relative px-10 py-5 bg-[#D4AF37] text-black transition-all duration-500 text-[11px] uppercase tracking-[0.4em] font-black overflow-hidden shadow-[0_20px_40px_rgba(212,175,55,0.15)] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="relative z-10 group-hover:tracking-[0.6em] transition-all duration-700">
                {loading && activeMode === 'general' ? "COMMUNICATING..." : "FETCH LATEST"}
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>

            {/* Specialized Assets News Button */}
            <button 
              onClick={() => fetchNews('specialized')}
              disabled={loading}
              className={`group relative px-10 py-5 border-2 border-white/20 text-white transition-all duration-500 text-[11px] uppercase tracking-[0.4em] font-black overflow-hidden hover:border-[#D4AF37] hover:text-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="relative z-10 group-hover:tracking-[0.6em] transition-all duration-700">
                {loading && activeMode === 'specialized' ? "SYNCING ASSETS..." : "FETCH LATEST"}
              </span>
              <div className="absolute inset-0 bg-[#D4AF37]/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
              <div className="absolute top-0 right-0 p-1">
                <div className="w-1 h-1 bg-[#D4AF37]/50 rounded-full" />
              </div>
              <span className="absolute -bottom-6 left-0 w-full text-center text-[7px] uppercase tracking-[0.2em] text-gray-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">Specialized: Generators & Solar</span>
            </button>
          </div>
        </div>

        <div className="relative min-h-[400px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-16 rounded-sm shadow-2xl overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.02] -mr-48 -mt-48 rotate-45 blur-[100px] pointer-events-none" />
          
          {error && (
            <div className="flex flex-col items-center justify-center h-[300px] text-center">
              <p className="text-red-400 uppercase tracking-[0.2em] text-[12px] font-bold">{error}</p>
            </div>
          )}

          {!newsItems.length && !loading && !error ? (
            <div className="flex flex-col items-center justify-center h-[300px] text-center">
              <div className="w-16 h-16 border border-white/10 mb-8 flex items-center justify-center opacity-30">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-none stroke-current" strokeWidth="1">
                   <circle cx="12" cy="12" r="10" />
                   <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <p className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-black">Awaiting System Initialization</p>
            </div>
          ) : loading ? (
            <div className="flex flex-col items-center justify-center h-[300px] text-center">
              <div className="w-20 h-[1px] bg-[#D4AF37] mb-8 animate-pulse shadow-[0_0_15px_rgba(212,175,55,1)]" />
              <p className="text-gray-400 uppercase tracking-[0.8em] text-[11px] font-black animate-pulse">Scanning Global Energy Grids...</p>
            </div>
          ) : (
            <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="grid gap-12 md:gap-16">
                {newsItems.map((item, index) => (
                  <div key={index} className="group/item border-b border-white/5 pb-12 last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                      <span className="text-[9px] font-black text-[#D4AF37] tracking-[0.4em] opacity-40 shrink-0 mt-2 uppercase">
                        {item.date || `INTEL NO. ${index + 1}`}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white uppercase tracking-tight leading-snug mb-4 transition-all duration-300 relative inline-block cursor-default">
                          {item.title}
                          <span className="absolute left-0 -bottom-1.5 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-700 ease-in-out group-hover/item:w-full opacity-0 group-hover/item:opacity-100 shadow-[0_0_12px_rgba(212,175,55,0.7)]"></span>
                        </h4>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium opacity-80 group-hover/item:opacity-100 transition-opacity duration-500 max-w-4xl">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {sources.length > 0 && (
                <div className="mt-16 pt-10 border-t border-white/10">
                  <h4 className="text-[9px] uppercase tracking-[0.4em] text-gray-500 font-black mb-6">Verification Sources</h4>
                  <div className="flex flex-wrap gap-4">
                    {sources.map((chunk, idx) => chunk.web && (
                      <a 
                        key={idx} 
                        href={chunk.web.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] bg-white/5 border border-white/5 px-4 py-2 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all text-gray-400 hover:text-white font-bold uppercase tracking-widest rounded-sm"
                      >
                        {chunk.web.title || "External Intelligence Report"}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="mt-10 flex items-center gap-6 opacity-40">
          <span className="text-[9px] font-mono text-gray-600">INTEL-STREAM: v2.7.0-SPECIALIZED</span>
          <div className="flex-1 h-[1px] bg-white/5"></div>
          <span className="text-[9px] font-mono text-[#D4AF37]">REAL-TIME SYNC ACTIVE</span>
        </div>
      </div>
    </section>
  );
};
