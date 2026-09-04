import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

const protectedPrefixes = [
  "/dashboard",
  "/market",
  "/sectors",
  "/problems",
  "/roles",
  "/skills",
  "/projects",
  "/companies",
  "/sources",
  "/analytics",
];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isProtected = protectedPrefixes.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
  const isLoggedIn = !!req.auth;

  if (isProtected && !isLoggedIn) {
    const url = new URL("/login", req.nextUrl.origin);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  if (pathname === "/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/market/:path*",
    "/sectors/:path*",
    "/problems/:path*",
    "/roles/:path*",
    "/skills/:path*",
    "/projects/:path*",
    "/companies/:path*",
    "/sources/:path*",
    "/analytics/:path*",
    "/login",
  ],
};
