import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Activity, 
  Zap, 
  Bone, 
  Stethoscope,
  Search,
  RefreshCw
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Regenerative Orthopedic Treatments",
      items: [
        "PRP (Platelet-Rich Plasma) Injections",
        "Stem Cell & Biologic Therapies",
        "Cell-Based Treatment for Cartilage, Tendon & Joint Repair"
      ]
    },
    {
      icon: Heart,
      title: "Trauma & Fracture Management",
      items: [
        "Expert treatment of simple and complex fractures",
        "Surgical and non-surgical fracture care",
        "Post-traumatic joint and bone rehabilitation",
        "Emergency orthopedic trauma care"
      ]
    },
    {
      icon: Activity,
      title: "Sports Injury & Ligament Surgery",
      items: [
        "ACL (Anterior Cruciate Ligament) Reconstruction",
        "Meniscus Repair & Surgery",
        "Ligament Sprains and Tears – diagnosis and treatment",
        "Tendon Injuries and overuse syndromes",
        "Return-to-sport recovery planning"
      ]
    },
    {
      icon: Bone,
      title: "Joint & Bone Health",
      items: [
        "Arthritis management (Knee, Hip, Shoulder)",
        "Osteoarthritis and rheumatoid arthritis care",
        "Osteoporosis evaluation and treatment",
        "Joint injections (corticosteroid, hyaluronic acid, biologic)"
      ]
    },
    {
      icon: Stethoscope,
      title: "Spine & Back Care",
      items: [
        "Non-surgical treatment for disc problems, sciatica, and back pain",
        "Postural alignment and ergonomic consultation",
        "Spine injury assessments"
      ]
    },
    {
      icon: Zap,
      title: "Minimally Invasive Procedures",
      items: [
        "Ultrasound-guided joint injections",
        "Image-guided aspiration and therapies",
        "Daycare orthopedic procedures"
      ]
    },
    {
      icon: Search,
      title: "Diagnostic Services",
      items: [
        "In-clinic orthopedic evaluation",
        "Digital X-ray and Musculoskeletal Ultrasound",
        "Second opinions and customized treatment plans"
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            🩺 Specialized Orthopedic Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive orthopedic care combining traditional expertise with innovative regenerative treatments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-medical hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg font-semibold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-foreground/80 flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;