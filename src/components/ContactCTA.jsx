import Button from "./Button.jsx";
import GroceryBag from "./svg/GroceryBag.jsx";
import {
  business,
  createWhatsAppLink,
  getMapsHref,
  getPhoneHref,
  messages,
} from "../data/business.js";

const contactItems = [
  ["Address", business.address],
  ["Phone", business.phone],
  ["WhatsApp", business.whatsapp],
  ["Opening Hours", business.openingHours],
];

export default function ContactCTA() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="section-wrap">
        <div className="overflow-hidden rounded-[24px] bg-forest text-cream">
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange">
                Samaan chahiye?
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Samaan chahiye? Baat karte hain.
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-cream/78">
                Retail shopping ke liye store par aayein ya wholesale requirement
                ke liye WhatsApp par enquiry bhejein.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={createWhatsAppLink(messages.general)}
                  target="_blank"
varient="secondary"
                  className="border-orange bg-orange text-forest hover:bg-[#e5a25f]"
                >
                  WhatsApp Karein
                </Button>
                <Button
                  href={getPhoneHref()}
                  className="border-orange bg-orange text-forest hover:bg-[#e5a25f]"
                >
                  Call Karein
                </Button>
                <Button
                  href={getMapsHref()}
                  target="_blank"
                  className="border-orange bg-orange text-forest hover:bg-[#e5a25f]"
                >
                  Google Maps par dekhein
                </Button>
              </div>
            </div>
            <div className="relative min-h-[280px]">
              <div className="absolute inset-0 opacity-95">
                <GroceryBag />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map(([label, value]) => (
            <div key={label} className="bg-cream p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange">{label}</p>
              <p className="mt-3 break-words text-base font-extrabold leading-7 text-forest">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
