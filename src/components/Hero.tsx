
import React, { useState, useEffect } from "react";
import TerminalEffect from "./TerminalEffect";
import CommandPrompt from "./CommandPrompt";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const handleIntroComplete = () => {
    setShowSkills(true);
  };

  const handleSkillsComplete = () => {
    setShowCTA(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="terminal-window max-w-4xl mx-auto">
          <div className="terminal-header">
            <div className="terminal-circle bg-red-500"></div>
            <div className="terminal-circle bg-yellow-500"></div>
            <div className="terminal-circle bg-green-500"></div>
            <span className="ml-4 text-xs text-gray-400">portfolio.sh</span>
          </div>
          
          <div className="terminal-content">
            <CommandPrompt command="whoami">
              <div className="space-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16 border-2 border-terminal-cyan">
                    <AvatarImage src="/placeholder.svg" alt="Profile Picture" />
                    <AvatarFallback className="bg-terminal-gray text-terminal-green">DEV</AvatarFallback>
                  </Avatar>
                  <TerminalEffect 
                    text="Security Engineer | Cloud Architect | Problem Solver" 
                    className="text-xl md:text-3xl font-bold text-terminal-cyan block"
                    speed={30}
                    onComplete={() => setShowIntro(true)}
                  />
                </div>
                
                {showIntro && (
                  <CommandPrompt output>
                    <TerminalEffect 
                      text="I design and implement secure, scalable cloud systems with a focus on security architecture. With 5+ years of experience at Microsoft and Palo Alto Networks, I specialize in cloud security products that protect enterprise infrastructure against evolving threats."
                      className="text-gray-300 leading-relaxed"
                      startDelay={500}
                      speed={10}
                      onComplete={handleIntroComplete}
                    />
                  </CommandPrompt>
                )}
                
                {showSkills && (
                  <CommandPrompt command="ls -la ./skills">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-4">
                      {["Cloud Security", "Distributed Systems", "Security Architecture", "API Design", "System Design", "AWS/Azure", "Docker", "Kubernetes"].map((skill, index) => (
                        <div 
                          key={skill}
                          className="bg-terminal-gray/50 border border-terminal-gray rounded px-3 py-1 text-terminal-green"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                    <TerminalEffect 
                      text="With 5+ years of experience building secure cloud infrastructure and security products."
                      className="text-terminal-yellow block mt-4"
                      startDelay={800}
                      speed={20}
                      onComplete={handleSkillsComplete}
                    />
                  </CommandPrompt>
                )}

                {showCTA && (
                  <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      size="lg"
                      className="bg-terminal-green text-black hover:bg-terminal-green/90"
                    >
                      Explore Projects
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan/10"
                    >
                      Contact Me
                    </Button>
                  </div>
                )}
              </div>
            </CommandPrompt>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#projects" 
            className="flex flex-col items-center text-terminal-cyan hover:text-terminal-cyan/80 transition-colors"
          >
            <span className="text-sm mb-2">View my work</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
