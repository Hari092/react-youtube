import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

function MainContainer() {
  return (
    <div className="sm:w-[90%] w-full  ms-2 overflow-x-hidden ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
}

export default MainContainer;
