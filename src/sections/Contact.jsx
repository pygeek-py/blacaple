import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { fadeUp, staggerContainer, revealViewport } from "../hooks/useReveal";

const inputClass =
  "w-full rounded-2xl border border-bone/15 bg-ink/40 px-4 py-3 text-sm text-bone placeholder:text-muted/70 outline-none transition-colors duration-200 focus:border-ember-400/50";

const FORM_ENDPOINT = "https://formspree.io/f/maqrzqzk";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="overflow-hidden rounded-[32px] border border-bone/10 bg-gradient-to-br from-surface2 to-surface p-8 sm:p-12"
        >
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Contact"
                title="One cut at a time"
                description="Don't let your content sit idle — tell us what you need and let's make it move."
              />
              <a
                href="mailto:hello@blacaple.com"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-bone/80 hover:text-ember-300"
              >
                <Mail size={16} />
                hello@blacaple.com
              </a>
            </motion.div>

            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className={inputClass}
                  disabled={status === "submitting"}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className={inputClass}
                  disabled={status === "submitting"}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  name="service"
                  defaultValue=""
                  required
                  className={inputClass}
                  disabled={status === "submitting"}
                >
                  <option value="" disabled>
                    What service do you need
                  </option>
                  <option>Short-form editing</option>
                  <option>Long-form editing</option>
                  <option>Motion graphics</option>
                  <option>Thumbnail design</option>
                  <option>Other</option>
                </select>

                <select
                  name="budget"
                  defaultValue=""
                  required
                  className={inputClass}
                  disabled={status === "submitting"}
                >
                  <option value="" disabled>
                    What's your budget
                  </option>
                  <option>Under $500</option>
                  <option>$500 – $1k</option>
                  <option>$1k – $5k</option>
                  <option>$5k+</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us exactly what you need"
                className={inputClass}
                disabled={status === "submitting"}
              />

              <Button
                type="submit"
                variant="primary"
                className="mt-2 w-full justify-center"
                disabled={status === "submitting"}
                icon={status !== "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit your request"
                )}
              </Button>

              {status === "success" && (
                <p className="flex items-center justify-center gap-2 text-center text-sm font-medium text-emerald-400">
                  <CheckCircle2 size={16} />
                  Request sent — we'll be in touch within 24 hours.
                </p>
              )}

              {status === "error" && (
                <p className="flex items-center justify-center gap-2 text-center text-sm font-medium text-red-400">
                  <AlertCircle size={16} />
                  Something went wrong. Please email us directly at hello@blacaple.com.
                </p>
              )}

              {status === "idle" && (
                <p className="text-center text-xs text-muted">
                  We typically respond within 24 hours.
                </p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
