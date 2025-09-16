import SocialMediaSection from "@/components/ui/social-media-section";

const Connect = () => {
  return (
    <div className="min-h-screen">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Connect with Dr. Zafir
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch through multiple channels for consultations, queries, and updates
            </p>
          </div>
        </div>
      </div>
      <SocialMediaSection />
    </div>
  );
};

export default Connect;