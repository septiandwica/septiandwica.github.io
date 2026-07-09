export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 animate-pulse px-6 pt-16 pb-24">
      <section className="flex flex-col gap-12">
        <div className="flex flex-col-reverse items-start justify-between gap-12 md:flex-row md:items-center">
          <div className="w-full flex-1 space-y-6">
            <div className="space-y-3">
              <div className="h-10 w-48 rounded-lg bg-gray-100 md:h-12" />
              <div className="h-6 w-40 rounded-lg bg-gray-100" />
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="h-5 w-full rounded bg-gray-100" />
              <div className="h-5 w-[90%] rounded bg-gray-100" />
              <div className="h-5 w-[80%] rounded bg-gray-100" />
            </div>
            
            <div className="flex gap-4 pt-4">
              <div className="h-5 w-16 rounded bg-gray-100" />
              <div className="h-5 w-16 rounded bg-gray-100" />
            </div>
          </div>
          
          <div className="size-32 shrink-0 rounded-full bg-gray-100 md:size-40" />
        </div>

        <div className="mt-16 space-y-8 border-t border-gray-100 pt-8">
          <div className="space-y-4">
            <div className="h-3 w-24 rounded bg-gray-100" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-9 w-28 rounded-lg bg-gray-100" />
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="h-3 w-40 rounded bg-gray-100" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-9 w-28 rounded-lg bg-gray-100" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
