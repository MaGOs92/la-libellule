"use client";

import { useEffect, useState } from "react";
import type { PhotoId } from "@/lib/photos";
import { Photo } from "./Photo";

const slides: { id: PhotoId; place: string; coords: string }[] = [
  {
    id: "chenonceau",
    place: "Chenonceaux (37)",
    coords: "47.325° N · 1.070° E",
  },
  { id: "villandry", place: "Villandry (37)", coords: "47.340° N · 0.514° E" },
  {
    id: "civray",
    place: "Civray-de-Touraine (37)",
    coords: "47.34° N · 1.07° E",
  },
  {
    id: "tours-pont-wilson",
    place: "Tours (37)",
    coords: "47.394° N · 0.685° E",
  },
];

export function HeroBackdrop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      7000,
    );
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <>
      <div className="absolute inset-0 -z-30">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-[opacity,transform] duration-[1800ms] ease-out ${
              i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          >
            <Photo
              id={slide.id}
              priority={i === 0}
              sizes="100vw"
              className="brightness-[.95] saturate-[.95]"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-foreground/70">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        <span className="text-foreground">{current.place}</span>
        <span className="hidden sm:inline">{current.coords}</span>
        <span className="ml-2 flex gap-1.5" aria-hidden="true">
          {slides.map((slide, i) => (
            <span
              key={slide.id}
              className={`h-0.5 w-6 transition-colors duration-500 ${i === index ? "bg-accent" : "bg-white/20"}`}
            />
          ))}
        </span>
      </div>
    </>
  );
}
