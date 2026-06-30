export default function FloatingBeautyCard() {
  const cards = [
    {
      title: "Hair Styling",
      tag: "Boho Braids & Sleek Updos",
      color: "from-brand-pink/20 to-transparent",
      shadow: "rgba(251,207,232,0.1)",
      animation: "animate-float",
      position: "translate-y-[-10px] md:translate-y-[-20px] translate-x-[-15px] z-20",
      accent: "🌸"
    },
    {
      title: "Lash Sets",
      tag: "Classic & Hybrid Extensions",
      color: "from-brand-gold/15 to-transparent",
      shadow: "rgba(212,175,55,0.08)",
      animation: "animate-float-delayed",
      position: "translate-y-[60px] md:translate-y-[100px] translate-x-[35px] z-30",
      accent: "✨"
    },
    {
      title: "Wig Install",
      tag: "Flawless Lace Melting",
      color: "from-white/10 to-transparent",
      shadow: "rgba(253,251,247,0.05)",
      animation: "animate-float",
      position: "translate-y-[-70px] md:translate-y-[-120px] translate-x-[50px] z-10",
      accent: "👑"
    },
    {
      title: "Piercing",
      tag: "Hygienic Needle & Lobe",
      color: "from-brand-pink/15 to-transparent",
      shadow: "rgba(251,207,232,0.08)",
      animation: "animate-float-delayed",
      position: "translate-y-[120px] md:translate-y-[200px] translate-x-[-60px] z-40",
      accent: "💎"
    },
    {
      title: "Pedicure",
      tag: "Nail Care & Foot Scrubs",
      color: "from-brand-gold/20 to-transparent",
      shadow: "rgba(212,175,55,0.1)",
      animation: "animate-float",
      position: "translate-y-[20px] md:translate-y-[10px] translate-x-[-90px] z-15",
      accent: "💅"
    }
  ];

  return (
    <div className="relative w-full h-[320px] sm:h-[450px] flex items-center justify-center perspective-3d">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-pink/10 via-brand-gold/5 to-transparent blur-3xl animate-pulse-glow" />
      
      {/* Center 3D container */}
      <div className="relative preserve-3d transform rotate-y-[-15deg] rotate-x-[15deg] hover:rotate-y-[5deg] hover:rotate-x-[5deg] transition-all duration-1000 ease-out flex items-center justify-center w-[220px] sm:w-[320px]">
        {/* Central Core Object */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-brand-dark via-brand-pink/20 to-brand-gold/20 border border-brand-pink/10 shadow-[0_0_50px_rgba(251,207,232,0.15)] flex items-center justify-center backdrop-blur-2xl">
          <div className="text-center">
            <span className="text-3xl sm:text-4xl animate-bounce duration-[3000ms] block">✨</span>
            <span className="text-[10px] sm:text-xs tracking-[0.3em] font-semibold text-brand-gold uppercase mt-2 block">
              Glam Space
            </span>
          </div>
        </div>

        {/* Floating Card Layers */}
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`absolute w-[180px] sm:w-[220px] glass-card p-4 rounded-xl shadow-2xl border border-brand-pink/10 bg-gradient-to-br ${card.color} ${card.position} ${card.animation}`}
            style={{
              boxShadow: `0 15px 35px ${card.shadow}, inset 0 1px 1px rgba(255,255,255,0.1)`,
              transformStyle: "preserve-3d"
            }}
          >
            <div className="flex items-center space-x-3" style={{ transform: "translateZ(20px)" }}>
              <span className="text-xl">{card.accent}</span>
              <div className="text-left">
                <h4 className="font-extrabold text-xs sm:text-sm text-brand-cream tracking-wide">
                  {card.title}
                </h4>
                <p className="text-[9px] sm:text-[10px] text-brand-pink tracking-wider mt-0.5">
                  {card.tag}
                </p>
              </div>
            </div>
            
            {/* Subtle glow edge inside 3D card */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-45" />
          </div>
        ))}
      </div>
    </div>
  );
}
