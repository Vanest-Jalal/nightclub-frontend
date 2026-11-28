import Link from "next/link";
import Image from "next/image";
import AnimatedButton from "../events/AnimatedButton";

const EventDetail = ({ event }) => {

    return (
        <section>
           <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`}
            alt={event.heroAsset.alt}
             width={event.heroAsset.width}
            height={event.heroAsset.height}
            />

            <h2>{event.title}</h2>
            <h3> {new Date(event.date).toLocaleDateString("en-GB", {
                  month: "long",
                  day: "numeric",
                })}
                {" · "}
                {new Date(event.date).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {" | "}
              {event.location}
            </h3>
            <p>{event.excerpt}</p>
            
            <section>
                <h3>EVENT DETAILS</h3>
                <p><span>LOCATION</span> {event.location}</p>
                <p><span>CATEGORY</span> {event.category}</p>
                <p><span>AGE LIMIT</span> {event.ageLimit}</p>
                <p><span>PRICE</span> {event.price}</p>
            </section>

             <AnimatedButton>
              <Link
                href={`/booking?eventId=${event.id}`}
                className="flex h-[61px] mb-31 items-center justify-center transition-colors duration-300 hover:!text-pink-500"
              >
                BOOK TABLE
              </Link>
            </AnimatedButton>

             <h3>LINEUP</h3>

             <ul>
                {event.lineup.map((artist) => (
                    <li key={artist}>{artist}</li>
                ))}
             </ul>

              <h3>SCHEDULE</h3>
              <ul>
                {event.schedule.map((item) => (
                    <li key={item.time}>
                        {item.time}  {item.label}
                    </li>
                ))}
             </ul>

              <h3>ABOUT THE EVENT</h3>
              <p>{event.content}</p>

        </section>
    ); }

    export default EventDetail;