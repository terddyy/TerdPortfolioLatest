import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullScreenModal } from "@/components/ui/FullScreenModal";

const techStacks = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  backend: ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
  devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
};

export const TechStackSection = () => {
  const [openCategory, setOpenCategory] = useState<null | 'frontend' | 'backend' | 'devops'>(null);
  return (
    <>
      <Card className="shadow-sm w-full">
        <CardHeader className="py-4 px-5">
          <CardTitle className="flex items-center gap-2 text-lg"> {/* Change text-lg to adjust Tech Stack title size */}
            <Code className="w-4 h-4 text-primary" />
            <span className="text-foreground">Tech Stack</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5 space-y-6 break-words">
          {/* Frontend */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-foreground">Frontend</h3>
              {techStacks.frontend.length > 5 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 text-xs"
                  onClick={() => setOpenCategory('frontend')}
                >
                  View All
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {techStacks.frontend.slice(0, 5).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          {/* Backend */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-foreground">Backend</h3>
              {techStacks.backend.length > 5 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 text-xs"
                  onClick={() => setOpenCategory('backend')}
                >
                  View All
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {techStacks.backend.slice(0, 5).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          {/* DevOps & Cloud */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-foreground">DevOps & Cloud</h3>
              {techStacks.devops.length > 5 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 text-xs"
                  onClick={() => setOpenCategory('devops')}
                >
                  View All
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {techStacks.devops.slice(0, 5).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Modal for each category */}
      <FullScreenModal open={openCategory === 'frontend'} onClose={() => setOpenCategory(null)}>
        <h2 className="text-xl font-bold mb-4">All Frontend Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {techStacks.frontend.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </FullScreenModal>
      <FullScreenModal open={openCategory === 'backend'} onClose={() => setOpenCategory(null)}>
        <h2 className="text-xl font-bold mb-4">All Backend Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {techStacks.backend.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </FullScreenModal>
      <FullScreenModal open={openCategory === 'devops'} onClose={() => setOpenCategory(null)}>
        <h2 className="text-xl font-bold mb-4">All DevOps & Cloud Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {techStacks.devops.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </FullScreenModal>
    </>
  );
};