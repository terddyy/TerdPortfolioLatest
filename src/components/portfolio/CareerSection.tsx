import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "FREELANCE WEB DEVELOPER",
    company: "Self-employed, Philippines",
    period: "2023 - Present",
    isActive: true
  },
  {
    title: "OUR LADY OF PERPETUAL SUCCOR COLLEGE",
    company: "Computer Science",
    period: "Aug 2024 - Jul 2027",
    isActive: false
  },
  {
    title: "OUR LADY OF FATIMA UNIVERSITY",
    company: "Computer Science",
    period: "Aug 2023 - Jul 2024",
    isActive: false
  }
];

export const CareerSection = () => {
  return (
    <Card className="shadow-sm w-full min-h-[38rem]">

      <CardHeader className="py-4 px-5">
        <CardTitle className="flex items-center gap-2 text-base">
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="text-foreground">Experience</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 pb-2">
            {/* Timeline dot */}
            <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 ${exp.isActive ? 'bg-primary border-primary' : 'bg-background border-muted-foreground/50'}`}></div>
            
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-1.5 top-4 w-px h-full -mb-2 bg-muted-foreground/30"></div>
            )}
            
            <div>
              <h3 className="font-medium text-foreground">{exp.title}</h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
              <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};