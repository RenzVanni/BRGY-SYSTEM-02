"use server";

import { ACCOUNT_COUNT_PATH, ACCOUNT_PATH } from "@/constants/Backend_Slugs";
import { LOGIN } from "@/constants/navigation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const fetchAccounts = async () => {
  const cookieHeader = (await cookies()).toString();
  const response = await fetch(process.env.BACKEND_DEV_URL + ACCOUNT_PATH, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
    },
  });

  console.log("Server status ", response.status);

  if (response.status == 401) {
    redirect(LOGIN);
    return;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch accounts ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export const countAccounts = async () => {
  const cookieHeader = (await cookies()).toString();
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_DEV_URL + ACCOUNT_COUNT_PATH,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
      },
    }
  );

  //! TASK CHECK REDIRECT AND COOKIE DELETION
  //* access token was back at 1 minute life span
  if (response.status == 401) {
    redirect(LOGIN);
    return;
  }

  // if (!response.ok) {
  //   throw new Error(`Failed to fetch accounts ${response.status}`);
  // }

  // const data = await response.json();

  return await response.json();
};
