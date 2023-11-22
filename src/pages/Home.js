import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import AnimeList from "../components/AnimeList";
import { BiChevronUpCircle } from "react-icons/bi";
import { getSeasonAnime, getTopAnime, getUpcomingAnime } from "../api/Api";
import { Link } from "react-router-dom";
import { useStatic } from "../features/StaticContext";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const {
    topAnime,
    setTopAnime,
    currentAnime,
    setCurrentAnime,
    upcomingSeason,
    setUpcomingSeason,
  } = useStatic();
  const items = windowSize < 768 ? 7 : 15;

  useLayoutEffect(() => {
    const updateSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    const title = document.querySelector("title");
    title.textContent = "Cleanime";
    const getData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (topAnime.length < 1) {
        getTopAnime().then((res) => {
          if (res) {
            setTopAnime(res.data);
          }
        });
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (currentAnime.length < 1) {
        getSeasonAnime().then((res) => {
          if (res) {
            setCurrentAnime(res.data);
          }
        });
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (upcomingSeason.length < 1) {
        getUpcomingAnime().then((res) => {
          if (res) {
            setUpcomingSeason(res.data);
          }
        });
      }
    };
    getData();
  }, [
    setTopAnime,
    setCurrentAnime,
    setUpcomingSeason,
    topAnime.length,
    currentAnime.length,
    upcomingSeason.length,
  ]);

  return (
    <div
      className={`bg-small-bg md:bg-medium-bg lg:bg-large-bg xl:bg-main-bg min-w-screen min-h-screen bg-fixed bg-cover bg-center`}
    >
      <div id="container">
        <Header />
        <SearchBar />
        <div id="#top" className="pb-5 text-gray-200">
          <div>
            <div className="w-10/12 bg-zinc-950/50 border-2 border-gray-200 rounded-md mx-auto mt-6">
              <div className="hidden sm:flex md:flex lg:flex xl:flex justify-between">
                <p className="m-4 font-exo text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
                  Top Anime
                </p>
                <Link
                  to="/top"
                  className="m-4 font-exo text-lg md:text-xl lg:text-xl xl:text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
                >
                  View More
                </Link>
              </div>
              <div className="flex sm:hidden md:hidden lg:hidden xl:hidden">
                <Link
                  to="/top"
                  className="w-full text-center m-4 p-2 border-2 border-gray-200 rounded-xl font-exo text-xl md:text-3xl lg:text-3xl xl:text-3xl"
                >
                  Open Top Anime
                </Link>
              </div>
              <div className="flex overflow-auto pl-4">
                {topAnime &&
                  topAnime.slice(0, items).map((anime, i) => {
                    return <AnimeList key={i} data={anime} />;
                  })}
              </div>
            </div>
            <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-6">
              <div className="hidden sm:flex md:flex lg:flex xl:flex justify-between">
                <p className="m-4 font-exo text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
                  Current Season Anime
                </p>
                <Link
                  to="/current"
                  className="m-4 font-exo text-lg md:text-xl lg:text-xl xl:text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
                >
                  View More
                </Link>
              </div>
              <div className="flex sm:hidden md:hidden lg:hidden xl:hidden">
                <Link
                  to="/current"
                  className="w-full text-center m-4 p-2 border-2 border-gray-200 rounded-xl font-exo text-xl md:text-3xl lg:text-3xl xl:text-3xl"
                >
                  Open Current Season Anime
                </Link>
              </div>
              <div className="flex overflow-auto pl-4">
                {currentAnime &&
                  currentAnime.slice(0, items).map((anime, i) => {
                    return <AnimeList key={i} data={anime} />;
                  })}
              </div>
            </div>
            <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-6">
              <div className="hidden sm:flex md:flex lg:flex xl:flex justify-between">
                <p className="m-4 font-exo text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
                  Upcoming Season Anime
                </p>
                <Link
                  to="/upcoming"
                  className="m-4 font-exo text-lg md:text-xl lg:text-xl xl:text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
                >
                  View More
                </Link>
              </div>
              <div className="flex sm:hidden md:hidden lg:hidden xl:hidden">
                <Link
                  to="/upcoming"
                  className="w-full text-center m-4 p-2 border-2 border-gray-200 rounded-xl font-exo text-xl md:text-3xl lg:text-3xl xl:text-3xl"
                >
                  Open Upcoming Season Anime
                </Link>
              </div>
              <div className="flex overflow-auto pl-4">
                {upcomingSeason &&
                  upcomingSeason.slice(0, items).map((anime, i) => {
                    return <AnimeList key={i} data={anime} />;
                  })}
              </div>
            </div>
          </div>
          <a href="#top">
            <BiChevronUpCircle className="fixed right-1.5 sm:right-4 md:right-4 lg:right-4 xl:right-4 bottom-4 text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl text-gray-200 bg-transparent" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
