import React, { useEffect, useState } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {
  GOOGLE_API_KEY,
  YOUTUBE_COMMENT_API,
  YOUTUBE_MOST_POPULAR_BASE,
} from "../utils/constant";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoDetail from "./VideoDetail";
import WatchMoreVideo from "./WatchMoreVideo";
import Comments from "./Comments";

const WatchPage = () => {
  const [watchVideos, setWatchVideos] = useState([]);

  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getWatchVideoDetails();
  }, [videoId]);

  const getWatchVideoDetails = async () => {
    const data = await fetch(
      YOUTUBE_MOST_POPULAR_BASE + videoId + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();

    setWatchVideos(json.items);
  };

  return (
    <>
      <div className="px-[6px] py-5">
        <div className="flex">
          <iframe
            width="853"
            height="480"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <LiveChat />
        </div>
        <div className="flex">
          <div>
            {watchVideos?.map((watch) => (
              <>
                <VideoDetail key={watch?.id} videoDetails={watch} />
                <Comments
                  key={watch?.etag}
                  videoId={videoId}
                  commentCount={watch?.statistics?.commentCount}
                />
              </>
            ))}
          </div>
          <div className="m-6">
            <WatchMoreVideo videoId={videoId} />
          </div>
        </div>

        {/* <CommentsContainer /> */}
      </div>
    </>
  );
};

export default WatchPage;
