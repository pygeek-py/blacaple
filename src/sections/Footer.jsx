import Logo from "../components/Logo";
import { FOOTER_LINKS } from "../utils/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-bone/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              A content studio based in Africa, engineering emotion-driven
              stories for founders and brands who refuse to blend in.
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
                <a href="mailto:blacaplestudio@gmail.com" className="hover:text-bone">
                  blacaplestudio@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-bone/10 pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Zaza Labs Limited. All Rights Reserved.</p>
          <p>Est. 2025 — a content studio based in Africa.</p>
        </div>
      </div>
    </footer>
  );
}
