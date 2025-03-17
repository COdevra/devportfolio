import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  review: z.string().min(10, "Review must be at least 10 characters"),
  rating: z.number().min(1).max(5)
});

const essaySchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(50, "Essay must be at least 50 characters")
});

type BookFormData = z.infer<typeof bookSchema>;
type EssayFormData = z.infer<typeof essaySchema>;

export default function Admin() {
  const { toast } = useToast();
  const bookForm = useForm<BookFormData>({
    resolver: zodResolver(bookSchema)
  });
  
  const essayForm = useForm<EssayFormData>({
    resolver: zodResolver(essaySchema)
  });

  const onBookSubmit = async (data: BookFormData) => {
    try {
      // TODO: Add API integration
      console.log(data);
      toast({
        title: "Success",
        description: "Book review added successfully",
      });
      bookForm.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add book review",
      });
    }
  };

  const onEssaySubmit = async (data: EssayFormData) => {
    try {
      // TODO: Add API integration
      console.log(data);
      toast({
        title: "Success",
        description: "Essay added successfully",
      });
      essayForm.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add essay",
      });
    }
  };

  return (
    <div className="min-h-screen p-12">
      <MotionDiv
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="max-w-4xl space-y-8"
      >
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <Tabs defaultValue="books">
          <TabsList>
            <TabsTrigger value="books">Book Reviews</TabsTrigger>
            <TabsTrigger value="essays">Essays</TabsTrigger>
          </TabsList>

          <TabsContent value="books" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Add Book Review</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...bookForm}>
                  <form onSubmit={bookForm.handleSubmit(onBookSubmit)} className="space-y-6">
                    <FormField
                      control={bookForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Book Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={bookForm.control}
                      name="author"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Author</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={bookForm.control}
                      name="review"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Review</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[100px]" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={bookForm.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rating (1-5)</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" max="5" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <Button type="submit">Add Book Review</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="essays" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Add Essay</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...essayForm}>
                  <form onSubmit={essayForm.handleSubmit(onEssaySubmit)} className="space-y-6">
                    <FormField
                      control={essayForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={essayForm.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[200px]" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <Button type="submit">Add Essay</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </MotionDiv>
    </div>
  );
}
