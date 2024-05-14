import { useSelector } from "react-redux";
// import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import {
  homeIcon,
  subScriptionIcon,
  userLogo,
  list,
} from "../utilities/constants";

function SideBar() {
  const selector = useSelector((store) => store.toggle.isSideBarOpen);
  const user = useSelector((store)=>store.user)
  console.log(user)
  return !selector ? (
    <div className="w-20 ps-4 hidden sm:block">
      <Link to={"/"}>
        <img src={homeIcon} alt="home" className="h-7 " />
      </Link>
      <img src={subScriptionIcon} alt="subscription" className="h-7 my-4" />
      <Link to={user ? "/user" : "/login"}>
        <img src={userLogo} alt="you" className="h-7 my-4" />
      </Link>
    </div>
  ) : (
    <div className="shadow-xl w-40 ms-2 hidden sm:block">
      <h1 className="font-bold text-xl ms-2">Explore</h1>
      <ul className="ms-2">
        {list.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer font-semibold text-black my-2 text-lg hover:underline"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
