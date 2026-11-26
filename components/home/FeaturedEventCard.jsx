import Image from "next/image";

export default function FeaturedEventCard({ event }) {
  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <article>
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`}
        alt={event.asset.alt}
        width={event.asset.width}
        height={event.asset.height}
      />

      <div className="bg-(--color-pink-500) flex justify-between px-4 py-2">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
        <span>{event.location}</span>
      </div>
      <h3 className="text-(length:--font-size-h2) font-(--font-weight-medium) mt-4">
        {event.title}
      </h3>
      <p className="mt-2">{event.excerpt}</p>
    </article>
  );
}
