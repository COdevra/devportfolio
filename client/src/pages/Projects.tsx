import { useState } from "react";
import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { StanfordPattern } from "@/components/ui/stanford-pattern";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  githubUrl: string;
  deployedUrl?: string;
  description: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Krishmitra",
    imageUrl: "/assets/krishimitra.png",
    githubUrl: "https://github.com/COdevra/krishimitra",
    deployedUrl: "https://krishmitra.co",
    description: "A digital platform mission to provide personalized agricultural insights.",
    details:
      "Krishmitra is a digital platform focused on personalizing agricultural recommendations for farmers. The app is currently ongoing and aims to deliver tailored insights for planting, weather, and crop care."
  },
  {
    id: 2,
    title: "Naaso",
    imageUrl: "/assets/naaso.png",
    githubUrl: "https://github.com/COdevra/life",
    deployedUrl: "https://naaso.com.np",
    description: "An e-commerce website to sell local products like roasted barley, apples, and honey.",
    details:
      "Naaso is an e-commerce site built to sell local products such as roasted barley (satu), apples, and honey. It was created to showcase authentic Jumli(my hometown) items online."
  },
  {
    id: 3,
    title: "Nepalingo",
    imageUrl: "/assets/nepalingo.png",
    githubUrl: "https://github.com/nepalcodes/nepalingo",
     deployedUrl: "https://nepalingo.com",
    description: "Nepalingo is a website that helps to learn Nepali indigenous languages.",
    details:
      "Nepalingo is a website that helps to learn Nepali indigenous languages. I was one of the contributors who built this site to preserve our own cultural heritage of languages which are on the verge of extinction."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen p-12">
      <StanfordPattern />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/70" />
      <MotionDiv
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="relative max-w-7xl mx-auto space-y-8 z-10"
      >
        <h1 className="text-4xl font-bold text-white text-center">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-white/10 bg-black/30 backdrop-blur hover:bg-black/40 transition-colors">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <CardHeader className="px-4 pt-4">
                <CardTitle className="text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 pb-4">
                <p className="text-white/90">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.deployedUrl ? (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  ) : null}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary" size="sm" onClick={() => setSelectedProject(project)}>
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                    </DialogHeader>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                      {project.details}
                    </p>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}