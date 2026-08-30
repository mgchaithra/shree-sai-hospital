import React from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldAlert, 
  Heart, 
  ArrowUp, 
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Footer({ onOpenAppointment }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Highlight: Emergency Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-hospital-950 via-slate-900 to-rose-950 border border-slate-800 mb-14 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center lg:text-left flex-col lg:flex-row">
            <div className="w-14 h-14 rounded-2xl bg-rose-600/20 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">
                24/7 Casualty & Trauma Helpline
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Immediate Emergency Assistance at Talikot
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Duty Medical Officer and ICU support are on standby 24 hours a day, 365 days a year.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition-all group"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              <span>Call: {hospitalData.contact.emergencyNumber}</span>
            </a>
            
            <a
              href={`https://wa.me/${hospitalData.contact.whatsappNumber}?text=${encodeURIComponent(hospitalData.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4-Column Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: About Hospital (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-2 bg-white rounded-2xl inline-block shadow-md">
              <img
                src="/images/logo.jpg"
                alt="Shri Sai Multispeciality Hospital"
                className="h-12 w-auto object-contain rounded-lg"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Talikot's premier modern multispeciality healthcare facility offering 24/7 emergency response, continuous stretcher ramps, modular operation theatres, intensive care, in-house diagnostics, and specialist doctor consultations.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Spacious Multi-Acre Campus & Patient Lawns</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>24/7 Digital X-Ray, Lab & Pharmacy Available</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-hospital-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>About Hospital</span>
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-hospital-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Track Record</span>
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-hospital-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Departments</span>
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-hospital-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Facilities & Ramp</span>
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-hospital-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Our Doctors</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-hospital-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Photo Gallery</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Medical Departments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Clinical Specialties
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {hospitalData.departments.map(dept => (
                <li key={dept.id}>
                  <button
                    onClick={() => onOpenAppointment(dept.title)}
                    className="hover:text-hospital-400 transition-colors flex items-center gap-1.5 text-left text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                    <span>{dept.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hospital Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-hospital-400 shrink-0 mt-0.5" />
                <span>
                  {hospitalData.contact.address.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-hospital-400 shrink-0" />
                <a href={`tel:${hospitalData.contact.emergencyNumberRaw}`} className="hover:text-white transition-colors">
                  {hospitalData.contact.emergencyNumber} / {hospitalData.contact.secondaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-hospital-400 shrink-0" />
                <a href={`mailto:${hospitalData.contact.email}`} className="hover:text-white transition-colors">
                  {hospitalData.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-hospital-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Emergency: 24/7 Open</span>
                  <span>OPD: 09:00 AM – 08:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Shri Sai Multispeciality Hospital, Talikot. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-slate-400 transition-colors">Terms of Care</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
