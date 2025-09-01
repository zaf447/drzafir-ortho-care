import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Shield } from "lucide-react";

const IntroductionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-medical">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Meet Dr. Zafir
                </h2>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Badge variant="secondary" className="text-primary">
                    17+ Years Experience
                  </Badge>
                  <Badge variant="secondary" className="text-primary">
                    Regenerative Medicine
                  </Badge>
                  <Badge variant="secondary" className="text-primary">
                    Patient-First Approach
                  </Badge>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-center mb-10">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Meet Dr. Zafir, a leading Orthopedic Surgeon with over 17 years of experience in treating a wide range of musculoskeletal and joint conditions. Known for his patient-first approach and precision in care, Dr. Zafir specializes in both traditional orthopedic surgery and cutting-edge regenerative treatments including Platelet-Rich Plasma (PRP) and Cell Therapy for joint, tendon, and ligament healing.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Whether you're recovering from an accident, managing chronic joint pain, or dealing with a sports injury, Dr. Zafir provides comprehensive orthopedic solutions — from non-surgical therapies to advanced surgical procedures.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary">17+ Years Expertise</h3>
                  <p className="text-sm text-muted-foreground">Extensive experience in orthopedic surgery and regenerative medicine</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary">Patient-First Care</h3>
                  <p className="text-sm text-muted-foreground">Personalized treatment plans tailored to each patient's needs</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary">Advanced Treatments</h3>
                  <p className="text-sm text-muted-foreground">Traditional surgery combined with innovative regenerative therapies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;