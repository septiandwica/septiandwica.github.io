export default function BlogLoading() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 animate-pulse px-6 pt-16 pb-24">
      <div className="mb-4 h-10 w-32 rounded-lg bg-gray-100 md:h-12" />
      <div className="mb-16 h-4 w-3/4 rounded bg-gray-100" />

      <div className="flex flex-col gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="block border-t border-gray-50 pt-6">
            <div className="mb-3 flex justify-between gap-2">
              <div className="h-6 w-1/2 rounded bg-gray-100" />
              <div className="h-4 w-24 rounded bg-gray-100" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-gray-100" />
              <div className="h-4 w-5/6 rounded bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
