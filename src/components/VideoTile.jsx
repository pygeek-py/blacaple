import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

export default function VideoTile({
  src,
  ratio = "aspect-[4/5]",
  rounded = "rounded-lg",
  objectPosition = "object-top",
  className,
}) {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Only start fetching the video once it's about to scroll into view,
  // so the page doesn't fire off every clip's request on initial load.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || shouldLoad) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  // Play only while actually visible, pause otherwise.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoad) return undefined;

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
  }, [shouldLoad]);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative w-full overflow-hidden border border-bone/10 bg-surface2",
        rounded,
        ratio,
        className
      )}
    >
      {shouldLoad && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className={cn("absolute inset-0 h-full w-full object-cover", objectPosition)}
          onLoadedMetadata={(e) => {
            e.currentTarget.currentTime = 0.1;
          }}
        />
      )}
    </div>
  );
}
