export const profile = {
  name: "Gideon Appiah",
  email: "gideonappiahl018@gmail.com",
  github: "https://github.com/GideonNeutron",
  linkedin: "https://www.linkedin.com/in/gideon-appiah/",
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  tags: string[];
  github: string;
  problem: string;
  approach: string;
  features: { title: string; text: string }[];
  takeaway: string;
  architecture: string[];
};

export const projects: Project[] = [
  {
    slug: "gram-eats",
    number: "01",
    name: "Gram Eats",
    category: "FULL-STACK · MOBILE",
    summary:
      "A campus problem. A full-stack solution. A three-sided food ordering platform connecting students, restaurants, and administrators.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore"],
    github: "https://github.com/GideonNeutron/Gram_Eats_Mobile_App",
    problem:
      "Walking across campus to a restaurant, only to find out it didn’t have what I wanted, felt like a problem software could solve. Gram Eats began with that everyday frustration at Grambling State University.",
    approach:
      "I built connected experiences for customers, merchants, and administrators, backed by Firebase and a shared Firestore data model. The work took me beyond individual screens into authentication, state management, payments, and the way information moves through an entire ordering workflow.",
    features: [
      {
        title: "One order, connected experiences",
        text: "Customers browse and order, restaurants manage menus and incoming requests, and administrators oversee the platform. Real-time updates keep the ordering workflow connected.",
      },
      {
        title: "Location-aware ordering",
        text: "Address autocomplete, driver location sharing, and ETA updates bring location context into the ordering and delivery experience.",
      },
      {
        title: "Authentication and checkout",
        text: "Role-based authentication separates user experiences. Apple Pay and Google Pay integrations support checkout, with Provider handling application state.",
      },
      {
        title: "A shared source of truth",
        text: "A NoSQL Firestore schema supports menus, users, and orders across the apps, alongside Firebase Authentication and Storage.",
      },
    ],
    takeaway:
      "This is the project I’m proudest of because of how much I taught myself along the way. Building multiple sides of the same product pushed me to connect frontend decisions with data, access control, and real-time behavior.",
    architecture: [
      "Customer app / Merchant app / Admin panel",
      "Firebase Authentication · role-based access",
      "Firestore · shared order and menu data",
      "Payments · location services · live updates",
    ],
  },
  {
    slug: "stroke-patient-manager",
    number: "02",
    name: "Stroke Patient Manager",
    category: "BACKEND · WEB APPLICATION",
    summary:
      "Patient management, critical-vital alerts, and role-based workflows in a full-stack healthcare application.",
    tags: ["Python", "Django", "PostgreSQL", "REST APIs"],
    github:
      "https://github.com/GideonNeutron/Stroke_Patient_Manager-refactored",
    problem:
      "Coordinating patient information across different care roles calls for clear workflows and controlled access. This project explores how a web application can organize that information and surface critical changes in patient vitals.",
    approach:
      "I built the application with Django, Django REST Framework, and PostgreSQL. The backend combines patient data workflows with alerts and role-based access, while responsive interfaces make those workflows accessible across screen sizes.",
    features: [
      {
        title: "Structured patient workflows",
        text: "Django REST Framework endpoints and PostgreSQL provide the foundation for patient records and database-backed workflows.",
      },
      {
        title: "Critical-vital alerts",
        text: "Real-time alerts surface critical changes in patient vitals within the application.",
      },
      {
        title: "Access built around roles",
        text: "Custom user models and Django AllAuth support authentication and role-based access for different user types.",
      },
      {
        title: "Responsive interfaces",
        text: "Bootstrap, JavaScript, and HTML/CSS support access to patient information from different device sizes.",
      },
    ],
    takeaway:
      "The engineering focus is the connection between data modeling, API design, and permissions: organizing useful information while making each user’s responsibilities clear.",
    architecture: [
      "Responsive web interface",
      "Django · Django REST Framework",
      "Authentication · roles · alert workflows",
      "PostgreSQL · patient records",
    ],
  },
  {
    slug: "smart-chat",
    number: "03",
    name: "Smart Chat Platform",
    category: "AI · CONVERSATIONAL SYSTEMS",
    summary:
      "A conversational AI interface that brings language models, contextual memory, and an interactive chat experience together.",
    tags: ["Python", "Chainlit", "LangChain", "LLaMA 2"],
    github: "https://github.com/GideonNeutron/Smart-Chat-Platform",
    problem:
      "A useful chatbot needs more than a model response. It needs an interface people can use, context across messages, and a responsive connection between the interface and the inference process.",
    approach:
      "I built a Python chatbot with a Chainlit interface and integrated language-model inference with LangChain conversational memory. The project explores the application layer around LLMs, including the path from a user’s message to a contextual response.",
    features: [
      {
        title: "An interactive chat interface",
        text: "Chainlit provides the conversational interface for sending messages and receiving model-generated responses.",
      },
      {
        title: "Context across turns",
        text: "LangChain conversational memory carries context between messages so the interaction can extend beyond a single prompt.",
      },
      {
        title: "Language-model integration",
        text: "Python connects the interface with LLM inference. My language-model work spans LLaMA 2 integration and an Orca Mini setup documented in the repository.",
      },
      {
        title: "Attention to responsiveness",
        text: "Inference processing between the interface and model was optimized with a focus on lower-latency responses.",
      },
    ],
    takeaway:
      "This project brings my interest in AI into software engineering: connecting components into an application, managing conversation state, and thinking about the experience around model inference.",
    architecture: [
      "User message · Chainlit interface",
      "Python · conversation handling",
      "LangChain · conversational memory",
      "Language model · inference response",
    ],
  },
];

