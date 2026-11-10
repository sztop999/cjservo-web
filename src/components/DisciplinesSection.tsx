import React from 'react';
import { DISCIPLINES } from '../data/disciplines';
import { Discipline } from '../types';
import { ArrowRight, Layers } from 'lucide-react';

interface DisciplinesSectionProps {
  onSelectCategory: (category: string) => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({ onSelectCategory }) => {
  const handleCardClick = (discipline: Discipline) => {
    onSelectCategory(discipline.targetCategory);
    const catalogElement = document.getElementById('catalog-section');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#10141a] py-20 border-b border-[#1c2026]">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#38bdf8] font-mono text-xs uppercase tracking-widest mb-1.5 font-bold">
              <Layers className="w-4 h-4 text-[#38bdf8]" />
              <span className="text-slate-300">ENGINEERING DOMAINS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
              Six RC & Automation Specialty Disciplines
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
            Tailored gear ratios, deadband frequencies, and motor wind profiles tuned for extreme demands from competitive touring tracks to industrial robotic grippers.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCIPLINES.map((discipline) => (
            <div
              key={discipline.id}
              onClick={() => handleCardClick(discipline)}
              className="group bg-[#141820] hover:bg-[#181c22] rounded-xl p-5 flex flex-col justify-between transition-all duration-300 border border-[#262a31] hover:border-[#38bdf8]/40 shadow-lg cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                {/* Image Box */}
                <div className="relative w-full aspect-[16/10] bg-[#0a0e14] rounded-lg overflow-hidden border border-[#262a31]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={discipline.title}
                    src={discipline.image}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#10141a]/90 backdrop-blur-sm px-2 py-0.5 rounded font-mono text-[10px] text-white uppercase font-bold border border-[#262a31]">
                    {discipline.subtitle}
                  </div>
                </div>

                {/* Title & Badge */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white uppercase group-hover:text-[#38bdf8] transition-colors">
                    {discipline.title}
                  </h3>
                  <span className="font-mono text-[11px] px-2 py-0.5 bg-[#1e232b] text-[#38bdf8] rounded border border-[#262a31]">
                    {discipline.badge}
                  </span>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                  {discipline.description}
                </p>
              </div>

              {/* Bottom Specs & Action */}
              <div className="mt-5 pt-3 bg-[#0a0e14] p-3 rounded-lg flex items-center justify-between border border-[#262a31]">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                    TORQUE SPECTRUM
                  </span>
                  <span className="font-mono text-xs text-white font-bold">
                    {discipline.torqueSpectrum}
                  </span>
                </div>

                <button
                  className="px-3 py-1 bg-[#181c22] group-hover:bg-[#38bdf8] group-hover:text-black text-white font-mono text-xs uppercase rounded transition-colors flex items-center gap-1 font-bold border border-[#262a31]"
                >
                  View Range <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
