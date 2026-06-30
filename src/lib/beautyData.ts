export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  ctaText: string;
  tag: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ChecklistItem {
  id: string;
  task: string;
  status: 'pending' | 'completed';
  notes?: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  description: string;
  location: string;
  locationDetails: string;
  locationNote: string;
  whatsappNumber: string;
  whatsappNumberConfirmed: boolean;
  tiktokHandle: string;
  tiktokDisplayName: string;
  followers: string;
  likes: string;
  treatBrand: {
    name: string;
    tiktokHandle: string;
    followers: string;
    likes: string;
    description: string;
  };
}

export const brandInfo: BrandInfo = {
  name: "Shaytee Beauty Studio",
  tagline: "Hair, Lashes & Beauty Appointments in Akure",
  description: "Shaytee Beauty Studio is an Akure beauty space for clean hairstyling, wigs, lash sets, piercing, pedicure and beauty appointments around FUTA South Gate.",
  location: "FUTA South Gate, beside Abula / opposite Embassy Lodge, Akure",
  locationDetails: "Beside Abula / opposite Embassy Lodge, Akure",
  locationNote: "Exact location wording pending owner confirmation.",
  whatsappNumber: "2348069621919",
  whatsappNumberConfirmed: false, // Pending Owner Confirmation
  tiktokHandle: "@hairbyshaytee",
  tiktokDisplayName: "AKURE HAIRSTYLIST /LASH TECH",
  followers: "1K+",
  likes: "36.9K+",
  treatBrand: {
    name: "Shaytee's Treat",
    tiktokHandle: "@shaytee.s.treat",
    followers: "2.6K+",
    likes: "199.5K+",
    description: "Order ice cream, popcorn and sweet treats in Akure."
  }
};

export const services: Service[] = [
  {
    id: "boho-braids",
    name: "Boho Braids",
    category: "Hair",
    description: "Neat, stylish boho braids with premium curls for a textured, youthful luxury look.",
    price: "Price on request",
    ctaText: "Book Boho Braids",
    tag: "Trending"
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    category: "Hair",
    description: "Sleek ponytails, updos, and creative hair styling tailored for events and everyday glam.",
    price: "Price on request",
    ctaText: "Book Hair Styling",
    tag: "Popular"
  },
  {
    id: "wig-install",
    name: "Wig Installation",
    category: "Wigs",
    description: "Flawless frontal and closure installations with clean melting, plucking, and custom styling.",
    price: "Price on request",
    ctaText: "Book Wig Install",
    tag: "Glam"
  },
  {
    id: "wig-sales",
    name: "Wig Sales",
    category: "Wigs",
    description: "Premium human hair wigs and quality synthetic options available for pre-order and custom coloring.",
    price: "Price on request",
    ctaText: "Inquire about Wigs",
    tag: "Sales"
  },
  {
    id: "lash-extensions",
    name: "Lash Extensions",
    category: "Lashes",
    description: "Classic and volume lash extension sets designed to enhance your eyes with comfort and durability.",
    price: "Price on request",
    ctaText: "Book Classic Lashes",
    tag: "Essential"
  },
  {
    id: "hybrid-lash",
    name: "Hybrid Lash Set",
    category: "Lashes",
    description: "A perfect blend of classic lashes and volume fans for a wispy, textured look with extra glam.",
    price: "Price on request",
    ctaText: "Book Hybrid Set",
    tag: "Glam"
  },
  {
    id: "needle-piercing",
    name: "Needle / Lobe Piercing",
    category: "Beauty & Piercing",
    description: "Clean, hygienic, and precise needle piercing for ear lobes, cartilage, and facial piercings.",
    price: "Price on request",
    ctaText: "Book Piercing",
    tag: "New"
  },
  {
    id: "pedicure",
    name: "Pedicure & Self-care",
    category: "Pedicure",
    description: "Relaxing foot soak, scrub, nail shaping, cuticle care, and professional polish options.",
    price: "Price on request",
    ctaText: "Book Pedicure",
    tag: "Relaxing"
  },
  {
    id: "beauty-appointment",
    name: "Beauty Appointment",
    category: "Beauty & Piercing",
    description: "Tailored multi-service beauty sessions. Select this to customize your glam day.",
    price: "Price on request",
    ctaText: "Book Glam Session",
    tag: "Custom"
  }
];

