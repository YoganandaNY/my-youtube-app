import { useEffect } from "react";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_SEARCH_API } from "../utils/constant";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import TimeAgo from "react-timeago";

const SearchVideoContainer = () => {
  const [searchParams] = useSearchParams();
  const [searchVideos, setSearchVideos] = useState([]);

  const searchQuery = searchParams.get("q");

  useEffect(() => {
    getSearchedVideoList();
  }, [searchQuery]);

  const getSearchedVideoList = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_SEARCH_API + searchQuery + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();

    setSearchVideos(json.items);
  };

  return !searchVideos ? null : (
    <div className="">
      <div className="m-2 px-2 py-1 font-medium text-lg border-b-2 w-full">
        Searched for{" "}
        <span className="italic text-red-500">
          {searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)}
        </span>
      </div>
      <div>
        {searchVideos?.map(
          (item) =>
            item?.id?.kind === "youtube#video" && (
              <Link
                key={item?.id?.videoId}
                to={"/watch?v=" + item?.id?.videoId}
              >
                <SearchedVideos key={item?.id?.videoId} videoInfo={item} />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export const SearchedVideos = ({ videoInfo }) => {
  const { snippet } = videoInfo;
  const { thumbnails, publishedAt, channelTitle, description, title } = snippet;
  return (
    <div className="cursor-pointer">
      <div className="flex">
        <div className="">
          <img
            className="my-2 p-2 rounded-2xl"
            alt="video"
            src={thumbnails?.medium?.url}
          />
        </div>
        <div className="my-4 px-4">
          <p className="font-medium text-lg mb-2 line-clamp-2">{title}</p>
          <p className="text-base font-semibold my-2">{channelTitle}</p>
          <span className="text-sm font-semibold">
            <TimeAgo date={publishedAt} />
          </span>
          <p className="my-4 text-slate-800 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoContainer;
