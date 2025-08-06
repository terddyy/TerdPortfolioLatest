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
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-background hover:bg-accent text-foreground border-border hover:border-border/80"
              onClick={() => setIsModalOpen(true)}
            >
              View All
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Modal for all tech stack categories */}
      <FullScreenModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">My Tech Stack</h2>
          
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Frontend</h3>
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
            <h3 className="text-lg font-semibold mb-3 text-foreground">Backend</h3>
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
            <h3 className="text-lg font-semibold mb-3 text-foreground">DevOps & Cloud</h3>
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