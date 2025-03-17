import { cn } from "@/lib/utils";

interface StanfordPatternProps {
  className?: string;
}

export function StanfordPattern({ className }: StanfordPatternProps) {
  return (
    <div className={cn("fixed inset-0 -z-10 opacity-5", className)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="tree-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M30 10 L35 25 L25 25 Z M30 20 L35 35 L25 35 Z"
            fill="currentColor"
            className="text-primary"
          />
          <line x1="30" y1="35" x2="30" y2="45" stroke="currentColor" strokeWidth="2" className="text-primary" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#tree-pattern)" />
      </svg>
    </div>
  );
}
