import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";
import { DASHBOARD, LOGIN, RESIDENTS } from "./constants/navigation";
import { instance } from "./api/config/axios_config";

const protectedRoutes = [DASHBOARD, RESIDENTS];
const publicRoutes = [LOGIN];
export const middleware = async (req: NextRequest, res: NextResponse) => {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("access_token")?.value;
  // console.log("Cookie in store: ", token);

  const isPublic = [LOGIN].includes(path);

  // console.log("Cookie token: ", token);

  if (isPublic) {
    return NextResponse.next();
  }

  if (isPublic && token) {
    return NextResponse.redirect(new URL(DASHBOARD, req.url));
  }

  if (protectedRoutes.includes(path)) {
    if (!token) {
      return NextResponse.redirect(new URL(LOGIN, req.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [`${DASHBOARD}/:path*`, `${RESIDENTS}/:path*`, LOGIN],
};
