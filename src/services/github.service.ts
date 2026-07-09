import { Repo } from "../types/github";

const SELECTED_REPOS: string[] = [
  "president",
  "education-analytics-prediction",
  "moodle-ainotebook",
  "moodle-aurasupport",
  "netrago",
  "septiandwica.github.io"
];

// Helper to construct headers with optional GitHub token
function getHeaders(extraHeaders: Record<string, string> = {}) {
  const headers: Record<string, string> = { ...extraHeaders };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN.trim()}`;
  }
  return headers;
}

export async function getGithubRepos(): Promise<Repo[]> {
  try {
    const res = await fetch('https://api.github.com/users/septiandwica/repos?per_page=100', {
      headers: getHeaders(),
    });
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    
    let finalRepos = repos;
    
    if (SELECTED_REPOS.length > 0) {
      const lowerSelected = SELECTED_REPOS.map(name => name.toLowerCase());
      finalRepos = repos
        .filter(repo => lowerSelected.includes(repo.name.toLowerCase()))
        .sort((a, b) => lowerSelected.indexOf(a.name.toLowerCase()) - lowerSelected.indexOf(b.name.toLowerCase()));
    } else {
      // Filter out forks and return top 4 by stars if no SELECTED_REPOS
      finalRepos = repos
        .filter(repo => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);
    }

    // Fetch languages for the selected repos
    const reposWithLanguages = await Promise.all(
      finalRepos.map(async (repo) => {
        try {
          const langRes = await fetch(
            `https://api.github.com/repos/septiandwica/${repo.name}/languages`,
            { headers: getHeaders() }
          );
          if (langRes.ok) {
            const langData = await langRes.json();
            repo.languages = Object.keys(langData);
          } else {
            repo.languages = repo.language ? [repo.language] : [];
          }
        } catch {
          repo.languages = repo.language ? [repo.language] : [];
        }
        return repo;
      })
    );

    return reposWithLanguages;
  } catch {
    return [];
  }
}

export async function getGithubRepo(repoName: string): Promise<Repo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/septiandwica/${repoName}`, {
      headers: getHeaders(),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function getGithubRepoReadme(repoName: string): Promise<string> {
  try {
    // Fetch the raw markdown content of the default branch
    const res = await fetch(`https://api.github.com/repos/septiandwica/${repoName}/readme`, {
      headers: getHeaders({ Accept: 'application/vnd.github.v3.raw' }),
    });
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  }
}
