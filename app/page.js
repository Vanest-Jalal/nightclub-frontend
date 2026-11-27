import Image from "next/image";
import Link from "next/link";
import Header from "../components/shared/Header";
import FeaturedEvents from "../components/home/FeaturedEvents";
import Gallery from "../components/home/Gallery";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente events");
  }

  const events = await response.json();
  const featuredEvents = events.filter(
    (event) => event.isFeatured === true,
  );

  const galleryResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gallery`,
    {
      cache: "no-store",
    },
  );

  if (!galleryResponse.ok) {
    throw new Error("Kunne ikke hente galleri");
  }

  const gallery = await galleryResponse.json();

  return (
    <main>
      <section className="relative h-screen bg-[url(/assets/bg/header_bg_2.jpg)] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <Image
          src="/assets/icon/Logo.svg"
          alt="Logo"
          width={394}
          height={50}
          className="z-10"
        />
        <p className="uppercase z-10 text-(--color-white) tracking-[1em] text-[0.825rem] mt-4">
          Have A Good Time
        </p>
        <Image
          src="/assets/bottom_line2.png"
          alt=""
          width={345}
          height={28}
          className="z-10 my-4"
        />
        <div className="flex z-10 gap-4">
          <Link
            href="/events"
            className="uppercase border px-3 py-2"
          >
            View Events
          </Link>
          <Link
            href="/book-table"
            className="uppercase border px-3 py-2 bg-[image:var(--gradient-hero)]"
          >
            Book Table
          </Link>
        </div>
      </section>
      <Header />

      <section className="py-12 px-6 bg-[url(/assets/bg/pattern_small.jpg)]">
        <h2 className="uppercase text-center text-(length:--font-size-h1) tracking-(--letter-spacing-wide)">
          Welcome In Nightclub
        </h2>
        <div className="bg-linear-to-r from-transparent via-(--color-pink-500) to-transparent w-[99px] h-0.5 mx-auto mt-3"></div>

        <div className="flex flex-col gap-6 mt-14">
          <Image
            src="/assets/content-img/thumb1.jpg"
            alt="Set dining table with food and drinks"
            width={370}
            height={474}
            className="w-full"
          />
          <Image
            src="/assets/content-img/reastaurant_1.jpg"
            alt="Waiter serving food"
            width={360}
            height={461}
            className="w-full"
          />
          <Image
            src="/assets/content-img/thumb2.jpg"
            alt="People at a nightclub bar"
            width={370}
            height={474}
            className="w-full"
          />
        </div>
      </section>

      <FeaturedEvents featuredEvents={featuredEvents} />

      <Gallery gallery={gallery} />
    </main>
  );
}
