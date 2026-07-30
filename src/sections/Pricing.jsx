import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { fadeUp, staggerContainer, revealViewport } from "../hooks/useReveal";
import { PRICING_TIERS } from "../utils/content";
import { cn } from "../utils/cn";

const CYCLES = [
  { key: "monthly", label: "Monthly", suffix: "/month" },
  { key: "quarterly", label: "Quarterly", suffix: "/quarter" },
  { key: "annual", label: "Annual", suffix: "/year" },
];

export default function Pricing() {
  const [cycle, setCycle] = useState("monthly");
  const activeCycle = CYCLES.find((c) => c.key === cycle);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Campaign packages"
          description="Three tiers built around how much reach and production your campaign needs."
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-lg border border-bone/10 bg-bone/[0.03] p-1">
            {CYCLES.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setCycle(c.key)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200",
                  cycle === c.key ? "bg-ember-500 text-ink" : "text-bone/70 hover:text-bone"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-10 grid gap-6 lg:grid-cols-3"
        >
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              className="relative flex flex-col rounded-[28px] border border-bone/10 bg-bone/[0.02] p-8 sm:p-10"
            >
              <h3 className="text-lg font-semibold text-bone">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted">{tier.tagline}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-bone sm:text-5xl">
                  {tier.pricing[cycle]}
                </span>
                <span className="text-sm text-muted">{activeCycle.suffix}</span>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {tier.features.map((feature) =>
                  feature.startsWith("Everything in") ? (
                    <li key={feature} className="text-sm font-medium italic text-bone/60">
                      {feature}
                    </li>
                  ) : (
                    <li key={feature} className="flex items-start gap-3 text-sm text-bone/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-ember-300" />
                      {feature}
                    </li>
                  )
                )}
              </ul>

              <Button
                href="#contact"
                variant="secondary"
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
            <h3 className="text-xl font-semibold text-bone">Need something custom?</h3>
            <p className="mt-1 text-sm text-muted">
              Not sure which tier fits? Let's scope your campaign on a discovery call.
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
