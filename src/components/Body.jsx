import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
// import Header from "./Header";
// import MainContainer from "./MainContainer";

function Body() {
  return (
    <div className="flex w-full overflow-x-hidden">
      <SideBar />
     <Outlet/>
    </div>
  );
}

export default Body;
