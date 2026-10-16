// Single source of truth for business details (NAP) used across pages and schema.
export const SITE = {
  name: "Best Spa Rawalpindi",
  url: "https://bestsparawalpindi.com",
  phone: "+923065656413",
  phoneDisplay: "0306 5656413",
  phoneIntl: "+92 306 5656413",
  whatsapp: "https://wa.me/923065656413",
  email: "info@bestsparawalpindi.com",
  street: "Bahria Town Phase 7, Near Nando's & Wallayat Complex",
  locality: "Rawalpindi",
  region: "Punjab",
  postalCode: "46000",
  country: "PK",
  lat: 33.54958,
  lng: 73.12232,
  hoursText: "Open Daily: 1:00 PM – 4:00 AM",
} as const;

export const SITE_LAST_UPDATED = "2026-10-01";

// Google Ads conversion tracking (account "Best Spa in Rawalpindi").
// Conversion actions were created in Google Ads > Goals > Conversions (category: Contact, count: One).
export const GOOGLE_ADS = {
  id: "AW-18451526011",
  conversions: {
    whatsappClick: "AW-18451526011/z5nWCPjcn58dEPvir95E", // "Website - WhatsApp click"
    phoneClick: "AW-18451526011/aTvfCPvcn58dEPvir95E", // "Website - Phone call click"
  },
} as const;
