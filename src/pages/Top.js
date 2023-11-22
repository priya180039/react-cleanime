import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import AnimeGrid from "../components/AnimeGrid";
import { getTopAnime } from "../api/Api";
import { BiChevronLeft, BiChevronUpCircle } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";

const Top = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [page, setPage] = useState(1);
  const [isNext, setNext] = useState(false);
  const [isLoading, setLoading] = useState(false);
  //   const limit = 24;

  useEffect(() => {
    const title = document.querySelector("title");
    title.textContent = "Cleanime | Top Anime";
    try {
      if (topAnime.length < 1) {
        getTopAnime().then((res) => {
          if (res) {
            setTopAnime(res.data);
            setNext(res.pagination.has_next_page);
          }
        });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }, [setTopAnime, topAnime.length]);

  useEffect(() => {
    const title = document.querySelector("title");
    title.textContent = "Cleanime | Top Anime";

    const reFetch = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (page > 1 && page < 5) {
          getTopAnime(page).then((res) => {
            if (res) {
              setTopAnime((prevList) => [...prevList, ...res.data]);
              setNext(res.pagination.has_next_page);
              setLoading(false);
            }
          });
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error.response.data);
      }
    };
    reFetch();
  }, [page, setTopAnime]);

  useEffect(() => {
    const handleScroll = () => {
      const reachBottom =
        Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight;

      if (reachBottom && !isLoading && isNext) {
        setPage((prevPage) => prevPage + 1);
        setLoading(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, isNext]);

  return (
    <div
      className={`bg-small-bg md:bg-medium-bg lg:bg-large-bg xl:bg-main-bg min-w-screen min-h-screen bg-fixed bg-cover bg-center`}
    >
      <div id="container">
        <Header />
        <div className="pb-5 text-gray-200">
          <div className="w-10/12 mx-auto">
            <Link
              to="/"
              className="w-fit flex items-center sm:hidden md:hidden lg:hidden xl:hidden font-exo text-xl text-gray-200 py-1 mt-10
             transform transition-all ease-in-out duration-200"
            >
              <BiChevronLeft className="text-2xl mt-1" />
              <p>Back</p>
            </Link>
          </div>
          <div className="w-10/12 border-2 border-gray-200 bg-zinc-950/50 rounded-md mx-auto xl:mt-10 lg:mt-10 md:mt-10 sm:mt-10">
            <div className="flex justify-between">
              <p className="m-4 font-exo text-3xl">Top 100 Anime</p>
              <Link
                to="/"
                className="hidden sm:block md:block lg:block xl:block m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
              >
                Back
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-auto pl-4">
              {topAnime.length > 0 &&
                topAnime.map((anime, i) => {
                  return <AnimeGrid key={i} data={anime} />;
                })}
            </div>
            {isLoading && (
              <FaSpinner className="text-4xl mx-auto mb-4 animate-spin" />
            )}
          </div>
        </div>
        <a href="#top">
          <BiChevronUpCircle className="fixed right-1.5 sm:right-3 md:right-4 lg:right-4 xl:right-4 bottom-4 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl text-gray-200 bg-transparent" />
        </a>
      </div>
    </div>
  );
};

export default Top;
