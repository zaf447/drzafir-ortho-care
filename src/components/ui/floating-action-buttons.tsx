import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Star, MessageCircle, X } from "lucide-react";

const FloatingActionButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleBookAppointment = () => {
    window.open("https://booking.nmc.ae/en-ae/doctor/orthopaedics/dubai/zafir-shehravi", "_blank");
  };

  const handleGoogleReview = () => {
    window.open("https://g.page/r/CSBtdsCzLwTQEAE/review", "_blank");
  };

  return (
    <>
      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-4 z-[101] w-[350px] h-[500px] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-between p-3 bg-primary text-primary-foreground">
            <span className="font-semibold">Ask Dr Zafir</span>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsChatOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <iframe
            src="https://askdrzafir.lovable.app"
            className="w-full h-[calc(100%-48px)] border-0"
            title="Ask Dr Zafir Chatbot"
          />
        </div>
      )}

      {/* Floating Buttons */}
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
        <Button
          size="lg"
          className="shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 pointer-events-auto"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          {isChatOpen ? "Close" : "Ask Dr Zafir"}
        </Button>
      </div>
    </>
  );
};

export default FloatingActionButtons;
