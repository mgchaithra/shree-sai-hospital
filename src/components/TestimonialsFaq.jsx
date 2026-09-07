import React, { useState } from 'react';
import { 
  Star, 
  MessageSquareQuote, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function TestimonialsFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Part: Patient Testimonials */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-100 text-hospital-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-hospital-600" />
              <span>Patient Stories & Trust</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Our Patients & Families Say
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Real experiences from families across Talikot, Muddebihal, and Bijapur who trusted Shree Sai Hospital for their clinical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hospitalData.testimonials.map((testi) => (
              <div
                key={testi.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating & Department */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-hospital-50 text-hospital-700">
                      {testi.department}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed mb-6">
                    "{testi.comment}"
                  </p>
                </div>

                {/* Patient Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-hospital-600 to-sky-400 text-white flex items-center justify-center font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {testi.name}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {testi.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Part: Frequently Asked Questions (FAQ) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Common Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clear information regarding hospital admissions, OPD hours, and emergency care.
            </p>
          </div>

          <div className="space-y-3">
            {hospitalData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
