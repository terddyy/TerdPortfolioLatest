import { motion } from "framer-motion";
import { ProfileHeader } from "@/components/portfolio/ProfileHeader";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { CareerSection } from "@/components/portfolio/CareerSection";
import { TechStackSection } from "@/components/portfolio/TechStackSection";
import { BeyondCodingSection } from "@/components/portfolio/BeyondCodingSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { ConnectSection } from "@/components/portfolio/ConnectSection";
import { BlogSection } from "@/components/portfolio/BlogSection";

const Index = () => {
  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-background"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-full md:max-w-[896px] mx-auto p-4 md:p-6">
        {/* Profile Header */}
        <motion.div 
          className="mb-4 md:mb-6"
          variants={sectionVariants}
        >
          <ProfileHeader />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-2">
          {/* About: Large card, top left */}
          <motion.div 
            className="md:col-span-8 md:row-span-2"
            variants={sectionVariants}
          >
            <AboutSection />
          </motion.div>
          
          {/* Career: Tall card, top right */}
          <motion.div 
            className="md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-4"
            variants={sectionVariants}
          >
            <CareerSection />
          </motion.div>
          
          {/* Tech Stack: Wide card below About */}
          <motion.div 
            className="md:col-span-8 md:row-span-1"
            variants={sectionVariants}
          >
            <TechStackSection />
          </motion.div>
          
          {/* Beyond Coding: Thinner card */}
          <motion.div 
            className="md:col-span-4 md:row-span-1"
            variants={sectionVariants}
          >
            <BeyondCodingSection />
          </motion.div>
          
          {/* Projects */}
          <motion.div 
            className="md:col-span-8"
            variants={sectionVariants}
          >
            <ProjectsSection />
          </motion.div>

          {/* Certifications: Wider card (left of Blog / before Connect) */}
          <motion.div 
            className="md:col-span-8"
            variants={sectionVariants}
          >
            <CertificationsSection />
          </motion.div>

          {/* Connect: Small card (to the right of Certifications) */}
          <motion.div 
            className="md:col-span-4"
            variants={sectionVariants}
          >
            <ConnectSection />
          </motion.div>

          {/* Blog: Narrower card (right of Certifications) */}
          <motion.div 
            className="md:col-span-6"
            variants={sectionVariants}
          >
            <BlogSection />
          </motion.div>
           
        </div>

        {/* Footer */}
        <motion.footer 
          className="mt-6 md:mt-8 text-center text-sm text-muted-foreground border-t border-border pt-6"
          variants={footerVariants}
        >
          © 2025 Terd Imogen Inocentes. All rights reserved. 
          <br />
          Design inspired by Sir Bryl
          <span className="mx-4">•</span>
          <button className="hover:text-primary transition-colors">Feedback</button>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Index;
