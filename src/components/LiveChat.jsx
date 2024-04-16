import useLiveChatComments from "../Hooks/useLiveChatComments";
import { useSelector } from "react-redux";
import LiveComments from "./LiveComments";

function LiveChat() {
  const comments = useSelector((store) => store?.live?.liveContainer);
  useLiveChatComments();
  return (
      <div className="h-full overflow-y-scroll overflow-x-hidden md:w-full px-2 flex flex-col-reverse">
        
        {comments?.map((comment, index) => {
          return (
            <LiveComments
              name={comment.name}
              text={comment.comment}
              key={index}
            />
          );
        })}
      </div>
  );
}

export default LiveChat;
