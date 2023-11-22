import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { SiCrunchyroll, SiNetflix } from "react-icons/si";

const StreamingLinks = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {props.data && (
        <>
          <div
            onClick={() => setShow(!show)}
            className="h-fit my-0 pb-4 pl-6 pr-6 hover:bg-gray-200 hover:text-zinc-950/90 hover:cursor-pointer text-lg"
          >
            <div className="flex justify-between items-center mt-4 text-xl rounded-md">
              <div className="w-fit py-0">Streaming Links</div>
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
                ? "translate-y-0 opacity-100 h-[100%]"
                : "-translate-y-[10%] overflow-hidden h-0 opacity-0"
            }`}
          >
            {props.data.streaming
              .filter(
                (platform) =>
                  platform.name === "Netflix" || platform.name === "Crunchyroll"
              )
              .map((platform) => {
                return (
                  <div className="my-4 px-6" key={platform.url}>
                    {platform.name === "Netflix" ? (
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex text-lg items-center"
                      >
                        <SiCrunchyroll className="pr-2 text-2xl" />
                        {platform.name}
                      </a>
                    ) : (
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex text-lg items-center"
                      >
                        <SiNetflix className="pr-2 text-2xl" />
                        {platform.name}
                      </a>
                    )}
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default StreamingLinks;
