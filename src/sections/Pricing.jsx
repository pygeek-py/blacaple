import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { fadeUp, staggerContainer, revealViewport } from "../hooks/useReveal";
import { PRICING_PLANS } from "../utils/content";
import { cn } from "../utils/cn";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-14 grid gap-6 lg:grid-cols-2"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={cn(
                "relative flex flex-col rounded-[28px] border p-8 sm:p-10",
                plan.featured
                  ? "border-ember-400/40 bg-gradient-to-br from-ember-500/10 to-transparent"
                  : "border-bone/10 bg-bone/[0.02]"
              )}
            >
              {plan.featured && (
                <span className="absolute right-8 top-8 rounded-full bg-ember-400/15 px-3 py-1 text-xs font-semibold text-ember-300">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-bone">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-bone sm:text-5xl">
                  {plan.price}
                </span>
                <span className="text-sm text-muted">{plan.unit}</span>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {plan.features
                  .filter((f) => f !== "Popular")
                  .map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-bone/80">
                      <Check size={16} className="shrink-0 text-ember-300" />
                      {feature}
                    </li>
                  ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.featured ? "primary" : "secondary"}
                className="mt-10 w-full justify-center"
                icon={false}
              >
                Get started
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-6 flex flex-col items-center justify-between gap-5 rounded-[28px] border border-bone/10 bg-bone/[0.02] p-8 sm:flex-row sm:p-10"
        >
          <div>
            <h3 className="text-xl font-semibold text-bone">Need regular edits?</h3>
            <p className="mt-1 text-sm text-muted">
              Whether it's 4 videos a month or 20, we'll build a retainer around you.
            </p>
          </div>
          <Button href="#contact" variant="secondary" className="shrink-0">
            Get a custom quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
