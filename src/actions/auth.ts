"use server";
import {
  LoginFormSchema,
  FormState,
  Resident_FormState,
  Resident_FormSchema,
} from "@/lib/definitions";
import axios from "axios";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";
import { DASHBOARD, RESIDENTS } from "@/constants/navigation";

export const login_auth = async (state: FormState, formData: FormData) => {
  const validateFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  if (validateFields.success) {
    try {
      const { email, password } = validateFields.data;

      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      const responseData = response.data;
      await createSession(responseData);
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
    email: formData.get("email"),
    birthPlace: formData.get("birthPlace"),
    sex: formData.get("sex"),
    status: formData.get("status"),
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
        email,
        birthPlace,
        status,
        sex,
        address,
        whatsType,
      } = validateFields.data;

      console.log(email);

      if (whatsType == "create") {
        const response = await axios.post("http://localhost:5000/resident", {
          firstName,
          middleName,
          lastName,
          email,
          birthDate,
          birthPlace,
          status,
          sex,
          address,
        });

        const responseData = response.data;
        await createSession(responseData);
      }
    } catch (error) {
      console.log(error);
    }
    redirect(RESIDENTS);
  }
};
