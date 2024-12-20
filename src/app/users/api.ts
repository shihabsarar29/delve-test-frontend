import axios from "axios";

export const fetchUsers = async () => {
  const url = sessionStorage.getItem("url") || "";
  const key = sessionStorage.getItem("key") || "";
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  if (!url || !key) {
    throw new Error("Missing authentication details. Redirecting to login...");
  }

  try {
    const response = await axios.post(`${baseURL}/api/users`, {
      url,
      key,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users.");
  }
};
