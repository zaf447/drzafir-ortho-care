import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";

const FloatingActionButtons = () => {
  const handleBookAppointment = () => {
    window.open("https://booking.nmc.ae/en-ae/doctor/orthopaedics/dubai/zafir-shehravi", "_blank");
  };

  const handleGoogleReview = () => {
    window.open("https://g.page/r/CSBtdsCzLwTQEAE/review", "_blank");
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-[100] flex flex-row gap-3 justify-center px-4 pointer-events-none">
      <Button
        size="lg"
        className="shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 py-3 pointer-events-auto"
        onClick={handleBookAppointment}
      >
        <Calendar className="h-5 w-5 mr-2" />
        Book
      </Button>
      <Button
        size="lg"
        className="shadow-2xl bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-3 pointer-events-auto"
        onClick={handleGoogleReview}
      >
        <Star className="h-5 w-5 mr-2" />
        Review
      </Button>
    </div>
  );
};

export default FloatingActionButtons;
