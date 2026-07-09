export type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
  stargazers_count: number;
  fork: boolean;
  forks_count: number;
  languages?: string[];
};
