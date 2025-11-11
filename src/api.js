import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

export async function getTrips() {
  try {
    const response = await api.get("/trips");
    return response.data;
  } catch (error) {
    console.error("Error fetching trips:", error);
    return [];
  }
}