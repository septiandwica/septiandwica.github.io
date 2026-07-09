import { notFound } from "next/navigation";
import { getGithubRepo, getGithubRepoReadme, getGithubRepos } from "@/services/github.service";
import { DynamicRouteParams } from "@/types/route";
import ProjectDetailContent from "@/components/projects/ProjectDetailContent";

export async function generateStaticParams() {
  const repos = await getGithubRepos();
  return repos.map((repo) => ({
    repo: repo.name,
  }));
}

export async function generateMetadata({ params }: DynamicRouteParams<{ repo: string }>) {
  const { repo } = await params;
  const repoData = await getGithubRepo(repo);
  
  if (!repoData) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${repoData.name} | Projects`,
    description: repoData.description || "Project details",
  };
}

export default async function ProjectCaseStudy({ params }: DynamicRouteParams<{ repo: string }>) {
  const { repo } = await params;
  
  const [repoData, readmeContent] = await Promise.all([
    getGithubRepo(repo),
    getGithubRepoReadme(repo)
  ]);

  if (!repoData) {
    notFound();
  }

  return <ProjectDetailContent repoData={repoData} readmeContent={readmeContent} />;
}
