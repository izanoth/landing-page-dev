import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { languages } from "@/lib/i18n/settings";

const defaultLng = "pt";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const missingLng = languages.every((lng) => !pathname.startsWith(`/${lng}`));

  if (missingLng) {
    return NextResponse.redirect(
      new URL(`/${defaultLng}${pathname}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*|favicon.ico|sw.js|img|locales|fonts|icons).*)',
  ]
};

