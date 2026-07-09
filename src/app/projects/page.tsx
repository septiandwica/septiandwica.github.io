import Projects from "@/components/home/Projects";
import { getGithubRepos } from "@/services/github.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | tyann.",
  description: "My open source projects and contributions.",
};

export default async function ProjectsPage() {
  const repos = await getGithubRepos();

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
