
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TerminalEffectProps {
  text: string;
  speed?: number;
  className?: string;
  startDelay?: number;
  showCursor?: boolean;
  onComplete?: () => void;
}

const TerminalEffect = ({
  text,
  speed = 50,
  className,
  startDelay = 0,
  showCursor = true,
  onComplete,
}: TerminalEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (!started) {
      timeout = setTimeout(() => {
        setStarted(true);
      }, startDelay);
      return () => clearTimeout(timeout);
    }

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    } else if (onComplete) {
      onComplete();
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, started, startDelay, onComplete]);

  return (
    <span 
      className={cn(className, showCursor && currentIndex < text.length ? "cursor-effect" : "")}
    >
      {displayText}
    </span>
  );
};

export default TerminalEffect;
