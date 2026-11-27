import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

const EventList = ({ currentPage }) => {
  return (
    <Suspense fallback={<div>Loading events...</div>}>
      <FetchEvents currentPage={currentPage} />
    </Suspense>
  );
};

const FetchEvents = async ({ currentPage }) => {
  let events;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events?_page=${currentPage}&_limit=3`,
    );
    if (!response.ok) {
      throw new Error("Could not get events");
    }
    events = await response.json();
  } catch (error) {
    return <p>Could not get events</p>;
  }

  return events.map((event) => (
        <article
          key={event.id}
          className="group lg:flex lg:even:flex-row-reverse"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`}
            alt={event.asset.alt}
            width={event.asset.width}
            height={event.asset.height}
            className=" object-cover lg:w-1/2"
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
      ));
      };

export default EventList;
