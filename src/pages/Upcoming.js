import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import AnimeGrid from "../components/AnimeGrid";
import { getUpcomingAnime } from "../api/Api";
import { BiChevronUpCircle } from "react-icons/bi";
// import { FaSpinner } from "react-icons/fa";

const Upcoming = () => {
  const [upcomingSeason, setUpcomingSeason] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  //   const limit = 24;

  useEffect(() => {
    try {
      if (upcomingSeason.length < 1) {
        getUpcomingAnime().then((res) => {
          if (res) setUpcomingSeason(res.data);
        });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }, [setUpcomingSeason, upcomingSeason.length]);

  useEffect(() => {
    const title = document.querySelector("title");
    title.textContent = "Cleanime | Upcoming Anime";

    const reFetch = () => {
      try {
        setLoading(true);
        if (page > 1) {
          getUpcomingAnime(page).then((res) => {
            if (res)
              setUpcomingSeason((prevList) => [...prevList, ...res.data]);
          });
        }
      } catch (error) {
        console.log(error.response.data);
      } finally {
        setLoading(false);
      }
    };
    reFetch();
  }, [page, setUpcomingSeason]);

  useEffect(() => {
    const handleScroll = () => {
      const reachBottom =
        Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight;

      if (reachBottom && !isLoading) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  return (
    <div className={`bg-main-bg min-w-screen min-h-screen bg-fixed bg-cover `}>
      <div id="container">
        <Header />
        <div className="pb-5 text-gray-200">
          <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
            <div className="flex justify-between">
              <p className="m-4 font-exo text-3xl">Upcoming Anime</p>
              <Link
                to="/"
                className="m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
              >
                Back
              </Link>
            </div>
            <div className="grid grid-cols-5 overflow-auto pl-4">
              {upcomingSeason.length > 0 &&
                upcomingSeason.map((anime, i) => {
                  return <AnimeGrid key={i} data={anime} />;
                })}
            </div>
            {/* <div>
                <FaSpinner />
              </div> */}
          </div>
        </div>
        <a href="#top">
          <BiChevronUpCircle className="fixed right-4 bottom-4 text-4xl text-gray-200 bg-zinc-950/50" />
        </a>
      </div>
    </div>
  );
};

export default Upcoming;
