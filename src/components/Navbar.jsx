import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Company", path: "/company" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Architecture", path: "/architecture" },
  { label: "Systems", path: "/systems" },
  { label: "Shop", path: "/shop" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-black border-b border-zinc-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-0 select-none flex-shrink-0">
          <span className="text-red-600 font-black italic text-xl tracking-tight">Max</span>
          <span className="text-white font-black italic text-xl tracking-tight">Ri</span>
          <span className="text-red-600 font-black italic text-xl tracking-tight">T</span>
          <span className="text-white font-black italic text-xl tracking-tight">ech</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-white border-b border-red-600 pb-0.5"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:block bg-red-600 text-white text-xs tracking-widest uppercase font-black px-5 py-2.5 hover:bg-red-700 transition-colors duration-200 flex-shrink-0"
        >
          Start a Mission
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black border-t border-zinc-900 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col px-6 py-4 gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                  isActive(link.path) ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-red-600 text-white text-xs tracking-widest uppercase font-black px-5 py-3 hover:bg-red-700 transition-colors duration-200 w-full text-center mt-2"
            >
              Start a Mission
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}