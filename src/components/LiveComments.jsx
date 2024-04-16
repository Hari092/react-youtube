/* eslint-disable react/prop-types */
import {userLogo} from "../utilities/constants"

function LiveComments({name,text}) {
  return (
    <div className='flex gap-3 my-3'>
      <img src={userLogo} alt="logo" className="h-5 w-5 mt-3 bg-slate-400  rounded-full"/>
      <div>
        <h3 className=" text-base font-bold">{"@"+name}</h3>
        <p className="text-sm font-medium">{text}</p>
      </div>
    </div>
  )
}

export default LiveComments
