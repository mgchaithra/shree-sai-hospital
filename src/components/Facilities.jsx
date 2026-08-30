import React from 'react';
import { 
  Building2, 
  ShieldAlert, 
  Activity, 
  HeartHandshake, 
  FlaskConical, 
  Truck, 
  Bed, 
  CheckCircle2 
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Modern Clinical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Facilities & Hospital Infrastructure
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Built with strict clinical sanitation and patient safety protocols, bringing advanced medical capabilities to Talikot and Bijapur.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitalData.facilities.map((fac) => (
            <div
              key={fac.id}
              className="group bg-slate-50/80 rounded-2xl border border-slate-200/80 overflow-hidden hover:border-hospital-400 hover:shadow-card transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Badge */}
              <div className="relative h-52 overflow-hidden bg-slate-200">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm">
                  {fac.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-hospital-700 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                    {fac.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-4">
                    {fac.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-hospital-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-hospital-700 font-semibold">
                  <span>Available 24/7 at Talikot</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-600/30 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/40">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Immediate Emergency & Ambulance Dispatch
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Our life support ambulance is stationed at Talikot ready for instant emergency pickups.
              </p>
            </div>
          </div>

          <a
            href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition-all shrink-0"
          >
            <span>Dial Ambulance: {hospitalData.contact.emergencyNumber}</span>
          </a>
        </div>

      </div>
    </section>
  );
}

