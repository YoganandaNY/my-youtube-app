import React from "react";
import moment from "moment";

const VideoCard = ({ info }) => {
  // const { snippet, statistics } = info;
  // const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="m-2 w-[308px] py-4 hover:cursor-pointer rounded-">
      <img
        alt="Thumnail"
        className=" w-[460px] rounded-2xl"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <ul>
        <li>{}</li>
        <li className="font-medium my-2">{info?.snippet?.title}</li>
        <li className="my-2 text-sm">{info?.snippet?.channelTitle}</li>
        <li className="text-sm my-2">
          <span>
            {Intl.NumberFormat("en", { notation: "compact" }).format(
              info?.statistics?.viewCount
            )}{" "}
            views
          </span>
          <span> • </span>
          <span>{moment(info?.snippet?.publishedAt).fromNow()}</span>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
