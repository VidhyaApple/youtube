import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_AUTOSUGGEST_API } from "../utils/constants";
import { cacheSuggestions } from "../utils/searchSlice";
import VideoSearchTextContext from "../utils/VideoSearchTextContext";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cachedSearchData = useSelector((store) => store.search);
  const { setVideoSearchText } = useContext(VideoSearchTextContext);

  useEffect(() => {
    //Debouncing with 200 ms
    if (!searchQuery) return;
    const searchAPICallTimer = setTimeout(() => {
      if (cachedSearchData && cachedSearchData[searchQuery]) setSuggestions(cachedSearchData[searchQuery]);
      else fetchSearchSuggestions();
    }, 200);

    // unmounted
    return () => {
      clearTimeout(searchAPICallTimer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const fetchSearchSuggestions = async () => {
    const fetchedData = await fetch(YOUTUBE_SEARCH_AUTOSUGGEST_API + searchQuery);
    const jsonData = await fetchedData.json();
    setSuggestions(jsonData[1]);
    dispatch(
      cacheSuggestions({
        [searchQuery]: jsonData[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-3 cursor-pointer">
        <svg onClick={() => toggleMenuHandler()} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 16 16">
          <path d="M 1 2 L 1 3 L 14 3 L 14 2 Z M 1 7 L 1 8 L 14 8 L 14 7 Z M 1 12 L 1 13 L 14 13 L 14 12 Z"></path>
        </svg>
        <a href="/">
          <img className=" ml-3 w-28" src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="youtube logo" />
        </a>
      </div>
      <div className="col-span-6">
        <div className=" relative">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            type="text"
            className=" w-2/3 h-10 border border-gray-400 rounded-l-full indent-4 "
            placeholder="Search"
          />
          {/* {searchQuery && (
            <span
              onClick={() => {
                setVideoSearchText(searchQuery);
                setShowSuggestions(false);
              }}
            >
              x
            </span>
          )} */}
          <button
            className="border border-gray-400 rounded-r-full h-10 w-10 bg-gray-200 cursor-pointer "
            onClick={() => {
              setVideoSearchText(searchQuery);
              setShowSuggestions(false);
            }}
          >
            🔍
          </button>

          {showSuggestions && suggestions && (
            <ul className=" absolute px-2 border border-gray-200 shadow-lg bg-white w-2/3 rounded-lg">
              {suggestions.map((info) => {
                return (
                  <li
                    onClick={() => {
                      setSearchQuery(info);
                      setVideoSearchText(info);
                      setShowSuggestions(false);
                    }}
                    key={info}
                    className="py-2 cursor-pointer"
                  >
                    <span className="ml-1">🔍</span>
                    <span className="ml-1">{info}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="col-span-3 flex justify-end ">
        <img className="w-10" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
