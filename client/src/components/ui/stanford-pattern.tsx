import { cn } from "@/lib/utils";

interface StanfordPatternProps {
  className?: string;
}

export function StanfordPattern({ className }: StanfordPatternProps) {
  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="stanford-tree" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Simple Stanford Tree Shape */}
            <path
              d="M100 20 
                 L120 60 L140 60 L120 90 
                 L140 90 L110 130 L130 130 
                 L100 170 L70 130 L90 130 
                 L60 90 L80 90 L60 60 L80 60 Z"
              fill="#2E6C49"
              opacity="0.3"
              className="drop-shadow-md"
            />
          </pattern>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" opacity="0.1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        <rect x="0" y="0" width="100%" height="100%" fill="url(#stanford-tree)" />
      </svg>
    </div>
  );
}