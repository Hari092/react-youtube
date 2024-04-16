import { GiHamburgerMenu } from "react-icons/gi";
import { userLogo, youtubeLogo, homeIcon } from "../utilities/constants";
import { SlMagnifier } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { sideBarOpen } from "../utilities/ToggleSlice";
import { useState } from "react";
import useGetSearchVal from "../Hooks/useGetSearchVal";
import { CiSearch } from "react-icons/ci";

function Header() {
  const selector = useSelector((store) => store.search.searchVal);
  console.log(selector);
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  useGetSearchVal(val);
  const toggleSider = () => {
    dispatch(sideBarOpen());
  };
  return (
    <div className="my-3 sm:grid sm:grid-flow-col shadow-xl shadow-gray-100 flex mx-2 ">
      <div className="sm:flex sm:col-span-1  gap-3 md:px-3 overflow-x-hidden">
        <GiHamburgerMenu
          size={25}
          className="mt-0 cursor-pointer hidden sm:block"
          onClick={() => toggleSider()}
        />
        <img src={youtubeLogo} alt="youtube-logo" className="sm:h-7 h-4 mt-3 sm:mt-0" />
      </div>
      <div className=" sm:col-span-10 sm:px-40 flex flex-col">
        <div className="sm:w-full ms-5 sm:ms-0 flex sm:block">
          <input
            required
            type="text"
            placeholder="search"
            className="border-2 border-gray-400 pb-1 px-4 rounded-l-full sm:w-2/5 md:w-40 lg:w-2/5 w-36"
            onChange={(e) => setVal(e.target.value)}
          />
          <button className="border-2 sm:px-4 border-gray-400 border-l-0 rounded-r-full bg-gray-200 sm:translate-y-1.5 pb-1 px-1">
            {<SlMagnifier size={20} className=" text-gray-500 mt-1 sm:mt-1" />}
          </button>
        </div>
        <ul className=" absolute bg-white mt-10 sm:w-96 w-72">
          {selector.map((res, index) => (
            <li
              key={index}
              className="cursor-pointer font-semibold text-black my-2 text-base hover:bg-gray-200 px-1 "
            >
              <CiSearch  className="inline-block me-1" />{res}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-1 cursor-pointer ms-10 sm:ms-0 flex gap-3 pt-1 sm:pt-0">
        <img alt="user-logo" src={userLogo} className="h-7" />
        <a href="/">
          <img src={homeIcon} alt="home" className="h-7" />
        </a>
      </div>
    </div>
  );
}

export default Header;
