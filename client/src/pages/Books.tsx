import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";

// This will be replaced with data from the backend
const books = [
  {
    title: "Zero to One",
    author: "Peter Thiel",
    review: "A thought-provoking book about building the future...",
    rating: 5,
    date: "2024-03-15"
  },
  // Add more books here
];

export default function Books() {
  return (
    <div className="min-h-screen p-12">
      <MotionDiv
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="max-w-4xl space-y-8"
      >
        <h1 className="text-4xl font-bold mb-8">Book Reviews</h1>
        <div className="space-y-6">
          {books.map((book, index) => (
            <MotionDiv key={index} variants={fadeIn}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-semibold">{book.title}</h2>
                  <p className="text-muted-foreground">by {book.author}</p>
                  <p className="text-foreground/80">{book.review}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Rating: {book.rating}/5</span>
                    <span>{book.date}</span>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}
