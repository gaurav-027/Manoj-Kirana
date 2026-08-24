import Button from "./Button.jsx";
import KiranaIllustration from "./svg/KiranaIllustration.jsx";
import { createWhatsAppLink, getMapsHref } from "../data/business.js";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 lg:min-h-[760px] lg:pb-28"
    >
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <p className="reveal inline-flex rounded-full border border-forest/15 bg-white/45 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-leaf">
            Retail + Wholesale
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 text-5xl font-black leading-[1.02] tracking-normal text-forest sm:text-6xl lg:text-7xl">
            Ghar ki zarurat se lekar dukaan ki supply tak.
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-lg font-medium leading-8 text-muted sm:text-xl">
            Manoj Kirana par daily-use grocery aur FMCG products retail ke
            saath-saath chhote dukandaaron ke liye wholesale rates par bhi
            available hain.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={createWhatsAppLink()} target="_blank">
              WhatsApp Karein
            </Button>
            <Button href={getMapsHref()} variant="secondary" target="_blank">
              Location Dekhein
            </Button>
          </div>
          <div className="reveal reveal-delay-3 mt-9 grid max-w-xl grid-cols-2 gap-4 border-t border-line pt-7 sm:grid-cols-3">
            {["Ghar ke liye", "Dukaan ke liye"].map((item) => (
              <div key={item}>
                <span className="block text-sm font-extrabold text-forest">{item}</span>
                <span className="mt-1 block text-sm text-muted">Seedhi enquiry</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[560px]">
          <div className="absolute -left-5 top-10 h-28 w-28 rounded-[28px] border border-orange/30 bg-orange/10" aria-hidden="true" />
          <div className="absolute bottom-8 right-0 h-36 w-36 rounded-[32px] border border-forest/10 bg-white/35" aria-hidden="true" />
          <KiranaIllustration className="relative z-10 animate-float" />
        </div>
      </div>
    </section>
  );
}
