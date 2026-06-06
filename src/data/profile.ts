export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  link?: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl: string;
  image: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export type Education = {
  school: string;
  program: string;
  period: string;
  location: string;
  details: string;
  score?: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ProfileHighlight = {
  platform: string;
  summary: string;
  metric: string;
  link: string;
};

export type Insight = {
  title: string;
  summary: string;
  link: string;
};

export const heroContent = {
  name: "Ayush Kumar",
  headline: "Open to Software Internships & New Grad SDE Roles",
  subline:
    "ECE student at IIIT Manipur. Built tools at ISRO, shipped features for maritime and fintech startups, and ranked 270 out of 27k in GSSoC. I pick up new tech fast and care about code that actually works in production.",
  availability: "Available for internships & full-time offers",
  location: "Bengaluru • Willing to relocate or work remote",
  avatar: "https://github.com/ayushrskiaa.png",
  ctaPrimary: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/ayush-kumar-iiitm",
  },
  ctaSecondary: {
    label: "View GitHub",
    href: "https://github.com/ayushrskiaa",
  },
  ctaThird: {
    label: "Download Resume",
    href: "https://drive.google.com/file/d/1oFhVbDDoY8i6cJkyARI7T09NrcgGjTtW/view",
  },
};

export const stats = [
  { label: "LeetCode rating", value: "1794" },
  { label: "GSooC Rank (An Open Source Program)", value: "270 / 27k" },
  { label: "Problem Solved (LeetCode+ GeeksforGeeks)", value: "400+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies Mastered", value: "20+" },
  { label: "Years of Coding", value: "3+" },
];

