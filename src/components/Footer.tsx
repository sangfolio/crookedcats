import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">
              <span className="text-lemon">Lemon</span>
              <span className="text-lime">Lime</span>
              <span className="text-text-secondary text-sm ml-2">Studio</span>
            </h3>
            <p className="text-text-muted text-sm">
              An indie game studio based in San Diego, CA.
              <br />
              Crafting games with heart and a splash of citrus.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              <Link href="/team" className="text-text-muted text-sm hover:text-lime transition-colors">Team</Link>
              <Link href="/story" className="text-text-muted text-sm hover:text-lime transition-colors">Story</Link>
              <Link href="/press-kit" className="text-text-muted text-sm hover:text-lime transition-colors">Press Kit</Link>
              <Link href="/contact" className="text-text-muted text-sm hover:text-lime transition-colors">Contact</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-[#5865F2] transition-colors">Discord</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-lime transition-colors">X / Twitter</a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-red-500 transition-colors">YouTube</a>
              <a href="mailto:hello@lemonlimestudio.com" className="text-text-muted text-sm hover:text-lemon transition-colors">hello@lemonlimestudio.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Lemon Lime Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
