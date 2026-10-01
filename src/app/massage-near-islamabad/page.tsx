import type { Metadata } from "next";
import { ServiceLandingPage, buildLandingMetadata } from "@/components/shared/ServiceLandingPage";
import { landingPages } from "@/lib/landing-pages";

const page = landingPages["massage-near-islamabad"];

export const metadata: Metadata = buildLandingMetadata(page);

export default function Page() {
  return <ServiceLandingPage page={page} />;
}
