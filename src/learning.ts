export const developmentPrograms = [
  {
    id: "nvidia",
    organization: "NVIDIA",
    title: "Summer Bridge",
    type: "TECHNICAL DEVELOPMENT",
    illustration: "compute",
    illustrationLabel: "PARALLEL / POSSIBILITIES",
    summary:
      "Explored the engineering behind GPU-accelerated computing, AI workflows, and cloud deployment.",
    lessons: [
      "Technical deep dives and coding workshops introduced me to GPU computing and real-time data processing.",
      "Sessions with engineers and product managers expanded how I think about system design and performance optimization.",
    ],
    topics: ["GPU computing", "AI workflows", "Cloud deployment"],
  },
  {
    id: "tmcf",
    organization: "TMCF × GOOGLE CLOUD",
    title: "Google Cloud Career Mentorship",
    type: "CLOUD & CAREER EXPLORATION",
    illustration: "cloud",
    illustrationLabel: "CLOUD / CURIOSITY",
    summary:
      "Learned how to use cloud services and explored Google tools such as NotebookLM through the TMCF mentorship.",
    lessons: [
      "Built familiarity with using cloud services and understanding where they fit into a technical workflow.",
      "Explored NotebookLM as part of learning to use Google's tools, broadening my exposure to practical AI applications.",
    ],
    topics: ["Cloud services", "NotebookLM", "Career mentorship"],
  },
  {
    id: "amazon",
    organization: "AMAZON",
    title: "Career Prep Series",
    type: "SOFTWARE ENGINEERING FELLOWSHIP",
    illustration: "career",
    illustrationLabel: "PRACTICE / PROGRESS",
    summary:
      "Strengthened both sides of interview preparation: solving technical problems and communicating the thinking behind my work.",
    lessons: [
      "Practiced Python problem-solving and mock assessments modeled after software engineering interviews.",
      "Used the STAR method and Amazon's Leadership Principles to structure behavioral stories and improve professional communication.",
    ],
    topics: ["Python", "Interview preparation", "STAR storytelling"],
  },
  {
    id: "ibm",
    organization: "IBM",
    title: "Foundational Certifications",
    type: "DATA · AI · CYBERSECURITY",
    illustration: "foundations",
    illustrationLabel: "DATA / INTELLIGENCE / TRUST",
    summary:
      "Built a broader technical foundation through IBM's Getting Started With Data, AI, and Cybersecurity certifications.",
    lessons: [
      "Explored introductory data and AI concepts, adding context to my interest in applied machine learning.",
      "Studied cybersecurity fundamentals alongside data and AI, connecting technical possibilities with security awareness.",
    ],
    topics: [
      "Getting Started With Data",
      "Getting Started With AI",
      "Getting Started With Cybersecurity",
    ],
  },
] as const;

export const coursework = [
  {
    title: "Data Structures & Algorithms",
    icon: "network",
    notation: "O(n log n)",
    description: "Organizing data and reasoning about efficient solutions.",
  },
  {
    title: "Software Engineering",
    icon: "workflow",
    notation: "design → build → test",
    description: "Software design, development practices, and maintainability.",
  },
  {
    title: "Cloud Computing",
    icon: "cloud",
    notation: "services ↔ infrastructure",
    description:
      "Cloud services, infrastructure, and distributed computing concepts.",
  },
  {
    title: "Web Development",
    icon: "web",
    notation: "<interface />",
    description: "Connecting browser interfaces with application behavior.",
  },
  {
    title: "Computer Architecture & Organization",
    icon: "cpu",
    notation: "instructions → execution",
    description: "How hardware and software work together to execute programs.",
  },
  {
    title: "Artificial Intelligence",
    icon: "brain",
    notation: "data → model → insight",
    description: "Intelligent systems, learning methods, and problem-solving.",
  },
  {
    title: "Foundations of Deep Learning",
    icon: "layers",
    notation: "input → hidden → output",
    description: "Neural networks and the foundations of learning from data.",
  },
  {
    title: "Calculus",
    icon: "calculus",
    notation: "f′(x) · ∫ f(x) dx",
    description: "Rates of change, accumulation, and mathematical reasoning.",
  },
] as const;
