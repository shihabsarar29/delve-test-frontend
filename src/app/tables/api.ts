import axios from "axios";

export const fetchTables = async () => {
  const url = sessionStorage.getItem("url") || "";
  const key = sessionStorage.getItem("key") || "";
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  if (!url || !key) {
    throw new Error("Missing authentication details. Redirecting to login...");
  }

  try {
    const response = await axios.post(`${baseURL}/api/tables`, { url, key });
    return response.data;
  } catch (error) {
    console.error("Error fetching tables:", error);
    throw new Error("Failed to fetch tables.");
  }
};
