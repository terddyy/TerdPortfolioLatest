import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export const AboutSection = () => {
  return (
    <Card className="shadow-sm w-full">
      <CardHeader className="py-4 px-5">
        <CardTitle className="flex items-center gap-2 text-base">
          <User className="w-4 h-10 text-primary" />
          <span className="text-foreground">About</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 space-y-4 text-sm text-muted-foreground break-words">
        <p>
        I'm a full-stack software engineer skilled in the MERN stack, JavaScript, and PHP. I build custom tools, websites, and apps that solve real business problems—covering everything from SEO to digital marketing.
        </p>
        
        <p>
        I founded a gaming community of 4,000+ members and have a background in Computer Science and IT support. My focus is on building efficient, high-impact systems that help teams and businesses grow.
        </p>

        <p>
        Outside of work, I’m constantly upskilling. Lately, I’ve been diving into AI to boost productivity and build smarter, more innovative solutions.
        </p>
      </CardContent>
    </Card>
  );
};