import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Calendar, Trophy, ExternalLink } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { ContactModal } from "@/components/ui/contact-modal";

export const ProfileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" as const }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const handleJPCSClick = () => {
    window.open('https://philippinecomputersociety.org/jpcs-2/', '_blank');
  };

  return (
    <>
      <motion.div 
        className="flex flex-col sm:flex-row gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side - Avatar */}
        <motion.div 
          className="flex-shrink-0"
          variants={avatarVariants}
        >
          <Avatar className="w-32 h-32 md:w-36 md:h-36 rounded-lg">
            <AvatarImage 
              src="/image/profile.png" 
              alt="Profile" 
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
            <AvatarFallback 
              className="text-xl font-bold bg-primary text-primary-foreground rounded-lg"
              style={{ opacity: imageLoaded ? 0 : 1 }}
            >
              TI
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Right side - Info */}
        <motion.div 
          className="flex-1 min-w-0"
          variants={itemVariants}
        >
          <div className="flex items-start justify-between gap-4 mb-1">
            <div className="min-w-0 flex-1">
              <motion.div 
                className="flex flex-wrap items-center gap-2 mb-1"
                variants={itemVariants}
              >
                <h1 className="text-xl md:text-2xl font-bold text-foreground truncate">
                  Terd Imogen Inocentes
                </h1>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20 text-xs flex-shrink-0">
                  ✓ Verified
                </Badge>
              </motion.div>
              <motion.div 
                className="flex items-center gap-1 text-muted-foreground text-sm mb-2"
                variants={itemVariants}
              >
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">Manila, Philippines</span>
              </motion.div>
              <motion.p 
                className="text-base text-muted-foreground mb-4 line-clamp-2"
                variants={itemVariants}
              >
                BSCS Student & Full-Stack Developer
              </motion.p>
            </div>
            <motion.div variants={itemVariants}>
              <ModeToggle />
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-wrap items-center gap-2"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs"
                onClick={() => setIsModalOpen(true)}
              >
                <Mail className="w-3 h-3 mr-1" />
                Send Email
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20"
                onClick={handleJPCSClick}
              >
                <Trophy className="w-3 h-3 mr-1" />
                JPCS Member
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};