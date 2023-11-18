import React from "react";

const GeneralDetail = (props) => {
  return (
    <>
      {props.data && (
        <div className="h-fit mr-4 my-0 pb-4 text-center text-lg">
          <div className="grid grid-cols-2 mt-4 text-gray-200 rounded-md">
            <div className="w-full">
              <img
                alt="anime"
                className="rounded-md w-[95%] object-cover"
                src={props.data.images.jpg.large_image_url}
              />
            </div>
            <div className="w-full flex flex-col text-xl text-left items-center">
              <div className="w-full flex gap-2">
                <h1 className="w-2/5">Title</h1>
                <h1 className="w-3/5">: {props.data.title}</h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-2/5">Title English</h1>
                <h1 className="w-3/5">: {props.data.title_english}</h1>
              </div>
              <div className="w-full flex gap-2">
                <h1 className="w-2/5">Title Japanese</h1>
                <h1 className="w-3/5">: {props.data.title_japanese}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeneralDetail;
