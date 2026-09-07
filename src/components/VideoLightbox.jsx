import { useEffect } from "react";
import { X } from "lucide-react";

export default function VideoLightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 bg-bone/[0.06] text-bone transition-colors hover:bg-bone/[0.12] sm:right-6 sm:top-6"
      >
        <X size={18} />
      </button>

      <div
        className="flex max-h-full max-w-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          key={item.src}
          src={item.src}
          controls
          autoPlay
          playsInline
          className="max-h-[80vh] max-w-[92vw] rounded-lg bg-surface2 sm:max-w-3xl"
        />
        <div className="mt-4 text-center">
          <p className="text-sm font-semibold text-bone">{item.title}</p>
          <p className="text-xs text-muted">{item.category}</p>
        </div>
      </div>
    </div>
  );
}
