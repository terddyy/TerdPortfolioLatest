import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const BeyondCodingSection = () => {
  return (
    <Card className="shadow-sm min-h-[16.2rem]">
      <CardHeader className="py-4 px-5">
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-primary" />
          <span className="text-foreground">Beyond Coding</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            
            <div>
              
              <p className="text-sm text-muted-foreground">
              In my free time, I enjoy turning ideas into real products and exploring new technologies that drive innovation.
                <br />
                <br />
                I'm always learning and building, focused on solving problems and creating meaningful solutions.
              </p>

              
            </div>
          </div>
        </div>
        
        
      </CardContent>
    </Card>
  );
};