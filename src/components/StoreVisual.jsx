import GroceryBasket from "./svg/GroceryBasket.jsx";

export default function StoreVisual() {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-wrap">
        <div className="grid gap-10 rounded-[22px] border border-line bg-white/35 p-6 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange">
              Store ka feel
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-forest sm:text-5xl">
              Local dukaan, organized tareeke se.
            </h2>
            {/* <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-muted">
              Real shop photos add hone ke baad yahan store, shelves ya product
              range dikhayi ja sakti hai. Abhi ke liye website honest custom SVG
              visual ke saath complete rakhi gayi hai.
            </p> */}
          </div>
          <div className="mx-auto w-full max-w-md">
            <GroceryBasket />
          </div>
        </div>
      </div>
    </section>
  );
}
