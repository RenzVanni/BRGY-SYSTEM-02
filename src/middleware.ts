import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";
import { DASHBOARD, LOGIN } from "./constants/navigation";

const protectedRoutes = [DASHBOARD];
const publicRoutes = [LOGIN];
export const middleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL(LOGIN, req.nextUrl));
  }

  if (isPublicRoute && session && !req.nextUrl.pathname.startsWith(DASHBOARD)) {
    return NextResponse.redirect(new URL(DASHBOARD, req.nextUrl));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
