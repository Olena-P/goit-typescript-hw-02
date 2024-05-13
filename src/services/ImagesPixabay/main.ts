import axios from "axios";
import { ImageData } from "./entities";

axios.defaults.baseURL = "https://pixabay.com/api";
// axios.defaults.baseURL = process.env.SERVER_BASE_URL;

const apiKey = "40627686-9640a27f07dc80035c86fc9a3";
// const apiKey = process.env.IMAGE_SEARCH_API_KEY;

interface ApiResponse {
  total: number;
  totalHits: number;
  hits: ImageData[];
}

export const main = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    `/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
