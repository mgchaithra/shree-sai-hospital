# 🏥 Shree Sai Multispeciality Hospital — Showcase Website

A fast, modern, responsive, and 100% static showcase website for **Shree Sai Multispeciality Hospital**, located in Talikot, Bijapur (Vijayapura) district, Karnataka.

Built with **React 18+**, **Vite**, **Tailwind CSS v3.4**, **Lucide Icons**, and configured with **Schema.org JSON-LD** structured data for local Google Search discoverability and Google Maps visibility.

---

## 🌟 Key Highlights & Features

- **24/7 Emergency Top Utility Bar**: Live emergency hotline direct call (`tel:`), WhatsApp quick enquiry, and location indicators.
- **Hero Section with Authentic Architecture**: Highlighting the hospital's grand entrance, continuous multi-level emergency stretcher ramp, and 24/7 clinical readiness.
- **Achievements & Clinical Track Record**: Key metrics (**10,000+** Patients Treated, **2,500+** Surgeries, **24/7** Trauma Support, **15+** Specialists, **50+** Beds).
- **Multispeciality Medical Departments**:
  1. General Medicine & Critical Care
  2. Orthopedics & Joint Care
  3. Obstetrics & Gynecology (Maternity)
  4. Pediatrics & Neonatal Care
  5. General & Laparoscopic Surgery
  6. Cardiology & Emergency Care
- **Clinical Facilities & Infrastructure**: Modular Operation Theatres (Sterile Laminar Flow), Intensive Care Unit (ICU with Ventilators), Digital X-Ray & Automated Lab, Landscaped Healing Lawns, and 24/7 In-House Pharmacy & Ambulance.
- **Specialist Doctor Directory**: Complete qualifications (`MBBS`, `MS`, `MD`, `DNB`, `FIAGES`), OPD consultation timings, and booking triggers.
- **Interactive Lightbox Photo Gallery**: Category-filtered high-resolution visual tour of the hospital campus and infrastructure.
- **Location, Directions & Google Maps**: Full physical address in Talikot with interactive Google Maps embed and one-tap navigation.
- **Zero-Backend Appointment Modal**: 100% serverless, interactive consultation enquiry that formats and sends patient details directly to the hospital's WhatsApp desk or phone.
- **Mobile Sticky Action Bar**: One-tap quick actions for Emergency Call, WhatsApp, OPD Booking, and Directions on smartphones.

---

## 🛠️ Technology Stack

- **Core Framework**: [React 18+](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling & Design System**: [Tailwind CSS v3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Discoverability**: Semantic HTML5, OpenGraph Meta Tags, `schema.org/Hospital` JSON-LD structured data, `sitemap.xml`, and `robots.txt`
- **Deployment**: Zero-backend static delivery, ready for [Vercel](https://vercel.com) (includes `vercel.json` with security headers and clean URLs)

---

## 📁 Project Directory Structure

```text
hospital-website-2/
├── public/
│   ├── favicon.svg             # Hospital favicon
│   ├── logo.png                # Official Shree Sai Hospital logo
│   ├── robots.txt              # Search engine crawler directives
│   ├── sitemap.xml             # XML sitemap for SEO indexing
│   └── images/
│       ├── logo.png            # High-resolution Shree Sai Hospital logo
│       ├── hospital-entrance-aerial.jpg  # Main entrance gate & driveway
│       ├── hospital-campus-overview.jpg  # Bird's-eye campus masterplan
│       ├── hospital-garden-lawn.jpg      # Landscaped recovery lawn
│       └── hospital-ramp-facade.jpg      # Continuous emergency ramp
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Emergency top bar + sticky navigation + mobile menu
│   │   ├── Hero.jsx            # Trust headline, badges, and primary call CTAs
│   │   ├── Achievements.jsx    # Stats counter (10,000+ treated, surgeries, beds)
│   │   ├── AboutSection.jsx    # Hospital vision & campus overview
│   │   ├── Departments.jsx     # Multispeciality medical departments grid
│   │   ├── Facilities.jsx      # ICU, Modular OT, Lab, Ramp, and Pharmacy
│   │   ├── Doctors.jsx         # Specialist doctor cards with OPD timings
│   │   ├── PhotoGallery.jsx    # Category-filtered lightbox image gallery
│   │   ├── TestimonialsFaq.jsx # Patient reviews & local discoverability FAQs
│   │   ├── LocationSection.jsx # Google Maps embed, address, and directions
│   │   ├── AppointmentModal.jsx# Client-side WhatsApp/Phone enquiry modal
│   │   ├── FloatingContact.jsx # Mobile bottom action bar & floating buttons
│   │   └── Footer.jsx          # Working hours, hotline, links, and copyright
│   ├── data/
│   │   └── hospitalData.js     # Single source of truth for text, stats & numbers
│   ├── App.jsx                 # Main application layout
│   ├── index.css               # Tailwind directives & smooth scroll styling
│   └── main.jsx                # React root entry
├── index.html                  # HTML5 boilerplate, OpenGraph & Schema.org JSON-LD
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── vercel.json                 # Static routing & security headers configuration
```

---

## 🚀 Getting Started & Running Locally

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0 or higher recommended).

Check your Node and npm versions:
```bash
node -v
npm -v
```

---

### 2. Installation
Clone or navigate to the project root directory and install dependencies:

```bash
cd hospital-website-2
npm install
```

---

### 3. Start Development Server
Run the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to the URL shown in your terminal (typically `http://localhost:5173`).

---

### 4. Build Production Static Bundle
To generate an optimized, minified static build for production:

```bash
npm run build
```

The compiled static assets will be output to the `dist/` directory.

---

### 5. Preview Production Build Locally
To test the production build locally:

```bash
npm run preview
```

---

## ⚙️ Updating Hospital Content & Doctor Details

All text content, doctor profiles, phone numbers, and OPD schedules are centralized in a single configuration file for easy maintenance:

📍 **[`src/data/hospitalData.js`](file:///d:/Technical/Jupiter/hospital-website-2/src/data/hospitalData.js)**

You can easily update:
- **Emergency & Reception Numbers**: `contact.emergencyNumber`, `contact.secondaryPhone`, `contact.whatsappNumber`
- **Address & Landmark**: `contact.address.fullAddress`, `contact.googleMapsEmbedUrl`
- **Clinical Achievements**: `achievements` array (patient count, surgeries, ICU beds)
- **Doctor Profiles & Timings**: `doctors` array (name, degrees, designation, OPD hours, image)
- **Medical Departments & Procedures**: `departments` array
- **Infrastructure Cards**: `facilities` array
- **Patient Reviews & FAQs**: `testimonials` and `faqs` arrays

---

## 🌐 Deploying to Vercel (Zero Cost Static Hosting)

The application is pre-configured with `vercel.json` for instant static edge deployment.

### Option A: Via GitHub (Recommended)
1. Push this repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your site will be live on `your-project.vercel.app` in seconds!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📍 Hospital Contact & Location

- **Hospital Name**: Shree Sai Multispeciality Hospital
- **Address**: Main Road, Talikot - 586214, Bijapur (Vijayapura) District, Karnataka, India
- **Emergency Hotline**: `+91 88613 51881`
- **Operating Hours**: 24 Hours Open (Casualty, ICU, Pharmacy, Ambulance) | OPD: 09:00 AM – 08:00 PM

---

## 📄 License
© Shree Sai Multispeciality Hospital, Talikot. All rights reserved.
