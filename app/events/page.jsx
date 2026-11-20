import EventCard from "../../components/shared/events/EventCard";
import PageHero from "../../components/shared/PageHero";
import Pagination from "../../components/shared/events/Pagination";

export default async function EventsPage({ searchParams }) {
    const params = await searchParams;
    const currentPage = Number(params.page) || 1;
    const response = await fetch (
        `${process.env.NEXT_PUBLIC_API_URL}/events?_page=${currentPage}&_limit=3`,
    );
    const event = await response.json();
    console.log(event);

    return (
        <div>
            <PageHero pageTitle="EVENTS" />
            <EventCard events={event} />
            <Pagination currentPage={currentPage} />
        </div>
    );
}