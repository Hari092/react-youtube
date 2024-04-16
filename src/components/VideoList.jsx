/* eslint-disable react/prop-types */
import Shimmer from "./Shimmer";
import { GoDotFill } from "react-icons/go";
function VideoList({ info }) {
  if (!info) {
    return <Shimmer />;
  }
  const { statistics, snippet } = info;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount, likeCount } = statistics;

  const views = Number(viewCount / 1000).toFixed();
  const likes = Number(likeCount / 1000).toFixed();
  return (
    <div className="p-2 sm:m-2 sm:w-80 w-full -translate-x-1 shadow-lg cursor-pointer h-80 mb-2 pb-2 ">
      <img
        src={thumbnails?.medium.url}
        alt="thumbnail"
        className="rounded-lg w-full"
      />
      <p className=" font-medium text-sm  text-black">{title}</p>
      <p className=" font-bold text-lg  text-gray-500">{channelTitle}</p>
      <h3 className="text-gray-500">
        <span>{views}K views</span>
        <GoDotFill className="inline-block" />
        <span>{likes}K likes</span>
      </h3>
    </div>
  );
}

export default VideoList;
