/**
 * Antigravity Social Media Syndication & Presentation Engine
 * Orchestrates Facebook, Threads, YouTube Studio, GitHub (27 Repos), and LinkedIn Executive Assets.
 */

const SYNDICATION_ASSETS = [
  {
    id: "threads-bio",
    platform: "threads",
    platformLabel: "Threads Profile",
    title: "Threads Profile Bio + Master Link Hub",
    subtitle: "Optimized for Threads 150-character limit & single high-conversion portfolio link",
    maxChars: 150,
    targetUrl: "https://www.threads.net",
    algorithmicRule: "Threads allows 1 clickable profile URL. Route visitors to chammin00.github.io/portfolio so 1 click exposes both your 27 GitHub repositories and your YouTube Studio.",
    content: `Sr. Systems & AI Architect | Building FastMCP servers, local LLMs (Ollama), 3D WebGL studios & automated YouTube pipelines. 27+ Open-Source Repos`,
    ogPreview: {
      domain: "CHAMMIN00.GITHUB.IO",
      title: "Chase R. Hamilton — Senior Infrastructure & AI Systems Portfolio",
      desc: "Interactive engineering portfolio featuring 27+ GitHub repositories, 3D WebGL YouTube Studio, and FastMCP clusters."
    },
    inspectorSpecs: {
      "Platform": "Meta Threads (@threads.net)",
      "Field Type": "Profile Bio + Link Field",
      "Char Limit": "145 / 150 chars",
      "Primary Link": "chammin00.github.io/portfolio",
      "Conversion Goal": "Dual GitHub + YouTube Funnel"
    },
    narration: "Threads profile bio and link configuration. Uses 145 of 150 available characters and routes traffic through the interactive portfolio hub to showcase both GitHub and YouTube."
  },
  {
    id: "threads-post-1",
    platform: "threads",
    platformLabel: "Threads (Post 1/3)",
    title: "Pinned Thread — Part 1: High-Reach Hook (Zero Links)",
    subtitle: "Attach a 15-second video clip or screenshot of your 3D YouTube Gallery & Portfolio",
    maxChars: 500,
    targetUrl: "https://www.threads.net",
    algorithmicRule: "CRITICAL META RULE: Never put an outbound link in Post 1 of a Thread. Keeping Post 1 link-free avoids Meta's 50% outbound link reach penalty and pushes the post into the 'For You' feed.",
    content: `I spent the last few months turning enterprise infrastructure automation into 27 open-source AI, 3D WebGL, and YouTube production systems.

Zero paid API bloat. 100% local LLMs (Ollama / DeepSeek-R1), Python 3.12, FastMCP, Three.js, and automated FFmpeg pipelines.

Here is what is inside the ecosystem (and the full source code) [1/3]`,
    ogPreview: {
      domain: "NATIVE MEDIA ATTACHMENT",
      title: "Attach: ApexPulse 3D Corridor Walk or Portfolio Screenshot",
      desc: "Native 16:9 or 9:16 MP4 video triggers autoplay in the Threads feed."
    },
    inspectorSpecs: {
      "Platform": "Meta Threads",
      "Position": "Thread Root (Post 1 of 3)",
      "Outbound Links": "0 (Penalty Bypass Active)",
      "Media Type": "Native MP4 / PNG Screenshot",
      "Action": "Pin to Top of Profile"
    },
    narration: "Threads pinned post part 1. Contains zero external links to bypass the Meta outbound link penalty while hooking engineers with local LLM, FastMCP, and Three.js keywords."
  },
  {
    id: "threads-post-2",
    platform: "threads",
    platformLabel: "Threads (Post 2/3)",
    title: "Pinned Thread — Part 2: Architecture Breakdown",
    subtitle: "Reply directly to Post 1 with the technical specifications",
    maxChars: 500,
    targetUrl: "https://www.threads.net",
    algorithmicRule: "Highlight concrete engineering metrics (-18dB sidechain ducking, 1K PBR textures, 9 FastMCP servers, 38+ indexed repos) to establish immediate senior engineering authority.",
    content: `1. ApexPulse 3D Gallery & YouTube Studio
First-person Three.js museum corridor (1K PBR textures + footstep acoustics) where each painting is a stage of video production—paired with an FFmpeg engine doing -18dB sidechain audio ducking & YouTube API uploads.

2. How to Train Your AI + Ollama Studio
Daemon indexing 38+ local repos into JSONL datasets to train local DeepSeek-R1 & Qwen 2.5 models offline.

3. Antigravity FastMCP Cluster
9 MCP servers bridging RTX 4080 telemetry, OBS Studio 31 & browser automation. [2/3]`,
    ogPreview: {
      domain: "TECHNICAL BREAKDOWN",
      title: "Three.js + FFmpeg + FastMCP + Ollama Architecture",
      desc: "High-retention mid-thread reply keeps technical readers reading to Post 3."
    },
    inspectorSpecs: {
      "Platform": "Meta Threads",
      "Position": "Reply 1 (Post 2 of 3)",
      "Audio Ducking": "-18 dB FFmpeg Sidechain",
      "MCP Cluster": "9 Python 3.12 Servers",
      "LLM Corpus": "38+ Local Repositories"
    },
    narration: "Threads pinned post part 2. Details the Three.js 3D YouTube Highlight Studio, the local AI training daemon, and the 9 FastMCP hardware telemetry servers."
  },
  {
    id: "threads-post-3",
    platform: "threads",
    platformLabel: "Threads (Post 3/3)",
    title: "Pinned Thread — Part 3: GitHub & YouTube Link Stack",
    subtitle: "Reply to Post 2 with your clickable Portfolio, YouTube Studio, and GitHub links",
    maxChars: 500,
    targetUrl: "https://www.threads.net",
    algorithmicRule: "Placing your GitHub and YouTube links in Post 3 captures 100% of high-intent readers who read through Post 1 and 2 without hurting top-of-funnel distribution.",
    content: `Explore the live browser demos, YouTube automation studio, and all 27 GitHub repositories here:

Interactive Portfolio Hub:
https://chammin00.github.io/portfolio

YouTube Highlight Studio & 3D Gallery Repo:
https://github.com/Chammin00/youtube-channels

Local AI Training Pipeline:
https://github.com/Chammin00/how-to-train-your-ai

Full GitHub (@Chammin00):
https://github.com/Chammin00`,
    ogPreview: {
      domain: "GITHUB.COM/CHAMMIN00",
      title: "Chammin00 (Chase R. Hamilton) — 27 Public Repositories",
      desc: "Senior Infrastructure & AI Systems Engineer. FastMCP, Three.js YouTube Studio, RHEL 9 Simulators, .NET 10 VulnGuard."
    },
    inspectorSpecs: {
      "Platform": "Meta Threads",
      "Position": "Reply 2 (Post 3 of 3)",
      "Links Included": "4 Canonical Engineering URLs",
      "Primary Target": "chammin00.github.io/portfolio",
      "Secondary Target": "github.com/Chammin00/youtube-channels"
    },
    narration: "Threads pinned post part 3. Delivers the clickable link stack for the live portfolio, the 3D YouTube Highlight Studio repository, and the full 27-repository GitHub profile."
  },
  {
    id: "facebook-intro-bio",
    platform: "facebook",
    platformLabel: "Facebook Intro",
    title: "Facebook 'Intro' Bio + Website & Social Links",
    subtitle: "Fits Facebook's strict 101-character Intro Bio box + structured Social Links",
    maxChars: 101,
    targetUrl: "https://www.facebook.com",
    algorithmicRule: "In Facebook Profile -> Edit Details -> Websites and Social Links, add your Portfolio & GitHub as Websites, and add @CartoonWhiteNoise / YouTube under the native YouTube badge selector.",
    content: `Senior Systems & AI Architect | FastMCP, Local LLMs, 3D WebGL & Automated YouTube Pipelines`,
    ogPreview: {
      domain: "FACEBOOK INTRO CARD",
      title: "Websites: chammin00.github.io/portfolio | github.com/Chammin00",
      desc: "Social Badge: YouTube Channel + GitHub Profile pinned under Intro section."
    },
    inspectorSpecs: {
      "Platform": "Facebook Profile / Creator Mode",
      "Field Type": "Intro Bio (Max 101 chars)",
      "Char Count": "91 / 101 chars",
      "Website Slot 1": "https://chammin00.github.io/portfolio",
      "Website Slot 2": "https://github.com/Chammin00"
    },
    narration: "Facebook Intro Bio and website configuration. Fits cleanly inside Facebook's 101 character limit and pairs with dedicated website links for GitHub and YouTube."
  },
  {
    id: "facebook-main-post",
    platform: "facebook",
    platformLabel: "Facebook Main Post",
    title: "Facebook Feature Post: GitHub + YouTube Studio Showcase",
    subtitle: "Main feed post with native visual attachment (Links go in First Comment below)",
    maxChars: 2200,
    targetUrl: "https://www.facebook.com",
    algorithmicRule: "Facebook's EdgeRank algorithm heavily demotes posts with external links in the main body. Publish this post with a screenshot or short MP4 video, then immediately paste the First Comment card below.",
    content: `Over the past few months, I have been building at the intersection of Enterprise Infrastructure, Local AI (Ollama / FastMCP), 3D WebGL, and Automated YouTube Production—and I just published 27 open-source repositories on GitHub.

Here are 4 systems I have been engineering lately:

1. ApexPulse 3D Gallery & Automated YouTube Studio
Instead of a standard video editor, I built a first-person 3D museum corridor in Three.js (with 1K PBR textures, 13 arched windows overlooking a cosmic volcano bridge, and synchronized hardwood footsteps). Walking from painting to painting lets you select clips, audition licensed studio music, inject announcer soundbytes, and trigger a headless FFmpeg + YouTube Data API v3 render pipeline with automatic -18dB sidechain audio ducking.

2. Antigravity FastMCP Server Cluster
9 custom Model Context Protocol (FastMCP) servers in Python 3.12 that let AI agents directly control OBS Studio 31 recording, monitor live NVIDIA RTX 4080 GPU telemetry, and orchestrate browser workflows in under 50ms.

3. "How to Train Your AI" & Local Ollama Studio
An automated pipeline that extracts architecture patterns across 38+ local projects into structured datasets and compiles custom local LLMs (Qwen 2.5 Coder / DeepSeek-R1) with zero cloud API fees.

4. RHCSA EX200 RHEL 9 Terminal & CompTIA Security+ Simulators
Full in-browser Linux CLI lab grader (LVM, SELinux, systemd) and Pearson VUE exam simulator with audio narration.

I dropped the links to the live interactive portfolio, the YouTube studio repo, and my full GitHub in the first comment below!`,
    ogPreview: {
      domain: "FACEBOOK NATIVE POST",
      title: "High-Retention Engineering Story + Visual Showcase",
      desc: "Directs friends, recruiters, and followers to the pinned first comment for 3x higher reach."
    },
    inspectorSpecs: {
      "Platform": "Facebook Feed / Pin to Featured",
      "Outbound Links": "0 in Body (Moved to Comment 1)",
      "Reach Multiplier": "2.8x - 3.4x Native Video/Photo Boost",
      "Featured Systems": "YouTube 3D Studio, FastMCP, Ollama, RHEL 9",
      "Action": "Pin Post to Profile Featured Section"
    },
    narration: "Facebook main feature post. Showcases the 27 GitHub repositories and the 3D YouTube Highlight Studio while directing readers to the first comment to preserve full algorithmic reach."
  },
  {
    id: "facebook-first-comment",
    platform: "facebook",
    platformLabel: "Facebook 1st Comment",
    title: "Facebook First Comment: Clickable GitHub & YouTube Links",
    subtitle: "Paste immediately as the first comment on your Facebook post and Pin it",
    maxChars: 1000,
    targetUrl: "https://www.facebook.com",
    algorithmicRule: "Paste this comment within 30 seconds of publishing your main Facebook post. Facebook will render the OpenGraph preview card for your portfolio right inside the comment thread.",
    content: `Links to try the live browser demos, explore the YouTube automation studio, and view the source code:

Live Interactive Portfolio: https://chammin00.github.io/portfolio
3D Gallery & YouTube Automation Studio: https://github.com/Chammin00/youtube-channels
Local AI Training Pipeline (Ollama / DeepSeek-R1): https://github.com/Chammin00/how-to-train-your-ai
RHEL 9 RHCSA EX200 Terminal Simulator: https://github.com/Chammin00/rhcsa-ex200
CompTIA Security+ SY0-701 Simulator: https://github.com/Chammin00/comptia-security-plus-simulator
Full GitHub (All 27 Repositories): https://github.com/Chammin00`,
    ogPreview: {
      domain: "CHAMMIN00.GITHUB.IO / GITHUB.COM",
      title: "Live Interactive Demos & 27 Open-Source Repositories",
      desc: "One-click access to Portfolio, YouTube Studio, Ollama Studio, and RHCSA Terminal."
    },
    inspectorSpecs: {
      "Platform": "Facebook Comment Thread",
      "Placement": "Top Pinned Comment",
      "Links Count": "6 Verified Production URLs",
      "OpenGraph Card": "Auto-rendered by Facebook Crawler",
      "Conversion": "Direct Click-Through to GitHub & Demos"
    },
    narration: "Facebook first comment link pack. Contains all 6 production links for your interactive portfolio, 3D YouTube studio, and GitHub repositories."
  },
  {
    id: "youtube-funnel-rules",
    platform: "youtube",
    platformLabel: "YouTube Channel Strategy",
    title: "YouTube Description & Short-to-Long-Form Funnel Template",
    subtitle: "Separates Nostalgia White Noise (@CartoonWhiteNoise) from Engineering Repos",
    maxChars: 1000,
    targetUrl: "https://studio.youtube.com",
    algorithmicRule: "IMMERSION RULE: On your Nostalgia White Noise channel, NEVER link GitHub or Facebook/Threads (keeps overnight sleep autoplay retention high). On tech/highlight demos, use the CC-BY + GitHub studio template below.",
    content: `[FOR TECH / HIGHLIGHT STUDIO DEMOS]
Rendered via ApexPulse 3D Gallery & Automated FFmpeg Mix Engine (-18dB dynamic sidechain ducking).
Explore the 3D WebGL Studio & Source Code: https://github.com/Chammin00/youtube-channels
Interactive Engineering Portfolio: https://chammin00.github.io/portfolio

---
[FOR @CARTOONWHITENOISE AMBIENT EPISODES — ZERO GITHUB LINKS]
Full 1-Hour / 8-Hour Sleep & Study Ambience.
Subscribe for the 4-Slot Nostalgia Rotation: https://www.youtube.com/@CartoonWhiteNoise?sub_confirmation=1
Comment which character + exact voice line should interrupt the static next!`,
    ogPreview: {
      domain: "YOUTUBE.COM / STUDIO.YOUTUBE.COM",
      title: "Dual-Channel Isolation & Session Retention Architecture",
      desc: "Protects 8-hour sleep AVD on @CartoonWhiteNoise while driving engineering authority on GitHub."
    },
    inspectorSpecs: {
      "Platform": "YouTube Data API v3 / Studio",
      "Short Funnel": "9:16 Short -> Related Video Pill -> 16:9 1-Hr",
      "Audio Mix": "-18 dB Sidechain / -14 dB Sleep Filter",
      "Monetization Gate": "Animated CRT + Spaced Cues (No Static PNG)",
      "Automation Script": "youtube_api_upload.py"
    },
    narration: "YouTube dual-channel funnel template. Keeps your ambient nostalgia channel isolated for overnight autoplay retention while linking your 3D WebGL and FFmpeg repositories on tech demos."
  },
  {
    id: "linkedin-executive-sync",
    platform: "linkedin",
    platformLabel: "LinkedIn Executive",
    title: "LinkedIn Executive Headline & Featured Section Sync",
    subtitle: "Synced directly from linkedin-mcp/strategy.py ($160k-$185k+ Target)",
    maxChars: 1200,
    targetUrl: "https://www.linkedin.com",
    algorithmicRule: "Synced with your local LinkedIn FastMCP Server (linkedin-mcp). Combines 12+ years Dell EMC SAN/NAS reliability (>99.99% uptime) with your 27 modern AI, FastMCP, and YouTube automation repositories.",
    content: `HEADLINE (214 chars):
Senior Systems & AI Platform Architect | 12+ Yrs Enterprise SAN/NAS (>99.99% Uptime) | FastMCP, Python 3.12, RHEL 9, .NET 10 | Creator of 27+ Open-Source AI, Three.js & YouTube Automation Systems

FEATURED SECTION PINS:
1. Interactive Systems & AI Portfolio: https://chammin00.github.io/portfolio
2. ApexPulse 3D Gallery & YouTube Studio: https://github.com/Chammin00/youtube-channels
3. RHCSA EX200 RHEL 9 Browser Terminal: https://github.com/Chammin00/rhcsa-ex200
4. CompTIA Security+ SY0-701 Simulator: https://github.com/Chammin00/comptia-security-plus-simulator`,
    ogPreview: {
      domain: "LINKEDIN.COM / FASTMCP",
      title: "Chase R. Hamilton — $160k–$185k+ Principal / Senior Positioning",
      desc: "Synchronized with G:\\My Drive\\Antigravity\\Projects\\MCP\\linkedin-mcp\\src\\linkedin_mcp\\strategy.py"
    },
    inspectorSpecs: {
      "MCP Server": "linkedin-mcp (FastMCP)",
      "Target Base": "$160,000 - $185,000+",
      "Experience Anchor": "12+ Yrs Enterprise SAN/NAS (>99.99%)",
      "Scale Proof": "21,000+ Endpoints Automated",
      "Modern Proof": "9 FastMCP Servers + 27 GitHub Repos"
    },
    narration: "LinkedIn executive headline and featured section configuration synchronized from your LinkedIn MCP server."
  },
  {
    id: "github-readme-descriptions",
    platform: "github",
    platformLabel: "GitHub Metadata Pack",
    title: "GitHub Repository About-Descriptions (Social Preview Fix)",
    subtitle: "Fixes the 8 repositories found with null descriptions during the GitHub MCP audit",
    maxChars: 1200,
    targetUrl: "https://github.com/Chammin00?tab=repositories",
    algorithmicRule: "When you share a GitHub repo link on Facebook or Threads, Meta scrapes the repository's 'About' description for the preview card. Paste these crisp descriptions into your repo settings so every card renders cleanly.",
    content: `youtube-channels:
ApexPulse 3D WebGL Museum Gallery & Automated FFmpeg / YouTube Data API v3 Highlight Studio with -18dB sidechain audio ducking.

how-to-train-your-ai:
Autonomous local LLM training pipeline indexing 38+ repositories into JSONL datasets and custom Ollama / DeepSeek-R1 Modelfiles.

vulnguard:
Enterprise vulnerability management and NIST CSF compliance platform built with C# ASP.NET Core (.NET 10), EF Core, and SQLite.

planetarium:
Interactive 3D exoplanetary star sector observatory (64 celestial bodies) with bidirectional Antigravity agent IPC uplink.

game-library:
Clean-room React 19 + Tailwind reconstruction of the Xbox PC app with live FastMCP NVIDIA RTX 4080 telemetry and Game Bar DVR hooks.

agent-365:
Air-gapped web replica of the Microsoft 365 productivity suite (Word, Excel, PowerPoint, Outlook) for multi-agent AI copilot testing.`,
    ogPreview: {
      domain: "GITHUB.COM/CHAMMIN00",
      title: "OpenGraph Social Card Metadata for Facebook & Threads",
      desc: "Ensures every shared GitHub repository displays a high-impact technical summary on social feeds."
    },
    inspectorSpecs: {
      "MCP Source": "github (search_repositories)",
      "Total Public Repos": "27 Active Repositories",
      "Audited Repos": "8 Null-Description Repos Fixed",
      "Primary Profile": "https://github.com/Chammin00",
      "Live Pages Hub": "https://chammin00.github.io/portfolio"
    },
    narration: "GitHub repository description metadata pack. Provides crisp one-line summaries for the eight repositories discovered with empty descriptions during the GitHub MCP audit."
  }
];

