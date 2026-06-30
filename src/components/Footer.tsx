import Link from "next/link";
import { brandInfo } from "@/lib/beautyData";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-pink/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Bio Column */}
          <div className="md:col-span-2">
            <Link href="/" className="group flex flex-col mb-4 max-w-max">
              <span className="text-2xl font-extrabold tracking-widest text-brand-cream group-hover:text-brand-pink transition-colors">
                SHAYTEE
              </span>
              <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
                Beauty Studio
              </span>
            </Link>
            <p className="text-brand-cream/60 text-sm max-w-sm mb-6 leading-relaxed">
              Premium hair styling, custom wigs, flawless lash extensions, pedicure, and beauty appointments around FUTA South Gate, Akure. Custom-tailored to let your inner glam shine.
            </p>
            {/* TikTok Social Details */}
            <div className="flex items-center space-x-3">
              <a
                href={`https://www.tiktok.com/${brandInfo.tiktokHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-brand-pink/10 hover:border-brand-gold bg-brand-dark hover:bg-brand-gold/10 text-brand-cream transition-all duration-300"
              >
                {/* TikTok Icon */}
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.02 1.83.01 3.65-.01 5.48 0 2.27-.4 4.64-1.9 6.38-1.62 1.98-4.29 2.58-6.75 2.06-2.99-.57-5.19-3.23-5.24-6.27-.08-3.4 2.45-6.66 5.86-7.07.78-.1 1.58-.02 2.35.15v4.27c-.89-.26-1.89-.2-2.72.28-.99.54-1.52 1.67-1.48 2.78.01 1.34.98 2.56 2.3 2.78 1.41.28 3.01-.52 3.44-1.9.14-.42.15-.88.15-1.32-.01-4.04-.01-8.08-.01-12.12z" />
                </svg>
              </a>
              <span className="text-sm font-semibold tracking-wider text-brand-cream/80">
                {brandInfo.tiktokHandle}
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-brand-cream/70 hover:text-brand-cream transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-brand-cream/70 hover:text-brand-cream transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-brand-cream/70 hover:text-brand-cream transition-colors">
                  Gallery Placeholders
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-brand-cream/70 hover:text-brand-cream transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/owner-preview" className="text-sm text-brand-cream/70 hover:text-brand-cream transition-colors">
                  Owner Review
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Info Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
              Location & Hours
            </h3>
            <p className="text-sm text-brand-cream/70 leading-relaxed mb-4">
              {brandInfo.location}
            </p>
            <p className="text-xs text-brand-cream/50 italic mb-6">
              ({brandInfo.locationNote})
            </p>
            <Link
              href="/book"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-pink hover:text-brand-gold transition-colors group"
            >
              WhatsApp Booking
              <svg
                className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Part of The Shaytee Experience Block */}
        <div className="border-t border-brand-pink/5 pt-10 pb-8">
          <div className="glass-panel p-6 sm:p-8 rounded-lg relative overflow-hidden shadow-inner">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 rounded-full blur-2xl animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl animate-pulse-glow" />
            
            <div className="relative z-10">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold mb-2">
                Brand Vision
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-wider text-brand-cream mb-3">
                Part of The Shaytee Experience
              </h3>
              <p className="text-sm text-brand-cream/70 max-w-3xl mb-6 leading-relaxed">
                From sweet treats to beauty appointments, Shaytee is building a lifestyle brand in Akure — a place for glam days, birthdays, hangouts, events, and confident looks.
              </p>

              {/* Cross Brand Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel-light p-4 rounded border border-brand-pink/5 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-brand-pink mb-1">Shaytee Beauty Studio</h4>
                    <p className="text-xs text-brand-cream/60 leading-relaxed mb-3">
                      Book hair, lashes, wigs and beauty appointments near FUTA South Gate.
                    </p>
                  </div>
                  <div className="text-[10px] text-brand-gold font-semibold uppercase tracking-wider">
                    {brandInfo.followers} followers • {brandInfo.likes} likes
                  </div>
                </div>

                <div className="glass-panel-light p-4 rounded border border-brand-pink/5 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-brand-cream mb-1">Shaytee’s Treat</h4>
                    <p className="text-xs text-brand-cream/60 leading-relaxed mb-3">
                      Order ice cream, popcorn, customized treats, and sweets in Akure.
                    </p>
                  </div>
                  <div className="text-[10px] text-brand-gold font-semibold uppercase tracking-wider flex items-center justify-between">
                    <span>{brandInfo.treatBrand.followers} followers • {brandInfo.treatBrand.likes} likes</span>
                    <span className="text-[9px] text-brand-pink font-medium lowercase italic">{brandInfo.treatBrand.tiktokHandle}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-pink/5 pt-8 text-center">
          <p className="text-xs text-brand-cream/40 leading-relaxed">
            &copy; {new Date().getFullYear()} Shaytee Beauty Studio. All Rights Reserved. Created as a premium digital demo.
          </p>
        </div>
      </div>
    </footer>
  );
}
