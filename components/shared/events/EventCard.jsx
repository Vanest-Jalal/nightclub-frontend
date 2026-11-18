import link from "next/link";
export default function EventCard({ events }) {
    return (
        <article className="event-card">
            <img src={ `${process.env.NEXT_PUBLIC_API_URL}${events.image}` } alt={events.title} />
            <div className="event-card-content">
                <h2>{events.title}</h2>
                 <p>{events.excerpt}</p>
                 <p> {events.description}</p>


            
            
        </article>
    );
}


    
