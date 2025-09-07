import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";
import { ACCOUNT, DASHBOARD, LOGIN, RESIDENTS } from "./constants/navigation";
import { instance } from "./api/config/axios_config";

const protectedRoutes = [DASHBOARD, RESIDENTS];
const publicRoutes = [LOGIN];
export const middleware = async (req: NextRequest, res: NextResponse) => {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("access_token")?.value;

  const isPublic = [LOGIN].includes(path);

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
  matcher: [
    `${DASHBOARD}/:path*`,
    `${RESIDENTS}/:path*`,
    `${ACCOUNT}/:path*`,
    LOGIN,
  ],
};
