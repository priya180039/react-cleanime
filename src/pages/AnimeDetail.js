import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnimeById } from "../api/Api";
import Header from "../components/Header";
import GeneralDetail from "../components/GeneralDetail";
import Sinopsis from "../components/Sinopsis";
import VideoTrailer from "../components/VideoTrailer";
import StreamingLinks from "../components/StreamingLinks";
import { BiChevronLeft, BiChevronUpCircle } from "react-icons/bi";

const AnimeDetail = () => {
  const [animeData, setAnimeData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getAnimeById(id).then((res) => {
      if (res) {
        setAnimeData(res.data);
      }
    });
  }, [id]);

  return (
    <div
      className={`bg-small-bg md:bg-medium-bg lg:bg-large-bg xl:bg-main-bg min-w-screen min-h-screen bg-fixed bg-cover bg-center`}
    >
      <div id="container">
        <Header />
        <div id="#top" className="pb-5 text-gray-200">
          {animeData && Object.keys(animeData).length > 0 && (
            <>
              <div className="w-[80%] md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto mt-10">
                <Link to="/" className="flex items-center w-fit">
                  <BiChevronLeft className=" text-3xl text-gray-200" />
                  <p>Back</p>
                </Link>
              </div>
              <div className="w-[80%] md:w-10/12 lg:w-9/12 xl:w-8/12 border-2 border-gray-200 bg-zinc-950/50 rounded-md mx-auto mt-1">
                <div className="grid grid-cols-1 overflow-auto">
                  <GeneralDetail id={id} data={animeData} />
                </div>
              </div>
              <div className="w-[80%] md:w-10/12 lg:w-9/12 xl:w-8/12 border-2 border-gray-200 bg-zinc-950/60 text-gray-200 rounded-ss-md rounded-se-md mx-auto mt-4">
                <div className="grid grid-cols-1 overflow-auto">
                  <Sinopsis id={id} data={animeData} />
                </div>
              </div>
              <div className="w-[80%] md:w-10/12 lg:w-9/12 xl:w-8/12 border-2 border-t-0 border-gray-200 bg-zinc-950/60 mx-auto">
                <div className="grid grid-cols-1 overflow-auto">
                  <VideoTrailer id={id} data={animeData} />
                </div>
              </div>
              <div className="w-[80%] md:w-10/12 lg:w-9/12 xl:w-8/12 border-2 border-t-0 border-gray-200 bg-zinc-950/60 rounded-es-md rounded-ee-md mx-auto">
                <div className="grid grid-cols-1 overflow-auto">
                  <StreamingLinks id={id} data={animeData} />
                </div>
              </div>
            </>
          )}
        </div>
        <a href="#top">
          <BiChevronUpCircle className="fixed right-4 bottom-4 text-4xl text-gray-200 bg-transparent" />
        </a>
      </div>
    </div>
  );
};

export default AnimeDetail;
