import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { normalizeHostname } from "@/lib/hostname";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  const host = normalizeHostname(request.headers.get("host"));

  headers.set("x-site-hostname", host);

  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
