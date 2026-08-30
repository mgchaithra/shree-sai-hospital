import React, { useState } from 'react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn, Eye } from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Campus & Architecture', 'Healing Environment', 'Emergency & Access', 'Clinical OT & ICU', 'Diagnostics & Labs', 'Inpatient Rooms'];

  const filteredGallery = activeCategory === 'All'
    ? hospitalData.gallery
    : hospitalData.gallery.filter(item => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredGallery.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setSelectedImage(filteredGallery[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredGallery.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setSelectedImage(filteredGallery[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hospital-100 text-hospital-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-hospital-600" />
            <span>Visual Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hospital Infrastructure & Facility Gallery
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A glimpse into the clean clinical environment, modern operation suites, and patient care rooms at Shri Sai Hospital.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-hospital-600 text-white shadow-sm shadow-hospital-600/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-60 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 shadow-soft hover:shadow-card border border-slate-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Category Tag */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-[10px] font-semibold text-hospital-300 border border-slate-700/50">
                {item.category}
              </div>

              {/* View Overlay Button */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>

              {/* Text info bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h3 className="text-sm font-bold text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image */}
              <div className="relative h-80 sm:h-[450px] w-full bg-slate-950 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-full max-w-full object-contain"
                />

                {/* Left/Right Navigation */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption Footer */}
              <div className="p-5 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-hospital-400 uppercase tracking-wider block">
                    {selectedImage.category}
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {selectedImage.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {selectedImage.subtitle}
                  </p>
                </div>

                <div className="text-xs text-slate-500">
                  Shri Sai Hospital • Talikot
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
