import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "style-match-ai",
    title: "Style Match AI",
    description:
      "AI-Powered Clothing Color Suggestions Based on Skin Tone Analysis",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/shivam92211/Style-Match-AI",
    url: "https://style-match-ai.vercel.app/",
    tags: ["Gemini API", "NextJs", "FastAPI", "Vercel", "Koyeb"],
  },
  {
    id: "chat-with-sql",
    title: "Chat with Database",
    description:
      "Developed an intuitive platform that allows non-technical users to query SQL databases using natural language",
    icon: "/myicons/langchain.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/shivam92211/Chat-with-Sql",
    url: "https://chat-with-sqll.streamlit.app/",
    tags: ["Gemini API", "Streamlit", "Postgres", "Python"],
  },
  {
    id: "phrase-trade",
    title: "Phrase Trade",
    description:
      "Develop APIs for phrase.trade that leverage a vector database and cosine similarity search to manage and analyze sentiments of text data. ",
    icon: "/mylist/gemini.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://www.phrase.trade/",
    url: "https://github.com/shivam92211/Phrase-Trade-AI",
    tags: ["Gemini", "FastAPI", "PGvector", "Python"],
  },
  {
    id: "minifit-app",
    title: "MiniFit App",
    description:
      "MiniFit is a website that specializes in selling parallettes, which are compact fitness tools commonly used for bodyweight and calisthenics training.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/shivam92211/mini-front",
    url: "https://mini-front-one.vercel.app",
    tags: ["NextJS", "Stripe", "MongoDB", ],
  },
  {
    id: "text-summarizer",
    title: "Text Summarizer",
    description:
      "This project offers a Python CLI tool that uses the Ollama API and Qwen2-0.5B model for summarizing text from user input or files, requiring Python 3.6+, a locally running Ollama server, and dependencies setup in a virtual environment.",
    icon: "/myicons/python.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/shivam92211/Ollama-Text-Summarization",
    tags: ["Python", "Ollama", "Qwen LLM"],
  },
  // {
  //   id: "e-commerce-api-nodejs",
  //   title: "E-commerce API",
  //   description:
  //     "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
  //   icon: "/skills/nodejs.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/ecommerce-api-nodejs",
  //   tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  // },
  // {
  //   id: "flutter-carousel-widget-package",
  //   title: "Flutter Carousel Widget Package",
  //   description:
  //     "A customizable carousel widget for Flutter, offering features such as infinite scrolling, auto-scrolling, custom child widgets, pre-built indicators, expandable child widgets, auto-sized child support, and enlarged center page.",
  //   icon: "/skills/flutter.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/flutter-carousel-widget-package",
  //   tags: ["Flutter", "Dart", "Carousel"],
  // },
  // {
  //   id: "get-time-ago-package",
  //   title: "GetTimeAgo Package",
  //   description:
  //     "A Dart package that converts and formats DateTime objects into human-readable 'time ago' strings, such as '20 seconds ago', 'a minute ago', or '7 hours ago'.",
  //   icon: "/skills/dart.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/gettimeago",
  //   tags: ["Dart", "DateTime", "Formatting"],
  // },
  // {
  //   id: "portfolio-website",
  //   title: "Portfolio Website",
  //   description:
  //     "This repository contains the source code for a portfolio website built using Next.js and Sass.",
  //   icon: "/skills/nextjs.png",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/portfolio-website",
  //   url: "https://nixrajput.dev",
  //   tags: ["Next.js", "Sass", "Web Development"],
  // },
  // {
  //   id: "bus-reservation-system-management",
  //   title: "Bus Reservation System Management",
  //   description:
  //     "This repository contains the Bus Reservation System Management project developed using Object Oriented Programming (OOP) and File Handling concepts in C++.",
  //   icon: "/skills/cpp.png",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/bus-reservation-system",
  //   tags: ["C++", "OOP", "File Handling"],
  // },
];
export default projects;
