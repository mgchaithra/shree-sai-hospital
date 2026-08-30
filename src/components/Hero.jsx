import React from 'react';
import { Phone, Calendar, ShieldCheck, Activity, HeartPulse, Clock, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Hero({ onOpenAppointment }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-hospital-950 to-slate-900 text-white pt-8 pb-16 lg:py-20">
      {/* Background Glows & Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-hospital-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-hospital-900/80 border border-hospital-500/40 text-hospital-300 text-xs sm:text-sm font-medium shadow-inner backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Serving Talikot & Bijapur District with Clinical Excellence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-hospital-400 via-sky-300 to-emerald-300">Multispeciality</span> Healthcare in Talikot
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {hospitalData.heroDescription}
            </p>

            {/* Key Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm text-left">
                <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">24/7 Casualty</div>
                  <div className="text-xs font-bold text-slate-100">Emergency Care</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm text-left">
                <div className="p-2 rounded-lg bg-hospital-500/20 text-hospital-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Modular OT</div>
                  <div className="text-xs font-bold text-slate-100">ICU & Surgeries</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm text-left">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">In-House</div>
                  <div className="text-xs font-bold text-slate-100">Diagnostics & Lab</div>
                </div>
              </div>
            </div>

            {/* Direct Call & Booking CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold shadow-lg shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base group"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                <span>Call Emergency: {hospitalData.contact.emergencyNumber}</span>
              </a>

              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-hospital-600 hover:bg-hospital-500 text-white font-semibold shadow-lg shadow-hospital-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base border border-hospital-400/30"
              >
                <Calendar className="w-5 h-5 text-hospital-200" />
                <span>Book Consultation / OPD</span>
              </button>

              <a
                href={`https://wa.me/${hospitalData.contact.whatsappNumber}?text=${encodeURIComponent(hospitalData.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-semibold border border-emerald-500/30 transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Key Value Checklist */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Wait Emergency</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Experienced Surgeons</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Expansive Green Campus</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Card Showcase with Real Entrance Photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/60 bg-slate-800 group">
                <img
                  src="/images/hospital-entrance-aerial.jpg"
                  alt="Shri Sai Multispeciality Hospital Talikot Main Entrance Campus"
                  className="w-full h-80 sm:h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Overlay Badge at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600 text-white text-[11px] font-bold uppercase tracking-wider mb-2 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span>24/7 Multi-Speciality Campus</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                    Shri Sai Multispeciality Hospital
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Main Road, Talikot — Modern Grand Entrance, Dedicated Emergency Ramp & Gardens
                  </p>
                </div>
              </div>

              {/* Floating Highlight Card 1: Critical Care */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-xl backdrop-blur-md max-w-[230px] text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-hospital-500/20 text-hospital-400 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Critical Care</div>
                    <div className="text-sm font-bold text-white">50+ Beds & ICU</div>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card 2: Emergency Ramp */}
              <div className="absolute -top-4 -right-2 sm:-right-4 p-3.5 rounded-2xl bg-emerald-950/90 border border-emerald-600/40 shadow-xl backdrop-blur-md text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <div>
                    <div className="text-[11px] text-emerald-300 font-medium">Stretcher Ramp & Lift</div>
                    <div className="text-xs font-bold text-emerald-100">Zero Delay Access</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
