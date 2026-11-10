import React, { useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  RotateCcw, 
  HelpCircle, 
  CheckCircle2, 
  Search, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Download, 
  Sparkles,
  ArrowRight,
  Cpu,
  Layers,
  Check
} from 'lucide-react';

interface ServicePageProps {
  onNavigateHome: () => void;
  onOpenDistributor: () => void;
  onOpenSearch: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  onNavigateHome,
  onOpenDistributor,
  onOpenSearch
}) => {
  // Serial number verification state
  const [serialInput, setSerialInput] = useState('');
  const [serialResult, setSerialResult] = useState<{
    status: 'valid' | 'invalid' | null;
    model?: string;
    qcDate?: string;
    warrantyStatus?: string;
    batch?: string;
    genuine?: boolean;
  } | null>(null);

  // RMA Form State
  const [rmaForm, setRmaForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    modelName: 'STORM-75PRO',
    serialNumber: '',
    purchaseDate: '',
    purchaseChannel: 'Authorized Hobby Shop',
    issueCategory: 'Gear Train Wear / Noise',
    description: '',
  });
  const [rmaSubmitted, setRmaSubmitted] = useState<string | null>(null);

  // Maintenance active step tab
  const [activeGuideStep, setActiveGuideStep] = useState<number>(1);

  // FAQ open/close state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Serial Number Checker Simulation
  const handleCheckSerial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serialInput.trim()) return;

    const trimmed = serialInput.trim().toUpperCase();
    if (trimmed.includes('CJ') || trimmed.includes('TS') || trimmed.includes('70') || trimmed.includes('15') || trimmed.length >= 6) {
      setSerialResult({
        status: 'valid',
        model: trimmed.includes('15') ? 'TS15 Low-Profile Brushless (15KG)' : trimmed.includes('70') ? 'TS70 Brushless Titanium (70KG)' : 'TS27 Flagship Brushless (27KG)',
        qcDate: '2024-08-14 // BENCH PASS A1',
        warrantyStatus: 'ACTIVE (Covered until 2026-08-14)',
        batch: 'BATCH #HT-24Q3-M8',
        genuine: true
      });
    } else {
      setSerialResult({
        status: 'invalid'
      });
    }
  };

  // Submit RMA Request
  const handleRmaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeTicketId = `CJ-RMA-${Math.floor(100000 + Math.random() * 900000)}`;
    setRmaSubmitted(fakeTicketId);
  };

  const faqs = [
    {
      q: 'Why does my 8.4V high-voltage brushless RC servo twitch or jitter under heavy load?',
      a: 'Twitching or jittering in 8.4V brushless RC servos under high load is almost always caused by insufficient BEC current from your ESC or receiver battery. High torque brushless servo 25T models like the STORM-75PRO can draw up to 7.8A at peak stall. Ensure your ESC has a minimum 10A peak BEC, or install a dedicated external BEC directly to your receiver.'
    },
    {
      q: 'How do I configure parameters on a programmable brushless servo via USB programmer card / box?',
      a: 'Connect your programmable brushless servo to the 3-pin port of the USB servo programmer card / box. You can either tune boost, deadband, neutral point, and travel endpoints directly on the OLED screen, or link via USB-C to our Windows software suite for real-time telemetry recording and firmware updating.'
    },
    {
      q: 'How do I set up and calibrate the RC car steering gyro V4 for 1/10 RWD drift cars?',
      a: 'Mount the RC car steering gyro V4 flat and parallel to the chassis center line using vibration-dampening foam tape. Connect CH1 steering from your receiver into the gyro input, and plug your low profile drift servo 1/10 into the gyro output. Use your transmitter 3CH/4CH knob to toggle between AVCS Heading Lock and Normal Rate Mode, then set Left and Right EPA limits to prevent servo binding.'
    },
    {
      q: 'How do I maintain an IP67 / IP68 waterproof RC servo or submarine/boat servo in wet or marine use?',
      a: 'Our IP67 waterproof servo and submersible RC servo models feature silicone conformal potted MCU boards and multi-layer perimeter O-rings. After running in saltwater or muddy crawler trails, rinse with clean freshwater and inspect the output shaft seal. Every 50 run hours, reapply marine silicone grease to the case joints.'
    },
    {
      q: 'Are CJSERVO output splines compatible with 25T aluminum clamping servo horns?',
      a: 'Yes! All standard, HV brushless, and giant scale servos use the precision 25T spline standard (5.96mm pitch diameter). We recommend our 7075-T6 25T aluminum clamping servo horn with twin pinch bolts for zero-slop competition steering linkages.'
    },
    {
      q: 'What makes a titanium gear coreless servo preferable for 0.06s high-speed competition racing?',
      a: 'A coreless motor servo features a low-inertia basket rotor with rapid rotational acceleration, achieving ultra-fast 0.06s transit speeds. Paired with vacuum-heat-treated titanium gears, it offers maximum impact resistance and sub-millisecond deadband tracking on IFMAR and ROAR championship tracks.'
    }
  ];

  return (
    <div className="w-full bg-[#10141a] pt-32 pb-24 text-white">
      {/* Top Breadcrumb & Hero */}
      <div className="max-w-[1360px] mx-auto px-6 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#38bdf8] transition-colors"
          >
            HOME
          </button>
          <span>/</span>
          <span className="text-white font-bold">TECHNICAL SERVICE</span>
          <span>/</span>
          <span className="text-[#38bdf8] uppercase">WARRANTY & RMA SUPPORT</span>
        </div>

        <div className="relative bg-[#141820] rounded-2xl p-8 sm:p-12 border border-[#262a31] overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff525f]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10141a] border border-[#ff525f]/30 rounded-full text-[#ff8089] text-xs font-mono font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff525f]" />
              <span>FACTORY QUALITY ASSURANCE & WORLDWIDE RMA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Factory Technical Support & Service Center
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We stand behind every actuator we manufacture. Access authorized factory maintenance documentation, verify authentic serial numbers, claim 2-year IFMAR competition warranties, or order OEM titanium gear replacement kits.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
              <span className="bg-[#10141a] border border-[#262a31] px-3 py-1.5 rounded text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                2-YEAR WARRANTY
              </span>
              <span className="bg-[#10141a] border border-[#262a31] px-3 py-1.5 rounded text-slate-300 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#38bdf8]" />
                48-HR RMA TURNAROUND
              </span>
              <span className="bg-[#10141a] border border-[#262a31] px-3 py-1.5 rounded text-slate-300 flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-[#ff525f]" />
                FACTORY GEAR REFRESH
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Service Pillars */}
      <div className="max-w-[1360px] mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#141820] rounded-xl p-6 border border-[#262a31] flex flex-col justify-between hover:border-[#38bdf8]/40 transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-mono uppercase">
                2-Year Limited Racing Warranty
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Full factory coverage against mechanical defects, Hall sensor jitter, and brushless motor assembly failure during competition racing.
              </p>
            </div>
            <a href="#rma-form" className="mt-4 text-xs font-mono text-[#38bdf8] hover:underline flex items-center gap-1 font-bold">
              <span>Submit RMA Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-[#141820] rounded-xl p-6 border border-[#262a31] flex flex-col justify-between hover:border-[#38bdf8]/40 transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#ff525f]/10 text-[#ff525f] flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-mono uppercase">
                Factory Gear Set Overhaul
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Rebuild your high-hour servos with original 7075-T6 titanium gear sets, new high-speed Japanese ball bearings, and synthetic Krytox grease.
              </p>
            </div>
            <a href="#maintenance-guide" className="mt-4 text-xs font-mono text-[#ff8089] hover:underline flex items-center gap-1 font-bold">
              <span>View Gear Replacement Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-[#141820] rounded-xl p-6 border border-[#262a31] flex flex-col justify-between hover:border-[#38bdf8]/40 transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-mono uppercase">
                OTA Firmware Diagnostics
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Connect via the CJSERVO Bluetooth programmer box or USB link to recalibrate deadband, holding power, anti-stall angle, and zero-point trim.
              </p>
            </div>
            <button 
              onClick={onOpenSearch}
              className="mt-4 text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 font-bold text-left"
            >
              <span>Download Programmer App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#141820] rounded-xl p-6 border border-[#262a31] flex flex-col justify-between hover:border-[#38bdf8]/40 transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-mono uppercase">
                OEM Custom Actuators
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Dedicated engineering support for industrial automation, UAV throttle/aileron, and robotic serial bus (RS485/CAN) development.
              </p>
            </div>
            <button 
              onClick={onOpenDistributor}
              className="mt-4 text-xs font-mono text-amber-400 hover:underline flex items-center gap-1 font-bold text-left"
            >
              <span>Request Custom Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Serial Number & Authenticity Check Section */}
      <div className="max-w-[1360px] mx-auto px-6 mb-16">
        <div className="bg-[#141820] rounded-2xl p-8 border border-[#262a31] shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6 pb-6 border-b border-[#262a31]">
            <div>
              <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest font-bold block mb-1">
                ONLINE AUTHENTICITY & WARRANTY LOOKUP
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                Verify Serial Number & Factory QC Batch
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span>Try sample serials:</span>
              <button 
                onClick={() => setSerialInput('TS70-HV-9821')}
                className="px-2 py-1 bg-[#10141a] hover:bg-[#1f2633] border border-[#262a31] rounded text-[#38bdf8]"
              >
                TS70-9821
              </button>
              <button 
                onClick={() => setSerialInput('TS15-IFMAR-4410')}
                className="px-2 py-1 bg-[#10141a] hover:bg-[#1f2633] border border-[#262a31] rounded text-[#38bdf8]"
              >
                TS15-4410
              </button>
            </div>
          </div>

          <form onSubmit={handleCheckSerial} className="flex flex-col sm:flex-row items-center gap-3 mb-6">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={serialInput}
                onChange={(e) => setSerialInput(e.target.value)}
                placeholder="Enter 8 to 12 digit laser-etched serial on servo case (e.g. CJ-75P-9821)..."
                className="w-full bg-[#10141a] border border-[#262a31] rounded-lg pl-11 pr-4 py-3 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8]"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#10141a] font-mono text-xs uppercase font-bold rounded-lg transition-colors whitespace-nowrap shadow-md shadow-sky-500/20"
            >
              Verify Authenticity
            </button>
          </form>

          {/* Verification Result Display */}
          {serialResult && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-200">
              {serialResult.status === 'valid' ? (
                <div className="bg-[#10141a] border border-emerald-500/40 rounded-xl p-6 font-mono text-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>AUTHENTIC CJ.SERVO ACTUATOR VERIFIED</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-slate-300">
                    <div className="bg-[#141820] p-3 rounded border border-[#262a31]">
                      <span className="text-slate-500 text-[10px] block mb-1">VERIFIED MODEL:</span>
                      <strong className="text-white text-sm">{serialResult.model}</strong>
                    </div>
                    <div className="bg-[#141820] p-3 rounded border border-[#262a31]">
                      <span className="text-slate-500 text-[10px] block mb-1">QC BENCH CALIBRATION:</span>
                      <strong className="text-white">{serialResult.qcDate}</strong>
                    </div>
                    <div className="bg-[#141820] p-3 rounded border border-[#262a31]">
                      <span className="text-slate-500 text-[10px] block mb-1">FACTORY PRODUCTION BATCH:</span>
                      <strong className="text-white">{serialResult.batch}</strong>
                    </div>
                    <div className="bg-[#141820] p-3 rounded border border-[#262a31]">
                      <span className="text-slate-500 text-[10px] block mb-1">WARRANTY STATUS:</span>
                      <strong className="text-emerald-400">{serialResult.warrantyStatus}</strong>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[#10141a] border border-[#ff525f]/40 rounded-xl p-5 font-mono text-xs flex items-center gap-3 text-[#ff8089]">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-[#ff525f]" />
                  <div>
                    <span className="font-bold block">SERIAL NUMBER NOT FOUND IN CENTRAL DATABASE</span>
                    <span className="text-slate-400">
                      Please double-check the laser etching on the underside of the aluminum case, or contact our engineering desk directly at info@Cjservo.com.
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Step-by-Step Maintenance Guide Section */}
      <div className="max-w-[1360px] mx-auto px-6 mb-16" id="maintenance-guide">
        <div className="bg-[#141820] rounded-2xl p-8 border border-[#262a31] shadow-xl">
          <div className="mb-6 pb-4 border-b border-[#262a31]">
            <span className="font-mono text-xs uppercase text-[#ff525f] tracking-widest font-bold block mb-1">
              FIELD WORKSHOP MANUAL
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
              Competition Gear Train Replacement & Maintenance Guide
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Follow this step-by-step procedure to inspect titanium gearsets, replace damaged pinions, and ensure complete IP67 waterproof integrity.
            </p>
          </div>

          {/* Guide Step Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-mono text-xs">
            {[
              { step: 1, title: 'Case Disassembly & O-Rings' },
              { step: 2, title: 'Pinion & Shaft Extraction' },
              { step: 3, title: 'Krytox Grease Coating' },
              { step: 4, title: 'Center Trim & Torque Test' }
            ].map((item) => (
              <button
                key={item.step}
                onClick={() => setActiveGuideStep(item.step)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  activeGuideStep === item.step
                    ? 'bg-[#10141a] border-[#38bdf8] text-white shadow-md shadow-sky-500/10'
                    : 'bg-[#10141a]/60 border-[#262a31] text-slate-400 hover:text-white'
                }`}
              >
                <span className="text-[10px] text-[#38bdf8] font-bold block">STEP 0{item.step}</span>
                <span className="font-bold truncate block">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Guide Step Details */}
          <div className="bg-[#10141a] rounded-xl p-6 border border-[#262a31]">
            {activeGuideStep === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-white font-mono">
                  <span className="w-6 h-6 rounded-full bg-[#38bdf8] text-[#10141a] flex items-center justify-center text-xs">1</span>
                  <span>Housing Disassembly & O-Ring Seal Inspection</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Using a high-quality 1.5mm hex driver, remove the 4 precision bottom case screws in a cross pattern. Carefully pull off the top 7075 aluminum case cover without applying angular force. Inspect the silicone perimeter O-ring gasket. If pinched or dry, replace it with the new O-ring included in your rebuild kit.
                </p>
                <div className="bg-[#141820] p-4 rounded border border-[#262a31] font-mono text-xs text-slate-400 space-y-1">
                  <span className="text-white font-bold block">Required Tools:</span>
                  <div>• 1.5mm Hex Wrench (M2 Allen driver)</div>
                  <div>• Lint-free microfiber cloth & isopropyl alcohol</div>
                  <div>• Replacement Silicone O-Ring Kit #OR-25</div>
                </div>
              </div>
            )}

            {activeGuideStep === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-white font-mono">
                  <span className="w-6 h-6 rounded-full bg-[#38bdf8] text-[#10141a] flex items-center justify-center text-xs">2</span>
                  <span>Extracting Pinion, Intermediate, and Output Shaft Gears</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Carefully slide the primary output shaft gear, secondary intermediate gear, and primary motor pinion off their hardened steel pins. Note the orientation of the flat spot on the potentiometer drive shaft. Do not use metal pliers directly on gear teeth to prevent surface burring.
                </p>
                <div className="bg-[#141820] p-4 rounded border border-[#262a31] font-mono text-xs text-slate-400 space-y-1">
                  <span className="text-white font-bold block">Key Precautions:</span>
                  <div>• Keep gears in sequential order (Gear #1, #2, #3, Final 25T Spline)</div>
                  <div>• Check Japanese ball bearings inside the top cover for gritty rotation</div>
                  <div>• Clean out old worn grease residues with isopropyl spray</div>
                </div>
              </div>
            )}

            {activeGuideStep === 3 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-white font-mono">
                  <span className="w-6 h-6 rounded-full bg-[#38bdf8] text-[#10141a] flex items-center justify-center text-xs">3</span>
                  <span>Applying High-Pressure Synthetic Teflon Grease</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Install the new titanium gear train onto the pins. Apply a moderate bead of Teflon/Krytox synthetic grease evenly between the gear meshing teeth. Do not overpack the case cavity; excess grease can migrate to the motor commutator or magnetic encoder sensing area.
                </p>
                <div className="bg-[#141820] p-4 rounded border border-[#262a31] font-mono text-xs text-slate-400 space-y-1">
                  <span className="text-white font-bold block">Lubricant Benchmark:</span>
                  <div>• CJ-LUBE High-Load Synthetic Actuator Grease</div>
                  <div>• Operating Temperature: -30°C to +140°C</div>
                  <div>• Extreme pressure rating: prevents metal-to-metal galling under 75kg-cm loads</div>
                </div>
              </div>
            )}

            {activeGuideStep === 4 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-white font-mono">
                  <span className="w-6 h-6 rounded-full bg-[#38bdf8] text-[#10141a] flex items-center justify-center text-xs">4</span>
                  <span>Zero-Trim Recalibration & Torque Bench Test</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Reinstall the top cover and torque the 4 screws to 0.4 N·m. Connect the servo to your receiver or USB programmer box set to 1520µs neutral pulse. Verify smooth, quiet rotation across full ±60° travel without binding or gear backlash. If fine-tuning is needed, adjust the electronic center trim via the Bluetooth companion app.
                </p>
                <div className="bg-[#141820] p-4 rounded border border-[#262a31] font-mono text-xs text-slate-400 space-y-1">
                  <span className="text-white font-bold block">Final Check Benchmarks:</span>
                  <div>• Idle Current draw: under 50 mA at 8.4V</div>
                  <div>• Backlash tolerance: &lt; 0.5 degrees at horn center</div>
                  <div>• Waterproof seal: verify O-ring is seated flush without extrusion</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive RMA Request Form & Support Ticket Section */}
      <div className="max-w-[1360px] mx-auto px-6 mb-16" id="rma-form">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: RMA Guarantee & Policies */}
          <div className="bg-[#141820] rounded-2xl p-8 border border-[#262a31] space-y-6">
            <div>
              <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest font-bold block mb-1">
                WARRANTY & REPAIR PROCESS
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                Factory Service Procedure
              </h2>
            </div>

            <div className="space-y-4 font-mono text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-white block">Submit RMA Ticket Online</strong>
                  <span className="text-slate-400">Provide model details, serial number, and failure description below.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-white block">Instant RMA Number & Label</strong>
                  <span className="text-slate-400">Receive an authorized return number and nearest depot shipping address.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-white block">48-Hour Factory Turnaround</strong>
                  <span className="text-slate-400">Units are bench-tested, repaired with genuine gear sets, or replaced immediately.</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#10141a] rounded-xl border border-[#262a31] text-xs font-mono space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Phone className="w-4 h-4 text-[#38bdf8]" />
                <span>DIRECT TECH DESK:</span>
              </div>
              <a href="tel:1388888888" className="text-slate-300 hover:text-[#38bdf8] block">
                1388888888 (Mon-Sat 08:30 - 18:00 UTC+8)
              </a>
              <div className="flex items-center gap-2 text-white font-bold pt-2">
                <Mail className="w-4 h-4 text-[#38bdf8]" />
                <span>ENGINEERING INQUIRIES:</span>
              </div>
              <a href="mailto:info@Cjservo.com" className="text-slate-300 hover:text-[#38bdf8] block">
                info@Cjservo.com
              </a>
            </div>
          </div>

          {/* Right 2 Columns: RMA Submission Form */}
          <div className="lg:col-span-2 bg-[#141820] rounded-2xl p-8 border border-[#262a31] shadow-2xl">
            {rmaSubmitted ? (
              <div className="bg-[#10141a] rounded-xl p-8 border border-emerald-500/40 text-center font-mono space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase">
                  Service Ticket Registered Successfully
                </h3>
                <div className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Your ticket ID is <strong className="text-emerald-400 text-sm">{rmaSubmitted}</strong>. Our warranty department has received your request and a return shipping instruction document has been dispatched to <strong>{rmaForm.email || 'your email'}</strong>.
                </div>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setRmaSubmitted(null);
                      setRmaForm({
                        fullName: '',
                        email: '',
                        phone: '',
                        modelName: 'STORM-75PRO',
                        serialNumber: '',
                        purchaseDate: '',
                        purchaseChannel: 'Authorized Hobby Shop',
                        issueCategory: 'Gear Train Wear / Noise',
                        description: '',
                      });
                    }}
                    className="px-5 py-2.5 bg-[#262a31] hover:bg-[#343b46] text-white rounded text-xs uppercase font-bold"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRmaSubmit} className="space-y-4 font-mono text-xs">
                <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                  Warranty Claim & Repair Ticket Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={rmaForm.fullName}
                      onChange={(e) => setRmaForm({ ...rmaForm, fullName: e.target.value })}
                      placeholder="e.g. Michael Hansen"
                      className="w-full bg-[#10141a] border border-[#262a31] rounded px-3 py-2 text-white focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={rmaForm.email}
                      onChange={(e) => setRmaForm({ ...rmaForm, email: e.target.value })}
                      placeholder="e.g. michael@racing.com"
                      className="w-full bg-[#10141a] border border-[#262a31] rounded px-3 py-2 text-white focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1">Actuator Model *</label>
                    <select
                      value={rmaForm.modelName}
                      onChange={(e) => setRmaForm({ ...rmaForm, modelName: e.target.value })}
                      className="w-full bg-[#10141a] border border-[#262a31] rounded px-3 py-2 text-white focus:outline-none focus:border-[#38bdf8] cursor-pointer"
                    >
                      <option value="TS70">TS70 (70kg Brushless Titanium Monster 8.4V)</option>
                      <option value="TS60">TS60 (60kg Brushless Ultra-Torque Off-Road)</option>
                      <option value="TS36">TS36 (36kg Brushless Heavy-Duty Crawler)</option>
                      <option value="TS27">TS27 (27kg Brushless High-Torque Flagship)</option>
                      <option value="TS22">TS22 (22kg Brushless Standard Competition)</option>
                      <option value="TS15">TS15 (15kg Brushless High-Speed Low-Profile)</option>
                      <option value="TS12">TS12 (12kg Brushless Ultra-Fast Racing)</option>
                      <option value="CJ0005">CJ0005 (0.5kg Micro Coreless Sub-Micro)</option>
                      <option value="CJ0009">CJ0009 (0.9kg Coreless Precision Mini)</option>
                      <option value="CJ12KG">CJ12KG (12kg Waterproof Digital Standard)</option>
                      <option value="CJ15KG">CJ15KG (15kg High Torque Digital Metal Gear)</option>
                      <option value="CJ17KG">CJ17KG (17kg High Torque Digital Metal Gear)</option>
                      <option value="CJ35KG">CJ35KG (35kg Heavy-Duty Digital Crawler IP67)</option>
                      <option value="CJ45KG">CJ45KG (45kg Giant Scale High-Torque Metal Gear)</option>
                      <option value="CJ60KG">CJ60KG (60kg 1/5 Giant Scale Industrial Actuator)</option>
                      <option value="OTHER">Other Custom OEM / ODM Actuator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Serial Number</label>
                    <input
                      type="text"
                      value={rmaForm.serialNumber}
                      onChange={(e) => setRmaForm({ ...rmaForm, serialNumber: e.target.value })}
                      placeholder="e.g. CJ-75P-9821"
                      className="w-full bg-[#10141a] border border-[#262a31] rounded px-3 py-2 text-white focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Purchase Channel</label>
                    <select
                      value={rmaForm.purchaseChannel}
                      onChange={(e) => setRmaForm({ ...rmaForm, purchaseChannel: e.target.value })}
                      className="w-full bg-[#10141a] border border-[#262a31] rounded px-3 py-2 text-white focus:outline-none focus:border-[#38bdf8] cursor-pointer"
                    >
                      <option value="Authorized Hobby Shop">Authorized Hobby Shop</option>
                      <option value="A-Main / Horizon Hobby">A-Main / Horizon Hobby</option>
                      <option value="Schumacher Racing">Schumacher Racing (UK/EU)</option>
                      <option value="Factory Direct OEM">Factory Direct OEM</option>
                      <option value="Online Retailer">Online Retailer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Issue Category *</label>
                  <select
                    value={rmaForm.issueCategory}
                    onChange={(e) => setRmaForm({ ...rmaForm, issueCategory: e.target.value })}
                    className="w-full bg-[#10141a] border border-[#262a31] rounded px-3 py-2 text-white focus:outline-none focus:border-[#38bdf8] cursor-pointer"
                  >
                    <option value="Gear Train Wear / Noise">Gear Train Stripped / Backlash Noise</option>
                    <option value="Center Trim / Potentiometer Drift">Center Trim Drift / Jittering</option>
                    <option value="Motor Overheating / No Response">Motor Overheating / Unit Not Responding</option>
                    <option value="Water Intrusion / Salt Corrosion">Water Intrusion / Submersion Damage</option>
                    <option value="Routine Factory Calibration">Routine 100-Hour Factory Calibration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Detailed Failure Description *</label>
                  <textarea
                    required
                    rows={4}
                    value={rmaForm.description}
                    onChange={(e) => setRmaForm({ ...rmaForm, description: e.target.value })}
                    placeholder="Describe track conditions, ESC voltage applied, vehicle chassis, and what symptoms occurred during operation..."
                    className="w-full bg-[#10141a] border border-[#262a31] rounded px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8]"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    * Submissions are responded to within 1 business day.
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#ff525f] hover:bg-[#ff3b30] text-white font-mono text-xs uppercase font-bold rounded transition-colors flex items-center gap-2 shadow-lg shadow-red-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Service Ticket</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <div className="max-w-[1360px] mx-auto px-6 mb-16">
        <div className="bg-[#141820] rounded-2xl p-8 border border-[#262a31]">
          <div className="mb-6 pb-4 border-b border-[#262a31]">
            <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest font-bold block mb-1">
              KNOWLEDGE BASE & TROUBLESHOOTING
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#10141a] rounded-xl border border-[#262a31] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-mono text-xs sm:text-sm font-bold text-white hover:text-[#38bdf8] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                      <span>{item.q}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-[#262a31]/60 font-body">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Authorized Service Centers Grid */}
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest font-bold block mb-1">
              WORLDWIDE REPAIR STATIONS
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
              Authorized Regional Service Centers
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="bg-[#141820] rounded-xl p-6 border border-[#262a31] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#38bdf8] font-bold uppercase">NORTH AMERICA DEPOT</span>
              <span className="text-slate-500">USA / CANADA</span>
            </div>
            <h4 className="text-white text-sm font-bold">CJSERVO US Technical Depot</h4>
            <div className="text-slate-400 space-y-1">
              <div>P.O. Box 4820, Ontario, California 91761, USA</div>
              <div>Direct: +1 (800) 555-SERVO</div>
              <div>Email: rma-usa@Cjservo.com</div>
            </div>
            <div className="text-emerald-400 font-bold pt-2 flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Full Titanium Gear Inventory in Stock
            </div>
          </div>

          <div className="bg-[#141820] rounded-xl p-6 border border-[#262a31] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#38bdf8] font-bold uppercase">EUROPEAN DEPOT</span>
              <span className="text-slate-500">EU / UK</span>
            </div>
            <h4 className="text-white text-sm font-bold">CJ.SERVO Europe RMA Center</h4>
            <div className="text-slate-400 space-y-1">
              <div>Industriestraße 18, 70565 Stuttgart, Germany</div>
              <div>Direct: +49 (0) 711 9458 200</div>
              <div>Email: rma-europe@Cjservo.com</div>
            </div>
            <div className="text-emerald-400 font-bold pt-2 flex items-center gap-1.5">
              <Check className="w-4 h-4" /> IFMAR / EFRA On-Site Track Support
            </div>
          </div>

          <div className="bg-[#141820] rounded-xl p-6 border border-[#262a31] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[#38bdf8] font-bold uppercase">GLOBAL HEADQUARTERS</span>
              <span className="text-slate-500">GLOBAL OEM</span>
            </div>
            <h4 className="text-white text-sm font-bold">Dongguan Chaojia Intelligent Technology Co., Ltd</h4>
            <div className="text-slate-400 space-y-1">
              <div>No.201 room,No.3 Building,No.6 Fulong Road,Qingxi,Qingxi Town,Dongguan City,Guangdong Province</div>
              <div>Direct: 1388888888</div>
              <div>Email: info@Cjservo.com</div>
            </div>
            <div className="text-emerald-400 font-bold pt-2 flex items-center gap-1.5">
              <Check className="w-4 h-4" /> 5-Axis CNC Milling & Direct Factory Calibration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
