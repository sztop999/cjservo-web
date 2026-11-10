import React, { useState } from 'react';
import { DEALER_REGIONS } from '../data/news';
import { Handshake, ShieldCheck, Search, Phone, Mail, ExternalLink, Building, Check } from 'lucide-react';

interface DealerSectionProps {
  onOpenDistributor: () => void;
  onOpenSearch: () => void;
}

export const DealerSection: React.FC<DealerSectionProps> = ({ onOpenDistributor, onOpenSearch }) => {
  const [selectedRegionId, setSelectedRegionId] = useState('us');
  const [queryInput, setQueryInput] = useState('');
  const [queryResult, setQueryResult] = useState<string | null>(null);

  const currentRegion = DEALER_REGIONS.find((r) => r.id === selectedRegionId) || DEALER_REGIONS[0];

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryInput.trim()) return;
    setQueryResult(`Match confirmed: Part #${queryInput.toUpperCase()} is in stock across North America (Horizon / A-Main) and European fulfillment hubs.`);
  };

  return (
    <section className="w-full bg-[#0a0e14] py-20 border-b border-[#1c2026]" id="dealer-locator">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="bg-[#141820] rounded-2xl p-6 sm:p-10 border border-[#262a31] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#38bdf8] uppercase tracking-widest font-bold">
                <Handshake className="w-4 h-4 text-[#38bdf8]" />
                <span>WORLDWIDE WHOLESALE & OEM SOLUTIONS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
                Join the Global CJSERVO Distributor Network
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                We partner with premier hobby distributors, national RC racing teams, commercial drone manufacturers, and industrial automation enterprises across 60+ countries. Direct OEM/ODM engineering support available from Dongguan Chaojia Intelligent Technology Co., Ltd.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenDistributor}
                  className="px-6 py-3 bg-[#ff525f] hover:bg-[#ff3b30] text-white font-mono text-xs uppercase tracking-wider rounded font-bold transition-all flex items-center gap-2 shadow-lg shadow-red-500/20"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Apply for Distributor Account</span>
                </button>

                <button
                  onClick={onOpenDistributor}
                  className="px-5 py-3 bg-[#181c22] hover:bg-[#262a31] text-white font-mono text-xs uppercase tracking-wider rounded border border-[#262a31] transition-colors flex items-center gap-2"
                >
                  <Building className="w-4 h-4 text-[#38bdf8]" />
                  <span>Custom OEM Inquiries</span>
                </button>
              </div>
            </div>

            {/* Right Fast-Lookup & Territory Preview Card */}
            <div className="lg:col-span-5 bg-[#0a0e14] p-5 rounded-xl border border-[#262a31] flex flex-col gap-4 shadow-xl">
              <span className="font-mono text-xs text-[#38bdf8] uppercase font-bold tracking-wider">
                FIND AUTHORIZED DEALER IN YOUR TERRITORY
              </span>

              {/* Territory Selector */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-slate-400 uppercase">
                  Select Country / Region
                </label>
                <select
                  value={selectedRegionId}
                  onChange={(e) => {
                    setSelectedRegionId(e.target.value);
                    setQueryResult(null);
                  }}
                  className="w-full bg-[#141820] border border-[#262a31] p-2.5 rounded text-white font-mono text-xs focus:outline-none focus:border-[#38bdf8]"
                >
                  {DEALER_REGIONS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.regionName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dynamic Territory Dealer List */}
              <div className="bg-[#141820] p-3 rounded border border-[#262a31] space-y-2 text-xs font-mono">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                  Regional Master Contacts ({currentRegion.distributors.length})
                </span>
                {currentRegion.distributors.map((dist, idx) => (
                  <div key={idx} className="pb-2 border-b border-[#262a31] last:border-0 last:pb-0">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">{dist.name}</span>
                      <span className="text-[10px] text-[#38bdf8] bg-[#1e232b] px-1.5 py-0.5 rounded">
                        {dist.type}
                      </span>
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5">{dist.contact}</div>
                  </div>
                ))}
              </div>

              {/* Model Quick Query */}
              <form onSubmit={handleLookup} className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-slate-400 uppercase">
                  Part # or Product Model Quick Query
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="e.g. TS15, TS70, CJ35KG..."
                    value={queryInput}
                    onChange={(e) => setQueryInput(e.target.value)}
                    className="w-full bg-[#141820] border border-[#262a31] p-2 rounded text-white placeholder:text-slate-600 font-mono text-xs focus:outline-none focus:border-[#38bdf8]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#262a31] hover:bg-[#38bdf8] hover:text-black text-white rounded font-mono text-xs uppercase font-bold transition-colors border border-[#262a31] whitespace-nowrap"
                  >
                    Lookup
                  </button>
                </div>
                {queryResult && (
                  <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded mt-1 flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{queryResult}</span>
                  </div>
                )}
              </form>

              {/* Factory Direct Hotline & Tech Desk */}
              <div className="mt-1 pt-3 bg-[#141820] p-3 rounded font-mono text-xs flex flex-col gap-1.5 border border-[#262a31]">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">FACTORY HOTLINE:</span>
                  <a href="tel:1388888888" className="text-white font-bold hover:text-[#38bdf8] transition-colors">
                    1388888888
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">TECH DIRECT:</span>
                  <a href="mailto:info@Cjservo.com" className="text-[#38bdf8] font-bold hover:text-white transition-colors">
                    info@Cjservo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
