import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullScreenModal } from "@/components/ui/FullScreenModal";

const techStacks = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  backend: ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
  devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
};

export const TechStackSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="shadow-sm w-full">
        <CardHeader className="py-4 px-5">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-foreground">Tech Stack</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5">
          <div className="flex flex-wrap gap-2 mb-4">
            {techStacks.frontend.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {techStacks.backend.slice(0, 2).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            <Badge variant="outline" className="text-xs">
              +{Object.values(techStacks).flat().length - 5} more
            </Badge>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs"
            onClick={() => setIsModalOpen(true)}
          >
            View All
            <ChevronRight className="w-3 h-3 ml-1" />
          </Button>
        </CardContent>
      </Card>

      {/* Modal for all tech stack */}
      <FullScreenModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-6">
          <h2 className="text-xl font-bold mb-6">Complete Tech Stack</h2>
          
          {/* Frontend */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-lg">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {techStacks.frontend.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-lg">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {techStacks.backend.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-lg">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              {techStacks.devops.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};