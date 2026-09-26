import { NextResponse } from "next/server";

export async function GET() {
  const whatsappUrl =
    "https://wa.me/923065656413?text=" +
    encodeURIComponent(
      "Hi! I would like to book an appointment at Best Spa Rawalpindi (Bahria Town Phase 7)."
    );

  return NextResponse.redirect(whatsappUrl, 307);
}
