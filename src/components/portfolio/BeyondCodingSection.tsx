import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const BeyondCodingSection = () => {
  return (
    <Card className="shadow-sm min-h-[23.1rem]">
      <CardHeader className="py-4 px-5">
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-primary" />
          <span className="text-foreground">Beyond Coding</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-foreground">Knowledge Sharing</h3>
              <p className="text-sm text-muted-foreground">
              I actively share what I learn—whether it’s building with AI, creating mobile apps, or navigating developer life. Through content creation and community involvement, I aim to help fellow devs level up while growing alongside them.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">AI & Automation</Badge>
          <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">Mobile Development</Badge>
          <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">Fitness</Badge>
        </div>
      </CardContent>
    </Card>
  );
};