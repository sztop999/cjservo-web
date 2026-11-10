import React from 'react';
import { X, Download, FileText, CheckCircle, ExternalLink } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface CatalogPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogPdfModal: React.FC<CatalogPdfModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#141820] border border-[#262a31] rounded-xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#181c22] border-b border-[#262a31] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#38bdf8]" />
            <div>
              <span className="text-xs font-mono text-[#38bdf8] uppercase">DIGITAL ARCHIVE • FULL LINE CATALOG</span>
              <h3 className="text-lg font-bold text-white uppercase">CJSERVO 2025 Comprehensive Product Catalog</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-[#262a31] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          <div className="bg-[#10141a] p-4 rounded-lg border border-[#262a31] flex flex-col sm:flex-row items-center gap-6">
            <div className="w-28 h-36 bg-[#181c22] rounded border-2 border-[#38bdf8]/40 p-2 flex flex-col justify-between flex-shrink-0 shadow-lg text-center font-mono">
              <span className="text-[10px] text-[#38bdf8] font-bold">2025 EDITION</span>
              <div className="text-white font-bold text-[10px] leading-tight">Dongguan Chaojia Intelligent Technology Co., Ltd</div>
              <span className="text-[8px] text-slate-400">PDF • 48 PAGES</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase">Official Global Spec Book (V2025.1)</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Contains complete mechanical drawings, 3D envelope dimensions, spline tolerances, stall current ratings, thermal graphs, and spare parts diagrams for all 140+ servos, brushless ESCs, and industrial serial bus actuators.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle className="w-4 h-4" /> Includes CAD Cross-Reference Matrix & Futaba/Sanwa Compatibility List
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider mb-3">
              Included Product Line Sections:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 bg-[#10141a] rounded border border-[#262a31] flex justify-between">
                <span>01. HV Brushless Servos (8.4V · 25T)</span>
                <span className="text-[#38bdf8]">pp. 04 - 14</span>
              </div>
              <div className="p-2.5 bg-[#10141a] rounded border border-[#262a31] flex justify-between">
                <span>02. Coreless / Digital Servos (0.06s)</span>
                <span className="text-[#38bdf8]">pp. 15 - 22</span>
              </div>
              <div className="p-2.5 bg-[#10141a] rounded border border-[#262a31] flex justify-between">
                <span>03. Waterproof Servos (IP67 / IP68)</span>
                <span className="text-[#38bdf8]">pp. 23 - 30</span>
              </div>
              <div className="p-2.5 bg-[#10141a] rounded border border-[#262a31] flex justify-between">
                <span>04. Low Profile Drift & Micro (9g/12g)</span>
                <span className="text-[#38bdf8]">pp. 31 - 38</span>
              </div>
              <div className="p-2.5 bg-[#10141a] rounded border border-[#262a31] flex justify-between">
                <span>05. RC Drift Gyro & 25T Horns</span>
                <span className="text-[#38bdf8]">pp. 39 - 44</span>
              </div>
              <div className="p-2.5 bg-[#10141a] rounded border border-[#262a31] flex justify-between">
                <span>06. USB Programmer Card / Box & RMA</span>
                <span className="text-[#38bdf8]">pp. 45 - 48</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-[#181c22] border-t border-[#262a31] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">PDF File Size: 18.4 MB (High-Res Vector)</span>
          <button
            onClick={() => {
              alert('Downloading official CJSERVO 2025 Comprehensive Product Catalog PDF (18.4 MB)...');
            }}
            className="px-5 py-2.5 bg-[#ff525f] hover:bg-[#ff3b30] text-white font-bold rounded text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-red-500/20"
          >
            <Download className="w-4 h-4" /> Download Complete Catalog (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};
