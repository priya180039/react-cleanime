import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../api/Api";
import Header from "../components/Header";
import GeneralDetail from "../components/GeneralDetail";
import Sinopsis from "../components/Sinopsis";
import VideoTrailer from "../components/VideoTrailer";
import StreamingLinks from "../components/StreamingLinks";

const AnimeDetail = () => {
  const [animeData, setAnimeData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAnimeById(id).then((res) => {
      setAnimeData(res.data);
      console.log(res.data);
    });
  }, [id]);

  return (
    <div className={`bg-main-bg min-w-screen min-h-screen bg-fixed bg-cover `}>
      <div id="container">
        <Header />
        <div id="#top" className="pb-5 text-gray-200">
          {animeData && (
            <>
              <div className="w-7/12 border-2 border-gray-200 bg-zinc-950/60 rounded-md mx-auto mt-10">
                <div className="grid grid-cols-1 overflow-auto pl-4">
                  <GeneralDetail id={id} data={animeData} />
                </div>
              </div>
              <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto">
                <div className="grid grid-cols-1 overflow-auto pl-4">
                  <Sinopsis />
                </div>
              </div>
              <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto">
                <div className="grid grid-cols-1 overflow-auto pl-4">
                  <VideoTrailer />
                </div>
              </div>
              <div className="w-10/12 bg-transparent border-2 border-gray-200 rounded-md mx-auto">
                <div className="grid grid-cols-1 overflow-auto pl-4">
                  <StreamingLinks />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
