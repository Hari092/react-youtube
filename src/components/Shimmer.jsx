import { ShimmerGIF } from "../utilities/constants"

function Shimmer() {
  return (
    <div className="w-72">
      <img src={ShimmerGIF} alt="Loading..."/>
    </div>
  )
}

export default Shimmer
