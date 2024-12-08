"use server";
import { verifySession } from "@/lib/dal";
import axios from "axios";

export const dashboard_auth = async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const fetch = await axios.get("http://localhost:5000/resident/all", {
      withCredentials: true,
    });
    console.log("Dashboard: ", fetch.data);
    return fetch;
  } catch (error) {
    console.log(error);
  }
};
