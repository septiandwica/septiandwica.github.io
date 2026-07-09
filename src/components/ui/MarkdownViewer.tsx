import { markdownToHtml } from "@/utils/markdown";

export default async function MarkdownViewer({ content, className = "" }: { content: string, className?: string }) {
  const htmlContent = await markdownToHtml(content);
  
  return (
    <div 
      className={`prose prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-600 prose-a:border-b prose-a:border-black prose-a:text-black prose-a:no-underline prose-a:transition-colors hover:prose-a:border-gray-600 hover:prose-a:text-gray-600 prose-img:rounded-xl prose-img:border prose-img:border-gray-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
