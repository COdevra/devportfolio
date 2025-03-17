import { cn } from "@/lib/utils";

interface StanfordPatternProps {
  className?: string;
}

export function StanfordPattern({ className }: StanfordPatternProps) {
  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="stanford-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </pattern>
          <pattern id="stanford-tree" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
            {/* Stylized Stanford Tree - more detailed */}
            <path
              d="M80 20 
                 L95 50 L105 50 L90 70 
                 L100 70 L85 90 L95 90 
                 L75 115 L85 115 L65 135 
                 L75 135 L60 155 L45 135 
                 L55 135 L35 115 L45 115 
                 L25 90 L35 90 L20 70 
                 L30 70 L15 50 L25 50 L40 20 Z"
              fill="white"
              opacity="0.15"
              className="animate-pulse"
            />
            <line 
              x1="60" y1="155" 
              x2="60" y2="160" 
              stroke="white" 
              strokeWidth="3"
              opacity="0.15"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#stanford-grid)" />
        <rect x="0" y="0" width="100%" height="100%" fill="url(#stanford-tree)" />
      </svg>
    </div>
  );
}