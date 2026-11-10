import React, { useState, useEffect, useRef } from 'react';
import { 
  Bolt, 
  Sliders, 
  Download, 
  Globe, 
  Zap, 
  Play, 
  Pause,
  ChevronLeft, 
  ChevronRight, 
  Flame, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';

interface HeroProps {
  onOpenPdfCatalog: () => void;
  onOpenDatasheetStorm75: () => void;
  onSelectCategory?: (category: string) => void;
  onNavigate?: (view: 'home' | 'about' | 'downloads' | 'news' | 'products' | 'service') => void;
  onOpenDistributor?: () => void;
}

interface BannerSlide {
  id: string;
  badge: string;
  badgeColor: string;
  categoryTag: string;
  targetCategory: string;
  modelCode: string;
  headline: string;
  subheadline: string;
  description: string;
  bannerImage: string;
  stats: {
    label: string;
    value: string;
    sub: string;
    highlight?: boolean;
  }[];
  ctaText: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'brushless-titan',
    badge: 'TS BRUSHLESS RACING SERIES · 8.4V HIGH VOLTAGE',
    badgeColor: '#ff525f',
    categoryTag: 'BRUSHLESS MOTOR · 无刷电机 (TS系列 7款)',
    targetCategory: 'brushless-motor',
    modelCode: 'TS27 / TS70 BRUSHLESS',
    headline: 'TS27 & TS70 PRO BRUSHLESS SERVOS',
    subheadline: '8.4V HIGH VOLTAGE // 27KG ~ 70KG MONSTER TORQUE // FULL CNC ALUMINUM',
    description: 'High-efficiency 4-pole brushless motors with aerospace 7075-T6 billet aluminum housings and hardened metal gears: TS12, TS15, TS22, TS27, TS36, TS60, TS70. Dominating IFMAR podiums and extreme robotics.',
    bannerImage: '/assets/aistudio/BB1_3956a281.jpg',
    stats: [
      { label: 'Max Torque', value: '70.0 kg-cm', sub: '@ 8.4V TS70 HV', highlight: true },
      { label: 'Transit Speed', value: '0.055 sec', sub: '/ 60° Travel TS12/27' },
      { label: 'TS Lineup', value: '7 Models', sub: 'TS12 ~ TS70 Brushless' },
      { label: 'Sealing Grade', value: 'IP68 Submersible', sub: 'TS60 Marine Sealed' },
    ],
    ctaText: 'Explore TS Brushless Lineup'
  },
  {
    id: 'drift-precision',
    badge: 'TS12 & TS15 LOW PROFILE 矮机身 · 1/10 DRIFT & TOURING',
    badgeColor: '#00daf3',
    categoryTag: 'BRUSHLESS LOW PROFILE · 矮机身12KG / 15KG',
    targetCategory: 'brushless-motor',
    modelCode: 'TS12 & TS15 LOW-PROFILE',
    headline: '27.2MM ULTRA-LOW CG. 1/10 DRIFT & TOURING.',
    subheadline: 'TS12 (12KG) & TS15 (15KG) // 0.050s LIGHTNING TRANSIT // 25T CLAMPING',
    description: 'Engineered specifically for competitive 1/10 RWD drift and touring chassis. 27.2mm low profile lowers chassis center of gravity for instantaneous direction changes and razor-sharp neutral return.',
    bannerImage: '/assets/aistudio/BB_8f174cab.jpg',
    stats: [
      { label: 'Transit Speed', value: '0.050 sec', sub: 'TS15 @ 8.4V HV', highlight: true },
      { label: 'Peak Torque', value: '15.0 kg-cm', sub: '@ 8.4V TS15' },
      { label: 'Housing Height', value: '27.2 mm', sub: 'Ultra-Low Profile' },
      { label: 'Total Weight', value: '54.0 grams', sub: 'CNC 7075 Billet' },
    ],
    ctaText: 'Explore Low Profile Models'
  },
  {
    id: 'ts60-waterproof',
    badge: 'TS60 EZ POWER · IP68 SUBMERSIBLE WATERPROOF',
    badgeColor: '#38bdf8',
    categoryTag: 'BRUSHLESS WATERPROOF · 潜水级防水 (TS60 60KG)',
    targetCategory: 'brushless-motor',
    modelCode: 'TS60 60MG WATERPROOF',
    headline: 'TS60 60KG IP68 WATERPROOF BRUSHLESS',
    subheadline: '8.4V HIGH VOLTAGE // 60.0 KG-CM MONSTER TORQUE // HYDROSTATIC SUBMERSIBLE',
    description: 'TS60 EZ POWER 60KG 潜水级防水高压无刷数码舵机。全金属CNC强化散热外壳，双层O型硅胶密闭灌胶，2米水深连续作业，抗泥浆与海水腐蚀，专为攀爬车、船模与严苛工况设计。',
    bannerImage: '/assets/aistudio/B3_0434f7fc.jpg',
    stats: [
      { label: 'Holding Torque', value: '60.0 kg-cm', sub: '@ 8.4V HV Direct', highlight: true },
      { label: 'Waterproof Grade', value: 'IP68 Submersible', sub: '2M Hydrostatic Tested' },
      { label: 'Gear Material', value: 'Full Metal CNC', sub: 'Hardened Steel Train' },
      { label: 'Motor System', value: 'HV Brushless', sub: 'SSR/SHR Protocol' },
    ],
    ctaText: 'Explore TS60 Waterproof Servo'
  }
];

