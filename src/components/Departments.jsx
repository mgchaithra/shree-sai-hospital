import React, { useState } from 'react';
import { 
  Stethoscope, 
  Bone, 
  Baby, 
  Smile, 
  Activity, 
  HeartPulse, 
  Check, 
  ArrowRight, 
  Calendar, 
  Sparkles,
  Phone
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Departments({ onOpenAppointment }) {
  const [activeDepartment, setActiveDepartment] = useState('all');

  const iconMap = {
    Stethoscope: Stethoscope,
    Bone: Bone,
    Baby: Baby,
    Smile: Smile,
    Activity: Activity,
    HeartPulse: HeartPulse,
  };

  const filteredDepartments = activeDepartment === 'all' 
    ? hospitalData.departments 
    : hospitalData.departments.filter(dept => dept.id === activeDepartment);

  return (
    <section id="departments" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-100 text-hospital-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-hospital-600" />
            <span>Comprehensive Clinical Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Multispeciality Medical Departments
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Expert specialist doctors and well-equipped clinical units providing advanced diagnosis, surgeries, and outpatient consultations in Talikot.
          </p>
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {hospitalData.departments.map((dept) => {
            const Icon = iconMap[dept.iconName] || Stethoscope;

            return (
              <div
                key={dept.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-hospital-400"
              >
                {/* Card Top Image & Badges */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={dept.image}
                    alt={dept.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
                  
                  {/* Floating Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-hospital-300 border border-slate-700/60">
                    {dept.tag}
                  </div>

                  {/* Department Icon Floating */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-hospital-600 text-white flex items-center justify-center shadow-lg shadow-hospital-600/40">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-white font-bold text-base leading-snug drop-shadow-md">
                      {dept.title}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {dept.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Key Treatments & Procedures:
                      </div>
                      {dept.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Doctor & Action CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="text-xs text-slate-500">
                      <span className="font-semibold text-slate-800 block">{dept.headDoctor}</span>
                      <span>Consultant Specialist</span>
                    </div>

                    <button
                      onClick={() => onOpenAppointment(dept.title)}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-hospital-50 hover:bg-hospital-600 text-hospital-700 hover:text-white font-semibold text-xs transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Consult</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-hospital-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Need immediate medical consultation or opinion?
            </h3>
            <p className="text-sm text-hospital-100">
              Our emergency casualty officer is available 24/7 on call. Dial directly or message us on WhatsApp.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: {hospitalData.contact.emergencyNumber}</span>
            </a>
            <button
              onClick={() => onOpenAppointment()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4 text-hospital-600" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

