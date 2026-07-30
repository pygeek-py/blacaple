import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import VideoTile from "../components/VideoTile";
import { fadeUp, staggerContainer, revealViewport } from "../hooks/useReveal";
import { PROOF_STATS } from "../utils/content";
import { proofVideo } from "../utils/videos";

export default function Proof() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why Blacaple" title="More than just cuts" />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-between rounded-[28px] border border-bone/10 bg-bone/[0.02] p-8"
          >
            <div className="text-5xl font-semibold tracking-tight text-bone">
              {PROOF_STATS.delivered}
            </div>
            <p className="mt-2 text-sm text-muted">Delivered edits this quarter</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-between rounded-[28px] border border-bone/10 bg-gradient-to-br from-ember-500/15 to-transparent p-8"
          >
            <Zap size={22} className="text-ember-300" />
            <div>
              <h3 className="mt-4 text-xl font-semibold text-bone">Fast turnaround</h3>
              <p className="mt-2 text-sm text-muted">
                Need it fast? Most projects ship within {PROOF_STATS.turnaround}
                — rush options available.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-[28px] border border-bone/10 bg-bone/[0.02] p-8">
            <VideoTile src={proofVideo} ratio="aspect-square" rounded="rounded-[18px]" />
            <p className="mt-4 text-sm text-muted">
              Worked with {PROOF_STATS.clients} brands and creators worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
