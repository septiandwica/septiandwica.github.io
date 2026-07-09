export default function ChatLoading() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 animate-pulse px-6 pt-16 pb-24">
      <div className="mb-12">
        <div className="h-9 w-48 rounded-lg bg-gray-100" />
        <div className="mt-4 h-5 w-64 rounded bg-gray-100" />
      </div>
      
      <div className="mt-8 space-y-4">
        <div className="h-32 w-full rounded-lg bg-gray-100" />
        <div className="mx-auto h-3 w-3/4 rounded bg-gray-100" />
      </div>
    </div>
  );
}
