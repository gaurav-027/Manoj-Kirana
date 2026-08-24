const steps = [
  ["01", "Requirement Batao", "Jo saman chahiye uski list bhejo."],
  ["02", "Rate Pucho", "Wholesale rate aur availability confirm karo."],
  ["03", "Samaan Lo", "Apni dukaan ke hisaab se stock lo."],
];

export default function WholesaleProcess() {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-wrap">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange">
              Dukaandaaron ke liye
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-forest sm:text-5xl">
              Aapki dukaan ka stock, hamari zimmedari.
            </h2>
            <p className="mt-6 text-lg font-medium leading-8 text-muted">
              Agar aap kirana, general store ya chhoti retail shop chalate hain,
              to regular stock ke liye Manoj Kirana se wholesale rates par saman
              le sakte hain.
            </p>
          </div>

          <div className="relative">
            <svg
              className="absolute left-[28px] top-10 hidden h-[calc(100%-80px)] w-2 sm:block lg:left-1/2 lg:top-[54px] lg:h-2 lg:w-[calc(100%-120px)] lg:-translate-x-1/2"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 5C28 1 58 9 98 5"
                stroke="#D8893D"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="120"
                strokeDashoffset="120"
                className="animate-dash"
              />
            </svg>
            <div className="grid gap-4 lg:grid-cols-3">
              {steps.map(([number, title, text]) => (
                <article
                  key={number}
                  className="relative rounded-[18px] border border-line bg-white/42 p-6"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-lg font-black text-cream">
                    {number}
                  </span>
                  <h3 className="mt-6 text-xl font-black text-forest">{title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
