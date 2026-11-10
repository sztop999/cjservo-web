import React, { useState } from 'react';
import { X, Sliders, Smartphone, RotateCcw, Check, Sparkles, Send } from 'lucide-react';

interface OtaTuningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OtaTuningModal: React.FC<OtaTuningModalProps> = ({ isOpen, onClose }) => {
  const [deadband, setDeadband] = useState<number>(1.2);
  const [holdingPower, setHoldingPower] = useState<number>(92);
  const [steeringBoost, setSteeringBoost] = useState<number>(18);
  const [neutralCenter, setNeutralCenter] = useState<number>(1500);
  const [servoAngle, setServoAngle] = useState<number>(0);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);
  const [flashSuccess, setFlashSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleTestPulse = (targetAngle: number) => {
    setServoAngle(targetAngle);
    setTimeout(() => {
      setServoAngle(0);
    }, 600);
  };

  const handleSyncBluetooth = () => {
    setIsFlashing(true);
    setFlashSuccess(false);
    setTimeout(() => {
      setIsFlashing(false);
      setFlashSuccess(true);
      setTimeout(() => setFlashSuccess(false), 3000);
    }, 1200);
  };

  const handleResetDefaults = () => {
    setDeadband(1.0);
    setHoldingPower(85);
    setSteeringBoost(10);
    setNeutralCenter(1500);
    setServoAngle(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl bg-[#141820] border border-[#262a31] rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#181c22] border-b border-[#262a31] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-[#38bdf8]" />
            <div>
              <span className="text-xs font-mono text-[#38bdf8] uppercase">CJ-LINK WIRELESS TELEMETRY APP</span>
              <h3 className="text-lg font-bold text-white uppercase">OTA Parametric Tuning Console</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-[#262a31] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Top connection status & Virtual Servo Horn Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-[#10141a] p-4 rounded-lg border border-[#262a31]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono text-emerald-400 font-bold">BLE CONNECTED: STORM-75PRO #0842</span>
              </div>
              <p className="text-xs text-slate-400">
                Live MCU parameter handshake verified. Adjust parameters below and flash updates in real-time.
              </p>
              <div className="flex gap-2 mt-1">
                <button
                  onClick={() => handleTestPulse(-45)}
                  className="px-2.5 py-1 bg-[#262a31] hover:bg-[#38bdf8] hover:text-black rounded text-xs font-mono text-white transition-colors"
                >
                  Pulse -45°
                </button>
                <button
                  onClick={() => handleTestPulse(0)}
                  className="px-2.5 py-1 bg-[#262a31] hover:bg-white hover:text-black rounded text-xs font-mono text-white transition-colors"
                >
                  Center 0°
                </button>
                <button
                  onClick={() => handleTestPulse(45)}
                  className="px-2.5 py-1 bg-[#262a31] hover:bg-[#38bdf8] hover:text-black rounded text-xs font-mono text-white transition-colors"
                >
                  Pulse +45°
                </button>
              </div>
            </div>

            {/* Virtual CNC Servo Spline simulation */}
            <div className="flex flex-col items-center justify-center p-2">
              <div className="relative w-32 h-32 rounded-full border-2 border-dashed border-[#262a31] flex items-center justify-center">
                {/* Degree indicators */}
                <span className="absolute top-1 text-[10px] font-mono text-slate-500">0°</span>
                <span className="absolute left-1 text-[10px] font-mono text-slate-500">-90°</span>
                <span className="absolute right-1 text-[10px] font-mono text-slate-500">+90°</span>

                {/* Rotating Anodized Horn */}
                <div
                  className="w-4 h-24 bg-gradient-to-t from-[#ff525f] to-[#ff7b85] rounded-full shadow-lg transition-transform duration-300 origin-center flex items-start justify-center pt-1"
                  style={{ transform: `rotate(${servoAngle}deg)` }}
                >
                  <span className="w-2 h-2 rounded-full bg-white shadow"></span>
                </div>
                {/* Spline center screw */}
                <div className="absolute w-7 h-7 rounded-full bg-[#181c22] border-2 border-[#38bdf8] flex items-center justify-center">
                  <span className="w-2 h-0.5 bg-white"></span>
                </div>
              </div>
              <span className="mt-2 text-[11px] font-mono text-[#38bdf8]">
                ACTUAL TRAVEL: {servoAngle >= 0 ? `+${servoAngle}` : servoAngle}° (Jitter: &lt;0.001°)
              </span>
            </div>
          </div>

          {/* Sliders for Parametric Tuning */}
          <div className="space-y-4">
            {/* Deadband */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-white font-bold">Deadband Width (Sensor Sensitivity)</span>
                <span className="text-[#38bdf8] font-bold">{deadband.toFixed(1)} µs</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.1"
                value={deadband}
                onChange={(e) => setDeadband(parseFloat(e.target.value))}
                className="w-full accent-[#38bdf8] bg-[#262a31] h-1.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-0.5">
                <span>0.5 µs (Extreme Track Sharpness)</span>
                <span>5.0 µs (Rough Offroad Anti-Jitter)</span>
              </div>
            </div>

            {/* Holding Power */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-white font-bold">Holding Power & Damping Brake</span>
                <span className="text-[#ffb778] font-bold">{holdingPower}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                step="1"
                value={holdingPower}
                onChange={(e) => setHoldingPower(parseInt(e.target.value))}
                className="w-full accent-[#ffb778] bg-[#262a31] h-1.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-0.5">
                <span>50% (Low Thermal Drift)</span>
                <span>100% (Maximum Solid Lock)</span>
              </div>
            </div>

            {/* Steering Boost */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-white font-bold">Initial Turn-In Boost Curve</span>
                <span className="text-[#ff525f] font-bold">+{steeringBoost}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="35"
                step="1"
                value={steeringBoost}
                onChange={(e) => setSteeringBoost(parseInt(e.target.value))}
                className="w-full accent-[#ff525f] bg-[#262a31] h-1.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-0.5">
                <span>0% Linear</span>
                <span>+35% Aggressive Apex Snap</span>
              </div>
            </div>

            {/* Neutral Center Micro-Trim */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-white font-bold">Neutral Sub-Trim Micro Pulse</span>
                <span className="text-white font-bold">{neutralCenter} µs</span>
              </div>
              <input
                type="range"
                min="1450"
                max="1550"
                step="1"
                value={neutralCenter}
                onChange={(e) => setNeutralCenter(parseInt(e.target.value))}
                className="w-full accent-white bg-[#262a31] h-1.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-0.5">
                <span>1450 µs</span>
                <span>1500 µs (Factory Center)</span>
                <span>1550 µs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#181c22] border-t border-[#262a31] flex items-center justify-between">
          <button
            onClick={handleResetDefaults}
            className="px-3 py-1.5 text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Restore Defaults
          </button>

          <div className="flex items-center gap-2">
            {flashSuccess && (
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> EEPROM Updated!
              </span>
            )}
            <button
              onClick={handleSyncBluetooth}
              disabled={isFlashing}
              className="px-4 py-2 bg-[#38bdf8] hover:bg-[#00daf3] text-black font-bold rounded text-xs flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              {isFlashing ? (
                <>Flashing EEPROM via BLE...</>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Sync Parameters to Servo
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
