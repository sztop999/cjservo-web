import React, { useState } from 'react';
import { X, Building2, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface DistributorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DistributorModal: React.FC<DistributorModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    country: 'United States',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: 'Hobby Distributor',
    monthlyVolume: '500 - 2,000 units',
    inquiryNotes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state for feedback
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#141820] border border-[#262a31] rounded-xl shadow-2xl overflow-hidden my-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#181c22] border-b border-[#262a31] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#ff525f]" />
            <div>
              <span className="text-xs font-mono text-[#38bdf8] uppercase">GLOBAL B2B SUPPLY & OEM/ODM</span>
              <h3 className="text-lg font-bold text-white uppercase">Distributor & OEM Inquiry</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-[#262a31] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase">Inquiry Successfully Transmitted</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.contactPerson || 'Partner'}</strong>. 
              Our Global Commercial Sales Director will review your application for <strong>{formData.companyName || 'your enterprise'}</strong> 
              and dispatch our 2025 Wholesale Price Book and NDA within 24 business hours.
            </p>
            <div className="bg-[#10141a] p-3 rounded text-xs font-mono text-slate-400 inline-block border border-[#262a31]">
              Ticket Ref: OEM-CJ-{(Math.random() * 900000 + 100000).toFixed(0)} | Factory Desk: info@Cjservo.com
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-[#38bdf8] text-black font-bold rounded text-xs uppercase tracking-wider hover:bg-[#00daf3]"
              >
                Close & Return to Portal
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xs text-slate-400 leading-relaxed">
              CJSERVO (Dongguan Chaojia Intelligent Technology Co., Ltd) supplies official national distributors, commercial drone manufacturers, and robotics developers. Direct factory tier pricing and custom laser-engraved housings available.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <label className="text-slate-300 block mb-1">Company / Team Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Racing Dynamics"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-[#10141a] border border-[#262a31] rounded p-2 text-white focus:outline-none focus:border-[#38bdf8]"
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Country / Territory *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. United States, Germany, Japan"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-[#10141a] border border-[#262a31] rounded p-2 text-white focus:outline-none focus:border-[#38bdf8]"
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Contact Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full bg-[#10141a] border border-[#262a31] rounded p-2 text-white focus:outline-none focus:border-[#38bdf8]"
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="sales@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#10141a] border border-[#262a31] rounded p-2 text-white focus:outline-none focus:border-[#38bdf8]"
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Primary Business Type</label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full bg-[#10141a] border border-[#262a31] rounded p-2 text-white focus:outline-none focus:border-[#38bdf8]"
                >
                  <option value="Hobby Distributor">National Hobby Distributor</option>
                  <option value="Drone / UAV OEM">Commercial Drone / UAV OEM</option>
                  <option value="Robotics Engineering">Industrial Robotics / Automation</option>
                  <option value="Factory Racing Team">Pro Racing Team Sponsorship</option>
                  <option value="Retail Chain">Hobby Retail Store / Online Shop</option>
                </select>
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Estimated Annual Volume</label>
                <select
                  value={formData.monthlyVolume}
                  onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                  className="w-full bg-[#10141a] border border-[#262a31] rounded p-2 text-white focus:outline-none focus:border-[#38bdf8]"
                >
                  <option value="100 - 500 units">100 - 500 units / year</option>
                  <option value="500 - 2,000 units">500 - 2,000 units / year</option>
                  <option value="2,000 - 10,000 units">2,000 - 10,000 units / year</option>
                  <option value="10,000+ units">10,000+ units / year (OEM Custom)</option>
                </select>
              </div>
            </div>

            <div className="text-xs font-mono">
              <label className="text-slate-300 block mb-1">Application Specifics or Target Model Lines</label>
              <textarea
                rows={3}
                placeholder="Mention specific models (TS70, TS15, CJ35KG, RS485 serial actuators) or custom voltage/spline requirements..."
                value={formData.inquiryNotes}
                onChange={(e) => setFormData({ ...formData, inquiryNotes: e.target.value })}
                className="w-full bg-[#10141a] border border-[#262a31] rounded p-2 text-white focus:outline-none focus:border-[#38bdf8]"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Direct factory wholesale supply. All data protected by international NDA standards.</span>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#ff525f] hover:bg-[#ff3b30] text-white font-bold rounded text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-red-500/20"
              >
                <Send className="w-3.5 h-3.5" /> Submit Wholesale Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
