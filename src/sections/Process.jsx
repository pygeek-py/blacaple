import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { fadeUp, staggerContainer, revealViewport } from "../hooks/useReveal";
import { PROCESS_STEPS } from "../utils/content";

export default function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Workflow"
          title="How a project moves"
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5"
        >
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-bone/15 to-transparent lg:block" />
          {PROCESS_STEPS.map((step) => (
            <motion.div key={step.step} variants={fadeUp} className="relative flex flex-col gap-4">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-bone/15 bg-ink text-sm font-semibold text-ember-300">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-bone">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
