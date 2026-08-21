export interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Frontend" | "Systems & Algorithms";
  role: string;
  summary: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
  highlights: string[];
  metrics?: string;
  featured: boolean;
}

export interface Coursework {
  code: string;
  name: string;
  mark: number;
  grade: "High Distinction" | "Distinction" | "Credit";
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  major?: string;
  period: string;
  gpa?: string;
  wam?: string;
  honors?: string;
  description: string;
  coursework?: Coursework[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: string; iconName: string }[];
}

export const PERSONAL_INFO = {
  name: "Kyle Dam",
  fullName: "Phuong Nam Dam (Đàm Phương Nam)",
  role: "Software Engineer & Full-Stack Developer",
  status: "Available for Software Engineering & Full-Stack Roles",
  location: "Sydney, NSW, Australia",
  hometown: "Hanoi, Vietnam",
  email: "dpnam0911@gmail.com",
  uniEmail: "Phuong.n.dam@student.uts.edu.au",
  phone: "+61 405 630 235",
  github: "https://github.com/Kaiwannafly",
  linkedin: "https://linkedin.com/in/nam-phuong-dam",
  resumePath: "/Kyle_Dam_Resume.pdf",
  bio: "Motivated Software Engineer and Information Technology graduate from the University of Technology Sydney (UTS) with a High Distinction academic record (WAM 80.54 / GPA 6.09). Experienced in building scalable full-stack applications with React, Vue.js, Node.js, and .NET Core.",
  stats: [
    { label: "Academic Average", value: "80.54 WAM", detail: "High Distinction / Distinction" },
    { label: "Completed Projects", value: "6+", detail: "Web, Enterprise & Systems" },
    { label: "Core Technologies", value: "10+", detail: "React, Node, .NET, C++, Java" },
    { label: "Global Experience", value: "USA & AU", detail: "Boston, MA & Sydney, NSW" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "hotel-booking",
    title: "Hotel Booking & Management System",
    category: "Frontend",
    role: "Frontend Lead Developer",
    summary: "A dynamic hotel reservation and administrative management system built with modern React component architecture.",
    description: "Engineered an end-to-end interactive portal enabling real-time room availability checks, multi-view booking flows for customers, and a comprehensive administrative dashboard for reservation and staff management.",
    techStack: ["React", "JavaScript", "CSS3", "REST APIs", "Component Lifecycle"],
    repoUrl: "https://github.com/mclarence/Hotel-Management-System.git",
    highlights: [
      "Engineered real-time room availability toggle matrices for staff and guest portals",
      "Built interactive booking workflows for hotel amenities (Spa, Lounge, Dining, Event booking)",
      "Implemented modular responsive UI components with clean state management",
    ],
    metrics: "Advanced Software Dev — UTS (Mark: 97)",
    featured: true,
  },
  {
    id: "iot-bay",
    title: "IoT Bay E-Commerce Platform",
    category: "Full-Stack",
    role: "Full-Stack Developer",
    summary: "Enterprise e-commerce store dedicated to IoT sensors and smart hardware catalog management.",
    description: "Designed and implemented an MVC-architected e-commerce application in Java/JSP with robust order lifecycle management, administrative credential systems, and relational transaction data modeling.",
    techStack: ["Java", "JSP", "MVC Architecture", "MySQL", "Bootstrap", "Apache Tomcat"],
    repoUrl: "https://github.com/JasonI136/IoTBay",
    highlights: [
      "Built real-time order tracking and dispatch status updates for customer accounts",
      "Implemented Role-Based Access Control (RBAC) and admin management consoles",
      "Designed normalized relational database schemas for high-integrity transactions",
    ],
    metrics: "Enterprise Systems Development — UTS",
    featured: true,
  },
  {
    id: "hntv-management",
    title: "Hanoi TV (HNTV) Metadata Platform",
    category: "Full-Stack",
    role: "Full-Stack Intern Developer",
    summary: "Digital media asset management platform for broadcast video sorting and document archiving.",
    description: "Built for broadcast media workflows, this application manages daily video segments, automated clip categorization, and indexed news archive search.",
    techStack: ["Vue.js", "Node.js", "Express", "SQL", "REST API"],
    repoUrl: "https://github.com/Kaiwannafly/HNTV-Management.git",
    highlights: [
      "Developed responsive Vue.js frontend for video segmentation, merging, and metadata tagging",
      "Engineered backend algorithms to process daily news clips into consolidated archive files",
      "Improved media cataloging efficiency for editorial broadcast staff",
    ],
    metrics: "Media Production Deployment",
    featured: true,
  },
  {
    id: "custom-deque",
    title: "Custom High-Performance Deque Engine",
    category: "Systems & Algorithms",
    role: "Systems Programmer",
    summary: "Generic double-ended queue data structure built in modern C++ with dual-vector memory management.",
    description: "Implemented a fully generic template Deque data structure achieving O(1) constant-time amortized operations for push_front, push_back, pop_front, and pop_back with custom dynamic memory management.",
    techStack: ["C++", "Templates", "STL", "Memory Management", "Algorithms"],
    repoUrl: "https://github.com/Kaiwannafly",
    highlights: [
      "Designed generic template support for int, double, char, and std::string types",
      "Implemented constant-time O(1) amortized bidirectional operations",
      "Engineered random-access indexing via overloaded operator[]",
    ],
    metrics: "Data Structures & Algorithms (Mark: 89)",
    featured: false,
  },
  {
    id: "shunting-yard-calc",
    title: "Infix-to-Postfix Expression Engine",
    category: "Systems & Algorithms",
    role: "Algorithm Developer",
    summary: "Mathematical expression parser and calculator using Dijkstra's Shunting Yard Algorithm.",
    description: "High-precision expression conversion and calculation engine handling complex arithmetic, operator precedence, associativity, parentheses validation, and stack evaluation.",
    techStack: ["C++", "Shunting Yard Algorithm", "Stack ADT", "Parsing"],
    repoUrl: "https://github.com/Kaiwannafly",
    highlights: [
      "Implemented strict operator precedence and associativity rules",
      "Built robust syntax validation and error handling for malformed arithmetic",
      "Optimized stack-based postfix evaluation for fast computation",
    ],
    metrics: "Advanced Algorithms",
    featured: false,
  },
  {
    id: "java-gui-suite",
    title: "Java OOP Interactive Software Suite",
    category: "Systems & Algorithms",
    role: "Software Developer",
    summary: "Object-Oriented desktop applications featuring interactive game mechanics and cinema booking management.",
    description: "Suite of desktop applications designed in Java demonstrating core OOP tenets: encapsulation, polymorphism, inheritance, and clean event-driven GUI architectures.",
    techStack: ["Java", "Swing / AWT", "BlueJ", "OOP Principles"],
    repoUrl: "https://github.com/Kaiwannafly",
    highlights: [
      "Built Snake Game with full lifecycle GUI buttons (Start, Pause, Reset, Dynamic Score Tracking)",
      "Created Cinema Ticket Booking System managing theaters, showtimes, and seat reservations",
      "Applied strict OOP design patterns for modularity and separation of concerns",
    ],
    metrics: "Introduction to Software Dev (Mark: 96)",
    featured: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", iconName: "FileCode" },
      { name: "TypeScript", level: "Proficient", iconName: "Code2" },
      { name: "C++", level: "Advanced (DSA)", iconName: "Terminal" },
      { name: "Java", level: "Proficient (OOP)", iconName: "Coffee" },
      { name: "C# (.NET Core)", level: "Proficient", iconName: "Layers" },
      { name: "SQL", level: "Advanced", iconName: "Database" },
      { name: "HTML5 / CSS3", level: "Advanced", iconName: "Layout" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Advanced", iconName: "Atom" },
      { name: "Vue.js", level: "Proficient", iconName: "Component" },
      { name: "Next.js", level: "Proficient", iconName: "Globe" },
      { name: "Tailwind CSS", level: "Advanced", iconName: "Palette" },
      { name: "Responsive UI", level: "Advanced", iconName: "Smartphone" },
      { name: "State Management", level: "Proficient", iconName: "Sliders" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js & Express", level: "Proficient", iconName: "Server" },
      { name: ".NET Web API", level: "Proficient", iconName: "Cpu" },
      { name: "RESTful API Design", level: "Advanced", iconName: "Network" },
      { name: "Microservices", level: "Core Principles", iconName: "Boxes" },
      { name: "Authentication / JWT", level: "Proficient", iconName: "Key" },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MySQL", level: "Advanced", iconName: "Database" },
      { name: "Schema Modeling", level: "Advanced", iconName: "Table" },
      { name: "AWS Cloud (SaaS)", level: "Foundational", iconName: "Cloud" },
      { name: "Query Optimization", level: "Proficient", iconName: "Zap" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: "Advanced", iconName: "GitBranch" },
      { name: "VS Code & Visual Studio", level: "Advanced", iconName: "Monitor" },
      { name: "Postman", level: "Advanced", iconName: "Send" },
      { name: "Agile / Scrum", level: "Practitioner", iconName: "Kanban" },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "University of Technology Sydney (UTS)",
    location: "Sydney, NSW, Australia",
    degree: "Bachelor of Information Technology",
    major: "Enterprise Systems Development",
    period: "2021 – 2025",
    gpa: "6.09 / 7.00",
    wam: "80.54",
    honors: "High Distinction / Distinction Honor Standing",
    description: "Specialized in large-scale enterprise software architecture, advanced algorithm design, and cloud systems engineering.",
    coursework: [
      { code: "41026", name: "Advanced Software Development", mark: 97, grade: "High Distinction" },
      { code: "41025", name: "Introduction to Software Development", mark: 96, grade: "High Distinction" },
      { code: "31251", name: "Data Structures and Algorithms", mark: 89, grade: "High Distinction" },
      { code: "31927", name: "Application Development with .NET", mark: 89, grade: "High Distinction" },
      { code: "48433", name: "Software Architecture", mark: 86, grade: "High Distinction" },
      { code: "31260", name: "Fundamentals of Interaction Design", mark: 76, grade: "Distinction" },
      { code: "31265", name: "Communication for IT Professionals", mark: 76, grade: "Distinction" },
      { code: "31250", name: "Introduction to Data Analytics", mark: 73, grade: "Credit" },
      { code: "41001", name: "Cloud Computing & SaaS", mark: 70, grade: "Credit" },
      { code: "31005", name: "Machine Learning", mark: 80, grade: "Distinction" },
    ],
  },
  {
    institution: "Suffolk University",
    location: "Boston, MA, United States",
    degree: "Undergraduate Studies in Big Data",
    period: "2018 – 2019",
    description: "Completed 1 year of foundational studies in Big Data and Computer Science in the United States before relocating to Australia for UTS.",
  },
  {
    institution: "CATS Academy Boston",
    location: "Boston, MA, United States",
    degree: "High School Diploma",
    period: "Graduated June 2018",
    description: "American high school education with emphasis on mathematics, sciences, and foundational computer programming.",
  },
];
