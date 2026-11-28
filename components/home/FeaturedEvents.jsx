"use client";

import { useState } from "react";
import FeaturedEventCard from "./FeaturedEventCard";
import SectionHeading from "../shared/SectionHeading";

/* Featured Events */
export default function FeaturedEvents({ featuredEvents }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (featuredEvents.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-6 bg-[url(/assets/bg/slider_bg_overlay.png)] bg-cover bg-center">
      {/* Overskrift + pink gradient */}
      <SectionHeading title="Featured Events" />

      {/* Eventkort */}
      <FeaturedEventCard
        event={featuredEvents[activeIndex]}
      />

      {/* Slidernavigation */}
      <div className="flex justify-center gap-3 mt-6">
        {featuredEvents.map((event, index) => (
          <button
            type="button"
            key={event.id}
            aria-label={event.title}
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
