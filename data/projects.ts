export type Project = {
  id: string;
  name: string;
  category: "Web" | "Mobile" | "Data / ML" | "IoT";
  hue: number;
  short: string;
  details: string;
  tags: string[];
  demo: string;
  github: string;
};

export const projects: Project[] = [
  {
    id: "agri",
    name: "Agricultural Product Information System",
    category: "Web",
    hue: 145, // Green / Emerald
    tags: ["Django", "Oracle Database", "Next.js", "Tailwind CSS"],
    short: "Agricultural market price information in one place.",
    details:
      "A web system that presents agricultural market price information, built with a Django backend on Oracle Database and a Next.js + Tailwind CSS frontend.",
    demo: "#",
    github: "#",
  },
  {
    id: "khmer-shop",
    name: "Khmer Shopping Platform",
    category: "Web",
    hue: 25, // Orange / Amber
    tags: ["Next.js", "Node.js", "Express.js", "MySQL"],
    short: "E-commerce platform with full shopping functionality.",
    details:
      "An e-commerce application with a Next.js frontend and a Node.js/Express API backed by MySQL.",
    demo: "#",
    github: "#",
  },
  {
    id: "aub-typing",
    name: "AUB Typing Platform",
    category: "Web",
    hue: 195, // Cyan / Sky Blue
    tags: ["ASP.NET", "Bootstrap", "jQuery", "SQL Server", "MySQL"],
    short:
      "An online typing platform designed to help students improve their typing skills, from beginner to advanced levels.",
    details:
      "Developed an online typing platform for ACLEDA University of Business (AUB), featuring typing lessons and practice exercises for students of different skill levels. The system uses ASP.NET for the frontend and API development, with a database backend to manage typing exercises, user information, and learning progress.",
    demo: "#",
    github: "#",
  },
  {
    id: "aub-permission",
    name: "AUB Permission System",
    category: "Web",
    hue: 280, // Purple / Violet
    tags: ["HTML", "CSS", "Bootstrap", "jQuery"],
    short:
      "A web-based platform that allows AUB students to submit and manage permission requests online.",
    details:
      "Developed a web-based permission request system for ACLEDA University of Business (AUB), enabling students to submit permission requests online. The platform provides a simple and user-friendly interface built with HTML, CSS, Bootstrap, and jQuery to streamline the permission request process.",
    demo: "#",
    github: "#",
  },
  {
    id: "abamobile",
    name: "ABAMobile UI / Android Project",
    category: "Mobile",
    hue: 215, // Royal Blue
    tags: ["Kotlin", "Android Studio", "Room Database"],
    short: "Android UI project with local data storage.",
    details:
      "An Android project written in Kotlin using Android Studio, with local persistence through Room Database.",
    demo: "#",
    github: "#",
  },
  {
    id: "loan-ml",
    name: "Loan Prediction Machine Learning",
    category: "Data / ML",
    hue: 330, // Pink / Magenta
    tags: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    short: "Machine learning model for loan prediction.",
    details:
      "A machine learning project in Python that prepares data with Pandas and trains models with Scikit-learn to predict loan outcomes.",
    demo: "#",
    github: "#",
  },
  {
    id: "esp32",
    name: "ESP32 IoT Project",
    category: "IoT",
    hue: 45, // Yellow / Gold
    tags: ["ESP32", "Arduino IDE", "LCD", "NTP Integration"],
    short: "ESP32 device showing network time on an LCD.",
    details:
      "An ESP32 project programmed in Arduino IDE that syncs time over NTP and displays it on an LCD.",
    demo: "#",
    github: "#",
  },
];
