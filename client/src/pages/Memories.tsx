import { MotionDiv, fadeIn, staggerContainer } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { StanfordPattern } from "@/components/ui/stanford-pattern";

// This will be replaced with data from the backend
const memories = [
  {
    title: "First Day at Stanford",
    description: "The beginning of a new journey...",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    date: "2024-03-01"
  },
  // Add more memories here
];

export default function Memories() {
  return (
    <div className="min-h-screen p-12">
      <StanfordPattern />
      <MotionDiv
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl space-y-8"
      >
        <h1 className="text-4xl font-bold mb-8">Memories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <MotionDiv key={index} variants={fadeIn}>
              <Card className="overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-semibold">{memory.title}</h2>
                  <p className="text-foreground/80">{memory.description}</p>
                  <p className="text-sm text-muted-foreground">{memory.date}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}
