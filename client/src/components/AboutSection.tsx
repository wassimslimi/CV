import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";

export default function AboutSection() {
  return (
    <section id="about" className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center">
        <User className="h-6 w-6 mr-2 text-primary" />
        À Propos
      </h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-foreground/90 leading-relaxed">
            {resumeData.about}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
