import axios from "axios";

export const getAllAnime = async (page = 1) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?limit=15`);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getSearch = async (page = 1, searchAnime) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime?page=${page}&q=${searchAnime}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getTopAnime = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/top/anime?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getSeasonAnime = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/seasons/now?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getUpcomingAnime = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://api.jikan.moe/v4/seasons/upcoming?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};
