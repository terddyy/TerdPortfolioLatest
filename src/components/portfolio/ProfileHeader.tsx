import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Calendar, Trophy } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { ContactModal } from "@/components/ui/contact-modal";

export const ProfileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Left side - Avatar */}
        <div className="flex-shrink-0">
          <Avatar className="w-32 h-32 md:w-36 md:h-36 rounded-lg">
            <AvatarImage src="/image/profile.png" alt="Profile" />
            <AvatarFallback className="text-xl font-bold bg-primary text-primary-foreground rounded-lg">
              TI
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Right side - Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-1">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-xl md:text-2xl font-bold text-foreground truncate">
                  Terd Imogen Inocentes
                </h1>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20 text-xs flex-shrink-0">
                  ✓ Verified
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">Manila, Philippines</span>
              </div>
              <p className="text-base text-muted-foreground mb-4 line-clamp-2">
                BSCS Student & Full-Stack Developer
              </p>
            </div>
            <ModeToggle />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* <Button variant="default" size="sm" className="text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              Schedule a Call
            </Button> */}
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs"
              onClick={() => setIsModalOpen(true)}
            >
              <Mail className="w-3 h-3 mr-1" />
              Send Email
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20">
              <Trophy className="w-3 h-3 mr-1" />
              JPCS Member
            </Button>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};