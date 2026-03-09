import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 w-full bg-black/70 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold tracking-wide hover:opacity-70 transition">
          AROTECH
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <Link href="/#games" className="hover:text-white transition">Games</Link>
          <Link href="/#vision" className="hover:text-white transition">Vision</Link>
          <Link href="/#careers" className="hover:text-white transition">Careers</Link>
          <Link href="/#contact" className="hover:text-white transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
