import { MdSend } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLive } from "../utilities/LiveSlice";
function LiveForms() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  console.log(comment);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addLive({
        name: "User",
        comment: comment,
      })
    );
    setComment(" ");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="chat in"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border-2 m-2 sm:w-64 px-2 border-black text-black"
      />
      <button>
        <MdSend />
      </button>
    </form>
  );
}

export default LiveForms;
