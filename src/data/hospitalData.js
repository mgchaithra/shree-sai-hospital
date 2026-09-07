export const hospitalData = {
  name: "Shree Sai Hospital",
  subtitle: "Multispeciality Hospital",
  tagline: "Advanced Multispeciality Healthcare in Talikot",
  heroDescription: "Committed to clinical excellence, compassionate care, and 24/7 emergency response for the community of Talikot and Bijapur district.",
  aboutText: "Under the medical leadership of Dr. Gangambika Patil and a dedicated team of clinical specialists, Shree Sai Hospital is Talikot's premier modern healthcare institution. Delivering advanced multispeciality medical, maternity, surgical, and diagnostic care, our campus is equipped with modern Operation Theatres, an Intensive Care Unit (ICU), 24/7 Emergency & Trauma support, and comprehensive in-house pathology and radiology services.",
  
  contact: {
    emergencyNumber: "+91 88613 51881",
    emergencyNumberRaw: "+918861351881",
    secondaryPhone: "+91 88613 51881",
    secondaryPhoneRaw: "+918861351881",
    whatsappNumber: "918861351881",
    whatsappDisplay: "+91 88613 51881",
    whatsappMessage: "Hello Shree Sai Hospital, I would like to inquire about OPD consultation / emergency services.",
    email: "contact@shrisaihospital.com",
    address: {
      line1: "Main Road",
      locality: "Talikot",
      city: "Talikot",
      district: "Bijapur (Vijayapura) District",
      state: "Karnataka",
      pincode: "586214",
      country: "India",
      landmark: "Near Main Circle, Main Road, Talikot",
      fullAddress: "Shree Sai Hospital, Main Road, Talikot - 586214, Bijapur District, Karnataka, India"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30564.88796853243!2d76.29548324419232!3d16.482811442111166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7bc3bc4e5787b%3A0x6b63e808e08d6d6e!2sTalikoti%2C%20Karnataka%20586214!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Talikot+Karnataka+586214+Hospital"
  },

  timings: {
    emergency: "24 Hours / 7 Days a Week",
    icu: "24/7 Continuous Monitoring",
    pharmacy: "24/7 In-House Availability",
    ambulance: "24/7 On-Call Emergency Dispatch",
    opdConsultation: "Monday – Saturday: 09:00 AM – 08:00 PM | Sunday: 10:00 AM – 02:00 PM (Emergency 24/7)"
  },

  achievements: [
    {
      id: "patients",
      metric: "10,000+",
      label: "Patients Treated & Healed",
      subtext: "Across OPD & Inpatient services in Talikot and Bijapur region",
      icon: "Users"
    },
    {
      id: "surgeries",
      metric: "2,500+",
      label: "Successful Surgeries",
      subtext: "General, Laparoscopic, Orthopedic, and OBG procedures",
      icon: "HeartPulse"
    },
    {
      id: "emergency",
      metric: "24/7",
      label: "Emergency & Trauma Support",
      subtext: "Round-the-clock emergency medical officers & life support",
      icon: "ShieldAlert"
    },
    {
      id: "doctors",
      metric: "15+",
      label: "Specialist Doctors & Surgeons",
      subtext: "Experienced multidisciplinary consultants and visiting experts",
      icon: "Stethoscope"
    },
    {
      id: "beds",
      metric: "50+",
      label: "Advanced Inpatient & ICU Beds",
      subtext: "Equipped with multi-para monitors, ventilators & oxygen support",
      icon: "BedDouble"
    }
  ],

  departments: [
    {
      id: "obstetrics-gynecology",
      title: "Obstetrics & Gynecology (Maternity)",
      iconName: "Baby",
      description: "Complete women's healthcare from pre-pregnancy counseling, painless normal deliveries, high-risk pregnancy care to Caesarean sections (LSCS).",
      features: [
        "Normal & Painless Delivery Management",
        "Emergency Caesarean Section (LSCS)",
        "High-Risk Pregnancy & Antenatal Care",
        "Infertility & Gynecological Care"
      ],
      headDoctor: "Dr. Gangambika Patil, MS (OBG), DGO",
      tag: "Dedicated Labor Suite",
      image: "/images/dr-gangambika-patil.jpg"
    },
    {
      id: "general-medicine",
      title: "General Medicine & Critical Care",
      iconName: "Stethoscope",
      description: "Comprehensive diagnosis and treatment for infectious diseases, diabetes, hypertension, respiratory illnesses, and critical inpatient management.",
      features: [
        "Adult & Geriatric Comprehensive Care",
        "Diabetes, Thyroid & Hypertension Management",
        "Fever, Dengue, Malaria & Infection Protocols",
        "Respiratory & Intensive Care Unit"
      ],
      headDoctor: "Dr. Prajwal Sarawad, MBBS, MD",
      tag: "24/7 Inpatient Available",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "orthopedics",
      title: "Orthopedics & Joint Care",
      iconName: "Bone",
      description: "Expert trauma management, fracture reduction, complex joint treatments, arthritis management, and rehabilitation.",
      features: [
        "Trauma & Fracture Fixation (Plating & Nailing)",
        "Joint Pain & Arthritis Management",
        "Spine & Backache Interventions",
        "Sports Injury & Ligament Reconstruction"
      ],
      headDoctor: "Dr. Veerendra Patil, MS (Ortho)",
      tag: "Advanced C-Arm OT",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pediatrics",
      title: "Pediatrics & Neonatal Care",
      iconName: "Smile",
      description: "Dedicated child and infant health services, routine vaccinations, nutritional guidance, newborn jaundice phototherapy, and acute illness treatment.",
      features: [
        "Newborn & Infant Phototherapy & Care",
        "Comprehensive Childhood Immunization",
        "Pediatric Respiratory & Infection Care",
        "Growth & Developmental Screening"
      ],
      headDoctor: "Dr. Ramesh Biradar, MD (Pediatrics)",
      tag: "Special Pediatric Ward",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "general-laparoscopic-surgery",
      title: "General & Laparoscopic Surgery",
      iconName: "Activity",
      description: "Modern minimally invasive keyhole surgeries ensuring minimal blood loss, minimal scarring, and rapid post-operative recovery.",
      features: [
        "Laparoscopic Appendectomy & Gallbladder Removal",
        "Hernia Repair (Mesh Plasty)",
        "Piles, Fissure & Fistula Advanced Treatment",
        "Emergency Abdominal & Trauma Surgery"
      ],
      headDoctor: "Dr. Suresh Deshmukh, MS, FIAGES",
      tag: "Minimally Invasive",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cardiology-emergency",
      title: "Cardiology & Emergency Care",
      iconName: "HeartPulse",
      description: "Rapid triage, emergency cardiac resuscitation, ECG, cardiac enzyme profiling, and stabilized referral care for cardiovascular crises.",
      features: [
        "12-Lead High Definition ECG Diagnostics",
        "Acute Chest Pain & Angina Stabilization",
        "Hypertensive Urgency Management",
        "24/7 Cardiac Defibrillator & ICU Backing"
      ],
      headDoctor: "Dr. Rajesh Hiremath, MD, DNB",
      tag: "Rapid Emergency Response",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80"
    }
  ],

  facilities: [
    {
      id: "emergency-trauma",
      title: "24/7 Emergency & Rapid Multi-Level Ramp",
      badge: "24/7 Non-Stop",
      description: "Fully equipped casualty department featuring direct vehicular drop-off and continuous multi-floor emergency stretcher ramps for zero-delay patient transit.",
      points: [
        "Continuous multi-level smooth stretcher ramp & casualty bay",
        "Instant triage and dedicated trauma resuscitation team",
        "Multi-parameter vital monitors and emergency defibrillators",
        "Emergency trained Medical Officers on duty 24 hours"
      ],
      image: "/images/hospital-ramp-facade.jpg"
    },
    {
      id: "operation-theatres",
      title: "State-of-the-Art Operation Theatres",
      badge: "Sterile Laminar Airflow",
      description: "Ultra-clean modular OT complex with HEPA filtration, modern LED surgical lighting, electronic OT tables, and precision anaesthesia workstations.",
      points: [
        "Laminar airflow system to ensure zero surgical site infection",
        "High-definition Laparoscopy Tower and surgical cautery",
        "Digital C-Arm fluoroscopy for real-time orthopedic precision",
        "Central medical gas pipeline system (Oxygen, Nitrous Oxide, Vacuum)"
      ],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "icu-critical-care",
      title: "Intensive Care Unit (ICU & HDU)",
      badge: "Critical Life Support",
      description: "High-dependency beds with invasive and non-invasive mechanical ventilators, central multipara monitoring, and dedicated 1:1 nursing care for critically ill patients.",
      points: [
        "Advanced microprocessor ventilators and BiPAP/CPAP support",
        "Continuous arterial blood pressure and SpO2 telemetry",
        "Emergency bedside defibrillators and infusion pumps",
        "Strict infection control protocol with isolation cubicles"
      ],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "radiology-pathology",
      title: "Diagnostic Radiology & Pathology Lab",
      badge: "In-House Rapid Results",
      description: "Comprehensive in-house diagnostic wing facilitating accurate, fast reports for blood biochemistry, hematology, digital X-rays, and ultrasound scans.",
      points: [
        "High-frequency Digital X-Ray (Minimal Radiation)",
        "3D/4D Color Doppler Ultrasound imaging",
        "Fully automated biochemistry and hematology cell counters",
        "Emergency stat lab tests delivered in under 30 minutes"
      ],
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "inpatient-gardens",
      title: "Landscaped Healing Gardens & Wards",
      badge: "Holistic Recovery",
      description: "Expansive green outdoor spaces, walking lawns, and comfortable inpatient accommodation promoting faster therapeutic healing and family comfort.",
      points: [
        "Lush landscaped open garden and walking pathways",
        "Deluxe AC Private Rooms and well-ventilated Semi-Private Wards",
        "Spacious visitor parking and serene recovery atmosphere",
        "Hygienic sanitation, solar hot water, and 24/7 power backup"
      ],
      image: "/images/hospital-garden-lawn.jpg"
    },
    {
      id: "pharmacy-ambulance",
      title: "24/7 Pharmacy & Ambulance Service",
      badge: "Instant Accessibility",
      description: "Round-the-clock on-premise pharmacy stocking genuine surgical and life-saving medicines, complemented by prompt ALS/BLS ambulance response.",
      points: [
        "100% genuine medicines, surgical consumables and implants",
        "Emergency cardiac drugs, antivenoms, and rabies immunoglobulins",
        "Fully equipped ambulance with oxygen and resuscitation kit",
        "Dedicated pickup helpline for Talikot and neighboring villages"
      ],
      image: "/images/hospital-entrance-aerial.jpg"
    }
  ],

  doctors: [
    {
      id: "dr-gangambika-patil",
      name: "Dr. Gangambika Patil",
      degrees: "MBBS, MS (OBG), DGO",
      department: "Obstetrics & Gynecology (Maternity)",
      designation: "Hospital Director & Senior Consultant Gynecologist",
      experience: "16+ Years Experience",
      opdTiming: "10:00 AM – 02:00 PM & 05:00 PM – 08:00 PM (Mon – Sat)",
      specialties: ["High-Risk Pregnancy Management", "Painless Normal Delivery", "Infertility Counseling", "Gynecological Laparoscopy & LSCS"],
      image: "/images/dr-gangambika-patil.jpg"
    },
    {
      id: "dr-prajwal-sarawad",
      name: "Dr. Prajwal Sarawad",
      degrees: "MBBS, MD (General Medicine)",
      department: "General Medicine & Critical Care",
      designation: "Consultant General Physician & Intensivist",
      experience: "12+ Years Experience",
      opdTiming: "09:30 AM – 01:30 PM & 04:30 PM – 08:00 PM (Mon – Sat)",
      specialties: ["Diabetes & Hypertension Care", "Infectious Diseases & Fever Protocols", "Critical Care & ICU Management", "Cardio-Metabolic Disorders"],
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "dr-suresh-deshmukh",
      name: "Dr. Suresh Deshmukh",
      degrees: "MBBS, MS (General Surgery), FIAGES",
      department: "General & Laparoscopic Surgery",
      designation: "Chief Surgeon & Consultant",
      experience: "15+ Years Experience",
      opdTiming: "10:00 AM – 02:00 PM & 05:00 PM – 08:00 PM (Mon – Sat)",
      specialties: ["Laparoscopic Surgery", "Hernia & Appendectomy", "Trauma Care", "Gastrointestinal Surgery"],
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "dr-veerendra-patil",
      name: "Dr. Veerendra Patil",
      degrees: "MBBS, MS (Orthopedics), DNB",
      department: "Orthopedics & Joint Care",
      designation: "Senior Orthopedic & Trauma Surgeon",
      experience: "14+ Years Experience",
      opdTiming: "11:00 AM – 03:00 PM & 06:00 PM – 08:30 PM (Mon – Sat)",
      specialties: ["Complex Fracture Plating", "Joint Replacement", "Arthroscopy", "Spine Management"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "dr-ramesh-biradar",
      name: "Dr. Ramesh Biradar",
      degrees: "MBBS, MD (Pediatrics), DCH",
      department: "Pediatrics & Child Care",
      designation: "Consultant Pediatrician & Neonatologist",
      experience: "11+ Years Experience",
      opdTiming: "10:00 AM – 02:00 PM & 05:00 PM – 08:00 PM (Mon – Sat)",
      specialties: ["Neonatal Care", "Vaccination Programs", "Pediatric Emergencies", "Child Nutrition"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "dr-rajesh-hiremath",
      name: "Dr. Rajesh Hiremath",
      degrees: "MBBS, MD, DNB (Cardiology - Visiting)",
      department: "Cardiology & Emergency Care",
      designation: "Visiting Interventional Cardiologist",
      experience: "18+ Years Experience",
      opdTiming: "Every Tuesday & Friday: 11:00 AM – 03:00 PM (On Call for Emergencies)",
      specialties: ["Preventive Cardiology", "Echocardiography", "Hypertension & Heart Failure", "Post-Angioplasty Care"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80"
    }
  ],

  gallery: [
    {
      id: 1,
      category: "Campus & Architecture",
      title: "Hospital Entrance Arch & Main Campus",
      subtitle: "Dedicated security gate, front parking, and modern entrance portico",
      image: "/images/hospital-entrance-aerial.jpg"
    },
    {
      id: 2,
      category: "Campus & Architecture",
      title: "Bird's-Eye Hospital Campus Masterplan",
      subtitle: "Multi-speciality wing, ample vehicle parking, and green surroundings",
      image: "/images/hospital-campus-overview.jpg"
    },
    {
      id: 3,
      category: "Healing Environment",
      title: "Landscaped Patient Recovery Lawns",
      subtitle: "Lush green walking gardens and serene healing environment",
      image: "/images/hospital-garden-lawn.jpg"
    },
    {
      id: 4,
      category: "Emergency & Access",
      title: "Multi-Tier Continuous Emergency Ramp",
      subtitle: "Architectural vertical louvre facade and barrier-free stretcher transit",
      image: "/images/hospital-ramp-facade.jpg"
    },
    {
      id: 5,
      category: "Clinical OT & ICU",
      title: "Modular Operation Theatre Complex",
      subtitle: "Sterile laminar airflow, HEPA filtration, and HD laparoscopic equipment",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 6,
      category: "Clinical OT & ICU",
      title: "Advanced Intensive Care Unit (ICU)",
      subtitle: "Ventilator support and continuous multi-parameter cardiac monitoring",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 7,
      category: "Diagnostics & Labs",
      title: "High-Resolution Diagnostic Imaging & Lab",
      subtitle: "Digital X-Ray, 4D Ultrasound, and automated biochemistry analyzers",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 8,
      category: "Inpatient Rooms",
      title: "Deluxe Inpatient Private Suite",
      subtitle: "Air-conditioned patient room with attendant comfort and nurse call system",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Basavaraj Patil",
      location: "Talikot, Bijapur",
      rating: 5,
      comment: "When my father had a severe orthopedic emergency after an accident, Shree Sai Hospital team acted swiftly. The surgery was performed smoothly by Dr. Veerendra Patil, and the ICU staff provided caring attention. We are grateful to have such high standard medical care right here in Talikot.",
      department: "Orthopedic Surgery"
    },
    {
      id: 2,
      name: "Savitri Kulkarni",
      location: "Muddebihal",
      rating: 5,
      comment: "We had our baby delivered at Shree Sai Hospital under Dr. Gangambika Patil's supervision. The maternity team and nurses were extremely gentle and professional. Highly recommend their gynecology and maternity facilities to all mothers in the district.",
      department: "Obstetrics & Maternity"
    },
    {
      id: 3,
      name: "Mallikarjun Biradar",
      location: "Talikot",
      rating: 5,
      comment: "Underwent laparoscopic gallbladder surgery with Dr. Suresh Deshmukh. Minimal pain, tiny incision, and was discharged within 2 days. The hospital cleanliness, green campus, and billing transparency are commendable.",
      department: "Laparoscopic Surgery"
    }
  ],

  faqs: [
    {
      question: "Is Shree Sai Hospital emergency open 24 hours?",
      answer: "Yes, our Emergency & Trauma Unit, Intensive Care Unit (ICU), in-house Pharmacy, and Ambulance services operate 24 hours a day, 7 days a week, including all public holidays."
    },
    {
      question: "Where is Shree Sai Hospital located in Talikot?",
      answer: "We are situated conveniently on Main Road, Talikot - 586214, Bijapur District, Karnataka, with easy vehicle access, wide ambulance parking, and wheelchair ramps."
    },
    {
      question: "How can I book an OPD consultation or doctor appointment?",
      answer: "You can click the 'Call Hospital' button to dial directly (+91 88613 51881) or tap the 'WhatsApp Enquiry' button on this website to instantly message our reception team."
    },
    {
      question: "What diagnostic facilities are available in-house?",
      answer: "We have a fully automated Pathology laboratory, Digital X-Ray, 3D/4D Ultrasound, 12-Lead ECG, and vital cardiac biomarker testing with fast turnaround times."
    },
    {
      question: "Are emergency surgeries and Caesarean sections handled at night?",
      answer: "Yes, our on-call surgical team, anaesthetists, and modular operation theatre are prepared 24/7 for emergency cesareans (LSCS), acute trauma fixations, and appendicitis surgeries."
    }
  ]
};
