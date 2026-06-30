"use client";

import { useState } from "react";
import { services } from "@/lib/beautyData";
import ServiceCard from "@/components/ServiceCard";

const CATEGORIES = ["All", "Hair", "Wigs", "Lashes", "Beauty & Piercing", "Pedicure"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = activeCategory === "All"
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
          Studio Menu
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-cream mt-4 mb-6 leading-tight">
          Explore Our <span className="luxury-gradient-text">Beauty Services</span>
        </h1>
        <p className="text-sm sm:text-base text-brand-cream/70 leading-relaxed font-light">
          From precise braids to customized wig installations and hybrid lashes, we provide premium beauty care near FUTA South Gate. Rate details are customized on request.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 relative z-10">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
              activeCategory === category
                ? "bg-gradient-to-r from-brand-pink to-brand-gold border-transparent text-brand-black shadow-[0_0_15px_rgba(251,207,232,0.15)]"
                : "bg-brand-dark/50 border-brand-pink/10 hover:border-brand-gold/30 text-brand-cream/80 hover:text-brand-cream"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {filteredServices.map((service) => (
          <div key={service.id} className="transition-all duration-500 animate-fadeIn">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      {/* Custom Inquiry CTA block */}
      <div className="mt-16 text-center bg-brand-dark/40 border border-brand-pink/5 p-8 rounded-2xl max-w-2xl mx-auto relative z-10">
        <h3 className="text-lg font-bold text-brand-cream mb-2">Need a custom hair style or lash mapping?</h3>
        <p className="text-xs text-brand-cream/60 leading-relaxed mb-6">
          Send us your reference images or details. We handle customized styling plans for birthdays, events, and special occasions.
        </p>
        <a
          href="/book?service=beauty-appointment"
          className="inline-flex items-center justify-center px-6 py-3 bg-brand-black hover:bg-brand-gold text-brand-cream hover:text-brand-black border border-brand-pink/10 hover:border-brand-gold text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded shadow-md"
        >
          Consult Stylist
        </a>
      </div>
    </div>
  );
}
