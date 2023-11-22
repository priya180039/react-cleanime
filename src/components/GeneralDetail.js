import React from "react";
import { BiHeart } from "react-icons/bi";

const GeneralDetail = (props) => {
  return (
    <>
      {props.data && (
        <div className="h-fit xl:mr-4 lg:mr-4 md:mr-4 my-0 pb-4 text-center text-lg">
          <div className="grid md:py-2 lg:py-2 xl:py-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-4 text-gray-200 rounded-md">
            <div className="w-full py-2">
              <img
                alt="anime"
                className="rounded-md xl:w-[85%] lg:w-[85%] md:w-[85%] w-11/12 mx-auto object-cover"
                src={props.data.images.jpg.large_image_url}
              />
            </div>
            <div className="w-11/12 md:w-full lg:w-full xl:w-full flex flex-col text-xl text-left px-3 sm:px-6 md:px-0 lg:px-0 xl:px-0 pt-2 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 items-center">
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Anime Ranking
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  #{props.data.rank}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Score
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.score}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Title
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.title}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Title English
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.title_english}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Title Japanese
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.title_japanese}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Type
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.type}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Season
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.season[0].toUpperCase() +
                    props.data.season.slice(1) +
                    " " +
                    props.data.year}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Status
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.airing ? "On Going" : "Finished"}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Total Episodes
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.episodes}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Genres
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.genres.map((genre, i) => {
                    let gen = genre.name;
                    if (i > 0) {
                      gen = ", " + genre.name;
                    }
                    return gen;
                  })}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Source
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.source}
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-[49%] md:w-[39%] lg:w-[39%] xl:w-[39%]">
                  Movie Rating
                </h1>
                <h1 className="w-[1%]">:</h1>
                <h1 className="w-6/12 md:w-3/5 lg:w-3/5 xl:w-3/5">
                  {props.data.rating}
                </h1>
              </div>
              <div className="w-full flex gap-2 items-center">
                <h1 className="w-fit">
                  <BiHeart className="w-full text-gray-200" />
                </h1>
                <h1 className="w-fit">{props.data.favorites}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeneralDetail;
