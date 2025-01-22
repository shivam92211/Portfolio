import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Artificial Intelligence Engineer",
    icons: [
      "/myicons/tensorflow.png",
      "/myicons/hugging.png",
      "/myicons/chatgpt.png",
      "/myicons/langchain.png",
      "/myicons/torch.png",
    ],
    shortDescription:
      "I design and implement advanced AI solutions",
    description:
      "I design and implement advanced AI solutions, from concept to deployment, specializing in AI agents, chatbot development, and large language model (LLM) fine-tuning. Leveraging state-of-the-art machine learning frameworks, I create intelligent systems that deliver seamless performance, natural conversational interfaces, and powerful automation tailored to your business needs.",
  },
  {
      id: 2,
      title: "Machine Learning Engineer",
      icons: [
        "/myicons/numpy.png",
        "/myicons/pandas.png",
        "/myicons/python.png",
        "/myicons/scikit-learn.png",
        "/myicons/matplotlib.png",
      ],
      shortDescription:
        "I design and implement advanced machine learning solutions",
      description:
        "I specialize in designing and implementing advanced machine learning solutions, from concept to deployment. Leveraging state-of-the-art ML frameworks, I develop custom algorithms, fine-tune models, and build predictive systems that deliver accurate results, seamless performance, and powerful automation tailored to your business needs",
  },
  {
    id: 3,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "I deliver stunning, user-friendly websites to establish your online presence. From simple sites to complex e-commerce platforms, I provide tailored solutions using the latest frameworks and technologies for a seamless, responsive, and SEO-friendly browsing experience. Enhance your online identity with quality.",
  },
  {
    id: 4,
    title: "Backend Development",
    icons: [
      "/skills/docker.png",
      "/myicons/django.png",
      "/myicons/FastAPI.png",
      "/skills/nodejs.svg",
      "/skills/ubuntu.png",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I enhance digital applications with robust, scalable backend infrastructures. I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly. Rely on strong backend solutions.",
  },
  // 
  // {
  //   id: 5,
  //   title: "DevOps",
  //   icons: [
  //     "/skills/docker.svg",
  //     "/skills/kubernetes.svg",
  //     "/skills/aws.svg",
  //     "/skills/jenkins.svg",
  //     "/skills/terraform.svg",
  //   ],
  //   shortDescription: "I streamline development and operations processes.",
  //   description:
  //     "I streamline development and operations processes through effective DevOps practices. I implement continuous integration and deployment pipelines, manage cloud infrastructure, and use containerization to ensure efficient, reliable, and scalable software delivery. Improve your workflow with DevOps solutions.",
  // },
  // {
  //   id: 6,
  //   title: "Database Management",
  //   icons: [
  //     "/skills/mysql.svg",
  //     "/skills/postgresql.svg",
  //     "/skills/mongodb.svg",
  //     "/skills/redis.svg",
  //     "/skills/sqlite.svg",
  //   ],
  //   shortDescription: "I manage and optimize your database systems.",
  //   description:
  //     "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
  // },
];

export default services;
