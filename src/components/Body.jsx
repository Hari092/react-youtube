/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase-config";
import { useDispatch } from "react-redux";
import { addUser ,removeUser} from "../utilities/userSlice";

function Body() {
  const dispatch =useDispatch()
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(addUser(uid));
        
      } else {
        
        dispatch(removeUser())
        console.log("no user");
      }
    });
  }, []);

  return (
    <div className="flex w-full overflow-x-hidden">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Body;
