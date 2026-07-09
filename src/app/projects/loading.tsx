export default function ProjectsLoading() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 animate-pulse px-6 pt-16 pb-24">
      <div className="mb-12">
        <div className="h-9 w-32 rounded-lg bg-gray-100" />
        <div className="mt-4 h-5 w-3/4 rounded bg-gray-100" />
      </div>
      
      <section className="mt-8">
        <div className="flex flex-col gap-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="block border-t border-gray-100 pt-6">
              <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <div className="h-7 w-1/3 rounded bg-gray-100" />
                <div className="h-4 w-12 rounded bg-gray-100" />
              </div>
              <div className="mb-4 space-y-2">
                <div className="h-5 w-full rounded bg-gray-100" />
                <div className="h-5 w-2/3 rounded bg-gray-100" />
              </div>
              <div className="flex gap-3">
                <div className="h-3 w-16 rounded bg-gray-100" />
                <div className="h-3 w-24 rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
