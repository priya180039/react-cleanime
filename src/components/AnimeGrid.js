import React from "react";

const AnimeGrid = (props) => {
  return (
    <>
      {props.data && (
        <div className="h-fit mr-4 my-0 pb-4 text-center text-lg">
          <div className=" bg-gray-200/70 text-zinc-900 rounded-md">
            <div className="w-full">
              <img
                alt="anime"
                className="animg rounded-md h-72 max-h-72 w-full object-cover"
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

export default AnimeGrid;
