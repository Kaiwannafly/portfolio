export interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Frontend" | "Systems & .NET" | "AI & Data Science";
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
  bio: "Motivated Software Engineer and Information Technology graduate from the University of Technology Sydney (UTS) with a High Distinction academic record (WAM 80.54 / GPA 6.09). Experienced in building scalable full-stack applications with React, Vue.js, Node.js, Go, and .NET Core.",
  stats: [
    { label: "Academic Average", value: "80.54 WAM", detail: "High Distinction / Distinction" },
    { label: "Completed Projects", value: "8+", detail: "Web, Enterprise & Machine Learning" },
    { label: "Core Technologies", value: "12+", detail: "React, Node, Go, .NET, Python, Java" },
    { label: "Global Experience", value: "USA & AU", detail: "Boston, MA & Sydney, NSW" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "hotel-booking",
    title: "Hotel Booking & Management Monorepo",
    category: "Full-Stack",
    role: "Frontend Lead Developer",
    summary: "Monorepo hotel reservation and administrative management system built with React, Node.js, TypeScript, and Docker.",
    description: "Designed and engineered an enterprise hotel management monorepo with Nx architecture, real-time room availability matrix, guest booking workflows, and administrative control panels.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "Docker", "Nx Monorepo", "Jest"],
    repoUrl: "https://github.com/Kaiwannafly/Hotel-Management-System",
    highlights: [
      "Built real-time room availability toggle matrices for staff and guest portals",
      "Created booking modules for hotel amenities (Spa, Lounge, Dining, Event rooms)",
      "Configured containerized Docker environment and CI pipelines",
    ],
    metrics: "UTS Advanced Software Dev (Mark: 97 / HD)",
    featured: true,
  },
  {
    id: "car-rental",
    title: "Car Rental Booking Platform",
    category: "Full-Stack",
    role: "Full-Stack Developer",
    summary: "Modern car rental web application with high-performance Golang backend and React 19 / Vite frontend.",
    description: "Engineered a responsive car rental booking platform featuring vehicle fleet browsing, dynamic filtering, reservation workflows, and a RESTful backend API powered by Go.",
    techStack: ["Golang", "React 19", "TypeScript", "Vite", "REST API", "Tailwind CSS"],
    repoUrl: "https://github.com/Kaiwannafly/Car-Rental-Booking-System",
    highlights: [
      "Engineered clean REST API in Golang for vehicle fleet querying and reservation state management",
      "Built responsive React 19 / TypeScript client with real-time price estimation",
      "Integrated seamless vehicle booking verification and search filters",
    ],
    metrics: "Modern Full-Stack",
    featured: true,
  },
  {
    id: "grocery-store",
    title: "Online Grocery Store E-Commerce",
    category: "Full-Stack",
    role: "Full-Stack Developer",
    summary: "Full-featured online grocery e-commerce platform with Node.js/Express backend, MongoDB, and React 19 Material-UI client.",
    description: "Developed an e-commerce grocery store supporting item catalogs, category navigation, real-time shopping cart management, JWT user authentication, and order placement.",
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose", "MySQL", "React 19", "Material-UI", "JWT"],
    repoUrl: "https://github.com/Kaiwannafly/Online-Grocery-Store-MERN",
    highlights: [
      "Implemented secure JWT authentication, password hashing (bcrypt), and role-based access",
      "Built dynamic shopping cart and multi-step delivery order checkout",
      "Designed hybrid database support for MongoDB Document Store and MySQL relational schemas",
    ],
    metrics: "Full-Stack E-Commerce",
    featured: true,
  },
  {
    id: "convenience-store-wpf",
    title: "Convenience Store POS & Inventory System",
    category: "Systems & .NET",
    role: ".NET Software Developer",
    summary: "C# .NET WPF Point-of-Sale (POS) and inventory control desktop system built with MVVM pattern and SQL Server.",
    description: "Feature-rich desktop POS software for retail operations featuring barcode scanning sound feedback, product management, staff shifts, transaction billing, and financial reporting.",
    techStack: ["C#", ".NET Framework", "WPF", "XAML", "MVVM", "SQL Server", "Crystal Reports"],
    repoUrl: "https://github.com/Kaiwannafly/Convenience-Store-POS-WPF",
    highlights: [
      "Architected clean MVVM design pattern with decoupled data access layer (DAL)",
      "Implemented POS checkout interface with audio scanning cues and automated receipt generation",
      "Engineered inventory monitoring alerts and financial analytics dashboards",
    ],
    metrics: "UTS .NET Application Dev (Mark: 89 / HD)",
    featured: true,
  },
  {
    id: "iot-bay",
    title: "IoT Bay E-Commerce Platform",
    category: "Full-Stack",
    role: "Full-Stack Java Developer",
    summary: "Enterprise e-commerce store dedicated to IoT sensors and smart hardware catalog management.",
    description: "Designed and implemented an MVC-architected e-commerce web app in Java/JSP with order lifecycle management, administrative credential controls, and relational transaction data modeling.",
    techStack: ["Java", "JSP", "Servlets", "MVC Architecture", "MySQL", "Apache Tomcat", "Maven"],
    repoUrl: "https://github.com/Kaiwannafly/IoTBay-Java-Ecommerce",
    highlights: [
      "Built real-time order tracking and dispatch status updates for customer accounts",
      "Implemented Role-Based Access Control (RBAC) and admin management consoles",
      "Designed normalized relational database schemas for high-integrity transactions",
    ],
    metrics: "UTS Intro to Software Dev (Mark: 96 / HD)",
    featured: true,
  },
  {
    id: "ml-knn",
    title: "Machine Learning KNN Classifier From Scratch",
    category: "AI & Data Science",
    role: "Machine Learning Developer",
    summary: "From-scratch Python implementation of K-Nearest Neighbors (KNN) classification algorithm with mathematical analysis.",
    description: "Implemented K-Nearest Neighbors from first principles without relying on Scikit-Learn's estimator. Evaluated Euclidean/Manhattan distance metrics, feature normalization, cross-validation, and decision boundary visualization.",
    techStack: ["Python", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib", "Machine Learning"],
    repoUrl: "https://github.com/Kaiwannafly/Machine-Learning-KNN-From-Scratch",
    highlights: [
      "Implemented distance calculation, neighbor voting, and k-parameter hyperparameter tuning",
      "Benchmarked algorithmic accuracy, precision, recall, and F1-score across datasets",
      "Authored a comprehensive analytical research report on model trade-offs",
    ],
    metrics: "UTS Machine Learning",
    featured: true,
  },
  {
    id: "hospital-management",
    title: "Hospital Information & Appointment System",
    category: "Systems & .NET",
    role: ".NET Software Developer",
    summary: "C# .NET enterprise system for managing patient medical records, doctor scheduling, and appointment workflows.",
    description: "Comprehensive medical practice management software supporting patient registration, medical history tracking, doctor consultation schedules, and prescription records.",
    techStack: ["C#", ".NET", "Windows Forms", "OOP Design Patterns", "DataFactory"],
    repoUrl: "https://github.com/Kaiwannafly/Hospital-Management-System-DotNet",
    highlights: [
      "Designed modular OOP architecture with DataFactory patterns for patient and doctor entities",
      "Created appointment scheduling engine with conflict detection and status validation",
      "Built patient history search and administrative reporting tools",
    ],
    metrics: "Enterprise Systems Development — UTS",
    featured: false,
  },
  {
    id: "hntv-management",
    title: "Hanoi TV (HNTV) Metadata Platform",
    category: "Full-Stack",
    role: "Full-Stack Intern Developer",
    summary: "Digital media asset management platform for broadcast video sorting and document archiving.",
    description: "Built for broadcast television media workflows, this application manages daily video segments, automated clip categorization, and indexed news archive search.",
    techStack: ["Vue.js", "Node.js", "Express", "SQL", "REST API"],
    repoUrl: "https://github.com/Kaiwannafly/HNTV-Management",
    highlights: [
      "Developed responsive Vue.js frontend for video segmentation, merging, and metadata tagging",
      "Engineered backend algorithms to process daily news clips into consolidated archive files",
      "Improved media cataloging efficiency for editorial broadcast staff",
    ],
    metrics: "Media Production Internship",
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
      { name: "C# (.NET Core / WPF)", level: "Advanced", iconName: "Layers" },
      { name: "Python", level: "Proficient (ML & Data)", iconName: "FileCode" },
      { name: "Golang (Go)", level: "Proficient (REST APIs)", iconName: "Cpu" },
      { name: "Java", level: "Proficient (OOP & Web)", iconName: "Coffee" },
      { name: "SQL", level: "Advanced", iconName: "Database" },
      { name: "HTML5 / CSS3", level: "Advanced", iconName: "Layout" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React 18 / 19", level: "Advanced", iconName: "Atom" },
      { name: "Next.js 14", level: "Proficient", iconName: "Globe" },
      { name: "Vue.js", level: "Proficient", iconName: "Component" },
      { name: "Tailwind CSS", level: "Advanced", iconName: "Palette" },
      { name: "Material-UI (MUI)", level: "Proficient", iconName: "Layout" },
      { name: "WPF & XAML", level: "Advanced", iconName: "Monitor" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js & Express", level: "Advanced", iconName: "Server" },
      { name: ".NET Web API", level: "Proficient", iconName: "Cpu" },
      { name: "Go REST API", level: "Proficient", iconName: "Zap" },
      { name: "RESTful API Design", level: "Advanced", iconName: "Network" },
      { name: "Authentication / JWT", level: "Advanced", iconName: "Key" },
      { name: "Docker", level: "Proficient", iconName: "Boxes" },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MySQL", level: "Advanced", iconName: "Database" },
      { name: "MongoDB & Mongoose", level: "Proficient", iconName: "Database" },
      { name: "SQL Server", level: "Proficient", iconName: "Table" },
      { name: "Schema Modeling", level: "Advanced", iconName: "Table" },
      { name: "AWS Cloud (SaaS)", level: "Foundational", iconName: "Cloud" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: "Advanced", iconName: "GitBranch" },
      { name: "VS Code & Visual Studio", level: "Advanced", iconName: "Monitor" },
      { name: "Postman", level: "Advanced", iconName: "Send" },
      { name: "Vite & Webpack", level: "Proficient", iconName: "Zap" },
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
