import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FullScreenModal } from "@/components/ui/FullScreenModal";

const techStacks = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "Styled Components", "Vite", "Webpack", "ESLint", "Prettier"],
  backend: ["Node.js", "Python", "Java", "PHP", "Express.js", "NestJS", "FastAPI", "Spring Boot", "Laravel", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "OAuth", "JWT", "LDAP", "REST", "GraphQL", "gRPC", "AWS Lambda", "Firebase Functions"],
  devops: ["AWS", "GCP", "Azure", "GitHub Actions", "Jenkins", "GitLab CI", "Terraform", "AWS CloudFormation", "Docker", "Kubernetes", "Prometheus", "Grafana", "Datadog"],
  ai: ["TensorFlow", "PyTorch", "LangChain", "Transformers", "OpenAI", "Anthropic", "Mistral", "Hugging Face", "Llamaindex", "AutoGPT"],
  security: ["AWS IAM", "Azure AD", "Okta", "SAP CDC", "Auth0", "Cognito", "AES", "RSA", "SHA", "GDPR", "SOC 2", "ISO 27001"],
  cms: ["WordPress", "Strapi", "Bubble", "Webflow", "Microsoft Power Platform", "n8n"]
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
              {techStacks.frontend.slice(0, 8).map((tech) => (
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
              {techStacks.backend.slice(0, 8).map((tech) => (
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
              {techStacks.devops.slice(0, 8).map((tech) => (
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

            {/* Security & Identity */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Security & Identity</h2>
              <div className="flex flex-wrap gap-3">
                {techStacks.security.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CMS & No-Code */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">CMS & No-Code</h2>
              <div className="flex flex-wrap gap-3">
                {techStacks.cms.map((tech) => (
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