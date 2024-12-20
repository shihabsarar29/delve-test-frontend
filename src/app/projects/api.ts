import axios from "axios";

export const fetchProjects = async () => {
  const token = sessionStorage.getItem("token") || "";
  const url = sessionStorage.getItem("url") || "";
  const key = sessionStorage.getItem("key") || "";
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  if (!token || !url || !key) {
    throw new Error("Missing authentication details. Redirecting to login...");
  }

  try {
    const response = await axios.post(`${baseURL}/api/projects`, {
      url,
      key,
      token,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects.");
  }
};
