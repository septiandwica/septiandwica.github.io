import Projects from "@/components/projects/Projects";
import { ProjectsContentProps } from "@/types/components";

export default function ProjectsContent({ repos }: ProjectsContentProps) {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 pt-16 pb-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Projects</h1>
        <p className="mt-4 text-gray-600">Here are some of my open source projects and contributions on GitHub.</p>
      </div>
      <Projects repos={repos} />
    </div>
  );
}
