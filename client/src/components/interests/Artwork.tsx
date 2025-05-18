import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Artwork() {
  return (
    <MotionDiv
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Artwork & Doodles</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Expressing creativity through drawings and doodles - a visual journey of imagination.
        </p>
      </div>

      <Tabs defaultValue="drawings" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="drawings">Drawings</TabsTrigger>
          <TabsTrigger value="doodles">Doodles</TabsTrigger>
        </TabsList>

        <TabsContent value="drawings" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Character Sketches</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1} className="bg-muted">
                  {/* Add your character sketch here */}
                  <div className="flex items-center justify-center h-full">
                    <p className="text-muted-foreground">Add your character sketch</p>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Landscape Drawings</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1} className="bg-muted">
                  {/* Add your landscape drawing here */}
                  <div className="flex items-center justify-center h-full">
                    <p className="text-muted-foreground">Add your landscape drawing</p>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portrait Art</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1} className="bg-muted">
                  {/* Add your portrait art here */}
                  <div className="flex items-center justify-center h-full">
                    <p className="text-muted-foreground">Add your portrait art</p>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="doodles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Doodles</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1} className="bg-muted">
                  {/* Add your daily doodle here */}
                  <div className="flex items-center justify-center h-full">
                    <p className="text-muted-foreground">Add your daily doodle</p>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pattern Doodles</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1} className="bg-muted">
                  {/* Add your pattern doodle here */}
                  <div className="flex items-center justify-center h-full">
                    <p className="text-muted-foreground">Add your pattern doodle</p>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Abstract Doodles</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1} className="bg-muted">
                  {/* Add your abstract doodle here */}
                  <div className="flex items-center justify-center h-full">
                    <p className="text-muted-foreground">Add your abstract doodle</p>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </MotionDiv>
  );
} 