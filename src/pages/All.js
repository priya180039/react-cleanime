import React, { useEffect, useState } from "react";
import { getAllAnime, getSearch } from "../api/Api";
import Header from "../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import AnimeGrid from "../components/AnimeGrid";

const All = () => {
  const [allAnime, setAllAnime] = useState([]);
  const [searchAnime, setSearchAnime] = useState("");
  const [page, setPage] = useState(1);
  const { name } = useParams();
  const navigate = useNavigate();
  //   const limit = 24;

  useEffect(() => {
    const title = document.querySelector("title");
    title.textContent = "Cleanime | All Anime";
    if (!name) {
      getAllAnime().then((res) => setAllAnime(res.data));
    } else {
      getSearch(page, name).then((res) => setAllAnime(res.data));
    }
  }, [name, page]);
  return (
    <div className={`bg-main-bg min-w-screen min-h-screen bg-fixed bg-cover `}>
      <div id="container">
        <Header />
        <div className="pb-5 text-gray-200">
          <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
            <input
              onChange={(e) => {
                setSearchAnime(e.target.value);
              }}
              value={searchAnime}
              name="anime"
              className="w-full p-2 text-zinc-900"
              placeholder="Find anime..."
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate(`/all/${searchAnime}`);
                setSearchAnime("");
              }}
            >
              Search
            </button>
          </div>
          <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
            <div className="flex justify-between">
              <p className="m-4 font-exo text-3xl">
                {!name
                  ? "All Anime"
                  : `Searching for "${name}" from all anime...`}
              </p>
              <Link
                to="/"
                onClick={() => setSearchAnime("")}
                className="m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
              >
                Back
              </Link>
            </div>
            <div className="grid grid-cols-5 overflow-auto pl-4">
              {allAnime &&
                allAnime.map((anime, i) => {
                  return <AnimeGrid key={i} data={anime} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
