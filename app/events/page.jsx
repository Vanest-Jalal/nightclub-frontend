import EventHero from "../../components/shared/events/EventHero";
import EventCard from "../../components/shared/events/EventCard";

export default async function EventsPage() {

    const response = await fetch (
        `${process.env.NEXT_PUBLIC_API_URL}/events`,
        { method: "GET" }
    );
    const event = await response.json();

    return (
        <div>
            <EventHero />
            {/*<EventCard events={event[0]} />*/}
        </div>
    );
}