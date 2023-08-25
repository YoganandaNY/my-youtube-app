import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_DATA_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  //console.log("videos", videos);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_DATA_API);
    const json = await data.json();
    //console.log("Get Videos.....", json.items[1]);
    setVideos(json?.items);
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link key={video?.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
