import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { toggleMenu } from "../utils/appSlice";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import video from "../assets/Img/add-video.png";
import hamburg from "../assets/Img/hamburg.png";
import logo from "../assets/Img/logo.png";
import notification from "../assets/Img/notification.png";
import search from "../assets/Img/search.png";
import { Link } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";
import SearchVideoPhone from "./SearchVideoPhone";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const inputRef = useRef();

  useEffect(() => {
    // Make an api call every key press
    // but if the difference between 2 API calls is <200ms
    // decline the API call(didn't call API)
    const timer = setTimeout(() => {
      /**
       *
       * searchCache = {
       *    "iphone": ["iphone", "iphone11"]
       * }
       * searchQuery = iphone
       */
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // Update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  /**
   *
   * key - i
   * - render the component
   * - useEffect()
   * - start timer => make api call after 200 ms
   *
   *
   * key - ip
   * - destroy the component(useEffect return method)
   * - re-render component
   * - useEffect()
   * - start timer => make api call after 200 ms (we can call new timer)
   *
   *
   */

  const dispatch = useDispatch();

  const toggleHandlerMenu = () => {
    dispatch(toggleMenu());
  };

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition();

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
  const handleListen = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });
    if (listening) {
      SpeechRecognition.stopListening();
    }
  };

  return (
    <div className="grid grid-flow-col p-2 h-auto items-center shadow-lg bg-gray-100 sticky top-0">
      <div className="flex col-span-1 items-center hover:cursor-pointer">
        <img
          className="h-[38px] mx-2 p-2 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          alt="hamburger-menu"
          src={hamburg}
          onClick={() => {
            toggleHandlerMenu();
          }}
        />
        <a href="/">
          <img className="h-[24px]" src={logo} alt="Youtube-Logo" />
        </a>
      </div>
      <div className="col-span-3"></div>
      <div className="flex items-center">
        {!listening && (
          <div className="">
            <input
              type="text"
              className="border border-gray-400 py-2 w-[30rem] pl-8 rounded-l-full"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <Link key={"id" + searchQuery} to={"/search?q=" + searchQuery}>
              <button className="p-2 border bg-gray-50 border-l-0  border-slate-400 rounded-tr-full rounded-br-full align-top hover:bg-slate-100">
                <img className="h-[24px] px-3" src={search} alt="Search-Icon" />
              </button>
            </Link>

            {showSuggestions && (
              <div className="mx-2 fixed bg-white py-2 px-2 w-[475px] rounded-lg shadow-lg border border-gray-100">
                <ul className="">
                  {suggestions.map((suggest) => (
                    <li
                      key={suggest}
                      className="flex items-center font-medium py-1 px-3 hover:bg-gray-200 hover: cursor-default"
                      onMouseDown={() => {
                        setSearchQuery(suggest);
                        setShowSuggestions(false);
                      }}
                    >
                      <img className="h-[20px] pr-2 my-2" src={search} alt="" />
                      {suggest}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {listening && (
          <div className="">
            <input
              type="text"
              className="border border-gray-400 py-2 w-[30rem] pl-8 rounded-l-full"
              placeholder="Search"
              value={transcript}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <Link key={"id" + transcript} to={"/search?q=" + transcript}>
              <button className="p-2 border bg-gray-50 border-l-0  border-slate-400 rounded-tr-full rounded-br-full align-top hover:bg-slate-100">
                <img className="h-[24px] px-3" src={search} alt="Search-Icon" />
              </button>
            </Link>
          </div>
        )}
        <MdKeyboardVoice
          onClick={handleListen}
          size="1.5rem"
          className="w-6 h-auto ml-6 border border-gray-200 bg-gray-200 rounded-full hover:cursor-pointer"
        />
      </div>
      <div className="col-span-3"></div>
      <div className="flex justify-center items-center col-span-1">
        <img
          className="h-[40px] p-2 ml-4 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={video}
          alt="Video-Icon"
        />
        <img
          className="h-[36px] p-2 ml-4 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={notification}
          alt="Notification"
        />
        <Link to="/login">
          <img
            className="h-[46px] p-2 ml-4 rounded-full hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
            src="https://yt3.ggpht.com/yti/AOXPAcUuFx9XZI68QEHeAliX0dS98brtkK90iS_C6Q=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="User-Icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Head;
