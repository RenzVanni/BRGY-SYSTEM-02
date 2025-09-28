"use server";
import {
  LoginFormSchema,
  FormState,
  Resident_FormState,
  Resident_FormSchema,
} from "@/lib/definitions";
import axios from "axios";
import { redirect } from "next/navigation";
import { createSession, deleteSession, setSession } from "@/lib/session";
import { DASHBOARD, LOGIN, RESIDENTS } from "@/constants/navigation";
import { instance } from "@/app/api/config/axios_config";
import { LOGIN_SLUG } from "@/constants/Backend_Slugs";
import { cookies } from "next/headers";
import { FormEvent } from "react";

export const login_auth = async (state: FormState, formData: FormData) => {
  const validateFields = LoginFormSchema.safeParse({
    // email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  // if (validateFields.success) {
  // try {
  const { password, username } = validateFields.data;

  // try {
  const response = await instance.post(
    "/accounts/login",
    { username, password },
    { withCredentials: true }
  );

  const response1 = await fetch(
    process.env.BACKEND_DEV_URL + "/accounts/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    }
  );

  // console.log(response.headers["set-cookie"]);
  console.log(response1.status);

  if (response1.status == 200) {
    // (await cookies()).set("access_token",   )
    redirect(DASHBOARD);
    // return { success: true };
  }
  // } catch (error) {
  //   console.log("Login error: ", error);
  // }
  // await setSession(responseData);
  // await createSession(responseData);
  // } catch (error) {
  //   console.log(error);
  // }
  // redirect(DASHBOARD);
  // }
};

export const fetchToken = async () => {
  const cookieHeader = (await cookies()).toString();
  // console.log("fetch officials: ", cookieHeader);

  try {
    const response = await fetch(
      process.env.BACKEND_DEV_URL + "/accounts/token",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieHeader,
        },
      }
    );

    if (response.status == 200) {
      const data = await response.text();
      console.log("Token data: ", data);
      return data;
    }
  } catch (error: any) {
    console.log("Fetch error: ", error.status);
    if (error.status == 401) {
      redirect(DASHBOARD);
    }
  }
};

export const logout_auth = async () => {
  const response = await instance.get("/accounts/logout");

  const data = response.data;
  redirect(LOGIN);
  // await deleteSession();
};
