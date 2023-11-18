import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import AnimeGrid from "../components/AnimeGrid";
import { getSeasonAnime } from "../api/Api";
// import { FaSpinner } from "react-icons/fa";

const Upcoming = () => {
  const [upcomingSeason, setUpcomingSeason] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  //   const limit = 24;

  useEffect(() => {
    try {
      if (upcomingSeason.length < 1) {
        getSeasonAnime().then((res) => setUpcomingSeason(res.data));
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
          getSeasonAnime(page).then((res) =>
            setUpcomingSeason((prevList) => [...prevList, ...res.data])
          );
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
            {/* {isLoading && (
              <div>
                <FaSpinner />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
