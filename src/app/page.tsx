"use client";

import Link from "next/link";
import { brandInfo, services, faqs, galleryCategories } from "@/lib/beautyData";
import FloatingBeautyCard from "@/components/FloatingBeautyCard";
import ServiceCard from "@/components/ServiceCard";
import BookingForm from "@/components/BookingForm";
import ShayteeExperience from "@/components/ShayteeExperience";

export default function Home() {
  // Get 3 featured services for preview
  const featuredServices = services.filter((s) =>
    ["boho-braids", "wig-install", "hybrid-lash"].includes(s.id)
  );

  return (
    <div className="relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[800px] right-10 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* A. Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
              Akure Glam Space
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-brand-cream leading-tight sm:leading-none">
              Hair, Lashes & <br className="hidden sm:inline" />
              <span className="luxury-gradient-text">Beauty Appointments</span> <br />
              in Akure
            </h1>
            <p className="text-base sm:text-lg text-brand-cream/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              {brandInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/book"
                className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-gold hover:from-brand-gold hover:to-brand-pink text-brand-black text-xs font-extrabold uppercase tracking-widest transition-all duration-500 rounded shadow-[0_0_20px_rgba(251,207,232,0.2)] hover:scale-105"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto text-center px-8 py-4 border border-brand-cream/20 hover:border-brand-gold text-brand-cream hover:text-brand-gold text-xs font-extrabold uppercase tracking-widest transition-colors duration-300 rounded"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Hero Floating 3D visual */}
          <div className="lg:col-span-5 relative">
            <FloatingBeautyCard />
          </div>
        </div>
      </section>

      {/* B. Social Proof Strip */}
      <section className="bg-brand-dark/80 border-y border-brand-pink/5 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-8 text-center">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-brand-cream/40 mb-1">Stylist Handle</span>
            <a
              href={`https://www.tiktok.com/${brandInfo.tiktokHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-bold text-brand-pink hover:text-brand-gold transition-colors"
            >
              {brandInfo.tiktokHandle}
            </a>
          </div>
          <div className="h-8 w-[1px] bg-brand-pink/10 hidden sm:block" />
          
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-brand-cream/40 mb-1">Followers</span>
            <span className="text-xl sm:text-2xl font-black text-brand-gold">{brandInfo.followers}</span>
          </div>
          <div className="h-8 w-[1px] bg-brand-pink/10 hidden sm:block" />

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-brand-cream/40 mb-1">TikTok Likes</span>
            <span className="text-xl sm:text-2xl font-black text-brand-gold">{brandInfo.likes}</span>
          </div>
          <div className="h-8 w-[1px] bg-brand-pink/10 hidden sm:block" />

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-brand-cream/40 mb-1">Stylist Role</span>
            <span className="text-sm sm:text-base font-bold text-brand-cream/80">{brandInfo.tiktokDisplayName}</span>
          </div>
          <div className="h-8 w-[1px] bg-brand-pink/10 hidden sm:block" />

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-brand-cream/40 mb-1">Location</span>
            <span className="text-sm sm:text-base font-bold text-brand-cream/80">FUTA South Gate</span>
          </div>
        </div>
      </section>

      {/* C. Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">
              Curated Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-cream mt-2">
              Popular Beauty Appointments
            </h2>
          </div>
          <Link
            href="/services"
            className="text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-brand-pink transition-colors mt-4 md:mt-0 flex items-center gap-2 group"
          >
            View All Services
            <svg
              className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* H. Why Choose Shaytee Beauty Studio */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/40 border-y border-brand-pink/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-cream mt-2">
              Elevating Your Glam Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl border border-brand-pink/5">
              <span className="text-3xl mb-4 block">✨</span>
              <h3 className="text-lg font-bold text-brand-cream mb-2">Clean Beauty Finishing</h3>
              <p className="text-sm text-brand-cream/60 leading-relaxed">
                Precise braiding, lace melting, and symmetrical lash sets crafted with professional focus.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-brand-pink/5">
              <span className="text-3xl mb-4 block">📸</span>
              <h3 className="text-lg font-bold text-brand-cream mb-2">Social-Media-Ready Looks</h3>
              <p className="text-sm text-brand-cream/60 leading-relaxed">
                Trendy styles perfect for your TikTok aesthetic, birthdays, and campus highlights.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-brand-pink/5">
              <span className="text-3xl mb-4 block">📍</span>
              <h3 className="text-lg font-bold text-brand-cream mb-2">FUTA South Gate Access</h3>
              <p className="text-sm text-brand-cream/60 leading-relaxed">
                Easily accessible beauty space, perfect for students and residents around Akure.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-brand-pink/5">
              <span className="text-3xl mb-4 block">💇‍♀️</span>
              <h3 className="text-lg font-bold text-brand-cream mb-2">All-in-One Space</h3>
              <p className="text-sm text-brand-cream/60 leading-relaxed">
                Get your boho braids, frontal installs, hybrid lashes, piercings, and pedicures in one space.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-brand-pink/5">
              <span className="text-3xl mb-4 block">💬</span>
              <h3 className="text-lg font-bold text-brand-cream mb-2">Easy WhatsApp Booking</h3>
              <p className="text-sm text-brand-cream/60 leading-relaxed">
                No complex portals. Book in seconds, draft your message, and finalise directly with Shaytee.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-brand-pink/5">
              <span className="text-3xl mb-4 block">💖</span>
              <h3 className="text-lg font-bold text-brand-cream mb-2">Client-Focused Vibe</h3>
              <p className="text-sm text-brand-cream/60 leading-relaxed">
                Youthful, warm, and highly accommodating space tailored to make every client feel like royalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D. Gallery Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">
              Showcase Preview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-cream mt-2">
              Studio & Service Gallery
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-brand-pink transition-colors mt-4 md:mt-0 flex items-center gap-2 group"
          >
            Explore Full Gallery
            <svg
              className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Gallery Gradients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryCategories.map((cat, idx) => {
            // Unique high-fidelity gradients representing different segments
            const gradients = [
              "from-brand-pink/30 via-brand-dark to-brand-gold/10",
              "from-brand-gold/30 via-brand-dark to-brand-pink/10",
              "from-violet-500/20 via-brand-dark to-brand-pink/20",
              "from-emerald-500/10 via-brand-dark to-brand-gold/20",
              "from-brand-pink/20 via-brand-dark to-slate-500/25",
              "from-rose-400/20 via-brand-dark to-brand-gold/15"
            ];
            const iconMap = ["💇‍♀️", "👑", "✨", "💎", "💅", "📸"];

            return (
              <Link
                key={cat.id}
                href="/gallery"
                className="group relative h-48 sm:h-64 rounded-xl overflow-hidden border border-brand-pink/5 flex items-center justify-center bg-gradient-to-tr transition-all duration-500 hover:border-brand-pink/30 hover:scale-[1.02]"
              >
                {/* Gradient background with animate pulse */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${gradients[idx % gradients.length]} opacity-60 group-hover:opacity-85 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/45" />

                {/* Content */}
                <div className="relative z-10 text-center p-4 space-y-2">
                  <span className="text-3xl sm:text-4xl block transform group-hover:scale-110 transition-transform duration-300">
                    {iconMap[idx % iconMap.length]}
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-lg text-brand-cream uppercase tracking-wider">
                    {cat.name}
                  </h3>
                  <span className="inline-block text-[9px] uppercase text-brand-gold font-bold tracking-widest bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded">
                    View
                  </span>
                </div>

                {/* Subtle disclaimer border decoration */}
                <div className="absolute bottom-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[8px] text-brand-cream/40 italic">Demo Placeholder</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* E. Booking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/30 border-y border-brand-pink/5" id="booking-concierge">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Context block */}
            <div className="md:col-span-5 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">
                Concierge Booking
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-cream tracking-tight leading-tight">
                Secure Your <br />
                <span className="gold-gradient-text">Glam Slot</span>
              </h2>
              <p className="text-sm text-brand-cream/70 leading-relaxed font-light">
                Fill in your preferred date and selected style. Clicking confirm will formulate your personal booking request message to open instantly in WhatsApp.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <span className="text-brand-gold text-sm mt-0.5">✔</span>
                  <span className="text-xs text-brand-cream/60">No advance payment required for request</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-brand-gold text-sm mt-0.5">✔</span>
                  <span className="text-xs text-brand-cream/60">Receive quote and setup details via WhatsApp</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-brand-gold text-sm mt-0.5">✔</span>
                  <span className="text-xs text-brand-cream/60">Reschedule easily with 24h notice</span>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="md:col-span-7 bg-brand-black border border-brand-pink/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/5 rounded-full blur-xl animate-pulse-glow" />
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* G. Part of The Shaytee Experience */}
      <ShayteeExperience />

      {/* I. FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-cream mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-brand-pink/5 rounded-lg bg-brand-dark/40 hover:border-brand-gold/20 p-5 transition-all duration-300 cursor-pointer"
            >
              <summary className="list-none flex items-center justify-between font-bold text-sm sm:text-base text-brand-cream/90 group-open:text-brand-gold">
                <span>{faq.question}</span>
                <span className="text-brand-pink group-hover:text-brand-gold transition-colors duration-300 font-extrabold text-lg transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-brand-cream/60 leading-relaxed mt-4 pt-4 border-t border-brand-pink/5 cursor-auto">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* F. Location Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/40 border-t border-brand-pink/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Address */}
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                Find Us
              </span>
              <h2 className="text-3xl font-extrabold text-brand-cream tracking-tight">
                Our Location
              </h2>
              <div className="space-y-2">
                <p className="text-base text-brand-cream font-semibold">
                  {brandInfo.location}
                </p>
                <p className="text-xs text-brand-cream/50 italic">
                  ({brandInfo.locationNote})
                </p>
              </div>
              <p className="text-sm text-brand-cream/60 leading-relaxed font-light">
                We are situated right next to the popular Abula joint and directly opposite Embassy Lodge around FUTA South Gate. It is a highly convenient location for campus students and anyone living around the FUTA area.
              </p>
            </div>

            {/* Map Placeholder Card */}
            <div className="h-64 sm:h-80 rounded-xl bg-gradient-to-tr from-brand-pink/15 via-brand-dark to-brand-gold/15 border border-brand-pink/10 shadow-2xl flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-black/90 to-brand-black/90" />
              <div className="relative z-10 space-y-4">
                <span className="text-4xl block transform group-hover:rotate-12 transition-transform duration-300">📍</span>
                <div>
                  <h3 className="font-bold text-sm text-brand-cream uppercase tracking-wider">
                    Interactive Map Placeholder
                  </h3>
                  <p className="text-[10px] text-brand-pink/80 mt-1 max-w-xs mx-auto">
                    Google Maps embed code pending official coordinates from Shaytee.
                  </p>
                </div>
                <span className="inline-block text-[9px] uppercase tracking-wider font-bold bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded text-brand-gold">
                  Pending Coordinate Confirmation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
