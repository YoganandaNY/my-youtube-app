import React, { useEffect } from "react";
import { BASE_YOUTUBE_URL, GOOGLE_API_KEY } from "../utils/constant";

const WatchMoreVideo = ({ videoId }) => {
  useEffect(() => {
    getWatchMoreVideos();
  }, [videoId]);

  const getWatchMoreVideos = async () => {
    const data = await fetch(
      BASE_YOUTUBE_URL +
        `/videos?part=contentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`
    );
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=nSSRLRYasEo%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=" +
        GOOGLE_API_KEY
    );
    const json = await response.json();
    console.log("MoreVideos...", json);
  };
  return (
    <>
      <div>WatchMoreVideo</div>
    </>
  );
};

export default WatchMoreVideo;
