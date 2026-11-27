"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery({ gallery }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="py-12 bg-[url(/assets/bg/pattern_small.jpg)]">
      <h2 className="uppercase text-center text-(length:--font-size-h1) tracking-(--letter-spacing-wide)">
        Night Club Gallery
      </h2>
      <div className="bg-linear-to-r from-transparent via-(--color-pink-500) to-transparent w-[99px] h-0.5 mx-auto mt-3 mb-8"></div>

      {gallery.map((image, index) => (
        <button
          key={image.id}
          onClick={() => setSelectedIndex(index)}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${image.asset.url}`}
            alt={image.asset.alt}
            width={image.asset.width}
            height={image.asset.height}
          />
        </button>
      ))}

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-2xl"
          >
            X
          </button>

          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${gallery[selectedIndex].asset.url}`}
            alt={gallery[selectedIndex].asset.alt}
            width={gallery[selectedIndex].asset.width}
            height={gallery[selectedIndex].asset.height}
          />
        </div>
      )}
    </section>
  );
}
