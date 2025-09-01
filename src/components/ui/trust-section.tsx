import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Award } from "lucide-react";

const TrustSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "17+ Years of Expertise",
      description: "Extensive experience in orthopedic surgery and regenerative medicine"
    },
    {
      icon: Shield,
      title: "Insurance Accepted",
      description: "Working with major insurance providers for your convenience"
    },
    {
      icon: Clock,
      title: "Emergency Trauma Care",
      description: "Available for urgent orthopedic trauma cases and injuries"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Quote Block */}
          <Card className="shadow-medical mb-12">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <div className="text-6xl text-accent/20 font-serif leading-none">"</div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-primary mb-6 italic">
                Healing starts with the right diagnosis and a tailored approach.
              </blockquote>
              <p className="text-lg text-muted-foreground">
                Trust Dr. Zafir to guide your recovery — whether it's a sports injury, fracture, or joint condition, you're in experienced hands.
              </p>
            </CardContent>
          </Card>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-medical hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Status Badges */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="border-accent text-accent px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                🕘 Appointments Open
              </Badge>
              <Badge variant="outline" className="border-accent text-accent px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Insurance Accepted
              </Badge>
              <Badge variant="outline" className="border-accent text-accent px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Emergency Trauma Cases Welcome
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;