export const galleryCategories = [
  { id: "braids", name: "Braids", description: "Boho and neat protective braid styles" },
  { id: "wigs", name: "Wigs", description: "Wig installations and sales prep" },
  { id: "lashes", name: "Lashes", description: "Classic, hybrid, and volume lash extensions" },
  { id: "piercing", name: "Piercing", description: "Hygienic lobe and cartilage piercings" },
  { id: "pedicure", name: "Pedicure", description: "Self-care pedicures and foot treatments" },
  { id: "studio", name: "Studio Moments", description: "Shaytee Beauty Studio vibe and setup" }
];

export const faqs: FAQ[] = [
  {
    question: "How do I book an appointment?",
    answer: "You can book directly through our website booking form which automatically generates a WhatsApp draft. Send this draft to us on WhatsApp, and we will confirm your date and time."
  },
  {
    question: "Are prices fixed?",
    answer: "Prices are on request and vary depending on specific styles, hair lengths, and lash densities. We will provide a complete custom quote on WhatsApp before confirming your booking."
  },
  {
    question: "Where is the studio located?",
    answer: "We are located around FUTA South Gate, beside Abula / opposite Embassy Lodge, Akure. The exact location link will be provided upon booking confirmation."
  },
  {
    question: "Can I send a style reference?",
    answer: "Yes, absolutely! We love reference photos. You can attach reference screenshots of braids, lashes, or wig styles directly in our WhatsApp chat."
  },
  {
    question: "Do I need to book ahead?",
    answer: "We highly recommend booking at least 24–48 hours in advance, especially for wig installations and weekend appointments, to secure your preferred slot."
  },
  {
    question: "Can I confirm availability on WhatsApp?",
    answer: "Yes, our WhatsApp booking link is the fastest way to chat with us, check slot availability, and confirm final pricing."
  }
];

export const ownerChecklist: ChecklistItem[] = [
  {
    id: "studio-name",
    task: "Official Beauty Studio Name Confirmation",
    status: "pending",
    notes: "Currently using 'Shaytee Beauty Studio'."
  },
  {
    id: "whatsapp-num",
    task: "Official WhatsApp Booking Number",
    status: "pending",
    notes: "Currently using demo number '2348069621919'."
  },
  {
    id: "service-list",
    task: "Full Service List",
    status: "pending",
    notes: "Verify if we need to add or remove any beauty services."
  },
  {
    id: "price-list",
    task: "Official Price List",
    status: "pending",
    notes: "Currently all services are listed as 'Price on request'."
  },
  {
    id: "opening-hours",
    task: "Opening Hours & Work Schedule",
    status: "pending",
    notes: "Need opening hours (e.g. Mon-Sat 9AM - 7PM)."
  },
  {
    id: "gallery-photos",
    task: "Approved Salon/Gallery Photos",
    status: "pending",
    notes: "Website currently uses premium gradient placeholder cards."
  },
  {
    id: "tiktok-link",
    task: "TikTok Link Confirmation",
    status: "pending",
    notes: "Currently using handle '@hairbyshaytee'."
  },
  {
    id: "instagram-link",
    task: "Instagram Link / Username",
    status: "pending",
    notes: "Instagram link is missing."
  },
  {
    id: "location-wording",
    task: "Exact Location Wording & Google Map Link",
    status: "pending",
    notes: "Currently: 'FUTA South Gate, beside Abula / opposite Embassy Lodge, Akure'."
  },
  {
    id: "booking-rules",
    task: "Booking Rules & Deposit Policy",
    status: "pending",
    notes: "Deposit rules, late arrival policy, and cancellation policy."
  },
  {
    id: "team-info",
    task: "Staff / Team Information",
    status: "pending",
    notes: "Will Shaytee be working alone or are there other stylists?"
  }
];
