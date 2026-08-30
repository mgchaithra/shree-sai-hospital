import React from 'react';
import { 
  UserCheck, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle, 
  Phone, 
  ArrowUpRight 
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Doctors({ onOpenAppointment }) {
  return (
    <section id="doctors" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-100 text-hospital-800 text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-hospital-600" />
            <span>Expert Medical Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Specialist Doctors & Surgeons
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Dedicated clinicians providing ethical, evidence-based medical and surgical consultations at Shri Sai Hospital, Talikot.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitalData.doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:border-hospital-400"
            >
              {/* Doctor Header & Portrait */}
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.department}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-hospital-800 shadow-sm flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-hospital-600" />
                    <span>{doctor.experience}</span>
                  </div>

                  {/* Doctor Designation Overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-hospital-300">
                      {doctor.department}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {doctor.name}
                    </h3>
                  </div>
                </div>

                {/* Doctor Bio & Credentials */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-hospital-700 bg-hospital-50 px-2.5 py-1 rounded-md inline-block mb-1 border border-hospital-100">
                      {doctor.degrees}
                    </div>
                    <div className="text-xs font-medium text-slate-600">
                      {doctor.designation}
                    </div>
                  </div>

                  {/* Specializations list */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Areas of Expertise:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* OPD Timings */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <Clock className="w-3.5 h-3.5 text-hospital-600" />
                      <span>OPD Consultation Schedule:</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      {doctor.opdTiming}
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking & Direct Call Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-2">
                <button
                  onClick={() => onOpenAppointment(doctor.department, doctor.name)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-hospital-600 hover:bg-hospital-700 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>

                <a
                  href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  title="Call Hospital Reception"
                  aria-label="Call Hospital Reception"
                >
                  <Phone className="w-4 h-4 text-hospital-700" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* OPD Note */}
        <div className="mt-10 text-center text-xs sm:text-sm text-slate-500">
          * Visiting specialist schedules are subject to clinical appointments. Emergency services and duty doctors are available 24/7.
        </div>

      </div>
    </section>
  );
}
