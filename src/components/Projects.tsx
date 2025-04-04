
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
      title: "Distributed Threat Detection Engine",
      description: "Designed and implemented a high-throughput distributed backend system that processes millions of cloud events per second to identify security threats in real-time.",
      tags: ["Go", "Kafka", "Redis", "Microservices", "Distributed Systems"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Cloud Resource Access Service",
      description: "Built a scalable API gateway for enforcing access control policies across multi-cloud environments, handling 50,000+ requests per second with sub-10ms latency.",
      tags: ["Rust", "gRPC", "Kubernetes", "Backend", "High Performance"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Event Processing Pipeline",
      description: "Architected a fault-tolerant data pipeline for processing security telemetry from thousands of enterprise cloud deployments with guaranteed delivery semantics.",
      tags: ["Python", "AWS", "ELK Stack", "Streaming", "Reliability"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Security Configuration Service",
      description: "Developed a distributed configuration management system for security policies with strong consistency guarantees and multi-region replication capabilities.",
      tags: ["Java", "Cassandra", "Backend", "Distributed Systems", "Scalability"],
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
              A selection of backend systems I've built for cloud security products. Each demonstrates 
              my focus on reliability, scalability, and security in high-traffic distributed 
              environments.
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
