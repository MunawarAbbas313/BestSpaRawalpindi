// Content for SEO landing pages rendered by <ServiceLandingPage />.
// Each page targets one search intent with unique copy, H1, meta tags and FAQs.

export interface LandingPageData {
  slug: string;
  metaTitle: string; // layout template appends " | Best Spa Rawalpindi"
  metaDescription: string;
  keywords: string[];
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  intro: string;
  service?: { name: string; price: number; duration: string };
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  priceTable?: {
    heading: string;
    rows: { name: string; duration: string; price: string; href?: string }[];
    note?: string;
  };
  related: { label: string; href: string }[];
  faqHeading: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
}

export const PRICE_LIST = [
  { name: "Full Body Massage", duration: "60 / 90 min", price: "PKR 5,500", href: "/full-body-massage" },
  { name: "Deep Tissue Massage", duration: "60 min", price: "PKR 6,000", href: "/deep-tissue-massage-rawalpindi" },
  { name: "Traditional Thai Massage", duration: "60 / 90 min", price: "PKR 5,500", href: "/thai-massage-rawalpindi" },
  { name: "Swedish Relaxation Massage", duration: "60 min", price: "PKR 5,000", href: "/swedish-massage-rawalpindi" },
  { name: "Aromatherapy Massage", duration: "60 min", price: "PKR 6,500", href: "/aromatherapy-massage-rawalpindi" },
  { name: "Hot Stone Massage", duration: "75 min", price: "PKR 7,000", href: "/hot-stone-massage-rawalpindi" },
  { name: "Foot Reflexology", duration: "45 min", price: "PKR 3,500", href: "/foot-reflexology-rawalpindi" },
  { name: "Couples Massage (2 people)", duration: "60 min", price: "PKR 12,000", href: "/couples-massage-rawalpindi" },
];

const SERVICE_LINKS = [
  { label: "Full Body Massage in Rawalpindi", href: "/full-body-massage" },
  { label: "Deep Tissue Massage Rawalpindi", href: "/deep-tissue-massage-rawalpindi" },
  { label: "Thai Massage Rawalpindi", href: "/thai-massage-rawalpindi" },
  { label: "Swedish Massage Rawalpindi", href: "/swedish-massage-rawalpindi" },
  { label: "Aromatherapy Massage Rawalpindi", href: "/aromatherapy-massage-rawalpindi" },
  { label: "Hot Stone Massage Rawalpindi", href: "/hot-stone-massage-rawalpindi" },
  { label: "Foot Reflexology Rawalpindi", href: "/foot-reflexology-rawalpindi" },
  { label: "Couples Massage Rawalpindi", href: "/couples-massage-rawalpindi" },
];

const COMMON_LINKS = [
  { label: "Massage Prices in Rawalpindi", href: "/massage-prices-rawalpindi" },
  { label: "Spa Contact Number & Booking", href: "/contact" },
  { label: "Location & Directions (Bahria Phase 7)", href: "/location" },
  { label: "Spa & Massage FAQs", href: "/faq" },
];

function related(selfSlug: string, extra: { label: string; href: string }[] = []) {
  return [...SERVICE_LINKS, ...COMMON_LINKS, ...extra].filter((l) => l.href !== `/${selfSlug}`).slice(0, 10);
}

const BOOKING_FAQ = {
  question: "How do I book, and what is your contact number?",
  answer:
    "Call or WhatsApp our reception on 0306 5656413 (+92 306 5656413). Tell us the treatment, preferred time and whether you prefer a male or female therapist, and we will confirm your slot. We are open Monday to Friday 10:00 AM – 4:40 AM and 24 hours on Saturday and Sunday.",
};

