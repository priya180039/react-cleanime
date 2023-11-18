import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeList = (props) => {
  const navigate = useNavigate();
  return (
    <>
      {props.data && (
        <div className="h-fit mr-4 my-0 pb-4 text-center text-lg">
          <div
            onClick={() => navigate(`/anime/${props.data.mal_id}`)}
            className=" bg-gray-200/90 text-zinc-900 rounded-md hover:cursor-pointer"
          >
            <div className="w-full">
              <img
                alt="anime"
                className="animg anime rounded-md"
                src={props.data.images.jpg.large_image_url}
              />
            </div>
            <div className="flex flex-col min-h-[4rem] max-h-[4rem] overflow-hidden px-1 items-center">
              <h1>{props.data.title}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeList;
