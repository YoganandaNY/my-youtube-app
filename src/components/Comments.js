import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENT_API } from "../utils/constant";
import { MdOutlineSort } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { CommentData } from "./CommentsContainer";

const Comments = ({ videoId, commentCount }) => {
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    getCommentList();
  }, [videoId]);

  const getCommentList = async (nextPageToken = "") => {
    const data = await fetch(
      YOUTUBE_COMMENT_API +
        `${videoId}&textFormat=plainText&pageToken=${nextPageToken ?? ""}`
    );
    const json = await data.json();

    setComments(json.items);
  };

  return (
    <>
      <div className="comment w-[853px] my-12">
        <div className="flex gap-8 items-center mb-4 ">
          <div className="comment-count font-medium ">
            {parseInt(commentCount).toLocaleString()} Comments
          </div>
          <div className="sort flex gap-2 cursor-pointer items-center">
            <MdOutlineSort size="1.5rem" />
            <span className="font-semibold text-sm">Sort by</span>
          </div>
        </div>
        <div className="add_comment text-sm flex items-center  gap-4 my-8">
          <div className="user_pic">
            <img
              className="h-[50px] p-2 rounded-full hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
              alt="comment"
              src="https://yt3.ggpht.com/yti/AOXPAcUuFx9XZI68QEHeAliX0dS98brtkK90iS_C6Q=s88-c-k-c0x00ffffff-no-rj"
            />
          </div>
          <div className="comment_input w-full ">
            <input
              className="border-b dark:border-white/50 w-full h-8 focus:outline-none py-2 focus:border-black focus:border-b-2 dark:bg-zinc-900"
              type="text"
              placeholder="Add a comment..."
              onFocus={() => {
                setAddComment(true);
              }}
              onChange={(e) => {
                setActive(e.target.value);
              }}
            />
            {addComment && (
              <div className="flex justify-end gap-4 pt-2 font-semibold">
                <button className="hover:bg-zinc-200 dark:hover:bg-zinc-700 px-4 py-2 rounded-full">
                  Cancel
                </button>
                <button
                  className="bg-gray-200 px-4 py-2 rounded-3xl"
                  style={{
                    backgroundColor: active ? "#005ce6" : "#e6e6e6",
                    color: active ? "white" : "#808080",
                  }}
                >
                  Comment
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="comments">
          {comments?.map((comment) => (
            <CommentData key={comment.id} commentData={comment} />
          ))}
        </div>
        <button className="w-full font-bold bg-gray-200 dark:bg-zinc-700 rounded-3xl px-4 py-1">
          Show More
        </button>
      </div>
    </>
  );
};

export default Comments;
