import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { DISCIPLINES } from '../data/disciplines';
import { Search, X, ChevronRight, Zap } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectDiscipline: (category: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectDiscipline
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    const searchable = `${p.modelName} ${p.headline} ${p.description} ${p.gears} ${p.spline} ${p.motorType} ${p.waterproofRating} ${p.category} ${p.features.join(' ')} ${p.specs['8.4V']?.torque || ''}`.toLowerCase();
    if (searchable.includes(q)) return true;
    const tokens = q.split(/[\s/•,.-]+/).filter(Boolean);
    return tokens.length > 0 && tokens.every(t => searchable.includes(t));
  });

  const filteredDisciplines = DISCIPLINES.filter((d) =>
    d.title.toLowerCase().includes(query.toLowerCase()) ||
    d.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    d.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl bg-[#141820] border border-[#262a31] rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 bg-[#181c22] border-b border-[#262a31] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#38bdf8]" />
          <input
            type="text"
            autoFocus
            placeholder="Search part #, keyword (e.g. HV brushless, 0.06s, waterproof, drift, gyro, 25T horn)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder:text-slate-400 font-mono text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 bg-[#262a31] hover:bg-[#31353c] text-slate-300 rounded text-xs font-mono"
          >
            ESC
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          {/* Quick tags */}
          {!query && (
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Suggested Industry Keywords:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'HV Brushless Servo',
                  'High Speed 0.06s',
                  'IP67 Waterproof Servo',
                  'Low Profile Drift 1/10',
                  'Thin Wing Glider',
                  'RC Drift Gyro V4',
                  '25T Clamping Horn',
                  'USB Programmer Box'
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="px-2.5 py-1 bg-[#10141a] hover:bg-[#262a31] border border-[#262a31] text-xs font-mono text-slate-300 rounded transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Product Results */}
          <div>
            <div className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Matching Actuators ({filteredProducts.length})</span>
              <span className="text-slate-500 text-[10px]">Click to view complete engineering datasheet</span>
            </div>
            {filteredProducts.length === 0 ? (
              <div className="text-xs text-slate-500 py-3 text-center font-mono">
                No matching product found. Try searching for torque or voltage.
              </div>
            ) : (
              <div className="space-y-2">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="p-3 bg-[#10141a] hover:bg-[#1c2026] border border-[#262a31] hover:border-[#38bdf8]/50 rounded-lg flex items-center justify-between cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.modelName}
                        className="w-12 h-12 object-contain bg-[#141820] p-1 rounded"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm group-hover:text-[#38bdf8] transition-colors">
                            {p.modelName}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 bg-[#262a31] text-[#38bdf8] rounded font-mono">
                            {p.specs['8.4V'].torque}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1">{p.headline} • {p.gears}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#38bdf8] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Disciplines match */}
          {filteredDisciplines.length > 0 && (
            <div>
              <div className="text-[11px] font-mono text-[#ffb778] uppercase tracking-wider mb-2">
                Application Disciplines ({filteredDisciplines.length})
              </div>
              <div className="grid grid-cols-2 gap-2">
                {filteredDisciplines.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      onSelectDiscipline(d.targetCategory);
                      onClose();
                    }}
                    className="p-2.5 bg-[#10141a] hover:bg-[#1c2026] border border-[#262a31] rounded text-left flex items-center justify-between group"
                  >
                    <div>
                      <span className="font-bold text-xs text-white group-hover:text-[#ffb778] block">
                        {d.title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{d.torqueSpectrum}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#ffb778]" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-3 bg-[#181c22] border-t border-[#262a31] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Search index includes all 140+ IFMAR & Industrial Actuators</span>
          <span>Fast Parametric Filter</span>
        </div>
      </div>
    </div>
  );
};
