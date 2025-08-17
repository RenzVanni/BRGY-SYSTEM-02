"use server";
import { AxiosError } from "axios";
import { instance } from "./config/axios_config";
import { cookies } from "next/headers";

export const fetch_gender = async () => {
  try {
    const token = (await cookies()).get("session")?.value;
    const response = await instance.get("/gender", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log((error as AxiosError).status);
  }
};
