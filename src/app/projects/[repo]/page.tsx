import Link from "next/link";
import { notFound } from "next/navigation";
import { getGithubRepo, getGithubRepoReadme, getGithubRepos } from "@/services/github.service";
import { markdownToHtml } from "@/utils/markdown";
import { formatDate } from "@/utils/date";

type Params = {
  params: Promise<{
    repo: string;
  }>;
};

export default async function Project({ params }: Params) {
  const resolvedParams = await params;
  
  // Fetch repository data and README in parallel
  const [repoData, readmeMarkdown] = await Promise.all([
    getGithubRepo(resolvedParams.repo),
    getGithubRepoReadme(resolvedParams.repo)
  ]);

  if (!repoData) {
    return notFound();
  }

  // Convert README markdown to HTML. If there's no README, provide a fallback.
  const content = await markdownToHtml(
    readmeMarkdown || "*This repository does not have a README file yet.*"
  );

  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-6 pt-16 pb-24">
      <Link href="/#projects" className="mb-8 inline-block text-sm font-medium text-gray-400 transition-colors hover:text-black">
        ← Back to Projects
      </Link>
      
      <header className="mb-14">
        <h1 className="mb-4 text-4xl leading-tight font-bold tracking-tight md:text-5xl">{repoData.name}</h1>
        <p className="mb-6 text-xl text-gray-500 leading-relaxed">
          {repoData.description || "No description provided."}
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href={repoData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </a>
          
          <time className="font-mono text-sm text-gray-400">
            Last updated: {formatDate(repoData.updated_at)}
          </time>
        </div>
      </header>

      {/* README Content Rendered as HTML */}
      <div 
        className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-600 prose-a:border-b prose-a:border-black prose-a:text-black prose-a:no-underline prose-a:transition-colors hover:prose-a:border-gray-600 hover:prose-a:text-gray-600 prose-img:rounded-xl prose-img:border prose-img:border-gray-100"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const repos = await getGithubRepos();

  return repos.map((repo) => ({
    repo: repo.name,
  }));
}

export async function generateMetadata({ params }: Params) {
  const resolvedParams = await params;
  const repo = await getGithubRepo(resolvedParams.repo);

  if (!repo) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${repo.name} | Project Case Study`,
    description: repo.description || `Read the detailed case study and documentation for ${repo.name}.`,
  };
}
