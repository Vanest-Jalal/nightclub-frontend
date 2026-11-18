import PageHero from "../../components/shared/PageHero";

export default async function EventsPage() {

    const response = await fetch (
        `${process.env.NEXT_PUBLIC_API_URL}/events`,
        { method: "GET" }
    );
    const event = await response.json();

    return (
        <div>
            <PageHero pageTitle="EVENTS" />
            {/*<EventCard events={event[0]} />*/}
        </div>
    );
}