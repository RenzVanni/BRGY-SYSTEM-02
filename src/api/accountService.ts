"use server";

import { LOGIN } from "@/constants/navigation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const fetchAccounts = async () => {
  const cookieHeader = (await cookies()).toString();
  const response = await fetch(process.env.BACKEND_DEV_URL + "/accounts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
    },
  });

  if (response.status == 401) {
    redirect(LOGIN);
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch accounts ${response.status}`);
  }

  const data = await response.json();

  return data;
};
