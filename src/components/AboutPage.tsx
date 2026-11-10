import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Layers, 
  Flame, 
  Sparkles,
  ArrowRight,
  Download,
  Calendar,
  FileCheck
} from 'lucide-react';

interface AboutPageProps {
  onOpenDistributor: () => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenDistributor, onNavigateHome }) => {
  const [activeCert, setActiveCert] = useState<string>('iso');

  const timelineMilestones = [
    {
      year: '2005',
      title: 'Company Foundation in Guangdong',
      desc: 'Established Dongguan Chaojia Intelligent Technology Co., Ltd with a dedicated precision tooling workshop, manufacturing heavy-duty analog and early digital metal gear servos for export markets.'
    },
    {
      year: '2012',
      title: 'Titanium Gear Train & Direct 7.4V HV',
      desc: 'Pioneered zero-backlash titanium-aluminum gear hobbing and direct 2S LiPo high voltage circuitry, winning national championships across Asia and Europe.'
    },
    {
      year: '2016',
      title: 'EFRA European Championship Victory',
      desc: 'CJ.SERVO factory drivers captured the EFRA European Electric Touring title using our proprietary TS15 low-profile chassis balance architecture.'
    },
    {
      year: '2020',
      title: 'Patented Contactless Magnetic Encoder',
      desc: 'Introduced 12-bit magnetic Hall-effect position sensing, eliminating potentiometer carbon wiper wear and guaranteeing 1,000,000+ cycle life.'
    },
    {
      year: '2023',
      title: 'Wireless OTA Bluetooth Tuning & TR-4 Line',
      desc: 'Launched portable Bluetooth programming box with iOS/Android app support, alongside the TR-4 waterproof micro servo series for Traxxas TRX-4 platforms.'
    },
    {
      year: '2024-2025',
      title: '5-Axis CNC Center & TS70 / TS27 Flagships',
      desc: 'Commissioned twelve DMG MORI 5-axis machining centers in Dongguan; unveiled the 70kg-cm TS70 monster and TS27 CJ.POWER competition series.'
    }
  ];

  const certifications = [
    {
      id: 'iso',
      title: 'ISO 9001:2015',
      authority: 'Quality Management System',
      code: 'CERT NO: 04618Q12948R1M',
      scope: 'Design, R&D, CNC precision machining, and assembly of high-torque digital servos and industrial actuators.',
      points: [
        'Full raw material batch traceability (aviation 7075-T6 aluminum & medical titanium)',
        '100% automated electronic inspection before final silicone encapsulation',
        'Continuous environmental stress testing & DIN class 4 gear tolerance audits'
      ]
    },
    {
      id: 'ce',
      title: 'CE Conformity',
      authority: 'European Union Directives',
      code: 'DIRECTIVE: 2014/30/EU (EMC)',
      scope: 'Harmonized standards EN 61000-6-1 and EN 61000-6-3 certified for electromagnetic compatibility and low noise radiation.',
      points: [
        'Zero RF interference with 2.4GHz FHSS / FASSTest / telemetry receiver protocols',
        'ESD electrostatic discharge protection exceeding 8kV contact air discharge',
        'Power line ripple suppression protecting sensitive ESC and gyro BEC systems'
      ]
    },
    {
      id: 'fcc',
      title: 'FCC Part 15B',
      authority: 'Federal Communications Commission',
      code: 'FCC ID: 2AXCJ-SERVO25',
      scope: 'Verified for Class B digital device unintentional emissions for North American consumer and industrial distribution.',
      points: [
        'Compliant with high-frequency harmonic attenuation limits',
        'Approved for deployment in commercial robotics, consumer RC models, and industrial automation'
      ]
    },
    {
      id: 'rohs',
      title: 'RoHS 2.0 Valid',
      authority: 'Environmental Compliance',
      code: 'DIRECTIVE: 2011/65/EU & (EU) 2015/863',
      scope: 'Guaranteed 100% lead-free SMT solder paste and eco-friendly anodized surface finish baths without hexavalent chromium.',
      points: [
        'Non-toxic RoHS & REACH compliant silicone lead wires',
        'Halogen-free printed circuit boards (PCB)',
        'Environmentally sustainable manufacturing processes'
      ]
    }
  ];

  return (
    <div className="w-full bg-[#10141a] pt-28 pb-20">
      {/* Breadcrumb Header */}
      <div className="w-full bg-[#0a0e14] border-b border-[#1c2026]">
        <div className="max-w-[1360px] mx-auto px-6 py-3 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <button 
              onClick={onNavigateHome}
              className="text-slate-300 hover:text-[#38bdf8] transition-colors"
            >
              CJSERVO Portal
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">About Us & Factory ISO</span>
          </div>
          <span className="text-[#38bdf8] hidden sm:inline-block">
            Dongguan Chaojia Intelligent Technology Co., Ltd · Established 2005
          </span>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 pt-12 space-y-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#181c22] text-[#38bdf8] font-mono text-xs uppercase tracking-wider rounded border border-[#262a31] flex items-center gap-1.5 font-bold">
                <Award className="w-3.5 h-3.5 text-[#38bdf8]" />
                20+ YEARS PRECISION ACTUATOR ENGINEERING
              </span>
              <span className="px-3 py-1 bg-[#181c22] text-white font-mono text-xs uppercase tracking-wider rounded border border-[#262a31]">
                ISO9001:2015 CERTIFIED
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.15]">
              ABOUT CJSERVO & DONGGUAN CHAOJIA INTELLIGENT TECHNOLOGY CO., LTD
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Founded in 2005 in Guangdong, China, Dongguan Chaojia Intelligent Technology Co., Ltd has emerged as one of the world's most trusted manufacturers of HV brushless servos, IP67 waterproof servos, coreless high-speed digital servos, low-profile drift servos, and precision accessories. Under our celebrated <strong>CJ.SERVO</strong> brand, our engineering team supplies world champions, national hobby distributors, defense UAV developers, and smart robotics pioneers across 60+ nations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-4 bg-[#141820] rounded-lg border border-[#262a31]">
                <span className="font-mono text-2xl sm:text-3xl font-black text-white block">2005</span>
                <span className="font-mono text-[11px] text-slate-400 uppercase">Year Founded</span>
              </div>
              <div className="p-4 bg-[#141820] rounded-lg border border-[#262a31]">
                <span className="font-mono text-2xl sm:text-3xl font-black text-[#38bdf8] block">150,000+</span>
                <span className="font-mono text-[11px] text-slate-400 uppercase">Monthly Capacity</span>
              </div>
              <div className="p-4 bg-[#141820] rounded-lg border border-[#262a31]">
                <span className="font-mono text-2xl sm:text-3xl font-black text-white block">140+</span>
                <span className="font-mono text-[11px] text-slate-400 uppercase">World Titles</span>
              </div>
              <div className="p-4 bg-[#141820] rounded-lg border border-[#262a31]">
                <span className="font-mono text-2xl sm:text-3xl font-black text-[#ffb778] block">60+</span>
                <span className="font-mono text-[11px] text-slate-400 uppercase">Global Importers</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#141820] rounded-xl p-3 border border-[#262a31] shadow-2xl overflow-hidden group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black">
                <img
                  src="/src/assets/images/team_champions_daylight_1794300464496.jpg"
                  alt="Chaojia Factory Racing Team - Competition Champions"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono">
                  <span className="text-[#38bdf8] font-bold block">CHAOJIA FACTORY RACING & COMPETITION TEAM</span>
                  <span className="text-slate-300 text-[11px]">Championship Podium Winners & IFMAR Drivers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Factory Infrastructure & Production Capabilities */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest block mb-1 font-bold">
                MANUFACTURING EXCELLENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Dongguan Qingxi Production Campus & Engineering Labs
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              From billet 7075-T6 aluminum bar stock to finished sub-millisecond servo actuators, all machining, wire winding, and firmware programming is executed in-house.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141820] p-6 rounded-xl border border-[#262a31] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#181c22] text-[#38bdf8] flex items-center justify-center border border-[#262a31]">
                <Cpu className="w-5 h-5 text-[#38bdf8]" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase">5-Axis CNC & Gear Hobbing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Twelve Japanese DMG MORI 5-axis machining centers carve monolithic servo cases with ±0.003mm tolerances. Internal hobbing machines cut medical-grade titanium and hardened steel gears adhering to strict DIN class 4 specifications.
              </p>
            </div>

            <div className="bg-[#141820] p-6 rounded-xl border border-[#262a31] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#181c22] text-[#ff525f] flex items-center justify-center border border-[#262a31]">
                <Flame className="w-5 h-5 text-[#ff525f]" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase">Cleanroom SMT & Potting</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Class 100,000 dust-free SMT pick-and-place lines populate 32-bit MCU control boards with high-current MOSFET drivers. Specialized vacuum potting machines seal PCB cavities with optical-grade silicone for IP67/IP68 submersible protection.
              </p>
            </div>

            <div className="bg-[#141820] p-6 rounded-xl border border-[#262a31] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#181c22] text-[#ffb778] flex items-center justify-center border border-[#262a31]">
                <Wrench className="w-5 h-5 text-[#ffb778]" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase">Environmental Torture Lab</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Each product batch undergoes 2-meter hydrostatic submersion, 48-hour saltwater fog exposure, 100 continuous stall hours at 8.4V LiPo rail, and temperature shock from -40°C to +85°C to ensure military-grade field resilience.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Management & Certifications */}
        <div className="bg-[#141820] rounded-2xl p-6 sm:p-10 border border-[#262a31] space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest block mb-1 font-bold">
                COMPLIANCE & QUALITY AUDITS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Global Certifications & Quality Assurances
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Click certification badges below to inspect testing criteria
            </span>
          </div>

          {/* Cert selector tabs */}
          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCert(c.id)}
                className={`px-4 py-2 rounded font-mono text-xs uppercase font-bold transition-all flex items-center gap-2 ${
                  activeCert === c.id
                    ? 'bg-[#38bdf8] text-black shadow-lg shadow-cyan-500/20'
                    : 'bg-[#181c22] text-slate-300 hover:text-white border border-[#262a31]'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                {c.title}
              </button>
            ))}
          </div>

          {/* Active Cert details display */}
          {(() => {
            const current = certifications.find((c) => c.id === activeCert) || certifications[0];
            return (
              <div className="bg-[#0a0e14] p-6 rounded-xl border border-[#262a31] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#262a31] gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase">{current.title}</h3>
                    <span className="text-xs font-mono text-[#38bdf8]">{current.authority}</span>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 bg-[#181c22] text-slate-300 rounded border border-[#262a31]">
                    {current.code}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{current.scope}</p>
                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  {current.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()}
        </div>

        {/* 20-Year Milestones Timeline */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest block mb-1 font-bold">
              HISTORICAL JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Two Decades of Actuator Innovation (2005 - 2025)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineMilestones.map((m, idx) => (
              <div 
                key={idx}
                className="bg-[#141820] hover:bg-[#181c22] p-5 rounded-xl border border-[#262a31] hover:border-[#38bdf8]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xl font-black text-[#38bdf8]">
                      {m.year}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      Milestone #{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OEM / ODM Custom Services Banner */}
        <div className="bg-[#141820] rounded-2xl p-6 sm:p-10 border border-[#262a31] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase text-[#ff525f] tracking-widest font-bold">
              BESPOKE INDUSTRIAL & COMPETITION MANUFACTURING
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Custom OEM & ODM Actuator Engineering
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We engineer tailored servo solutions for robotic joint developers, commercial drone platforms, and elite RC teams. Custom spline dimensions, specialized firmware communication (CAN 2.0B / RS485 / 760µs PWM), and laser-etched private labels available.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={onOpenDistributor}
              className="px-6 py-3 bg-[#ff525f] hover:bg-[#ff3b30] text-white font-mono text-xs uppercase tracking-wider rounded font-bold transition-all shadow-lg shadow-red-500/20"
            >
              Submit OEM / ODM Spec
            </button>
            <button
              onClick={() => {
                alert('Downloading Dongguan Chaojia OEM/ODM Actuator Engineering Capability Overview (PDF 3.8 MB)...');
              }}
              className="px-5 py-3 bg-[#181c22] hover:bg-[#262a31] text-white font-mono text-xs uppercase tracking-wider rounded border border-[#262a31] flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#38bdf8]" />
              Capability Sheet (PDF)
            </button>
          </div>
        </div>

        {/* Contact & Facility Address Card */}
        <div className="bg-[#0a0e14] rounded-xl p-6 border border-[#262a31] grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#38bdf8] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-bold block mb-1">FACTORY HEADQUARTERS</span>
              <p className="text-slate-400 leading-relaxed">
                No.201 room,No.3 Building,No.6 Fulong Road,Qingxi,Qingxi Town,Dongguan City,Guangdong Province
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-[#38bdf8] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-bold block mb-1">GLOBAL COMMERCIAL DESK</span>
              <a href="tel:1388888888" className="text-white hover:text-[#38bdf8] font-bold block">
                1388888888 (Sales & Support)
              </a>
              <span className="text-slate-500 text-[11px]">Mon-Sat 08:30 - 18:00 (GMT+8)</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#38bdf8] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-bold block mb-1">DIRECT TECHNICAL INQUIRIES</span>
              <a href="mailto:info@Cjservo.com" className="text-[#38bdf8] hover:text-white font-bold block">
                info@Cjservo.com
              </a>
              <span className="text-slate-500 text-[11px]">24-Hour B2B SLA Response</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
