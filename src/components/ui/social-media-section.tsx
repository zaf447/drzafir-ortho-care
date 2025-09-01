import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react";

const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/drzafirorthopedic?igsh=MW5ldHBsNGp0dm5neA==",
      color: "text-pink-600",
      bgColor: "bg-pink-50 hover:bg-pink-100"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1E71X5cbih/",
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-medical">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl text-primary mb-4">
                Connect With Dr. Zafir
              </CardTitle>
              <p className="text-muted-foreground">
                Follow us on social media for health tips, patient stories, and clinic updates
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className={`${social.bgColor} border-gray-200 hover:border-gray-300 transition-all duration-300 h-16`}
                    onClick={() => handleSocialClick(social.url)}
                  >
                    <social.icon className={`h-6 w-6 mr-3 ${social.color}`} />
                    <span className="text-gray-700 font-medium">{social.name}</span>
                    <ExternalLink className="h-4 w-4 ml-2 text-gray-500" />
                  </Button>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Stay updated with the latest in orthopedic care and wellness tips
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;