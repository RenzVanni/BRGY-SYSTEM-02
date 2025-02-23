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

      const response = await instance.post(
        "/login",
        {
          username,
          password,
        }
        // { withCredentials: true }
      );

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

// Residents
export const resident_auth = async (
  state: Resident_FormState,
  formData: FormData
) => {
  const validateFields = Resident_FormSchema.safeParse({
    id: formData.get("id"),
    firstName: formData.get("firstName"),
    middleName: formData.get("middleName"),
    lastName: formData.get("lastName"),
    birthDate: formData.get("birthDate"),
    birthPlace: formData.get("birthPlace"),
    gender: formData.get("gender"),
    civilStatus: formData.get("civilStatus"),
    address: formData.get("address"),
    whatsType: formData.get("whatsType"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  if (validateFields.success) {
    try {
      const {
        firstName,
        middleName,
        lastName,
        birthDate,
        birthPlace,
        civilStatus,
        gender,
        address,
        whatsType,
      } = validateFields.data;


      if (whatsType == "create") {
        const response = await instance.post("/residents", {
          firstName,
          middleName,
          lastName,
          birthDate,
          birthPlace,
          civilStatus,
          gender,
          address,
        });

        const responseData = response.data;

        // if (response.status == 401) {
        //   await deleteSession();
        // }
        // await createSession(responseData);
      }
    } catch (error) {
      console.log(error);
    }
    redirect(RESIDENTS);
  }
};
