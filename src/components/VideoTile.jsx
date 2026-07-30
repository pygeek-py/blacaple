import { useEffect, useRef } from "react";
import { cn } from "../utils/cn";

export default function VideoTile({
  src,
  ratio = "aspect-[4/5]",
  rounded = "rounded-[24px]",
  className,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border border-bone/10 bg-surface2",
        rounded,
        ratio,
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        onLoadedMetadata={(e) => {
          e.currentTarget.currentTime = 0.1;
        }}
      />
    </div>
  );
}
