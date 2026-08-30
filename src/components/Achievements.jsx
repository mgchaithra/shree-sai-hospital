import React from 'react';
import { Users, HeartPulse, ShieldAlert, Stethoscope, BedDouble, Award, CheckCircle } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Achievements() {
  const iconMap = {
    Users: Users,
    HeartPulse: HeartPulse,
    ShieldAlert: ShieldAlert,
    Stethoscope: Stethoscope,
    BedDouble: BedDouble
  };

  return (
    <section id="achievements" className="py-16 bg-gradient-to-b from-slate-900 via-hospital-950 to-slate-900 text-white relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-500/10 text-hospital-400 text-xs font-bold uppercase tracking-wider mb-3 border border-hospital-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Clinical Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Institutional Excellence & Healthcare Impact
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Dedicated to advancing healthcare standards across Talikot, Muddebihal, and Bijapur district with modern technology and clinical integrity.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {hospitalData.achievements.map((item) => {
            const Icon = iconMap[item.icon] || Award;
            const isEmergency = item.id === 'emergency';

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 ${
                  isEmergency
                    ? 'bg-gradient-to-b from-rose-950/80 to-slate-900 border border-rose-500/40 shadow-lg shadow-rose-950/30'
                    : 'bg-slate-850/80 bg-slate-900/90 border border-slate-800 hover:border-hospital-500/50 shadow-md'
                }`}
              >
                {/* Glow pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    isEmergency 
                      ? 'bg-rose-500/20 text-rose-400' 
                      : 'bg-hospital-500/20 text-hospital-400'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {isEmergency && (
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                    </span>
                  )}
                </div>

                {/* Metric value */}
                <div className={`text-3xl sm:text-4xl font-black tracking-tight ${
                  isEmergency ? 'text-rose-400' : 'text-white'
                }`}>
                  {item.metric}
                </div>

                {/* Title */}
                <div className="text-base font-bold text-slate-100 mt-1 mb-2">
                  {item.label}
                </div>

                {/* Subtext */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Clinical Quality Statement */}
        <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-hospital-900/40 border border-hospital-500/30 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-sm sm:text-base">
                100% Patient-Centric Transparency & Quality Protocol
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Clean OT sterile standards, ethical treatment guidelines, and round-the-clock intensive care.
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-hospital-600 hover:bg-hospital-500 text-white text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors"
          >
            <span>Visit Hospital Today</span>
          </a>
        </div>

      </div>
    </section>
  );
}

