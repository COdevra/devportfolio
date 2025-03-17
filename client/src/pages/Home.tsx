import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { StanfordPattern } from "@/components/ui/stanford-pattern";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="relative min-h-screen p-12">
      <StanfordPattern />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/70" />
      <MotionDiv
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="relative max-w-2xl space-y-12 z-10"
      >
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white">Aaditya Nalawade</h1>
          <Card className="border-white/10 bg-black/30 backdrop-blur">
            <CardContent className="p-6">
              <div className="space-y-4 text-white/90">
                <p className="text-lg">freshman @ stanford.</p>
                <Separator className="bg-white/10" />
                <p className="text-lg">
                  building consumer apps @{" "}
                  <span className="text-white hover:underline cursor-pointer">
                    glassroomstudio
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-white/10 bg-black/30 backdrop-blur hover:bg-black/40 transition-colors">
          <CardContent className="p-6">
            <p className="text-lg text-white/90 leading-relaxed">
              I believe you cannot build great things without being surrounded by
              great people. This is one of the reasons I started writing on{" "}
              <a 
                href="https://twitter.com" 
                className="text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </MotionDiv>
    </div>
  );
}