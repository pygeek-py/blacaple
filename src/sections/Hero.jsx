import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Volume2, VolumeX } from "lucide-react";
import Button from "../components/Button";
import { heroVideo } from "../utils/videos";
import { fadeUp, staggerContainer } from "../hooks/useReveal";

export default function Hero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-bone/15 bg-bone/[0.04] px-4 py-1.5 text-xs font-medium text-bone/80"
          >
            <Flame size={14} className="text-ember-300" />
            Only 3 spots left this month
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl"
          >
            We don't make ads.{" "}
            <span className="bg-gradient-to-r from-ember-400 to-ember-200 bg-clip-text text-transparent">
              We engineer emotions
            </span>{" "}
            that move markets.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-base text-muted sm:text-lg"
          >
            Blacaple helps brands become unforgettable through story-driven
            commercials, content, and campaigns that turn attention into
            customers.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#work" variant="primary">
              See our work
            </Button>
            <Button href="#contact" variant="secondary" icon={false}>
              Start a project
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 text-sm text-bone/70">
            A content studio based in Africa —{" "}
            <span className="font-medium text-bone/90">Est. 2025</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-ember-500/20 to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-bone/10 bg-surface2">
            <video
              ref={videoRef}
              src={heroVideo}
              autoPlay
              loop
              muted={muted}
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-ink/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-bone/80 backdrop-blur">
              Hero showreel
            </span>
            <button
              type="button"
              aria-label={muted ? "Unmute video" : "Mute video"}
              onClick={() => setMuted((m) => !m)}
              className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-bone/90 backdrop-blur transition-colors hover:bg-ink/80"
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
