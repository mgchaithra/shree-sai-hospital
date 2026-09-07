import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  MessageSquare, 
  Stethoscope, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Send,
  AlertCircle
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function AppointmentModal({ isOpen, onClose, initialDepartment = '', initialDoctor = '' }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    department: '',
    doctor: '',
    preferredDate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        department: initialDepartment || hospitalData.departments[0]?.title || '',
        doctor: initialDoctor || 'Any Available Specialist'
      }));
      setSubmitted(false);
    }
  }, [isOpen, initialDepartment, initialDoctor]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `*New OPD Consultation / Appointment Enquiry*\n\n` +
      `*Patient Name:* ${formData.patientName || 'Not specified'}\n` +
      `*Phone Number:* ${formData.phone || 'Not specified'}\n` +
      `*Department:* ${formData.department}\n` +
      `*Doctor:* ${formData.doctor}\n` +
      `*Preferred Date:* ${formData.preferredDate || 'Earliest available'}\n` +
      `*Notes / Symptoms:* ${formData.notes || 'Routine consultation'}\n\n` +
      `_Sent via Shree Sai Hospital Website_`;

    const whatsappUrl = `https://wa.me/${hospitalData.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-hospital-800 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-hospital-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>OPD Consultation & Enquiry</span>
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Schedule a Visit / Doctor Enquiry
          </h3>
          <p className="text-xs text-hospital-100 mt-1">
            Fill the form below to connect instantly with our reception desk on WhatsApp or call us directly.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Enquiry Dispatched!</h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                Your consultation details have been sent to Shree Sai Hospital's WhatsApp desk. Our reception team will confirm your slot shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Reception Now</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    placeholder="Enter patient full name"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-500 focus:border-hospital-500 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile / Contact Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 9876543210"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-500 focus:border-hospital-500 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Department & Doctor Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Speciality Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-hospital-500 bg-slate-50/50"
                  >
                    {hospitalData.departments.map(dept => (
                      <option key={dept.id} value={dept.title}>
                        {dept.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Doctor (Optional)
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-hospital-500 bg-slate-50/50"
                  >
                    <option value="Any Available Specialist">Any Available Specialist</option>
                    {hospitalData.doctors.map(doc => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.department.split(' ')[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Appointment Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-500 bg-slate-50/50"
                />
              </div>

              {/* Problem / Symptoms */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Symptoms / Message
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Describe your symptoms or reason for visit..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-hospital-500 bg-slate-50/50"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp Desk</span>
                </button>

                <div className="text-center">
                  <span className="text-[11px] text-slate-500">or connect directly via phone call</span>
                </div>

                <a
                  href={`tel:${hospitalData.contact.emergencyNumberRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-hospital-600" />
                  <span>Call Reception ({hospitalData.contact.emergencyNumber})</span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
          <AlertCircle className="w-3.5 h-3.5 text-hospital-600 shrink-0" />
          <span>For acute life-threatening emergencies, visit our casualty unit immediately without appointment.</span>
        </div>

      </div>
    </div>
  );
}
