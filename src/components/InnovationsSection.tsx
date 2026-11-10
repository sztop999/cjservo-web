import React from 'react';
import { Radio, ShieldAlert, Smartphone, Cpu, Sliders } from 'lucide-react';

interface InnovationsSectionProps {
  onOpenOtaTuner: () => void;
}

export const InnovationsSection: React.FC<InnovationsSectionProps> = ({ onOpenOtaTuner }) => {
  return (
    <section className="w-full bg-[#0a0e14] py-20 border-b border-[#1c2026]">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-widest block mb-2 font-bold">
            PROPRIETARY ENGINEERING PATENTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
            Next-Gen Actuator Architecture
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2 leading-relaxed">
            Eliminating common failure modes through solid-state sensing, intelligent microcontroller thermal gating, and advanced wireless field-programmability.
          </p>
        </div>

        {/* 3 Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1: Magnetic Encoder */}
          <div className="bg-[#141820] hover:bg-[#181c22] p-6 rounded-xl border border-[#262a31] hover:border-[#38bdf8]/40 flex flex-col justify-between transition-all duration-300 shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#181c22] text-[#38bdf8] border border-[#262a31] flex items-center justify-center">
                <Radio className="w-6 h-6 text-[#38bdf8]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase">
                Contactless Magnetic Encoders
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Replaces mechanical carbon pots that wear out with high-definition 12-bit magnetic Hall-effect sensors. Guarantees zero jitter, infinite cycle life, and dust/water immunity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#262a31] font-mono text-xs text-white flex items-center gap-2 font-bold">
              <span className="text-[#38bdf8]">●</span>
              <span>ZERO WIPER WEAR FOR 1,000,000+ CYCLES</span>
            </div>
          </div>

          {/* Feature 2: Smart Firmware Protection */}
          <div className="bg-[#141820] hover:bg-[#181c22] p-6 rounded-xl border border-[#262a31] hover:border-[#38bdf8]/40 flex flex-col justify-between transition-all duration-300 shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#181c22] text-[#ff525f] border border-[#262a31] flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-[#ff525f]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase">
                Anti-Lock & Thermal Gating
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Intelligent 32-bit MCU algorithms detect locked mechanical linkages or gear blocks. Automatically steps down current output after 5 seconds of sustained stall to prevent motor burnout.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#262a31] font-mono text-xs text-[#ff525f] flex items-center gap-2 font-bold">
              <span className="text-[#ff525f]">●</span>
              <span>OVERCURRENT & THERMAL SELF-PRESERVATION</span>
            </div>
          </div>

          {/* Feature 3: Bluetooth App Programming & Simulator Trigger */}
          <div className="bg-[#141820] hover:bg-[#181c22] p-6 rounded-xl border border-[#262a31] hover:border-[#ffb778]/40 flex flex-col justify-between transition-all duration-300 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-[#181c22] text-[#ffb778] border border-[#262a31] flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-[#ffb778]" />
                </div>
                <button
                  onClick={onOpenOtaTuner}
                  className="px-2.5 py-1 bg-[#1e232b] hover:bg-[#ffb778] hover:text-black text-[#ffb778] font-mono text-[11px] font-bold rounded flex items-center gap-1.5 transition-colors border border-[#ffb778]/30"
                >
                  <Sliders className="w-3 h-3" /> Test Tuning Tool
                </button>
              </div>

              <h3 className="text-xl font-bold text-white uppercase">
                OTA Parametric Tuning
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Fine-tune holding power, deadband width, steering boost curve, neutral point, and fail-safe return angles directly through iOS/Android Bluetooth app or portable program boxes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#262a31] font-mono text-xs text-[#ffb778] flex items-center gap-2 font-bold">
              <span className="text-[#ffb778]">●</span>
              <span>IOS • ANDROID • PC USB LINK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
