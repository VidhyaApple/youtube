import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useFetchVideos from "../utils/useFetchVideos";
import ShimmerCard from "./ShimmerCard";

const VideoContainer = () => {
  const videos = useFetchVideos();

  return (
    <div className="mt-4 flex flex-wrap">
      {!videos.length ? (
        <ShimmerCard />
      ) : (
        videos.map((video, index) => (
          <Link key={typeof video.id == "object" ? video.id.videoId : video.id} to={"/watch?v=" + (typeof video.id == "object" ? video.id.videoId : video.id)}>
            <VideoCard details={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
