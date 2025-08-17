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
import { DASHBOARD, RESIDENTS } from "@/constants/navigation";
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

  if (validateFields.success) {
    try {
      const { password, username } = validateFields.data;

      const data = new URLSearchParams();
      data.append("client_id", "authId");
      data.append("client_secret", "boqMrn6VLS3A2zfxLUjIWLVfCZqZIory");
      data.append("username", username);
      data.append("password", password);
      data.append("grant_type", "password");

      const response = await axios.post(
        "http://localhost:8080/realms/auth/protocol/openid-connect/token",
        data,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
        // { withCredentials: true }
      );

      console.log("Response ", response);
      const responseData = response.data;
      await setSession(responseData);
      // await createSession(responseData);
    } catch (error) {
      console.log(error);
    }
    redirect(DASHBOARD);
  }
};

export const logout_auth = async () => {
  await deleteSession();
};