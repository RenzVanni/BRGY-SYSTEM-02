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
  console.log(" Cookie in Mid: ", token);

  // try {
  //   const response = await instance.get("/accounts/token", {
  //     withCredentials: true,
  //   });
  //   console.log("This is the token in frontend: ", response.status);
  // } catch (error: any) {
  //   console.log(error.response.status);
  // }

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    // if (!token) {
    //   return NextResponse.redirect(new URL(LOGIN, req.url));
    // }
    try {
      const response = await instance.get("/accounts/token", {
        headers: {
          Cookie: `access_token=${token}`,
        },
      });
      console.log("This is the token in frontend: ", response.status);
    } catch (error: any) {
      console.log(error.response.status);
      if (error.response.status == 401) {
        return NextResponse.redirect(new URL(LOGIN, req.url));
      }
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
