/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { sideBarClose } from "../utilities/ToggleSlice";
import useGetComments from "../Hooks/useGetComments";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import LiveForms from "./LiveForms";

function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log(videoId);

  useGetComments(videoId);

  useEffect(() => {
    dispatch(sideBarClose());
  }, []);

  return (
    <div className=" w-full md:ms-10 md:flex lg:flex-row  flex flex-col sm:gap-5 overflow-x-hidden">
      <div className="bg-white sm:px-2 lg:w-8/12 lg:px-0 w-full overflow-x-hidden">
        <iframe
          className="sm:rounded-xl sm:h-[36em] w-full h-72 "
          src={
            "https://www.youtube.com/embed/" +
            videoId +
            "?si=5vanaa83M-OFrmVp&autoplay=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <Comments />
      </div>
      <div className=" lg:w-4/12 w-full sm:ps-2  sm:h-[36rem] sm:rounded-xl h-[40rem] mb-10 md:rounded-e-none ">
        <h1 className="bg-black sm:absolute w-full text-gray-400 sm:rounded-s-lg sm:-translate-x-2 p-2 md:w-[27.8rem] font-semibold sm:w-full ">
          Live Chat
        </h1>
          <LiveChat />
          <LiveForms />
      </div>
    </div>
  );
}

export default WatchPage;
