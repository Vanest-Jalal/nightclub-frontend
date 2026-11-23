import Image from "next/image";

const NewsItem = ({ image, text, date }) => {
  return (
    <div className="flex gap-4">
      <Image
        src={image}
        alt="News"
        width={120}
        height={120}
        className="object-cover shrink-0"
      />
      <div>
        <p>{text}</p>
        <p className="text-(--color-pink-500)">{date}</p>
      </div>
    </div>
  );
};

export default NewsItem;
