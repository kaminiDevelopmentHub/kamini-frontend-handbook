import { Badge } from "@/components/ui/badge";
import skills from "@/content/skills";

export default function TechStack() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Technologies I Work With
        </h2>

        <p className="mt-4 text-gray-600">
          Modern frontend technologies used to build scalable enterprise
          applications.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="rounded-full px-5 py-2 text-sm"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}