import React, { useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { TfiShare, TfiDownload, TfiMoreAlt } from "react-icons/tfi";
import moment from "moment";

const VideoDetail = ({ videoDetails }) => {
  const [desc, setDesc] = useState(true);
  const [showButton, setShowButton] = useState("Show More");

  const { snippet, statistics } = videoDetails;

  useEffect(() => {
    //set description
    if (snippet?.description.length > 250) {
      setDesc(snippet?.description.slice(0, 250) + "...");
    } else {
      setDesc(snippet?.description);
    }
  }, [videoDetails]);

  const toggleShowButton = () => {
    if (showButton === "Show More") {
      setDesc(snippet?.description);
      setShowButton("Show Less");
    } else {
      setDesc(snippet?.description?.slice(0, 250) + " ...");
      setShowButton("Show More");
    }
  };

  return (
    <div>
      <div className="-mt-28 ">
        <div className="font-semibold text-lg">{snippet?.title}</div>
        <div className="flex items-center flex-wrap gap-2 my-1 text-sm">
          <div className="flex items-center pr-[15rem]">
            <div className="font-medium ">{snippet?.channelTitle}</div>
            <span>
              <button className="mx-6 my-2 px-4 p-2 bg-black text-white rounded-full">
                Subscribe
              </button>
            </span>
          </div>
          <div className="button-wrapper flex bg-gray-200 rounded-2xl p-2">
            <button className="flex gap-1 items-center pr-2">
              <div className="">
                <BiLike
                  size="1.2rem"
                  className="text-gray-600 dark:text-white "
                />
              </div>
              <div className=" ">
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  statistics?.likeCount
                )}
              </div>
            </button>
            <button className="cursor-pointer">
              <div className="border-l-2 border-black/20 dark:border-white/50 pl-2">
                <BiDislike
                  size="1.2rem"
                  className="text-gray-600 dark:text-white"
                />
              </div>
            </button>
          </div>
          <button className="share flex items-center gap-2 bg-gray-200 dark:bg-zinc-700 rounded-2xl p-2">
            <TfiShare />
            <span>Share</span>
          </button>
          <button className="download flex items-center justify-center gap-2 bg-gray-200 dark:bg-zinc-700  rounded-2xl p-2">
            <TfiDownload />
            <span>Download</span>
          </button>
          <button className="more flex items-center gap-2 bg-gray-200 rounded-2xl p-2 dark:bg-zinc-700  ">
            <TfiMoreAlt />
          </button>
        </div>
      </div>
      <div className="w-[853px] border border-b-2 bg-gray-200 rounded-md">
        <div className="m-2 flex">
          <div className="font-semibold">
            {Intl.NumberFormat("en", { notation: "compact" }).format(
              statistics?.viewCount
            )}{" "}
            views
          </div>
          <div className="mx-3 font-semibold">
            {moment(snippet?.publishedAt).fromNow()}
          </div>
        </div>
        <div className="m-2 whitespace-pre-wrap break-words">
          {desc}
          {snippet?.description.length > 250 && (
            <button
              className="my-2 font-bold block text-sm"
              onClick={toggleShowButton}
            >
              {showButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
