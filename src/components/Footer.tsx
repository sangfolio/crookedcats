export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        <p className="text-text-muted">
          &copy; {new Date().getFullYear()} Crooked Cats
        </p>
        <a
          href="https://x.com/han_topia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow @han_topia on X"
          className="text-text-muted hover:text-cream transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