export const Hero: React.FC<HeroProps> = ({ 
  onOpenPdfCatalog, 
  onOpenDatasheetStorm75,
  onSelectCategory,
  onNavigate,
  onOpenDistributor
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Telemetry real-time values
  const [dutyCycle, setDutyCycle] = useState(88.4);
  const [motorTemp, setMotorTemp] = useState(42.1);
  const [jitter, setJitter] = useState('< 0.002°');
  const [isPulsing, setIsPulsing] = useState(false);

  const SLIDE_DURATION = 6500; // 6.5s per banner slide

  const currentSlide = BANNER_SLIDES[currentSlideIndex];

  // Auto-play timer and slide progress animation
  useEffect(() => {
    if (!isAutoPlay) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    setProgress(0);
    const progressInterval = 50;
    const step = (progressInterval / SLIDE_DURATION) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + step;
      });
    }, progressInterval);

    autoPlayTimerRef.current = setTimeout(() => {
      handleNextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [currentSlideIndex, isAutoPlay]);

  // Subtle real-time oscillation of telemetry benchmark to feel alive
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPulsing) {
        setDutyCycle(+(87.8 + Math.random() * 1.4).toFixed(1));
        setMotorTemp(+(41.9 + Math.random() * 0.4).toFixed(1));
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isPulsing]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  };

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setProgress(0);
  };

  const handleRunPulseTest = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPulsing(true);
    setDutyCycle(98.6);
    setMotorTemp(44.2);
    setJitter('< 0.001°');

    setTimeout(() => {
      setDutyCycle(88.4);
      setMotorTemp(42.1);
      setJitter('< 0.002°');
      setIsPulsing(false);
    }, 1800);
  };

  const handleCtaClick = () => {
    if (onSelectCategory) onSelectCategory(currentSlide.targetCategory);
    if (onNavigate) {
      onNavigate('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#070a0f] border-b border-[#1c2026] select-none"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* ----------------- FULL-WIDTH (通屏) GRAND BILLBOARD BANNER ----------------- */}
      <div className="relative w-full h-[580px] sm:h-[640px] md:h-[700px] lg:h-[760px] xl:h-[820px] overflow-hidden">
        
        {/* Render All Background Images for Smooth Cross-Fading */}
        {BANNER_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
              }`}
            >
              {/* Massive Full-Screen (通屏) Banner Image - Clean & Ultra-Sharp */}
              <img
                src={slide.bannerImage}
                alt={slide.headline}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.04] saturate-[1.02]"
              />

              {/* Clean, Non-Obtrusive Edge Gradients for Perfect Clarity & Readability */}
              <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#070a0f]/85 via-[#070a0f]/40 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#070a0f]/75 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#070a0f] to-transparent pointer-events-none"></div>
            </div>
          );
        })}

        {/* Banner Text Content Layer */}
        <div className="relative z-20 w-full h-full max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col justify-center pt-24 sm:pt-28 pb-24">
          <div className="max-w-3xl flex flex-col gap-4 animate-in fade-in duration-700">
            
            {/* Brand Header Line & ISO Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#10141a]/95 text-white font-mono text-xs uppercase tracking-wider rounded flex items-center gap-1.5 border border-[#2b3342] shadow-md backdrop-blur-md">
                <Bolt className="w-3.5 h-3.5 text-[#38bdf8]" />
                <strong className="text-white">DONGGUAN CHAOJIA INTELLIGENT TECHNOLOGY CO., LTD</strong>
              </span>

              <span 
                className="px-3 py-1 font-mono text-xs uppercase tracking-wider rounded font-bold border backdrop-blur-md shadow-sm flex items-center gap-1.5"
                style={{ 
                  backgroundColor: `${currentSlide.badgeColor}20`, 
                  borderColor: `${currentSlide.badgeColor}60`,
                  color: currentSlide.badgeColor 
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {currentSlide.badge}
              </span>
            </div>

            {/* Model Code / Category Ribbon */}
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#38bdf8] font-bold tracking-widest uppercase">
              <span className="px-2 py-0.5 bg-[#141820]/90 border border-[#262c37] rounded text-white font-black">
                {currentSlide.modelCode}
              </span>
              <span className="text-slate-500">//</span>
              <span className="text-emerald-400 font-semibold">{currentSlide.categoryTag}</span>
            </div>

            {/* Giant Advertising Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {currentSlide.headline}
            </h1>

            {/* Sub-headline with Technical Spec Accent */}
            <p className="font-mono text-xs sm:text-sm md:text-base text-[#ffb778] font-bold tracking-wide uppercase drop-shadow-md">
              {currentSlide.subheadline}
            </p>

            {/* Advertising Lead Copy */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl drop-shadow-md">
              {currentSlide.description}
            </p>

            {/* 4 Technical Specs Matrix Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-2xl">
              {currentSlide.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`p-3 rounded-lg border backdrop-blur-md flex flex-col transition-all ${
                    stat.highlight 
                      ? 'bg-[#141b26]/90 border-[#38bdf8]/60 shadow-lg shadow-sky-500/15' 
                      : 'bg-[#10141c]/80 border-[#262c38]/80 shadow-md'
                  }`}
                >
                  <span className="font-mono text-[10px] sm:text-[11px] text-slate-300 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className={`font-mono text-lg sm:text-xl font-black mt-0.5 ${
                    stat.highlight ? 'text-[#38bdf8]' : 'text-white'
                  }`}>
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 truncate">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={handleCtaClick}
                className="px-7 py-3.5 bg-[#ff525f] hover:bg-[#ff3b30] text-white font-mono text-xs uppercase tracking-wider rounded-lg font-bold transition-all flex items-center gap-2 shadow-xl shadow-red-500/30 active:scale-95"
              >
                <Sliders className="w-4 h-4 text-white" />
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={onOpenPdfCatalog}
                className="px-5 py-3.5 bg-[#141820]/90 hover:bg-[#1f2532] text-white font-mono text-xs uppercase tracking-wider rounded-lg border border-[#2b3342] backdrop-blur-md transition-colors flex items-center gap-2 active:scale-95 shadow-md"
              >
                <Download className="w-4 h-4 text-[#38bdf8]" />
                <span>2025 Spec Catalog (PDF)</span>
              </button>

              <button
                onClick={onOpenDatasheetStorm75}
                className="px-5 py-3.5 bg-[#10141a]/90 hover:bg-[#1a202c] text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider rounded-lg border border-[#262a31] backdrop-blur-md transition-colors flex items-center gap-1.5"
              >
                <span>View Full Datasheet</span>
              </button>

              {onOpenDistributor && (
                <button
                  onClick={onOpenDistributor}
                  className="px-4 py-3.5 bg-[#10141a]/80 hover:text-white text-slate-300 font-mono text-xs uppercase tracking-wider rounded-lg border border-[#262a31] hover:border-[#38bdf8]/40 transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span>OEM / B2B Inquiry</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Carousel Side Navigation Buttons */}
        <button
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#10141a]/80 hover:bg-[#38bdf8] text-white hover:text-black border border-[#2c3442] backdrop-blur-md flex items-center justify-center transition-all z-30 shadow-2xl hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNextSlide}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#10141a]/80 hover:bg-[#38bdf8] text-white hover:text-black border border-[#2c3442] backdrop-blur-md flex items-center justify-center transition-all z-30 shadow-2xl hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* ----------------- BOTTOM BILLBOARD STRIP & COUNTDOWN PROGRESS ----------------- */}
        <div className="absolute bottom-0 left-0 right-0 z-30 bg-[#070a0f]/95 border-t border-[#1e2532] backdrop-blur-md px-6 sm:px-10 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Real-time Telemetry Mini Strip */}
          <div className="flex items-center gap-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping"></span>
              <span className="text-white font-bold">BENCH TELEMETRY:</span>
            </div>
            <span>Duty: <strong className="text-white">{dutyCycle}%</strong></span>
            <span>Temp: <strong className="text-white">{motorTemp}°C</strong></span>
            <span>Jitter: <strong className="text-[#38bdf8]">{jitter}</strong></span>
            <button
              onClick={handleRunPulseTest}
              disabled={isPulsing}
              className="hidden lg:flex px-2 py-0.5 bg-[#1e2533] hover:bg-[#38bdf8] hover:text-black text-white text-[10px] uppercase font-bold rounded items-center gap-1 transition-colors border border-[#2c3546]"
            >
              <Play className="w-2.5 h-2.5" />
              {isPulsing ? 'Pulsing...' : 'Pulse Test'}
            </button>
          </div>

          {/* 3 Interactive Slide Tab Selectors with Animated Progress Line */}
          <div className="flex items-center gap-2.5 w-full md:w-auto font-mono text-xs">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-2 rounded bg-[#10141a] border border-[#262a31] text-slate-300 hover:text-white transition-colors flex items-center justify-center"
              title={isAutoPlay ? "Pause Auto Carousel" : "Resume Auto Carousel"}
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5 text-[#38bdf8]" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            </button>

            <div className="grid grid-cols-3 gap-2 w-full md:w-[540px]">
              {BANNER_SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleSelectSlide(idx)}
                    className={`relative px-3 py-2 rounded text-left transition-all border flex flex-col overflow-hidden ${
                      isActive 
                        ? 'bg-[#141b26] border-[#38bdf8] text-white shadow-lg' 
                        : 'bg-[#0d1017] border-[#1e2532] text-slate-400 hover:text-slate-200 hover:bg-[#121620]'
                    }`}
                  >
                    {/* Active Timer Progress Line */}
                    {isActive && isAutoPlay && (
                      <div 
                        className="absolute bottom-0 left-0 h-1 bg-[#38bdf8] transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      ></div>
                    )}
                    <span className="text-[10px] text-slate-500 font-bold">0{idx + 1} // CAMPAIGN</span>
                    <span className="font-bold text-xs truncate">{slide.modelCode.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