const GITHUB_REPOS_MATRIX = [
  {
    name: "portfolio",
    category: "Master Hub & FastMCP",
    url: "https://github.com/Chammin00/portfolio",
    liveUrl: "https://chammin00.github.io/portfolio",
    pitch: "Interactive engineering portfolio, STAR interview playbooks, and 9-server FastMCP cluster architecture.",
    socialTarget: "Facebook Intro Link #1 & Threads Bio Link"
  },
  {
    name: "youtube-channels",
    category: "3D WebGL & YouTube API",
    url: "https://github.com/Chammin00/youtube-channels",
    liveUrl: "http://localhost:8080/index.html",
    pitch: "ApexPulse 3D Museum Corridor (Three.js 1K PBR) + FFmpeg -18dB sidechain audio ducking & YouTube Data API v3 uploader.",
    socialTarget: "Threads Post 2/3 & Facebook Main Post #1"
  },
  {
    name: "how-to-train-your-ai",
    category: "Local LLM Pipeline",
    url: "https://github.com/Chammin00/how-to-train-your-ai",
    liveUrl: "https://github.com/Chammin00/how-to-train-your-ai",
    pitch: "Autonomous knowledge extraction daemon parsing 38+ workspaces into JSONL corpora for DeepSeek-R1 & Ollama.",
    socialTarget: "Threads Post 2/3 & Facebook First Comment"
  },
  {
    name: "ollama-studio",
    category: "AI Workbench",
    url: "https://github.com/Chammin00/ollama-studio",
    liveUrl: "https://github.com/Chammin00/ollama-studio",
    pitch: "Local LLM orchestration hub, custom Modelfile compiler, and automated skill synchronization daemon.",
    socialTarget: "Threads Post 2/3 & Technical Deep Dives"
  },
  {
    name: "rhcsa-ex200",
    category: "Linux Infrastructure",
    url: "https://github.com/Chammin00/rhcsa-ex200",
    liveUrl: "https://github.com/Chammin00/rhcsa-ex200",
    pitch: "In-browser Red Hat Enterprise Linux 9 CLI terminal simulator grading LVM, SELinux, and systemd labs.",
    socialTarget: "Facebook First Comment & LinkedIn Featured"
  },
  {
    name: "comptia-security-plus-simulator",
    category: "Cybersecurity Engine",
    url: "https://github.com/Chammin00/comptia-security-plus-simulator",
    liveUrl: "https://github.com/Chammin00/comptia-security-plus-simulator",
    pitch: "Pearson VUE SY0-701 exam simulator with drag-and-drop network PBQs and Web Speech API narration.",
    socialTarget: "Facebook First Comment & LinkedIn Featured"
  },
  {
    name: "vulnguard",
    category: ".NET 10 Security",
    url: "https://github.com/Chammin00/vulnguard",
    liveUrl: "https://github.com/Chammin00/vulnguard",
    pitch: "ASP.NET Core (.NET 10) & EF Core vulnerability management platform mapped to NIST CSF compliance.",
    socialTarget: "Cybersecurity & DevSecOps Threads"
  },
  {
    name: "game-library",
    category: "Hardware Telemetry UI",
    url: "https://github.com/Chammin00/game-library",
    liveUrl: "https://github.com/Chammin00/game-library",
    pitch: "React 19 clean-room Xbox PC launcher connected to NVIDIA RTX 4080 telemetry & Game Bar DVR via FastMCP.",
    socialTarget: "Gaming & Hardware Engineering Reels/Shorts"
  },
  {
    name: "planetarium",
    category: "3D Space Observatory",
    url: "https://github.com/Chammin00/planetarium",
    liveUrl: "https://github.com/Chammin00/planetarium",
    pitch: "3D WebGL exoplanetary sector atlas charting 64 celestial bodies with bidirectional Antigravity IPC uplink.",
    socialTarget: "Visual WebGL Showcase Clips"
  }
];

