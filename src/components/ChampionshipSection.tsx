import React, { useState } from 'react';
import { Trophy, Clock, CheckCircle2, Sliders } from 'lucide-react';

export const ChampionshipSection: React.FC = () => {
  const [testMinute, setTestMinute] = useState<number>(10);

  // Dynamic retention interpolation based on testMinute
  const cjRetention = +(100 - (testMinute * 0.42)).toFixed(1);
  const plasticRetention = +(100 - (testMinute * 3.88)).toFixed(1);
  const cjTemp = +(32 + (testMinute * 1.1)).toFixed(1);
  const plasticTemp = +(32 + (testMinute * 4.3)).toFixed(1);

  return (
    <section className="w-full bg-[#10141a] py-20 border-b border-[#1c2026]">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text & Stats Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#38bdf8] uppercase tracking-widest font-bold">
              <Trophy className="w-4 h-4 text-[#38bdf8]" />
              <span className="text-white">IFMAR / EFRA / ROAR WORLD RECORD PEDIGREE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
              Proven at the Highest Levels of World Competition
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From the IFMAR Electric Touring Car World Championships to gruelling 24-hour endurance challenges, elite international team drivers rely on CJ.SERVO HV brushless servos, low profile drift servos, and titanium gear coreless platforms for sub-millisecond return-to-center accuracy and zero-fade thermal stability.
            </p>

            {/* Driver Endorsement Quote */}
            <div className="bg-[#141820] p-4 rounded-xl border border-[#262a31] flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#181c22] border border-[#262a31] flex-shrink-0 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="CJ.SERVO Factory Driver"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDch0U_lwIGmS9xySwQ8IwA6sDsLA-4FDLYRUgwrkSrovru1XVHe3DNdNi8NEHYi9rvjdj1jGMDsARunA-jGVrwr-hEXsYY1Lydyaa9X8MXLgKpXuTW-afpO5Sdv0TELbaDAepUvODY3wLYhS062u_lBiWsc-93xoBxAylMp1jdpIz72CkA3nl50XNOQh2jDd3J3gq10WYzbnezGMpAqQpiAK9Bmy8-y9u3Nt7cgB4s7EL2N0R4apTpsw"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  “In 5-minute A-main finals where hundredths of a second decide world titles, the CJ.SERVO TS15 provides the exact same razor steering response on the 30th lap as it does off the starting grid.”
                </p>
                <span className="font-mono text-xs text-[#38bdf8] mt-2 font-bold uppercase">
                  — CJ.SERVO Factory Racing Team Captain
                </span>
              </div>
            </div>

            {/* Quick Stats Counter Row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="flex flex-col">
                <span className="font-mono text-3xl font-black text-white">140+</span>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                  International Titles
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-3xl font-black text-white">68</span>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                  Country Importers
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-3xl font-black text-[#38bdf8]">20+</span>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                  Years Engineering
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Telemetry Comparison Curve Chart */}
          <div className="lg:col-span-6 bg-[#141820] rounded-xl p-6 border border-[#262a31] flex flex-col gap-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-bold">
                THERMAL DISSIPATION & TORQUE STABILITY (10-MIN TEST)
              </span>
              <span className="font-mono text-xs text-white flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
                CJSERVO 7075 CNC vs CONVENTIONAL
              </span>
            </div>

            {/* Interactive SVG Chart Canvas */}
            <div className="w-full aspect-[16/9] bg-[#0a0e14] rounded-lg p-3 flex items-center justify-center border border-[#262a31] relative">
              <svg className="w-full h-full text-slate-600" fill="none" viewBox="0 0 500 240">
                {/* Horizontal Grid lines */}
                <line stroke="#262a31" strokeWidth="1" x1="40" x2="480" y1="20" y2="20" />
                <line stroke="#262a31" strokeWidth="1" x1="40" x2="480" y1="60" y2="60" />
                <line stroke="#262a31" strokeWidth="1" x1="40" x2="480" y1="100" y2="100" />
                <line stroke="#262a31" strokeWidth="1" x1="40" x2="480" y1="140" y2="140" />
                <line stroke="#262a31" strokeWidth="1" x1="40" x2="480" y1="180" y2="180" />

                {/* Axes */}
                <line stroke="#475569" strokeWidth="1.5" x1="40" x2="40" y1="20" y2="200" />
                <line stroke="#475569" strokeWidth="1.5" x1="40" x2="480" y1="200" y2="200" />

                {/* Y Axis labels */}
                <text className="font-mono text-[10px]" fill="#94a3b8" x="10" y="25">75 kg</text>
                <text className="font-mono text-[10px]" fill="#94a3b8" x="10" y="105">50 kg</text>
                <text className="font-mono text-[10px]" fill="#94a3b8" x="10" y="185">25 kg</text>

                {/* X Axis labels */}
                <text className="font-mono text-[10px]" fill="#94a3b8" x="40" y="218">0m</text>
                <text className="font-mono text-[10px]" fill="#94a3b8" x="150" y="218">2.5m</text>
                <text className="font-mono text-[10px]" fill="#94a3b8" x="260" y="218">5.0m</text>
                <text className="font-mono text-[10px]" fill="#94a3b8" x="370" y="218">7.5m</text>
                <text className="font-mono text-[10px]" fill="#94a3b8" x="460" y="218">10.0m</text>

                {/* Competitor fade curve (dim dashed gray) */}
                <path
                  d="M 40 45 Q 160 55 260 85 T 480 135"
                  stroke="#64748b"
                  strokeDasharray="4 4"
                  strokeWidth="2"
                />

                {/* CJSERVO Flat Stability Curve (Technical Cyan) */}
                <path
                  d="M 40 30 Q 180 32 300 35 T 480 40"
                  stroke="#38bdf8"
                  strokeWidth="3"
                />

                {/* Interactive cursor line corresponding to testMinute */}
                {(() => {
                  const xPos = 40 + (testMinute / 10) * 440;
                  return (
                    <g>
                      <line
                        x1={xPos}
                        x2={xPos}
                        y1="20"
                        y2="200"
                        stroke="#ff525f"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                      />
                      <circle cx={xPos} cy={30 + testMinute} fill="#38bdf8" r="4" />
                      <circle cx={xPos} cy={45 + testMinute * 9} fill="#64748b" r="4" />
                    </g>
                  );
                })()}

                {/* Highlighting labels */}
                <text className="font-mono text-[10px] font-bold" fill="#38bdf8" x="290" y="25">
                  CJSERVO STORM: 95.8% RETENTION
                </text>
                <text className="font-mono text-[10px]" fill="#94a3b8" x="290" y="155">
                  STANDARD PLASTIC: 61.2% FADE
                </text>
              </svg>
            </div>

            {/* Time Scrubber Slider */}
            <div className="bg-[#0a0e14] p-3 rounded-lg border border-[#262a31] space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#ff525f]" />
                  Continuous Stall Time: <strong className="text-white">{testMinute} Minutes</strong>
                </span>
                <span className="text-slate-400 text-[11px]">Scrub to inspect thermal fade</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={testMinute}
                onChange={(e) => setTestMinute(parseFloat(e.target.value))}
                className="w-full accent-[#38bdf8] bg-[#262a31] h-1.5 rounded-lg cursor-pointer"
              />
              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                <div className="p-2 bg-[#141820] rounded border border-[#38bdf8]/30">
                  <span className="text-[10px] text-slate-400 block">CJSERVO 7075-T6 Billet:</span>
                  <div className="flex justify-between items-center mt-0.5">
                    <span className="text-[#38bdf8] font-bold">{cjRetention}% Torque</span>
                    <span className="text-slate-300 text-[11px]">{cjTemp}°C</span>
                  </div>
                </div>
                <div className="p-2 bg-[#141820] rounded border border-[#262a31]">
                  <span className="text-[10px] text-slate-400 block">Conventional Plastic:</span>
                  <div className="flex justify-between items-center mt-0.5">
                    <span className="text-slate-400 font-bold">{plasticRetention}% Torque</span>
                    <span className="text-[#ff525f] text-[11px]">{plasticTemp}°C</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>Continuous Stall Load Torque Test @ 8.4V LiPo Source</span>
              <span className="text-emerald-400 font-bold">Tested in Dongguan Factory Lab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
