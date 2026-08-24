import { business, createWhatsAppLink } from "../data/business.js";

const links = [
  ["Home", "#home"],
  ["Products", "#products"],
  ["Wholesale", "#wholesale"],
  ["Contact", "#contact"],
  ["WhatsApp", createWhatsAppLink()],
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <p className="text-2xl font-black text-forest">{business.name}</p>
            <p className="mt-1 text-sm font-extrabold uppercase tracking-[0.18em] text-muted">
              {business.tagline}
            </p>
            <p className="mt-4 max-w-sm text-base font-medium leading-7 text-muted">
              Ghar ki shopping ho ya dukaan ki supply.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 sm:justify-end">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="focus-ring rounded-lg text-sm font-extrabold text-forest hover:text-leaf"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 border-t border-line pt-6 text-sm font-medium text-muted">
          © 2026 Manoj Kirana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
