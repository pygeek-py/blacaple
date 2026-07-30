import Logo from "../components/Logo";
import SocialLink from "../components/SocialLink";
import { FOOTER_LINKS, SOCIALS } from "../utils/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-bone/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              An editing studio for creators and brands who want to post more
              and stress less.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Quick links
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-bone/70 transition-colors hover:text-bone"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Reach out
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-bone/70">
              <li>
                <a href="mailto:hello@blacaple.com" className="hover:text-bone">
                  hello@blacaple.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-bone">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <SocialLink key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-bone/10 pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Blacaple. All rights reserved.</p>
          <p>Designed &amp; built for creators who ship.</p>
        </div>
      </div>
    </footer>
  );
}
