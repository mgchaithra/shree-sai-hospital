import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  Award, 
  CheckCircle,
  Phone,
  ArrowRight,
  TreePine
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function AboutSection({ onOpenAppointment }) {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column: Bird's-Eye Campus Masterplan */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
              <img
                src="/images/hospital-campus-overview.jpg"
                alt="Shri Sai Hospital Talikot Master Campus Aerial View"
                className="w-full h-80 sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              
              {/* Highlighted Logo Badge in Campus View */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border-2 border-hospital-100">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <div className="p-1 bg-white rounded-xl shadow-sm shrink-0">
                    <img
                      src="/images/logo.jpg"
                      alt="Shri Sai Hospital Logo"
                      className="h-14 sm:h-18 w-auto object-contain"
                    />
                  </div>
                  <div className="border-t sm:border-t-0 sm:border-l border-slate-200 pt-2 sm:pt-0 sm:pl-4">
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                      Modern Multi-Acre Campus
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Spacious visitor parking, recovery lawns, and dedicated emergency driveways in Talikot.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Pill */}
            <div className="hidden sm:flex absolute -top-4 -left-4 p-3.5 rounded-2xl bg-slate-900 text-white shadow-xl border border-slate-800 items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-medium">Healthcare Benchmark</div>
                <div className="text-xs font-bold text-white">Talikot & Bijapur Region</div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-hospital-50 text-hospital-700 text-xs font-bold uppercase tracking-wider border border-hospital-200">
              <HeartHandshake className="w-3.5 h-3.5 text-hospital-600" />
              <span>About Our Institution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A New Era of Clinical Excellence & Compassionate Care
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              {hospitalData.aboutText}
            </p>

            {/* Core Values / Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-lg bg-hospital-100 text-hospital-700">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">24/7 Continuous Emergency</h4>
                </div>
                <p className="text-xs text-slate-600">
                  Round-the-clock casualty officers and trauma surgeons ready to handle critical medical crises without delays.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                    <TreePine className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Green Healing Ambience</h4>
                </div>
                <p className="text-xs text-slate-600">
                  Landscaped walking gardens, clean airy inpatient wards, and ethical patient-first medical care.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-hospital-600 hover:bg-hospital-700 text-white font-bold text-sm transition-colors shadow-md"
              >
                <span>Consult Our Doctors</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-hospital-600" />
                <span>Call: {hospitalData.contact.emergencyNumber}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
