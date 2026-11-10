import React from 'react';
import { NewsItem } from '../types';
import { X, Calendar, Flag, Share2 } from 'lucide-react';

interface NewsArticleModalProps {
  article: NewsItem | null;
  onClose: () => void;
}

export const NewsArticleModal: React.FC<NewsArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#141820] border border-[#262a31] rounded-xl shadow-2xl overflow-hidden my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full bg-[#0a0e14] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141820] via-transparent to-black/60"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-0.5 bg-[#ff525f] text-white font-mono text-[10px] uppercase font-bold rounded">
              {article.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-2 leading-tight">
              {article.title}
            </h2>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                {article.dateTag}
              </span>
              <span>•</span>
              <span className="text-emerald-400">Official Factory Dispatch</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4 text-sm text-slate-300 leading-relaxed font-body">
          <p className="text-base text-white font-medium">
            {article.summary}
          </p>

          <p>
            {article.content || article.summary}
          </p>

          <div className="bg-[#10141a] p-4 rounded-lg border border-[#262a31] font-mono text-xs text-slate-400 space-y-1">
            <div className="text-white font-bold">RACE & LAB VERIFICATION METRICS</div>
            <div>Chassis: Schumacher Mi9 & Xray T4 IFMAR Spec</div>
            <div>Actuator Model: CJ.SERVO TS15 & TS27</div>
            <div>Return Accuracy: 0.001° Sub-millisecond Repeatability</div>
            <div>Track Surface: Carpet / High Grip Asphalt @ 35°C Ambient</div>
          </div>
        </div>

        <div className="px-6 py-4 bg-[#181c22] border-t border-[#262a31] flex items-center justify-between">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: article.title, url: window.location.href });
              } else {
                alert('Article link copied to clipboard.');
              }
            }}
            className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" /> Share Press Release
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#262a31] hover:bg-white hover:text-black rounded text-xs font-mono text-white transition-colors"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
};
