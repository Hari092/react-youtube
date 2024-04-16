import Button from "./Button";
function ButtonList() {
  const list = [
    "All",
    "Trending",
    "Cinema",
    "Music",
    "Mixes",
    "Live",
    "Entertainment",
    "Shorts",
    "Sports",
    "Cricket",
    "Recently Uploaded",
    "New to You",
    "Science",
    "cars",
    "books",
    "React",
    "React Redux",
    "Javascript",
    "books",
  ];
  return (
    <div className="flex w-full overflow-auto px-2 items-center gap-2 no-scrollbar">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
}

export default ButtonList;
