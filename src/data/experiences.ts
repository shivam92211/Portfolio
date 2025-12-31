import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "AI ML Engineer",
    company: "Aivision21",
    startDate: "Apr 2025",
    endDate: "",
    isCurrentJob: true,
    location: "Mumbai, India (On-Site)",
    description: [
      "Reduced candidate screening time by 40% by developing a computer-vision pipeline that autonomously analyzes facial expressions and sentiment in interview videos.",
      "Enhanced user engagement by 25% through a “Chat-with-Video” system enabling natural-language queries over uploaded media.",
      "Led a 2-member team to design and launch a scalable AI-powered LMS platform, accelerating course delivery speed by 3× with automated curriculum generation.",
    ],
  },
  {
    designation: "AI ML Engineer",
    company: "Meta Scifor Technologies",
    startDate: "Mar 2024",
    endDate: "Apr 2025",
    isCurrentJob: false,
    location: "Bengaluru, India (Remote)",
    description: [
      "Developed AI agents tailored to client needs, focusing on automation and task optimization.",
      "Designed and implemented Retrieval-Augmented Generation (RAG) applications for enhanced contextual responses.",
      "Fine-tuned open-source Large Language Models (LLMs) to improve accuracy and domain-specific performance.",
    ],
  },
  {
    designation: "AI ML Engineer",
    company: "Healtether Healthcare Services Pvt Ltd",
    startDate: "Feb 2023",
    endDate: "Mar 2024",
    isCurrentJob: false,
    location: "Chennai, India (Remote)",
    description: [
      "Designed a skin cancer detection application utilizing Google's Generative AI, Gemini Pro Vision, enhancing detection accuracy and speed by 30%.",
      "Enhanced user experience with seamless interaction and advanced API integration.",
      "Applied AI image analysis effectively to solve complex problems, ensuring project success and reliability.",
    ],
  },
  {
    designation: "Math Expert",
    company: "Photomath Inc",
    startDate: "Nov 2021",
    endDate: "Feb 2023",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Solved various math questions related to calculus, linear algebra, trigonometry, probability, and statistics",
      "Improving problem solving skills by 25% over 3 months.",
      "Cultivated strong communication abilities, conveying mathematical solutions clearly and concisely, with a 30% enhancement over 3 months.",
      "Utilized LaTex to present solutions, increasing readability and professional presentation.",
    ],
  },
];

export default experiences;
