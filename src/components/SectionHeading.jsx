import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { fadeUp, revealViewport } from "../hooks/useReveal";
import { cn } from "../utils/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-bone sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-md text-base text-muted">{description}</p>
      )}
    </motion.div>
  );
}
