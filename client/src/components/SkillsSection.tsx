import { Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/data/resumeData";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="font-heading text-lg font-medium text-foreground mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center">
        <Settings className="h-6 w-6 mr-2 text-primary" />
        Compétences Techniques
      </h2>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <SkillCategory title="Langages" skills={skills.languages} />
            <SkillCategory title="Cloud Providers" skills={skills.cloudProviders} />
            <SkillCategory title="Frameworks" skills={skills.frameworks} />
            <SkillCategory title="Librairies" skills={skills.libraries} />
            <SkillCategory title="Base de données" skills={skills.databases} />
            <SkillCategory title="Infrastructure" skills={skills.infrastructure} />
            <SkillCategory title="Versioning de code" skills={skills.versioning} />
            <SkillCategory title="Methodologies" skills={skills.methodologies} />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
