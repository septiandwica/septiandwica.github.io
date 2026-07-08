import { Repo } from "../../types/github";

export default function Projects({ repos }: { repos: Repo[] }) {
  return (
    <section id="projects" className="pt-24">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Selected Projects</h2>
      
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
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold group-hover:underline decoration-2 underline-offset-4">
                  {repo.name}
                </h3>
                <span className="text-sm text-gray-400 font-mono">
                  {new Date(repo.updated_at).getFullYear()}
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {repo.description || "No description provided for this repository."}
              </p>
              <div className="flex gap-3 text-xs text-gray-400 font-medium">
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
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          View all projects on GitHub →
        </a>
      </div>
    </section>
  );
}
