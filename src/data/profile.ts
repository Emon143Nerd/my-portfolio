export const profile = {
  name: "Emon Bepari",
  role: "AI Automation Engineer & Full-Stack Developer",
  tagline:
    "I build AI agents, n8n workflows and full-stack apps that businesses can trust with real data. The AI interprets, deterministic logic decides, and every step is logged.",
  location: "Dhaka, Bangladesh · open to remote",
  email: "emon99284@gmail.com",
  phone: "+8801630175225",
  whatsapp: "https://wa.me/8801630175225",
  github: "https://github.com/Emon143Nerd",
  linkedin: "https://www.linkedin.com/in/emon-bepari",
  resumes: [
    { label: "AI Automation CV", href: "/Emon_Bepari_AI_Automation.pdf" },
    { label: "Software Engineer CV", href: "/Emon_Bepari_Software_Engineer.pdf" },
  ],
};

export const stats = [
  { value: "3.91", label: "CGPA, B.Sc. CSE (UIU)" },
  { value: "36", label: "Public GitHub repos" },
  { value: "14", label: "AI intents routed in SalesFixr" },
  { value: "2", label: "University lab awards" },
];

export const about = [
  "I'm a software engineer from United International University (CSE, CGPA 3.91) who likes turning messy, repetitive business work into reliable systems.",
  "Most of my recent work is AI automation: n8n workflows, LLM agents and API integrations backed by PostgreSQL and Docker. My rule is simple: the AI decides what to say; the workflow decides what is allowed. That means safety gates, audit logs, idempotent webhooks and test scripts before anything touches a customer.",
  "I also build full-stack products with Next.js, TypeScript and Express, train computer-vision models, wire up Raspberry Pi hardware, and make mobile games in Godot. I build daily with Claude and Claude Code.",
];

