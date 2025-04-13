import { Mail, Linkedin, Phone } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import CertificationsSection from "./CertificationsSection";
import SkillsSection from "./SkillsSection";

export default function MainContent({ isMobile }: { isMobile: boolean }) {
  const { name, title, contacts } = resumeData;

  return (
    <main className="flex-1 lg:ml-72 xl:ml-80 p-6 lg:p-10">
      {/* Mobile Header */}
      {isMobile && (
        <div className="lg:hidden flex flex-col mb-8 pb-4 border-b border-gray-200">
          <h1 className="font-heading text-2xl font-bold text-foreground">{name}</h1>
          <p className="text-primary font-medium">{title}</p>
          <div className="flex flex-wrap gap-4 mt-3">
            <a href={`mailto:${contacts.email}`} className="text-sm text-foreground flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              Email
            </a>
            <a 
              href={contacts.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-foreground flex items-center"
            >
              <Linkedin className="h-4 w-4 mr-1" />
              LinkedIn
            </a>
            <span className="text-sm text-foreground flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              {contacts.phone}
            </span>
          </div>
        </div>
      )}
      
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <SkillsSection />
    </main>
  );
}