export const experiences: Experience[] = [
  {
    company: "Rupeeflo",
    role: "Software Developer Intern",
    period: "Nov 2025 – Present",
    location: "Remote",
    summary:
      "Working on product features at a fintech startup — full stack, fast pace.",
    bullets: [
      "Building and shipping features end-to-end in a TypeScript/React codebase.",
      "Working with senior engineers on architecture decisions and production deployments.",
      "Getting deep into fintech — payments, lending flows, and financial data pipelines.",
    ],
    link: "https://rupeeflo.com",
  },
  {
    company: "Zener Maritime Solutions",
    role: "SDE Intern",
    period: "May 2025 – Nov 2025",
    location: "Remote",
    summary:
      "Built inspection tooling for the naval industry — React frontend, Node.js backend, MongoDB.",
    bullets: [
      "Optimized React rendering and Node.js APIs — cut page load time by ~30%.",
      "Secured REST endpoints for real-time data capture, reduced latency ~20% under load.",
      "Cut release cycles by ~15% by tightening the review and deployment process.",
    ],
    link: "https://www.zenermaritime.com/",
  },
  {
    company: "ISRO · National Atmospheric Research Laboratory",
    role: "Research Intern",
    period: "Nov 2024 – Jan 2025",
    location: "Gadanki, Andhra Pradesh",
    summary:
      "Wrote Python scripts to automate radar image analysis for atmospheric research at NARL.",
    bullets: [
      "Cut manual data extraction time by 70% — the team stopped doing it by hand entirely.",
      "Built scripts to flag atmospheric anomalies in radar data, which sped up the research cycle.",
      "Made Python visualizations that fed directly into the team's ongoing research reports.",
    ],
  },
  {
    company: "DataPlay",
    role: "UI/UX Design Intern",
    period: "Oct 2024 – Nov 2024",
    location: "Remote",
    summary:
      "Designed product screens for a data storytelling platform based on user research.",
    bullets: [
      "Ran weekly user interviews to understand how people interact with data visualizations.",
      "Built high-fidelity Figma screens that three engineering squads shipped from directly.",
      "Set up a design token system that cut back-and-forth between design and eng.",
    ],
  },
  {
    company: "GirlScript Summer of Code",
    role: "Open Source Contributor",
    period: "May 2024 – Aug 2024",
    location: "Remote",
    summary:
      "Open source contributor — ranked 270 out of 27,000 participants.",
    bullets: [
      "Merged PRs across React and Node.js repos, focusing on accessibility and i18n fixes.",
      "Reviewed incoming patches and helped newer contributors get their first PRs merged.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "VaultEnv — Encrypted Secrets Manager",
    description:
      "CLI tool that stores API keys and credentials in an AES-256-GCM encrypted local vault and injects them into apps at runtime — keeping secrets out of shell environments, logs, and AI agents with zero code changes required.",
    stack: ["Node.js", "JavaScript", "AES-256-GCM", "PBKDF2", "Commander", "keytar"],
    repoUrl: "https://github.com/ayushrskiaa/vaultenv",
    liveUrl: "https://vaultenv-fe.vercel.app",
    image: "https://opengraph.githubassets.com/1/ayushrskiaa/vaultenv",
    links: [
      { label: "CLI Package", href: "https://github.com/ayushrskiaa/vaultenv" },
      { label: "Web Dashboard", href: "https://vaultenv-fe.vercel.app" },
    ],
  },
  {
    title: "Claude Monitor — Real-Time AI Observability",
    description:
      "Real-time dashboard that streams every Claude Code tool call to a live UI — with multi-tenant API key isolation, automatic flagging of sensitive file access, session filtering, and event distribution charts.",
    stack: ["Python", "FastAPI", "React", "Vite", "WebSocket", "SQLite", "Fly.io"],
    repoUrl: "https://github.com/ayushrskiaa/claude-monitor",
    liveUrl: "https://claude-monitor-fe.vercel.app",
    image: "https://opengraph.githubassets.com/1/ayushrskiaa/claude-monitor",
  },
  {
    title: "Orderlytics — Restaurant Control Suite",
    description:
      "Full-stack restaurant management system — handles orders, payments, and analytics. Reduced manual work by ~40% and held up fine under peak load.",
    stack: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    liveUrl: "https://food-ordering-ui.vercel.app",
    repoUrl: "https://github.com/ayushrskiaa/Restaurant-Reservation",
    image:
      "https://opengraph.githubassets.com/1/ayushrskiaa/Restaurant-Reservation",
  },
  {
    title: "Offline Hinglish → Hindi Transliteration",
    description:
      "Report-writing assistant for state police departments that works fully offline using TinyDB + Hindi-XLit, encrypts notes locally, and already saves 20+ officers hours of manual typing.",
    stack: ["HTML", "CSS", "JavaScript", "Flask", "TinyDB", "Hindi-XLit"],
    repoUrl: "https://github.com/ayushrskiaa/BP-writingTool",
    image: "https://opengraph.githubassets.com/1/ayushrskiaa/BP-writingTool",
  },
];

export const education: Education[] = [
  {
    school: "Indian Institute of Information Technology, Manipur",
    program: "B.Tech · Electronics & Communication Engineering",
    period: "2022 – Present",
    location: "Imphal, Manipur",
    details: "CGPA: 8.01 / 10 · Academic focus on Electronics and Communication Engineering.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Structures & Algorithms",
    items: ["Problem solving", "System design basics"],
  },
  {
    title: "Programming Languages",
    items: ["C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "Redux", "HTML", "CSS", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Middleware"],
  },
  {
    title: "Databases & Storage",
    items: ["MongoDB", "Firebase", "MySQL", "Cloudinary"],
  },
  {
    title: "Deployment & DevOps",
    items: ["Vercel", "Render", "AWS", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Linux", "VS Code"],
  },
];

export const profileHighlights: ProfileHighlight[] = [
  {
    platform: "LeetCode",
    summary: "Solved 400+ problems, consistently top 8% globally.",
    metric: "Max rating 1794",
    link: "https://leetcode.com/ayushrskiaa",
  },
  {
    platform: "GeeksforGeeks",
    summary: "150+ problems solved, consistently accurate across topics.",
    metric: "Top 10% accuracy",
    link: "https://auth.geeksforgeeks.org/user/ayushrskiaa/practice",
  },
  {
    platform: "CodeChef",
    summary: "Compete regularly in rated contests to stay sharp.",
    metric: "2★ rating",
    link: "https://www.codechef.com/users/ayushrskiaa",
  },
];

export const insights: Insight[] = [
  {
    title: "Ship UI faster with design tokens + Tailwind",
    summary:
      "A playbook I used at DataPlay to keep engineering velocity high while polishing UX micro-interactions.",
    link: "https://www.linkedin.com/in/ayush-kumar-iiitm",
  },
  {
    title: "Scaling auth for open-source projects",
    summary:
      "Lessons from securing GirlScript contributions without slowing down maintainers.",
    link: "https://github.com/ayushrskiaa",
  },
  {
    title: "Turning radar plots into actionable insights",
    summary:
      "How we modernized atmospheric research pipelines during my ISRO internship.",
    link: "https://www.linkedin.com/in/ayush-kumar-iiitm/details/experience",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "ayushrskiaa@gmail.com",
    href: "mailto:ayushrskiaa@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 82393 22263",
    href: "tel:+918239322263",
  },
  {
    label: "GitHub",
    value: "github.com/ayushrskiaa",
    href: "https://github.com/ayushrskiaa",
  },
  {
    label: "LinkedIn",
    value: "in/ayush-kumar-iiitm",
    href: "https://www.linkedin.com/in/ayush-kumar-iiitm",
  },
];

