export default function Tag({ name, className = "" }: { name: string, className?: string }) {
  return (
    <span className={`text-xs font-medium text-gray-400 ${className}`}>
      #{name}
    </span>
  );
}
