import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Accordion from "../components/Accordion";
import { fadeUp, revealViewport } from "../hooks/useReveal";
import { FAQS } from "../utils/content";

export default function FAQ() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-12"
        >
          <Accordion items={FAQS} />
        </motion.div>
      </div>
    </section>
  );
}
