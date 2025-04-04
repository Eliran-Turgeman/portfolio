
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CommandPromptProps {
  children: ReactNode;
  className?: string;
  command?: string;
  output?: boolean;
}

const CommandPrompt = ({ 
  children, 
  className, 
  command, 
  output = false 
}: CommandPromptProps) => {
  return (
    <div className={cn("mb-4", className)}>
      {!output && command && (
        <div className="flex items-center mb-1">
          <span className="text-terminal-green mr-2">$</span>
          <span className="text-terminal-cyan">{command}</span>
        </div>
      )}
      <div className={cn(
        "pl-4", 
        output ? "border-l-2 border-terminal-gray" : ""
      )}>
        {children}
      </div>
    </div>
  );
};

export default CommandPrompt;
