import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — Lemon Lime Studio",
  description: "Get in touch with Lemon Lime Studio. Business inquiries, press, and general contact.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-black mb-4 animate-fade-in-up">
            <span className="text-gradient">Contact Us</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Want to chat? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal>
            <div className="bg-surface-card border border-white/5 rounded-2xl p-8 text-center h-full hover:border-lemon/20 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-lemon/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-lemon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">General</h3>
              <a href="mailto:hello@lemonlimestudio.com" className="text-lemon text-sm hover:underline underline-offset-2">
                hello@lemonlimestudio.com
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-surface-card border border-white/5 rounded-2xl p-8 text-center h-full hover:border-lime/20 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-lime/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Press</h3>
              <a href="mailto:press@lemonlimestudio.com" className="text-lime text-sm hover:underline underline-offset-2">
                press@lemonlimestudio.com
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-surface-card border border-white/5 rounded-2xl p-8 text-center h-full hover:border-[#5865F2]/30 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#5865F2]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Community</h3>
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5865F2] text-sm hover:underline underline-offset-2"
              >
                Join our Discord
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-6 bg-surface-light">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Based in San Diego</h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8">
            We work from sunny San Diego, California. While we don&apos;t have a
            public office, we&apos;re always reachable online.
          </p>
          <div className="bg-surface-card border border-white/5 rounded-2xl overflow-hidden">
            <div className="aspect-[21/9] bg-gradient-to-br from-surface-card to-surface flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl mb-2">🌴</p>
                <p className="text-text-secondary text-sm">San Diego, California</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Social Links */}
      <section className="py-24 px-6">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Follow Us</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Discord", href: "https://discord.gg/", color: "bg-[#5865F2] hover:bg-[#4752C4]" },
              { name: "X / Twitter", href: "https://twitter.com/", color: "bg-white/5 hover:bg-white/10" },
              { name: "YouTube", href: "https://youtube.com/", color: "bg-white/5 hover:bg-white/10" },
              { name: "Instagram", href: "https://instagram.com/", color: "bg-white/5 hover:bg-white/10" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-text-primary font-medium px-6 py-3 rounded-xl transition-colors border border-white/5`}
              >
                {social.name}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
