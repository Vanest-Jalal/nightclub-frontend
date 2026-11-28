import PageHero from "@/components/shared/PageHero";
import EventDetail from "@/components/shared/event-detail/EventDetail";
import CommentForm from "@/components/shared/event-detail/CommentForm";
import { Suspense } from "react";

const EventDetailPage = ({ params }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FetchEvent params={params} />
        </Suspense>
    );
};

async function FetchEvent({ params }) {
    const { slug } = await params;
    
const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${slug}`
  );

  const event = await response.json();
  return (
        <main>
            <PageHero  pageTitle={event.title}/>
            <EventDetail event= {event} />
            <CommentForm />
        </main>
    );
};

export default EventDetailPage;

