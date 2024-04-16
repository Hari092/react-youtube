import { useSelector } from "react-redux";
import useGetVideos from "../Hooks/useGetVideos";
import VideoList from "./VideoList";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function VideoContainer() {
  useGetVideos();
  const feed = useSelector((store) => store?.video?.videoContainer);
  if (!feed) {
    return <Shimmer />;
  }
  return (
    <div className="flex flex-wrap mt-3 items-center">
      {feed.map((video) => (
        <Link to={"/watch?v="+video.id} key={video.id}>
          <VideoList info={video}/>
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
