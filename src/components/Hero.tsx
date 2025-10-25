import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern biotechnology laboratory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <FlaskConical className="text-primary" size={20} />
            <span className="text-sm font-medium text-primary">Pioneering Biotech Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Where Ideas
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Transform into Impact
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            GIMS Bioincubator nurtures breakthrough biotechnology startups with world-class facilities, 
            expert mentorship, and a collaborative ecosystem that turns scientific excellence into real-world solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Explore Our Facilities
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline">
              Collaborate Now
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-border">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Startups Supported</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-secondary mb-1">₹10Cr+</div>
              <div className="text-sm text-muted-foreground">Funding Raised</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-accent mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Patents Filed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
