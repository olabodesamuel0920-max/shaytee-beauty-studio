import BookingForm from "@/components/BookingForm";

export default function BookPage() {
  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
          Booking Concierge
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-cream mt-4 mb-6 leading-tight">
          Schedule Your <span className="luxury-gradient-text">Studio Session</span>
        </h1>
        <p className="text-sm sm:text-base text-brand-cream/70 leading-relaxed font-light">
          Use our booking assistant below to input your appointment preferences. A plain text request will generate immediately for you to review and send to us on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 max-w-5xl mx-auto">
        {/* Concierge Instructions Panel */}
        <div className="lg:col-span-5 space-y-8">
          {/* Booking Steps */}
          <div className="glass-card p-6 rounded-xl border border-brand-pink/5 space-y-4">
            <h3 className="text-base font-bold text-brand-gold uppercase tracking-wider">
              Booking Process
            </h3>
            
            <div className="space-y-4">
              <div className="flex space-x-3">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-xs text-brand-pink font-bold flex items-center justify-center">1</span>
                <div>
                  <h4 className="text-xs font-bold text-brand-cream uppercase tracking-wide">Submit Details</h4>
                  <p className="text-[11px] text-brand-cream/60 leading-relaxed mt-0.5">Fill in your name, target style, and preferred calendar slots.</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-xs text-brand-pink font-bold flex items-center justify-center">2</span>
                <div>
                  <h4 className="text-xs font-bold text-brand-cream uppercase tracking-wide">WhatsApp Redirect</h4>
                  <p className="text-[11px] text-brand-cream/60 leading-relaxed mt-0.5">Our tool generates a text draft and opens a WhatsApp chat with our studio.</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-xs text-brand-pink font-bold flex items-center justify-center">3</span>
                <div>
                  <h4 className="text-xs font-bold text-brand-cream uppercase tracking-wide">Stylist Confirmation</h4>
                  <p className="text-[11px] text-brand-cream/60 leading-relaxed mt-0.5">We will check the schedule, confirm the slot, and send you the custom pricing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Rules / Policies */}
          <div className="glass-card p-6 rounded-xl border border-brand-pink/5 space-y-4">
            <h3 className="text-base font-bold text-brand-pink uppercase tracking-wider">
              Studio Policies
            </h3>
            
            <ul className="space-y-3 text-[11px] text-brand-cream/70 leading-relaxed">
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">•</span>
                <span>Please arrive with clean, product-free hair if booking boho braids or installations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">•</span>
                <span>Do not wear mascara, eyeliner, or oils around the eyes if booking lash extensions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-2">•</span>
                <span><strong>Deposit Policy:</strong> Exact deposit requirements and slot holds are pending owner confirmation and will be details on WhatsApp.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-7 bg-brand-black border border-brand-pink/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/5 rounded-full blur-xl animate-pulse-glow" />
          <h3 className="text-lg font-bold text-brand-cream tracking-wide mb-6">Appointment Details</h3>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
