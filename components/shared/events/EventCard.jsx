import Link from "next/link";
import AnimatedButton from "./AnimatedButton";

export default function EventCard({ events }) {
  const eventImages = [
    "/assets/content-img/blog_full1.jpg",
    "/assets/content-img/blog_full2.jpg",
    "/assets/content-img/blog_full3.jpg",
  ];

  return (
    <section>
      {events.map((event) => {
        let eventImage;

        if (event.id <= 3) {
          eventImage = eventImages[event.id - 1];
        } else {
          eventImage = `${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`;
        }

        return (
          <article
            key={event.id}
            className="group lg:flex lg:even:flex-row-reverse"
          >
            <img
              src={eventImage}
              alt={event.title}
              className="w-full object-cover lg:w-1/2"
            />
            <div className="px-6 pt-9 lg:w-1/2 lg:pl-9 lg:pr-40 lg:group-even:pl-40 lg:group-even:pr-9">
              <h2 className="uppercase">{event.title}</h2>

              <h3 className="uppercase my-2">
                <span className="text-pink-500">
                  {new Date(event.date).toLocaleDateString("en-GB", {
                    month: "long",
                    day: "numeric",
                  })}
                  {" · "}
                  {new Date(event.date).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  {" | "}
                </span>
                {event.location}
              </h3>

              <p className="text-gray-400 mb-8">{event.description}</p>

              <AnimatedButton>
                <Link
                  href={`/events/${event.slug}`}
                  className="flex h-[61px] mb-31 items-center justify-center transition-colors duration-300 hover:!text-pink-500"
                >
                  READ MORE
                </Link>
              </AnimatedButton>
            </div>
          </article>
        );
      })}
    </section>
  );
}
