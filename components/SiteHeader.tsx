import Link from "next/link";

export default function SiteHeader({ showBack = false }: { showBack?: boolean }) {
  return (
    <header className="fixed top-0 w-full bg-black/70 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold tracking-wide hover:opacity-70 transition">
          AROTECH
        </Link>
        {showBack ? (
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/40 border border-white/10 rounded-full px-4 py-1.5 hover:text-white hover:border-white/30 transition duration-200"
          >
            <span className="text-xs">←</span>
            홈으로
          </Link>
        ) : (
          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <Link href="/#games" className="hover:text-white transition">Games</Link>
            <Link href="/#vision" className="hover:text-white transition">Vision</Link>
            <Link href="/#careers" className="hover:text-white transition">Careers</Link>
            <Link href="/#contact" className="hover:text-white transition">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
