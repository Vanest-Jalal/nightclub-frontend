"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import SectionHeading from "../shared/SectionHeading";

/* Musiknumre */
const tracks = [
  {
    id: 1,
    title: "Black Box Funky",
    src: "/assets/media/black-box-funky.mp3",
    image: "/assets/content-img/track1.jpg",
    alt: "Girl listening to music",
    width: 233,
    height: 217,
  },

  {
    id: 2,
    title: "Euphoria",
    src: "/assets/media/euphoria.mp3",
    image: "/assets/content-img/track2.jpg",
    alt: "Guitar",
    width: 233,
    height: 217,
  },

  {
    id: 3,
    title: "Fashion Red Tape",
    src: "/assets/media/fashion-red-tape.mp3",
    image: "/assets/content-img/track4.jpg",
    alt: "Guy singing",
    width: 233,
    height: 217,
  },
];

export default function MusicPlayer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeTrack = tracks[activeIndex];
  const audioRef = useRef(null);

  function playMusic() {
    audioRef.current.play();
  }

  function pauseMusic() {
    audioRef.current.pause();
  }

  function handleClick() {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  return (
    <section>
      {/* Overskrift + pink gradient */}
      <SectionHeading title="Night Club Track" />
      <h3>{activeTrack.title}</h3>
      <audio
        ref={audioRef}
        src={activeTrack.src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button
        type="button"
        aria-label={
          isPlaying ? "Pause music" : "Play music"
        }
        onClick={handleClick}
      >
        <Image
          src={
            isPlaying
              ? "/assets/icon/circle-pause.svg"
              : "/assets/icon/circle-play.svg"
          }
          alt=""
          width="48"
          height="48"
        />
      </button>

      <Image
        src={activeTrack.image}
        alt={activeTrack.alt}
        width={activeTrack.width}
        height={activeTrack.height}
      />
    </section>
  );
}
