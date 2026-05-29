"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    const handler = (e: PointerEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const el = spotlightRef.current;
        if (!el) return;
        el.style.setProperty("--cx", `${e.clientX}px`);
        el.style.setProperty("--cy", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", handler);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handler);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Cursor-following spotlight (heist flashlight) */}
      <div
        ref={spotlightRef}
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={
          {
            "--cx": "50vw",
            "--cy": "40vh",
            background:
              "radial-gradient(620px circle at var(--cx) var(--cy), rgba(220,38,38,0.16) 0%, rgba(220,38,38,0.05) 38%, transparent 72%)",
          } as CSSProperties
        }
      />

      {/* Subtle film grain — noir vibe */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* Scattered paw prints — the crew left some traces */}
      <PawPrint
        className="absolute top-16 left-10 sm:left-16 w-7 h-7 text-cream/[0.07] paw-drift"
        style={{ "--rot": "-14deg" } as CSSProperties}
      />
      <PawPrint
        className="absolute bottom-28 right-12 sm:right-20 w-9 h-9 text-heist/[0.10] paw-drift"
        style={{ "--rot": "16deg", animationDelay: "2s" } as CSSProperties}
      />
      <PawPrint
        className="absolute top-1/3 right-14 w-5 h-5 text-cream/[0.05] paw-drift hidden sm:block"
        style={{ "--rot": "42deg", animationDelay: "1s" } as CSSProperties}
      />
      <PawPrint
        className="absolute bottom-1/3 left-16 w-6 h-6 text-heist/[0.07] paw-drift hidden sm:block"
        style={{ "--rot": "-42deg", animationDelay: "3s" } as CSSProperties}
      />

      <div className="relative w-full max-w-xl text-center">
        {/* Wordmark — slightly off-kilter, hence "crooked" */}
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] [text-shadow:_0_4px_30px_rgba(0,0,0,0.6)]">
          <span className="text-cream inline-block animate-wordmark-1">Crooked</span>{" "}
          <span className="text-heist inline-block animate-wordmark-2">Cats</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-text-secondary text-lg sm:text-xl mt-7 animate-fade-in-stagger"
          style={{ animationDelay: "0.7s" }}
        >
          Plotting something good.
        </p>

        {/* About */}
        <p
          className="text-text-muted text-sm sm:text-base mt-3 max-w-md mx-auto leading-relaxed animate-fade-in-stagger"
          style={{ animationDelay: "0.85s" }}
        >
          An indie game studio. Husband, wife, and two cats with very bad
          intentions. Our first game is in the works.
        </p>

        {/* Newsletter form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 animate-fade-in-stagger"
          style={{ animationDelay: "1.0s" }}
          noValidate
        >
          {status === "success" ? (
            <div className="bg-surface-card border border-heist/40 rounded-xl px-6 py-5 text-center shadow-[0_0_40px_rgba(220,38,38,0.12)]">
              <p className="text-cream font-semibold text-lg">You&apos;re in.</p>
              <p className="text-text-secondary text-sm mt-1">
                Welcome to the crew. We&apos;ll be in touch when we&apos;ve cased the joint.
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-stretch bg-surface-card border border-white/10 rounded-xl p-1.5 focus-within:border-heist/50 focus-within:shadow-[0_0_30px_rgba(220,38,38,0.18)] transition-all duration-300">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 bg-transparent px-4 py-3 text-text-primary placeholder:text-text-muted outline-none min-w-0"
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-heist text-cream font-semibold px-6 py-3 rounded-lg hover:bg-heist-light hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === "loading" ? "Sneaking you in…" : "I'm in"}
              </button>
            </div>
          )}
          {status === "error" && (
            <p className="text-heist-light text-sm mt-3">{errorMessage}</p>
          )}
          <p className="text-text-muted text-xs mt-3 tracking-wide">
            No spam. Just dispatches from the heist.
          </p>
        </form>

        {/* Discord */}
        <a
          href="https://discord.gg/JKrTzKNtpK"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 mt-10 text-text-secondary text-sm hover:text-cream transition-colors animate-fade-in-stagger"
          style={{ animationDelay: "1.15s" }}
        >
          or hang out in the safehouse
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}

function PawPrint({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <ellipse cx="12" cy="15.5" rx="4.5" ry="3.6" />
      <ellipse cx="5.5" cy="10" rx="1.8" ry="2.2" />
      <ellipse cx="18.5" cy="10" rx="1.8" ry="2.2" />
      <ellipse cx="9" cy="6" rx="1.4" ry="1.8" />
      <ellipse cx="15" cy="6" rx="1.4" ry="1.8" />
    </svg>
  );
}
