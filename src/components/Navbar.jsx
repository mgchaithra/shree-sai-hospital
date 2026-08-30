import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, ShieldAlert, Calendar, MessageSquare, ChevronRight } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Track Record', href: '#achievements' },
    { name: 'Departments', href: '#departments' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Emergency Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs md:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Emergency Alert & Hours */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-rose-400 font-semibold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping inline-block"></span>
              <ShieldAlert className="w-4 h-4" />
              <span>24/7 EMERGENCY & TRAUMA OPEN</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-hospital-400" />
              <span>Main Road, Talikot (Bijapur Dist.)</span>
            </div>
          </div>

          {/* Quick Contact & WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-6 ml-auto">
            <a 
              href={`tel:${hospitalData.contact.emergencyNumberRaw}`} 
              className="flex items-center gap-1.5 font-bold text-white hover:text-hospital-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
              <span>Emergency: {hospitalData.contact.emergencyNumber}</span>
            </a>
            <a 
              href={`https://wa.me/${hospitalData.contact.whatsappNumber}?text=${encodeURIComponent(hospitalData.contact.whatsappMessage)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-700/80 hover:bg-emerald-600 text-emerald-100 transition-colors text-xs font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'glass-nav shadow-md py-2' : 'bg-white/95 backdrop-blur-md shadow-sm py-2.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Exact Logo from Attachment */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/images/logo.jpg"
              alt="Shri Sai Multispeciality Hospital Talikot"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-hospital-600 hover:bg-hospital-50/70 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-hospital-50 text-hospital-700 hover:bg-hospital-100 transition-colors border border-hospital-200"
            >
              <Calendar className="w-4 h-4 text-hospital-600" />
              <span>Enquire / OPD</span>
            </button>

            <a
              href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-hospital-600 to-hospital-700 hover:from-hospital-700 hover:to-hospital-800 text-white shadow-sm shadow-hospital-700/30 hover:shadow transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hospital</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
              className="p-2 rounded-lg bg-rose-600 text-white shadow-sm"
              aria-label="Call Emergency"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-hospital-50 hover:text-hospital-700"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-hospital-50 text-hospital-700 font-semibold border border-hospital-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor Consultation</span>
            </button>

            <a
              href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-rose-600 text-white font-semibold shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency: {hospitalData.contact.emergencyNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