export const landingPages: Record<string, LandingPageData> = {
  "deep-tissue-massage-rawalpindi": {
    slug: "deep-tissue-massage-rawalpindi",
    metaTitle: "Deep Tissue Massage in Rawalpindi – Back & Neck Pain Relief",
    metaDescription:
      "Deep tissue massage in Rawalpindi for back pain, stiff neck and sports soreness. Certified therapists in Bahria Town Phase 7. 60 min from PKR 6,000. Call 0306 5656413.",
    keywords: [
      "deep tissue massage Rawalpindi",
      "deep tissue massage Islamabad",
      "back pain massage Rawalpindi",
      "neck and shoulder massage",
      "sports massage Rawalpindi",
      "muscle pain massage near me",
      "deep tissue massage price",
    ],
    breadcrumb: "Deep Tissue Massage",
    eyebrow: "Pain Relief Therapy",
    h1: "Deep Tissue Massage in Rawalpindi",
    intro:
      "Slow, firm, targeted pressure that reaches the deeper layers of muscle and fascia. Ideal for desk-job back pain, a stiff neck, tight shoulders and gym or sports soreness — performed by certified therapists in Bahria Town Phase 7.",
    service: { name: "Deep Tissue Massage", price: 6000, duration: "60 min" },
    sections: [
      {
        heading: "What Is Deep Tissue Massage?",
        paragraphs: [
          "Deep tissue massage uses slower strokes and sustained pressure to work on the deeper muscle layers and the connective tissue (fascia) around them. Instead of covering the whole body evenly, your therapist spends more time on the specific areas that feel knotted, tight or painful.",
          "It is a therapeutic treatment rather than a purely relaxing one. You may feel some intensity on tight spots, but the pressure is always adjusted to your comfort — you can ask for lighter or firmer pressure at any point.",
        ],
      },
      {
        heading: "Who Is It Best For?",
        paragraphs: [
          "Most of our deep tissue clients in Rawalpindi and Islamabad come in with one of a few common problems:",
        ],
        bullets: [
          "Lower back and upper back pain from long hours of sitting or driving",
          "Stiff neck and shoulders, tension headaches from screen work",
          "Post-workout soreness, gym and cricket/football players",
          "Tight hamstrings, hips and calves",
          "Long-standing muscle knots that a relaxation massage does not release",
        ],
      },
      {
        heading: "What to Expect During Your Session",
        paragraphs: [
          "Your therapist starts with a short consultation about where you feel pain and any medical conditions. The session begins with lighter warming strokes before gradually working deeper into the problem areas. Most clients book 60 minutes; for full-back and leg work a longer session can be arranged.",
          "Drink plenty of water afterwards. Mild soreness for a day is normal, similar to after a workout. If you have a recent injury, blood-clotting condition, or are pregnant, please tell us when booking — a gentler treatment such as Swedish massage may be recommended.",
        ],
      },
    ],
    related: related("deep-tissue-massage-rawalpindi", [
      { label: "Blog: Benefits of Deep Tissue Massage", href: "/blog/benefits-deep-tissue-massage" },
    ]),
    faqHeading: "Deep Tissue Massage FAQs",
    faqs: [
      {
        question: "How much does a deep tissue massage cost in Rawalpindi?",
        answer:
          "A 60-minute deep tissue massage at Best Spa Rawalpindi is PKR 6,000. See our full massage price list for all treatments.",
      },
      {
        question: "Does deep tissue massage hurt?",
        answer:
          "It can feel intense on very tight areas, but it should never be sharply painful. Your therapist will check in on pressure throughout and adjust it to what is comfortable for you.",
      },
      {
        question: "How often should I get a deep tissue massage for back pain?",
        answer:
          "For ongoing back or neck tension many clients book every 2–4 weeks. If pain is severe, persistent or follows an injury, please consult a doctor or physiotherapist as well.",
      },
      BOOKING_FAQ,
    ],
    ctaTitle: "Book a Deep Tissue Massage in Rawalpindi",
  },

  "thai-massage-rawalpindi": {
    slug: "thai-massage-rawalpindi",
    metaTitle: "Thai Massage in Rawalpindi & Bahria Town – Stretching Therapy",
    metaDescription:
      "Traditional Thai massage in Rawalpindi: oil-free assisted stretching and acupressure for flexibility and energy. Bahria Town Phase 7. 60/90 min from PKR 5,500. Book: 0306 5656413.",
    keywords: [
      "Thai massage Rawalpindi",
      "Thai massage Islamabad",
      "Thai massage Bahria Town",
      "traditional Thai massage near me",
      "stretching massage Rawalpindi",
      "Thai massage price Pakistan",
    ],
    breadcrumb: "Thai Massage",
    eyebrow: "Traditional Thai Bodywork",
    h1: "Traditional Thai Massage in Rawalpindi",
    intro:
      "An oil-free, fully clothed treatment that combines rhythmic acupressure with assisted, yoga-like stretches. Thai massage leaves you looser, more mobile and energised rather than sleepy.",
    service: { name: "Traditional Thai Massage", price: 5500, duration: "60 / 90 min" },
    sections: [
      {
        heading: "How Thai Massage Is Different",
        paragraphs: [
          "Unlike Swedish or full body oil massage, Thai massage is done on a padded mat or firm table while you wear loose, comfortable clothes. The therapist uses palms, thumbs, forearms and gentle body-weight to press along the body's energy lines (known as 'sen' lines), then moves you through a sequence of assisted stretches.",
          "Because there is no oil, it is a great choice if you are heading back to work or the gym afterwards, or if you simply prefer a dry treatment.",
        ],
      },
      {
        heading: "Benefits Our Clients Notice",
        paragraphs: ["Thai massage is popular with people who feel stiff rather than sore:"],
        bullets: [
          "Better flexibility in hips, hamstrings and lower back",
          "Improved posture after long days at a desk or behind the wheel",
          "A lighter, more energised feeling instead of drowsiness",
          "Relief from general stiffness and joint tightness",
        ],
      },
      {
        heading: "60 or 90 Minutes?",
        paragraphs: [
          "A 60-minute session covers the full sequence at a steady pace. If you are very stiff or want extra time on the back, hips and legs, choose 90 minutes. Wear or bring loose clothing — we also provide comfortable spa wear on request.",
        ],
      },
    ],
    related: related("thai-massage-rawalpindi"),
    faqHeading: "Thai Massage FAQs",
    faqs: [
      {
        question: "What is the price of Thai massage in Rawalpindi?",
        answer:
          "Traditional Thai massage at Best Spa Rawalpindi starts at PKR 5,500 for 60 minutes. A 90-minute option is also available.",
      },
      {
        question: "Do I need to undress for Thai massage?",
        answer: "No. Thai massage is performed fully clothed in loose, comfortable clothing and no oil is used.",
      },
      {
        question: "Is Thai massage suitable for beginners?",
        answer:
          "Yes. Stretches are always guided within your comfortable range of motion. Let your therapist know about any injuries, back problems or recent surgery before you start.",
      },
      BOOKING_FAQ,
    ],
    ctaTitle: "Book Your Thai Massage in Bahria Town",
  },

  "swedish-massage-rawalpindi": {
    slug: "swedish-massage-rawalpindi",
    metaTitle: "Swedish Massage in Rawalpindi – Relaxing Oil Massage",
    metaDescription:
      "Relaxing Swedish massage in Rawalpindi with long, flowing strokes and light-to-medium pressure. Ideal for stress and first-timers. 60 min PKR 5,000 in Bahria Town Phase 7.",
    keywords: [
      "Swedish massage Rawalpindi",
      "Swedish massage Islamabad",
      "relaxing massage Rawalpindi",
      "oil massage Rawalpindi",
      "stress relief massage near me",
      "relaxation spa Bahria Town",
    ],
    breadcrumb: "Swedish Massage",
    eyebrow: "Classic Relaxation",
    h1: "Swedish Relaxation Massage in Rawalpindi",
    intro:
      "The classic relaxation massage: long gliding strokes, gentle kneading and light to medium pressure with warm oil. The best place to start if it is your first massage or you simply want to switch off.",
    service: { name: "Swedish Massage", price: 5000, duration: "60 min" },
    sections: [
      {
        heading: "Why Choose a Swedish Massage?",
        paragraphs: [
          "Swedish massage is designed to calm the nervous system. Smooth, rhythmic strokes help your muscles soften and your breathing slow down, which is why many clients describe it as the most relaxing hour of their week.",
          "It is gentler than deep tissue work, so it suits people who are new to massage, feel stressed or mentally tired, or want a treatment to help them sleep better.",
        ],
        bullets: [
          "Stress, anxiety and mental fatigue after a busy week",
          "Poor sleep and difficulty switching off",
          "General muscle tension without specific painful knots",
          "A first massage experience",
        ],
      },
      {
        heading: "Swedish vs Deep Tissue",
        paragraphs: [
          "Choose Swedish if your goal is relaxation and you prefer lighter pressure. Choose deep tissue if you have a specific problem area such as lower back pain or a stiff neck. Not sure? Tell your therapist — they can blend both techniques within one session.",
        ],
      },
    ],
    related: related("swedish-massage-rawalpindi", [
      { label: "Blog: Relaxation vs Therapeutic Massage", href: "/blog/relaxation-vs-therapeutic-massage" },
    ]),
    faqHeading: "Swedish Massage FAQs",
    faqs: [
      {
        question: "How much is a Swedish massage in Rawalpindi?",
        answer: "A 60-minute Swedish relaxation massage at Best Spa Rawalpindi is PKR 5,000.",
      },
      {
        question: "Is Swedish massage good for a first-timer?",
        answer:
          "Yes. It uses gentle to medium pressure and is the most common choice for people trying massage for the first time.",
      },
      {
        question: "What oil do you use?",
        answer:
          "We use warm massage oils; please tell us about any nut or skin allergies when booking and we will use a suitable alternative.",
      },
      BOOKING_FAQ,
    ],
    ctaTitle: "Unwind with a Swedish Massage Today",
  },

  "aromatherapy-massage-rawalpindi": {
    slug: "aromatherapy-massage-rawalpindi",
    metaTitle: "Aromatherapy Massage in Rawalpindi – Essential Oil Massage",
    metaDescription:
      "Aromatherapy massage in Rawalpindi with essential oils such as lavender, eucalyptus and sweet orange. Calming 60-min treatment, PKR 6,500, Bahria Town Phase 7. Call 0306 5656413.",
    keywords: [
      "aromatherapy massage Rawalpindi",
      "aromatherapy Islamabad",
      "essential oil massage Rawalpindi",
      "aroma massage Bahria Town",
      "relaxing spa treatment Rawalpindi",
    ],
    breadcrumb: "Aromatherapy Massage",
    eyebrow: "Essential Oil Therapy",
    h1: "Aromatherapy Massage in Rawalpindi",
    intro:
      "A soothing Swedish-style massage combined with essential oils chosen for how you want to feel — calm, refreshed or uplifted. A favourite for stress relief and better sleep.",
    service: { name: "Aromatherapy Massage", price: 6500, duration: "60 min" },
    sections: [
      {
        heading: "How Aromatherapy Massage Works",
        paragraphs: [
          "Before the massage, your therapist will offer a choice of essential oil blends. The oil is mixed into a carrier oil and applied with flowing, relaxing strokes. The gentle scent and the slow massage together create a deeply calming experience.",
        ],
        bullets: [
          "Lavender — calming, popular for stress and sleep",
          "Eucalyptus — fresh and clearing, good after a long day",
          "Sweet orange — light and uplifting",
        ],
      },
      {
        heading: "Who Should Choose Aromatherapy?",
        paragraphs: [
          "Aromatherapy is ideal if you feel mentally drained, are struggling to sleep, or want a gentle pampering treatment. It is also a popular choice for our couples suite. If you are pregnant, have sensitive skin, asthma or allergies, let us know when booking so the oils can be adjusted.",
        ],
      },
    ],
    related: related("aromatherapy-massage-rawalpindi", [
      { label: "Blog: Massage for Stress Relief", href: "/blog/massage-for-stress-relief" },
    ]),
    faqHeading: "Aromatherapy Massage FAQs",
    faqs: [
      {
        question: "What is the price of aromatherapy massage in Rawalpindi?",
        answer: "Our 60-minute aromatherapy massage is PKR 6,500, including your choice of essential oil blend.",
      },
      {
        question: "Can I choose the essential oil?",
        answer: "Yes. Your therapist will let you smell the available blends and choose the one you prefer.",
      },
      {
        question: "Is aromatherapy safe for everyone?",
        answer:
          "Most people enjoy it safely, but please tell us if you are pregnant or have allergies, asthma or very sensitive skin so we can recommend suitable oils or a different treatment.",
      },
      BOOKING_FAQ,
    ],
    ctaTitle: "Book an Aromatherapy Massage in Bahria Town",
  },

  "hot-stone-massage-rawalpindi": {
    slug: "hot-stone-massage-rawalpindi",
    metaTitle: "Hot Stone Massage in Rawalpindi – Warm Stone Therapy",
    metaDescription:
      "Hot stone massage in Rawalpindi: heated basalt stones melt deep muscle tension without heavy pressure. 75 min for PKR 7,000 at Best Spa, Bahria Town Phase 7. Book on 0306 5656413.",
    keywords: [
      "hot stone massage Rawalpindi",
      "hot stone massage Islamabad",
      "stone therapy Bahria Town",
      "warm stone massage near me",
      "luxury massage Rawalpindi",
    ],
    breadcrumb: "Hot Stone Massage",
    eyebrow: "Warm Stone Therapy",
    h1: "Hot Stone Massage in Rawalpindi",
    intro:
      "Smooth, heated basalt stones are placed on key points and used as an extension of the therapist's hands. The warmth lets muscles relax deeply without the intensity of deep tissue pressure.",
    service: { name: "Hot Stone Massage", price: 7000, duration: "75 min" },
    sections: [
      {
        heading: "Why Heat Makes a Difference",
        paragraphs: [
          "Warmth naturally helps tight muscles soften. During a hot stone massage, the therapist glides warm stones along your back, legs and arms, and rests stones on areas that hold tension. Many clients find they get a 'deep' release while the pressure itself stays comfortable.",
          "It is a particularly comforting treatment during Rawalpindi and Islamabad winters, and a great choice if deep tissue feels too intense for you.",
        ],
        bullets: [
          "Deep relaxation with comfortable pressure",
          "Relief for stiff back and shoulders",
          "A luxurious 75-minute treatment — ideal as a gift or special occasion",
        ],
      },
      {
        heading: "Safety and Comfort",
        paragraphs: [
          "Stones are heated in water to a controlled temperature and tested before they touch your skin. Hot stone massage is not recommended during pregnancy, or for people with diabetes-related nerve sensitivity, varicose veins, or certain heart conditions — please mention any health issues when you book.",
        ],
      },
    ],
    related: related("hot-stone-massage-rawalpindi"),
    faqHeading: "Hot Stone Massage FAQs",
    faqs: [
      {
        question: "How much is a hot stone massage in Rawalpindi?",
        answer: "Our 75-minute hot stone therapy is PKR 7,000.",
      },
      {
        question: "Are the stones too hot?",
        answer:
          "No. Stones are heated to a controlled temperature and checked first. Tell your therapist straight away if anything feels too warm.",
      },
      {
        question: "Is hot stone better than deep tissue?",
        answer:
          "They suit different needs. Hot stone gives deep relaxation with comfortable pressure; deep tissue gives focused, firm work on specific knots and pain points.",
      },
      BOOKING_FAQ,
    ],
    ctaTitle: "Reserve a Hot Stone Massage in Rawalpindi",
  },

  "foot-reflexology-rawalpindi": {
    slug: "foot-reflexology-rawalpindi",
    metaTitle: "Foot Reflexology & Foot Massage in Rawalpindi",
    metaDescription:
      "Foot reflexology and foot massage in Rawalpindi for tired feet and legs. 45-minute session for PKR 3,500 at Best Spa, Bahria Town Phase 7. Walk-ins welcome when slots are free.",
    keywords: [
      "foot reflexology Rawalpindi",
      "foot massage Rawalpindi",
      "foot massage Islamabad",
      "reflexology near me",
      "foot spa Bahria Town",
      "cheap massage Rawalpindi",
    ],
    breadcrumb: "Foot Reflexology",
    eyebrow: "Feet & Legs",
    h1: "Foot Reflexology & Foot Massage in Rawalpindi",
    intro:
      "A focused 45-minute treatment for tired, aching feet and legs using pressure-point techniques on the soles, heels and calves. Our most affordable treatment and a perfect quick reset.",
    service: { name: "Foot Reflexology", price: 3500, duration: "45 min" },
    sections: [
      {
        heading: "What Is Foot Reflexology?",
        paragraphs: [
          "Reflexology applies thumb and finger pressure to specific points on the feet. It is based on the traditional idea that areas of the foot relate to different parts of the body. Whatever your view on that theory, the result most clients notice is simple: lighter, less tired feet and a calmer mind.",
          "The session starts with a warm foot cleanse, followed by pressure-point work on the soles and a relaxing massage of the ankles and calves.",
        ],
      },
      {
        heading: "Great For",
        paragraphs: [],
        bullets: [
          "People who stand or walk all day — retail, teaching, healthcare, hospitality",
          "Heavy, tired legs after travel or long drives",
          "A short break when you don't have time for a full body massage",
          "Adding on to another treatment for a complete pamper session",
        ],
      },
    ],
    related: related("foot-reflexology-rawalpindi", [
      { label: "Blog: Massage After Travel", href: "/blog/massage-after-travel" },
    ]),
    faqHeading: "Foot Reflexology FAQs",
    faqs: [
      {
        question: "How much is a foot massage in Rawalpindi?",
        answer: "A 45-minute foot reflexology session at Best Spa Rawalpindi is PKR 3,500.",
      },
      {
        question: "Can I add reflexology to another massage?",
        answer: "Yes. Ask our reception when booking and we will schedule the treatments back-to-back.",
      },
      {
        question: "Can I walk in for a foot massage?",
        answer:
          "Walk-ins are welcome when a therapist is free, but calling or WhatsApping ahead on 0306 5656413 guarantees your slot.",
      },
      BOOKING_FAQ,
    ],
    ctaTitle: "Give Your Feet a Break — Book Reflexology",
  },

  "couples-massage-rawalpindi": {
    slug: "couples-massage-rawalpindi",
    metaTitle: "Couples Massage in Rawalpindi – Private Couples Spa Suite",
    metaDescription:
      "Couples massage in Rawalpindi in a private double suite. Two side-by-side Swedish or aromatherapy massages for PKR 12,000 (60 min). Bahria Town Phase 7. Book on 0306 5656413.",
    keywords: [
      "couples massage Rawalpindi",
      "couple spa Rawalpindi",
      "couples spa Islamabad",
      "couple massage Bahria Town",
      "anniversary spa gift Rawalpindi",
      "spa for husband and wife",
    ],
    breadcrumb: "Couples Massage",
    eyebrow: "Private Double Suite",
    h1: "Couples Massage in Rawalpindi",
    intro:
      "Relax side by side in our private double suite, each with your own therapist. Choose Swedish or aromatherapy massage — a thoughtful anniversary, birthday or 'just because' gift.",
    service: { name: "Couples Massage", price: 12000, duration: "60 min" },
    sections: [
      {
        heading: "Your Couples Spa Experience",
        paragraphs: [
          "The couples package includes two 60-minute massages performed at the same time in one private, calm suite. You can each choose a different pressure level, and you can switch between Swedish and aromatherapy oils to suit each person.",
        ],
        bullets: [
          "Private double suite — no shared rooms with other guests",
          "Two therapists working in sync",
          "Choice of Swedish or aromatherapy massage for each person",
          "Ideal for anniversaries, birthdays, honeymoons and gifts",
        ],
      },
      {
        heading: "Booking Tips",
        paragraphs: [
          "The couples suite is our most requested room, especially on weekend evenings, so we recommend booking at least a day in advance. Let us know if it is a special occasion and any therapist preferences when you call or WhatsApp.",
        ],
      },
    ],
    related: related("couples-massage-rawalpindi", [
      { label: "Blog: Couples Spa Guide", href: "/blog/couples-spa-guide" },
    ]),
    faqHeading: "Couples Massage FAQs",
    faqs: [
      {
        question: "How much is a couples massage in Rawalpindi?",
        answer: "Our 60-minute couples package is PKR 12,000 for two people in a private double suite.",
      },
      {
        question: "Can we choose different massages?",
        answer: "Yes — each person can choose Swedish or aromatherapy and their own pressure level.",
      },
      {
        question: "Do you sell spa gift bookings?",
        answer: "Yes. Contact our reception on 0306 5656413 to arrange a booking as a gift.",
      },
      BOOKING_FAQ,
    ],
    ctaTitle: "Book the Couples Suite in Bahria Town",
  },

  "massage-prices-rawalpindi": {
    slug: "massage-prices-rawalpindi",
    metaTitle: "Massage Prices in Rawalpindi 2026 – Spa Rate List",
    metaDescription:
      "Massage price list for Rawalpindi & Bahria Town: full body PKR 5,500, Swedish PKR 5,000, deep tissue PKR 6,000, foot reflexology PKR 3,500, couples PKR 12,000. Transparent spa rates.",
    keywords: [
      "massage price in Rawalpindi",
      "spa rates Rawalpindi",
      "full body massage price Rawalpindi",
      "massage rate list Islamabad",
      "spa price list Bahria Town",
      "cheap massage Rawalpindi",
      "spa deals Rawalpindi",
    ],
    breadcrumb: "Massage Prices",
    eyebrow: "Transparent PKR Rates",
    h1: "Massage Prices in Rawalpindi – Full Spa Rate List",
    intro:
      "Clear, upfront prices for every treatment at Best Spa Rawalpindi in Bahria Town Phase 7. No hidden charges — the price you see is the price you pay.",
    sections: [
      {
        heading: "How to Choose the Right Treatment",
        paragraphs: [
          "If you want to relax and de-stress, a Swedish massage (PKR 5,000) or aromatherapy massage (PKR 6,500) is ideal. For back pain, stiff neck or sports soreness, choose deep tissue (PKR 6,000). If you feel stiff rather than sore, try Thai massage (PKR 5,500). Short on time or budget? Foot reflexology starts at PKR 3,500.",
        ],
      },
    ],
    priceTable: {
      heading: "Spa & Massage Rate List",
      rows: PRICE_LIST,
      note: "Prices in Pakistani Rupees (PKR) and may change; please confirm the current rate and any offers when you call or WhatsApp 0306 5656413. Cash and cards accepted.",
    },
    related: related("massage-prices-rawalpindi", [{ label: "Complete Services Menu", href: "/services" }]),
    faqHeading: "Massage Price FAQs",
    faqs: [
      {
        question: "What is the price of a full body massage in Rawalpindi?",
        answer:
          "A full body massage at Best Spa Rawalpindi is PKR 5,500 for 60 minutes. A 90-minute session is also available — ask reception for the current rate.",
      },
      {
        question: "What is your cheapest treatment?",
        answer: "Foot reflexology (45 minutes) at PKR 3,500 is our most affordable treatment.",
      },
      {
        question: "Do you have any discounts or offers?",
        answer: "We run offers from time to time. Message us on WhatsApp at 0306 5656413 to ask about current deals.",
      },
      {
        question: "Which payment methods do you accept?",
        answer: "We accept cash as well as debit and credit cards.",
      },
      BOOKING_FAQ,
    ],
    ctaTitle: "Know What You Want? Book Your Slot Now",
  },

  "massage-near-islamabad": {
    slug: "massage-near-islamabad",
    metaTitle: "Massage Center Near Islamabad & DHA – Best Spa Bahria Town",
    metaDescription:
      "Looking for a massage center near Islamabad, DHA Phase 1 & 2 or the Islamabad Expressway? Best Spa in Bahria Town Phase 7 is a short drive away with parking. Call 0306 5656413.",
    keywords: [
      "massage center Islamabad",
      "spa in Islamabad",
      "massage near DHA Islamabad",
      "body massage Islamabad",
      "spa near Islamabad Expressway",
      "best spa Islamabad Rawalpindi",
      "twin cities spa",
    ],
    breadcrumb: "Massage Near Islamabad",
    eyebrow: "Serving the Twin Cities",
    h1: "Massage Center Near Islamabad & DHA",
    intro:
      "Best Spa Rawalpindi sits in Bahria Town Phase 7, right next to DHA Islamabad and minutes from the Islamabad Expressway — an easy drive for clients from across the twin cities.",
    sections: [
      {
        heading: "Easy to Reach from Islamabad",
        paragraphs: [
          "Many of our regular clients live or work in Islamabad. Bahria Town Phase 7 is reachable via the Islamabad Expressway, Bahria Expressway and GT Road, and we are close to DHA Phase 1 and Phase 2. Once you arrive, dedicated parking is available right outside.",
        ],
        bullets: [
          "DHA Islamabad Phase 1 & 2 — next door",
          "PWD, Police Foundation and Koral — via the Islamabad Expressway",
          "Giga Mall / DHA Phase 2 area — via GT Road",
          "Rawalpindi Cantt & Saddar — via GT Road or Bahria Expressway",
        ],
      },
      {
        heading: "Late-Night and Weekend Availability",
        paragraphs: [
          "We stay open until 4:40 AM Monday to Friday and 24 hours on Saturday and Sunday, so you can book a massage after work, after a late flight into Islamabad International Airport, or whenever suits your schedule.",
        ],
      },
      {
        heading: "Treatments Available",
        paragraphs: [
          "Choose from full body, Swedish, deep tissue, Thai, aromatherapy, hot stone, foot reflexology and couples massage — all in private suites with certified male and female therapists.",
        ],
      },
    ],
    related: related("massage-near-islamabad", [
      { label: "Spa Near Me in Rawalpindi & Islamabad", href: "/spa-near-me" },
    ]),
    faqHeading: "Islamabad Clients FAQs",
    faqs: [
      {
        question: "How far is Best Spa from DHA Islamabad?",
        answer:
          "We are in Bahria Town Phase 7, next to DHA Islamabad Phase 1 and 2 — usually just a few minutes' drive depending on traffic.",
      },
      {
        question: "Do you have parking?",
        answer: "Yes, there is dedicated client parking right outside our premises.",
      },
      {
        question: "Are you open late for Islamabad clients?",
        answer: "Yes — Monday to Friday until 4:40 AM and 24 hours on weekends.",
      },
      BOOKING_FAQ,
    ],
    ctaTitle: "Coming from Islamabad? Book Ahead",
  },

  "spa-near-me": {
    slug: "spa-near-me",
    metaTitle: "Spa Near Me in Rawalpindi & Islamabad – Open Late",
    metaDescription:
      "Searching 'spa near me' or 'massage near me' in Rawalpindi or Islamabad? Best Spa in Bahria Town Phase 7 is open late on weekdays and 24 hours on weekends. Call 0306 5656413.",
    keywords: [
      "spa near me",
      "massage near me",
      "massage center near me",
      "spa open now",
      "24 hour spa Rawalpindi",
      "late night massage Rawalpindi",
      "best spa near me Islamabad",
      "body massage near me",
    ],
    breadcrumb: "Spa Near Me",
    eyebrow: "Open Late • 24h Weekends",
    h1: "Spa Near Me in Rawalpindi & Islamabad",
    intro:
      "If you are in Bahria Town, DHA, PWD, Rawalpindi or Islamabad and searching for a spa nearby, Best Spa Rawalpindi is a short drive away — and open when most spas are closed.",
    sections: [
      {
        heading: "Why Clients Choose Us",
        paragraphs: [
          "A good 'spa near me' should be easy to reach, open when you need it, and clean and professional. That is exactly what we focus on:",
        ],
        bullets: [
          "Central location in Bahria Town Phase 7, near Nando's and Wallayat Complex",
          "Open Monday to Friday 10:00 AM – 4:40 AM, and 24 hours on weekends",
          "Private suites with fresh linen for every client",
          "Certified male and female therapists",
          "Clear PKR prices and quick booking by phone or WhatsApp",
        ],
      },
      {
        heading: "Areas We Serve",
        paragraphs: [
          "Clients visit us from all Bahria Town phases, DHA Islamabad, PWD, Media Town, Gulraiz, Askari 14, Rawalpindi Cantt, Saddar and across Islamabad. Use our location page for turn-by-turn directions and the map.",
        ],
      },
    ],
    related: related("spa-near-me", [{ label: "Massage Center Near Islamabad", href: "/massage-near-islamabad" }]),
    faqHeading: "Spa Near Me FAQs",
    faqs: [
      {
        question: "Is there a spa open now near me in Rawalpindi?",
        answer:
          "Best Spa Rawalpindi is open Monday to Friday from 10:00 AM to 4:40 AM and 24 hours on Saturday and Sunday. Call 0306 5656413 to check the next free slot.",
      },
      {
        question: "Where exactly are you located?",
        answer:
          "Bahria Town Phase 7, near Nando's and Wallayat Complex, Rawalpindi. See our location page for a map and directions.",
      },
      {
        question: "Can I book on the same day?",
        answer: "Yes, same-day bookings are welcome subject to availability. WhatsApp is the fastest way to confirm.",
      },
      BOOKING_FAQ,
    ],
    ctaTitle: "Find Us in Bahria Town Phase 7",
  },
};
