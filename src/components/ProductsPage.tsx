import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Box, 
  FileText, 
  Layers, 
  ArrowRight, 
  Check, 
  Download, 
  Sparkles,
  ArrowUpDown,
  X,
  Scale,
  Gauge,
  Flame,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { Product, VoltageType } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/products';

interface ProductsPageProps {
  onNavigateHome: () => void;
  onOpenDatasheet: (product: Product) => void;
  onOpenCad: (product: Product) => void;
  onOpenDistributor: () => void;
  onOpenPdfCatalog: () => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedVoltage: VoltageType;
  setSelectedVoltage: (v: VoltageType) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigateHome,
  onOpenDatasheet,
  onOpenCad,
  onOpenDistributor,
  onOpenPdfCatalog,
  selectedCategory,
  onSelectCategory,
  selectedVoltage,
  setSelectedVoltage
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'torque-desc' | 'speed-asc' | 'weight-asc'>('torque-desc');
  const [filterWaterproofOnly, setFilterWaterproofOnly] = useState(false);
  const [filterTitaniumOnly, setFilterTitaniumOnly] = useState(false);
  const [filterBrushlessOnly, setFilterBrushlessOnly] = useState(false);
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);
  const [isCompareDrawerOpen, setIsCompareDrawerOpen] = useState(false);

  // Toggle compare checkbox
  const handleToggleCompare = (product: Product) => {
    if (comparedProducts.some((p) => p.id === product.id)) {
      setComparedProducts(comparedProducts.filter((p) => p.id !== product.id));
    } else {
      if (comparedProducts.length >= 4) {
        alert('You can compare a maximum of 4 servos simultaneously.');
        return;
      }
      const updated = [...comparedProducts, product];
      setComparedProducts(updated);
      setIsCompareDrawerOpen(true);
    }
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter with comprehensive alias matching
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        if (selectedCategory === 'brushless-motor' && (item.category === 'brushless-motor' || item.category === 'hv-brushless' || item.motorType.toLowerCase().includes('brushless'))) return true;
        if (selectedCategory === 'coreless-motor' && (item.category === 'coreless-motor' || item.category === 'coreless-digital' || item.motorType.toLowerCase().includes('coreless'))) return true;
        if (selectedCategory === 'brushed-iron-core' && (item.category === 'brushed-iron-core' || item.motorType.toLowerCase().includes('iron core') || item.motorType.toLowerCase().includes('brushed'))) return true;
        if (selectedCategory === 'brushless' && (item.category === 'brushless-motor' || item.category === 'hv-brushless')) return true;
        if (selectedCategory === 'hv-brushless' && (item.category === 'brushless-motor' || item.category === 'hv-brushless')) return true;
        if (selectedCategory === 'high-voltage' && (item.category === 'brushless-motor' || item.category === 'hv-brushless' || item.waterproofRating.toLowerCase().includes('ip'))) return true;
        if (selectedCategory === 'digital-standard' && (item.category === 'coreless-motor' || item.category === 'coreless-digital')) return true;
        if (selectedCategory === 'coreless-digital' && (item.category === 'coreless-motor' || item.category === 'coreless-digital')) return true;
        if (selectedCategory === 'waterproof' && (item.waterproofRating.toLowerCase().includes('ip') || item.id === 'ts60' || item.id === 'ts70' || item.id === 'cj35kg' || item.id === 'cj60kg')) return true;
        if (selectedCategory === 'low-profile-micro' && (item.id === 'ts12' || item.id === 'ts15' || item.id === 'cj0009')) return true;
        if (selectedCategory === 'accessories-gyro') return true;
        return false;
      }
      // Waterproof filter
      if (filterWaterproofOnly && !item.waterproofRating.toLowerCase().includes('ip')) {
        return false;
      }
      // Titanium gear filter
      if (filterTitaniumOnly && !item.gears.toLowerCase().includes('titanium')) {
        return false;
      }
      // Brushless motor filter
      if (filterBrushlessOnly && !item.motorType.toLowerCase().includes('brushless')) {
        return false;
      }
      // Search query supporting exact phrases and token combinations
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const searchable = `${item.modelName} ${item.headline} ${item.description} ${item.features.join(' ')} ${item.gears} ${item.spline} ${item.category} ${item.motorType} ${item.waterproofRating} ${item.hornType}`.toLowerCase();
        if (searchable.includes(query)) return true;
        const tokens = query.split(/[\s/•,.-]+/).filter(Boolean);
        return tokens.length > 0 && tokens.every(token => searchable.includes(token));
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') {
        return a.modelName.localeCompare(b.modelName);
      }
      if (sortBy === 'torque-desc') {
        const torqueA = parseFloat(a.specs[selectedVoltage]?.torque || '0');
        const torqueB = parseFloat(b.specs[selectedVoltage]?.torque || '0');
        return torqueB - torqueA;
      }
      if (sortBy === 'speed-asc') {
        const speedA = parseFloat(a.specs[selectedVoltage]?.speed || '99');
        const speedB = parseFloat(b.specs[selectedVoltage]?.speed || '99');
        return speedA - speedB;
      }
      if (sortBy === 'weight-asc') {
        const weightA = parseFloat(a.weight || '999');
        const weightB = parseFloat(b.weight || '999');
        return weightA - weightB;
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy, filterWaterproofOnly, filterTitaniumOnly, filterBrushlessOnly, selectedVoltage]);

  return (
    <div className="w-full bg-[#10141a] pt-32 pb-24 text-white">
      {/* Top Breadcrumb & Hero */}
      <div className="max-w-[1360px] mx-auto px-6 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#38bdf8] transition-colors"
          >
            HOME
          </button>
          <span>/</span>
          <span className="text-white font-bold">PRODUCTS PORTFOLIO</span>
          <span>/</span>
          <span className="text-[#38bdf8] uppercase">
            {CATEGORIES.find(c => c.id === selectedCategory)?.name || 'All Models'}
          </span>
        </div>

        <div className="relative bg-[#141820] rounded-2xl p-8 sm:p-12 border border-[#262a31] overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#ff525f]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10141a] border border-[#38bdf8]/30 rounded-full text-[#38bdf8] text-xs font-mono font-bold tracking-wider uppercase">
                <Cpu className="w-3.5 h-3.5" />
                <span>DONGGUAN CHAOJIA INTELLIGENT TECHNOLOGY CO., LTD</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
                Precision Digital Servos & Actuator Lineup
              </h1>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Explore our championship-grade competition servos, sub-millisecond digital contactless actuators, and titanium gear train platforms engineered for IFMAR racing, robotics automation, and UAV aerospace.
              </p>

              {/* Quick Telemetry Tags */}
              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-1.5 bg-[#10141a] px-3 py-1.5 rounded border border-[#262a31]">
                  <Gauge className="w-4 h-4 text-[#38bdf8]" />
                  <span>MODELS: <strong className="text-white">15 FLAGSHIP MODELS</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#10141a] px-3 py-1.5 rounded border border-[#262a31]">
                  <Zap className="w-4 h-4 text-[#ff525f]" />
                  <span>PEAK TORQUE: <strong className="text-white">70.0 KG-CM</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#10141a] px-3 py-1.5 rounded border border-[#262a31]">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>CASING: <strong className="text-white">CNC 7075-T6 BILLET</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
              <button
                onClick={onOpenPdfCatalog}
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#10141a] font-mono text-xs uppercase font-bold rounded-lg transition-all shadow-lg shadow-sky-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download 2025 Spec PDF</span>
              </button>

              <button
                onClick={onOpenDistributor}
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#10141a] hover:bg-[#1a202c] text-white border border-[#262a31] hover:border-[#38bdf8]/50 font-mono text-xs uppercase font-bold rounded-lg transition-all"
              >
                <span>Request B2B Wholesale Pricing</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Controls Bar */}
      <div className="max-w-[1360px] mx-auto px-6 mb-8">
        <div className="bg-[#141820] rounded-xl p-5 border border-[#262a31] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 shadow-xl">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by part number (e.g. TS12, TS27, TS70, CJ0005, CJ35KG), torque, or motor type..."
              className="w-full bg-[#10141a] border border-[#262a31] rounded-lg pl-10 pr-4 py-2.5 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Voltage Benchmark Switcher */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <Zap className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span className="hidden sm:inline">BENCH VOLTAGE:</span>
            </div>
            <div className="flex bg-[#10141a] p-1 rounded-lg border border-[#262a31]">
              {(['8.4V', '7.4V', '6.0V'] as VoltageType[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedVoltage(v)}
                  className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all ${
                    selectedVoltage === v
                      ? 'bg-[#38bdf8] text-[#10141a] shadow-md shadow-sky-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {v} {v === '8.4V' && '(HV)'}
                </button>
              ))}
            </div>
          </div>

          {/* Sort selection */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#10141a] border border-[#262a31] text-white text-xs font-mono rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#38bdf8] cursor-pointer"
            >
              <option value="torque-desc">Highest Torque First</option>
              <option value="speed-asc">Fastest Transit Speed</option>
              <option value="weight-asc">Lightest Weight First</option>
              <option value="name">Model Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Filter Quick Checkboxes */}
        <div className="flex flex-wrap items-center gap-4 mt-4 font-mono text-xs">
          <span className="text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3 text-[#38bdf8]" /> Quick Specs:
          </span>
          <button
            onClick={() => setFilterWaterproofOnly(!filterWaterproofOnly)}
            className={`px-3 py-1 rounded border transition-colors flex items-center gap-1.5 ${
              filterWaterproofOnly
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                : 'bg-[#141820] border-[#262a31] text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            <span>IP67 / IP68 Submersible</span>
          </button>

          <button
            onClick={() => setFilterTitaniumOnly(!filterTitaniumOnly)}
            className={`px-3 py-1 rounded border transition-colors flex items-center gap-1.5 ${
              filterTitaniumOnly
                ? 'bg-[#38bdf8]/20 border-[#38bdf8] text-[#38bdf8]'
                : 'bg-[#141820] border-[#262a31] text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>Titanium Gear Trains</span>
          </button>

          <button
            onClick={() => setFilterBrushlessOnly(!filterBrushlessOnly)}
            className={`px-3 py-1 rounded border transition-colors flex items-center gap-1.5 ${
              filterBrushlessOnly
                ? 'bg-[#ff525f]/20 border-[#ff525f] text-[#ff8089]'
                : 'bg-[#141820] border-[#262a31] text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="w-3 h-3" />
            <span>Brushless 4-Pole Motor</span>
          </button>

          {(filterWaterproofOnly || filterTitaniumOnly || filterBrushlessOnly || searchQuery) && (
            <button
              onClick={() => {
                setFilterWaterproofOnly(false);
                setFilterTitaniumOnly(false);
                setFilterBrushlessOnly(false);
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="text-[#ff525f] hover:underline ml-auto flex items-center gap-1"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="max-w-[1360px] mx-auto px-6 mb-4 overflow-x-auto scrollbar-thin">
        <div className="flex items-center gap-2 pb-2 min-w-max">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase font-bold tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#ff525f] text-white shadow-lg shadow-red-500/20'
                  : 'bg-[#141820] text-slate-400 hover:text-white hover:bg-[#1a202c] border border-[#262a31]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Industry Keyword Taxonomy / Quick Tags */}
      <div className="max-w-[1360px] mx-auto px-6 mb-8">
        <div className="bg-[#141820]/90 rounded-xl p-4 border border-[#262a31] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#262a31]/60 pb-2.5">
            <div className="flex items-center gap-2 font-mono text-xs text-[#38bdf8] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>INDUSTRY ACTUATOR KEYWORDS & SPEC TAGS</span>
            </div>
            {searchQuery && (
              <span className="text-[11px] font-mono text-slate-400">
                Active Filter: <strong className="text-[#38bdf8]">"{searchQuery}"</strong>
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-2 text-[#ff525f] hover:underline"
                >
                  Clear
                </button>
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
            {[
              { label: 'HV Brushless Servo', cat: 'hv-brushless' },
              { label: '8.4V brushless RC servo', cat: 'hv-brushless' },
              { label: 'High torque brushless servo 25T', cat: 'hv-brushless' },
              { label: 'Programmable brushless servo', cat: 'hv-brushless' },
              { label: 'Full CNC aluminum case brushless servo', cat: 'hv-brushless' },
              { label: 'Digital RC Servo', cat: 'coreless-digital' },
              { label: 'Coreless Motor Servo', cat: 'coreless-digital' },
              { label: 'Metal Gear Digital Servo', cat: 'coreless-digital' },
              { label: 'High speed digital servo 0.06s', cat: 'coreless-digital' },
              { label: 'Titanium gear coreless servo', cat: 'coreless-digital' },
              { label: 'Steel gear digital servo', cat: 'coreless-digital' },
              { label: 'Waterproof RC Servo', cat: 'waterproof' },
              { label: 'IP67 Waterproof Servo', cat: 'waterproof' },
              { label: 'Submarine / Boat Servo', cat: 'waterproof' },
              { label: 'Waterproof steering servo for crawler', cat: 'waterproof' },
              { label: 'Submersible RC servo IP67', cat: 'waterproof' },
              { label: 'High torque waterproof servo 40kg', cat: 'waterproof' },
              { label: 'Low Profile RC Servo', cat: 'low-profile-micro' },
              { label: 'Micro RC Servo', cat: 'low-profile-micro' },
              { label: 'Sub-Micro Servo', cat: 'low-profile-micro' },
              { label: 'Low profile drift servo 1/10', cat: 'low-profile-micro' },
              { label: 'Mini metal gear servo 9g / 12g / 17g', cat: 'low-profile-micro' },
              { label: 'Thin wing servo for RC glider', cat: 'low-profile-micro' },
              { label: 'RC Drift Gyro', cat: 'accessories-gyro' },
              { label: 'Aluminum Servo Horn', cat: 'accessories-gyro' },
              { label: '25T aluminum clamping servo horn', cat: 'accessories-gyro' },
              { label: 'RC car steering gyro V4', cat: 'accessories-gyro' },
              { label: 'USB servo programmer card / box', cat: 'accessories-gyro' },
            ].map((item) => {
              const isSelected = searchQuery.toLowerCase() === item.label.toLowerCase();
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    if (isSelected) {
                      setSearchQuery('');
                    } else {
                      setSearchQuery(item.label);
                      onSelectCategory('all');
                    }
                  }}
                  className={`px-2.5 py-1 rounded transition-all border ${
                    isSelected
                      ? 'bg-[#38bdf8] text-[#10141a] border-[#38bdf8] font-bold shadow-md shadow-sky-500/20'
                      : 'bg-[#10141a] text-slate-300 hover:text-white hover:border-[#38bdf8]/50 border-[#262a31]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Results Grid */}
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="flex items-center justify-between mb-4 font-mono text-xs text-slate-400">
          <span>SHOWING {filteredProducts.length} ACTUATOR MODELS // BENCHMARK: <strong className="text-white">{selectedVoltage}</strong></span>
          {comparedProducts.length > 0 && (
            <button
              onClick={() => setIsCompareDrawerOpen(true)}
              className="text-[#38bdf8] hover:underline flex items-center gap-1.5 font-bold"
            >
              <Scale className="w-4 h-4" />
              <span>Comparing ({comparedProducts.length}) Servos</span>
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-[#141820] rounded-xl p-16 text-center border border-[#262a31]">
            <Cpu className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">No Matching Actuators Found</h3>
            <p className="text-slate-400 text-xs font-mono max-w-md mx-auto mb-6">
              No products found matching your current search parameters. Try clearing your filters or browsing all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterWaterproofOnly(false);
                setFilterTitaniumOnly(false);
                setFilterBrushlessOnly(false);
                onSelectCategory('all');
              }}
              className="px-6 py-2.5 bg-[#38bdf8] text-[#10141a] font-mono text-xs font-bold rounded"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const currentSpec = product.specs[selectedVoltage] || product.specs['8.4V'];
              const isCompared = comparedProducts.some((p) => p.id === product.id);

              return (
                <div
                  key={product.id}
                  className="bg-[#141820] hover:bg-[#181c22] rounded-xl border border-[#262a31] hover:border-[#38bdf8]/50 flex flex-col transition-all duration-300 shadow-xl group overflow-hidden"
                >
                  {/* Top Bar with Badge and Compare Button */}
                  <div className="p-4 border-b border-[#262a31] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#10141a] text-[#38bdf8] border border-[#262a31]">
                        {product.badgeLabel}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500 uppercase">
                        {product.spline}
                      </span>
                    </div>

                    <button
                      onClick={() => handleToggleCompare(product)}
                      className={`flex items-center gap-1.5 font-mono text-[11px] px-2 py-0.5 rounded border transition-colors ${
                        isCompared
                          ? 'bg-[#38bdf8]/20 border-[#38bdf8] text-[#38bdf8]'
                          : 'bg-[#10141a] border-[#262a31] text-slate-400 hover:text-white'
                      }`}
                    >
                      <Scale className="w-3 h-3" />
                      <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                    </button>
                  </div>

                  {/* Product Image Stage */}
                  <div className="relative aspect-video bg-[#0c1016] flex items-center justify-center p-6 group-hover:bg-[#0a0e14] transition-colors">
                    <img
                      src={product.image}
                      alt={product.modelName}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 left-3 font-mono text-[10px] text-slate-500 bg-[#10141a]/80 px-2 py-0.5 rounded border border-[#262a31]">
                      {product.dimensions}
                    </div>
                    <div className="absolute bottom-2 right-3 font-mono text-[10px] text-slate-400 bg-[#10141a]/80 px-2 py-0.5 rounded border border-[#262a31]">
                      {product.weight}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-[11px] font-mono text-[#ff525f] font-bold uppercase tracking-wider mb-1">
                        {product.headline}
                      </div>
                      <h3 className="text-xl font-black text-white group-hover:text-[#38bdf8] transition-colors font-mono">
                        {product.modelName}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed mt-1.5 line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Spec Readout Table @ Selected Voltage */}
                    <div className="bg-[#10141a] rounded-lg p-3 border border-[#262a31] font-mono text-xs">
                      <div className="flex items-center justify-between pb-1.5 border-b border-[#262a31]/60">
                        <span className="text-slate-400">Torque @ {selectedVoltage}:</span>
                        <span className="text-white font-bold">{currentSpec.torque}</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-b border-[#262a31]/60">
                        <span className="text-slate-400">Transit Speed:</span>
                        <span className="text-[#38bdf8] font-bold">{currentSpec.speed}</span>
                      </div>
                      <div className="flex items-center justify-between pt-1.5">
                        <span className="text-slate-400">Gear Assembly:</span>
                        <span className="text-slate-300 truncate max-w-[160px] text-right">{product.gears}</span>
                      </div>
                    </div>

                    {/* Key feature pills */}
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      <span className="bg-[#1a202c] text-slate-300 px-2 py-0.5 rounded border border-[#262a31]">
                        {product.waterproofRating}
                      </span>
                      <span className="bg-[#1a202c] text-slate-300 px-2 py-0.5 rounded border border-[#262a31]">
                        {product.deadband} Deadband
                      </span>
                      <span className="bg-[#1a202c] text-slate-300 px-2 py-0.5 rounded border border-[#262a31]">
                        {product.operatingFrequency}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        onClick={() => onOpenDatasheet(product)}
                        className="flex items-center justify-center gap-1.5 py-2.5 bg-[#1a202c] hover:bg-[#262e3d] text-white border border-[#262a31] rounded font-mono text-xs font-bold transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>Datasheet</span>
                      </button>

                      <button
                        onClick={() => onOpenCad(product)}
                        className="flex items-center justify-center gap-1.5 py-2.5 bg-[#10141a] hover:bg-[#38bdf8] hover:text-[#10141a] text-slate-300 border border-[#262a31] rounded font-mono text-xs font-bold transition-colors group/cad"
                      >
                        <Box className="w-3.5 h-3.5 text-[#38bdf8] group-hover/cad:text-[#10141a]" />
                        <span>3D STEP</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Side-by-Side Comparison Modal / Drawer */}
      {isCompareDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-[#141820] rounded-2xl border border-[#262a31] w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-[#262a31] flex items-center justify-between bg-[#10141a]">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#38bdf8]" />
                <h3 className="font-mono text-base font-bold text-white uppercase tracking-wider">
                  Actuator Spec Matrix Comparison ({comparedProducts.length}/4)
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setComparedProducts([])}
                  className="font-mono text-xs text-slate-400 hover:text-[#ff525f]"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsCompareDrawerOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#1a202c]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {comparedProducts.length === 0 ? (
              <div className="p-12 text-center text-slate-400 font-mono text-xs">
                Select at least one servo to compare specs.
              </div>
            ) : (
              <div className="p-6 overflow-x-auto overflow-y-auto flex-1 font-mono text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#262a31]">
                      <th className="py-3 px-4 text-slate-500 uppercase tracking-wider w-40">Parameter</th>
                      {comparedProducts.map((p) => (
                        <th key={p.id} className="py-3 px-4 text-white font-bold min-w-[200px]">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-[#38bdf8]">{p.modelName}</span>
                            <button
                              onClick={() => handleToggleCompare(p)}
                              className="text-slate-500 hover:text-[#ff525f]"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <img src={p.image} alt={p.modelName} className="h-20 w-auto object-contain mx-auto my-2" />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#262a31]/60">
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400 font-medium">Torque @ {selectedVoltage}</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="py-2.5 px-4 text-white font-bold">
                          {p.specs[selectedVoltage]?.torque || p.specs['8.4V'].torque}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400 font-medium">Speed @ {selectedVoltage}</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="py-2.5 px-4 text-[#38bdf8] font-bold">
                          {p.specs[selectedVoltage]?.speed || p.specs['8.4V'].speed}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400 font-medium">Gear Assembly</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="py-2.5 px-4 text-slate-300">{p.gears}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400 font-medium">Dimensions</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="py-2.5 px-4 text-slate-300">{p.dimensions}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400 font-medium">Total Weight</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="py-2.5 px-4 text-slate-300">{p.weight}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400 font-medium">Waterproof Rating</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="py-2.5 px-4 text-emerald-400 font-bold">{p.waterproofRating}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400 font-medium">Motor Type</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="py-2.5 px-4 text-slate-300">{p.motorType}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400 font-medium">Deadband & Spline</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="py-2.5 px-4 text-slate-300">{p.deadband} / {p.spline}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400 font-medium">Stall Current @ {selectedVoltage}</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="py-2.5 px-4 text-slate-300">{p.specs[selectedVoltage]?.stallCurrent || 'N/A'}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            
            <div className="p-4 bg-[#10141a] border-t border-[#262a31] flex justify-end">
              <button
                onClick={() => setIsCompareDrawerOpen(false)}
                className="px-5 py-2 bg-[#262a31] hover:bg-[#343b46] text-white font-mono text-xs font-bold rounded"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