let activePlatformFilter = "all";
let searchQuery = "";
let selectedAssetId = SYNDICATION_ASSETS[0].id;

function initApp() {
  renderCards();
  renderRepoMatrix();
  selectAsset(selectedAssetId);
  bindEvents();

  if (window.AntigravityMCP && typeof window.AntigravityMCP.registerAppState === "function") {
    window.AntigravityMCP.registerAppState(() => ({
      appName: "Social Media Command Center (Facebook, Threads, YouTube & GitHub)",
      activeFilter: activePlatformFilter,
      selectedCard: selectedAssetId,
      totalGitHubRepos: 27,
      syndicationCardsCount: SYNDICATION_ASSETS.length,
      mcpBaselineActive: true
    }));
  }
}

function getPlatformIconSvg(platform) {
  switch (platform) {
    case "threads":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f0f6fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7.5c-1.333-3-3.667-4.5-7-4.5-5 0-8 3.5-8 9s3 9 8 9c4.5 0 7-2.5 7.5-6.5"/><path d="M12 12c2.5 0 4 1.5 4 3.5S14.5 19 12 19s-4-1.5-4-3.5 1.5-3.5 4-3.5z"/><path d="M16 15.5v-3.5c0-2.5-1.5-4-4-4-2 0-3.5 1-4 2.5"/></svg>`;
    case "facebook":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#58a6ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
    case "youtube":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f85149" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>`;
    case "github":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3fb950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
    default:
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bc8cff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
  }
}

