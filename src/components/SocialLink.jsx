import { Camera, Music2, PlayCircle } from "lucide-react";

const ICONS = {
  Instagram: Camera,
  TikTok: Music2,
  YouTube: PlayCircle,
};

export default function SocialLink({ label, href }) {
  const Icon = ICONS[label];
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/80 transition-colors duration-300 hover:border-ember-400/60 hover:text-ember-300"
    >
      {Icon && <Icon size={16} />}
    </a>
  );
}
