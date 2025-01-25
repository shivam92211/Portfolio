import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/myicons/python.png",
      },
      {
        title: "Sql",
        level: SkillLevel.Expert,
        icon: "/myicons/sql.png",
      },
    ],
  },
  {
    title: "Data Science Libraries",
    items: [
      {
        title: "Pandas",
        level: SkillLevel.Expert,
        icon: "/myicons/pandas.png",
      },
      {
        title: "Numpy",
        level: SkillLevel.Expert,
        icon: "/myicons/numpy.png",
      },
      {
        title: "Matplotlib",
        level: SkillLevel.Expert,
        icon: "/myicons/matplotlib.png",
      },
      {
        title: "Sci-kit Learn",
        level: SkillLevel.Expert,
        icon: "/myicons/scikit-learn.png",
      },
    ],
  },
  {
    title: "Machine Learning",
    items: [
      {
        title: "Regression",
        level: SkillLevel.Expert,
        icon: "/mylist/regression.png",
      },
      {
        title: "Classification",
        level: SkillLevel.Expert,
        icon: "/mylist/classification.png",
      },
      {
        title: "Clustering",
        level: SkillLevel.Expert,
        icon: "/mylist/clustering.png",
      },
      {
        title: "Feature Engineering",
        level: SkillLevel.Expert,
        icon: "/mylist/feature.png",
      },
    ],
  },
  {
    title: "Deep Learning",
    items: [
      {
        title: "Neural Networks",
        level: SkillLevel.Expert,
        icon: "/mylist/neural.png",
      },
      {
        title: "Tensorflow",
        level: SkillLevel.Expert,
        icon: "/myicons/tensorflow.png",
      },
      {
        title: "PyTorch",
        level: SkillLevel.Expert,
        icon: "/myicons/torch.png",
      },
      {
        title: "Transfer Learning",
        level: SkillLevel.Expert,
        icon: "/mylist/transfer.png",
      },
    ],
  },
  {
    title: "Generative AI",
    items: [
      {
        title: "Langchain",
        level: SkillLevel.Expert,
        icon: "/myicons/langchain.png",
      },
      {
        title: "Llamaindex",
        level: SkillLevel.Expert,
        icon: "/mylist/llamaindex.png",
      },
      {
        title: "HuggingFace",
        level: SkillLevel.Expert,
        icon: "/myicons/hugging.png",
      },
      {
        title: "RAG",
        level: SkillLevel.Expert,
        icon: "/mylist/rag.png",
      },
    ],
  },
  {
    title: "Large Language Models",
    items: [
      {
        title: "Gemini",
        level: SkillLevel.Expert,
        icon: "/mylist/gemini.png",
      },
      {
        title: "Chat GPT",
        level: SkillLevel.Expert,
        icon: "/myicons/chatgpt.png",
      },
      {
        title: "LLama",
        level: SkillLevel.Expert,
        icon: "/mylist/meta.svg",
      },
    ],
  },
  {
    title: "Computer Vision",
    items: [
      {
        title: "OpenCV",
        level: SkillLevel.Expert,
        icon: "/mylist/opencv.png",
      },
      {
        title: "CNN",
        level: SkillLevel.Expert,
        icon: "/mylist/cnn.png",
      },
      {
        title: "Yolo",
        level: SkillLevel.Expert,
        icon: "/mylist/yolo.png",
      },
    ],
  },
  {
    title: "Natural Language Processing",
    items: [
      {
        title: "NLTK",
        level: SkillLevel.Expert,
        icon: "/mylist/nlp.png",
      },
      {
        title: "RNN/LSTM",
        level: SkillLevel.Expert,
        icon: "/mylist/rnn.webp",
      },
      {
        title: "Transformer",
        level: SkillLevel.Expert,
        icon: "/mylist/transformer.png",
      },
      {
        title: "Encoder-Decoder",
        level: SkillLevel.Expert,
        icon: "/mylist/encoder.png",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Django",
        level: SkillLevel.Expert,
        icon: "/myicons/django.png",
      },
      {
        title: "FastAPI",
        level: SkillLevel.Intermediate,
        icon: "/myicons/FastAPI.png",
      },
      {
        title: "Flask",
        level: SkillLevel.Intermediate,
        icon: "/myicons/flask.svg",
      },
    ],
  },
  
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
