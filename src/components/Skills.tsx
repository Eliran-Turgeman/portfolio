
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
      title: "Languages",
      icon: <Cpu className="w-4 h-4 text-terminal-purple" />,
      skills: ["JavaScript/TypeScript", "Python", "Go", "SQL", "Rust (Learning)"]
    },
    {
      title: "Databases",
      icon: <Database className="w-4 h-4 text-terminal-yellow" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra"]
    },
    {
      title: "DevOps",
      icon: <Server className="w-4 h-4 text-terminal-cyan" />,
      skills: ["Docker", "Kubernetes", "AWS/GCP", "CI/CD Pipelines", "Terraform"]
    },
    {
      title: "Architecture",
      icon: <Settings className="w-4 h-4 text-terminal-green" />,
      skills: ["Microservices", "RESTful APIs", "GraphQL", "Event-Driven Design", "System Design"]
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
              My expertise spans a range of backend technologies, frameworks, and methodologies
              that enable me to build efficient, scalable, and maintainable systems.
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
  "problem_solving": "Methodical approach to breaking down complex problems",
  "optimization": "Focus on performance and resource efficiency",
  "best_practices": "Clean code, thorough testing, comprehensive documentation",
  "continuous_learning": "Always expanding knowledge of new technologies"
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
