import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Cpu, 
  Sparkles, 
  Flame, 
  Download,
  Gauge,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { Product } from '../types';

interface MiddlePromoBannerProps {
  onOpenDatasheet?: (product: Product) => void;
  onNavigateProducts?: (category?: string) => void;
  onOpenDistributor?: () => void;
  featuredProduct?: Product;
}

export const MiddlePromoBanner: React.FC<MiddlePromoBannerProps> = ({
  onOpenDatasheet,
  onNavigateProducts,
  onOpenDistributor,
  featuredProduct
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#07090e] border-y border-[#202735] select-none my-0 py-16 sm:py-20 lg:py-24">
      {/* ----------------- FULL-WIDTH (通屏) BACKGROUND AMBIENCE ----------------- */}
      {/* Carbon fiber grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
      
      {/* Dramatic ambient radial glows */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-[#ff525f]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-[#38bdf8]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Industrial accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff525f] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Banner Top Brand Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1c2330]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff525f]/15 text-[#ff707b] border border-[#ff525f]/40 font-mono text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-[#ff525f]" />
              OFFICIAL FULL-BLEED ADVERTISEMENT BANNER
            </span>
            <span className="text-slate-400 font-mono text-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              DONGGUAN CHAOJIA INTELLIGENT TECHNOLOGY CO., LTD
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-slate-400">
            <span>CNC BILLET 7075-T6</span>
            <span className="text-slate-600">/</span>
            <span>25T CLAMPING SPLINE</span>
            <span className="text-slate-600">/</span>
            <span className="text-[#38bdf8]">SSR ULTRA-RESPONSE</span>
          </div>
        </div>

        {/* Grand Billboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headlines & Spec Highlights (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Model Badge */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#151c28] border border-[#2d3748] rounded text-[#38bdf8] font-mono text-xs font-black tracking-widest uppercase">
                TS SERIES FLAGSHIP
              </span>
              <span className="px-3 py-1 bg-[#2a1318] border border-[#ff525f]/50 rounded text-[#ff8089] font-mono text-xs font-bold uppercase">
                TS27 CJ.POWER 8.4V HV
              </span>
            </div>

            {/* Massive Typographic Headline */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                TS27 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff525f] via-[#ff7882] to-[#38bdf8]">CJ.POWER</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-slate-200 font-mono">
                HIGH VOLTAGE BRUSHLESS // COMPETITION GRADE
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Engineered by <strong className="text-white">Dongguan Chaojia Intelligent Technology Co., Ltd</strong> for world championship RC racing and high-stress robotics. Features aviation-grade 7075 CNC anodized aluminum heat-sink casing, high-pole brushless motor, and zero-backlash titanium-steel gear train.
            </p>

            {/* Four Parametric Telemetry Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#111620] border border-[#252f40] rounded-xl p-3.5 flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">Max Torque</span>
                <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none text-[#ff525f]">27.0 <span className="text-xs font-normal text-slate-400">kg-cm</span></span>
                <span className="text-[10px] font-mono text-slate-500 mt-1">@ 8.4V Direct HV</span>
              </div>

              <div className="bg-[#111620] border border-[#252f40] rounded-xl p-3.5 flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">Transit Speed</span>
                <span className="text-xl sm:text-2xl font-black text-white font-mono leading-none text-[#38bdf8]">0.075 <span className="text-xs font-normal text-slate-400">sec</span></span>
                <span className="text-[10px] font-mono text-slate-500 mt-1">/ 60° Travel Speed</span>
              </div>

              <div className="bg-[#111620] border border-[#252f40] rounded-xl p-3.5 flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">Gear Material</span>
                <span className="text-base sm:text-lg font-black text-white font-mono leading-none">Full Metal</span>
                <span className="text-[10px] font-mono text-slate-500 mt-1">Titanium & Steel</span>
              </div>

              <div className="bg-[#111620] border border-[#252f40] rounded-xl p-3.5 flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">Motor Drive</span>
                <span className="text-base sm:text-lg font-black text-white font-mono leading-none">Brushless</span>
                <span className="text-[10px] font-mono text-slate-500 mt-1">SSR/SHR Protocol</span>
              </div>
            </div>

            {/* Quick 15-Model Family Guide Strip */}
            <div className="bg-[#0e131b] border border-[#202735] rounded-xl p-4 flex flex-col gap-2 font-mono text-xs">
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center justify-between">
                <span>COMPLETE 15-MODEL CATALOG MATRIX</span>
                <span className="text-[#38bdf8]">15 EXACT FACTORY MODELS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
                <button
                  onClick={() => onNavigateProducts?.('brushless-motor')}
                  className="p-2 rounded bg-[#141b25] hover:bg-[#1a2332] text-left border border-[#232d3d] hover:border-[#38bdf8] transition-colors"
                >
                  <span className="text-[#38bdf8] font-bold block">⚡ 无刷 (7款)</span>
                  <span className="text-slate-300 text-[10px]">TS12, TS15, TS22, TS27, TS36, TS60, TS70</span>
                </button>
                <button
                  onClick={() => onNavigateProducts?.('coreless-motor')}
                  className="p-2 rounded bg-[#141b25] hover:bg-[#1a2332] text-left border border-[#232d3d] hover:border-[#38bdf8] transition-colors"
                >
                  <span className="text-emerald-400 font-bold block">🚀 空心杯 (2款)</span>
                  <span className="text-slate-300 text-[10px]">CJ0005 (0.050s), CJ0009 (9g超薄)</span>
                </button>
                <button
                  onClick={() => onNavigateProducts?.('brushed-iron-core')}
                  className="p-2 rounded bg-[#141b25] hover:bg-[#1a2332] text-left border border-[#232d3d] hover:border-[#38bdf8] transition-colors"
                >
                  <span className="text-amber-400 font-bold block">🛡️ 有刷/铁芯 (6款)</span>
                  <span className="text-slate-300 text-[10px]">CJ12KG, 15KG, 17KG, 35KG, 45KG, 60KG</span>
                </button>
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {featuredProduct && onOpenDatasheet && (
                <button
                  onClick={() => onOpenDatasheet(featuredProduct)}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#ff525f] to-[#e02434] hover:brightness-110 text-white font-mono text-xs uppercase font-bold rounded-lg transition-all shadow-xl shadow-red-600/25 flex items-center gap-2 group cursor-pointer"
                >
                  <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Open TS27 Full Datasheet (PDF)</span>
                </button>
              )}

              <button
                onClick={() => onNavigateProducts?.('brushless-motor')}
                className="px-6 py-3.5 bg-[#17202c] hover:bg-[#202b3b] text-white hover:text-[#38bdf8] border border-[#2d394b] font-mono text-xs uppercase font-bold rounded-lg transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Browse Brushless Range</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {onOpenDistributor && (
                <button
                  onClick={onOpenDistributor}
                  className="px-5 py-3.5 text-slate-300 hover:text-white font-mono text-xs uppercase font-bold transition-colors underline decoration-slate-600 hover:decoration-[#38bdf8] underline-offset-4"
                >
                  Wholesale Inquiries
                </button>
              )}
            </div>

          </div>

          {/* Right Column: The User's Uploaded Flagship TS27 Product Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Visual Card with Pedestal & Technical Overlays */}
            <div className="relative w-full max-w-[500px] rounded-2xl bg-gradient-to-b from-[#131924] to-[#0a0d13] p-6 sm:p-8 border border-[#2b3547] shadow-2xl overflow-hidden group">
              
              {/* Corner tech reticle accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#38bdf8]"></div>
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#ff525f]"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#ff525f]"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#38bdf8]"></div>

              {/* Status Header inside card */}
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 mb-4 pb-3 border-b border-[#212a38]">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  LIVE PRODUCT VISUAL
                </span>
                <span className="text-[#38bdf8]">FLAGSHIP #TS27</span>
              </div>

              {/* Featured Uploaded Image from the User */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#07090e] border border-[#263142] flex items-center justify-center p-3">
                <img
                  src="/assets/aistudio/image_0740ab56.png"
                  alt="TS27 CJ.POWER Brushless Servo - Dongguan Chaojia Intelligent Technology Co., Ltd"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(255,82,95,0.25)] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay hover badge */}
                {featuredProduct && onOpenDatasheet && (
                  <button
                    onClick={() => onOpenDatasheet(featuredProduct)}
                    className="absolute bottom-3 right-3 px-3 py-1.5 bg-[#0e141f]/90 hover:bg-[#ff525f] text-white font-mono text-[10px] uppercase font-bold rounded-md border border-[#354359] hover:border-transparent transition-all backdrop-blur-md flex items-center gap-1 shadow-lg"
                  >
                    <FileText className="w-3 h-3" />
                    <span>View Spec Sheet</span>
                  </button>
                )}
              </div>

              {/* Live Card Telemetry Strip */}
              <div className="mt-4 pt-3 border-t border-[#212a38] flex items-center justify-between font-mono text-[11px] text-slate-400">
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">RACING PROTOCOL</span>
                  <span className="text-white font-bold">SSR / SUR / SXR 8.4V</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">CASING GRADE</span>
                  <span className="text-white font-bold">7075-T6 Full CNC</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">SPLINE TEETH</span>
                  <span className="text-[#38bdf8] font-bold">25T Heavy Duty</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