export const skills = [
  {
    title: "AI & Automation",
    items: ["n8n", "Claude", "Claude Code", "Gemini API", "Ollama", "AI agents", "RAG", "Prompt engineering", "LLM guardrails", "YOLOv8"],
  },
  {
    title: "APIs & Integrations",
    items: ["REST APIs", "Webhooks", "Meta Graph API", "WhatsApp", "Google Calendar", "Telegram Bot API", "Stripe", "Better-Auth"],
  },
  {
    title: "Full-Stack",
    items: ["TypeScript", "Next.js", "React", "Node.js", "Express.js", "Prisma", "Tailwind CSS", "TanStack Query", "FastAPI"],
  },
  {
    title: "Data",
    items: ["PostgreSQL (Neon)", "SQL views & migrations", "Redis", "MongoDB", "Excel / Google Sheets"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Docker Compose", "Git", "GitHub Actions", "Vercel", "Render", "Cloudflare Tunnel", "Postman", "PowerShell"],
  },
  {
    title: "Hardware & Games",
    items: ["Raspberry Pi", "Microcontrollers", "Sensors & cameras", "Networking", "Godot 4", "GDScript"],
  },
];

export type Project = {
  title: string;
  category: "AI Automation" | "Full-Stack" | "AI / ML" | "IoT" | "Games";
  period: string;
  summary: string;
  points: string[];
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "SalesFixr: AI Booking Receptionist",
    category: "AI Automation",
    period: "2026 – Present",
    status: "In progress",
    featured: true,
    summary:
      "An AI receptionist for dental clinics: a patient messages the clinic's Facebook Page or Instagram, and the system understands them, checks real availability, books the appointment and notifies the owner.",
    points: [
      "Gemini only extracts intent. Identity, consent, availability and booking are decided by deterministic n8n logic.",
      "Inbound gateway and safety gate (payload normalization, owner vs patient role resolution, STOP/START opt-out, human takeover, rate limits) run before any LLM call.",
      "Multi-tenant PostgreSQL schema (15 tables) with an EXCLUDE constraint that makes double-booking impossible, idempotent webhook processing and a full decision audit log.",
      "Action router for 14 intents with no silent fall-through; provider-agnostic LLM gateway (Gemini or local Ollama); Docker Compose stack; PowerShell acceptance tests per milestone.",
    ],
    stack: ["n8n", "Gemini", "PostgreSQL", "Docker", "Meta Graph API", "Google Calendar", "Telegram"],
    links: [{ label: "GitHub", href: "https://github.com/Emon143Nerd/Automation-MVP" }],
  },
  {
    title: "AI Front Desk: WhatsApp Automation Kit",
    category: "AI Automation",
    period: "2026",
    featured: true,
    summary:
      "A WhatsApp-first front-desk automation for clinics, med spas, salons and dealerships, packaged as modules a business can buy one at a time.",
    points: [
      "9 importable n8n workflows: router, consent gate, AI reply, booking, escalation, message sender, event logger and a central error handler.",
      "SQL reporting views for KPIs, response time and lead attribution.",
      "Versioned LLM prompts with test cases and a per-client onboarding runbook.",
    ],
    stack: ["n8n", "PostgreSQL", "Docker", "Cloudflare Tunnel", "WhatsApp", "LLM prompts"],
    links: [{ label: "GitHub", href: "https://github.com/Emon143Nerd/Automation-Plans" }],
  },
  {
    title: "E-Doctor: Multi-Role Healthcare Platform",
    category: "Full-Stack",
    period: "2026",
    featured: true,
    summary:
      "A healthcare platform for patients, doctors and admins with appointments, payments and a RAG-based AI medical assistant.",
    points: [
      "Multi-role backend in TypeScript, Express.js, Prisma ORM and PostgreSQL.",
      "Better-Auth authentication, automated appointment cron jobs and Stripe payment webhooks.",
      "Redis caching keeps AI assistant retrieval under 200 ms.",
    ],
    stack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Stripe", "Redis", "RAG"],
    links: [
      { label: "Live", href: "https://e-doctor-frontend-git-main-emon-beparis-projects.vercel.app/" },
      { label: "Backend", href: "https://github.com/Emon143Nerd/healthcare-backend" },
      { label: "Frontend", href: "https://github.com/Emon143Nerd/e-doctor-frontend" },
    ],
  },
  {
    title: "ShasthoAI: Bone-Fracture Detection",
    category: "AI / ML",
    period: "2026",
    summary: "My university final-year project: AI-assisted fracture detection from X-rays inside a full diagnostic web app.",
    points: [
      "Fine-tuned YOLOv8 on 20,000+ GRAZPEDWRI-DX images, improving mAP from 0.64 to 0.75.",
      "Served the model as a FastAPI microservice on Render for real-time inference.",
      "Integrated into a React, Express and MongoDB Atlas web app for an end-to-end diagnostic workflow.",
    ],
    stack: ["YOLOv8", "Python", "FastAPI", "React", "Express.js", "MongoDB"],
    links: [
      { label: "Live", href: "https://shastho-ai-fracture-detection-clien.vercel.app/" },
      { label: "GitHub", href: "https://github.com/JamilurRahmanKhan/Shastho-AI-fracture-detection" },
      { label: "Model", href: "https://github.com/Emon143Nerd/grazpedwri_project" },
    ],
  },
  {
    title: "PhysioSmart: Smart Wheelchair & Health Monitoring",
    category: "IoT",
    period: "2024",
    summary: "An IoT healthcare wheelchair that verifies medicines and monitors the patient. It won 1st runner-up in the Microprocessors Lab.",
    points: [
      "Raspberry Pi reads prescriptions with OCR and matches medicines from live camera scans.",
      "Voice alerts through text-to-speech, plus real-time health monitoring.",
    ],
    stack: ["Python", "Raspberry Pi", "OCR.space API", "gTTS", "IoT"],
    links: [{ label: "GitHub", href: "https://github.com/Emon143Nerd/TechNerds_Micro_lab" }],
  },
  {
    title: "ParkSim: Car Parking & Garage-Fit Simulator",
    category: "Games",
    period: "2026 – Present",
    status: "In development",
    summary:
      "An Android simulator that answers a real question: will this car fit my garage? Users enter real car and space dimensions and try to park.",
    points: [
      "Realistic steering with first- and third-person cameras.",
      "Challenge levels and unlocks, with optional rewarded ads; being prepared for Google Play.",
    ],
    stack: ["Godot 4", "GDScript", "3D physics", "Android"],
    links: [],
  },
  {
    title: "Zombie-Kill: 3D Mobile Shooter",
    category: "Games",
    period: "2026 – Present",
    status: "In development",
    summary: "A semi-realistic 3D lane-shooter for mobile, built in Godot 4 and headed for the Play Store.",
    points: ["Lane-based shooting gameplay designed for short, replayable mobile sessions."],
    stack: ["Godot 4", "GDScript", "3D", "Android"],
    links: [],
  },
];

export const experience = [
  {
    role: "Web Development Trainee",
    org: "Programming Hero (Level 2)",
    period: "Oct 2025 – May 2026",
    points: ["Built full-stack MERN and PERN applications following professional workflows and code-review standards."],
  },
  {
    role: "Undergraduate Teaching Assistant & Researcher",
    org: "Network and IoT Lab, United International University",
    period: "Dec 2024 – Jun 2025",
    points: [
      "Developed departmental IoT hardware projects and organized them into resource repositories.",
      "Ran lab sessions, troubleshot hardware-software integrations and guided student networking/IoT projects.",
    ],
  },
];

export const education = [
  { degree: "B.Sc. in Computer Science & Engineering", school: "United International University", period: "2021 – 2026", note: "CGPA 3.91 / 4.00 · merit scholarships" },
  { degree: "HSC, Science", school: "Amirjan College", period: "2020", note: "GPA 4.83 / 5.00" },
];

export const awards = [
  "Champion, Electronics Lab: automated shuttle service (IoT)",
  "1st Runner-up, Microprocessors Lab: smart wheelchair (AI + IoT)",
  "Merit scholarships: 100% tuition waiver in most trimesters",
];
