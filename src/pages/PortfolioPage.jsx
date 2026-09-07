import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import SectionHeading from "../components/SectionHeading";
import VideoTile from "../components/VideoTile";
import VideoLightbox from "../components/VideoLightbox";
import { fadeUp, staggerContainer, revealViewport } from "../hooks/useReveal";
import { PORTFOLIO_LIBRARY } from "../utils/videos";
import { cn } from "../utils/cn";

export default function PortfolioPage() {
  const categories = useMemo(
    () => ["All", ...new Set(PORTFOLIO_LIBRARY.map((item) => item.category))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const items =
    activeCategory === "All"
      ? PORTFOLIO_LIBRARY
      : PORTFOLIO_LIBRARY.filter((item) => item.category === activeCategory);

  return (
    <MainLayout>
      <section className="relative py-24 pt-36 sm:py-32 sm:pt-44">
        <div className="mx-auto max-w-6xl px-6 2xl:max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[1900px]">
          <SectionHeading
            eyebrow="Full Portfolio"
            title="Every story we've told"
            description="Every commercial, reel, and behind-the-scenes cut in one place. Click any tile to watch it in full."
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                  activeCategory === category
                    ? "border-ember-500 bg-ember-500 text-ink"
                    : "border-bone/15 bg-bone/[0.03] text-bone/70 hover:bg-bone/[0.08]"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
          >
            {items.map((item) => (
              <motion.button
                key={`${item.category}-${item.title}`}
                type="button"
                variants={fadeUp}
                onClick={() => setSelected(item)}
                className="group text-left"
              >
                <div className="relative">
                  <VideoTile src={item.src} ratio={item.ratio} />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/30">
                    <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-bone/90 text-ink opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                      <Play size={18} fill="currentColor" />
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-bone">{item.title}</p>
                  <p className="text-xs text-muted">{item.category}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <VideoLightbox item={selected} onClose={() => setSelected(null)} />
    </MainLayout>
  );
}
