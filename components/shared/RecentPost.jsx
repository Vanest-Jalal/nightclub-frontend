import Image from "next/image";

const RecentPost = ({ image, text, time }) => {
  return (
    <div className="flex items-start gap-4">
      <Image
        src={image}
        alt="Recent Post"
        width={19.5}
        height={19.5}
      />
      <div>
        <p>{text}</p>
        <p className="text-(--color-pink-500)">{time}</p>
      </div>
    </div>
  );
};

export default RecentPost;
