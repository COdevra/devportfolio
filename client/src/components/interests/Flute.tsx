import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Flute() {
  return (
    <MotionDiv
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Flute Playing</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A journey of melodies and musical expression through the flute.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Musical Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Started playing the flute in [Year]. The journey began with classical pieces and gradually expanded to include contemporary music.
              </p>
              <p className="text-muted-foreground">
                Favorite pieces include [Your favorite pieces]. Each piece tells a story and brings its own unique emotions.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Performances</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Here are some of my recent flute performances. Each recording captures a moment of musical expression and growth.
              </p>
            </div>
            <AspectRatio ratio={16 / 9} className="bg-muted">
              {/* Add your performance video/audio here */}
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Add your performance recording</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>
    </MotionDiv>
  );
} 