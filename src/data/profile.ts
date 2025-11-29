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
    "Driven B.Tech (ECE) candidate at IIIT Manipur seeking impactful internship or full-time engineering opportunities. Blending strong DSA problem-solving (top 8% LeetCode) with hands-on product delivery for startups, open source, and research labs. Ready to contribute and grow in dynamic, tech-forward teams.",
  availability: "Available for internships & full-time offers",
  location: "Bengaluru • Willing to relocate or work remote",
  avatar: "https://github.com/ayushrskiaa.png",
  ctaPrimary: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/ayush-kumar-792916257",
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
];

export const experiences: Experience[] = [
  {
    company: "Zener Maritime Solutions",
    role: "SDE Intern",
    period: "May 2025 – Present",
    location: "Remote",
    summary:
      "Shipping naval inspection tooling end-to-end across React, Node.js, and MongoDB stacks.",
    bullets: [
      "Improved responsiveness by 30% through React optimizations and Node.js performance tuning.",
      "Secured REST APIs for real-time data capture, trimming latency by 20% under concurrent usage.",
      "Accelerated releases by 15% by pairing Agile ceremonies with focused code reviews.",
    ],
    link: "https://www.zenermaritime.com/",
  },
  {
    company: "ISRO · National Atmospheric Research Laboratory",
    role: "Research Intern",
    period: "Nov 2024 – Jan 2025",
    location: "Gadanki, Andhra Pradesh",
    summary:
      "Automated radar image analysis pipelines to unlock faster atmospheric research.",
    bullets: [
      "Cut manual data extraction time by 70% with Python scripts for radar signal processing.",
      "Built analytics that surfaced atmospheric anomalies sooner for senior scientists.",
      "Presented findings with visualizations that informed ongoing research decisions.",
    ],
  },
  {
    company: "DataPlay",
    role: "UI/UX Design Intern",
    period: "Oct 2024 – Nov 2024",
    location: "Remote",
    summary:
      "Partnered with product teams to translate research insights into polished web experiences.",
    bullets: [
      "Conducted weekly user interviews to validate flows for data storytelling tools.",
      "Delivered high-fidelity Figma specs that unblocked three squads simultaneously.",
      "Standardized design tokens that sped up front-end implementation in React.",
    ],
  },
  {
    company: "GirlScript Summer of Code",
    role: "Open Source Contributor",
    period: "May 2024 – Aug 2024",
    location: "Remote",
    summary:
      "Shipped production-grade features across community React and Node.js repositories.",
    bullets: [
      "Ranked 270/27,000 contributors thanks to steady PRs and mentorship.",
      "Focused on accessibility fixes, automation, and multilingual support libraries.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Orderlytics — Restaurant Control Suite",
    description:
      "Deployed a full-stack restaurant OS with secure payments, interactive analytics, and automated order workflows that cut manual effort by 40% while staying responsive under peak load.",
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
  {
    title: "EverHigh — E-commerce Suite",
    description:
      "Crafted an engaging storefront with smooth animations, wishlist/cart/checkout flows, plus an admin ops hub with product management controls and Recharts-powered insights.",
    stack: ["React", "Tailwind", "Recharts", "Figma"],
    repoUrl: "https://github.com/ayushrskiaa/EverHigh",
    liveUrl: "https://everhigh-user-dashboard.vercel.app",
    links: [
      { label: "User Dashboard", href: "https://everhigh-user-dashboard.vercel.app" },
      {
        label: "Admin Dashboard",
        href: "https://everhigh-admin-dashborad.vercel.app",
      },
    ],
    image: "https://opengraph.githubassets.com/1/ayushrskiaa/EverHigh",
  },
];

export const education: Education[] = [
  {
    school: "Indian Institute of Information Technology, Manipur",
    program: "B.Tech · Electronics & Communication Engineering",
    period: "2022 – Present",
    location: "Imphal, Manipur",
    details: "CGPA: 8.01 / 10 · Pre-final year · Academic focus on embedded systems + web stacks.",
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
    title: "Deployment & Hosting",
    items: ["Vercel", "Render", "GitHub Actions"],
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
    summary: "150+ solutions with top decile accuracy across topics.",
    metric: "Top 10% accuracy",
    link: "https://auth.geeksforgeeks.org/user/ayushrskiaa/practice",
  },
  {
    platform: "CodeChef",
    summary: "Active in rated contests, constantly iterating on problem solving.",
    metric: "2★ rating",
    link: "https://www.codechef.com/users/ayushrskiaa",
  },
];

export const insights: Insight[] = [
  {
    title: "Ship UI faster with design tokens + Tailwind",
    summary:
      "A playbook I used at DataPlay to keep engineering velocity high while polishing UX micro-interactions.",
    link: "https://www.linkedin.com/in/ayush-kumar-792916257",
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
    link: "https://www.linkedin.com/in/ayush-kumar-792916257/details/experience",
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
    value: "in/ayush-kumar-792916257",
    href: "https://www.linkedin.com/in/ayush-kumar-792916257",
  },
];

