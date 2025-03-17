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
const books = [
  {
    title: "Zero to One",
    author: "Peter Thiel",
    review: "A thought-provoking book about building the future. In Zero to One, Peter Thiel shows how we can find singular ways to create those new things. He begins with the contrarian premise that we live in an age of technological stagnation, even if we're too distracted by shiny mobile devices to notice...",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    rating: 5,
    date: "2024-03-15"
  },
  // Add more books here
];

export default function Books() {
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null);

  return (
    <div className="min-h-screen p-12">
      <StanfordPattern />
      <MotionDiv
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="max-w-4xl space-y-8"
      >
        <h1 className="text-4xl font-bold mb-8">Book Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <MotionDiv key={index} variants={fadeIn}>
              <Card className="overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h2 className="text-2xl font-semibold">{book.title}</h2>
                  <p className="text-muted-foreground">by {book.author}</p>
                  <p className="text-foreground/80 line-clamp-3">{book.review}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Rating: {book.rating}/5</span>
                    <span>{book.date}</span>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => setSelectedBook(book)}
                  >
                    Read Full Review
                  </Button>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>

      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        {selectedBook && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedBook.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedBook.image}
                alt={selectedBook.title}
                className="w-full h-64 object-cover rounded-md"
              />
              <p className="text-muted-foreground">by {selectedBook.author}</p>
              <p className="text-foreground/80 whitespace-pre-wrap">
                {selectedBook.review}
              </p>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Rating: {selectedBook.rating}/5</span>
                <span>{selectedBook.date}</span>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}