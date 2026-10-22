"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { asset } from "@/lib/site";

type ModelViewerDialogProps = {
  title: string;
  src: string;
  stats: { label: string; value: string }[];
  onClose: () => void;
};

// Monté uniquement à l'ouverture : le GLB et model-viewer ne sont chargés qu'à la demande.
export function ModelViewerDialog({ title, src, stats, onClose }: ModelViewerDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    import("@google/model-viewer");
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-label={`Modèle 3D : ${title}`}
      className="m-auto h-[min(88vh,48rem)] w-[min(96vw,76rem)] overflow-hidden rounded-xl border border-line bg-background p-0 text-foreground backdrop:bg-black/75 backdrop:backdrop-blur-sm"
    >
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <div className="flex items-center gap-3">
            <span className="rounded bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
              3D
            </span>
            <h3 className="font-serif text-lg font-medium">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="rounded-md p-1.5 text-muted transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <model-viewer
          src={asset(src)}
          alt={`Modèle 3D : ${title}`}
          camera-controls
          auto-rotate
          camera-orbit="30deg 58deg 75%"
          touch-action="pan-y"
          shadow-intensity="0"
          exposure="1.1"
          className="min-h-0 w-full flex-1 bg-surface"
        />

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-line px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-muted">
          <div className="flex flex-wrap gap-x-8 gap-y-1">
            {stats.map((stat) => (
              <span key={stat.label}>
                {stat.label} <span className="text-foreground">{stat.value}</span>
              </span>
            ))}
          </div>
          <span className="hidden sm:inline">Glisser pour tourner · molette pour zoomer</span>
        </div>
      </div>
    </dialog>
  );
}
