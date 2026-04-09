import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Story — Lemon Lime Studio",
  description: "How two gamers became game developers. The Lemon Lime Studio origin story.",
};

export default function StoryPage() {
  return (
    <>
      {/* Hero — big cinematic opening */}
      <section className="relative min-h-[70vh] flex items-end pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-repeat opacity-[0.05]" style={{ backgroundImage: "url('/images/wallpaper.png')", backgroundSize: "400px" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/80 to-surface-light" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-lemon/[0.05] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime/[0.05] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-lime text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in-up">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            It started with two
            <br />
            gamer tags and a
            <br />
            <span className="text-gradient">whole lot of ping.</span>
          </h1>
        </div>
      </section>

      {/* Chapter 1 — full-width narrative block */}
      <section className="py-32 px-6 bg-surface-light">
        <ScrollReveal className="max-w-3xl mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-text-primary">
            We didn&apos;t meet at a conference or a game jam.
            We met in a lobby. Two random players who happened
            to pick <span className="text-lemon font-semibold">Lemon</span> and{" "}
            <span className="text-lime font-semibold">Lime</span> as their tags.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} className="max-w-3xl mx-auto mt-12">
          <p className="text-lg text-text-secondary leading-relaxed">
            What started as random matchmaking turned into late-night sessions,
            voice chats that lasted until sunrise, and eventually something
            neither of us expected. We fell in love over shared respawns and
            terrible callouts.
          </p>
        </ScrollReveal>
      </section>

      {/* Chapter 2 — split layout */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="aspect-[4/3] rounded-2xl bg-surface-card border border-white/5 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <p className="text-6xl mb-4">🎮</p>
                <p className="text-text-muted text-sm italic">Photo coming soon</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="text-lemon text-sm font-medium tracking-widest uppercase mb-4">
              The Spark
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              &ldquo;What if we just...
              <br />
              made our own game?&rdquo;
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Every gamer has said it at least once. For us, it stuck. Between
              rounds, we&apos;d sketch ideas on napkins, argue about mechanics at
              dinner, and dream about the kind of game we wished existed.
              Eventually we stopped talking about it and started building it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Chapter 3 — split layout reversed */}
      <section className="py-32 px-6 bg-surface-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <p className="text-lime text-sm font-medium tracking-widest uppercase mb-4">
              The Leap
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              San Diego or bust.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              We got married, packed everything into a car, and drove to San Diego —
              a city that matches our energy. Sunny, creative, and just the right
              amount of chill. We turned our spare bedroom into a studio and got
              to work for real.
            </p>
            <p className="text-text-secondary leading-relaxed">
              No investors. No office. Just two people, a whiteboard covered in
              sticky notes, and a very supportive cat.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150} className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl bg-surface-card border border-white/5 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <p className="text-6xl mb-4">🌴</p>
                <p className="text-text-muted text-sm italic">Photo coming soon</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Big quote break */}
      <section className="py-32 px-6">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl sm:text-5xl font-black leading-tight">
            &ldquo;You don&apos;t need a hundred
            <br className="hidden sm:block" />
            people to make something
            <br className="hidden sm:block" />
            <span className="text-gradient">meaningful.</span>&rdquo;
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Chapter 4 — where we are now */}
      <section className="py-32 px-6 bg-surface-light">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <p className="text-lemon text-sm font-medium tracking-widest uppercase mb-4">
            Right Now
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-8">
            Heads down. Building.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-6">
            We&apos;re deep into development on our first game. It&apos;s terrifying
            and thrilling in equal measure. Every day we learn something new,
            break something old, and pour a little more of ourselves into
            something we&apos;re genuinely proud of.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            This isn&apos;t just our first game — it&apos;s the start of everything.
            Lemon Lime Studio is the beginning of a journey, not the whole trip.
          </p>
        </ScrollReveal>
      </section>

      {/* Values — horizontal cards, no icons */}
      <section className="py-32 px-6">
        <ScrollReveal className="max-w-6xl mx-auto">
          <p className="text-lime text-sm font-medium tracking-widest uppercase mb-4">
            What drives us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Three things we won&apos;t compromise on.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              {
                num: "01",
                title: "Heart over hype",
                body: "The best games make you feel something. We chase genuine emotion — not trends, not algorithms, not what's safe.",
              },
              {
                num: "02",
                title: "Players first",
                body: "Every decision starts with one question: does this make the game better for the people playing it? If not, it's gone.",
              },
              {
                num: "03",
                title: "Small and mighty",
                body: "We don't see our size as a limitation. Two people who care deeply can outpace teams ten times their size.",
              },
            ].map((v) => (
              <div key={v.num} className="bg-surface-card p-8 sm:p-10">
                <span className="text-lime/40 text-sm font-mono">{v.num}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{v.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-6 bg-surface-light">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Come along for the ride.
          </h2>
          <p className="text-text-secondary mb-10 max-w-lg mx-auto">
            We share behind-the-scenes updates, dev logs, and way too many
            citrus puns on our Discord.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-lemon to-lime text-surface font-bold px-8 py-4 rounded-xl text-lg glow-hover transition-transform hover:scale-105"
            >
              Join the Community
            </a>
            <Link
              href="/team"
              className="border border-white/10 text-text-primary font-medium px-8 py-4 rounded-xl text-lg hover:bg-white/5 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
