import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "John Alfe",
    role: "Web Development Associate at StraightArrow Corporation",
    content: "Terd is an incredibly skilled developer who brought both the E-Konsulta web page and a School Community Platform to life with precision and creativity. His work is not only functional but also intuitive and user-friendly. I've seen firsthand how dedicated and detail-oriented he is in every project. Terd's talent speaks through the quality of their platforms—simply impressive.",
    avatar: "JA"
  }
];

export const RecommendationsSection = () => {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="py-4 px-5">
        <CardTitle className="flex items-center gap-2">
          <Quote className="w-5 h-5 text-primary" />
          <span className="text-foreground">Testimonials</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 space-y-6">
        {testimonials.map((rec, index) => (
          <div key={index} className="space-y-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-warning text-warning" />
              ))}
            </div>
            <blockquote className="text-muted-foreground italic">
              "{rec.content}"
            </blockquote>
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder.svg" alt={rec.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  {rec.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{rec.name}</p>
                <p className="text-sm text-muted-foreground">{rec.role}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};