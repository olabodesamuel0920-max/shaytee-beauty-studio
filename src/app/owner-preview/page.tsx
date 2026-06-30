"use client";

import { ownerChecklist, brandInfo } from "@/lib/beautyData";

export default function OwnerPreviewPage() {
  const handleSendFeedback = () => {
    const feedbackDraft = `SHAYTEE BEAUTY STUDIO — OWNER FEEDBACK\n\nHi! Here are the details to update my website:\n\n- Official Studio Name:\n- Confirmed WhatsApp Booking Number:\n- Service Prices:\n- Opening Hours:\n- Instagram Link/Handle:\n- Confirmed Location Description:\n- Booking/Deposit Rules:\n- Team Details (if any):\n- Attached Salon Photos/Videos for Gallery:\n\nThanks!`;

    const encodedFeedback = encodeURIComponent(feedbackDraft);
    // Opens chat with the developer (temporary using the same placeholder, or developer placeholder)
    const whatsappUrl = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodedFeedback}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
          Developer Console
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-cream mt-4 mb-4 leading-tight">
          Owner Review <span className="luxury-gradient-text">& Checklist</span>
        </h1>
        <p className="text-sm text-brand-cream/70 leading-relaxed max-w-2xl mx-auto font-light">
          Welcome to the Shaytee Beauty Studio website demo review page. Below is the checklist of assets and details needed from you to convert this demo into a fully live website.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 max-w-5xl mx-auto items-start">
        {/* Status Card & Action Panel */}
        <div className="lg:col-span-4 space-y-6">
          {/* Mini Demo Status Card */}
          <div className="glass-card p-6 rounded-xl border border-brand-pink/10 bg-brand-dark/90 relative overflow-hidden">
            {/* Pulsing indicator */}
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 animate-ping" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 absolute" />
              <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Demo</span>
            </div>

            <h3 className="text-sm font-bold text-brand-cream uppercase tracking-wider mb-4">
              Demo Status
            </h3>

            <ul className="space-y-3.5 text-xs text-brand-cream/80">
              <li className="flex items-center justify-between">
                <span>Website demo ready</span>
                <span className="text-green-400 font-bold">✓ Ready</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Final business details</span>
                <span className="text-yellow-500 font-bold">● Pending</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Photos/Videos upload</span>
                <span className="text-yellow-500 font-bold">● Pending</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Price list confirmation</span>
                <span className="text-yellow-500 font-bold">● Pending</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Booking phone number</span>
                <span className="text-yellow-500 font-bold">● Pending</span>
              </li>
            </ul>
          </div>

          {/* Action Callout */}
          <div className="glass-card p-6 rounded-xl border border-brand-pink/5 space-y-4">
            <h3 className="text-xs font-bold text-brand-gold uppercase tracking-wider">
              Submit Your Updates
            </h3>
            <p className="text-[11px] text-brand-cream/60 leading-relaxed">
              Clicking below will format a feedback list to open directly in WhatsApp. You can type in your answers and send them over to update the site.
            </p>
            <button
              onClick={handleSendFeedback}
              className="w-full py-3 px-4 bg-brand-cream hover:bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded shadow-md cursor-pointer"
            >
              Send Details on WhatsApp
            </button>
          </div>
        </div>

        {/* Checklist details */}
        <div className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-2xl border border-brand-pink/10 bg-brand-dark/50">
          <h3 className="text-lg font-bold text-brand-cream tracking-wide mb-6 flex items-center justify-between">
            <span>Asset Checklist</span>
            <span className="text-xs font-normal text-brand-cream/40">0 / 11 Complete</span>
          </h3>

          <div className="space-y-4">
            {ownerChecklist.map((item) => (
              <div
                key={item.id}
                className="flex items-start p-4 rounded-lg bg-brand-black/40 border border-brand-pink/5 hover:border-brand-pink/20 transition-all"
              >
                {/* Empty check indicator */}
                <div className="flex-shrink-0 mt-0.5 mr-4 h-5 w-5 rounded border border-brand-pink/30 flex items-center justify-center text-xs text-brand-gold font-bold">
                  {item.status === "completed" ? "✓" : ""}
                </div>

                <div className="flex-grow space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-brand-cream tracking-wide uppercase">
                      {item.task}
                    </h4>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-full">
                      {item.status}
                    </span>
                  </div>
                  {item.notes && (
                    <p className="text-xs text-brand-cream/50 font-light leading-relaxed">
                      {item.notes}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
