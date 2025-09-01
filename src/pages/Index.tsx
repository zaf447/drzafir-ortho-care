import HeroSection from "@/components/ui/hero-section";
import IntroductionSection from "@/components/ui/introduction-section";
import ServicesSection from "@/components/ui/services-section";
import TrustSection from "@/components/ui/trust-section";
import AppointmentReviewSection from "@/components/ui/appointment-review-section";
import SocialMediaSection from "@/components/ui/social-media-section";
import ContactLocationSection from "@/components/ui/contact-location-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <TrustSection />
      <AppointmentReviewSection />
      <SocialMediaSection />
      <ContactLocationSection />
    </div>
  );
};

export default Index;
