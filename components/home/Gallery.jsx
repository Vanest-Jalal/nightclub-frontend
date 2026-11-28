"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeading from "../shared/SectionHeading";

/* Galleri */
export default function Gallery({ gallery }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="py-12 bg-[url(/assets/bg/pattern_small.jpg)]">
      {/* Overskrift + pink gradient */}
      <SectionHeading title="Night Club Gallery" />

      {/* Galleribilleder */}
      {gallery.map((image, index) => (
        <button
          type="button"
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

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-(--color-black)/90 flex items-center justify-center z-50">
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6"
          >
            {/* Lukkeikon */}
            <Image
              src="/assets/icon/close.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>

          {/* Lightboxbillede */}
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${gallery[selectedIndex].asset.url}`}
            alt={gallery[selectedIndex].asset.alt}
            width={gallery[selectedIndex].asset.width}
            height={gallery[selectedIndex].asset.height}
          />
          <button
            type="button"
            aria-label="Next image"
            onClick={() =>
              setSelectedIndex(
                selectedIndex === gallery.length - 1
                  ? 0
                  : selectedIndex + 1,
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3"
          >
            {/* Højre pil */}
            <Image
              src="/assets/icon/chevron-right.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={() =>
              setSelectedIndex(
                selectedIndex === 0
                  ? gallery.length - 1
                  : selectedIndex - 1,
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3"
          >
            {/* Venstre pil */}
            <Image
              src="/assets/icon/chevron-left.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
    </section>
  );
}
