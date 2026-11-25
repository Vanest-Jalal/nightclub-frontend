import EventList from "../../components/shared/events/EventList";
import PageHero from "../../components/shared/PageHero";
import Pagination from "../../components/shared/events/Pagination";

export default async function EventsPage({ searchParams }) {
    const params = await searchParams;
    const currentPage = Number(params.page) || 1;
    let events;
    
   
    return (
        <div>
            <PageHero pageTitle="EVENTS" />
            
            <div className="h-5 bg-[url('/assets/bg/pattern_small.jpg')] lg:h-26">
                 </div>

            <EventList currentPage={currentPage} />

            <div className="relative">
            <Pagination currentPage={currentPage} />
            <div className="w-full h-34 bg-[url('/assets/bg/pattern_bg.jpg')] lg:h-66.5"></div>
        </div>
        </div>
    );
}