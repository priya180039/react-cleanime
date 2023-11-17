import axios from "axios";

export const getAllAnime = async () => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/anime/");
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};
