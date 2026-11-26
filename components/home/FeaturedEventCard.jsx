import Image from "next/image";

export default function FeaturedEventCard({ event }) {
  return (
    <article>
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`}
        alt={event.asset.alt}
        width={event.asset.width}
        height={event.asset.height}
      />
      <h3>{event.title}</h3>
      <p>{event.excerpt}</p>
    </article>
  );
}
