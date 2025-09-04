import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Instagram, Facebook, MessageCircle, ExternalLink, Mail, Copy, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SocialMediaSection = () => {
  const { toast } = useToast();
  
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

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/971505415721", "_blank");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("zafir.shehravi@nmc.ae");
    toast({
      title: "Email Copied",
      description: "Dr. Zafir's email has been copied to clipboard",
    });
  };

  const handleDirectCall = () => {
    window.open("tel:042339976", "_self");
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
              
              {/* WhatsApp Section */}
              <div className="mt-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full bg-green-50 hover:bg-green-100 border-green-200 hover:border-green-300 transition-all duration-300 h-16"
                    >
                      <MessageCircle className="h-6 w-6 mr-3 text-green-600" />
                      <span className="text-gray-700 font-medium">WhatsApp Dr. Zafir</span>
                      <ExternalLink className="h-4 w-4 ml-2 text-gray-500" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-primary">WhatsApp Dr. Zafir</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong>Important Notice:</strong><br />
                          • Only for personal queries<br />
                          • Reply within 24 hours<br />
                          • No calling allowed<br />
                          • Investigation reports, images or medical reports will NOT be shared on WhatsApp<br />
                          • No appointments can be booked on WhatsApp
                        </p>
                      </div>
                      <Button 
                        onClick={handleWhatsAppClick}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Continue to WhatsApp
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Direct Email Section */}
              <div className="mt-6">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 bg-blue-50 hover:bg-blue-100 border-blue-200 hover:border-blue-300 transition-all duration-300 h-16"
                    onClick={() => window.open("mailto:zafir.shehravi@nmc.ae", "_self")}
                  >
                    <Mail className="h-6 w-6 mr-3 text-blue-600" />
                    <span className="text-gray-700 font-medium">Email Dr. Zafir Directly</span>
                    <ExternalLink className="h-4 w-4 ml-2 text-gray-500" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-blue-50 hover:bg-blue-100 border-blue-200 hover:border-blue-300 transition-all duration-300 h-16 px-4"
                    onClick={handleCopyEmail}
                  >
                    <Copy className="h-4 w-4 text-blue-600" />
                  </Button>
                </div>
              </div>

              {/* Direct Office Call */}
              <div className="mt-6">
                <div className="text-center mb-3">
                  <p className="text-sm text-muted-foreground">No appointment - for general queries</p>
                </div>
                <Button
                  onClick={handleDirectCall}
                  variant="outline"
                  size="lg"
                  className="w-full bg-green-50 hover:bg-green-100 border-green-200 hover:border-green-300 transition-all duration-300 h-16"
                >
                  <Phone className="h-6 w-6 mr-3 text-green-600" />
                  <span className="text-gray-700 font-medium">Call Office Directly: 04-2339976</span>
                </Button>
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