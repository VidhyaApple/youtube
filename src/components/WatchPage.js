import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_VIDEO_DETAIL_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetail, setVideoDetail] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVideoDetail = async () => {
    const fetchedData = await fetch(YOUTUBE_VIDEO_DETAIL_API);
    const jsonData = await fetchedData.json();
    setVideoDetail(jsonData?.items[0]);
  };
  return (
    <div className="px-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <iframe
            className="rounded-lg"
            width="1250"
            height="650"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-span-3 h-full border border-gray-200 mx-2">
          <LiveChat />
        </div>

        <div className="col-span-9">
          <div className="font-bold mt-2">{videoDetail?.snippet?.title}</div>

          <CommentsContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
