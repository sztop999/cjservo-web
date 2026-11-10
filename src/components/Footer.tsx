import React from 'react';
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { CJServoLogo } from './CJServoLogo';

interface FooterProps {
  onOpenDistributor: () => void;
  onSelectCategory: (category: string) => void;
  onNavigate?: (view: 'home' | 'about' | 'downloads' | 'news' | 'products' | 'service') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDistributor, onSelectCategory, onNavigate }) => {
  return (
    <footer className="w-full bg-[#0a0e14] border-t border-[#1c2026]">
      <div className="max-w-[1360px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info column (spans 2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <CJServoLogo size="xl" className="h-11 sm:h-13 lg:h-14 w-auto" />
              <span className="text-xs font-mono font-bold text-[#38bdf8] tracking-wider">
                Dongguan Chaojia Intelligent Technology Co., Ltd
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Precision-engineered actuator platforms, competition telemetry systems, and CNC-milled 7075 digital servos powering IFMAR championship winners, industrial robotics, and UAV airframes worldwide.
            </p>

            <div className="font-mono text-xs text-slate-400 flex flex-col gap-2 pt-2">
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-[#38bdf8] flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  No.201 room,No.3 Building,No.6 Fulong Road,Qingxi,Qingxi Town,Dongguan City,Guangdong Province
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <a
                  href="tel:1388888888"
                  className="text-white hover:text-[#38bdf8] transition-colors font-bold font-mono"
                >
                  1388888888 (Global Sales)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <a
                  href="mailto:info@Cjservo.com"
                  className="text-slate-300 hover:text-[#38bdf8] transition-colors font-mono"
                >
                  info@Cjservo.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <span className="uppercase tracking-wider text-white font-bold block mb-1">
              Quick Navigation
            </span>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => {
                  onNavigate?.('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-white hover:text-[#38bdf8] transition-colors font-bold"
              >
                HOME
              </button>
              <button
                onClick={() => {
                  onNavigate?.('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                Products Lineup (15 Models)
              </button>
              <button
                onClick={() => {
                  onNavigate?.('news');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                News & IFMAR Records
              </button>
              <button
                onClick={() => {
                  onNavigate?.('service');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                Technical Support & RMA
              </button>
              <button
                onClick={() => {
                  onNavigate?.('news');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                News & Field Reports
              </button>
              <button
                onClick={() => {
                  onNavigate?.('downloads');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                CAD & Firmware Downloads
              </button>
              <button
                onClick={() => {
                  onNavigate?.('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                About Factory & ISO
              </button>
            </nav>
          </div>

          {/* Performance Lines */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <span className="uppercase tracking-wider text-white font-bold block mb-1">
              Actuator Product Lines
            </span>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => {
                  onSelectCategory('brushless-motor');
                  onNavigate?.('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                TS系列无刷电机舵机 (TS12~TS70 · 7款)
              </button>
              <button
                onClick={() => {
                  onSelectCategory('brushless-motor');
                  onNavigate?.('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                TS12 & TS15 矮机身 (12KG / 15KG)
              </button>
              <button
                onClick={() => {
                  onSelectCategory('coreless-motor');
                  onNavigate?.('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                CJ系列空心杯电机 (CJ0005, CJ0009 · 2款)
              </button>
              <button
                onClick={() => {
                  onSelectCategory('brushed-iron-core');
                  onNavigate?.('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                CJ系列有刷/铁芯电机 (CJ12KG~CJ60KG · 6款)
              </button>
              <button
                onClick={() => {
                  onSelectCategory('brushed-iron-core');
                  onNavigate?.('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                CJ35KG / CJ45KG / CJ60KG 淬火全钢齿
              </button>
            </nav>
          </div>

          {/* Compliance & Quality */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <span className="uppercase tracking-wider text-white font-bold block mb-1">
              Compliance & Quality
            </span>
            <div className="flex flex-col gap-2 text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                ISO9001:2015 Certified
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                CE & FCC Conformity
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                RoHS Directives Valid
              </span>
            </div>

            <div className="mt-4 p-3 bg-[#141820] rounded-lg border border-[#262a31]">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                B2B Global Portal
              </span>
              <button
                onClick={onOpenDistributor}
                className="text-white hover:text-[#38bdf8] transition-colors flex items-center gap-1 font-bold text-xs"
              >
                <span>Distributor Login / OEM</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#38bdf8]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-6 border-t border-[#1c2026] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <p>
            Copyright © 2005-2025 Dongguan Chaojia Intelligent Technology Co., Ltd. All Rights Reserved. ICP备案: 粤ICP备18029312号.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => alert('CJSERVO Privacy Policy: Strict compliance with GDPR & international industrial trade standards.')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert('CJSERVO Warranty: 1-Year Limited Manufacturer Warranty for all competition and industrial actuators.')}
              className="hover:text-white transition-colors"
            >
              Terms of Warranty
            </button>
            <button
              onClick={() => alert('CJSERVO Sitemap XML: Indexed for global industrial procurement engines.')}
              className="hover:text-white transition-colors"
            >
              Sitemap XML
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
