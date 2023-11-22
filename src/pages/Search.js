import React, { Suspense, useEffect, useState } from "react";
import { getSearch } from "../api/Api";
import { Link, useParams } from "react-router-dom";
import AnimeGrid from "../components/AnimeGrid";
import Header from "../components/Header";
import { FaSpinner } from "react-icons/fa";
import SearchBar from "../components/SearchBar";
import { BiChevronLeft, BiChevronUpCircle } from "react-icons/bi";

const Search = () => {
  const [allAnime, setAllAnime] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isNext, setNext] = useState(false);
  const [currName, setCurrName] = useState("");
  const { name } = useParams();
  //   const limit = 24;

  useEffect(() => {
    if (allAnime.length < 1 && page === 1) {
      const res = async () => {
        await getSearch(page, name).then((response) => {
          if (response) {
            setAllAnime(response.data);
            setNext(response.pagination.has_next_page);
          }
        });
      };
      res();
    }
  }, [name, page, allAnime.length]);

  useEffect(() => {
    if (currName !== name) {
      setAllAnime("");
      setPage(1);
      setCurrName(name);
    }
    const reFetch = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (page > 1 && currName === name) {
          getSearch(page, name).then((res) => {
            if (res) {
              setAllAnime((prevList) => [...prevList, ...res.data]);
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
  }, [name, page, currName]);

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
        <div className="w-10/12 mx-auto">
          <Link
            to="/"
            className="w-fit flex items-center font-exo text-xl text-gray-200 py-1 mt-10
             transform transition-all ease-in-out duration-200"
          >
            <BiChevronLeft className="text-2xl mt-1" />
            <p>Back</p>
          </Link>
        </div>
        <SearchBar />
        <div className="pb-5 text-gray-200">
          <div className="w-10/12 border-2 border-gray-200 bg-zinc-950/50 rounded-md mx-auto mt-6">
            <div className="flex justify-between">
              <p className="m-4 font-exo text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
                {!name
                  ? "All Anime"
                  : `Searching for "${name}" from all anime...`}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-auto pl-4">
              {allAnime.length > 0 &&
                allAnime.map((anime, i) => {
                  return (
                    <Suspense key={i}>
                      <AnimeGrid data={anime} />
                    </Suspense>
                  );
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

export default Search;
