import Link from "next/link";
export default function EventCard({ events }) {
    return (
        <article className="event-card">
            {events.map((event) => (
                <div key={event.id}>
                    <img
                    src= {`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`}
                        alt={event.heroAsset.alt}
                    />
                    <h2>{event.title}</h2>

                    <p>{event.description}</p>

                    <p>{new Date(event.date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "long",
                    })} </p>
                    <p>{event.location}</p>

                    <Link href={`/events/${event.id}`} className="event-card__link">
                        Read more
                    </Link>
                </div>
            ))
            };
            
        </article>
    );
}


    
