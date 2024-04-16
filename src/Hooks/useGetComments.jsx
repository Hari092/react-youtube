/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { youtubeCommentAPI } from "../utilities/constants"
import {useDispatch} from "react-redux"
import { addComment } from "../utilities/CommentSlice"



function useGetComments(videoId) {

    const dispatch = useDispatch()
    const getComments = async ()=>{
        const data = await fetch(youtubeCommentAPI+videoId+"&maxResults=50");
        const json = await data.json();
        dispatch(addComment(json.items))
    }

    useEffect(()=>{
        getComments();
    },[])
}

export default useGetComments
