"use server";
import { deleteSession } from "@/lib/session";
import { cookies } from "next/headers";
import { instance } from "./config/axios_config";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";
import { LOGIN, RESIDENTS } from "@/constants/navigation";
import { Resident_FormSchema, Resident_FormState } from "@/lib/definitions";

//fetch residents
export const fetchResidents = async () => {
  try {
    const token = (await cookies()).get("session")?.value;
    const response = await instance.get("/residents", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: unknown) {
    // console.log((error as AxiosError).status);
    if ((error as AxiosError).status == 401) {
      await deleteSession();
      // redirect(LOGIN);
    }
  }
};

// add resident
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

      const parsedCivilStatus = parseInt(civilStatus);

      if (whatsType == "create") {
        const response = await instance.post("/residents/add", {
          firstname: firstName,
          middlename: middleName,
          lastname: lastName,
          birth_date: birthDate,
          birth_place: birthPlace,
          civil_status: parsedCivilStatus,
          gender: gender,
          address: address,
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

