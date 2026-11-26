"use client";

import { useState } from "react";
import FeaturedEventCard from "./FeaturedEventCard";

export default function FeaturedEvents({ featuredEvents }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 px-6 bg-[url(/assets/bg/slider_bg_overlay.png)] bg-cover bg-center">
      <h2 className="uppercase text-center text-(length:--font-size-h1) tracking-(--letter-spacing-wide)">
        Featured Events
      </h2>
      <div className="bg-linear-to-r from-transparent via-(--color-pink-500) to-transparent w-[99px] h-0.5 mx-auto mt-3 mb-8"></div>
      <FeaturedEventCard
        event={featuredEvents[activeIndex]}
      />

      <div className="flex justify-center gap-3 mt-6">
        {featuredEvents.map((event, index) => (
          <button
            key={event.id}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3
            ${
              index === activeIndex
                ? "bg-(--color-pink-500)"
                : "bg-(--color-white)"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
