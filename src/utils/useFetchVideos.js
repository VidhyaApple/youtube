import { useContext, useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./constants";
import VideoSearchTextContext from "./VideoSearchTextContext";
import { YOUTUBE_FILTERED_VIDEOS_API } from "./constants";

const useFetchVideos = () => {
  const [videos, setVideos] = useState([]);

  const {searchText} = useContext(VideoSearchTextContext);
  useEffect(() => {
    fetchVideos();
  }, [searchText]);

  const fetchVideos = async () => {
    try {
      const API_URL = searchText ? YOUTUBE_FILTERED_VIDEOS_API + searchText : YOUTUBE_VIDEOS_API;
      const fetchedData = await fetch(API_URL);
      const jsonData = await fetchedData.json();
      setVideos(jsonData.items);
    } catch (e) {
      console.log(e);
    }
  }
  return videos;
};

export default useFetchVideos;
