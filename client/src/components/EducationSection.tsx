import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";

export default function EducationSection() {
  const { education } = resumeData;

  return (
    <section id="education" className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center">
        <GraduationCap className="h-6 w-6 mr-2 text-primary" />
        Formation
      </h2>
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{education.institution}</h3>
              <p className="text-foreground/80">{education.degree}</p>
            </div>
            <div className="text-foreground/60 text-sm mt-2 md:mt-0 md:text-right whitespace-nowrap">
              <p>{education.period}</p>
              <p>{education.location}</p>
            </div>
          </div>
          <ul className="list-disc list-outside ml-5 text-foreground/80 space-y-1.5">
            {education.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
