import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

function ExperienceCard({ title, company, location, period, responsibilities }: ExperienceProps) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-foreground/80">{company}</p>
          </div>
          <div className="text-foreground/60 text-sm mt-2 md:mt-0 md:text-right whitespace-nowrap">
            <p>{period}</p>
            <p>{location}</p>
          </div>
        </div>
        <ul className="list-disc list-outside ml-5 text-foreground/80 space-y-1.5">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center">
        <Briefcase className="h-6 w-6 mr-2 text-primary" />
        Expérience Professionnelle
      </h2>
      <div className="space-y-6">
        {resumeData.experiences.map((experience, index) => (
          <ExperienceCard 
            key={index}
            title={experience.title}
            company={experience.company}
            location={experience.location}
            period={experience.period}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </section>
  );
}
