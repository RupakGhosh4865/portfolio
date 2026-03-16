"use client"
import { useEffect } from "react";
import { HoverEffect } from "../../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Core AI/ML :",
    description: "PyTorch | Transformers | OpenAI API | Google Gemini | LangChain | RAG | langraph | orchestration",
  },
  {
    title: "AI Libraries :",
    description: "Hugging Face | NumPy | Pandas | Scikit-learn | Matplotlib",
  },
  {
    title: "Vector Databases :",
    description: "ChromaDB | FAISS | Redis | ElasticSearch | PrismaDB",
  },
  {
    title: "LLM Tools :",
    description: "Prompt Engineering | Fine-tuning | Embeddings | SentenceTransformers",
  },
  {
    title: "Programming :",
    description: "Python | SQL | JavaScript | TypeScript | C++",
  },
  {
    title: "Frameworks :",
    description: "Next.js | React | FastAPI | Flask | Streamlit | Tailwind CSS",
  },
  {
    title: "Cloud & Infra :",
    description: "Docker | AWS (EC2/S3) | n8n | Hugging Face Spaces",
  },
  {
    title: "Tools :",
    description: "Git | GitHub | Postman | VSCode | Cursor | V0.dev | GoogleColab | Bubble.io",
  },
  {
    title: "Concepts :",
    description: "Deep Learning (CNN) | Computer Vision | Data Structures and Algorithms | Object Oriented Programming Concepts | OS | DBMS | DAA",
  },
  {
    title: "Soft Skills :",
    description: "Leadership | Ability to work in a team | Public Speaking | Time Management",
  },
];
