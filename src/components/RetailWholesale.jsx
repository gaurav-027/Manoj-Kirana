import Button from "./Button.jsx";
import WholesaleBoxes from "./svg/WholesaleBoxes.jsx";
import { createWhatsAppLink, messages } from "../data/business.js";

const retailPoints = [
  "Daily-use products",
  "Wide product range",
  "Convenient shopping",
  "Regular household needs",
];

const wholesalePoints = [
  "Wholesale rates",
  "Bulk quantities",
  "Regular stock requirements",
  "Retailers ke liye supply",
];

function PointList({ points }) {
  return (
    <ul className="mt-7 space-y-3">
      {points.map((point) => (
        <li key={point} className="flex items-center gap-3 text-sm font-bold text-ink">
          <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
          {point}
        </li>
      ))}
    </ul>
  );
}

export default function RetailWholesale() {
  return (
    <section id="wholesale" className="py-16 sm:py-24">
      <div className="section-wrap">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange">
            Dono zarurat, ek jagah
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-forest sm:text-5xl">
            Retail bhi. Wholesale bhi.
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-muted">
            Aap ghar ke liye shopping kar rahe ho ya apni dukaan ke liye stock —
            Manoj Kirana dono ke liye ready hai.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[20px] border border-line bg-white/38 p-7 sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-muted">
              Retail
            </p>
            <h3 className="mt-5 text-3xl font-black text-forest">Ghar ke liye</h3>
            <p className="mt-4 text-base font-medium leading-7 text-muted">
              Daily grocery aur household essentials ki shopping, simple aur
              convenient tareeke se.
            </p>
            <PointList points={retailPoints} />
            <Button href="#contact" variant="secondary" className="mt-8">
              Shopping ke liye aayein
            </Button>
          </article>

          <article className="relative overflow-hidden rounded-[20px] border border-forest/20 bg-forest p-7 text-cream shadow-soft sm:p-9">
            <div className="absolute -right-8 -top-8 w-44 opacity-20" aria-hidden="true">
              <WholesaleBoxes />
            </div>
            <div className="relative z-10">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange">
                Wholesale
              </p>
              <h3 className="mt-5 text-3xl font-black">Dukaan ke liye</h3>
              <p className="mt-4 max-w-xl text-base font-medium leading-7 text-cream/78">
                Chhote retailers aur local dukandaaron ke liye competitive
                wholesale rates par grocery aur FMCG supply.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {wholesalePoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-cream/10 bg-cream/7 px-4 py-3 text-sm font-bold"
                  >
                    <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                href={createWhatsAppLink(messages.wholesale)}
                target="_blank"
                className="mt-8 border-orange bg-orange text-forest hover:bg-[#e5a25f]"
              >
                Wholesale Enquiry Karein
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
