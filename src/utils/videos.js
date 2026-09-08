import videoDew from "../assets/video-dew.mp4";
import wa0000 from "../assets/VID-20260730-WA0000.mp4";
import wa0002 from "../assets/VID-20260730-WA0002.mp4";
import wa0017 from "../assets/VID-20260730-WA0017.mp4";
import wa0018 from "../assets/VID-20260730-WA0018.mp4";

import btsWa0003 from "../assets/BTS/VID-20260730-WA0003.mp4";
import btsWa0004 from "../assets/BTS/VID-20260730-WA0004.mp4";
import btsWa0005 from "../assets/BTS/VID-20260730-WA0005.mp4";
import btsWa0006 from "../assets/BTS/VID-20260730-WA0006.mp4";
import btsWa0007 from "../assets/BTS/VID-20260730-WA0007.mp4";
import btsWa0008 from "../assets/BTS/VID-20260730-WA0008.mp4";
import btsWa0009 from "../assets/BTS/VID-20260730-WA0009.mp4";
import btsWa0016 from "../assets/BTS/VID-20260730-WA0016.mp4";
import btsWa0019 from "../assets/BTS/VID-20260730-WA0019.mp4";
import btsWa0020 from "../assets/BTS/VID-20260730-WA0020.mp4";
import btsWa0022 from "../assets/BTS/VID-20260730-WA0022.mp4";

import founderVideo from "../assets/IMG_2115.mp4";
import eventVideo from "../assets/IMG_2229.mp4";

export const heroVideo = videoDew;

export const portfolioVideos = [wa0000, wa0002, wa0017, wa0018];

export const reelVideos = [btsWa0003, btsWa0004, btsWa0005, btsWa0006];

export const thumbnailVideos = [
  btsWa0007,
  btsWa0008,
  btsWa0009,
  btsWa0016,
  btsWa0019,
  btsWa0020,
];

export const serviceVideos = [
  founderVideo,
  wa0018,
  videoDew,
  wa0000,
  wa0002,
  eventVideo,
];

export const aboutVideos = [btsWa0022, btsWa0003];

export const proofVideo = btsWa0004;

export const PORTFOLIO_LIBRARY = [
  { title: "Launch commercial", category: "Founder Story", src: wa0000, ratio: "aspect-[4/5]" },
  { title: "Brand storytelling", category: "Brand Content", src: wa0002, ratio: "aspect-[4/5]" },
  { title: "Podcast episode", category: "Podcast Series", src: wa0017, ratio: "aspect-[4/5]" },
  { title: "Product launch film", category: "Product Launch", src: wa0018, ratio: "aspect-[4/5]" },
  { title: "Founder-led campaign", category: "Founder-Led Viral Campaign", src: founderVideo, ratio: "aspect-[9/16]" },
  { title: "Founder-led launch campaign", category: "Founder-Led Viral Campaign", src: eventVideo, ratio: "aspect-[9/16]" },
  { title: "Reel cut 01", category: "Vertical Reel", src: btsWa0003, ratio: "aspect-[9/16]" },
  { title: "Reel cut 02", category: "Vertical Reel", src: btsWa0004, ratio: "aspect-[9/16]" },
  { title: "Reel cut 03", category: "Vertical Reel", src: btsWa0005, ratio: "aspect-[9/16]" },
  { title: "Reel cut 04", category: "Vertical Reel", src: btsWa0006, ratio: "aspect-[9/16]" },
  { title: "Behind the scenes 01", category: "Behind The Scenes", src: btsWa0007, ratio: "aspect-[9/16]", fit: "contain" },
  { title: "Behind the scenes 02", category: "Behind The Scenes", src: btsWa0008, ratio: "aspect-[9/16]", fit: "contain" },
  { title: "Behind the scenes 03", category: "Behind The Scenes", src: btsWa0009, ratio: "aspect-[9/16]", fit: "contain" },
  { title: "Behind the scenes 04", category: "Behind The Scenes", src: btsWa0016, ratio: "aspect-[9/16]", fit: "contain" },
  { title: "Behind the scenes 05", category: "Behind The Scenes", src: btsWa0019, ratio: "aspect-[9/16]", fit: "contain" },
  { title: "Behind the scenes 06", category: "Behind The Scenes", src: btsWa0020, ratio: "aspect-[9/16]", fit: "contain" },
  { title: "Studio moment", category: "Behind The Scenes", src: btsWa0022, ratio: "aspect-[9/16]", fit: "contain" },
  { title: "Hero showreel", category: "Studio Reel", src: videoDew, ratio: "aspect-[4/5]" },
];
