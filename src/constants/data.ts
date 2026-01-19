export interface Social {
  name: string;
  url: string;
}

export interface Contact {
  availability: string;
  formId: string;
}

export interface Projects {
  name: string;
  tagline: string;
  description: string;
  link: string;
  github: string;
  image: string;
  technicalWin: string;
  impactValue: string;
  impactLabel: string;
  techStack: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  summary: string;
  highlights: {
    title: string;
    description: string;
  }[];
  skills: string[];
}

export interface About {
  title: string;
  subtitle: string;
  philosophy: {
    title: string;
    text: string;
  };
  education: {
    title: string;
    text: string;
  };
  quote: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface PortfolioData {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: Social[];
  about: About;
  experience: Experience[];
  projects: Projects[];
  resumeUrl: string;
  email: string;
  location: string;
  availability: string;
  contact: Contact;
}

export const DATA: PortfolioData = {
  name: "Sri Rama Krishna Chowdary Maddipati",
  role: "AI Engineer | Full-Stack Developer",
  description:
    "Building production-grade Generative AI applications and cloud infrastructure with a focus on RAG pipelines and LLM orchestration.",
  image: "/hero.jpeg",
  socials: [
    { name: "GitHub", url: "https://github.com/sriram629" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/srirama-krishna-maddipati",
    },
    { name: "Email", url: "mailto:maddipatisriramakrishna@gmail.com" },
  ],
  about: {
    title: "AB\nOUT.",
    subtitle:
      "I bridge the gap between complex AI orchestration and high-performance cloud architecture.",
    philosophy: {
      title: "Philosophy",
      text: "I architect resilient systems, focusing on reducing infrastructure costs and leading core migrations to enhance code organization and maintainability.",
    },
    education: {
      title: "Academic Core",
      text: "Currently pursuing a Master of Science in Computer Science at Auburn University at Montgomery with a 4.0/4.0 GPA.",
    },
    quote: "Building tools that don't just work, but evolve.",
    metrics: [
      { label: "GPA", value: "4.0/4.0" },
      { label: "Cost Reduction", value: "40%" },
      { label: "Experience", value: "1 Year" },
    ],
  },
  experience: [
    {
      company: "Eficens Systems",
      role: "Software Development Engineer Intern",
      location: "Remote",
      duration: "March 2024 — February 2025",
      summary:
        "Building production-grade Generative AI applications and optimizing cloud infrastructure.",
      highlights: [
        {
          title: "AI & Data Management",
          description:
            "Developed Trusynth, a generative AI training platform using GPT models and Chroma DB, and implemented backend services with VectorDB.",
        },
        {
          title: "Cloud Optimization",
          description:
            "Consolidated 14 microservice containers into 4, resulting in significant AWS cost reduction and improved resource allocation.",
        },
        {
          title: "Architecture & Security",
          description:
            "Led migration from Express.js to Nest.js and engineered a high-concurrency online examination platform using Python FastAPI and AWS Cognito.",
        },
      ],
      skills: [
        "React",
        "Express.js",
        "Node.js",
        "Nest.js",
        "Python",
        "FastAPI",
        "AWS",
        "MongoDB",
        "VectorDB",
        "Docker",
      ],
    },
  ],
  projects: [
    {
      name: "Multimodal-AI-ChatBot",
      tagline: "Resilient Multi-LLM Routing & Low-Latency Streaming",
      description:
        "Architected a high-concurrency AI gateway that intelligently routes queries between specialized models based on intent complexity and real-time requirements.",
      link: "https://ai-chatbot-frontend-yq89.onrender.com",
      github: "https://github.com/sriram629/AI-ChatBot",
      image: "/projects/chatbot.png",
      technicalWin:
        "Implemented a custom WebSocket-based bit-to-bit streaming engine, reducing Initial Chunk Latency to ~10ms compared to traditional 20ms+ buffering methods.",
      impactValue: "100%",
      impactLabel: "Service Availability",
      techStack: [
        "FastAPI",
        "WebSockets",
        "MongoDB Vector Search",
        "Gemini Pro",
        "Groq",
        "React",
      ],
    },
    {
      name: "Finance Manager",
      tagline: "High-Performance Financial Analytics & Secure Ingestion",
      description:
        "A secure, server-side driven financial dashboard engineered for real-time KPI tracking and bulk data processing with automated audit generation.",
      link: "https://finance-manager-dev.onrender.com/login",
      github: "https://github.com/sriram629/Finance-Manager",
      image: "/projects/finance.png",
      technicalWin:
        "Implemented a server-side aggregation pipeline to offload 100% of financial calculations from the client, reducing front-end memory overhead by 60%.",
      impactValue: "70%",
      impactLabel: "Manual Entry Reduction",
      techStack: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
    },
    {
      name: "Dynamic-Quiz-Platform",
      tagline: "Real-Time Quiz Platform with State Persistence",
      description:
        "Developed a customizable examination engine utilizing the OpenTDB API, featuring real-time state synchronization and 30-second automated timers.",
      link: "https://quiz-app-tau-rose.vercel.app",
      github: "https://github.com/sriram629/quiz-app",
      image: "/projects/quiz.png",
      technicalWin:
        "Engineered a persistent state synchronization layer using Local Storage and the Web Audio API, ensuring zero-loss of session data during page refreshes.",
      impactValue: "Zero",
      impactLabel: "Latency Transitions",
      techStack: [
        "React",
        "JavaScript",
        "Web Audio API",
        "OpenTDB API",
        "Local Storage",
      ],
    },
    {
      name: "Browser-Based Media Capture System",
      tagline: "Browser-Based Native Stream Recording Engine",
      description:
        "Engineered a high-performance screen recording engine using the MediaRecorder API for synchronized video and audio capture without plugins.",
      link: "https://sriram629.github.io/Browser-Based-Media-Capture-System",
      github: "https://github.com/sriram629/Browser-Based-Media-Capture-System",
      image: "/projects/media.png",
      technicalWin:
        "Implemented a multi-track stream merger to synchronize system video with microphone audio, achieving seamless 1:1 playback alignment.",
      impactValue: "1:1",
      impactLabel: "Playback Alignment",
      techStack: [
        "JavaScript",
        "Node.js",
        "Express",
        "MediaRecorder API",
        "Web Blobs",
      ],
    },
    {
      name: "Interactive Game Engine",
      tagline: "Persistent Game State & Algorithmic Opponent",
      description:
        "A persistent Rock-Paper-Scissors engine utilizing the Web Storage API to manage user state and automated random-choice algorithms.",
      link: "https://sriram629.github.io/Rock-Paper-Scissors-Game",
      github: "https://github.com/sriram629/Rock-Paper-Scissors-Game",
      image: "/projects/game.png",
      technicalWin:
        "Optimized application logic for modularity by separating move-picking algorithms from DOM-heavy event handling functions.",
      impactValue: "100%",
      impactLabel: "Data Retention",
      techStack: ["JavaScript", "HTML5", "CSS3", "Web Storage API"],
    },
  ],
  resumeUrl: "/Resume.pdf",
  email: "maddipatisriramakrishna@gmail.com",
  location: "Montgomery, Alabama",
  availability: "Open for opportunities",
  contact: {
    availability:
      "Available for 2026 Summer Internships and 2027 Full-Time Roles",
    formId: "mvzzaklw",
  },
};
