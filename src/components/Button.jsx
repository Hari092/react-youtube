/* eslint-disable react/prop-types */

function Button({name}) {
  return (
    <div>
      <button className="px-2  rounded-md w-max  bg-gray-300">{name}</button>
    </div>
  )
}

export default Button
