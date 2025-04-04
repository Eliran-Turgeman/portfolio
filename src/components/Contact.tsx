
import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import CommandPrompt from "./CommandPrompt";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store the message in Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);
      
      if (error) throw error;
      
      toast({
        title: "Message sent",
        description: "I'll get back to you as soon as possible.",
      });
      
      // Reset form data
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-terminal-black">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <CommandPrompt command="./contact.sh">
            <h2 className="text-2xl font-bold text-terminal-cyan mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 mb-4 max-w-3xl">
              Interested in working together? Have questions about my expertise or how I could help with your project?
              Let's connect.
            </p>
          </CommandPrompt>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="text-xs text-gray-400">contact_form.sh</span>
            </div>
            <div className="terminal-content">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-terminal-green text-sm">
                    Name:
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-terminal-gray border-terminal-gray focus:border-terminal-cyan"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-terminal-green text-sm">
                    Email:
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-terminal-gray border-terminal-gray focus:border-terminal-cyan"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-terminal-green text-sm">
                    Message:
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    className="bg-terminal-gray border-terminal-gray focus:border-terminal-cyan"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="bg-terminal-green text-black hover:bg-terminal-green/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <span className="text-xs text-gray-400">contact_info.json</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-terminal-yellow mr-3" />
                    <a href="mailto:eliran.turgeman.cs@gmail.com" className="text-gray-300 hover:text-terminal-cyan">
                      eliran.turgeman.cs@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Github className="text-terminal-purple mr-3" />
                    <a href="https://github.com/Eliran-Turgeman" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terminal-cyan">
                      github.com/Eliran-Turgeman
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="text-terminal-cyan mr-3" />
                    <a href="https://www.linkedin.com/in/eliran-turgeman/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terminal-cyan">
                      linkedin.com/in/eliran-turgeman
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="text-xs text-gray-400">availability.sh</span>
              </div>
              <div className="terminal-content">
                <CommandPrompt command="./check_availability.sh">
                  <div className="text-terminal-green">
                    {`> Currently available for:

● Freelance projects
● Technical consultation
● System architecture design
● Performance optimization
● Backend development`}
                  </div>
                </CommandPrompt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
