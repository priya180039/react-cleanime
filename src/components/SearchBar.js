import React, { useEffect, useState } from "react";
import { getAllAnime, getSearch } from "../api/Api";
import { Link, useNavigate, useParams } from "react-router-dom";
import AnimeGrid from "./AnimeGrid";

const All = (props) => {
  const [allAnime, setAllAnime] = useState([]);
  const [searchAnime, setSearchAnime] = useState("");
  const [page, setPage] = useState(1);
  const { name } = useParams();
  const navigate = useNavigate();
  //   const limit = 24;

  useEffect(() => {
    const title = document.querySelector("title");
    title.textContent = "Cleanime | All Anime";
    if (name && props.isSearch) {
      const res = async () => {
        await getSearch(page, name).then((response) => {
          if (response) setAllAnime(response.data);
        });
      };
      res();
    }

    window.addEventListener("popstate", props.setSearch(true));

    return () => {
      window.removeEventListener("popstate", props.setSearch(true));
    };
  }, [name, page, props]);
  return (
    <div className="pb-5 text-gray-200">
      <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
        <input
          onChange={(e) => {
            setSearchAnime(e.target.value);
          }}
          value={searchAnime}
          name="anime"
          className="w-full p-2 bg-zinc-900/50 border-b-2 border-b-gray-200 focus:bg-gray-200 text-zinc-900"
          placeholder="Find anime..."
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.setSearch(true);
            navigate(`/all/${searchAnime}`);
            setSearchAnime("");
          }}
          className="w-full p-2 hover:bg-gray-50/10"
        >
          Search
        </button>
      </div>
      {name && props.isSearch && (
        <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto mt-10">
          <div className="flex justify-between">
            <p className="m-4 font-exo text-3xl">
              {!name
                ? "All Anime"
                : `Searching for "${name}" from all anime...`}
            </p>
            <Link
              to="/"
              onClick={() => {
                setSearchAnime("");
                props.setSearch(false);
              }}
              className="m-4 font-exo text-xl bg-gray-200 text-zinc-900 p-1 px-2 rounded-xl
              hover:bg-sky-500 hover:text-gray-200 transform transition-all ease-in-out duration-200"
            >
              Reset Search
            </Link>
          </div>
          <div className="grid grid-cols-5 overflow-auto pl-4">
            {allAnime.length > 0 &&
              allAnime.map((anime, i) => {
                return <AnimeGrid key={i} data={anime} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default All;
