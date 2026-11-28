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
           <div className="px-6 pt-9">
             <h2 className="uppercase">{event.title}</h2>


            <h3 className="uppercase my-2">
                 <span className="text-pink-500">
                 {new Date(event.date).toLocaleDateString("en-GB", {
                  month: "long",
                  day: "numeric",
                })}
                {" · "}
                {new Date(event.date).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {" | "}
                </span>
                DOORS OPEN {" "}
                {new Date(event.doorsOpen).toLocaleTimeString("en-GB",{
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </h3>
            <p className="text-gray-400 mb-8">{event.excerpt}</p>
            
            <section className="mb-8">
                <h3 className="mb-4">EVENT DETAILS</h3>
                <div className=" grid grid-cols-2 gap-4">
                <p><span className="block text-pink-500">LOCATION</span> {event.location}</p>
                <p><span className="block text-pink-500">CATEGORY</span> {event.category}</p>
                <p><span className="block text-pink-500">AGE LIMIT</span> {event.ageLimit}</p>
                <p><span className="block text-pink-500">PRICE</span> {event.price}</p>
                </div>
            </section>
            
            <div className="w-fit mb-12">
            <AnimatedButton>
              <Link
                href={`/booking?eventId=${event.id}`}
                className="flex h-[61px] items-center justify-center transition-colors duration-300 hover:!text-pink-500"
              >
                BOOK TABLE
              </Link>
            </AnimatedButton>
            </div>
            

             <h3 className="mb-4">LINEUP</h3>

             <ul className="flex flex-wrap gap-2 mb-8">
                {event.lineup.map((artist) => (
                    <li key={artist}
                    className="after:content-['•'] after:text-pink-500 after:ml-2 last:after:hidden"
                    >
                     {artist} </li>
                ))}
             </ul>

              <h3 className="mb-4">SCHEDULE</h3>
              <ul className="space-y-2 mb-8">
                {event.schedule.map((item) => (
                    <li key={item.time} >
                    <span className="text-pink-500 mr-2">{item.time}</span>  
                    {item.label}
                    </li>
                ))}
             </ul>

              <h3 className="mb-4">ABOUT THE EVENT</h3>
              <p className="text-gray-400 whitespace-pre-line">{event.content}</p>
              </div>

        </section>
    ); }

    export default EventDetail;