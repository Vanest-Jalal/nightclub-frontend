import FeaturedEventCard from "./FeaturedEventCard";

export default function FeaturedEvents({ featuredEvents }) {
  return (
    <section className="py-12 px-6 bg-[url(/assets/bg/slider_bg_overlay.png)] bg-cover bg-center">
      <h2 className="uppercase text-center text-(length:--font-size-h1) tracking-(--letter-spacing-wide)">
        Events Of The Month
      </h2>
      <div className="bg-linear-to-r from-transparent via-(--color-pink-500) to-transparent w-[99px] h-0.5 mx-auto mt-3"></div>
      <FeaturedEventCard event={featuredEvents[0]} />
    </section>
  );
}
