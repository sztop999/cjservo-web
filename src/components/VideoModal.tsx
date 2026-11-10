import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, ShieldAlert, Activity } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [seconds, setSeconds] = useState(142);
  const [pressure, setPressure] = useState(1.98);
  const [cycleCount, setCycleCount] = useState(38420);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
      setPressure((prev) => +(1.95 + Math.random() * 0.08).toFixed(2));
      setCycleCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-[#141820] border border-[#262a31] rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#181c22] border-b border-[#262a31] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff525f] animate-ping"></span>
            <div>
              <span className="text-xs font-mono text-[#ff525f] uppercase">FACTORY LAB 4K VIDEO STREAM</span>
              <h3 className="text-lg font-bold text-white uppercase">Torture Lab: STORM-75 Submerged 2-Meter Pressure Test</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-[#262a31] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1eB0Fz0tWkSfnMbB6qvLKm0etSZE07XuwprMUp1OX0E27CWrjwaLlp17-5uDzrD6hWzxei9dFxUboPh70SOpJL0Wbot_OiZAnjwXp2XdkzkfLwK83hB07ux3TOHVf0XZB3w-9b4_tSY76_ZsuiC1hFySipEDVRea_7FC5vDtbCDoyJxmCtVOlzEiGmqUu9PniIWcb-qNWZCiNB_DL9-jJAuIiRwILSd-yQ-3AJtlsh7rODgGiri4B2g"
            alt="STORM-75 Submerged Test"
            className="w-full h-full object-cover opacity-85"
          />

          {/* HUD Overlay */}
          <div className="absolute top-4 left-4 p-3 bg-black/70 backdrop-blur-md rounded border border-[#38bdf8]/30 font-mono text-xs text-white space-y-1">
            <div className="flex items-center gap-2 text-[#38bdf8] font-bold">
              <Activity className="w-3.5 h-3.5 animate-spin" /> CHAMBER 04 • HYDROSTATIC TEST
            </div>
            <div>DEPTH: <span className="text-[#38bdf8] font-bold">2.00 METERS</span></div>
            <div>WATER PRESSURE: <span className="text-white font-bold">{pressure} BAR</span></div>
            <div>COMPLETED CYCLES: <span className="text-emerald-400 font-bold">{cycleCount.toLocaleString()}</span></div>
            <div>STATUS: <span className="text-emerald-400 font-bold">ZERO INGRESS / NORMAL</span></div>
          </div>

          <div className="absolute top-4 right-4 bg-red-600/90 text-white text-[11px] font-mono px-2.5 py-1 rounded font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> REC 4K UHD
          </div>

          {/* Water bubble visual animation effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute bottom-10 left-1/3 w-3 h-3 rounded-full bg-cyan-300/40 animate-bounce"></div>
            <div className="absolute bottom-16 right-1/2 w-4 h-4 rounded-full bg-cyan-300/30 animate-pulse"></div>
            <div className="absolute bottom-8 right-1/3 w-2 h-2 rounded-full bg-cyan-300/50 animate-ping"></div>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-center justify-between text-white text-xs font-mono">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-[#ff525f] flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1 hover:text-[#38bdf8] transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span>{formatTime(seconds)} / 04:32</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-slate-400">Audio: Hydrophone Hydro-Acoustic Feed</span>
              <button
                onClick={() => alert('Full screen presentation mode')}
                className="p-1 hover:text-[#38bdf8] transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#181c22] border-t border-[#262a31] flex items-center justify-between text-xs text-slate-300">
          <p>
            <strong className="text-white">Test Procedure:</strong> IP67 Submerged continuous stall & cycle benchmark for 100 continuous hours.
            Zero seal failure recorded under 8.4V LiPo rail.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#262a31] hover:bg-white hover:text-black rounded text-xs font-mono text-white transition-colors flex-shrink-0"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
