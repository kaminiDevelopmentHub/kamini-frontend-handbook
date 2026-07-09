import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/project";
import { ArrowUpRight } from "lucide-react";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.title}

          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </CardTitle>

        <p className="text-sm text-gray-500">
          {project.role} • {project.duration}
        </p>
      </CardHeader>

      <CardContent>
        <p className="mb-6 text-gray-600">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}