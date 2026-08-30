import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Achievements from './components/Achievements';
import Departments from './components/Departments';
import Facilities from './components/Facilities';
import Doctors from './components/Doctors';
import PhotoGallery from './components/PhotoGallery';
import TestimonialsFaq from './components/TestimonialsFaq';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleOpenAppointment = (dept = '', doctor = '') => {
    setSelectedDepartment(dept);
    setSelectedDoctor(doctor);
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-hospital-600 selection:text-white pb-14 sm:pb-0">
      {/* Top Navbar */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* 2. Institutional Achievements & Metrics Track Record */}
        <Achievements />

        {/* 3. About Us & Clinical Mission */}
        <AboutSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* 4. Multispeciality Medical Departments */}
        <Departments onOpenAppointment={(dept) => handleOpenAppointment(dept)} />

        {/* 5. Infrastructure, OT, ICU & Lab Facilities */}
        <Facilities />

        {/* 6. Doctors Directory & OPD Consultation */}
        <Doctors onOpenAppointment={(dept, doc) => handleOpenAppointment(dept, doc)} />

        {/* 7. Hospital Photo Gallery & Lightbox */}
        <PhotoGallery />

        {/* 8. Patient Trust & Local FAQs */}
        <TestimonialsFaq />

        {/* 9. Location, Directions & Google Maps */}
        <LocationSection onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* Footer */}
      <Footer onOpenAppointment={(dept) => handleOpenAppointment(dept)} />

      {/* Floating CTA Buttons & Mobile Bottom Bar */}
      <FloatingContact onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Booking / Enquiry Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        initialDepartment={selectedDepartment}
        initialDoctor={selectedDoctor}
      />
    </div>
  );
}
