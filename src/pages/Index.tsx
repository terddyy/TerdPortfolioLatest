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
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-full md:max-w-[896px] mx-auto p-4 md:p-6">
        {/* Profile Header */}
        <div className="mb-4 md:mb-6">
          <ProfileHeader />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-2">
          {/* About: Large card, top left */}
          <div className="md:col-span-8 md:row-span-2">
            <AboutSection />
          </div>
          
          {/* Career: Tall card, top right */}
          <div className="md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-4">
            <CareerSection />
          </div>
          
          {/* Tech Stack: Wide card below About */}
          <div className="md:col-span-8 md:row-span-1">
            <TechStackSection />
          </div>
          
          {/* Beyond Coding: Thinner card */}
          <div className="md:col-span-4 md:row-span-1">
            <BeyondCodingSection />
          </div>
          
          {/* Certifications: Wider card */}
          <div className="md:col-span-8 md:row-span-1">
            <CertificationsSection />
          </div>
          
          {/* Projects and Blog container */}
          <div className="md:col-span-8 space-y-4 md:space-y-2">
            <ProjectsSection />
            <BlogSection />
          </div>
          
          {/* Connect: Small card */}
          <div className="md:col-span-4">
            <ConnectSection />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 md:mt-8 text-center text-sm text-muted-foreground border-t border-border pt-6">
          © 2025 Terd Imogen Inocentes. All rights reserved.
          <span className="mx-4">•</span>
          <button className="hover:text-primary transition-colors">Feedback</button>
        </footer>
      </div>
    </div>
  );
};

export default Index;
