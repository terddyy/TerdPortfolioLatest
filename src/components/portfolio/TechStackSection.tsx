import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullScreenModal } from "@/components/ui/FullScreenModal";

const techStacks = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  backend: ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
  devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "GitLab CLI", "Oracle Cloud", "AWS Networking", "Azure Networking", "Aviatrix", "Aviatrix Multicloud"],
  ai: ["Torch", "Tensors", "TensorFlow", "Caffe2", "PyTorch", "Theano", "Oracle Generative AI"]
};

export const TechStackSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="shadow-sm w-full">
        <CardHeader className="py-4 px-5">
          <CardTitle className="flex items-center justify-between text-lg">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-foreground">Tech Stack</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary/80 text-xs"
              onClick={() => setIsModalOpen(true)}
            >
              View All
              <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5 space-y-6">
          {/* Frontend */}
          <div>
            <h3 className="font-medium text-foreground mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {techStacks.frontend.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-medium text-foreground mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {techStacks.backend.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div>
            <h3 className="font-medium text-foreground mb-2">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              {techStacks.devops.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fullscreen Modal */}
      <FullScreenModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="min-h-screen bg-background p-6 md:p-8 font-inter">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary"
                onClick={() => setIsModalOpen(false)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Tech Stack</h1>
          </div>

          {/* Content */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Frontend */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Frontend</h2>
              <div className="flex flex-wrap gap-3">
                {techStacks.frontend.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Backend</h2>
              <div className="flex flex-wrap gap-3">
                {techStacks.backend.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">DevOps & Cloud</h2>
              <div className="flex flex-wrap gap-3">
                {techStacks.devops.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">AI & Machine Learning</h2>
              <div className="flex flex-wrap gap-3">
                {techStacks.ai.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};