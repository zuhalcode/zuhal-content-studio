import { NextRequest, NextResponse } from "next/server";

const LOGIN_PATH = "/login";
const DASHBOARD_PATH = "/dashboard/overview";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasAccessToken = Boolean(request.cookies.get("access_token")?.value);

  if (pathname === LOGIN_PATH && hasAccessToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PATH, request.url));
  }

  const isProtectedPath = pathname === "/" || pathname.startsWith("/dashboard");
  if (isProtectedPath && !hasAccessToken) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/dashboard/:path*"],
};
