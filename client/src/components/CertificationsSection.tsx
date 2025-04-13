import { Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";

function CertificationCard({ name }: { name: string }) {
  return (
    <div className="flex items-center p-3 border border-gray-100 rounded-md shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="bg-primary/10 p-2 rounded-md mr-3">
        <CheckCircle className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="font-medium text-foreground">{name}</h3>
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center">
        <Award className="h-6 w-6 mr-2 text-primary" />
        Certifications
      </h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.certifications.map((certification, index) => (
              <CertificationCard key={index} name={certification} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
