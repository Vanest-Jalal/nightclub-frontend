import Image from "next/image";
import Link from "next/link";
import Header from "../components/shared/Header";

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
      <h1>Nightclub Events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.excerpt}</p>
        </div>
      ))}
    </main>
  );
}
