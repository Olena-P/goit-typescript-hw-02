import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";
const apiKey = process.env.IMAGE_SEARCH_API_KEY;

export const getImg = async (query: string, page: number) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
