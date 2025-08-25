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
import { instance } from "@/api/config/axios_config";
import { LOGIN_SLUG } from "@/constants/Backend_Slugs";

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

  const response = await instance.post(
    "/accounts/login",
    { username, password },
    { withCredentials: true }
  );
  if (response.status == 200) {
    redirect(DASHBOARD);
  }
  // await setSession(responseData);
  // await createSession(responseData);
  // } catch (error) {
  //   console.log(error);
  // }
  // redirect(DASHBOARD);
  // }
};

export const logout_auth = async () => {
  const response = await instance.get("/accounts/logout");

  const data = response.data;
  redirect(LOGIN);
  // await deleteSession();
};
