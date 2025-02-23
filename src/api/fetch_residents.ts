"use server";
import { deleteSession } from "@/lib/session";
import { cookies } from "next/headers";
import { instance } from "./config/axios_config";
import { AxiosError } from "axios";

export const fetchResidents = async () => {
  const token = (await cookies()).get("session")?.value;
  console.log("your token: ", token);
  try {
    const response = await instance.get("/residents/", {
      // withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("THIS IS UN AUTHORIZED: ", response.status);
    console.log(response.data);
    return response.data;

    // if (error.status == 401) {
    //   await deleteSession();
    // }
  } catch (error: unknown) {
    console.log((error as AxiosError).status);
    // throw new Error("error", error as Error);
  }
};
