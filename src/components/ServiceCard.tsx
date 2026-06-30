import Link from "next/link";
import { Service } from "@/lib/beautyData";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="glass-card p-6 rounded-xl border border-brand-pink/5 relative overflow-hidden flex flex-col justify-between h-full group">
      {/* Decorative Border Accent */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-pink to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Category & Tag */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-2.5 py-1 text-[9px] font-bold tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded-full uppercase">
            {service.category}
          </span>
          {service.tag && (
            <span className="text-[10px] font-bold text-brand-pink tracking-wider animate-pulse">
              {service.tag}
            </span>
          )}
        </div>

        {/* Service Title */}
        <h3 className="text-lg font-bold text-brand-cream tracking-wide mb-2 group-hover:text-brand-pink transition-colors">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-cream/60 leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Pricing and CTA */}
      <div className="mt-auto">
        <div className="flex items-baseline justify-between border-t border-brand-pink/5 pt-4 mb-4">
          <span className="text-xs text-brand-cream/40 uppercase tracking-wider">Rate</span>
          <span className="text-sm font-semibold text-brand-gold tracking-wide">
            {service.price}
          </span>
        </div>

        <Link
          href={`/book?service=${service.id}`}
          className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-brand-dark hover:bg-brand-gold text-brand-cream hover:text-brand-black border border-brand-pink/10 hover:border-brand-gold text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded"
        >
          Book This Service
        </Link>
      </div>
    </div>
  );
}
