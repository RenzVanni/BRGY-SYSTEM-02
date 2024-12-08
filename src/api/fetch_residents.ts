"use server";
import { verifySession } from "@/lib/dal";
import axios from "axios";

export const fetchResidents = async () => {
  const session = await verifySession();
  if (!session) return null;
  try {
    const response = await axios.get("http://localhost:5000/resident/all", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
