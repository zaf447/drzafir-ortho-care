import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star, Calendar, MessageCircle } from "lucide-react";

const AppointmentReviewSection = () => {
  const handleBookAppointment = () => {
    window.open("https://bit.ly/drzafir", "_blank");
  };

  const handleGoogleReview = () => {
    window.open("https://g.page/r/CSBtdsCzLwTQEAE/review", "_blank");
  };

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Book your appointment today or share your experience to help others
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Book Appointment Card */}
            <Card className="shadow-medical">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">Book Your Appointment</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Schedule your consultation with Dr. Zafir for personalized orthopedic care
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent"
                  onClick={handleBookAppointment}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Book an Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Google Review Card */}
            <Card className="shadow-medical">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Share Your Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Help others choose better care by sharing your experience with Dr. Zafir
                </p>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleGoogleReview}
                >
                  <Star className="mr-2 h-5 w-5" />
                  Leave a Google Review
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Text */}
          <div className="text-center mt-8">
            <p className="text-lg font-medium text-primary">
              Share your experience and help others choose better care.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Floating Buttons */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden flex flex-col gap-2">
        <Button
          size="lg"
          className="shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-4 py-3"
          onClick={handleBookAppointment}
        >
          <Calendar className="h-4 w-4 mr-2" />
          Book
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="shadow-lg bg-white hover:bg-gray-50 text-primary border-primary rounded-full px-4 py-3"
          onClick={handleGoogleReview}
        >
          <Star className="h-4 w-4 mr-2" />
          Review
        </Button>
      </div>
    </section>
  );
};

export default AppointmentReviewSection;