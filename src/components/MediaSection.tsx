import React from 'react';
import { NEWS_ITEMS } from '../data/news';
import { NewsItem } from '../types';
import { Play, ArrowRight, ChevronRight, Newspaper } from 'lucide-react';

interface MediaSectionProps {
  onOpenVideo: () => void;
  onOpenArticle: (item: NewsItem) => void;
  onNavigateNews?: () => void;
}

export const MediaSection: React.FC<MediaSectionProps> = ({ onOpenVideo, onOpenArticle, onNavigateNews }) => {
  return (
    <section className="w-full bg-[#10141a] py-20 border-b border-[#1c2026]" id="news">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest block mb-1 font-bold">
              FIELD UPDATES & DOCUMENTATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
              Latest News & Factory Media
            </h2>
          </div>
          <button
            onClick={() => {
              if (onNavigateNews) {
                onNavigateNews();
              } else {
                onOpenArticle(NEWS_ITEMS[0]);
              }
            }}
            className="font-mono text-xs text-white hover:text-[#38bdf8] uppercase tracking-wider flex items-center gap-1.5 font-bold transition-colors"
          >
            <span>View All News & Reports</span>
            <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              onClick={() => {
                if (item.isMediaVideo) {
                  onOpenVideo();
                } else {
                  onOpenArticle(item);
                }
              }}
              className="bg-[#141820] hover:bg-[#181c22] rounded-xl overflow-hidden flex flex-col border border-[#262a31] hover:border-[#38bdf8]/40 transition-all duration-300 shadow-lg cursor-pointer group"
            >
              <div className="relative w-full aspect-video bg-[#0a0e14] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.title}
                  src={item.image}
                />
                <span className="absolute top-3 left-3 bg-[#10141a]/90 backdrop-blur-sm text-white border border-[#262a31] font-mono text-[10px] px-2.5 py-0.5 rounded font-bold uppercase">
                  {item.category}
                </span>

                {item.isMediaVideo && (
                  <>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-[#ff525f] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-[#10141a]/90 text-white font-mono text-[10px] px-2 py-0.5 rounded border border-[#262a31]">
                      {item.videoDuration}
                    </span>
                  </>
                )}
              </div>

              <div className="p-5 flex flex-col gap-2 flex-1">
                <span className="font-mono text-[11px] text-slate-400">
                  {item.dateTag}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-1 line-clamp-3">
                  {item.summary}
                </p>

                <div className="pt-2 flex items-center gap-1 text-xs font-mono font-bold text-[#38bdf8] uppercase group-hover:text-white transition-colors">
                  <span>{item.isMediaVideo ? 'Watch Engineering Video' : 'Read Race Report'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
