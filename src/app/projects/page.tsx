import { getGithubRepos } from "@/services/github.service";
import { Metadata } from "next";
import ProjectsContent from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | tyann.",
  description: "My open source projects and contributions.",
};

export default async function ProjectsPage() {
  const repos = await getGithubRepos();
  return <ProjectsContent repos={repos} />;
}
