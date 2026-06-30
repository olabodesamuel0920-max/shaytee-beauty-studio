import Link from "next/link";
import { brandInfo } from "@/lib/beautyData";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
          Our Story
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-cream mt-4 mb-6 leading-tight">
          About <span className="luxury-gradient-text">Shaytee Beauty Studio</span>
        </h1>
      </div>

      {/* About Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 max-w-5xl mx-auto">
        {/* Story copy */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-cream">
            Akure's Premium Glam Space
          </h2>
          <p className="text-sm sm:text-base text-brand-cream/80 leading-relaxed font-light">
            Shaytee Beauty Studio is a beauty space in Akure focused on neat hairstyling, clean lash work, wigs, piercings, pedicure and beauty appointments for clients who want a polished, confident look.
          </p>
          <p className="text-sm sm:text-base text-brand-cream/80 leading-relaxed font-light">
            Spearheaded by <strong className="text-brand-pink">Hair by Shaytee</strong>, we are a social-first beauty brand that understands what is trendy, youthful, and client-focused. We don't just styled hair or do lashes — we curate looks that are social-media-ready and designed to shine.
          </p>
          <p className="text-sm sm:text-base text-brand-cream/80 leading-relaxed font-light">
            Our cozy studio is located right around <strong className="text-brand-gold">FUTA South Gate</strong>, beside Abula / opposite Embassy Lodge, making us the perfect beauty destination for students and residents looking for professional, hygienic, and precise beauty care.
          </p>

          <div className="pt-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-pink to-brand-gold hover:from-brand-gold hover:to-brand-pink text-brand-black text-xs font-extrabold uppercase tracking-widest transition-all duration-300 rounded shadow-md"
            >
              Book Studio Appointment
            </Link>
          </div>
        </div>

        {/* Brand highlights cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Stylist details */}
          <div className="glass-card p-6 rounded-xl border border-brand-pink/5 space-y-3">
            <span className="text-2xl">💇‍♀️</span>
            <h3 className="text-base font-bold text-brand-pink uppercase tracking-wider">Stylist Profile</h3>
            <div className="text-[11px] text-brand-cream/70 space-y-2">
              <p>
                <strong>TikTok Identity:</strong> {brandInfo.tiktokDisplayName}
              </p>
              <p>
                <strong>Followers & Likes:</strong> {brandInfo.followers} followers and {brandInfo.likes} likes on TikTok.
              </p>
              <p>
                <strong>Specialty:</strong> Boho braids, melting lace frontals, hybrid lash mappings, hygienic piercing, and pedicures.
              </p>
            </div>
          </div>

          {/* Card 2: Space details */}
          <div className="glass-card p-6 rounded-xl border border-brand-pink/5 space-y-3">
            <span className="text-2xl">📍</span>
            <h3 className="text-base font-bold text-brand-gold uppercase tracking-wider">Studio Vibe</h3>
            <div className="text-[11px] text-brand-cream/70 space-y-2">
              <p>
                <strong>Location:</strong> FUTA South Gate, beside Abula / opposite Embassy Lodge, Akure.
              </p>
              <p>
                <strong>Clientele:</strong> Student-friendly, accommodating pricing, youthful music, comfortable salon seating, and premium finishing.
              </p>
              <p>
                <strong>Goal:</strong> Showing your best self online and offline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
