"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Book", path: "/book" },
    { name: "Owner Review", path: "/owner-preview" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel py-4 shadow-lg border-b border-brand-pink/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-widest text-brand-cream group-hover:text-brand-pink transition-colors">
              SHAYTEE
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
              Beauty Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium tracking-wider uppercase transition-colors relative py-1 ${
                    isActive
                      ? "text-brand-pink"
                      : "text-brand-cream/80 hover:text-brand-cream"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:block">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-brand-gold text-xs font-bold uppercase tracking-widest text-brand-cream hover:bg-brand-gold hover:text-brand-black transition-all duration-300 rounded shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded text-brand-cream hover:text-brand-pink focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-xs bg-brand-black border-l border-brand-pink/10 p-6 shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest text-brand-cream">
              SHAYTEE
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-brand-gold uppercase">
              Beauty Studio
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-brand-cream hover:text-brand-pink"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold tracking-widest uppercase transition-colors py-2 block ${
                  isActive ? "text-brand-pink border-l-2 border-brand-gold pl-3" : "text-brand-cream/80 hover:text-brand-cream pl-3"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6">
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="w-full text-center inline-block px-5 py-3 border border-brand-gold text-xs font-bold uppercase tracking-widest text-brand-cream hover:bg-brand-gold hover:text-brand-black transition-all duration-300 rounded"
            >
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
