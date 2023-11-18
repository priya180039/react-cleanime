import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AnimeList from "../components/AnimeList";
import SearchBar from "../components/SearchBar";
import {
  getAllAnime,
  getSeasonAnime,
  getTopAnime,
  getUpcomingAnime,
} from "../api/Api";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [currentAnime, setCurrentAnime] = useState([]);
  const [upcomingSeason, setUpcomingSeason] = useState([]);
  const [isSearch, setSearch] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    const title = document.querySelector("title");
    title.textContent = "Cleanime";
    const getData = async () => {
      if (!isSearch && !name) {
        const resTop = await getTopAnime();
        if (resTop) {
          setTopAnime(resTop.data);
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 400));

      if (!isSearch && !name) {
        const resSeason = await getSeasonAnime();
        if (resSeason) {
          setCurrentAnime(resSeason.data);
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!isSearch && !name) {
        const resUpcoming = await getUpcomingAnime();
        if (resUpcoming) {
          setUpcomingSeason(resUpcoming.data);
        }
      }
    };
    getData();
  }, [name]);

  return (
    <div className={`bg-main-bg min-w-screen min-h-screen bg-fixed bg-cover `}>
      <div id="container">
        <Header />
        <div className="pb-5 text-gray-200">
          <SearchBar isSearch={isSearch} setSearch={setSearch} />
          {(!isSearch || !name) && (
            <div>
              <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
                <div className="flex justify-between">
                  <p className="m-4 font-exo text-3xl">Top Anime</p>
                  <Link
                    to="/top"
                    className="m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
                  >
                    View More
                  </Link>
                </div>
                <div className="flex overflow-auto pl-4">
                  {topAnime &&
                    topAnime.slice(0, 15).map((anime, i) => {
                      return <AnimeList key={i} data={anime} />;
                    })}
                </div>
              </div>
              <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
                <div className="flex justify-between">
                  <p className="m-4 font-exo text-3xl">Current Season Anime</p>
                  <Link
                    to="/current"
                    className="m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
                  >
                    View More
                  </Link>
                </div>
                <div className="flex overflow-auto pl-4">
                  {currentAnime &&
                    currentAnime.slice(0, 15).map((anime, i) => {
                      return <AnimeList key={i} data={anime} />;
                    })}
                </div>
              </div>
              <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
                <div className="flex justify-between">
                  <p className="m-4 font-exo text-3xl">Upcoming Season Anime</p>
                  <Link
                    to="/upcoming"
                    className="m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
                  >
                    View More
                  </Link>
                </div>
                <div className="flex overflow-auto pl-4">
                  {upcomingSeason &&
                    upcomingSeason.slice(0, 15).map((anime, i) => {
                      return <AnimeList key={i} data={anime} />;
                    })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
