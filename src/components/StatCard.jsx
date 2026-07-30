import { motion } from "framer-motion";
import { fadeUp, revealViewport } from "../hooks/useReveal";
import { cn } from "../utils/cn";

export default function StatCard({ value, label, className }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      className={cn(
        "rounded-[20px] border border-bone/10 bg-bone/[0.03] p-5",
        className
      )}
    >
      <div className="text-3xl font-semibold tracking-tight text-bone sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </div>
    </motion.div>
  );
}
