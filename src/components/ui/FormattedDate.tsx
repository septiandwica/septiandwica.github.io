import { formatDate } from "@/utils/date";

export default function FormattedDate({ date, className = "" }: { date: string | Date, className?: string }) {
  return (
    <time className={`font-mono text-sm text-gray-400 ${className}`}>
      {formatDate(date)}
    </time>
  );
}
