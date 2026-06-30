"use client";

import { useState } from "react";
import { galleryCategories } from "@/lib/beautyData";

const GALLERY_ITEMS = [
  { id: 1, category: "braids", name: "Boho Braids Accent", icon: "💇‍♀️", desc: "Premium extensions with curls" },
  { id: 2, category: "braids", name: "Neat Knotless Braid Setup", icon: "💇‍♀️", desc: "Long knotless protective styling" },
  { id: 3, category: "wigs", name: "Frontal Install Melting", icon: "👑", desc: "Clean lace glueless installation" },
  { id: 4, category: "wigs", name: "Custom Colored Closure Wig", icon: "👑", desc: "Pre-plucked luxury bob unit" },
  { id: 5, category: "lashes", name: "Hybrid Lash Lash-Mapping", icon: "✨", desc: "Symmetrical lash line texture" },
  { id: 6, category: "lashes", name: "Wispy Classic Lash Set", icon: "✨", desc: "Natural extension enhancement" },
  { id: 7, category: "piercing", name: "Double Lobe Piercing Set", icon: "💎", desc: "Clean ear lobe needle puncture" },
  { id: 8, category: "piercing", name: "Helix Cartilage Accent", icon: "💎", desc: "Hygienic piercing process" },
  { id: 9, category: "pedicure", name: "Nail Buffing & Care", icon: "💅", desc: "Soothing scrub and pedicure" },
  { id: 10, category: "pedicure", name: "Foot Massage & Polish", icon: "💅", desc: "Nail trim and polish finish" },
  { id: 11, category: "studio", name: "Glam Styling Station", icon: "📸", desc: "Bright mirror and tools setup" },
  { id: 12, category: "studio", name: "Studio Cozy Vibe", icon: "📸", desc: "FUTA South Gate beauty chair" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-pink bg-brand-pink/10 px-3.5 py-1.5 rounded-full border border-brand-pink/20">
          Studio Vibe
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-cream mt-4 mb-6 leading-tight">
          Client Showcase <span className="luxury-gradient-text">& Lookbook</span>
        </h1>
        
        {/* Important Disclaimer Note */}
        <div className="max-w-2xl mx-auto bg-brand-pink/5 border border-brand-pink/15 rounded-lg p-4 mb-4">
          <p className="text-xs sm:text-sm text-brand-pink leading-relaxed italic">
            <strong>Note for the Owner:</strong> Gallery images below are demo placeholders. They will be replaced with your official hair styling, lashes, wig installations, and salon photos/videos once approved.
          </p>
        </div>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 relative z-10">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
            activeCategory === "All"
              ? "bg-gradient-to-r from-brand-pink to-brand-gold border-transparent text-brand-black shadow-[0_0_15px_rgba(251,207,232,0.15)]"
              : "bg-brand-dark/50 border-brand-pink/10 hover:border-brand-gold/30 text-brand-cream/80 hover:text-brand-cream"
          }`}
        >
          All (12)
        </button>
        {galleryCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-brand-pink to-brand-gold border-transparent text-brand-black shadow-[0_0_15px_rgba(251,207,232,0.15)]"
                : "bg-brand-dark/50 border-brand-pink/10 hover:border-brand-gold/30 text-brand-cream/80 hover:text-brand-cream"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
        {filteredItems.map((item) => {
          // Custom color shifts for aesthetic differentiation
          const colors = [
            "from-brand-pink/20 to-brand-gold/5",
            "from-violet-500/10 to-brand-pink/20",
            "from-rose-400/20 to-slate-500/10",
            "from-brand-gold/15 to-amber-500/5",
          ];

          return (
            <div
              key={item.id}
              className="group relative h-56 sm:h-72 rounded-xl overflow-hidden border border-brand-pink/5 flex flex-col justify-end bg-brand-dark/60 hover:border-brand-gold/30 hover:scale-[1.02] transition-all duration-500 shadow-lg"
            >
              {/* Animated high fidelity gradient placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[item.id % colors.length]} opacity-40 group-hover:opacity-75 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors duration-500" />

              {/* Decorative Floating Icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-5xl opacity-15 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {item.icon}
                </span>
              </div>

              {/* Tag */}
              <span className="absolute top-3 left-3 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-brand-pink bg-brand-pink/10 border border-brand-pink/20 rounded">
                {item.category}
              </span>

              {/* Details card on bottom */}
              <div className="p-4 relative z-10 border-t border-brand-pink/5 bg-brand-black/40 backdrop-blur-sm">
                <h3 className="font-extrabold text-xs sm:text-sm text-brand-cream tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-[10px] text-brand-cream/60 leading-normal mt-0.5">
                  {item.desc}
                </p>
                <div className="mt-2 text-[8px] uppercase tracking-widest text-brand-pink/80 font-bold">
                  Demo Placeholder
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note about uploading photos */}
      <div className="mt-16 text-center max-w-xl mx-auto bg-brand-dark/40 border border-brand-pink/5 p-6 rounded-xl relative z-10">
        <span className="text-xl block mb-2">📸</span>
        <h4 className="font-bold text-sm text-brand-cream">Stylist Tip</h4>
        <p className="text-xs text-brand-cream/60 leading-relaxed mt-1">
          When the site goes live, we will hook this page up to a live photo catalog showing your clean finishing work.
        </p>
      </div>
    </div>
  );
}
