import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Citrus pattern wallpaper */}
        <div className="absolute inset-0 bg-repeat opacity-[0.07]" style={{ backgroundImage: "url('/images/wallpaper.png')", backgroundSize: "400px" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/80 to-surface" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lemon/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime/8 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-in-up">
            <span className="text-lemon">Lemon</span>
            <span className="text-lime">Lime</span>
            <br />
            <span className="text-text-primary">Studio</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Crafting games with heart and a splash of citrus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/story"
              className="bg-gradient-to-r from-lemon to-lime text-surface font-bold px-8 py-4 rounded-xl text-lg glow-hover transition-transform hover:scale-105"
            >
              Our Story
            </Link>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 text-text-primary font-medium px-8 py-4 rounded-xl text-lg hover:bg-white/5 transition-colors"
            >
              Join Our Discord
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-24 px-6">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">Two Players. One Dream.</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We&apos;re a husband and wife indie game studio based in sunny San Diego.
            What started as shared gamer tags became a shared dream — to build
            the kinds of games we fell in love with.
          </p>
        </ScrollReveal>
      </section>

      {/* Game Showcase Section */}
      <section className="py-24 px-6 bg-surface-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-sm font-semibold text-lime uppercase tracking-widest mb-3">Now In Development</h2>
            <h3 className="text-3xl sm:text-5xl font-bold">Our First Game</h3>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-surface-card">
              {/* GAME ART: Replace with your game cover/screenshot */}
              {/* <img src="/images/game-cover.jpg" alt="Our first game" className="absolute inset-0 w-full h-full object-cover" /> */}
              <div className="aspect-video bg-gradient-to-br from-surface-card via-surface-light to-surface-card flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-lemon/20 to-lime/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-text-primary mb-2">Something Special is Brewing</p>
                  <p className="text-text-secondary max-w-md mx-auto">
                    We&apos;re hard at work on our debut title. Follow us on Discord to
                    be the first to see what we&apos;re cooking up.
                  </p>
                  <a
                    href="https://discord.gg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-[#5865F2] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#4752C4] transition-colors"
                  >
                    Get Notified on Discord
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Meet The Team Teaser */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-sm font-semibold text-lemon uppercase tracking-widest mb-3">The Team</h2>
            <h3 className="text-3xl sm:text-5xl font-bold mb-4">Two Halves of a Whole Lime</h3>
            <p className="text-text-secondary max-w-xl mx-auto">
              We met online, bonded over games, and now we&apos;re making them together
              from our studio in San Diego.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-surface-card border border-white/5 rounded-2xl p-8 text-center hover:border-lemon/20 transition-colors group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-lemon/20 to-lemon/5 flex items-center justify-center group-hover:from-lemon/30 transition-colors">
                  <span className="text-4xl">🍋</span>
                </div>
                <h4 className="text-xl font-bold text-lemon mb-1">Lemon</h4>
                <p className="text-text-muted text-sm">Co-Founder</p>
              </div>

              <div className="bg-surface-card border border-white/5 rounded-2xl p-8 text-center hover:border-lime/20 transition-colors group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-lime/20 to-lime/5 flex items-center justify-center group-hover:from-lime/30 transition-colors">
                  <span className="text-4xl">🍈</span>
                </div>
                <h4 className="text-xl font-bold text-lime mb-1">Lime</h4>
                <p className="text-text-muted text-sm">Co-Founder</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} className="text-center mt-10">
            <Link
              href="/team"
              className="text-lime font-medium hover:underline underline-offset-4"
            >
              Learn more about the team &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-surface-light overflow-hidden">
        <div className="absolute inset-0 bg-repeat opacity-[0.04]" style={{ backgroundImage: "url('/images/wallpaper.png')", backgroundSize: "300px" }} />
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Join our Discord community to follow development, share feedback,
            and be the first to play.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#4752C4] transition-colors"
            >
              Join Discord
            </a>
            <Link
              href="/contact"
              className="border border-white/10 text-text-primary font-medium px-8 py-4 rounded-xl text-lg hover:bg-white/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
