import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

// ---------------------------------------------------------------------------
// Shared SEO helpers.
// Titles: the layout template appends " | Best Spa Rawalpindi" (24 chars), so
// page titles are kept <= 36 chars => full <title> stays under 60 chars.
// Descriptions are kept <= 155 chars.
// ---------------------------------------------------------------------------

export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Best Spa Rawalpindi – massage center in Bahria Town Phase 7",
};

const BRAND_SUFFIX = ` | ${SITE.name}`;

function resolveTitle(title: Metadata["title"], path: string): string {
  if (!title) return SITE.name;
  if (typeof title === "string") return path === "/" ? title : `${title}${BRAND_SUFFIX}`;
  if ("absolute" in title && title.absolute) return title.absolute;
  if ("default" in title && title.default) return title.default;
  return SITE.name;
}

/**
 * Completes a page's metadata with a canonical-matching Open Graph block
 * (og:url = canonical, og:image, og:type, og:site_name, og:locale) and
 * Twitter card. Fixes "Open Graph tags incomplete" and
 * "Open Graph URL not matching canonical".
 */
export function withSeo(meta: Metadata, opts: { type?: "website" | "article"; publishedTime?: string } = {}): Metadata {
  const canonical = (meta.alternates?.canonical as string | undefined) ?? "/";
  const path = canonical.startsWith("http") ? new URL(canonical).pathname : canonical;
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  const fullTitle = resolveTitle(meta.title, path);
  const description = typeof meta.description === "string" ? meta.description : undefined;

  return {
    ...meta,
    alternates: { ...meta.alternates, canonical: path },
    openGraph: {
      type: opts.type ?? "website",
      locale: "en_PK",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export function clampDescription(text: string, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s–-]+$/, "") + "…";
}

// Short titles / descriptions for the data-driven service landing pages.
export const landingSeo: Record<string, { title: string; description: string }> = {
  "deep-tissue-massage-rawalpindi": {
    title: "Deep Tissue Massage Rawalpindi",
    description:
      "Deep tissue massage in Rawalpindi for back pain, stiff neck and sports soreness. Bahria Town Phase 7, 60 min from PKR 6,000. Call 0306 5656413.",
  },
  "thai-massage-rawalpindi": {
    title: "Thai Massage in Rawalpindi",
    description:
      "Traditional Thai massage in Rawalpindi: oil-free stretching and acupressure for flexibility. Bahria Town Phase 7, from PKR 5,500. Book 0306 5656413.",
  },
  "swedish-massage-rawalpindi": {
    title: "Swedish Massage in Rawalpindi",
    description:
      "Relaxing Swedish massage in Rawalpindi – long flowing strokes, light-to-medium pressure. Ideal for stress. 60 min PKR 5,000, Bahria Town Phase 7.",
  },
  "aromatherapy-massage-rawalpindi": {
    title: "Aromatherapy Massage Rawalpindi",
    description:
      "Aromatherapy massage in Rawalpindi with lavender, eucalyptus and orange oils. Calming 60-min session, PKR 6,500, Bahria Town Phase 7.",
  },
  "hot-stone-massage-rawalpindi": {
    title: "Hot Stone Massage in Rawalpindi",
    description:
      "Hot stone massage in Rawalpindi: heated basalt stones melt deep tension without heavy pressure. 75 min PKR 7,000 in Bahria Town Phase 7.",
  },
  "foot-reflexology-rawalpindi": {
    title: "Foot Reflexology in Rawalpindi",
    description:
      "Foot reflexology and foot massage in Rawalpindi for tired feet and legs. 45 min for PKR 3,500 at Best Spa, Bahria Town Phase 7. Walk-ins welcome.",
  },
  "couples-massage-rawalpindi": {
    title: "Couples Massage in Rawalpindi",
    description:
      "Couples massage in Rawalpindi in a private double suite – two side-by-side massages for PKR 12,000 (60 min). Bahria Town Phase 7. Call 0306 5656413.",
  },
  "massage-prices-rawalpindi": {
    title: "Massage Prices Rawalpindi 2026",
    description:
      "Massage price list for Rawalpindi: full body PKR 5,500, Swedish 5,000, deep tissue 6,000, reflexology 3,500, couples 12,000. Clear spa rates.",
  },
  "massage-near-islamabad": {
    title: "Massage Center Near Islamabad",
    description:
      "Massage center near Islamabad, DHA Phase 1 & 2 and the Expressway. Best Spa in Bahria Town Phase 7 is a short drive with parking. Call 0306 5656413.",
  },
  "spa-near-me": {
    title: "Spa Near Me – Rawalpindi",
    description:
      "Looking for a spa near you in Rawalpindi or Islamabad? Best Spa, Bahria Town Phase 7 – open daily 1 PM to 4 AM with certified therapists.",
  },
};

// Short titles / descriptions for blog posts.
export const blogSeo: Record<string, { title: string; description: string }> = {
  "best-spa-bahria-town": {
    title: "Best Spa in Bahria Town Phase 7",
    description:
      "Why Bahria Town Phase 7, Phase 8 and DHA residents choose Best Spa Rawalpindi for weekly relaxation and deep tension relief.",
  },
  "benefits-full-body-massage": {
    title: "10 Benefits of Full Body Massage",
    description:
      "Science-backed benefits of full body massage – lower cortisol, better circulation, less back pain and deeper sleep.",
  },
  "what-to-expect-first-massage": {
    title: "Your First Massage: What to Expect",
    description:
      "A step-by-step guide to your first spa visit: arrival, consultation, draping etiquette, the treatment and aftercare.",
  },
  "how-often-should-you-get-a-massage": {
    title: "How Often Should You Get a Massage?",
    description:
      "Weekly, bi-weekly or monthly? The ideal massage frequency for your lifestyle, activity level, stress and chronic pain.",
  },
  "relaxation-vs-therapeutic-massage": {
    title: "Relaxation vs Therapeutic Massage",
    description:
      "Swedish relaxation or deep therapeutic massage? Compare pressure, goals and techniques to choose the right therapy.",
  },
  "benefits-massage-after-long-workday": {
    title: "Massage After a Long Workday",
    description:
      "How a massage after work eases desk fatigue, stiff necks and tension headaches – open until 4 AM in Bahria Town.",
  },
  "massage-for-stress-relief": {
    title: "Massage for Stress Relief",
    description:
      "How massage lowers cortisol, calms the nervous system and improves sleep – plus the best massage styles for stress.",
  },
  "how-long-should-massage-session-be": {
    title: "60 vs 90 Minute Massage Compared",
    description:
      "60 or 90 minutes? How long a massage should be for relaxation, muscle knots and full body work.",
  },
  "what-to-wear-to-massage": {
    title: "What to Wear to a Massage",
    description:
      "What to wear to a massage, how professional draping works and simple spa etiquette so you feel comfortable.",
  },
  "things-to-know-before-booking-massage": {
    title: "Before You Book a Massage",
    description:
      "Prices, therapist choice, hygiene and timing – what to know before booking a massage in Rawalpindi.",
  },
  "how-to-choose-massage-center-rawalpindi": {
    title: "Choosing a Massage Center",
    description:
      "A checklist for choosing a safe massage center in Rawalpindi: certification, hygiene, privacy, reviews and clear prices.",
  },
  "how-to-choose-spa-bahria-town": {
    title: "How to Choose a Spa in Bahria Town",
    description:
      "Comparing spas in Bahria Town? Check therapist certification, cleanliness, private rooms, reviews and pricing first.",
  },
  "best-massage-options-for-relaxation": {
    title: "Best Massage Types for Relaxation",
    description:
      "Swedish, aromatherapy, hot stone or Thai – the best massage options for deep relaxation and mental clarity.",
  },
  "massage-after-travel": {
    title: "Massage After Travel & Jet Lag",
    description:
      "How a massage after a flight or road trip eases stiffness, swelling and jet lag – and which therapy to book.",
  },
  "massage-and-muscle-relaxation": {
    title: "How Massage Releases Muscle Knots",
    description:
      "How therapists find and release deep muscle knots, and which techniques give lasting muscle relaxation.",
  },
  "spa-and-self-care-guide": {
    title: "Spa & Self-Care Guide",
    description:
      "A practical spa and self-care routine for Rawalpindi and Islamabad residents – massage, rest, hydration and more.",
  },
  "benefits-deep-tissue-massage": {
    title: "Deep Tissue Massage for Desk Workers",
    description:
      "5 benefits of deep tissue massage for office workers: relief for back pain, tech-neck and tight shoulders.",
  },
  "mens-spa-guide": {
    title: "Men's Spa Guide: Rawalpindi",
    description:
      "A guide to men's spa services in Rawalpindi – deep tissue, sports and full body massage with certified therapists.",
  },
  "sciatica-massage-relief": {
    title: "Massage for Sciatica & Back Pain",
    description:
      "Can massage help sciatica? Techniques that ease lower back and leg pain, what to expect and when to see a doctor.",
  },
  "couples-spa-guide": {
    title: "Couples Massage Guide: Bahria Town",
    description:
      "Planning a couples massage in Bahria Town? Etiquette, what's included and how to book our private couples suite.",
  },
};

// Rene Spa social profiles.
export const SOCIAL_LINKS = [
  { network: "facebook", label: "Facebook", handle: "Rene Spa", href: "https://www.facebook.com/renespa" },
  { network: "facebook", label: "Facebook", handle: "Rene Spa Rawalpindi", href: "https://www.facebook.com/renesparawalpindi" },
  { network: "instagram", label: "Instagram", handle: "@renespacenter", href: "https://www.instagram.com/renespacenter" },
  { network: "instagram", label: "Instagram", handle: "@renespa63", href: "https://www.instagram.com/renespa63" },
  { network: "tiktok", label: "TikTok", handle: "@renespacenter", href: "https://www.tiktok.com/@renespacenter" },
] as const;

export type SocialNetwork = (typeof SOCIAL_LINKS)[number]["network"];

// Branches / sister websites of the Rene Spa network.
export const BRANCHES = [
  {
    name: "Best Spa Rawalpindi",
    area: "Bahria Town Phase 7 & Phase 4",
    desc: "This website – spa & massage near Nando's, Phase 7, and Phase 4.",
    href: "/",
    current: true,
  },
  {
    name: "Rene Spa",
    area: "Bahria Town Phase 4",
    desc: "Rene Spa Center – massage & spa in Bahria Town Phase 4 Civic Center.",
    href: "https://renespacenter.com/",
    current: false,
  },
  {
    name: "Best Rene Spa (Massage Bahria)",
    area: "Bahria Town Phase 7",
    desc: "Massage center at Square Commercial, Phase 7 – open 24 hours.",
    href: "https://www.massagebahria.com/",
    current: false,
  },
  {
    name: "Best Spa Islamabad",
    area: "Islamabad",
    desc: "Luxury massage & wellness center for Islamabad clients.",
    href: "https://www.bestspaislamabad.com/",
    current: false,
  },
] as const;
