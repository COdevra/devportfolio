import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { StanfordPattern } from "@/components/ui/stanford-pattern";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen p-12">
      <StanfordPattern />
      <MotionDiv
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="max-w-2xl space-y-12"
      >
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Aaditya Nalawade</h1>
          <Card className="border-primary/20 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">freshman @ stanford.</p>
                <Separator className="bg-primary/20" />
                <p className="text-lg">
                  building consumer apps @{" "}
                  <span className="text-primary hover:underline cursor-pointer">
                    glassroomstudio
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe you cannot build great things without being surrounded by
              great people. This is one of the reasons I started writing on{" "}
              <a 
                href="https://twitter.com" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              .
            </p>
          </CardContent>
        </Card>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </MotionDiv>
    </div>
  );
}