const categories = [
  ["Chawal & Dal", "Roz ke kitchen essentials."],
  ["Aata & Flour", "Ghar ki roti ke liye."],
  ["Tel & Ghee", "Cooking ke daily-use essentials."],
  ["Namak & Cheeni", "Har kitchen ki basic zarurat."],
  ["Masale", "Roz ke khane ka swaad."],
  ["Biscuits & Snacks", "Chai ke saath aur bachchon ke liye."],

  ["Cigarettes", "Regular customer demand ke products."],
  ["Paan Masala", "Local demand ke hisaab se."],
  ["Aur bhi bahut kuch", "Jo roz chahiye, woh yahan mil sakta hai."],
];

function CategoryIcon({ index }) {
  const paths = [
    "M9 5h6l2 14H7L9 5Z M10 9h4",
    "M8 7h8l1 12H7L8 7Z M9 11h6",
    "M11 4h4v4l3 4v7H8v-7l3-4V4Z",
    "M7 8h10v11H7V8Z M9 5h6v3H9V5Z",
  ];

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-forest" fill="none" aria-hidden="true">
      <path d={paths[index % paths.length]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17.5" cy="6.5" r="1.7" fill="#D8893D" opacity="0.9" />
    </svg>
  );
}

export default function ProductCategories() {
  return (
    <section id="products" className="py-16 sm:py-24">
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-6 border-t border-line pt-12 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange">
              Kya milega?
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-forest sm:text-5xl">
              Rozmarra ki zarurat ka samaan, ek hi jagah.
            </h2>
          </div>
          <p className="max-w-sm text-base font-medium leading-7 text-muted">
            Product list simple rakhi hai, kyunki yeh shopping site nahi — seedhi
            local enquiry ke liye bani hai.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([name, description], index) => (
            <article
              key={name}
              className="group min-h-[138px] bg-cream p-6 transition duration-300 hover:bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white transition group-hover:-translate-y-1">
                  <CategoryIcon index={index} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-forest">{name}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-muted">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
