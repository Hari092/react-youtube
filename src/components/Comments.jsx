import { useSelector } from "react-redux";
import { ShimmerGIF } from "../utilities/constants";
function Comments() {
  const selector = useSelector((store) => store.comment.commentContainer);
  console.log(selector);
  if (!selector) {
    return <ShimmerGIF />;
  }
  const comments = selector?.map((comment) => {
    const { id, authorProfileImageUrl, textDisplay, authorDisplayName } =
      comment.snippet.topLevelComment.snippet;
    return (
      <div
        key={id}
        className="flex gap-1 h-min sm:pb-5 sm:mx-3 px-3 sm:px-0 w-full"
      >
        <img
          src={authorProfileImageUrl}
          alt={`Profile Image`}
          className=" rounded-full h-5 items-center mt-3 w-5 "
        />
        <div className="mx-2 w-full">
          <h1 className="font-semibold text-black text-base">
            {authorDisplayName}
          </h1>
          <p className="text-xs w-full">{textDisplay}</p>
          <div className="mt-3 ">
            {comment.replies
              ? comment?.replies.comments.map((a) => (
                  <div key={a.id} className="flex gap-1 h-min pb-5 sm:mx-3 px-3 sm:px-0 w-full border-l-2 my-1 border-gray-300">
                    <img
                      src={a.snippet.authorProfileImageUrl}
                      alt={`Profile Image`}
                      className=" rounded-full h-6 items-center mt-3 w-6 "
                    />
                    <div>
                      <h1>{a.snippet.authorDisplayName}</h1>
                      <p className="text-xs w-full">{a.snippet.textDisplay}</p>
                    </div>
                  </div>
                ))
              : " "}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="md:w-3/5 bg-grey-100 rounded-xl mt-0  pb-10 w-full">
      <h1 className="text-xl font-bold my-2 sm:mx-3 px-3 sm:px-0">
        {selector.length} Comments:
      </h1>
      {comments}
    </div>
  );
}

export default Comments;
