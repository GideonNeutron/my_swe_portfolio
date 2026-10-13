export const techCategories = [
  "Languages", "Frameworks", "Cloud & infrastructure", "Databases",
  "AI & data", "Developer tools", "Integrations", "Productivity",
] as const;

export type TechCategory = (typeof techCategories)[number];
export type Technology = {
  name: string;
  logo: string;
  category: TechCategory;
  detail: string;
  aliases?: string;
};

// Combined from the skills, projects, and experience in all 14 reference resumes.
// NotebookLM comes from Gideon's clarification about his Google Cloud mentorship.
// Descriptions identify each tool; these are not proficiency ratings.
export const technologies: Technology[] = [
  { name: "Python", logo: "python", category: "Languages", detail: "Applications & automation" },
  { name: "JavaScript", logo: "javascript", category: "Languages", detail: "Interactive web experiences" },
  { name: "C++", logo: "cplusplus", category: "Languages", detail: "Systems programming" },
  { name: "Java", logo: "java", category: "Languages", detail: "Object-oriented applications" },
  { name: "C#", logo: "csharp", category: "Languages", detail: "Application development" },
  { name: "Dart", logo: "dart", category: "Languages", detail: "Cross-platform applications" },
  { name: "Go", logo: "go", category: "Languages", detail: "Concurrent services", aliases: "Golang" },
  { name: "Ruby", logo: "ruby", category: "Languages", detail: "Web applications" },
  { name: "Kotlin", logo: "kotlin", category: "Languages", detail: "Android development" },
  { name: "Swift", logo: "swift", category: "Languages", detail: "Apple platforms" },
  { name: "Bash", logo: "bash", category: "Languages", detail: "Shell scripting" },
  { name: "SQL", logo: "sql", category: "Languages", detail: "Relational queries" },
  { name: "HTML5", logo: "html5", category: "Languages", detail: "Web structure", aliases: "HTML" },
  { name: "CSS", logo: "css3", category: "Languages", detail: "Layout & presentation", aliases: "CSS3" },
  { name: "React", logo: "react", category: "Frameworks", detail: "Component-based interfaces" },
  { name: "Django", logo: "django", category: "Frameworks", detail: "Python web applications" },
  { name: "Django REST", logo: "djangorest", category: "Frameworks", detail: "REST API framework", aliases: "Django REST Framework DRF" },
  { name: "Django AllAuth", logo: "django", category: "Frameworks", detail: "Authentication · Django" },
  { name: "Flutter", logo: "flutter", category: "Frameworks", detail: "Cross-platform UI" },
  { name: "Provider", logo: "flutter", category: "Frameworks", detail: "State management · Flutter" },
  { name: "Angular", logo: "angular", category: "Frameworks", detail: "Web application framework" },
  { name: "Bootstrap", logo: "bootstrap", category: "Frameworks", detail: "Responsive UI toolkit" },
  { name: "Ruby on Rails", logo: "rails", category: "Frameworks", detail: "Full-stack web framework", aliases: "Rails" },
  { name: "AWS", logo: "amazonwebservices", category: "Cloud & infrastructure", detail: "Cloud services", aliases: "Amazon Web Services" },
  { name: "Amazon EC2", logo: "amazonec2", category: "Cloud & infrastructure", detail: "Cloud compute instances", aliases: "AWS EC2" },
  { name: "AWS Lambda", logo: "awslambda", category: "Cloud & infrastructure", detail: "Serverless functions" },
  { name: "Google Cloud", logo: "googlecloud", category: "Cloud & infrastructure", detail: "Cloud services", aliases: "GCP" },
  { name: "Firebase", logo: "firebase", category: "Cloud & infrastructure", detail: "Application backend" },
  { name: "Docker", logo: "docker", category: "Cloud & infrastructure", detail: "Containerized environments" },
  { name: "OpenStack", logo: "openstack", category: "Cloud & infrastructure", detail: "Cloud infrastructure" },
  { name: "HTCondor", logo: "htcondor.png", category: "Cloud & infrastructure", detail: "High-throughput computing" },
  { name: "GlideinWMS", logo: "htcondor.png", category: "Cloud & infrastructure", detail: "HTCondor workload management" },
  { name: "Prometheus", logo: "prometheus", category: "Cloud & infrastructure", detail: "Metrics & monitoring" },
  { name: "Grafana", logo: "grafana", category: "Cloud & infrastructure", detail: "Observability dashboards" },
  { name: "OpenTelemetry", logo: "opentelemetry", category: "Cloud & infrastructure", detail: "Telemetry instrumentation" },
  { name: "Linux", logo: "linux", category: "Cloud & infrastructure", detail: "Operating system" },
  { name: "Windows", logo: "windows11", category: "Cloud & infrastructure", detail: "Operating system" },
  { name: "PostgreSQL", logo: "postgresql", category: "Databases", detail: "Relational database", aliases: "Postgres" },
  { name: "MySQL", logo: "mysql", category: "Databases", detail: "Relational database" },
  { name: "MongoDB", logo: "mongodb", category: "Databases", detail: "Document database NoSQL" },
  { name: "Firestore", logo: "firebase", category: "Databases", detail: "Document database · Firebase", aliases: "Cloud Firestore NoSQL" },
  { name: "LangChain", logo: "langchain", category: "AI & data", detail: "LLM orchestration" },
  { name: "Chainlit", logo: "chainlit", category: "AI & data", detail: "Conversational AI interfaces" },
  { name: "LLaMA 2", logo: "meta", category: "AI & data", detail: "Language model · Meta" },
  { name: "Hugging Face", logo: "huggingface", category: "AI & data", detail: "Models & Transformers", aliases: "Huggingface Transformers" },
  { name: "Scikit-learn", logo: "scikitlearn", category: "AI & data", detail: "Machine learning", aliases: "sklearn" },
  { name: "Jupyter", logo: "jupyter", category: "AI & data", detail: "Interactive notebooks" },
  { name: "NotebookLM", logo: "notebooklm", category: "AI & data", detail: "AI-assisted research · Google", aliases: "Notebook LLM" },
  { name: "Git", logo: "git", category: "Developer tools", detail: "Version control" },
  { name: "GitHub", logo: "github", category: "Developer tools", detail: "Collaboration & CI/CD" },
  { name: "VS Code", logo: "vscode", category: "Developer tools", detail: "Code editor", aliases: "Visual Studio Code" },
  { name: "Android Studio", logo: "androidstudio", category: "Developer tools", detail: "Android IDE" },
  { name: "PyCharm", logo: "pycharm", category: "Developer tools", detail: "Python IDE" },
  { name: "Postman", logo: "postman", category: "Developer tools", detail: "API development & testing" },
  { name: "Apple Pay", logo: "applepay", category: "Integrations", detail: "Payment integration" },
  { name: "Google Pay", logo: "googlepay", category: "Integrations", detail: "Payment integration" },
  { name: "Photoshop", logo: "photoshop", category: "Productivity", detail: "Visual design", aliases: "Adobe Photoshop" },
  { name: "Word", logo: "microsoftword", category: "Productivity", detail: "Documents · Microsoft 365", aliases: "Microsoft Office 365 Word" },
  { name: "Excel", logo: "microsoftexcel", category: "Productivity", detail: "Spreadsheets · Microsoft 365", aliases: "Microsoft Office 365 Excel" },
  { name: "PowerPoint", logo: "microsoftpowerpoint", category: "Productivity", detail: "Presentations · Microsoft 365", aliases: "Microsoft Office 365 PowerPoint" },
  { name: "Outlook", logo: "microsoftoutlook", category: "Productivity", detail: "Communication · Microsoft 365", aliases: "Microsoft Office 365 Outlook" },
];

export const techLogo = (logo: string) =>
  `${import.meta.env.BASE_URL}images/tech/${logo.includes(".") ? logo : `${logo}.svg`}`;
