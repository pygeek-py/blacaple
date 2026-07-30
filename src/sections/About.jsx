import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import StatCard from "../components/StatCard";
import VideoTile from "../components/VideoTile";
import { fadeUp, staggerContainer, revealViewport } from "../hooks/useReveal";
import { ABOUT_STATS, TOOLS } from "../utils/content";
import { aboutVideos } from "../utils/videos";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
          >
            <SectionHeading
              eyebrow="Who we are"
              title="People don't remember ads. They remember how something made them feel."
            />
            <motion.p variants={fadeUp} className="mt-6 max-w-lg text-base text-muted">
              Blacaple is a content studio based in Africa, built on a simple
              belief. Our work is focused on that feeling — we help brands
              speak clearly, look beautiful, and tell stories that stay in the
              mind long after the screen goes dark.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {ABOUT_STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <Button href="#contact" variant="secondary" icon={false}>
                Work with us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div variants={fadeUp} className="translate-y-8">
              <VideoTile src={aboutVideos[0]} ratio="aspect-[3/4]" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <VideoTile src={aboutVideos[1]} ratio="aspect-[3/4]" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-24 rounded-[28px] border border-bone/10 bg-bone/[0.02] px-6 py-8 sm:px-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Tools we use
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {TOOLS.map((tool) => (
              <span key={tool} className="text-sm font-medium text-bone/70 sm:text-base">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
