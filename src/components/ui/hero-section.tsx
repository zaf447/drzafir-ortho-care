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
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open("https://drzafir-guide.lovable.app/", "_blank")}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Click for Exercises
                </Button>
                
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6"
                  onClick={() => window.location.href = "/connect"}
                >
                  Connect with Dr Zafir
                </Button>
              </div>
            </div>
          </div>

          {/* Doctor Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-medical bg-white p-2">
              <img 
                src="/lovable-uploads/bb68b6af-5294-4454-babe-c52866d1c0dd.png" 
                alt="Dr. Zafir - Orthopedic Surgeon"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;