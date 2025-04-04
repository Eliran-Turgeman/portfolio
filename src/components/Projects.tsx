
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CommandPrompt from "./CommandPrompt";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  githubUrl = "#", 
  liveUrl = "#" 
}: {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}) => {
  return (
    <Card className="bg-terminal-gray border-terminal-gray hover:border-terminal-cyan transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-terminal-green">{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} className="bg-terminal-darkgray text-terminal-yellow border border-terminal-gray">
                {tag}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-3">
        <a
          href={githubUrl}
          className="text-muted-foreground hover:text-terminal-cyan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={liveUrl}
          className="text-muted-foreground hover:text-terminal-cyan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Demo"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Distributed Cache System",
      description: "High-performance distributed caching system built with Redis and Node.js, supporting horizontal scaling and fault tolerance.",
      tags: ["Node.js", "Redis", "Docker", "System Design"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "API Gateway Microservice",
      description: "Centralized API gateway that handles authentication, rate limiting, and request routing for a microservices architecture.",
      tags: ["Go", "Kubernetes", "gRPC", "Microservices"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Real-time Data Pipeline",
      description: "Scalable data processing pipeline that handles millions of events per second with minimal latency.",
      tags: ["Kafka", "Python", "AWS", "Big Data"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Database Optimization Framework",
      description: "A toolkit for identifying and resolving performance bottlenecks in relational and NoSQL databases.",
      tags: ["SQL", "MongoDB", "Performance", "DevOps"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-terminal-black">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <CommandPrompt command="ls -la ./projects">
            <h2 className="text-2xl font-bold text-terminal-cyan mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 mb-8 max-w-3xl">
              A selection of my recent backend engineering projects. Each demonstrates 
              my approach to solving complex technical challenges and building 
              scalable systems.
            </p>
          </CommandPrompt>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              description={project.description} 
              tags={project.tags} 
              githubUrl={project.githubUrl} 
              liveUrl={project.liveUrl} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-terminal-comment mb-2">// View more of my work on GitHub</p>
          <a 
            href="#" 
            className="inline-block px-6 py-3 border border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan/10 transition-colors rounded-md"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
