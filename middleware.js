import { NextResponse } from "next/server";

export const config = {
  matcher: ["/api/:path*"],
};
export function middleware(req) {
  if (req.method !== "POST") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
