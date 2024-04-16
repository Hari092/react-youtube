import {useEffect} from 'react'
import { youtubeAPI } from '../utilities/constants' 
import { useDispatch } from 'react-redux';
import { setVideo } from '../utilities/VideoSlice';

function useGetVideos() {
    const dispatch =useDispatch()
  useEffect(()=>{
    getVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const getVideos= async()=>{
    const data = await fetch(youtubeAPI);
    const json = await data.json();
    console.log(json)
    dispatch(setVideo(json.items));
  }
}

export default useGetVideos
