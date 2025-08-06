import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

export const ConnectSection = () => {
  return (
    <Card className="shadow-sm h-full">
      <CardHeader className="py-4 px-5">
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-primary" />
          <span className="text-foreground">Connect</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-1">Email</h3>
            <a
              href="mailto:terddy03@gmail.com"
              className="text-xs text-primary hover:text-primary/80 transition-colors"
            >
              terddy03@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-1">Let's Talk</h3>
            <Button className="w-full text-xs" size="sm">
              <Mail className="w-3 h-3 mr-1" />
              Schedule a Call
            </Button>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-1">Speaking Engagements</h3>
            <p className="text-xs text-muted-foreground mb-2">
              Available for speaking on events about software development and emerging technologies.
            </p>
            <Button variant="outline" size="sm" className="w-full text-xs">
              Get in touch
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};