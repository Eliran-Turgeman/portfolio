
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
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Briefly – Automated Blog & Tech Book Summarizer",
      description: "A tool that automatically summarizes tech blog posts and software design books into short, digestible insights. It powers a Telegram channel where developers can stay updated without spending hours reading.",
      tags: ["C# (.NET)", "Blazor", "Redis", "Microservices", "Distributed Systems"],
      githubUrl: "https://github.com/Eliran-Turgeman/Briefly",
    },
    {
      title: "Collecto - Self-Hosted Form & Email Signup Platform",
      description: "A backend-first, self-hostable platform for creating signup forms and collecting emails. Designed for developers who want full control, no vendor lock-in, and strong protection against spam.",
      tags: ["C# (.NET)", "SQLite", "Redis", "Microservices", "Distributed Systems"],
      githubUrl: "https://github.com/Eliran-Turgeman/Collecto",
    },
    {
      title: "OmniBridge – Universal CLI Interface for AI Models",
      description: "A developer-first tool to unify access to multiple AI models via a simple command-line interface. OmniBridge wraps models like GPT and DALL·E, allowing you to run prompts, chain models together, and create complex flows—like Auto-GPT—without writing custom scripts.",
      tags: ["Python", "OpenAI", "API Development"],
      githubUrl: "https://github.com/OmniSpective/OmniBridge",
    },
    {
      title: "Checkov – Infrastructure as Code (IaC) Security Scanner",
      description: "Checkov is an open-source static code analysis tool for securing infrastructure-as-code (Terraform, CloudFormation, Kubernetes, etc.). I contributed to this project during my time at Palo Alto Networks.",
      tags: ["Python", "Terraform", "Github Actions", "API Development"],
      githubUrl: "#",
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
              A selection of open source backend systems I've built. Each demonstrates 
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
            />
          ))}
        </div>
        
        {/* <div className="mt-12 text-center">
          <p className="text-terminal-comment mb-2">// View more of my work on GitHub</p>
          <a 
            href="#" 
            className="inline-block px-6 py-3 border border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan/10 transition-colors rounded-md"
          >
            View More Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
