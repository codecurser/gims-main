import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lab.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern biotechnology laboratory" 
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/96 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-primary/20">
            <FlaskConical className="text-primary" size={20} />
            <span className="text-sm font-semibold text-primary tracking-wide">Pioneering Biotech Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
            Where Ideas
            <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2">
              Transform into Impact
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-sans">
            GIMS Bioincubator nurtures breakthrough biotechnology startups with world-class facilities, 
            expert mentorship, and a collaborative ecosystem that turns scientific excellence into real-world solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/facilities">
              <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all text-base px-8">
                Explore Our Facilities
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/collaborate">
              <Button size="lg" variant="outline" className="text-base px-8 border-2 hover:bg-muted/50">
                Collaborate Now
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50">
            <div className="animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Startups Supported</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">₹10Cr+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Funding Raised</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Patents Filed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
