/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { youtubeSearchAPI } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { setSearchVal } from "../utilities/SearchSlice";
function useGetSearchVal(val) {

  const dispatch =useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => getValue(), 200);
    return () => clearTimeout(timer);
  }, [val]);

  const getValue = async () => {
    const data = await fetch(youtubeSearchAPI + val);
    const json = await data.json();
    dispatch(setSearchVal(json[1]));
  };
}

export default useGetSearchVal;
