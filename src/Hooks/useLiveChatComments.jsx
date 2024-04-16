/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { addLive } from "../utilities/LiveSlice";
import { generate,texts } from "../utilities/Helpers";
function useLiveChatComments() {
    const dispatch =useDispatch()
    useEffect(()=>{
        const comments = setInterval(()=>{
            dispatch(addLive({
                name: generate(),
                comment: texts(30)
            }))
        },2500)
        return ()=>clearInterval(comments)
    },[])
}

export default useLiveChatComments
