"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/story", label: "Story" },
  { href: "/press-kit", label: "Press Kit" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-lemon">Lemon</span>
            <span className="text-lime">Lime</span>
          </span>
          <span className="text-text-secondary text-sm hidden sm:inline">Studio</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-lime ${
                pathname === link.href ? "text-lime" : "text-text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865F2] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#4752C4] transition-colors"
          >
            Discord
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-secondary hover:text-text-primary"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-light border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-lime" : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] text-white text-sm font-medium px-4 py-2 rounded-lg text-center"
            >
              Discord
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