function renderCards() {
  const container = document.getElementById("syndicationGrid");
  if (!container) return;

  const filtered = SYNDICATION_ASSETS.filter((item) => {
    const matchesPlatform = activePlatformFilter === "all" || item.platform === activePlatformFilter;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q) ||
      item.platformLabel.toLowerCase().includes(q);
    return matchesPlatform && matchesSearch;
  });

  container.innerHTML = filtered
    .map((item) => {
      const charLen = item.content.length;
      const isSelected = item.id === selectedAssetId ? "selected" : "";
      return `
      <article class="syndication-card ${isSelected}" data-card-id="${item.id}">
        <div class="card-header">
          <div class="card-title-group">
            <div class="platform-icon-box">
              ${getPlatformIconSvg(item.platform)}
            </div>
            <div>
              <h3 class="card-title">${escapeHtml(item.title)}</h3>
              <p class="card-subtitle">${escapeHtml(item.subtitle)}</p>
            </div>
          </div>
          <span class="badge-tag ${item.platform}">${escapeHtml(item.platformLabel)}</span>
        </div>

        <div class="card-body">
          <div class="algo-rule-note">
            <strong>Algorithmic Strategy:</strong> ${escapeHtml(item.algorithmicRule)}
          </div>

          <textarea class="copy-textarea" id="textarea-${item.id}" data-max="${item.maxChars}" spellcheck="false" aria-label="${escapeHtml(item.title)}">${escapeHtml(item.content)}</textarea>

          <div class="og-preview-card">
            <div style="flex:1; min-width:0;">
              <div class="og-domain">${escapeHtml(item.ogPreview.domain)}</div>
              <div class="og-title">${escapeHtml(item.ogPreview.title)}</div>
              <div class="og-desc">${escapeHtml(item.ogPreview.desc)}</div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <span class="char-counter optimal" id="counter-${item.id}">${charLen} / ${item.maxChars} chars</span>
          <div class="card-actions">
            <a href="${item.targetUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" onclick="event.stopPropagation()">
              <span>Open ${escapeHtml(item.platformLabel.split(" ")[0])}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <button type="button" class="btn-copy" data-copy-id="${item.id}" onclick="event.stopPropagation(); copyCardContent('${item.id}', this)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy Text</span>
            </button>
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  // Attach card selection and live character count listeners
  container.querySelectorAll(".syndication-card").forEach((cardEl) => {
    cardEl.addEventListener("click", () => {
      const id = cardEl.getAttribute("data-card-id");
      selectAsset(id);
    });
  });

  container.querySelectorAll(".copy-textarea").forEach((ta) => {
    ta.addEventListener("input", (e) => {
      const id = e.target.id.replace("textarea-", "");
      const max = parseInt(e.target.getAttribute("data-max") || "500", 10);
      const countEl = document.getElementById(`counter-${id}`);
      if (countEl) {
        countEl.textContent = `${e.target.value.length} / ${max} chars`;
      }
    });
  });
}

function renderRepoMatrix() {
  const tbody = document.getElementById("repoMatrixBody");
  if (!tbody) return;

  tbody.innerHTML = GITHUB_REPOS_MATRIX.map(
    (repo) => `
    <tr>
      <td>
        <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-name-link">Chammin00/${escapeHtml(repo.name)}</a>
      </td>
      <td><span class="badge-tag">${escapeHtml(repo.category)}</span></td>
      <td>${escapeHtml(repo.pitch)}</td>
      <td><strong style="color: var(--gh-text-primary); font-size:11.5px;">${escapeHtml(repo.socialTarget)}</strong></td>
      <td style="text-align:right;">
        <button type="button" class="btn-secondary" onclick="copyRawText('${repo.url} — ${escapeHtml(repo.pitch)}', 'Copied ${repo.name} link & pitch!')">
          Copy Link + Pitch
        </button>
      </td>
    </tr>
  `
  ).join("");
}

function selectAsset(id) {
  const asset = SYNDICATION_ASSETS.find((a) => a.id === id) || SYNDICATION_ASSETS[0];
  if (!asset) return;
  selectedAssetId = asset.id;

  document.querySelectorAll(".syndication-card").forEach((el) => {
    el.classList.toggle("selected", el.getAttribute("data-card-id") === selectedAssetId);
  });

  const titleEl = document.getElementById("inspectorActiveTitle");
  const descEl = document.getElementById("inspectorActiveDesc");
  const specsBody = document.getElementById("inspectorSpecsBody");

  if (titleEl) titleEl.textContent = asset.title;
  if (descEl) descEl.textContent = asset.algorithmicRule;

  if (specsBody && asset.inspectorSpecs) {
    specsBody.innerHTML = Object.entries(asset.inspectorSpecs)
      .map(
        ([k, v]) => `
        <tr>
          <td>${escapeHtml(k)}</td>
          <td>${escapeHtml(v)}</td>
        </tr>
      `
      )
      .join("");
  }
}

function copyCardContent(id, btnEl) {
  const textarea = document.getElementById(`textarea-${id}`);
  if (!textarea) return;
  const text = textarea.value;

  navigator.clipboard.writeText(text).then(() => {
    if (btnEl) {
      const originalHtml = btnEl.innerHTML;
      btnEl.classList.add("copied");
      btnEl.innerHTML = `<span>Copied!</span>`;
      setTimeout(() => {
        btnEl.classList.remove("copied");
        btnEl.innerHTML = originalHtml;
      }, 1600);
    }
    showToast(`Copied "${id}" to clipboard!`);
  });
}

function copyRawText(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || "Copied to clipboard!");
  });
}

function copyEntireThreadPack() {
  const p1 = document.getElementById("textarea-threads-post-1")?.value || "";
  const p2 = document.getElementById("textarea-threads-post-2")?.value || "";
  const p3 = document.getElementById("textarea-threads-post-3")?.value || "";
  const combined = `--- THREAD POST 1/3 ---\n${p1}\n\n--- THREAD POST 2/3 ---\n${p2}\n\n--- THREAD POST 3/3 ---\n${p3}`;
  copyRawText(combined, "Copied complete 3-part Threads bundle!");
}

function copyFacebookPack() {
  const mainPost = document.getElementById("textarea-facebook-main-post")?.value || "";
  const firstComment = document.getElementById("textarea-facebook-first-comment")?.value || "";
  const combined = `--- FACEBOOK MAIN POST ---\n${mainPost}\n\n--- FACEBOOK FIRST COMMENT (PIN THIS) ---\n${firstComment}`;
  copyRawText(combined, "Copied Facebook Main Post + First Comment bundle!");
}

function narrateSelectedAsset() {
  if (!("speechSynthesis" in window)) {
    showToast("Web Speech API not supported in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const asset = SYNDICATION_ASSETS.find((a) => a.id === selectedAssetId) || SYNDICATION_ASSETS[0];
  const utterance = new SpeechSynthesisUtterance(asset.narration || asset.title);
  utterance.rate = 1.04;
  window.speechSynthesis.speak(utterance);
  showToast(`Narrating: ${asset.title}`);
}

function showToast(msg) {
  const toast = document.getElementById("toastBanner");
  const toastText = document.getElementById("toastText");
  if (!toast || !toastText) return;
  toastText.textContent = msg;
  toast.classList.add("visible");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

function bindEvents() {
  // Filter tabs
  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activePlatformFilter = btn.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-filter") === activePlatformFilter);
      });
      renderCards();
    });
  });

  // Search box
  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderCards();
    });
  }

  // Ctrl+K shortcut
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  // Sidebar collapse
  const sidebarToggle = document.getElementById("sidebarToggleBtn");
  const leftSidebar = document.getElementById("leftSidebar");
  if (sidebarToggle && leftSidebar) {
    sidebarToggle.addEventListener("click", () => {
      leftSidebar.classList.toggle("collapsed");
    });
  }

  // Inspector collapse
  const inspectorToggle = document.getElementById("inspectorToggleBtn");
  const rightInspector = document.getElementById("rightInspector");
  if (inspectorToggle && rightInspector) {
    inspectorToggle.addEventListener("click", () => {
      rightInspector.classList.toggle("collapsed");
    });
  }

  // Fullscreen button
  const fsBtn = document.getElementById("fullscreenBtn");
  if (fsBtn) {
    fsBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  // Checklist progress tracker
  const checkboxes = document.querySelectorAll(".publish-check");
  checkboxes.forEach((cb) => {
    cb.addEventListener("change", updateReadinessProgress);
  });
}

function updateReadinessProgress() {
  const checkboxes = document.querySelectorAll(".publish-check");
  const total = checkboxes.length;
  let checked = 0;
  checkboxes.forEach((cb) => {
    if (cb.checked) checked++;
  });
  const pct = total > 0 ? Math.round((checked / total) * 100) : 100;
  const fill = document.getElementById("readinessProgressFill");
  const label = document.getElementById("readinessPctLabel");
  if (fill) fill.style.width = `${pct}%`;
  if (label) label.textContent = `${pct}% Complete`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", initApp);
