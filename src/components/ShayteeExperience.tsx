import { brandInfo } from "@/lib/beautyData";

export default function ShayteeExperience() {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-black border-y border-brand-pink/5">
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-brand-pink/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            Brand Universe
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-cream mt-4 mb-6 leading-tight">
            Part of The <span className="luxury-gradient-text">Shaytee Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-cream/70 leading-relaxed">
            From sweet treats to beauty appointments, Shaytee is building a lifestyle brand in Akure — a place for glam days, birthdays, hangouts, events, and confident looks.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Shaytee Beauty Studio */}
          <div className="glass-card p-8 rounded-2xl border border-brand-pink/10 flex flex-col justify-between hover:scale-[1.01] hover:border-brand-pink/30 transition-all duration-300 relative group">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/5 rounded-bl-full group-hover:bg-brand-pink/10 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">
                    Hair & Lashes
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-brand-cream mt-1">
                    Shaytee Beauty Studio
                  </h3>
                </div>
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-sm sm:text-base text-brand-cream/70 leading-relaxed mb-8">
                Book hair, lashes, wigs, piercings, pedicures, and custom beauty appointments designed to make you feel polished and confident. Clean styling right around FUTA South Gate.
              </p>
            </div>

            <div className="border-t border-brand-pink/5 pt-6 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-brand-cream/40">TikTok Followers</span>
                  <span className="text-lg font-bold text-brand-gold">{brandInfo.followers}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-brand-cream/40">TikTok Likes</span>
                  <span className="text-lg font-bold text-brand-gold">{brandInfo.likes}</span>
                </div>
              </div>
              <div className="text-xs text-brand-pink/80 font-medium tracking-wider mt-4">
                Active Studio Channel: {brandInfo.tiktokHandle}
              </div>
            </div>
          </div>

          {/* Card 2: Shaytee's Treat */}
          <div className="glass-card p-8 rounded-2xl border border-brand-pink/10 flex flex-col justify-between hover:scale-[1.01] hover:border-brand-gold/30 transition-all duration-300 relative group">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full group-hover:bg-brand-gold/10 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                    Dessert & Popcorn
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-brand-cream mt-1">
                    Shaytee’s Treat
                  </h3>
                </div>
                <span className="text-2xl">🍦</span>
              </div>
              <p className="text-sm sm:text-base text-brand-cream/70 leading-relaxed mb-8">
                Indulge in sweet treats, customized popcorn boxes, and creamy ice creams. The go-to spot in Akure for events, gift boxes, and dessert cravings.
              </p>
            </div>

            <div className="border-t border-brand-pink/5 pt-6 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-brand-cream/40">TikTok Followers</span>
                  <span className="text-lg font-bold text-brand-gold">{brandInfo.treatBrand.followers}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-brand-cream/40">TikTok Likes</span>
                  <span className="text-lg font-bold text-brand-gold">{brandInfo.treatBrand.likes}</span>
                </div>
              </div>
              <div className="text-xs text-brand-gold/80 font-medium tracking-wider mt-4">
                Active Dessert Channel: {brandInfo.treatBrand.tiktokHandle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
