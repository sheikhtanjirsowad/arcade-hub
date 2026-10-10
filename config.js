/* ============================================================
   EDIT EVERYTHING HERE
   This is the only file you need to touch to customize the site.
   Add / remove games, change text, links, colors, socials.
   ============================================================ */

const CONFIG = {
  // ---- Brand / header ----
  brand: "ARCADE",           // short logo text
  brandAccent: "HUB",        // highlighted part of the logo
  tagline: "Your portal to play.",

  // ---- Hero section ----
  hero: {
    kicker: "Welcome to",
    // Each line animates in one-by-one
    titleLines: ["PLAY", "SOMETHING", "AWESOME"],
    subtitle:
      "A clean little corner of the internet packed with games, links and good vibes. No clutter. Just fun.",
    primaryBtn: { text: "Browse Games", href: "#games" },
    secondaryBtn: { text: "Contact Me", href: "#contact" },
  },

  // ---- Games (the big clickable list) ----
  gamesPanel: {
    title: "Full Games List",
    subtitle: "Enjoy! Tap to reveal every game",
    desc: "Fan ports — some need your own game files. Skip anything that asks to download a launcher.",
    icon: "🎮",
  },
  // Every published game link goes here. Click the panel above -> these unfold.
  games: [
    { icon: "🧟", title: "BO1 Zombies",              desc: "Call of Duty: Black Ops zombies in your browser.", tag: "Zombies",    color: "#b06bff", link: "https://vel.gg/bo1z" },
    { icon: "🌕", title: "Moon",                      desc: "Black Ops zombie map — Moon.",                     tag: "Zombies",    color: "#9aa7ff", link: "https://moon-zombies.pages.dev" },
    { icon: "🎬", title: "Kino der Toten",            desc: "The classic Kino der Toten zombie map.",           tag: "Zombies",    color: "#ff6b6b", link: "https://kino-der-toten.pages.dev" },
    { icon: "🧀", title: "BO3 Cheese Cube",           desc: "Black Ops 3 custom zombie map.",                   tag: "Zombies",    color: "#ffb020", link: "https://cheese-cube.pages.dev" },
    { icon: "🎯", title: "Black Ops 2",               desc: "Full Black Ops 2 multiplayer.",                    tag: "Shooter",    color: "#22c55e", link: "https://vibeslops.luckeysystems.com" },
    { icon: "🔫", title: "Modern Warfare 2",          desc: "Call of Duty: Modern Warfare 2.",                  tag: "Shooter",    color: "#38bdf8", link: "https://ovz-game-production.up.railway.app" },
    { icon: "🛹", title: "Skate 3",                    desc: "Open-world skateboarding classic.",                tag: "Sports",     color: "#f97316", link: "https://skate.aaddpp.lol" },
    { icon: "🛹", title: "Skate Rust",                 desc: "Skate in a Rust-style world.",                     tag: "Sports",     color: "#ef4444", link: "https://global-terror.net" },
    { icon: "🌊", title: "CS Surf",                    desc: "Counter-Strike surf servers.",                     tag: "Shooter",    color: "#06b6d4", link: "https://surfd.net" },
    { icon: "🪖", title: "Halo CE",                    desc: "Halo: Combat Evolved campaign.",                   tag: "Shooter",    color: "#3b82f6", link: "https://mitchellhynes.com/halo" },
    { icon: "📱", title: "Halo CE Mobile",             desc: "Halo CE optimized for mobile.",                    tag: "Mobile",     color: "#6366f1", link: "https://hcemobile.com" },
    { icon: "⚽", title: "PES 6",                      desc: "Pro Evolution Soccer 6.",                          tag: "Sports",     color: "#10b981", link: "https://pes6.optijuegos.net" },
    { icon: "🚗", title: "GTA 5",                      desc: "Grand Theft Auto V (archived).",                   tag: "Open World", color: "#f59e0b", link: "https://web.archive.org/web/20261006055917/https://playgta5.com/" },
    { icon: "🌴", title: "GTA Vice City",              desc: "Vice City running in WebAssembly.",                tag: "Open World", color: "#ec4899", link: "https://joncodeofficial.github.io/gta-vice-city-wasm" },
    { icon: "🍩", title: "The Simpsons: Hit & Run",    desc: "The Simpsons: Hit & Run.",                         tag: "Open World", color: "#facc15", link: "https://shar-wasm.cjoseph.workers.dev/?skipmovie" },
    { icon: "🔥", title: "Quake 1",                    desc: "id Software's original Quake.",                    tag: "Shooter",    color: "#dc2626", link: "https://q1.pieter.com" },
    { icon: "🔥", title: "Quake 2",                    desc: "Quake II.",                                        tag: "Shooter",    color: "#ea580c", link: "https://q2.pieter.com" },
    { icon: "💥", title: "Quake 3",                    desc: "Quake III Arena.",                                 tag: "Arena",      color: "#d946ef", link: "https://q3.pieter.com" },
    { icon: "🐺", title: "Return to Castle Wolfenstein", desc: "Classic Wolfenstein FPS.",                       tag: "Shooter",    color: "#64748b", link: "https://rtcw.pieter.com" },
    { icon: "🚀", title: "Unreal Tournament",          desc: "Legendary arena shooter.",                         tag: "Arena",      color: "#8b5cf6", link: "https://ut.pieter.com" },
    { icon: "🔬", title: "Half-Life",                  desc: "Half-Life in the browser.",                        tag: "Shooter",    color: "#f97316", link: "https://pixelsuft.github.io/hl/" },
    { icon: "💣", title: "Half-Life / CS 1.6",         desc: "Half-Life + Counter-Strike 1.6 (Xash3D).",         tag: "Shooter",    color: "#22d3ee", link: "https://x8bitrain.github.io/webXash/" },
    { icon: "😈", title: "Diablo",                     desc: "The original Diablo.",                             tag: "RPG",        color: "#b91c1c", link: "https://johnimril.github.io/diablo_web/" },
    { icon: "🐷", title: "Hedgewars",                  desc: "Worms-style artillery strategy.",                  tag: "Strategy",   color: "#84cc16", link: "https://webwars.link" },
    { icon: "🧱", title: "More GTA / Minecraft",       desc: "More fan ports on WASM Arcade.",                   tag: "Open World", color: "#14b8a6", link: "https://wasmarcade.com/" },
  ],

  // ---- About / text block ----
  about: {
    heading: "About this place",
    paragraphs: [
      "This is a clean, customizable hub for games and links. Everything you see is driven by a simple config file, so anyone can edit it in seconds.",
      "Swap the text below, drop in your own game links, and make it yours. Crazy animations included for free.",
    ],
    stats: [
      { value: "25", label: "Games" },
      { value: "24/7", label: "Online" },
      { value: "100%", label: "Free" },
    ],
  },

  // ---- "Other stuff" links ----
  links: [
    { icon: "🌐", title: "My Website",    desc: "Portfolio & projects",   href: "#" },
    { icon: "💬", title: "Discord",       desc: "Join the community",     href: "#" },
    { icon: "📺", title: "YouTube",       desc: "Gameplay & reviews",     href: "#" },
    { icon: "🐦", title: "Twitter / X",   desc: "Random thoughts",        href: "#" },
  ],

  // ---- Contact / footer ----
  contact: {
    heading: "Get in touch",
    text: "Want a game added or just want to say hi? Drop a message.",
    email: "hello@example.com",
  },
  socials: [
    { icon: "💬", href: "#", label: "Discord" },
    { icon: "📺", href: "#", label: "YouTube" },
    { icon: "🐦", href: "#", label: "Twitter" },
    { icon: "🐙", href: "#", label: "GitHub" },
  ],
  footerNote: "Built with caffeine & curiosity.",

  // ---- Look & feel ----
  theme: {
    accent1: "#7c5cff",   // purple
    accent2: "#00d4ff",   // cyan
    accent3: "#ff5ca8",   // pink
    background: "#07070d",
    glow: true,           // animated cursor glow
    particles: true,      // floating dots
  },
};
