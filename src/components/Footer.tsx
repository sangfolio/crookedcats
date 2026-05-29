export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-start text-xs">
        <p className="text-text-muted">
          &copy; {new Date().getFullYear()} Crooked Cats
        </p>
      </div>
    </footer>
  );
}
