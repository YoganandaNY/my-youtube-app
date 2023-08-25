import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      {/* <div className="font-medium">Live Chat</div>
      <div className="my-2 border-b"></div> */}
      <div className="flex items-center my-3">
        <img
          className="h-6 rounded-full"
          alt="Live-Chat"
          src="https://yt3.ggpht.com/yti/AOXPAcUuFx9XZI68QEHeAliX0dS98brtkK90iS_C6Q=s88-c-k-c0x00ffffff-no-rj"
        />
        <span className="font-medium px-2 text-sm">{name}</span>
        <span className="text-sm">{message}</span>
      </div>
    </>
  );
};

export default ChatMessage;
