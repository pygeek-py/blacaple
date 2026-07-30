export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export const PROJECTS = [
  { title: "Midnight Drop", category: "Brand Campaign", ratio: "3/4" },
  { title: "The Founder Tapes", category: "Podcast Series", ratio: "3/4" },
  { title: "Grind Season", category: "Creator Vlog", ratio: "3/4" },
  { title: "Neon Runway", category: "Product Launch", ratio: "3/4" },
];

export const REELS = [
  { title: "Reel Cut 01" },
  { title: "Reel Cut 02" },
  { title: "Reel Cut 03" },
  { title: "Reel Cut 04" },
];

export const THUMBNAILS = new Array(6).fill(null).map((_, i) => ({
  id: i,
  title: `Thumbnail ${i + 1}`,
}));

export const ABOUT_STATS = [
  { value: "9+", label: "Years Cutting" },
  { value: "35M+", label: "Views Generated" },
  { value: "540+", label: "Projects Delivered" },
  { value: "300+", label: "Happy Clients" },
];

export const TOOLS = [
  "Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "CapCut",
  "Photoshop",
  "Frame.io",
];

export const SERVICES = [
  {
    title: "Short-form editing",
    description:
      "Fast, punchy edits built for Reels, TikTok, and Shorts — hooks that stop the scroll and pacing that keeps it moving.",
    tags: ["Clean Cuts", "Captions", "Sound Design"],
  },
  {
    title: "Long-form editing",
    description:
      "Polished storytelling for YouTube, podcasts, and interviews. Tight pacing, smooth transitions, no dead air",
    tags: ["Story Structure", "B-Roll", "Color Grading"],
  },
  {
    title: "Motion graphics",
    description:
      "Custom titles, transitions, and animated overlays that give every cut a little extra polish and personality.",
    tags: ["Animated Titles", "Logo Stings", "Product Demos"],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "We map out your goals, audience, and the style that fits your brand.",
  },
  {
    step: "02",
    title: "Upload",
    description: "You drop your footage, brand assets, and any references into our shared folder.",
  },
  {
    step: "03",
    title: "Edit",
    description: "We cut a first pass that's aligned with your vision from day one.",
  },
  {
    step: "04",
    title: "Review",
    description: "You leave timestamped notes and we shape the edit around your feedback.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Final files land in your inbox, formatted and ready to post everywhere.",
  },
];

export const PROOF_STATS = {
  delivered: "128",
  turnaround: "3–5 business days",
  clients: "30+",
};

export const TESTIMONIALS = [
  {
    name: "Sasha Reyes",
    role: "Content Manager",
    quote:
      "We needed a fast turnaround on a tight deadline — it landed early and the quality was better than what we were getting in-house.",
  },
  {
    name: "Devon Marsh",
    role: "Personal Brand Strategist",
    quote:
      "They took raw, unscripted footage and shaped it into something we were genuinely proud to post. Communication the whole way was effortless.",
  },
  {
    name: "Priya Nair",
    role: "YouTuber",
    quote:
      "Hours of interview footage with no clear story in it, and what came back was tight, emotional, and exactly on-brand. Now our default editor.",
  },
];

export const FAQS = [
  {
    question: "How fast can you turn around a project?",
    answer:
      "Most short-form edits ship in 3–5 business days, and long-form projects in 5–7. Rush delivery is available for an added fee if you're on a deadline.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Raw footage (or a link to it), any brand guidelines or references, and a short brief on tone and goals. We'll handle the rest.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Short-form packages include two rounds of revisions, long-form includes three. Additional rounds can be added if needed.",
  },
  {
    question: "Do you work with ongoing/retainer clients?",
    answer:
      "Yes — most of our roster is on a recurring plan. We'll build a cadence around how much content you're posting each month.",
  },
  {
    question: "What formats and platforms do you edit for?",
    answer:
      "Reels, TikTok, Shorts, YouTube, podcasts, and paid ad creative. We deliver in whatever aspect ratio and format your platform needs.",
  },
];

export const PRICING_PLANS = [
  {
    name: "Short-form video",
    price: "$45",
    unit: "/video",
    description: "Reels, TikToks, and YouTube Shorts.",
    features: [
      "Up to 90 seconds",
      "Quick cuts, captions, transitions",
      "Licensed background music",
      "2 rounds of revisions",
      "3–5 day turnaround",
    ],
  },
  {
    name: "Long-form video",
    price: "$120",
    unit: "/video",
    description: "YouTube videos, interviews, podcasts, webinars.",
    features: [
      "Up to 12 minutes",
      "Sound mixing + clean cuts",
      "Branded intro/outro",
      "3 rounds of revisions",
      "5–7 day turnaround",
      "Popular",
    ],
    featured: true,
  },
];

export const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
