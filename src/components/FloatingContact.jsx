import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, MapPin, ArrowUp } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function FloatingContact({ onOpenAppointment }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900/90 text-white hover:bg-slate-800 shadow-lg backdrop-blur-md transition-all hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Quick Chat */}
        <a
          href={`https://wa.me/${hospitalData.contact.whatsappNumber}?text=${encodeURIComponent(hospitalData.contact.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xl hover:scale-105 transition-all group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
            WhatsApp Helpdesk
          </span>
        </a>

        {/* Emergency Call Floating Button */}
        <a
          href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-xl hover:scale-105 transition-all animate-bounce"
          aria-label="Emergency Call"
        >
          <Phone className="w-5 h-5" />
          <span>24/7 Emergency: {hospitalData.contact.emergencyNumber}</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-1.5">
          <a
            href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-rose-600 text-white text-[10px] font-bold"
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span>Emergency</span>
          </a>

          <a
            href={`https://wa.me/${hospitalData.contact.whatsappNumber}?text=${encodeURIComponent(hospitalData.contact.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700 text-white text-[10px] font-medium"
          >
            <MessageSquare className="w-4 h-4 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenAppointment()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-hospital-700 text-white text-[10px] font-medium"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span>Book OPD</span>
          </button>

          <a
            href={hospitalData.contact.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 text-slate-200 text-[10px] font-medium"
          >
            <MapPin className="w-4 h-4 mb-0.5 text-hospital-400" />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </>
  );
}

