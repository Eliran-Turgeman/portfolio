
import React from "react";
import { Cpu, Database, Server, Settings } from "lucide-react";
import CommandPrompt from "./CommandPrompt";

const SkillCategory = ({ 
  title, 
  skills, 
  icon 
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ReactNode 
}) => {
  return (
    <div className="terminal-window h-full">
      <div className="terminal-header flex items-center">
        {icon}
        <h3 className="ml-2 text-terminal-cyan">{title}</h3>
      </div>
      <div className="terminal-content">
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="text-terminal-green mr-2">~</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Runtime",
      icon: <Cpu className="w-4 h-4 text-terminal-purple" />,
      skills: ["C# (.NET)", "Python", "TypeScript/Node.js", "Go"]
    },
    {
      title: "Infra & Cloud",
      icon: <Database className="w-4 h-4 text-terminal-yellow" />,
      skills: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform"]
    },
    {
      title: "Backend Technologies",
      icon: <Server className="w-4 h-4 text-terminal-cyan" />,
      skills: ["Microservices", "gRPC/REST APIs", "Message Brokers", "Redis", "SQL/NoSQL"]
    },
    {
      title: "System Design",
      icon: <Settings className="w-4 h-4 text-terminal-green" />,
      skills: ["Distributed Systems", "High Availability", "Fault Tolerance", "Load Balancing", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-terminal-darkgray">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <CommandPrompt command="cat ./skills.md">
            <h2 className="text-2xl font-bold text-terminal-cyan mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-400 mb-8 max-w-3xl">
              My expertise in backend engineering and distributed systems allows me to build
              reliable, scalable, and secure cloud infrastructure for high-traffic applications.
            </p>
          </CommandPrompt>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              skills={category.skills} 
              icon={category.icon} 
            />
          ))}
        </div>

        <div className="mt-16">
          <CommandPrompt command="cat ./approach.json">
            <div className="terminal-window">
              <div className="terminal-content text-sm">
                <pre className="text-terminal-yellow">
{`{
  "reliability": "Building systems that operate continuously under heavy load",
  "scalability": "Designing architectures that scale elastically with demand",
  "performance": "Optimizing for low latency and high throughput",
  "security": "Implementing strong security practices from the ground up"
}`}
                </pre>
              </div>
            </div>
          </CommandPrompt>
        </div>
      </div>
    </section>
  );
};

export default Skills;
