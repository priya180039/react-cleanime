import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ReactPlayer from "react-player";

const VideoTrailer = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {props.data && (
        <>
          <div
            onClick={() => setShow(!show)}
            className="my-0 pb-4 pl-6 pr-6 hover:bg-gray-200 hover:text-zinc-950/90 hover:cursor-pointer text-lg"
          >
            <div className="flex justify-between items-center mt-4 text-xl rounded-md">
              <div className="w-fit py-0">Trailer</div>
              {show ? (
                <BiChevronUp className="w-fit py-0 scale-150 items-end justify-end" />
              ) : (
                <BiChevronDown className="w-fit py-0 scale-150 items-end justify-end" />
              )}
            </div>
          </div>
          <div
            className={`border-[1px] border-gray-200 w-full transform transition-all duration-300 ease-in-out ${
              show ? "" : "hidden"
            }`}
          ></div>
          <div
            className={`transform transition-all duration-500 ease-in-out ${
              show
                ? "opacity-100 h-[27.85rem] overflow-hidden"
                : "overflow-hidden h-0 opacity-0 pointer-events-none"
            }`}
          >
            <ReactPlayer
              url={props.data.trailer.url}
              width="100%"
              height="28rem"
              controls={true}
              playing={show}
            />
          </div>
        </>
      )}
    </>
  );
};

export default VideoTrailer;
