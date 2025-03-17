import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { StanfordPattern } from "@/components/ui/stanford-pattern";

export default function Home() {
  return (
    <div className="min-h-screen p-12">
      <StanfordPattern className="opacity-10" />
      <MotionDiv
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="max-w-2xl space-y-8"
      >
        <h1 className="text-4xl font-bold mb-8">Aaditya Nalawade</h1>

        <div className="space-y-4 text-muted-foreground">
          <p>freshman @ stanford.</p>
          <p>building consumer apps @ glassroomstudio</p>

          <p className="mt-8">
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
        </div>
      </MotionDiv>
    </div>
  );
}