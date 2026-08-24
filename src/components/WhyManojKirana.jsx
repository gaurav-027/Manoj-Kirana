const reasons = [
  ["Retail + Wholesale", "Ghar aur dukaan — dono ke liye."],
  ["Wide Range", "Daily-use grocery aur FMCG products ki variety."],
  ["Wholesale Rates", "Chhote dukandaaron ke liye competitive rates."],
  ["Local & Trusted", "Apne area ke customers aur dukandaaron ke liye."],
  ["Easy Enquiry", "WhatsApp ya call par seedha baat karein."],
];

export default function WhyManojKirana() {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-wrap">
        <div className="grid gap-12 border-y border-line py-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange">
              Seedhi baat
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-forest sm:text-5xl">
              Kyun Manoj Kirana?
            </h2>
          </div>

          <div className="divide-y divide-line">
            {reasons.map(([title, text], index) => (
              <div key={title} className="grid gap-3 py-5 sm:grid-cols-[88px_1fr] sm:items-start">
                <span className="text-sm font-black text-orange">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-black text-forest">{title}</h3>
                  <p className="mt-2 text-base font-medium leading-7 text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
