import Link from "next/link";
export default function EventCard({ events }) {
   
            const eventImages = [
                "/assets/content-img/blog_full1.jpg",
                "/assets/content-img/blog_full2.jpg",
                "/assets/content-img/blog_full3.jpg",
            ];

             return (
        <article className="event-card">
            {events.map((event) => {

                console.log(event);
                let eventImage;
                if (event.id <= 3) {
                    eventImage = eventImages[event.id - 1];
                } else {
                    eventImage = `${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`;
                }

                return (
                    <div key={event.id}>
                    <img src={eventImage} alt={event.title} />
                     
                    <h2>{event.title}</h2>

                    <p>{event.description}</p>

                    <p>{new Date(event.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        hour: "2-digit",
                        minute: "2-digit",
                    })} </p>
                    <p>{event.location}</p>

                    <Link href={`/events/${event.id}`} className="event-card__link">
                        Read more
                    </Link>
                </div>
                );
            })};
            
        </article>
    );
}


    
