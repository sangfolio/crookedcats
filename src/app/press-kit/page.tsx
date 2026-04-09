import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Press Kit — Lemon Lime Studio",
  description: "Press kit and media assets for Lemon Lime Studio. Download logos, screenshots, and studio information.",
};

export default function PressKitPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-black mb-4 animate-fade-in-up">
            <span className="text-gradient">Press Kit</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Everything you need to write about Lemon Lime Studio.
          </p>
        </div>
      </section>

      {/* Fact Sheet */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-surface-card border border-white/5 rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold mb-8 text-gradient inline-block">Studio Fact Sheet</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Studio Name", value: "Lemon Lime Studio" },
                  { label: "Founded", value: "2024" },
                  { label: "Location", value: "San Diego, California" },
                  { label: "Team Size", value: "2 (Husband & Wife)" },
                  { label: "Website", value: "lemonlimestudio.com" },
                  { label: "Contact", value: "press@lemonlimestudio.com" },
                ].map((fact) => (
                  <div key={fact.label}>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">{fact.label}</p>
                    <p className="text-text-primary font-medium">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Studio Description */}
      <section className="pb-24 px-6">
        <ScrollReveal className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About the Studio</h2>
          <div className="text-text-secondary leading-relaxed space-y-4">
            <p>
              Lemon Lime Studio is an independent game studio founded by a husband and
              wife team in San Diego, California. The studio name comes from their
              original gamer tags — Lemon and Lime — which they&apos;ve used since the day
              they met online.
            </p>
            <p>
              The studio is currently developing its debut title. Driven by a shared
              love of games and a belief that small teams can create meaningful
              experiences, Lemon Lime Studio aims to craft games with genuine heart
              and memorable worlds.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Brand Assets */}
      <section className="py-24 px-6 bg-surface-light">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Brand Assets</h2>
            <p className="text-text-secondary">Logos, icons, and brand guidelines for media use.</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Logo Dark */}
              <div className="bg-surface border border-white/5 rounded-2xl p-8 text-center">
                <div className="aspect-video flex items-center justify-center mb-4 bg-surface-card rounded-xl">
                  <span className="text-3xl font-black">
                    <span className="text-lemon">Lemon</span>
                    <span className="text-lime">Lime</span>
                  </span>
                </div>
                <p className="text-text-muted text-sm mb-3">Logo — Dark Background</p>
                <p className="text-text-muted text-xs italic">Assets coming soon</p>
              </div>

              {/* Logo Light */}
              <div className="bg-surface border border-white/5 rounded-2xl p-8 text-center">
                <div className="aspect-video flex items-center justify-center mb-4 bg-white rounded-xl">
                  <span className="text-3xl font-black">
                    <span className="text-[#b8a000]">Lemon</span>
                    <span className="text-[#4d7c0f]">Lime</span>
                  </span>
                </div>
                <p className="text-text-muted text-sm mb-3">Logo — Light Background</p>
                <p className="text-text-muted text-xs italic">Assets coming soon</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Brand Colors */}
          <ScrollReveal delay={300} className="mt-12">
            <h3 className="text-lg font-bold mb-4 text-center">Brand Colors</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Lemon", hex: "#f5e642", textDark: true },
                { name: "Lemon Dark", hex: "#c4b820", textDark: true },
                { name: "Lime", hex: "#a3e635", textDark: true },
                { name: "Lime Dark", hex: "#65a30d", textDark: false },
                { name: "Surface", hex: "#0a0a0a", textDark: false },
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="w-20 h-20 rounded-xl border border-white/10 mb-2"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="text-text-muted text-xs">{color.name}</p>
                  <p className="text-text-muted text-xs font-mono">{color.hex}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Game Press Kit placeholder */}
      <section className="py-24 px-6">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Game Press Kit</h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-6">
            Screenshots, trailers, and game-specific press materials will be
            available here when we announce our first title.
          </p>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-lemon to-lime text-surface font-bold px-6 py-3 rounded-xl glow-hover transition-transform hover:scale-105"
          >
            Follow on Discord for Announcements
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
