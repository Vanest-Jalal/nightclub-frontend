import EventCard from "../../components/shared/events/EventCard";
import PageHero from "../../components/shared/PageHero";
import Pagination from "../../components/shared/events/Pagination";

export default async function EventsPage({ searchParams }) {
    const params = await searchParams;
    const currentPage = Number(params.page) || 1;
    const response = await fetch (
        `${process.env.NEXT_PUBLIC_API_URL}/events?_page=${currentPage}&_limit=3`,
    );
    const events = await response.json();
   

    return (
        <div>
            <PageHero pageTitle="EVENTS" />
            
            <div className="h-5 bg-[url('/assets/bg/pattern_small.jpg')] brightness-125 lg:h-26">
                 </div>

            <EventCard events={events} />

            <div className="relative">
            <Pagination currentPage={currentPage} />
            <div className="w-full h-34 bg-[url('/assets/bg/pattern_bg.jpg')] brightness-125 lg:h-66.5"></div>
        </div>
        </div>
    );
}