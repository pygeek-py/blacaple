import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import VideoTile from "../components/VideoTile";
import { fadeUp, staggerContainer, revealViewport } from "../hooks/useReveal";
import { SERVICES } from "../utils/content";
import { serviceVideos } from "../utils/videos";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="What we do best"
          description="Five ways we mine the emotional truth of your brand and weaponize it into stories that move markets."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-[28px] border border-bone/10 bg-bone/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember-400/30 hover:bg-bone/[0.04] sm:p-7"
            >
              <VideoTile src={serviceVideos[i]} ratio="aspect-video" />
              <h3 className="mt-6 text-xl font-semibold text-bone sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-bone/10 bg-ink/40 px-3 py-1 text-xs font-medium text-bone/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold text-ember-300">{service.price}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Button href="#contact" variant="primary">
            Start a project
          </Button>
        </div>
      </div>
    </section>
  );
}
