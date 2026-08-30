import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, ShieldAlert, Calendar, MessageSquare, ChevronRight, Sparkles } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
      {/* Top Emergency Utility Ribbon */}
      <div className="bg-slate-950 text-slate-200 text-xs md:text-sm py-2 px-3 sm:px-6 border-b border-slate-800/90 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* 24/7 Status & Location Indicator */}
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-rose-400 font-bold tracking-wider text-[11px] sm:text-xs">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
              </span>
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              <span>24/7 EMERGENCY, ICU & TRAUMA OPEN</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-slate-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-hospital-400" />
              <span>Main Road, Talikot (Bijapur Dist.)</span>
            </div>
          </div>

          {/* Quick Telephone & WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <a 
              href={`tel:${hospitalData.contact.emergencyNumberRaw}`} 
              className="flex items-center gap-1.5 font-extrabold text-white hover:text-rose-300 transition-colors text-xs sm:text-sm bg-rose-950/60 px-2.5 py-1 rounded-md border border-rose-600/30"
            >
              <Phone className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
              <span>Hotline: {hospitalData.contact.emergencyNumber}</span>
            </a>

            <a 
              href={`https://wa.me/${hospitalData.contact.whatsappNumber}?text=${encodeURIComponent(hospitalData.contact.whatsappMessage)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white transition-colors text-xs font-semibold shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — Prominently Showcasing Hospital Logo */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-lg py-2 sm:py-2.5 border-b border-slate-200/80' 
            : 'bg-white shadow-md py-3 sm:py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          
          {/* Highlighted Logo Badge & Anchor */}
          <a 
            href="#" 
            className="flex items-center gap-2 group shrink-0 focus:outline-none"
            aria-label="Shri Sai Multispeciality Hospital Talikot"
          >
            <div className={`transition-all duration-300 rounded-xl bg-white p-1 sm:p-1.5 border border-slate-200 shadow-soft group-hover:shadow-card group-hover:border-hospital-400 flex items-center justify-center ${
              isScrolled ? 'h-14 sm:h-18' : 'h-16 sm:h-20 md:h-24'
            }`}>
              <img
                src="/images/logo.jpg"
                alt="Shri Sai Multispeciality Hospital Talikot Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'max-h-12 sm:max-h-16' : 'max-h-14 sm:max-h-18 md:max-h-20'
                }`}
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-hospital-700 hover:bg-hospital-50/80 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl bg-hospital-50 text-hospital-700 hover:bg-hospital-100 hover:text-hospital-800 transition-all border border-hospital-200 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-hospital-600" />
              <span>Book OPD / Visit</span>
            </button>

            <a
              href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-hospital-600 to-hospital-700 hover:from-hospital-700 hover:to-hospital-800 text-white shadow-md shadow-hospital-700/25 hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hospital</span>
            </a>
          </div>

          {/* Mobile Right Quick Action & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
              className="p-2.5 rounded-xl bg-rose-600 text-white shadow-md active:scale-95"
              aria-label="Call Emergency Hotline"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 focus:outline-none active:scale-95 transition-colors border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Prominent Logo Header */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-2xl px-4 pt-4 pb-6 animate-fadeIn max-h-[85vh] overflow-y-auto">
          {/* Centered Large Logo in Mobile Drawer */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center mb-4 shadow-sm">
            <img
              src="/images/logo.jpg"
              alt="Shri Sai Multispeciality Hospital"
              className="h-20 sm:h-24 w-auto object-contain mx-auto mb-2"
            />
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Talikot, Bijapur District
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              24/7 Multispeciality Clinical Care
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl text-slate-700 font-semibold hover:bg-hospital-50 hover:text-hospital-700 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-hospital-600 text-white font-bold shadow-md active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor Consultation</span>
            </button>

            <a
              href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-rose-600 text-white font-bold shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency Call: {hospitalData.contact.emergencyNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
