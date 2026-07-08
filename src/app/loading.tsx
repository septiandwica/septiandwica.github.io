export default function Loading() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-16 pb-24 flex-1 animate-pulse">
      {/* Hero Skeleton */}
      <section className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12">
        <div className="flex-1 space-y-6 w-full">
          <div className="h-10 md:h-12 bg-gray-100 rounded-lg w-3/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-100 rounded w-full"></div>
            <div className="h-4 bg-gray-100 rounded w-5/6"></div>
          </div>
          <div className="flex gap-4 pt-2">
            <div className="h-5 bg-gray-100 rounded w-20"></div>
            <div className="h-5 bg-gray-100 rounded w-16"></div>
          </div>
        </div>
        
        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-gray-100 rounded-full"></div>
      </section>

      {/* Projects Skeleton */}
      <section className="pt-24">
        <div className="h-8 bg-gray-100 rounded w-48 mb-8"></div>
        <div className="flex flex-col gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="block border-t border-gray-50 pt-6">
              <div className="flex justify-between gap-2 mb-3">
                <div className="h-6 bg-gray-100 rounded w-1/3"></div>
                <div className="h-4 bg-gray-100 rounded w-12"></div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-2/3"></div>
              </div>
              <div className="flex gap-3">
                <div className="h-3 bg-gray-100 rounded w-16"></div>
                <div className="h-3 bg-gray-100 rounded w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
