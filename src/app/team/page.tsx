import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Team — Lemon Lime Studio",
  description: "Meet the husband and wife team behind Lemon Lime Studio.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-repeat opacity-[0.05]" style={{ backgroundImage: "url('/images/wallpaper.png')", backgroundSize: "400px" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 to-surface" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-black mb-4 animate-fade-in-up">
            Meet the <span className="text-gradient">Team</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            A two-person studio powered by love, caffeine, and an unhealthy
            amount of citrus puns.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lemon */}
          <ScrollReveal>
            <div className="bg-surface-card border border-white/5 rounded-2xl overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-lemon/10 via-surface-card to-lemon/5 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl block mb-4">🍋</span>
                  <p className="text-text-muted text-sm italic">Photo coming soon</p>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-lemon mb-1">Lemon</h2>
                <p className="text-lime text-sm font-medium mb-4">Co-Founder</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  The creative half of the citrus duo. Passionate about game design,
                  pixel art, and building worlds that players want to get lost in.
                  Has been gaming since before they could read the tutorials.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Lime */}
          <ScrollReveal delay={150}>
            <div className="bg-surface-card border border-white/5 rounded-2xl overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-lime/10 via-surface-card to-lime/5 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl block mb-4">🍈</span>
                  <p className="text-text-muted text-sm italic">Photo coming soon</p>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-lime mb-1">Lime</h2>
                <p className="text-lemon text-sm font-medium mb-4">Co-Founder</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  The technical backbone of the operation. Turns ideas into code
                  and coffee into features. Believes the best games are the ones
                  that make you feel something.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Studio Culture */}
      <section className="py-24 px-6 bg-surface-light">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Built with <span className="text-lemon">Love</span> in <span className="text-lime">San Diego</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Our studio is wherever we are — sometimes a home office, sometimes a
            coffee shop, always with a view of the San Diego sun. We believe
            small teams can make big things when they care deeply about what
            they&apos;re creating. No crunch, no compromise on quality, just two
            people making the game they&apos;ve always wanted to play.
          </p>
        </ScrollReveal>

        {/* Studio photos placeholder */}
        <ScrollReveal delay={200} className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Studio vibes",
              "Game night",
              "San Diego sunset",
              "Whiteboard planning",
              "Coffee & code",
              "Playtesting",
            ].map((label, i) => (
              <div
                key={label}
                className="aspect-video bg-surface-card border border-white/5 rounded-xl flex items-center justify-center"
              >
                <p className="text-text-muted text-xs">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-muted text-sm mt-4 italic">
            Studio photos coming soon
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
