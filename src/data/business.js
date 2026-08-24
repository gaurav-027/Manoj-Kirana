export const business = {
  name: "Manoj Kirana",
  tagline: "Retail • Wholesale",
  phone: "+91 78702 88379",
  whatsapp: "+91 78702 88379",
  address: "Near Railway Station Road, Naugachhia, Bhagalpur, Bihar 853204",
  mapsUrl: "https://www.google.com/maps/place/manoj+kirana+store/@25.3857026,87.0939323,53m/data=!3m1!1e3!4m6!3m5!1s0x39f03a5027359d5b:0x557f8a3445e33073!8m2!3d25.3856704!4d87.0939244!16s%2Fg%2F11fzf7h85r?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
  openingHours: "07:00 AM - 09:00 PM",
};

const isPlaceholder = (value) => !value || value.includes("[") || value.includes("]");
const cleanPhone = (value) => value.replace(/[^\d]/g, "");

export const messages = {
  general:
    "Namaste Manoj Kirana, mujhe products ke baare mein jaankari chahiye.",
  wholesale:
    "Namaste Manoj Kirana, mujhe wholesale mein saman chahiye. Kripya rates aur availability bata dijiye.",
};

export function createWhatsAppLink(message = messages.general) {
  if (isPlaceholder(business.whatsapp)) return "#contact";
  return `https://wa.me/${cleanPhone(business.whatsapp)}?text=${encodeURIComponent(message)}`;
}

export function getPhoneHref() {
  if (isPlaceholder(business.phone)) return "#contact";
  return `tel:${cleanPhone(business.phone)}`;
}

export function getMapsHref() {
  return business.mapsUrl || "#contact";
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  name: business.name,
  description:
    "Daily-use grocery aur FMCG products ke liye retail aur chhote dukandaaron ke liye wholesale supply.",
  telephone: isPlaceholder(business.phone) ? undefined : business.phone,
  address: isPlaceholder(business.address) ? undefined : business.address,
  openingHours: isPlaceholder(business.openingHours) ? undefined : business.openingHours,
};
