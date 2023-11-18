import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AnimeList from "../components/AnimeList";
import {
  getAllAnime,
  getSeasonAnime,
  getTopAnime,
  getUpcomingAnime,
} from "../api/Api";
import { Link } from "react-router-dom";

const Home = () => {
  const [allAnime, setAllAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [currentSeason, setCurrentSeason] = useState([]);
  const [upcomingSeason, setUpcomingSeason] = useState([]);

  useEffect(() => {
    const title = document.querySelector("title");
    title.textContent = "Cleanime";
    const getData = async () => {
      const resAll = await getAllAnime();
      if (resAll) {
        setAllAnime(resAll.data);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const resTop = await getTopAnime();
      if (resTop) {
        setTopAnime(resTop.data);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const resSeason = await getSeasonAnime();
      if (resSeason) {
        setCurrentSeason(resSeason.data);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const resUpcoming = await getUpcomingAnime();
      if (resUpcoming) {
        setUpcomingSeason(resUpcoming.data);
      }
    };
    getData();
  }, []);

  return (
    <div className={`bg-main-bg min-w-screen min-h-screen bg-fixed bg-cover `}>
      <div id="container">
        <Header />
        <div className="pb-5 text-gray-200">
          <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
            <div className="flex justify-between">
              <p className="m-4 font-exo text-3xl">All Anime</p>
              <Link
                to="/all"
                className="m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
              >
                View More
              </Link>
            </div>
            <div className="flex overflow-auto pl-4">
              {allAnime &&
                allAnime.map((anime, i) => {
                  return <AnimeList key={i} data={anime} />;
                })}
            </div>
          </div>
          <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
            <div className="flex justify-between">
              <p className="m-4 font-exo text-3xl">Top Anime</p>
              <Link
                className="m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
              >
                View More
              </Link>
            </div>
            <div className="flex overflow-auto pl-4">
              {topAnime &&
                topAnime.map((anime, i) => {
                  return <AnimeList key={i} data={anime} />;
                })}
            </div>
          </div>
          <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
            <div className="flex justify-between">
              <p className="m-4 font-exo text-3xl">Current Season Anime</p>
              <Link
                className="m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
              >
                View More
              </Link>
            </div>
            <div className="flex overflow-auto pl-4">
              {currentSeason &&
                currentSeason.map((anime, i) => {
                  return <AnimeList key={i} data={anime} />;
                })}
            </div>
          </div>
          <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
            <div className="flex justify-between">
              <p className="m-4 font-exo text-3xl">Upcoming Season Anime</p>
              <Link
                className="m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
              >
                View More
              </Link>
            </div>
            <div className="flex overflow-auto pl-4">
              {upcomingSeason &&
                upcomingSeason.map((anime, i) => {
                  return <AnimeList key={i} data={anime} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
