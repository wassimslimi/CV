import { Mail, Linkedin, Phone, User, Briefcase, GraduationCap, Award, Settings } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { Button } from "@/components/ui/button";

const NavItem = ({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) => (
  <li>
    <a 
      href={href} 
      className="flex items-center p-2 rounded-md hover:bg-secondary text-foreground hover:text-primary transition-all"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <Icon className="h-5 w-5 mr-3" />
      <span className="font-medium">{label}</span>
    </a>
  </li>
);

export default function Sidebar() {
  const { name, title, contacts } = resumeData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <aside className="bg-white lg:fixed lg:w-72 xl:w-80 lg:h-full shadow-lg z-10 print:hidden">
      <div className="p-6 h-full flex flex-col">
        <div className="flex-shrink-0 mb-8">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-1">{name}</h1>
          <p className="text-primary font-medium text-lg mb-4">{title}</p>
          
          <div className="space-y-2">
            <a href={`mailto:${contacts.email}`} className="flex items-center text-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              <span className="text-sm">{contacts.email}</span>
            </a>
            
            <a 
              href={contacts.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              <span className="text-sm">linkedin.com/in/wessim-slimi</span>
            </a>
            
            <div className="flex items-center text-foreground">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-sm">{contacts.phone}</span>
            </div>
          </div>
        </div>
        
        <nav className="flex-grow">
          <ul className="space-y-2">
            <NavItem icon={User} label="À Propos" href="#about" />
            <NavItem icon={Briefcase} label="Expérience" href="#experience" />
            <NavItem icon={GraduationCap} label="Formation" href="#education" />
            <NavItem icon={Award} label="Certifications" href="#certifications" />
            <NavItem icon={Settings} label="Compétences" href="#skills" />
          </ul>
        </nav>
        
        <div className="mt-6">
          <Button 
            className="w-full flex items-center justify-center" 
            onClick={handlePrint}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" 
              />
            </svg>
            Imprimer le CV
          </Button>
        </div>
      </div>
    </aside>
  );
}
