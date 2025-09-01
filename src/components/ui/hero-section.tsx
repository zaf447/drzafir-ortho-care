import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  const handleBookAppointment = () => {
    window.open("https://bit.ly/drzafir", "_blank");
  };

  return (
    <section className="relative gradient-subtle min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Welcome to Dr. Zafir's Orthopedic Clinic
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Advanced Orthopedic & Regenerative Care | 17+ Years of Expertise
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 max-w-2xl">
                Leading Orthopedic Surgeon specializing in traditional surgery and cutting-edge regenerative treatments. Your trusted partner for comprehensive musculoskeletal care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent text-lg px-8 py-6"
                  onClick={handleBookAppointment}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>

          {/* Doctor Photo */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-2 shadow-medical bg-white max-w-md">
              <img 
                src="/lovable-uploads/a1175f87-7fa7-4381-8c7d-c649fdc97b57.png" 
                alt="Dr. Zafir - Orthopedic Surgeon"
                className="w-full h-auto rounded-lg object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;