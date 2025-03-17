import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { StanfordPattern } from "@/components/ui/stanford-pattern";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

// This will be replaced with data from the backend
const essays = [
  {
    title: "Building in Public",
    excerpt: "Why sharing your work matters...",
    content: "Building in public is more than just a trend - it's a powerful way to learn, connect, and grow. When we share our work as it's happening, we open ourselves to feedback, create opportunities for collaboration, and contribute to the collective knowledge of our community...",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32",
    date: "2024-03-17"
  },
  // Add more essays here
];

export default function Essays() {
  const [selectedEssay, setSelectedEssay] = useState<typeof essays[0] | null>(null);

  return (
    <div className="min-h-screen p-12">
      <StanfordPattern />
      <MotionDiv
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="max-w-4xl space-y-8"
      >
        <h1 className="text-4xl font-bold mb-8">Essays</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {essays.map((essay, index) => (
            <MotionDiv key={index} variants={fadeIn}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  {essay.image && (
                    <img
                      src={essay.image}
                      alt={essay.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  )}
                  <h2 className="text-2xl font-semibold">{essay.title}</h2>
                  <p className="text-foreground/80 line-clamp-3">{essay.excerpt}</p>
                  <p className="text-sm text-muted-foreground">{essay.date}</p>
                  <Button 
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => setSelectedEssay(essay)}
                  >
                    Read Full Essay
                  </Button>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>

      <Dialog open={!!selectedEssay} onOpenChange={() => setSelectedEssay(null)}>
        {selectedEssay && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedEssay.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {selectedEssay.image && (
                <img
                  src={selectedEssay.image}
                  alt={selectedEssay.title}
                  className="w-full h-64 object-cover rounded-md"
                />
              )}
              <p className="text-sm text-muted-foreground">{selectedEssay.date}</p>
              <div className="prose prose-invert max-w-none">
                <p className="whitespace-pre-wrap">{selectedEssay.content}</p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}