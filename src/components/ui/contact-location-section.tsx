import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";

const ContactLocationSection = () => {
  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/bCeUWLfv5QUmN2jT7", "_blank");
  };

  const handlePhoneCall = () => {
    // Phone number would be added here when available
    window.open("tel:+971XXXXXXXXX", "_self");
  };

  const handleWhatsApp = () => {
    // WhatsApp number would be added here when available
    window.open("https://wa.me/971XXXXXXXXX", "_blank");
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-lg text-muted-foreground">
              Conveniently located in Dubai, easily accessible by metro
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <MapPin className="h-5 w-5 mr-2 text-accent" />
                    Clinic Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80">
                    NMC Medical Center<br />
                    M Floor, Al Safia Building<br />
                    Salahuddin Road, Near Abu Hail Metro Station<br />
                    Deira, P.O.Box: 7832<br />
                    Dubai, United Arab Emirates
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={handleLocationClick}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open in Google Maps
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Clock className="h-5 w-5 mr-2 text-accent" />
                    Opening Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-foreground/80">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>By Appointment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Phone className="h-5 w-5 mr-2 text-accent" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <Button 
                      variant="outline" 
                      className="justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={handlePhoneCall}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Clinic
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Embed */}
            <div>
              <Card className="shadow-medical h-full">
                <CardContent className="p-0 h-full min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7943796087835!2d55.32744641497423!3d25.268739133844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4349b1b33c0d%3A0xd0f02b30c7b06bd1!2sAbu%20Hail%20Metro%20Station!5e0!3m2!1sen!2sae!4v1639567890123!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="min-h-[500px] rounded-lg"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocationSection;