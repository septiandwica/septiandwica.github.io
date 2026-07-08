import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import { getGithubRepos } from "../services/github.service";

export default async function Home() {
  const repos = await getGithubRepos();

  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-16 pb-24 flex-1">
      <Hero />
      <Projects repos={repos} />
    </div>
  );
}
