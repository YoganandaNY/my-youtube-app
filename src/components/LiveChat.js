import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomMessage } from "../utils/helper";
import { YOUTUBE_LIVE_CHAT } from "../utils/constant";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    getLiveChatMessageList();
    let timer;
    timer = setInterval(() => {
      // API CALL
      //console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(25),
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getLiveChatMessageList = async () => {
    const data = await fetch(YOUTUBE_LIVE_CHAT);
    const json = await data.json();
    //console.log("LIVE.." + json);
  };

  return (
    <>
      <div className="ml-6 pl-5 h-[600px] border border-b-2 w-[420px]  bg-slate-100 rounded-lg">
        <div className=" h-[480px]  overflow-y-scroll flex flex-col-reverse">
          <div className="">
            {chatMessages.map((chat, idx) => (
              <ChatMessage key={idx} name={chat.name} message={chat.message} />
            ))}
          </div>
        </div>
        <div className="my-1 -ml-5 border-b-2 "></div>
        <div>
          <form
            className="my-5"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addMessage({
                  name: "Yogananda",
                  message: liveMessage,
                })
              );
              setLiveMessage("");
            }}
          >
            <input
              type="text"
              className="ml-2 pl-2 pr-32 border border-gray-500"
              placeholder="Say something..."
              value={liveMessage}
              onChange={(e) => {
                setLiveMessage(e.target.value);
              }}
            />
            <button className="m-2 px-2 rounded-sm bg-green-200">Send</button>
          </form>
        </div>
        <div className="-mt-2 -ml-5 border-b-2"></div>
        <div>
          <button className="flex my-1 pl-40 pr-36 py-[3px] text-center font-medium rounded-r-full rounded-l-full hover:bg-gray-200">
            Hide Chat
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
