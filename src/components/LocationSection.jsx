import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  ShieldAlert, 
  ExternalLink, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function LocationSection({ onOpenAppointment }) {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-100 text-hospital-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-hospital-600" />
            <span>Easy Accessibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Location, Directions & Contact
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Conveniently situated on the Main Road of Talikot, easily accessible from all towns in Bijapur district including Muddebihal, Basavana Bagewadi, and Sindagi.
          </p>
        </div>

        {/* 2-Column Contact & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-hospital-50 text-hospital-600 flex items-center justify-center shrink-0 border border-hospital-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Hospital Address
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {hospitalData.contact.address.fullAddress}
                  </p>
                  <p className="text-xs text-hospital-700 font-semibold mt-2">
                    Landmark: {hospitalData.contact.address.landmark}
                  </p>

                  <div className="mt-4">
                    <a
                      href={hospitalData.contact.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-hospital-700 text-white text-xs font-bold transition-all shadow-sm group"
                    >
                      <Navigation className="w-4 h-4 text-hospital-400 group-hover:rotate-45 transition-transform" />
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency & Reception Phone Box */}
            <div className="bg-gradient-to-br from-rose-950 to-slate-900 text-white rounded-2xl p-6 shadow-soft border border-rose-900/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-rose-300 font-semibold uppercase tracking-wider">
                    24/7 Immediate Response
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Emergency Helpline & Reception
                  </h4>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 hover:bg-rose-600 transition-colors text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-rose-400 group-hover:text-white" />
                    <span className="text-sm font-bold">{hospitalData.contact.emergencyNumber}</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-rose-500/30 text-rose-200 group-hover:bg-white/20 group-hover:text-white font-medium">
                    24/7 Hotline
                  </span>
                </a>

                <a
                  href={`tel:${hospitalData.contact.secondaryPhoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 hover:bg-hospital-600 transition-colors text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-hospital-400 group-hover:text-white" />
                    <span className="text-sm font-bold">{hospitalData.contact.secondaryPhone}</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-700 text-slate-300 group-hover:bg-white/20 group-hover:text-white font-medium">
                    Reception
                  </span>
                </a>
              </div>
            </div>

            {/* Timings & WhatsApp Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-hospital-50 text-hospital-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Clinical Timings
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="font-semibold text-slate-800">Emergency & Casualty:</span> 24 Hours Open (All 7 Days)
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <span className="font-semibold text-slate-800">General OPD:</span> Mon – Sat: 09:00 AM – 08:00 PM
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`https://wa.me/${hospitalData.contact.whatsappNumber}?text=${encodeURIComponent(hospitalData.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-hospital-50 hover:bg-hospital-100 text-hospital-700 font-semibold text-xs transition-colors border border-hospital-200"
                >
                  <span>OPD Enquiry</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed & Live Pin */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-soft h-full flex flex-col">
              
              {/* Map Header */}
              <div className="p-3 pb-4 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-sm font-bold text-slate-900">
                    Live Map Location — Talikot (Bijapur District)
                  </span>
                </div>

                <a
                  href={hospitalData.contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-hospital-600 hover:text-hospital-700 flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative flex-1 w-full min-h-[380px] sm:min-h-[440px] rounded-xl overflow-hidden mt-3 border border-slate-200">
                <iframe
                  title="Shri Sai Hospital Talikot Google Maps Location"
                  src={hospitalData.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px]"
                ></iframe>
              </div>

              {/* District Catchment Notice */}
              <div className="p-4 mt-3 bg-slate-50 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                <span>Direct road connectivity from Muddebihal (22 km) and Bijapur City (80 km).</span>
                <span className="font-semibold text-hospital-700">Ambulance pickup available across Talikot taluk.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
