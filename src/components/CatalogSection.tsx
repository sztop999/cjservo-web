import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Product, VoltageType } from '../types';
import { Box, FileText, SlidersHorizontal, Check } from 'lucide-react';

interface CatalogSectionProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenDatasheet: (product: Product) => void;
  onOpenCad: (product: Product) => void;
  voltage: VoltageType;
  setVoltage: (v: VoltageType) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenDatasheet,
  onOpenCad,
  voltage,
  setVoltage
}) => {
  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (p.category === selectedCategory) return true;
    if (selectedCategory === 'brushless-motor' && (p.category === 'brushless-motor' || p.category === 'hv-brushless' || p.motorType.toLowerCase().includes('brushless'))) return true;
    if (selectedCategory === 'coreless-motor' && (p.category === 'coreless-motor' || p.category === 'coreless-digital' || p.motorType.toLowerCase().includes('coreless'))) return true;
    if (selectedCategory === 'brushed-iron-core' && (p.category === 'brushed-iron-core' || p.motorType.toLowerCase().includes('iron core') || p.motorType.toLowerCase().includes('brushed'))) return true;
    if (selectedCategory === 'brushless' && (p.category === 'brushless-motor' || p.category === 'hv-brushless')) return true;
    if (selectedCategory === 'hv-brushless' && (p.category === 'brushless-motor' || p.category === 'hv-brushless')) return true;
    if (selectedCategory === 'high-voltage' && (p.category === 'brushless-motor' || p.category === 'hv-brushless' || p.waterproofRating.toLowerCase().includes('ip'))) return true;
    if (selectedCategory === 'digital-standard' && (p.category === 'coreless-motor' || p.category === 'coreless-digital')) return true;
    if (selectedCategory === 'coreless-digital' && (p.category === 'coreless-motor' || p.category === 'coreless-digital')) return true;
    if (selectedCategory === 'waterproof' && (p.waterproofRating.toLowerCase().includes('ip') || p.id === 'ts60' || p.id === 'ts70' || p.id === 'cj35kg' || p.id === 'cj60kg')) return true;
    if (selectedCategory === 'low-profile-micro' && (p.id === 'ts12' || p.id === 'ts15' || p.id === 'cj0009')) return true;
    if (selectedCategory === 'accessories-gyro') return true;
    return false;
  });

  return (
    <section className="w-full bg-[#0a0e14] py-20 border-b border-[#1c2026]" id="catalog-section">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header & Voltage Bench Switcher */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest block mb-1 font-bold">
                PARAMETRIC ACTUATOR SPECIFICATIONS & HARDWARE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
                Complete Product Lineup
              </h2>
            </div>

            {/* Interactive Voltage Bench */}
            <div className="flex items-center gap-1.5 bg-[#141820] p-1.5 rounded-lg font-mono text-xs border border-[#262a31]">
              <span className="text-slate-400 px-2 font-mono text-[11px]">VOLTAGE BENCH:</span>
              <button
                onClick={() => setVoltage('8.4V')}
                className={`px-3 py-1 rounded font-bold transition-all ${
                  voltage === '8.4V'
                    ? 'bg-[#1e232b] text-white border border-[#38bdf8]/60 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                8.4V LiPo
              </button>
              <button
                onClick={() => setVoltage('7.4V')}
                className={`px-3 py-1 rounded font-bold transition-all ${
                  voltage === '7.4V'
                    ? 'bg-[#1e232b] text-white border border-[#38bdf8]/60 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                7.4V LiPo
              </button>
              <button
                onClick={() => setVoltage('6.0V')}
                className={`px-3 py-1 rounded font-bold transition-all ${
                  voltage === '6.0V'
                    ? 'bg-[#1e232b] text-white border border-[#38bdf8]/60 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                6.0V NiMH
              </button>
            </div>
          </div>

          {/* Category Tabs Scrollbar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 font-mono text-xs scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded uppercase whitespace-nowrap transition-all font-bold ${
                  selectedCategory === cat.id
                    ? 'bg-[#181c22] text-white border border-[#38bdf8]/60 shadow'
                    : 'bg-[#10141a] text-slate-400 hover:text-white hover:bg-[#141820] border border-[#262a31]'
                }`}
              >
                {selectedCategory === cat.id && <span className="text-[#38bdf8] mr-1.5">●</span>}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Keyword quick badges */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-400 bg-[#141820]/60 p-2.5 rounded-lg border border-[#262a31]/60">
            <span className="text-[#38bdf8] font-bold">KEYWORD SPECS:</span>
            {[
              { label: 'TS无刷 8.4V (TS12~TS70 · 7款)', cat: 'brushless-motor' },
              { label: 'TS12 & TS15 矮机身12KG/15KG', cat: 'brushless-motor' },
              { label: 'TS27 竞赛旗舰 27KG 0.075s', cat: 'brushless-motor' },
              { label: 'TS60 & TS70 潜水IP68/70KG', cat: 'brushless-motor' },
              { label: 'CJ0005 空心杯 0.050s 极速', cat: 'coreless-motor' },
              { label: 'CJ0009 9g 超薄固定翼', cat: 'coreless-motor' },
              { label: 'CJ12KG ~ CJ60KG 铁芯工作母机 (6款)', cat: 'brushed-iron-core' },
              { label: 'CJ35KG / CJ45KG 1/5 淬火全钢齿', cat: 'brushed-iron-core' },
            ].map(k => (
              <button
                key={k.label}
                onClick={() => onSelectCategory(k.cat)}
                className="px-2 py-0.5 rounded bg-[#10141a] hover:bg-[#181c22] hover:text-[#38bdf8] border border-[#262a31] transition-colors"
              >
                {k.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const spec = product.specs[voltage] || product.specs['8.4V'];

            return (
              <div
                key={product.id}
                className="bg-[#141820] hover:bg-[#181c22] rounded-xl p-5 flex flex-col justify-between transition-all duration-300 border border-[#262a31] hover:border-[#38bdf8]/40 shadow-lg group"
              >
                <div className="flex flex-col gap-3">
                  {/* Image with Dynamic Badge */}
                  <div className="aspect-square w-full bg-[#0a0e14] rounded-lg overflow-hidden relative border border-[#262a31] flex items-center justify-center p-3">
                    <img
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                      alt={product.modelName}
                      src={product.image}
                    />
                    <div 
                      className="absolute top-2.5 right-2.5 bg-[#181c22] text-[#38bdf8] border border-[#38bdf8]/40 px-2 py-0.5 rounded font-mono text-[10px] font-bold"
                    >
                      {product.badgeLabel}
                    </div>
                  </div>

                  {/* Header text */}
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      {product.headline}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5 group-hover:text-[#38bdf8] transition-colors">
                      {product.modelName}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Dynamic Telemetry Matrix Table */}
                  <div className="bg-[#0a0e14] p-3 rounded-lg font-mono text-[11px] flex flex-col gap-1.5 border border-[#262a31]">
                    <div className="flex justify-between text-slate-400">
                      <span>Speed @ {voltage}:</span>
                      <span className="text-[#38bdf8] font-bold">{spec.speed}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Torque @ {voltage}:</span>
                      <span className="text-white font-bold">
                        {spec.torque} <span className="text-slate-500 text-[10px]">({spec.torqueOzIn})</span>
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Gears:</span>
                      <span className="text-slate-300 truncate max-w-[140px] text-right">{product.gears}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Dimensions:</span>
                      <span className="text-slate-300">{product.dimensions}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Weight:</span>
                      <span className="text-slate-300">{product.weight}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-4 pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onOpenDatasheet(product)}
                    className="flex-1 py-2 bg-[#181c22] hover:bg-[#ff525f] text-white hover:text-white transition-all font-mono text-xs uppercase rounded text-center font-bold border border-[#262a31] hover:border-transparent"
                  >
                    Full Datasheet
                  </button>
                  <button
                    onClick={() => onOpenCad(product)}
                    className="p-2 bg-[#181c22] hover:text-[#38bdf8] hover:bg-[#1e232b] text-slate-400 rounded transition-colors border border-[#262a31]"
                    title="Download 3D STEP CAD File"
                  >
                    <Box className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
