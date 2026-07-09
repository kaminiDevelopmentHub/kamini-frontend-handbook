import { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Banking Platform",
    description:
      "Led the frontend development of a large-scale banking platform using React, TypeScript, Redux Toolkit and Micro Frontend architecture.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Micro Frontends",
    ],
    role: "Frontend Lead",
    duration: "2024 - Present",
  },
  {
    id: 2,
    title: "FinSight AI Dashboard",
    description:
      "Built a modern analytics dashboard with Next.js, GraphQL, Tailwind CSS and interactive charts.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
    ],
    role: "Personal Project",
    duration: "2025",
  },
  {
    id: 3,
    title: "Enterprise Micro Frontend",
    description:
      "Developed a scalable Micro Frontend architecture using Module Federation.",
    technologies: [
      "React",
      "Webpack",
      "Module Federation",
      "TypeScript",
    ],
    role: "Frontend Architect",
    duration: "2025",
  },
];

export default projects;