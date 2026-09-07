import React from 'react';
import { Phone, Calendar, ShieldCheck, Activity, HeartPulse, Clock, ArrowRight, MessageSquare, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Hero({ onOpenAppointment }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-hospital-950 to-slate-900 text-white pt-6 sm:pt-10 pb-16 lg:py-20">
      {/* Background Glows & Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-hospital-500/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Prominent Brand Emblem Card (Visible on all devices) */}
        <div className="mb-8 lg:mb-12 flex flex-col items-center lg:items-start">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-3 sm:p-4 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border-2 border-hospital-200/80 max-w-full hover:shadow-glow transition-all">
            {/* The Official Hospital Logo */}
            <div className="bg-white rounded-2xl p-1.5 flex items-center justify-center shrink-0">
              <img
                src="/images/logo.png"
                alt="Shree Sai Multispeciality Hospital Official Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>

            {/* Brand Credential Pill */}
            <div className="text-center sm:text-left border-t sm:border-t-0 sm:border-l border-slate-200 pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-hospital-700 font-extrabold text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-hospital-600 shrink-0" />
                <span>ಶ್ರೀ ಸಾಯಿ ಮಲ್ಟಿಸ್ಪೆಷಾಲಿಟಿ ಹಾಸ್ಪಿಟಲ್</span>
              </div>
              <div className="text-slate-800 font-extrabold text-sm sm:text-base leading-tight mt-0.5">
                ತಾಳಿಕೋಟೆ - ಬಿಜಾಪುರ ಮುಖ್ಯ ರಸ್ತೆ
              </div>
              <div className="text-emerald-700 font-bold text-[11px] sm:text-xs flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>24/7 Emergency, ICU & Surgical Care Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-hospital-300 via-sky-200 to-emerald-300">Multispeciality</span> Healthcare in Talikot
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {hospitalData.heroDescription}
            </p>

            {/* Key Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-left shadow-sm">
                <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">24/7 Casualty</div>
                  <div className="text-xs font-bold text-slate-100">Emergency Care</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-left shadow-sm">
                <div className="p-2 rounded-xl bg-hospital-500/20 text-hospital-400 shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Modular OT</div>
                  <div className="text-xs font-bold text-slate-100">ICU & Surgeries</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-left shadow-sm">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">In-House</div>
                  <div className="text-xs font-bold text-slate-100">Diagnostics & Lab</div>
                </div>
              </div>
            </div>

            {/* Direct Call & Booking CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold shadow-xl shadow-rose-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base group"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                <span>Emergency: {hospitalData.contact.emergencyNumber}</span>
              </a>

              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-hospital-600 hover:bg-hospital-500 text-white font-bold shadow-xl shadow-hospital-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base border border-hospital-400/30"
              >
                <Calendar className="w-5 h-5 text-hospital-200" />
                <span>Book Consultation / OPD</span>
              </button>

              <a
                href={`https://wa.me/${hospitalData.contact.whatsappNumber}?text=${encodeURIComponent(hospitalData.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold border border-emerald-500/30 transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Key Value Checklist */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Wait Emergency</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Experienced Specialists</span>
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
                  alt="Shree Sai Multispeciality Hospital Talikot Main Entrance Campus"
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
                    Shree Sai Multispeciality Hospital
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Main Road, Talikot — Modern Grand Entrance, Continuous Stretcher Ramp & Gardens
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
