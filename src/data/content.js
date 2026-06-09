export const techStack = {
  "Backend & Core": [
    { name: "Spring Boot", featured: true },
    { name: "Java", featured: true },
    { name: "TypeScript", featured: true },
    { name: "Apache Kafka", featured: true },
    { name: "Node.js", featured: false },
    { name: "REST APIs", featured: false },
    { name: "Microservices", featured: false },
    { name: "Python", featured: false },
  ],
  "Frontend": [
    { name: "React", featured: true },
    { name: "JavaScript", featured: false },
    { name: "HTML5 & CSS3", featured: false },
    { name: "Angular", featured: false },
    { name: "Tailwind CSS", featured: false },
  ],
  "Data & Infrastructure": [
    { name: "PostgreSQL", featured: false },
    { name: "MongoDB", featured: false },
    { name: "Redis", featured: false },
    { name: "Docker", featured: false },
    { name: "ELK Stack", featured: false },
    { name: "Git & GitHub", featured: false },
    { name: "CI/CD", featured: false },
    { name: "Firebase", featured: false },
  ],
  "Security & ML": [
    { name: "Machine Learning", featured: true },
    { name: "Security Protocols", featured: false },
    { name: "NixWhistle Platform", featured: false },
    { name: "Document Digitisation", featured: false },
    { name: "OCR / NLP", featured: false },
  ],
};

export const experience = [
  {
    period: "2022 — Present",
    role: "Software Engineer",
    company: "Amdocs",
    location: "Pune, India",
    desc: "Engineering high-throughput distributed systems for global telecom clients. Working deeply with event-driven architecture using Apache Kafka, building scalable Spring Boot microservices, and contributing to platforms serving millions of end users across multiple regions.",
    tags: ["Spring Boot", "Kafka", "TypeScript", "Microservices", "Telecom"],
  },
  {
    period: "2021 — 2022",
    role: "Software Engineer",
    company: "Perfios",
    location: "India",
    desc: "Part of the 'Samaritans' team — built a document digitisation system to process BFSI documents with template-based and template-less extraction workflows. Metrics pushed to ELK dashboards. Platform now powers PAE's primary digitisation pipeline.",
    tags: ["Spring Boot", "TypeScript", "ELK", "BFSI", "OCR"],
  },
  {
    period: "2020 — 2021",
    role: "Development Intern",
    company: "NixWhistle",
    location: "India",
    desc: "Gained hands-on exposure to security products and services. Worked on backend systems and security protocols within a fast-paced startup environment.",
    tags: ["Security", "Backend"],
  },
  {
    period: "2017 — 2021",
    role: "B.Tech — Computer Science",
    company: "Vellore Institute of Technology",
    location: "VIT",
    desc: "Studied Computer Science and Engineering. Built a strong foundation in algorithms, data structures, systems design and software engineering principles.",
    tags: ["CSE", "VIT"],
  },
];

export const projects = [
  {
    num: "01",
    title: "BFSI Document Digitisation Engine",
    desc: "End-to-end platform to digitise banking & insurance documents with template-based and template-less extraction. Processes scanned statements, forms, and agreements with high accuracy. Metrics on ELK dashboards.",
    tags: ["Spring Boot", "TypeScript", "ELK", "OCR", "BFSI"],
    featured: true,
    link: "#",
  },
  {
    num: "02",
    title: "BoBHack Hackathon Project",
    desc: "Hackathon submission demonstrating rapid problem-solving and full-stack delivery under pressure. Built a complete working prototype within a tight deadline.",
    tags: ["Hackathon", "Full Stack", "Rapid Prototype"],
    featured: false,
    link: "https://github.com/Aniruddha-Sharma-1405/BoBHack",
  },
  {
    num: "03",
    title: "Distributed Event Pipeline",
    desc: "Kafka-driven microservice pipeline at Amdocs for real-time data streaming and event processing at scale for global telecom infrastructure.",
    tags: ["Kafka", "Java", "Microservices", "Spring Boot"],
    featured: false,
    link: "#",
  },
  {
    num: "04",
    title: "Security Platform Integration",
    desc: "Backend systems and security protocol work at NixWhistle — a security-first products platform focused on enterprise-grade protection services.",
    tags: ["Security", "Backend", "Protocols"],
    featured: false,
    link: "#",
  },
];

export const achievements = [
  {
    icon: "🏆",
    title: "Exceptional Mentor Award",
    body: "Recognized by peers and mentees as an outstanding technical mentor with mastery of Spring Boot and TypeScript. Multiple colleagues cited his guidance as pivotal to their professional growth.",
    badge: "Peer Recognition",
  },
  {
    icon: "⚡",
    title: "BoBHack Hackathon",
    body: "Competed in a high-intensity hackathon, delivering a full working project under extreme time pressure — demonstrating the ability to architect, build, and ship without sacrificing quality.",
    badge: "Hackathon",
  },
  {
    icon: "🎓",
    title: "VIT Graduate — CSE",
    body: "Bachelor of Technology in Computer Science from Vellore Institute of Technology — one of India's premier engineering institutions.",
    badge: "Academic",
  },
  {
    icon: "🚀",
    title: "Production Impact at Scale",
    body: "Contributed to Perfios' core document digitisation system, directly improving PAE's primary processing pipeline for a major BFSI data platform.",
    badge: "Industry Impact",
  },
];
