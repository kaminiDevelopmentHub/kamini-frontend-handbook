import projects from "@/content/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold">
                    Featured Projects
                </h2>

                <p className="mt-4 text-lg text-gray-600">
                    Enterprise applications and personal projects showcasing
                    frontend architecture, scalability and performance.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}