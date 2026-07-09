export default function BlogPostLoading() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 animate-pulse px-6 pt-16 pb-24">
      <div className="mb-8 h-4 w-24 rounded bg-gray-100" />
      
      <header className="mb-14">
        <div className="mb-4 h-10 w-3/4 rounded-lg bg-gray-100 md:h-12" />
        <div className="h-4 w-32 rounded bg-gray-100" />
      </header>

      <div className="space-y-4">
        <div className="h-4 w-full rounded bg-gray-100" />
        <div className="h-4 w-[90%] rounded bg-gray-100" />
        <div className="h-4 w-[95%] rounded bg-gray-100" />
        <div className="h-4 w-full rounded bg-gray-100" />
        <div className="h-4 w-[85%] rounded bg-gray-100" />
        <div className="h-4 w-3/4 rounded bg-gray-100" />
      </div>
      
      <div className="mt-8 space-y-4">
        <div className="h-4 w-full rounded bg-gray-100" />
        <div className="h-4 w-[92%] rounded bg-gray-100" />
        <div className="h-4 w-[88%] rounded bg-gray-100" />
      </div>
    </div>
  );
}
