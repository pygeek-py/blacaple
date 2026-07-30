import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import VideoTile from "../components/VideoTile";
import { fadeUp, staggerContainer, revealViewport } from "../hooks/useReveal";
import { PROJECTS, REELS, THUMBNAILS } from "../utils/content";
import { portfolioVideos, reelVideos, thumbnailVideos } from "../utils/videos";

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent cuts"
            description="A sample of edits shipped for creators and brands across short and long-form."
          />
          <Button href="#" variant="secondary" className="shrink-0">
            View full portfolio
          </Button>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {PROJECTS.map((project, i) => (
            <motion.div key={project.title} variants={fadeUp} className="group">
              <VideoTile
                src={portfolioVideos[i]}
                ratio="aspect-[4/5]"
                className="transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="mt-3">
                <p className="text-sm font-semibold text-bone">{project.title}</p>
                <p className="text-xs text-muted">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-24 max-w-6xl px-6">
        <SectionHeading eyebrow="Work" title="Vertical reels" align="left" />
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {REELS.map((reel, i) => (
            <motion.div key={reel.title} variants={fadeUp}>
              <VideoTile src={reelVideos[i]} ratio="aspect-[9/16]" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-24 max-w-6xl px-6">
        <SectionHeading eyebrow="Work" title="Behind the scenes" align="left" />
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-10 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {THUMBNAILS.map((thumb, i) => (
            <motion.div key={thumb.id} variants={fadeUp} className="w-56 shrink-0 sm:w-64">
              <VideoTile src={thumbnailVideos[i]} ratio="aspect-video" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
