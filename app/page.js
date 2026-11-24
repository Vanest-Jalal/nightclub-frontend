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
      <section className="h-screen bg-[url(/assets/bg/header_bg_2.jpg)] bg-cover bg-center"></section>
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
