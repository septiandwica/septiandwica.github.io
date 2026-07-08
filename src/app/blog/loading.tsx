export default function BlogLoading() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-16 pb-24 flex-1 animate-pulse">
      <div className="h-10 md:h-12 bg-gray-100 rounded-lg w-32 mb-4"></div>
      <div className="h-4 bg-gray-100 rounded w-3/4 mb-16"></div>

      <div className="flex flex-col gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="block border-t border-gray-50 pt-6">
            <div className="flex justify-between gap-2 mb-3">
              <div className="h-6 bg-gray-100 rounded w-1/2"></div>
              <div className="h-4 bg-gray-100 rounded w-24"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-100 rounded w-full"></div>
              <div className="h-4 bg-gray-100 rounded w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
