import Image from "next/image";
import Link from "next/link";

/* Eventkort */
export default function FeaturedEventCard({ event }) {
  /* Dato og tidspunkt */
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
      {/* Eventbillede */}
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`}
        alt={event.asset.alt}
        width={event.asset.width}
        height={event.asset.height}
      />

      {/* Eventinformation */}
      <div className="bg-(--color-pink-500) flex justify-between px-4 py-2 text-(length:--font-size-event-meta)">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
        <span>{event.location}</span>
      </div>

      {/* Titel og beskrivelse */}
      <h3 className="text-(length:--font-size-h2) font-(--font-weight-medium) mt-4">
        {event.title}
      </h3>
      <p className="mt-2">{event.excerpt}</p>

      {/* Bookingknap */}
      <Link
        href={`/booking?eventId=${event.id}`}
        className="inline-block bg-(--color-pink-500) text-(--color-white) px-6 py-3 mt-4"
      >
        Book Now
      </Link>
    </article>
  );
}
