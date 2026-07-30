export const NAV_LINKS = [
  { label: "Portfolio", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export const PROJECTS = [
  { title: "Midnight Drop", category: "Founder Story", ratio: "3/4" },
  { title: "The Founder Tapes", category: "Podcast Series", ratio: "3/4" },
  { title: "Grind Season", category: "Brand Campaign", ratio: "3/4" },
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
  title: `Behind the scenes ${i + 1}`,
}));

export const ABOUT_STATS = [
  { value: "2025", label: "Studio Founded" },
  { value: "5", label: "Core Services" },
  { value: "3", label: "Spots Left This Month" },
  { value: "12mo", label: "Retainer Packages" },
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
    title: "Founder-Led Viral Campaigns",
    description:
      "We turn your founder's story — the struggle, the breakthrough, the why-this-exists moment — into a multi-platform viral campaign that builds brand loyalty before you spend a dollar on ads.",
    tags: ["Cinematic Videos", "Platform Strategy", "Emotion Engineering"],
    price: "₦2M – ₦25M",
  },
  {
    title: "Pre-Launch Waitlist Campaigns",
    description:
      "We build anticipation before you have a product in-market — creating FOMO, social proof, and a launch-day audience that's already emotionally invested.",
    tags: ["Landing Page", "Teaser Series", "Viral Mechanics"],
    price: "₦3M – ₦20M",
  },
  {
    title: "Cinematic Product Demo Videos",
    description:
      "We don't shoot your product. We shoot the emotional transformation your product creates — demos that make people rewatch and share.",
    tags: ["Hero Demo", "Social Cutdowns", "Color Grading"],
    price: "₦2M – ₦18M",
  },
  {
    title: "Podcast-to-Content Engine",
    description:
      "We produce a broadcast-quality podcast series in our studio, then atomize every episode into 30+ pieces of SEO-optimized, social-native content.",
    tags: ["Studio Sessions", "Content Atomization", "SEO Articles"],
    price: "₦3M – ₦25M",
  },
  {
    title: "Brand Identity from Founder Wound",
    description:
      "We excavate the emotional truth of why your company exists — then build a complete brand identity system that makes every touchpoint feel intentional.",
    tags: ["Brand Narrative", "Visual Identity", "Brand Manifesto"],
    price: "₦3M – ₦30M",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery call",
    description: "We learn your story, your market, and the wound behind your brand.",
  },
  {
    step: "02",
    title: "Strategy & scripting",
    description: "We map the emotional architecture and platform strategy for your campaign.",
  },
  {
    step: "03",
    title: "Studio production",
    description: "Full crew shoot — cinematography, lighting, sound design, on location or in-studio.",
  },
  {
    step: "04",
    title: "Edit & review",
    description: "We cut a first pass, you leave notes, we refine until it moves the way it should.",
  },
  {
    step: "05",
    title: "Launch & distribution",
    description: "We deploy across platforms with a distribution strategy built for virality.",
  },
];

export const PROOF_STATS = {
  spotsLeft: "3",
  spotsCap: "Only 5 spots are opened a month, so every client gets our full attention.",
};

export const TESTIMONIALS = [
  {
    name: "Tomiwa Alade",
    role: "Founder & CEO",
    quote:
      "They didn't ask what we wanted to post. They asked what actually happened to us. The campaign that came out of that hit different — and it showed in the numbers.",
  },
  {
    name: "Chiamaka Obi",
    role: "Co-Founder",
    quote:
      "Every other studio pitched us a shot list. Blacaple pitched us a story. Our pre-launch waitlist crossed 10k before we'd spent a dollar on ads.",
  },
  {
    name: "Daniel Osei",
    role: "Head of Growth",
    quote:
      "Our demo video looked like it cost 10x what we paid. Investors noticed before we even brought it up.",
  },
];

export const FAQS = [
  {
    question: "How fast can we start a project?",
    answer:
      "Most engagements kick off with a discovery call within a week of reaching out, with production starting shortly after scoping is locked in.",
  },
  {
    question: "Do you require a retainer?",
    answer:
      "Most of our packages are structured as 12-month retainers so we can build a real content moat with you, not a one-off video. Project-based scopes are available for select services.",
  },
  {
    question: "What if I don't know which package fits me?",
    answer:
      "That's what the discovery call is for. Tell us where your brand is and where you're trying to go, and we'll scope a package — or a custom mix — around that.",
  },
  {
    question: "Do you only work with startups based in Africa?",
    answer:
      "No — our studio is based in Africa, but we work with founders and brands globally. Production can happen in-studio or on location.",
  },
  {
    question: "What happens after I reach out?",
    answer:
      "We'll set up a discovery call, walk through your story and goals, and follow up with a scoped proposal — typically within 24 hours of that call.",
  },
];

export const PRICING_TIERS = [
  {
    name: "Tier 1 — Presence",
    tagline: "For candidates building local awareness and grassroots credibility.",
    pricing: { monthly: "₦800,000", quarterly: "₦1,440,000", annual: "₦4,320,000" },
    features: [
      "Candidate narrative discovery & story extraction",
      "1 campaign commercial per month (short-form, digital-ready)",
      "16 social media content videos per month",
      "Social media management: Instagram, Facebook, TikTok (posting, community replies, growth strategy)",
      "Monthly performance report",
      "Minimum 200,000 audience touchpoints per month",
    ],
  },
  {
    name: "Tier 2 — Momentum",
    tagline: "For politicians scaling influence across multiple constituencies or platforms.",
    pricing: { monthly: "₦1,500,000", quarterly: "₦2,700,000", annual: "₦8,100,000" },
    features: [
      "Everything in Tier 1, plus:",
      "2 campaign commercials per month (short + long-form)",
      "24 social media content videos per month",
      "Full platform management: Instagram, Facebook, TikTok, Twitter/X, YouTube",
      "1 rally or event coverage per month (video capture + content production)",
      "Reputation monitoring & crisis communication support",
      "A/B content testing & audience targeting guidance",
      "Minimum 600,000 audience touchpoints per month",
    ],
  },
  {
    name: "Tier 3 — Legacy",
    tagline: "For major political figures and parties running large-scale, high-stakes campaigns.",
    pricing: { monthly: "₦3,000,000", quarterly: "₦5,400,000", annual: "₦16,200,000" },
    features: [
      "Everything in Tier 2, plus:",
      "1 full-length political documentary film (8–15 minutes) — Netflix-grade production",
      "2 branded podcast series positioning you as a thought leader in your field",
      "Deep audience research & voter psychology analysis",
      "Weekly strategy sessions with Blacaple's creative and data team",
      "Priority response for crisis communication (within 4 hours)",
      "Unlimited event coverage within campaign period",
      "Minimum 2,000,000 audience touchpoints per month",
    ],
  },
];

export const FOOTER_LINKS = [
  { label: "Portfolio", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
