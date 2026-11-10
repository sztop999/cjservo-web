import React, { useState } from 'react';
import { 
  Download, 
  Search, 
  Box, 
  FileText, 
  Smartphone, 
  Cpu, 
  ShieldCheck, 
  Check, 
  FileCode, 
  Radio, 
  Layers,
  ExternalLink,
  Filter
} from 'lucide-react';

interface DownloadsPageProps {
  onNavigateHome: () => void;
  onOpenDistributor: () => void;
}

type DownloadCategory = 'all' | 'cad' | 'software' | 'datasheets' | 'manuals' | 'certs';

export const DownloadsPage: React.FC<DownloadsPageProps> = ({ onNavigateHome, onOpenDistributor }) => {
  const [selectedCategory, setSelectedCategory] = useState<DownloadCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const downloadItems = [
    // 3D CAD STEP Files
    {
      id: 'cad-ts70',
      category: 'cad',
      title: 'TS70 70KG Brushless 3D CAD Model (STEP AP214)',
      version: 'Rev 2.4',
      fileSize: '4.8 MB',
      format: 'STEP / STP',
      date: 'OCT 2024',
      description: 'Solid 3D CAD geometry for 1/5 and monster crawler chassis design. Accurate mass properties & center of gravity.',
      tags: ['TS70', 'SolidWorks', 'Fusion 360', 'STEP']
    },
    {
      id: 'cad-ts15',
      category: 'cad',
      title: 'TS15 Low-Profile Competition 3D CAD',
      version: 'Rev 3.1',
      fileSize: '3.2 MB',
      format: 'STEP / STP',
      date: 'SEP 2024',
      description: 'Ultra-low 27.2mm profile envelope for 1/10 electric touring and drift chassis weight balancing.',
      tags: ['TS15', 'TS12', 'IFMAR Spec', 'Touring Car', 'STEP']
    },
    {
      id: 'cad-tr4',
      category: 'cad',
      title: 'TR-4 Mini Waterproof Shift Servo CAD',
      version: 'Rev 1.8',
      fileSize: '1.8 MB',
      format: 'STEP / STP',
      date: 'AUG 2024',
      description: 'Drop-in mini servo case dimensions for Traxxas TRX-4 & TRX-6 differential cable integration.',
      tags: ['TR-4', 'TRX-4', 'Micro Servo', 'STEP']
    },
    {
      id: 'cad-cj60kg',
      category: 'cad',
      title: 'CJ60KG / CJ45KG 1/5 Giant Heavy Scale CAD',
      version: 'Rev 1.2',
      fileSize: '5.4 MB',
      format: 'STEP / STP',
      date: 'JUL 2024',
      description: 'Full 1/5 Baja & industrial robotic joint 3D geometry with heavy-duty output shaft spline detailing.',
      tags: ['CJ60KG', 'CJ45KG', '1/5 Scale', 'Industrial', 'STEP']
    },
    {
      id: 'cad-wh40',
      category: 'cad',
      title: 'WH-40KG Submersible Waterproof CAD',
      version: 'Rev 2.0',
      fileSize: '3.9 MB',
      format: 'STEP / STP',
      date: 'JUN 2024',
      description: 'Complete IP68 sealed case model with dual ball bearing positions and silicone O-ring groove details.',
      tags: ['WH-40KG', 'IP68 Submersible', 'Crawler', 'STEP']
    },
    {
      id: 'cad-rs485',
      category: 'cad',
      title: 'RS485-M50 Serial Bus Actuator & ROS2 URDF',
      version: 'Rev 2.5',
      fileSize: '6.2 MB',
      format: 'STEP + URDF',
      date: 'NOV 2024',
      description: 'Industrial robotic actuator 3D assembly and ROS/ROS2 URDF kinematic collision meshes.',
      tags: ['RS485-M50', 'Robotics', 'ROS2', 'URDF']
    },
    {
      id: 'cad-wing9g',
      category: 'cad',
      title: 'GW-9G Thin Wing Glider Servo 3D CAD (.STEP)',
      version: 'Rev 1.1',
      fileSize: '2.1 MB',
      format: 'STEP / STP',
      date: 'NOV 2024',
      description: 'Ultra-thin 8.5mm composite wing envelope for DLG, F3K sailplanes, and RC glider direct bay mounting.',
      tags: ['Thin Wing', 'Glider Servo', 'Micro 9g', 'STEP']
    },
    {
      id: 'cad-horn25t',
      category: 'cad',
      title: '25T Aluminum Clamping Servo Horn 3D CAD & Blueprint',
      version: 'Rev 2.0',
      fileSize: '1.4 MB',
      format: 'STEP + 2D PDF',
      date: 'OCT 2024',
      description: 'Aviation 7075-T6 dual-bolt clamping horn geometry with 20mm and 24mm linkage holes and spline tolerance.',
      tags: ['25T Horn', 'Clamping Horn', '7075-T6', 'STEP']
    },

    // Software & Programming Tools
    {
      id: 'soft-ble-apk',
      category: 'software',
      title: 'CJ-Link Bluetooth Program Console (Android APK)',
      version: 'v2.4.2 Release',
      fileSize: '24.6 MB',
      format: 'Android .APK',
      date: 'OCT 2024',
      description: 'Official wireless mobile app for deadband tuning, boost curves, holding power, and neutral trim via BLE.',
      tags: ['Android', 'Bluetooth OTA', 'App']
    },
    {
      id: 'soft-ble-ios',
      category: 'software',
      title: 'CJ-Link iOS App on Apple App Store',
      version: 'v2.4.1 Release',
      fileSize: '32.1 MB',
      format: 'iOS / iPadOS',
      date: 'OCT 2024',
      description: 'Direct link to Apple App Store for iPhones and iPads. Instant connection with CJ Bluetooth Program Box.',
      tags: ['iOS', 'Apple App Store', 'iPhone']
    },
    {
      id: 'soft-usb-pc',
      category: 'software',
      title: 'CJSERVO PC Parameter Tuning Suite (Windows 10/11)',
      version: 'v3.1.0 Build 248',
      fileSize: '16.8 MB',
      format: 'Windows .EXE',
      date: 'SEP 2024',
      description: 'Full-featured desktop software for USB-linked servo telemetry logging, angle calibration, and batch flashing.',
      tags: ['Windows', 'USB Link', 'PC Software']
    },
    {
      id: 'soft-ros2',
      category: 'software',
      title: 'ROS2 Humble / Iron Hardware Interface Driver',
      version: 'v1.4.0',
      fileSize: '8.4 MB',
      format: 'Debian / Git',
      date: 'OCT 2024',
      description: 'Complete ros2_control hardware interface for RS485 and CAN serial bus daisy-chained joint actuators.',
      tags: ['ROS2', 'Linux', 'Robotics', 'GitHub']
    },
    {
      id: 'soft-drivers',
      category: 'software',
      title: 'CP2102 & CH340 Virtual COM Port Drivers',
      version: 'v6.7.5',
      fileSize: '5.2 MB',
      format: 'Win/Mac Driver',
      date: 'AUG 2024',
      description: 'Certified USB-to-UART bridge drivers for hardware connection with portable program boxes.',
      tags: ['Drivers', 'USB', 'Windows', 'macOS']
    },

    // 2D PDF Engineering Blueprints
    {
      id: 'pdf-catalog',
      category: 'datasheets',
      title: '2025 Comprehensive Product Spec Book (Full Catalog)',
      version: 'Edition 2025.1',
      fileSize: '18.4 MB',
      format: 'Vector PDF',
      date: 'NOV 2024',
      description: 'Complete 48-page catalog with electrical tables, torque curves, dimensional drawings, and horn accessories.',
      tags: ['Catalog', 'Full Line', 'PDF', '2025']
    },
    {
      id: 'pdf-storm75-ds',
      category: 'datasheets',
      title: 'STORM-75PRO Engineering Blueprint & Wiring Pinout',
      version: 'Rev 2.5',
      fileSize: '2.4 MB',
      format: 'Engineering PDF',
      date: 'OCT 2024',
      description: '2D orthographic projection, mounting hole dimensions, stall current curves, and S.BUS2 channel mapping.',
      tags: ['STORM-75PRO', 'Datasheet', 'PDF']
    },
    {
      id: 'pdf-ts15-ds',
      category: 'datasheets',
      title: 'TS15 Low-Profile Mechanical Dimension Drawing',
      version: 'Rev 3.0',
      fileSize: '1.9 MB',
      format: 'Engineering PDF',
      date: 'SEP 2024',
      description: 'Dimension specs, Sanwa SXR / PGS telemetry wiring, and titanium gear ratio schematic.',
      tags: ['TS15', 'Datasheet', 'PDF']
    },

    // Manuals & Transmitter Protocols
    {
      id: 'man-sanwa',
      category: 'manuals',
      title: 'Sanwa M17 & MT-5 Telemetry Configuration Guide',
      version: 'v2.1',
      fileSize: '1.4 MB',
      format: 'PDF Guide',
      date: 'AUG 2024',
      description: 'Step-by-step setup guide for SXR / SUR high-response telemetry return and transmitter program link.',
      tags: ['Sanwa', 'M17', 'Telemetry', 'Guide']
    },
    {
      id: 'man-gyro-v4',
      category: 'manuals',
      title: 'RC Car Steering Gyro V4 Setup & Dual-Gain Tuning Guide',
      version: 'v2.0',
      fileSize: '1.9 MB',
      format: 'PDF Guide',
      date: 'OCT 2024',
      description: 'Complete wiring pinout, AVCS Heading Lock vs Normal Mode setup, and transmitter 3CH/4CH remote EPA adjustment.',
      tags: ['RC Drift Gyro', 'Gyro V4', 'Drift 1/10', 'Guide']
    },
    {
      id: 'man-prog-box',
      category: 'manuals',
      title: 'USB Servo Programmer Card / Box Quick Reference Card',
      version: 'v3.2',
      fileSize: '2.3 MB',
      format: 'PDF Guide',
      date: 'SEP 2024',
      description: 'Field operation guide for OLED programmer card, PC USB bridge mode, angle endpoints, and programmable brushless servo firmware flashing.',
      tags: ['USB Programmer', 'Servo Programmer', 'Manual', 'Guide']
    },

    // Quality & Compliance Certificates
    {
      id: 'cert-iso',
      category: 'certs',
      title: 'ISO 9001:2015 Quality Management Certificate',
      version: 'Official Scan',
      fileSize: '1.2 MB',
      format: 'Certified PDF',
      date: 'VALID TO 2027',
      description: 'Official certificate issued for design, manufacturing, and assembly of precision digital actuators.',
      tags: ['ISO9001', 'Certificate', 'PDF']
    },
    {
      id: 'cert-ce',
      category: 'certs',
      title: 'CE & EMC Electromagnetic Conformity Declaration',
      version: 'Directive 2014/30/EU',
      fileSize: '850 KB',
      format: 'Certified PDF',
      date: 'VALID',
      description: 'EU compliance report validating zero interference with 2.4GHz RF communication and ESD immunity.',
      tags: ['CE', 'EMC', 'Declaration']
    },
    {
      id: 'cert-rohs',
      category: 'certs',
      title: 'RoHS 2.0 & REACH Chemical Safety Test Report',
      version: 'Report 2024-C38',
      fileSize: '620 KB',
      format: 'Certified PDF',
      date: 'VALID',
      description: 'Laboratory analysis validating lead-free solder paste and toxic-free silicone lead wires.',
      tags: ['RoHS', 'REACH', 'Test Report']
    }
  ];

  const handleDownload = (id: string, title: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      alert(`Initiated download: ${title}`);
    }, 900);
  };

  const filteredItems = downloadItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full bg-[#10141a] pt-28 pb-20">
      {/* Breadcrumb Sub-Header */}
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
            <span className="text-white font-bold">Downloads & Technical Asset Repository</span>
          </div>
          <span className="text-[#38bdf8] hidden sm:inline-block">
            Over 60+ CAD Models, Firmware & Manuals
          </span>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 pt-12 space-y-12">
        {/* Hero Banner */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#181c22] text-[#38bdf8] font-mono text-xs uppercase tracking-wider rounded border border-[#262a31] flex items-center gap-1.5 font-bold">
              <Download className="w-3.5 h-3.5 text-[#38bdf8]" />
              ENGINEERING ASSET LIBRARY
            </span>
            <span className="px-3 py-1 bg-[#181c22] text-white font-mono text-xs uppercase tracking-wider rounded border border-[#262a31]">
              INSTANT STEP / PDF / APK DOWNLOAD
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.15]">
            TECHNICAL DOWNLOADS & FIRMWARE CENTER
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Download production-ready 3D solid CAD models (.STEP / .URDF), 2D dimensional engineering schematics, USB parameter programmers, mobile OTA tuning apps, and official ISO/CE conformity certificates for all CJSERVO actuators manufactured by Dongguan Chaojia Intelligent Technology Co., Ltd.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-[#141820] p-4 sm:p-6 rounded-2xl border border-[#262a31] shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search CAD, model (e.g. TS70, TS15, TS27, CJ35KG, STEP)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#10141a] border border-[#262a31] rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:border-[#38bdf8]"
              />
            </div>

            {/* Quick Result Count */}
            <div className="font-mono text-xs text-slate-400">
              Showing <strong className="text-white">{filteredItems.length}</strong> technical resources
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none font-mono text-xs">
            {[
              { id: 'all', label: 'All Files', icon: Layers },
              { id: 'cad', label: '3D CAD & STEP', icon: Box },
              { id: 'software', label: 'Software & Apps', icon: Smartphone },
              { id: 'datasheets', label: '2D Blueprints & Catalog', icon: FileText },
              { id: 'manuals', label: 'Telemetry & Manuals', icon: Radio },
              { id: 'certs', label: 'ISO & Compliance', icon: ShieldCheck }
            ].map((cat) => {
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as DownloadCategory)}
                  className={`px-3.5 py-2 rounded-lg font-bold uppercase transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-[#38bdf8] text-black shadow-md shadow-cyan-500/20'
                      : 'bg-[#181c22] text-slate-400 hover:text-white border border-[#262a31]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#141820] hover:bg-[#181c22] rounded-xl p-5 border border-[#262a31] hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between shadow-lg group"
            >
              <div className="space-y-3">
                {/* Header row with format and size badge */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-[#10141a] text-[#38bdf8] border border-[#262a31] font-bold">
                    {item.format}
                  </span>
                  <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                    <span>{item.version}</span>
                    <span>•</span>
                    <span>{item.fileSize}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 bg-[#10141a] text-slate-400 rounded text-[10px] font-mono border border-[#262a31]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-[#262a31] flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  Updated: {item.date}
                </span>

                <button
                  onClick={() => handleDownload(item.id, item.title)}
                  disabled={downloadingId === item.id}
                  className="px-3 py-1.5 bg-[#181c22] group-hover:bg-[#ff525f] text-white rounded font-mono text-xs uppercase font-bold transition-all flex items-center gap-1.5 border border-[#262a31] group-hover:border-transparent"
                >
                  {downloadingId === item.id ? (
                    <>Downloading...</>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" /> Download
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if nothing matches */}
        {filteredItems.length === 0 && (
          <div className="p-12 text-center bg-[#141820] rounded-xl border border-[#262a31] space-y-3 font-mono">
            <Box className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-white">No technical assets match your search</h3>
            <p className="text-xs text-slate-400">
              Try searching with generic terms like "STEP", "CAD", "PDF", "TS15", or clear your filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#262a31] hover:bg-white hover:text-black text-white text-xs rounded transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* B2B Custom Engineering Drawings Callout */}
        <div className="bg-[#141820] rounded-2xl p-6 sm:p-10 border border-[#262a31] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase text-[#38bdf8] tracking-widest font-bold">
              CANNOT FIND YOUR TARGET SPECIFICATION?
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Request Confidential 3D STEP & Custom Envelope Drawings
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              For aerospace airframes, custom drone gimbals, and automated factory robotics, our engineering office provides tailored 3D CAD step models with NDA confidentiality.
            </p>
          </div>

          <button
            onClick={onOpenDistributor}
            className="px-6 py-3 bg-[#ff525f] hover:bg-[#ff3b30] text-white font-mono text-xs uppercase tracking-wider rounded font-bold transition-all flex items-center gap-2 shadow-lg shadow-red-500/20 whitespace-nowrap flex-shrink-0"
          >
            Request OEM Drawing Pack
          </button>
        </div>
      </div>
    </div>
  );
};
