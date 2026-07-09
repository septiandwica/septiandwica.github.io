export default function ContactLoading() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 animate-pulse px-6 pt-16 pb-24">
      <div className="mb-12">
        <div className="h-9 w-32 rounded-lg bg-gray-100" />
        <div className="mt-4 h-5 w-64 rounded bg-gray-100" />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100" />
            <div className="w-full space-y-2">
              <div className="h-4 w-16 rounded bg-gray-100" />
              <div className="h-3 w-32 rounded bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
