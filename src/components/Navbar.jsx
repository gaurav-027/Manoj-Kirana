import { useEffect, useState } from "react";
import { business, createWhatsAppLink } from "../data/business.js";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function MenuIcon({ open }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden="true">
      <span
        className={`absolute left-0 top-1 h-0.5 w-6 rounded-full bg-forest transition ${open ? "translate-y-2 rotate-45" : ""}`}
      />
      <span
        className={`absolute left-0 top-2.5 h-0.5 w-6 rounded-full bg-forest transition ${open ? "opacity-0" : ""}`}
      />
      <span
        className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-forest transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
      />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition duration-300 ${
        scrolled || open
          ? "border-b border-line bg-cream/88 shadow-[0_10px_35px_rgba(18,55,42,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="section-wrap flex h-[74px] items-center justify-between" aria-label="Main">
        <a href="#home" className="focus-ring group -ml-2 rounded-xl px-2 py-1">
          <span className="block text-lg font-extrabold tracking-normal text-forest">
            {business.name}
          </span>
          <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {business.tagline}
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-6 text-sm font-semibold text-ink">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring group rounded-lg px-1 py-2"
              >
                <span className="bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_2px]">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
          <a
            className="focus-ring inline-flex items-center rounded-xl bg-forest px-4 py-2.5 text-sm font-bold text-cream transition hover:-translate-y-0.5 hover:bg-leaf"
            href={createWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Karein
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-cream/70 lg:hidden"
          aria-label={open ? "Menu band karein" : "Menu kholein"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      <div
        className={`lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} transition`}
      >
        <div className="section-wrap pb-5">
          <div className="border-t border-line pt-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring block rounded-xl px-2 py-3 text-lg font-bold text-forest"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="focus-ring mt-3 inline-flex w-full items-center justify-center rounded-xl bg-forest px-5 py-3 text-base font-bold text-cream"
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              WhatsApp Karein
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
