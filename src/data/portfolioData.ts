export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  overview: string;
  highlights: string[];
  architectureNote?: string;
  githubUrl?: string;
  liveUrl?: string;
  isEducationalDisclaimer?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    level?: string;
    icon: string;
    description: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  status?: string;
  admission?: string;
  percentage?: string;
  details?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Project' | 'Exhibition' | 'Studio Course' | 'Certification';
  description: string;
  institutionOrContext: string;
  statusNote?: string;
  iconName: string;
}

export const portfolioData = {
  personal: {
    name: "Prathviraj Godbole",
    initials: "PG",
    brand: "PG — PRATHVIRAJ GODBOLE",
    headline: "Aspiring Developer. AI & ML Student. Technology Enthusiast.",
    badge: "BUILDING • LEARNING • INNOVATING",
    bioSnippet: "I'm a B.Tech student specialising in Artificial Intelligence and Machine Learning at REVA University. I enjoy exploring technology, developing projects and continuously learning through practical experiences.",
    university: "REVA University",
    program: "B.Tech in Artificial Intelligence and Machine Learning",
    email: "prathviraj@gmail.com",
    linkedin: "https://www.linkedin.com/in/prathviraj-godbole-63177a385/",
    githubPlaceholder: "https://github.com/",
    copyrightYear: "2026",
    tagline: "Designed with curiosity. Built through learning."
  },

  about: {
    kicker: "A LITTLE ABOUT ME",
    title: "Curious Mind. Continuous Growth.",
    paragraphs: [
      "I'm Prathviraj Godbole, currently pursuing B.Tech in Artificial Intelligence and Machine Learning at REVA University.",
      "I have a strong interest in technology and enjoy participating in technical activities and developing projects. I believe that learning becomes more meaningful when theoretical knowledge is transformed into practical applications.",
      "Throughout my college journey, I aim to explore new technologies, improve my programming abilities and build projects that solve meaningful problems.",
      "This portfolio represents my learning journey, technical skills, projects and experiences."
    ],
    pillars: [
      {
        title: "Academic Focus",
        desc: "Specialising in Artificial Intelligence & Machine Learning at REVA University"
      },
      {
        title: "Hands-on Engineering",
        desc: "Transforming foundational theory into practical software and hardware projects"
      },
      {
        title: "Continuous Learning",
        desc: "Actively expanding programming proficiency, algorithmic thinking and tool mastery"
      }
    ]
  },

  skills: {
    kicker: "MY TECHNICAL TOOLKIT",
    description: "An overview of programming languages, web technologies, database systems, and developer tools acquired through academic coursework and practical project exploration.",
    categories: [
      {
        id: "languages",
        title: "Programming Languages",
        skills: [
          { name: "C", icon: "Code2", description: "Structured programming, memory management & algorithmic fundamentals" },
          { name: "C++ (Basic)", icon: "FileCode", description: "Object-oriented principles and standard library basics" },
          { name: "Python", icon: "Terminal", description: "Data structures, scripting, machine learning workflows & automation" },
          { name: "Java", icon: "Coffee", description: "Object-oriented software development and core application logic" },
          { name: "JavaScript", icon: "Braces", description: "Modern ES6+ syntax, asynchronous programming & web dynamism" }
        ]
      },
      {
        id: "web",
        title: "Web Development",
        skills: [
          { name: "HTML", icon: "Layout", description: "Semantic markup, document structure & accessible web standards" },
          { name: "CSS", icon: "Palette", description: "Modern styling, Flexbox, Grid, custom responsive layouts & animations" },
          { name: "React.js", icon: "Layers", description: "Component-based user interfaces, state management & reactive architecture" }
        ]
      },
      {
        id: "databases",
        title: "Databases",
        skills: [
          { name: "MySQL", icon: "Database", description: "Relational schema design, structured SQL queries & data integrity" },
          { name: "MongoDB", icon: "HardDrive", description: "Document-oriented NoSQL storage, flexible data collections & JSON-style structures" }
        ]
      },
      {
        id: "tools",
        title: "Development Tools and Technologies",
        skills: [
          { name: "Supabase", icon: "Server", description: "Backend-as-a-service, relational PostgreSQL data handling & authentication" },
          { name: "Ollama", icon: "Cpu", description: "Local large language model execution, inference & open-weights orchestration" },
          { name: "Scikit-learn", icon: "Brain", description: "Machine learning algorithms, data preprocessing, classification & predictive modeling" }
        ]
      }
    ] as SkillCategory[]
  },

  projects: [
    {
      id: "proj-1",
      number: "01",
      title: "Personal Portfolio Website",
      category: "Web Application",
      description: "A personal website designed to showcase my technical skills, projects and learning journey.",
      technologies: ["HTML", "CSS", "JavaScript"],
      overview: "Designed and built as a personal digital developer studio to present my academic background, technical skills, engineering projects, and milestones. Built with structured semantics, responsive styling, and modern UI interactions.",
      highlights: [
        "Structured semantic layout with intuitive section hierarchy",
        "Custom dark developer aesthetic using balanced violet and cyan accents",
        "Accessible navigation with responsive mobile menu support",
        "Interactive skill and project explorer components"
      ],
      architectureNote: "Frontend-focused application highlighting clean styling, semantic structure, and responsive behavior across mobile, tablet, and desktop viewports."
    },
    {
      id: "proj-2",
      number: "02",
      title: "Student Management System",
      category: "Academic System Concept",
      description: "A web-based student management concept designed to collect and organise student information while allowing students to view their academic progress.",
      technologies: [],
      overview: "A student management architecture designed to streamline academic records management. It provides structured workflows for tracking student enrollments, profiles, and academic performance while giving students visibility into their coursework progress.",
      highlights: [
        "Centralized repository structure for student profile data",
        "Structured access patterns for academic progress and course tracking",
        "Clear demarcation between student and administrator information views",
        "Designed to reduce manual record-keeping complexity"
      ],
      architectureNote: "Architectural concept focusing on structured information organization and user-friendly academic data presentation."
    },
    {
      id: "proj-3",
      number: "03",
      title: "AI-Based Career Guidance Platform",
      category: "AI & Web Platform Concept",
      description: "A platform concept designed to help students explore suitable career paths, understand possible directions and follow a roadmap towards their career goals with greater clarity.",
      technologies: ["HTML", "CSS", "React.js", "Supabase"],
      overview: "An interactive career discovery and guidance concept engineered to assist learners in navigating professional directions in technology. Combines responsive React interface design with Supabase data handling to deliver structured learning roadmaps and skill recommendations.",
      highlights: [
        "Interactive questionnaire and interest discovery interface",
        "Curated career pathways and milestone-based roadmap visualizer",
        "Resource recommendations aligned with student objectives",
        "Persistent user preferences powered by Supabase integration"
      ],
      architectureNote: "Built with a React.js client interface leveraging Supabase for structured roadmap data persistence and query management."
    },
    {
      id: "proj-4",
      number: "04",
      title: "Health-Supporting Chatbot",
      category: "Machine Learning Concept",
      description: "A chatbot concept designed to provide supportive health-related conversations and general wellness information, including yoga and stress-management guidance.",
      technologies: ["Python", "Scikit-learn", "Ollama"],
      overview: "An educational conversational prototype created to explore applied NLP and local language model inference for wellness support. Formulated to assist users with general mindfulness advice, guided yoga habits, and relaxation techniques.",
      highlights: [
        "Intent recognition and query categorization using Scikit-learn pipelines",
        "Supportive conversational assistance powered by Ollama local LLM execution",
        "Curated knowledge base covering basic yoga poses and stress relief techniques",
        "Strict educational framework highlighting general wellness over clinical advice"
      ],
      architectureNote: "Educational prototype utilizing Python with Scikit-learn classification preprocessing paired with Ollama local inference.",
      isEducationalDisclaimer: true
    }
  ] as Project[],

  education: [
    {
      degree: "B.Tech — Artificial Intelligence and Machine Learning",
      institution: "REVA University",
      status: "Currently pursuing",
      admission: "KCET",
      details: "Focusing on artificial intelligence, algorithmic modeling, machine learning techniques, and modern software engineering practices."
    },
    {
      degree: "12th Standard (Pre-University)",
      institution: "Saptagiri PU College",
      location: "Bidar",
      percentage: "92%",
      details: "Strong academic foundation in science, mathematics, and analytical problem-solving."
    },
    {
      degree: "10th Standard (Secondary School)",
      institution: "Saptagiri School",
      location: "Bidar",
      percentage: "75%",
      details: "Comprehensive foundational secondary education with active interest in science and computing."
    }
  ] as EducationItem[],

  achievements: [
    {
      id: "ach-1",
      title: "Wind Turbine Project",
      category: "Project",
      institutionOrContext: "REVA University — 1st Semester FME",
      description: "Developed a functional wind turbine prototype as part of the first-semester Foundations of Mechanical Engineering (FME) project curriculum, receiving positive appreciation and commendation from university faculty.",
      iconName: "Wind"
    },
    {
      id: "ach-2",
      title: "Water Level Advanced Sensor",
      category: "Exhibition",
      institutionOrContext: "Technical Project Exhibition",
      description: "Developed an IoT-based water-level sensor project engineered to monitor and manage fluid thresholds. The project was selected by faculty evaluators and prominently displayed at the institutional project exhibition.",
      iconName: "Waves"
    },
    {
      id: "ach-3",
      title: "Portfolio Building Studio Course",
      category: "Studio Course",
      institutionOrContext: "School of CSE, REVA University",
      description: "Enrolled in and completed the intensive Portfolio Building studio course organized by the School of Computer Science & Engineering at REVA University to sharpen professional positioning, code presentation, and engineering documentation.",
      iconName: "Compass"
    },
    {
      id: "ach-4",
      title: "IBM Python Certification",
      category: "Certification",
      institutionOrContext: "IBM",
      description: "Completed comprehensive coursework and technical training in Python programming through IBM, strengthening foundational coding, data structures, and script automation skills.",
      iconName: "Award"
    },
    {
      id: "ach-5",
      title: "NPTEL Course & Examination",
      category: "Certification",
      institutionOrContext: "NPTEL",
      description: "Successfully completed academic coursework and proctored examination through the National Programme on Technology Enhanced Learning (NPTEL).",
      statusNote: "Examination completed; certificate status not confirmed",
      iconName: "FileCheck"
    }
  ] as AchievementItem[]
};
