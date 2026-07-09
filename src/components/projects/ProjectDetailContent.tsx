import MarkdownViewer from "@/components/ui/MarkdownViewer";
import BackButton from "@/components/ui/BackButton";
import FormattedDate from "@/components/ui/FormattedDate";
import { ProjectDetailContentProps } from "@/types/components";

export default function ProjectDetailContent({ repoData, readmeContent }: ProjectDetailContentProps) {
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-6 pt-16 pb-24">
      <div className="mb-12">
        <BackButton href="/projects" text="Back to projects" />
      </div>

      <header className="mb-12 border-b border-gray-100 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{repoData.name}</h1>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {repoData.language || "Mixed"}
          </span>
        </div>
        
        <p className="text-lg text-gray-600 mb-6">
          {repoData.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <a 
            href={repoData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Repository
          </a>
          
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Last updated: <FormattedDate date={repoData.updated_at} className="inline-block ml-1" /></span>
          </div>
        </div>
      </header>

      {readmeContent ? (
        <MarkdownViewer content={readmeContent} />
      ) : (
        <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-gray-500">
          No detailed documentation available for this project.
        </div>
      )}
    </article>
  );
}
