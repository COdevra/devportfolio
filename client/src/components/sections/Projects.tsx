import { Section } from "@/components/layout/Section";
import { MotionDiv, fadeIn, staggerContainer } from "@/components/ui/motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    demo: "#",
    github: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with data visualization",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    demo: "#",
    github: "#"
  },
  {
    title: "Social Media App",
    description: "Mobile-first social media application with real-time features",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    demo: "#",
    github: "#"
  },
  {
    title: "Task Management Tool",
    description: "Collaborative task management tool for remote teams",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    demo: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <Section id="projects">
      <MotionDiv
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-gray-600">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <MotionDiv key={index} variants={fadeIn}>
              <Card className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-end gap-4 p-6 pt-0">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </Section>
  );
}