export const experiences = [
  {
    company: "Fermilab",
    role: "Software Engineering Intern",
    date: "MAY — AUG 2026",
    location: "Batavia, Illinois",
    logo: "fermilab.png",
    text: "Made distributed computing more observable. Instrumented GlideinWMS Factory with Prometheus, aggregated metrics across concurrent processes, and exposed 11 operational metrics for Grafana dashboards.",
    detail:
      "Built and validated a reproducible Docker environment across Factory, Frontend, and Compute Element services on OpenStack, enabling end-to-end HTCondor job submission and systematic debugging.",
    tags: ["Python", "Prometheus", "Docker", "OpenStack", "Grafana"],
  },
  {
    company: "Msoft Ghana Limited",
    role: "Software Engineering Intern · Full-Stack Developer",
    date: "JUN — AUG 2024",
    location: "Accra, Ghana",
    logo: "msoft.jpg",
    text: "Connected a school management system with an online learning platform through React features, a MySQL schema, and REST APIs, giving teachers and students a single portal for digital course materials.",
    detail:
      "Built Firebase authentication workflows and worked with an Agile team on responsive dashboards, API testing, Docker, and GitHub CI/CD.",
    tags: ["React", "MySQL", "REST APIs", "Firebase"],
  },
  {
    company: "Google × Basta",
    role: "Software Engineering Mentee",
    date: "OCT — DEC 2024",
    location: "Remote · Mentorship",
    logo: "google.png",
    text: "Completed 10 weeks of one-on-one mentorship with Google engineers, solving 20+ algorithmic problems weekly across DFS, binary search, and sorting.",
    detail:
      "Practiced technical communication through mock interviews and completed a CodeSignal technical assessment.",
    tags: ["Python", "Data structures", "Algorithms"],
  },
  {
    company: "Grambling State University",
    role: "Research Assistant · NLP Research",
    date: "OCT 2024 — MAY 2025",
    location: "Grambling, Louisiana",
    logo: "grambling-mark.png",
    text: "Developed sentiment analysis pipelines with Python, Scikit-learn, and Hugging Face, working on preprocessing, classifier training, and model evaluation across text datasets.",
    detail:
      "Collaborated with research mentors to debug, document, and version experiments with Git and Jupyter for reproducible workflows.",
    tags: ["Python", "Scikit-learn", "Hugging Face", "Jupyter"],
  },
];

export const engineeringFocus = [
  {
    title: "Software engineering",
    number: "01",
    text: "Turning ideas into complete, usable products.",
  },
  {
    title: "Backend & distributed systems",
    number: "02",
    text: "The services, data, and infrastructure behind the interface.",
  },
  {
    title: "Mobile & applied AI",
    number: "03",
    text: "Exploring new ways to make software useful.",
  },
];
