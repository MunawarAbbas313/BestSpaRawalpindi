import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS, type SocialNetwork } from "@/lib/seo";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.6a2.9 2.9 0 1 1-2-2.7V9.4a6.3 6.3 0 1 0 5.4 6.2V8.7a8.2 8.2 0 0 0 3.8 1.2V6.7Z" />
    </svg>
  );
}

const ICONS: Record<SocialNetwork, (p: { className?: string }) => React.ReactNode> = {
  facebook: ({ className }) => <Facebook className={className} />,
  instagram: ({ className }) => <Instagram className={className} />,
  tiktok: ({ className }) => <TikTokIcon className={className} />,
};

/** One icon per network (first profile of each) + WhatsApp. */
export function SocialIcons({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const primary = SOCIAL_LINKS.filter(
    (s, i, arr) => arr.findIndex((x) => x.network === s.network) === i
  );
  const base =
    tone === "dark"
      ? "bg-white/10 border-white/15 text-rose-100 hover:bg-white hover:text-rose-900"
      : "bg-white border-rose-200 text-rose-800 hover:bg-rose-700 hover:text-white hover:border-rose-700";

  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Best Spa Rawalpindi on WhatsApp"
        className={cn("h-10 w-10 rounded-full border flex items-center justify-center transition-colors", base)}
      >
        <MessageCircle className="h-4 w-4" />
      </a>
      {primary.map((s) => {
        const Icon = ICONS[s.network];
        return (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={`Follow Rene Spa on ${s.label} (${s.handle})`}
            className={cn("h-10 w-10 rounded-full border flex items-center justify-center transition-colors", base)}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}

/** Full list with handles – used in the "Follow us" card. */
export function SocialList({ className }: { className?: string }) {
  return (
    <ul className={cn("grid grid-cols-1 sm:grid-cols-2 gap-2.5", className)}>
      {SOCIAL_LINKS.map((s) => {
        const Icon = ICONS[s.network];
        return (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer me"
              className="flex items-center gap-3 rounded-2xl border border-rose-100 bg-white/80 px-3.5 py-2.5 text-sm text-rose-900 hover:border-rose-300 hover:shadow-sm transition-all"
            >
              <span className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-600 to-pink-500 text-white flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block font-semibold">{s.label}</span>
                <span className="block text-xs text-rose-700/80">{s.handle}</span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
