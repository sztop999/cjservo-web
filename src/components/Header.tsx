import React, { useState } from 'react';
import { Phone, Mail, Search, Globe, ChevronDown, User, Menu, X, ArrowRight, ShieldCheck, Flame, Cpu, Wrench, Zap, Sparkles } from 'lucide-react';
import { CJServoLogo } from './CJServoLogo';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenDistributor: () => void;
  onSelectCategory: (category: string) => void;
  activeLanguage: string;
  setActiveLanguage: (lang: string) => void;
  currentView?: 'home' | 'about' | 'downloads' | 'news' | 'products' | 'service';
  onNavigate?: (view: 'home' | 'about' | 'downloads' | 'news' | 'products' | 'service') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenDistributor,
  onSelectCategory,
  activeLanguage,
  setActiveLanguage,
  currentView = 'home',
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#10141a]/95 backdrop-blur-xl border-b border-[#262a31]/60">
        {/* Top utility sub-header */}
        <div className="bg-[#0a0e14] border-b border-[#1c2026]">
          <div className="max-w-[1360px] mx-auto px-6 h-10 flex items-center justify-between font-mono text-xs">
            {/* Contact info */}
            <div className="flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="tracking-wider text-slate-500">HOTLINE:</span>
                <a
                  href="tel:1388888888"
                  className="text-white hover:text-[#38bdf8] transition-colors font-bold font-mono"
                >
                  1388888888
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="tracking-wider text-slate-500">TECH SALES:</span>
                <a
                  href="mailto:info@Cjservo.com"
                  className="text-white hover:text-[#38bdf8] transition-colors font-bold font-mono"
                >
                  info@Cjservo.com
                </a>
              </div>
              <span className="hidden xl:inline-block text-[#38bdf8] font-bold tracking-wider text-[11px]">
                | Dongguan Chaojia Intelligent Technology Co., Ltd
              </span>
            </div>

            {/* Quick search input trigger & Language selector */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenSearch}
                className="relative flex items-center bg-[#141820] hover:bg-[#1c2026] px-3 py-1 rounded border border-[#262a31] text-left transition-colors group"
              >
                <Search className="w-3.5 h-3.5 text-slate-400 mr-2 group-hover:text-[#38bdf8]" />
                <span className="text-slate-400 text-xs font-mono w-32 md:w-44 truncate">
                  Part # / Spec search...
                </span>
                <span className="hidden md:inline-block ml-2 text-[10px] bg-[#262a31] text-slate-400 px-1 rounded">
                  ⌘K
                </span>
              </button>

              <div className="flex items-center gap-1 bg-[#141820] px-2 py-1 rounded text-white border border-[#262a31]">
                <Globe className="w-3.5 h-3.5 text-[#38bdf8]" />
                <select
                  value={activeLanguage}
                  onChange={(e) => setActiveLanguage(e.target.value)}
                  className="bg-transparent text-white text-xs font-mono focus:outline-none cursor-pointer"
                >
                  <option className="bg-[#181c22] text-white" value="en">EN (US/GLOBAL)</option>
                  <option className="bg-[#181c22] text-white" value="zh">中文 (CN)</option>
                  <option className="bg-[#181c22] text-white" value="de">DE (DEUTSCH)</option>
                  <option className="bg-[#181c22] text-white" value="ja">JA (日本語)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Navigation Bar */}
        <div className="h-20 max-w-[1360px] mx-auto px-6 flex items-center justify-between gap-4">
          {/* Brand Logo - Enlarged by 20% */}
          <button
            onClick={() => {
              onNavigate?.('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 flex-shrink-0 group py-1 text-left" 
            title="Dongguan Chaojia Intelligent Technology Co., Ltd"
          >
            <CJServoLogo size="lg" className="h-12 sm:h-[53px] lg:h-[58px] transition-transform group-hover:scale-[1.03]" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 font-mono text-[14px] uppercase tracking-wider">
            <button
              onClick={() => {
                onNavigate?.('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`py-2 uppercase tracking-wider font-bold transition-colors ${
                currentView === 'home'
                  ? 'text-white border-b-2 border-[#38bdf8]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              HOME
            </button>

            {/* Mega Dropdown for Products - 100% Solid Opaque Background */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                onClick={() => {
                  onNavigate?.('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center gap-1.5 font-bold transition-colors ${
                  currentView === 'products'
                    ? 'text-white border-b-2 border-[#38bdf8]'
                    : 'text-slate-300 group-hover:text-white'
                }`}
              >
                <span>PRODUCTS</span>
                <ChevronDown className={`w-4 h-4 text-[#38bdf8] transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown - Solid 100% Opaque bg-[#13171f], absolutely zero transparency */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-[1080px] bg-[#13171f] rounded-xl p-6 shadow-2xl shadow-black border-2 border-[#2b313d] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#262a31]">
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-5 h-5 text-[#38bdf8]" />
                    <span className="font-mono text-base uppercase tracking-wider text-white font-bold">
                      MOTOR ARCHITECTURES: BRUSHLESS (TS系列 7款) • CORELESS (CJ系列 2款) • BRUSHED / IRON CORE (CJ系列 6款)
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onSelectCategory('all');
                      onNavigate?.('products');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm text-[#38bdf8] hover:text-white flex items-center gap-1.5 font-bold transition-colors font-mono bg-[#1c212a] px-3 py-1 rounded border border-[#2b313d]"
                  >
                    <span>Browse All 15 Flagship Models</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-4 font-mono">
                  {/* Category 1: Brushless Motor (无刷电机 - 7款) */}
                  <div className="flex flex-col gap-1.5 bg-[#171c25] p-3 rounded-lg border border-[#262c38]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#38bdf8] text-[13px] uppercase tracking-wider font-bold flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-[#38bdf8]" /> Brushless (7款)
                      </span>
                      <span className="text-[10px] text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 px-1 py-0.2 rounded font-bold">
                        TS 系列
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mb-1 leading-tight">
                      8.4V 高压无刷 · 全金属齿 · 磁编码
                    </p>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushless-motor')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item border-t border-[#232832]"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">TS12 (矮机身12KG)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushless-motor')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">TS15 (矮机身15KG)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushless-motor')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">TS22 (22KG 极速)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushless-motor')}
                      className="text-[#ff8089] hover:text-white py-1 text-[12px] font-bold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">TS27 (27KG 旗舰)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushless-motor')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">TS36 (36KG 大扭力)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushless-motor')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">TS60 (60KG 防水)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushless-motor')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">TS70 (70KG 霸王)</span>
                    </a>
                    <button
                      onClick={() => {
                        onSelectCategory('brushless-motor');
                        onNavigate?.('products');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-left text-[11px] text-[#38bdf8] hover:text-white pt-1.5 font-bold flex items-center gap-1 mt-auto"
                    >
                      View All 7 Brushless Servos →
                    </button>
                  </div>

                  {/* Category 2: Coreless Motor (空心杯电机 - 2款) */}
                  <div className="flex flex-col gap-1.5 bg-[#171c25] p-3 rounded-lg border border-[#262c38]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#38bdf8] text-[13px] uppercase tracking-wider font-bold flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-[#38bdf8]" /> Coreless (2款)
                      </span>
                      <span className="text-[10px] text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-1 py-0.2 rounded font-bold">
                        CJ 系列
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mb-1 leading-tight">
                      日系空心杯 · 0.050s极速 · 超薄翼面
                    </p>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('coreless-motor')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item border-t border-[#232832]"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">CJ0005 (0.050s 极速)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('coreless-motor')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">CJ0009 (9g 薄翼面)</span>
                    </a>
                    
                    {/* Coreless Spec highlights */}
                    <div className="mt-3 p-2 bg-[#121620] rounded border border-[#232834] flex flex-col gap-1 text-[10px] text-slate-400">
                      <span className="text-white font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-emerald-400" /> 空心杯技术优势
                      </span>
                      <span>· 无铁芯低转动惯量，瞬态启停零延迟</span>
                      <span>· 直升机锁尾 / 滑翔机机翼内嵌专用</span>
                    </div>

                    <button
                      onClick={() => {
                        onSelectCategory('coreless-motor');
                        onNavigate?.('products');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-left text-[11px] text-[#38bdf8] hover:text-white pt-1.5 font-bold flex items-center gap-1 mt-auto"
                    >
                      View Coreless Models →
                    </button>
                  </div>

                  {/* Category 3: Brushed / Iron Core (有刷/铁芯电机 - 6款) */}
                  <div className="flex flex-col gap-1.5 bg-[#171c25] p-3 rounded-lg border border-[#262c38]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#38bdf8] text-[13px] uppercase tracking-wider font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" /> Iron Core (6款)
                      </span>
                      <span className="text-[10px] text-amber-300 bg-amber-950/80 border border-amber-800/60 px-1 py-0.2 rounded font-bold">
                        CJ 系列
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mb-1 leading-tight">
                      有刷铁芯马达 · 全金属齿 · 高性价比
                    </p>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushed-iron-core')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item border-t border-[#232832]"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">CJ12KG (标准款)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushed-iron-core')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">CJ15KG (性价比主力)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushed-iron-core')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">CJ17KG (经典热销)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushed-iron-core')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">CJ35KG (全钢齿)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushed-iron-core')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">CJ45KG (1/5 汽油)</span>
                    </a>
                    <a
                      href="#catalog-section"
                      onClick={() => onSelectCategory('brushed-iron-core')}
                      className="text-slate-200 hover:text-[#38bdf8] py-1 text-[12px] font-semibold transition-colors flex items-center group/item"
                    >
                      <span className="group-hover/item:translate-x-1 transition-transform">CJ60KG (工业超大)</span>
                    </a>
                    <button
                      onClick={() => {
                        onSelectCategory('brushed-iron-core');
                        onNavigate?.('products');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-left text-[11px] text-[#38bdf8] hover:text-white pt-1.5 font-bold flex items-center gap-1 mt-auto"
                    >
                      View All 6 Iron Core Servos →
                    </button>
                  </div>

                  {/* Category 4: Factory & B2B Services */}
                  <div className="flex flex-col gap-2 bg-[#171c25] p-3 rounded-lg border border-[#262c38]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-[13px] uppercase tracking-wider font-bold flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5 text-[#38bdf8]" /> OEM / ODM 工厂
                      </span>
                      <span className="text-[10px] text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-1 py-0.2 rounded font-bold">
                        原厂直销
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mb-1 leading-tight">
                      东莞市超佳智能科技有限公司
                    </p>
                    <div className="flex flex-col gap-2 text-[11px] text-slate-300 border-t border-[#232832] pt-2">
                      <div className="p-2 bg-[#121620] rounded border border-[#232834] flex flex-col gap-1">
                        <span className="text-white font-bold">🛠️ 深度定制能力</span>
                        <span className="text-slate-400">· 齿轮轴/花键/安装孔开模与改制</span>
                        <span className="text-slate-400">· 固件定制：行程/死区/脉宽/总线协议</span>
                        <span className="text-slate-400">· 激光镭雕车手队标与品牌 LOGO</span>
                      </div>
                      <div className="p-2 bg-[#121620] rounded border border-[#232834] flex flex-col gap-1">
                        <span className="text-white font-bold">📐 技术文档支持</span>
                        <span className="text-slate-400">· 全系提供 2D/3D STEP CAD 图纸</span>
                        <span className="text-slate-400">· 完整电气参数曲线与应力测试报告</span>
                      </div>
                    </div>
                    <button
                      onClick={onOpenDistributor}
                      className="w-full mt-auto py-2 bg-[#ff525f] hover:bg-[#ff3b30] text-white text-xs font-bold rounded text-center transition-colors"
                    >
                      申请代理 / 索取技术规格书 →
                    </button>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#262a31] flex items-center justify-between text-slate-300 font-mono">
                  <div className="flex items-center gap-4 text-xs sm:text-[13px] text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                      Instant 2D/3D STEP CAD Available
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                      OEM Custom Shaft & Firmware Support
                    </span>
                  </div>
                  <button
                    onClick={onOpenDistributor}
                    className="text-white hover:text-[#38bdf8] font-bold flex items-center gap-1.5 transition-colors text-sm"
                  >
                    Request OEM / ODM Specsheet <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onNavigate?.('news');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`py-2 uppercase tracking-wider font-bold transition-colors ${
                currentView === 'news'
                  ? 'text-white border-b-2 border-[#38bdf8]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              NEWS
            </button>
            <button
              onClick={() => {
                onNavigate?.('service');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`py-2 uppercase tracking-wider font-bold transition-colors ${
                currentView === 'service'
                  ? 'text-white border-b-2 border-[#38bdf8]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              SERVICE
            </button>
            <button
              onClick={() => {
                onNavigate?.('downloads');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`py-2 uppercase tracking-wider font-bold transition-colors ${
                currentView === 'downloads'
                  ? 'text-white border-b-2 border-[#38bdf8]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              DOWNLOADS
            </button>
            <button
              onClick={() => {
                onNavigate?.('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`py-2 uppercase tracking-wider font-bold transition-colors ${
                currentView === 'about'
                  ? 'text-white border-b-2 border-[#38bdf8]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ABOUT
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenDistributor}
              className="inline-flex items-center px-4 py-2 bg-[#ff525f] hover:bg-[#38bdf8] hover:text-black text-white font-mono text-xs uppercase tracking-wider rounded font-bold transition-all shadow-md shadow-red-500/20"
            >
              FIND DEALERS / OEM
            </button>

            <button
              onClick={() => alert('CJSERVO Global B2B Partner Portal: Authorized dealer authentication')}
              className="w-8 h-8 rounded bg-[#262a31] hover:bg-[#31353c] text-white flex items-center justify-center transition-colors"
              title="Distributor Login"
            >
              <User className="w-4 h-4 text-slate-300" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141820] border-t border-[#262a31] px-6 py-5 space-y-3 font-mono text-[15px] uppercase">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate?.('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left py-2 text-white font-bold"
            >
              HOME
            </button>
            <div className="flex flex-col">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectCategory('all');
                  onNavigate?.('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`block w-full text-left py-2 font-bold ${currentView === 'products' ? 'text-[#38bdf8]' : 'text-slate-300 hover:text-white'}`}
              >
                PRODUCTS (15 MODELS)
              </button>
              <div className="pl-4 py-1 flex flex-col gap-1.5 text-xs text-slate-400 font-mono border-l border-[#262a31] ml-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSelectCategory('brushless-motor');
                    onNavigate?.('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left py-1 hover:text-[#38bdf8] flex items-center justify-between"
                >
                  <span>⚡ BRUSHLESS MOTOR</span>
                  <span className="text-[10px] text-[#38bdf8]">TS系列 (7款)</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSelectCategory('coreless-motor');
                    onNavigate?.('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left py-1 hover:text-[#38bdf8] flex items-center justify-between"
                >
                  <span>🚀 CORELESS MOTOR</span>
                  <span className="text-[10px] text-emerald-400">CJ系列 (2款)</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSelectCategory('brushed-iron-core');
                    onNavigate?.('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left py-1 hover:text-[#38bdf8] flex items-center justify-between"
                >
                  <span>🛡️ BRUSHED / IRON CORE</span>
                  <span className="text-[10px] text-amber-400">CJ系列 (6款)</span>
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate?.('news');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`block w-full text-left py-2 font-bold ${currentView === 'news' ? 'text-[#38bdf8]' : 'text-slate-300 hover:text-white'}`}
            >
              NEWS & RACE RESULTS
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate?.('service');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`block w-full text-left py-2 font-bold ${currentView === 'service' ? 'text-[#38bdf8]' : 'text-slate-300 hover:text-white'}`}
            >
              TECHNICAL SERVICE & RMA
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate?.('downloads');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`block w-full text-left py-2 font-bold ${currentView === 'downloads' ? 'text-[#38bdf8]' : 'text-slate-300 hover:text-white'}`}
            >
              DOWNLOADS & 3D CAD
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate?.('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`block w-full text-left py-2 font-bold ${currentView === 'about' ? 'text-[#38bdf8]' : 'text-slate-300 hover:text-white'}`}
            >
              ABOUT US & FACTORY ISO
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDistributor();
              }}
              className="w-full text-center py-2.5 bg-[#ff525f] text-white font-bold rounded mt-2"
            >
              APPLY FOR DISTRIBUTOR ACCOUNT
            </button>
          </div>
        )}

        {/* SEO Breadcrumb & Factory Telemetry Sub-Bar */}
        <div className="bg-[#0a0e14] border-t border-[#1c2026]">
          <div className="max-w-[1360px] mx-auto px-6 py-1.5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={() => {
                  onNavigate?.('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-slate-300 hover:text-[#38bdf8] transition-colors"
              >
                CJSERVO Portal
              </button>
              <span className="text-slate-600">/</span>
              <span className="text-white font-bold">
                {currentView === 'about' 
                  ? 'About Us & Factory ISO' 
                  : currentView === 'downloads'
                  ? 'Downloads & Technical Asset Repository'
                  : currentView === 'news'
                  ? 'News & Factory Field Media'
                  : currentView === 'products'
                  ? 'Product Lineup & Parametric Actuator Catalog'
                  : currentView === 'service'
                  ? 'Technical Service, Warranty & RMA Center'
                  : 'Home Showcase 2025'}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                FACTORY PRODUCTION STATUS: <strong className="text-white">NORMAL</strong>
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-[#ffb778]">IFMAR / EFRA COMPLIANT SPECIFICATION PLATFORMS</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
