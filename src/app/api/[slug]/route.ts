import { LOGIN } from "@/constants/navigation";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const fakeCookie = (await cookies()).get("access_token").value;

  console.log("Fake Cookie: ", fakeCookie);
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_DEV_URL + query,
    {
      headers: {
        Cookie: req.headers.get("cookie"),
      },
      credentials: "include",
    }
  );

  if (response.status == 401) {
    (await cookies()).delete("access_token");
    const unAuthorized = NextResponse.json({}, { status: response.status });
    return unAuthorized;
  }

  if (response.status == 204) {
    console.log("Status inside server: ", response.status);
    const noContent = new NextResponse(null, {
      status: response.status,
    }); 
    return noContent;
  }

  if (response.status == 200) {
    const data = await response.json().catch(() => {});
    const nextResponse = NextResponse.json(data, {
      status: response.status,
      headers: response.headers,
    });

    return nextResponse;
  }
}
