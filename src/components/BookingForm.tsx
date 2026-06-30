"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { services, brandInfo } from "@/lib/beautyData";

function BookingFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    serviceId: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (serviceParam && services.some((s) => s.id === serviceParam)) {
      setFormData((prev) => ({ ...prev, serviceId: serviceParam }));
    }
  }, [serviceParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.serviceId) newErrors.serviceId = "Please select a service";
    if (!formData.date) newErrors.date = "Please select a preferred date";
    if (!formData.time) newErrors.time = "Please select a preferred time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedService = services.find((s) => s.id === formData.serviceId);
    const serviceName = selectedService ? selectedService.name : "Custom Beauty Session";

    // Text formatting following the exact prompt specification:
    // Plain text, no emojis, no broken symbols, proper url encoding.
    const message = `NEW BEAUTY APPOINTMENT — Shaytee Beauty Studio\n\nName: ${
      formData.name
    }\nService: ${serviceName}\nPreferred Date: ${
      formData.date
    }\nPreferred Time: ${formData.time}\nNotes: ${
      formData.notes || "None"
    }\n\nPlease confirm availability and final price.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
          Your Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Teniola Balogun"
          className="w-full bg-brand-dark/50 border border-brand-pink/10 focus:border-brand-gold rounded px-4 py-3 text-sm text-brand-cream placeholder-brand-cream/35 outline-none transition-colors"
        />
        {errors.name && <p className="text-xs text-red-400 mt-1 font-semibold">{errors.name}</p>}
      </div>

      {/* Service Dropdown */}
      <div>
        <label htmlFor="serviceId" className="block text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
          Select Beauty Service
        </label>
        <select
          id="serviceId"
          name="serviceId"
          value={formData.serviceId}
          onChange={handleChange}
          className="w-full bg-brand-dark/80 border border-brand-pink/10 focus:border-brand-gold rounded px-4 py-3 text-sm text-brand-cream outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="" className="bg-brand-black">-- Choose a Service --</option>
          {services.map((service) => (
            <option key={service.id} value={service.id} className="bg-brand-black">
              {service.name} ({service.price})
            </option>
          ))}
        </select>
        {errors.serviceId && <p className="text-xs text-red-400 mt-1 font-semibold">{errors.serviceId}</p>}
      </div>

      {/* Date & Time Picker */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-brand-dark/50 border border-brand-pink/10 focus:border-brand-gold rounded px-4 py-3 text-sm text-brand-cream outline-none transition-colors cursor-pointer"
          />
          {errors.date && <p className="text-xs text-red-400 mt-1 font-semibold">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time" className="block text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
            Preferred Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full bg-brand-dark/50 border border-brand-pink/10 focus:border-brand-gold rounded px-4 py-3 text-sm text-brand-cream outline-none transition-colors cursor-pointer"
          />
          {errors.time && <p className="text-xs text-red-400 mt-1 font-semibold">{errors.time}</p>}
        </div>
      </div>

      {/* Notes / Special Instructions */}
      <div>
        <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-brand-gold mb-2">
          Special Notes or Reference Details
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. I need a hybrid set with wispy lash details, or wig install details"
          className="w-full bg-brand-dark/50 border border-brand-pink/10 focus:border-brand-gold rounded px-4 py-3 text-sm text-brand-cream placeholder-brand-cream/35 outline-none transition-colors resize-none"
        />
      </div>

      {/* Booking Consent Note */}
      <div className="bg-brand-gold/5 border border-brand-gold/10 p-3 rounded text-[11px] text-brand-gold-muted leading-relaxed">
        <strong>Demo Booking Notice:</strong> This appointment draft will open in WhatsApp to chat with the stylist. Final availability and pricing will be confirmed by the owner on WhatsApp.
      </div>

      {/* CTA Button */}
      <button
        type="submit"
        className="w-full py-4 px-6 bg-gradient-to-r from-brand-pink to-brand-gold hover:from-brand-gold hover:to-brand-pink text-brand-black text-xs font-extrabold uppercase tracking-widest transition-all duration-500 rounded shadow-[0_0_15px_rgba(251,207,232,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transform cursor-pointer"
      >
        Confirm via WhatsApp
      </button>
    </form>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div className="text-center py-6 text-sm text-brand-pink">Loading scheduling concierge...</div>}>
      <BookingFormInner />
    </Suspense>
  );
}
