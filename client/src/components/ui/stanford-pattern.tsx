import { cn } from "@/lib/utils";

interface StanfordPatternProps {
  className?: string;
}

export function StanfordPattern({ className }: StanfordPatternProps) {
  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="stanford-tree" x="0" y="0" width="100" height="120" patternUnits="userSpaceOnUse">
            {/* Stylized Stanford Tree */}
            <path
              d="M50 10 L60 30 L70 30 L55 45 L65 45 L45 65 L55 65 L35 85 L45 85 L30 100 L15 85 L25 85 L5 65 L15 65 L-5 45 L5 45 L-10 30 L0 30 L10 10 Z"
              fill="currentColor"
              className="text-primary"
              opacity="0.15"
            />
            <line x1="30" y1="100" x2="30" y2="110" stroke="currentColor" strokeWidth="2" className="text-primary" opacity="0.15" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#stanford-tree)" />
      </svg>
    </div>
  );
}