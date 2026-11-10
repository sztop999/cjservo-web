import React from 'react';
import { Product } from '../types';
import { X, Download, Box, Layers, Eye, FileCode } from 'lucide-react';

interface CadModalProps {
  product: Product | null;
  onClose: () => void;
}

export const CadModal: React.FC<CadModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl bg-[#141820] border border-[#262a31] rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#181c22] border-b border-[#262a31] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Box className="w-5 h-5 text-[#38bdf8]" />
            <div>
              <span className="text-xs font-mono text-[#38bdf8] uppercase">3D CAD & SOLID GEOMETRY REPOSITORY</span>
              <h3 className="text-lg font-bold text-white uppercase">{product.modelName} (STEP / IGES)</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-[#262a31] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* 3D Wireframe Visualizer Representation */}
          <div className="relative aspect-video bg-[#0a0e14] rounded-lg border border-[#262a31] overflow-hidden flex items-center justify-center">
            {/* Grid overlay */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            ></div>

            <div className="relative z-10 flex flex-col items-center">
              <img
                src={product.image}
                alt={product.modelName}
                className="max-h-40 object-contain drop-shadow-[0_0_20px_rgba(56,189,248,0.2)]"
              />
              <div className="mt-2 text-xs font-mono text-[#38bdf8] flex items-center gap-2 bg-[#141820]/80 px-3 py-1 rounded border border-[#38bdf8]/30">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping"></span>
                <span>ORIGIN: X: 0.00 Y: 0.00 Z: 0.00 mm</span>
              </div>
            </div>

            <div className="absolute bottom-3 left-3 text-[11px] font-mono text-slate-400">
              Outer Envelope: {product.dimensions}
            </div>
            <div className="absolute bottom-3 right-3 text-[11px] font-mono text-slate-400">
              Spline: 25T-5.9mm CNC Precision
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 bg-[#10141a] rounded border border-[#262a31]">
              <span className="text-slate-400 block mb-1">Standard File Formats:</span>
              <span className="text-white font-bold">.STEP / .STP (AP214)</span>
            </div>
            <div className="p-3 bg-[#10141a] rounded border border-[#262a31]">
              <span className="text-slate-400 block mb-1">Mounting Hole Pattern:</span>
              <span className="text-white font-bold">4x M3 Threaded Tabs (49.5mm span)</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Directly importable into SolidWorks, Autodesk Fusion 360, PTC Creo, FreeCAD, and Rhino. 
            Includes accurate center-of-gravity mass properties for chassis weight distribution simulation.
          </p>
        </div>

        <div className="px-6 py-4 bg-[#181c22] border-t border-[#262a31] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">File Size: 4.8 MB (.ZIP)</span>
          <button
            onClick={() => {
              alert(`Starting download of STEP 3D CAD model: CJ_${product.modelName.replace(/\s+/g, '_')}.step`);
            }}
            className="px-4 py-2 bg-[#ff525f] hover:bg-[#ff3b30] text-white font-bold rounded text-xs flex items-center gap-2 transition-colors shadow-lg shadow-red-500/20"
          >
            <Download className="w-4 h-4" /> Download 3D STEP Model
          </button>
        </div>
      </div>
    </div>
  );
};
