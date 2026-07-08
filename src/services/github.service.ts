import { Repo } from "../types/github";

const SELECTED_REPOS: string[] = [
  "president",
  "education-analytics-prediction",
  "moodle-ainotebook",
  "moodle-aurasupport",
  "netrago",
  "septiandwica.github.io"
];

export async function getGithubRepos(): Promise<Repo[]> {
  try {
    const res = await fetch('https://api.github.com/users/septiandwica/repos?per_page=100');
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    
    if (SELECTED_REPOS.length > 0) {
      const lowerSelected = SELECTED_REPOS.map(name => name.toLowerCase());
      return repos
        .filter(repo => lowerSelected.includes(repo.name.toLowerCase()))
        .sort((a, b) => lowerSelected.indexOf(a.name.toLowerCase()) - lowerSelected.indexOf(b.name.toLowerCase()));
    }

    // Filter out forks and return top 4 by stars if no SELECTED_REPOS
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4);
  } catch {
    return [];
  }
}
