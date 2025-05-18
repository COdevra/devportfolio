import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Photography() {
  return (
    <MotionDiv
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Photography</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Capturing moments and memories through my lens. Here's a glimpse of my photographic journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your photography cards here */}
        <Card>
          <CardHeader>
            <CardTitle>Nature Photography</CardTitle>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="bg-muted">
              {/* Add your image here */}
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Add your nature photography</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Portrait Photography</CardTitle>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="bg-muted">
              {/* Add your image here */}
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Add your portrait photography</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Street Photography</CardTitle>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="bg-muted">
              {/* Add your image here */}
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Add your street photography</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>
    </MotionDiv>
  );
} 