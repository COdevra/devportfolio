import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Admin from "@/pages/Admin";
import { Navbar } from "@/components/layout/Navbar";
import { StanfordPattern } from "@/components/ui/stanford-pattern";

function Router() {
  return (
    <div className="flex bg-background">
      <StanfordPattern />
      <Navbar />
      <main className="flex-1 ml-48 min-h-screen">
        <Switch>
          <Route path="/" component={About} />
          <Route path="/projects" component={Projects} />
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