import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Photography from "@/components/interests/Photography";
import Flute from "@/components/interests/Flute";
import Artwork from "@/components/interests/Artwork";

export default function Interests() {
  return (
    <div className="min-h-screen p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">My Interests & Hobbies</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring creativity through photography, music, and art. Each medium offers a unique way to express and capture the world around me.
          </p>
        </div>

        <Tabs defaultValue="photography" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="photography">Photography</TabsTrigger>
            <TabsTrigger value="flute">Flute Playing</TabsTrigger>
            <TabsTrigger value="artwork">Artwork & Doodles</TabsTrigger>
          </TabsList>

          <TabsContent value="photography" className="mt-6">
            <Photography />
          </TabsContent>

          <TabsContent value="flute" className="mt-6">
            <Flute />
          </TabsContent>

          <TabsContent value="artwork" className="mt-6">
            <Artwork />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 