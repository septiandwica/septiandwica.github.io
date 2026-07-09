import { Repo } from "../../types/github";

export default function Projects({ repos }: { repos: Repo[] }) {
  return (
    <section id="projects" className="mt-8">
      <div className="flex flex-col gap-10">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <a 
              key={repo.id} 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block border-t border-gray-100 pt-6"
            >
              <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold decoration-2 underline-offset-4 group-hover:underline">
                  {repo.name}
                </h3>
                <span className="font-mono text-sm text-gray-400">
                  {new Date(repo.updated_at).getFullYear()}
                </span>
              </div>
              <p className="mb-4 leading-relaxed text-gray-600">
                {repo.description || "No description provided for this repository."}
              </p>
              <div className="flex gap-3 text-xs font-medium text-gray-400">
                {repo.language && (
                  <>
                    <span>{repo.language}</span>
                    <span>•</span>
                  </>
                )}
                <span>GitHub Repository</span>
              </div>
            </a>
          ))
        ) : (
          <p className="text-gray-500 italic">No public repositories found.</p>
        )}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://github.com/septiandwica?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          View all projects on GitHub →
        </a>
      </div>
    </section>
  );
}
