import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SearchVideoPhone = () => {
  const [message, setMessage] = useState("");

  const commands = [
    {
      command: "reset",
      callback: () => resetTranscript(),
    },
    {
      command: "shut up",
      callback: () => setMessage("I wasn't talking."),
    },
    {
      command: "Hello",
      callback: () => setMessage("Hi there!"),
    },
  ];

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("Got final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });
  };

  return (
    <div>
      <div>
        <span className="p-2 m-2  bg-gray-200 rounded-full">
          listening: {listening ? "on" : "off"}
        </span>
        {/* <div>
          <button
            type="button"
            className="p-2 m-2  bg-gray-200 rounded-full"
            onClick={resetTranscript}
          >
            Reset
          </button>
          <button
            type="button"
            className="p-2 m-2  bg-gray-200 rounded-full"
            onClick={listenContinuously}
          >
            Listen
          </button>
          <button
            type="button"
            className="p-2 m-2 bg-gray-200 rounded-full"
            onClick={SpeechRecognition.stopListening}
          >
            Stop
          </button>
        </div> */}
      </div>
      {/* <div>{message}</div> */}
      <div>
        <span>{transcript}</span>
      </div>
    </div>
  );
};

export default SearchVideoPhone;
