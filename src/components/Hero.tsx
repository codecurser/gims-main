import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lab.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern biotechnology laboratory" 
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Centered Professional Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Professional Badge */}
          <div className="inline-flex items-center space-x-3 bg-primary/10 backdrop-blur-md px-6 py-3 rounded-full mb-12 border border-primary/20 shadow-lg">
            <FlaskConical className="text-primary" size={22} />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Pioneering Biotech Innovation</span>
          </div>
          
          {/* Main Headline - Centered and Professional */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-foreground mb-8 leading-[0.9] tracking-tight text-center">
            Where Ideas
            <span className="block bg-gradient-hero bg-clip-text text-transparent mt-4">
              Transform into Impact
            </span>
          </h1>
          
          {/* Professional Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto font-sans text-center">
            GIMS Bioincubator nurtures breakthrough biotechnology startups with world-class facilities, 
            expert mentorship, and a collaborative ecosystem that turns scientific excellence into real-world solutions.
          </p>
          
          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/facilities">
              <Button size="lg" className="group shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-6 bg-gradient-hero hover:scale-105">
                Explore Our Facilities
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={22} />
              </Button>
            </Link>
            <Link to="/collaborate">
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:bg-muted/50 hover:scale-105 transition-all">
                Collaborate Now
              </Button>
            </Link>
          </div>

          {/* Professional Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-scale-in bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:scale-105">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">50+</div>
              <div className="text-lg text-muted-foreground font-medium">Startups Supported</div>
            </div>
            <div className="animate-scale-in bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-secondary/30 transition-all hover:scale-105" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-3">₹10Cr+</div>
              <div className="text-lg text-muted-foreground font-medium">Funding Raised</div>
            </div>
            <div className="animate-scale-in bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:scale-105" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl md:text-6xl font-bold text-accent mb-3">15+</div>
              <div className="text-lg text-muted-foreground font-medium">Patents Filed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
