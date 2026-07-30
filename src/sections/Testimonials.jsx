import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { fadeUp, staggerContainer, revealViewport } from "../hooks/useReveal";
import { TESTIMONIALS } from "../utils/content";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories from our clients"
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-[28px] border border-bone/10 bg-bone/[0.02] p-7"
            >
              <Quote size={22} className="text-ember-400/70" />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-bone/85">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-bone/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-ember-500/40 to-ember-300/20 text-sm font-semibold text-bone">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-bone">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
