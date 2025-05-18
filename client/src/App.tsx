import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Books from "@/pages/Books";
import Essays from "@/pages/Essays";
import Memories from "@/pages/Memories";
import Admin from "@/pages/Admin";
import Interests from "@/pages/Interests";
import { Navbar } from "@/components/layout/Navbar";
import { StanfordPattern } from "@/components/ui/stanford-pattern";

function Router() {
  return (
    <div className="flex bg-background">
      <StanfordPattern />
      <Navbar />
      <main className="flex-1 ml-48 min-h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/essays" component={Essays} />
          <Route path="/memories" component={Memories} />
          <Route path="/interests" component={Interests} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;