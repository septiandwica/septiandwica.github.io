export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 animate-pulse px-6 pt-16 pb-24">
      {/* Hero Skeleton */}
      <section className="flex flex-col-reverse items-start justify-between gap-12 md:flex-row md:items-center">
        <div className="w-full flex-1 space-y-6">
          <div className="h-10 w-3/4 rounded-lg bg-gray-100 md:h-12" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-gray-100" />
            <div className="h-4 w-5/6 rounded bg-gray-100" />
          </div>
          <div className="flex gap-4 pt-2">
            <div className="h-5 w-20 rounded bg-gray-100" />
            <div className="h-5 w-16 rounded bg-gray-100" />
          </div>
        </div>
        
        <div className="size-32 shrink-0 rounded-full bg-gray-100 md:size-40" />
      </section>

      {/* Projects Skeleton */}
      <section className="pt-24">
        <div className="mb-8 h-8 w-48 rounded bg-gray-100" />
        <div className="flex flex-col gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="block border-t border-gray-50 pt-6">
              <div className="mb-3 flex justify-between gap-2">
                <div className="h-6 w-1/3 rounded bg-gray-100" />
                <div className="h-4 w-12 rounded bg-gray-100" />
              </div>
              <div className="mb-4 space-y-2">
                <div className="h-4 w-full rounded bg-gray-100" />
                <div className="h-4 w-2/3 rounded bg-gray-100" />
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
