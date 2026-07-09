export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  duration: string;
  github?: string;
  live?: string;
  image?: string;
}