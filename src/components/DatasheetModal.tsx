import React from 'react';
import { Product, VoltageType } from '../types';
import { X, Download, Printer, Cpu, ShieldCheck, Zap, Activity } from 'lucide-react';

interface DatasheetModalProps {
  product: Product | null;
  selectedVoltage: VoltageType;
  onClose: () => void;
}

export const DatasheetModal: React.FC<DatasheetModalProps> = ({
  product,
  selectedVoltage,
  onClose
}) => {
  if (!product) return null;

  const currentSpec = product.specs[selectedVoltage] || product.specs['8.4V'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#141820] border border-[#262a31] rounded-xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#181c22] border-b border-[#262a31] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-pulse"></span>
            <div>
              <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider block">
                ENGINEERING DATASHEET SPECIFICATION
              </span>
              <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
                {product.modelName}
                <span className="text-xs px-2 py-0.5 rounded bg-[#262a31] text-[#38bdf8] font-mono">
                  REV 2.5
                </span>
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-[#262a31] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Top Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#10141a] p-4 rounded-lg border border-[#262a31] flex flex-col items-center justify-center">
              <img
                src={product.image}
                alt={product.modelName}
                className="max-h-44 object-contain drop-shadow-xl"
              />
              <span className="mt-3 text-xs font-mono text-slate-400">
                P/N: CJ-{product.modelName.replace(/\s+/g, '-')}
              </span>
            </div>

            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs bg-[#262a31] text-[#38bdf8] font-bold rounded">
                  {product.headline}
                </span>
                <span className="px-2 py-0.5 text-xs bg-[#262a31] text-[#ffb778] font-bold rounded">
                  {product.waterproofRating}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Voltage benchmark matrix */}
              <div className="bg-[#10141a] p-3 rounded-lg border border-[#262a31]">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Parametric Performance Across Standard Operating Voltages:
                </span>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono text-center">
                  {(['8.4V', '7.4V', '6.0V'] as VoltageType[]).map((v) => (
                    <div
                      key={v}
                      className={`p-2 rounded border ${
                        selectedVoltage === v
                          ? 'border-[#38bdf8] bg-[#38bdf8]/10 text-white'
                          : 'border-[#262a31] bg-[#181c22] text-slate-400'
                      }`}
                    >
                      <div className="font-bold text-[#38bdf8] mb-1">{v} LiPo</div>
                      <div>{product.specs[v].speed}</div>
                      <div className="text-white font-bold">{product.specs[v].torque}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mechanical & Electrical Specifications Table */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-3 flex items-center gap-1.5 font-bold">
              <Cpu className="w-4 h-4" /> Comprehensive Technical Characteristics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#10141a] rounded-lg border border-[#262a31] overflow-hidden">
                <div className="px-4 py-2 bg-[#181c22] border-b border-[#262a31] font-mono text-xs text-white font-bold">
                  MECHANICAL PARAMETERS
                </div>
                <div className="divide-y divide-[#262a31] text-xs font-mono">
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Dimensions (L x W x H):</span>
                    <span className="text-white">{product.dimensions}</span>
                  </div>
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Total Net Weight:</span>
                    <span className="text-white">{product.weight}</span>
                  </div>
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Gear Train Material:</span>
                    <span className="text-[#ffb778]">{product.gears}</span>
                  </div>
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Spline Specification:</span>
                    <span className="text-white">{product.spline}</span>
                  </div>
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Bearing Arrangement:</span>
                    <span className="text-white">{product.bearingType}</span>
                  </div>
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Horn Inclusion:</span>
                    <span className="text-white">{product.hornType}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#10141a] rounded-lg border border-[#262a31] overflow-hidden">
                <div className="px-4 py-2 bg-[#181c22] border-b border-[#262a31] font-mono text-xs text-white font-bold">
                  ELECTRICAL & CONTROL PARAMETERS
                </div>
                <div className="divide-y divide-[#262a31] text-xs font-mono">
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Operating Voltage Range:</span>
                    <span className="text-white">{product.workingVoltage}</span>
                  </div>
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Motor Core Type:</span>
                    <span className="text-white">{product.motorType}</span>
                  </div>
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Stall Current Draw:</span>
                    <span className="text-[#ff525f] font-bold">{currentSpec.stallCurrent}</span>
                  </div>
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Idle Quiescent Current:</span>
                    <span className="text-white">{currentSpec.idleCurrent}</span>
                  </div>
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Deadband Resolution:</span>
                    <span className="text-[#38bdf8]">{product.deadband}</span>
                  </div>
                  <div className="px-4 py-2 flex justify-between">
                    <span className="text-slate-400">Signal Frequency:</span>
                    <span className="text-white">{product.operatingFrequency}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wiring Pinout Schematic Diagram */}
          <div className="bg-[#10141a] p-4 rounded-lg border border-[#262a31]">
            <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider block mb-2 font-bold flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> Standard JR / Futaba 3-Wire Interface Pinout
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 p-2 bg-[#181c22] rounded border border-orange-500/20">
                <span className="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0"></span>
                <div>
                  <span className="text-white font-bold">PIN 1: SIGNAL (PWM)</span>
                  <p className="text-[10px] text-slate-400">Pulse 760µs / 1520µs, 3.3V-5V TTL</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#181c22] rounded border border-red-500/20">
                <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></span>
                <div>
                  <span className="text-white font-bold">PIN 2: VCC (POWER)</span>
                  <p className="text-[10px] text-slate-400">Direct 6.0V ~ 8.4V DC Input Rail</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#181c22] rounded border border-slate-500/20">
                <span className="w-3 h-3 rounded-full bg-slate-600 flex-shrink-0"></span>
                <div>
                  <span className="text-white font-bold">PIN 3: GROUND (GND)</span>
                  <p className="text-[10px] text-slate-400">System Common Ground Reference</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Engineering Features Bullet Points */}
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
              Key Engineering Features:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#38bdf8] mt-0.5">▪</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#181c22] border-t border-[#262a31] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-400">
            Document ID: DS-{product.id.toUpperCase()}-2025 | ISO9001:2015 Approved
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 bg-[#262a31] hover:bg-[#31353c] text-white rounded text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Print Datasheet
            </button>
            <a
              href={`#download-${product.id}`}
              onClick={(e) => {
                e.preventDefault();
                alert(`Downloading official CAD & PDF Datasheet bundle for ${product.modelName}...`);
              }}
              className="px-4 py-1.5 bg-[#38bdf8] hover:bg-[#00daf3] text-black font-bold rounded text-xs flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF (2.4 MB)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
