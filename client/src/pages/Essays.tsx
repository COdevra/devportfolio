import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";

// This will be replaced with data from the backend
const essays = [
  {
    title: "Building in Public",
    excerpt: "Why sharing your work matters...",
    date: "2024-03-17"
  },
  // Add more essays here
];

export default function Essays() {
  return (
    <div className="min-h-screen p-12">
      <MotionDiv
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="max-w-4xl space-y-8"
      >
        <h1 className="text-4xl font-bold mb-8">Essays</h1>
        <div className="space-y-6">
          {essays.map((essay, index) => (
            <MotionDiv key={index} variants={fadeIn}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-semibold">{essay.title}</h2>
                  <p className="text-foreground/80">{essay.excerpt}</p>
                  <p className="text-sm text-muted-foreground">{essay.date}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}
