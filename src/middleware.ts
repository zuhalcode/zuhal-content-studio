import { NextRequest, NextResponse } from "next/server";

const LOGIN_PATH = "/login";
const DEFAULT_AUTHENTICATED_PATH = "/dashboard/overview";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("access_token")?.value;

  const isAuthenticated = Boolean(accessToken);
  const isLoginPage = pathname === LOGIN_PATH;
  const isProtectedRoute =
    pathname === "/" || pathname.startsWith("/dashboard");

  // Authenticated users should not access the login page.
  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(
      new URL(DEFAULT_AUTHENTICATED_PATH, request.url),
    );
  }

  // Unauthenticated users cannot access protected routes.
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/dashboard/:path*"],
};
