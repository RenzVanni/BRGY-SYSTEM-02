import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";
import { DASHBOARD, LOGIN, RESIDENTS } from "./constants/navigation";

const protectedRoutes = [DASHBOARD, RESIDENTS];
const publicRoutes = [LOGIN];
export const middleware = async (req: NextRequest, res: NextResponse) => {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("session")?.value;

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL(LOGIN, req.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [DASHBOARD, RESIDENTS],
};
