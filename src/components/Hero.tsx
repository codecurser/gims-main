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
        <div className="absolute inset-0 bg-gradient-to-br from-background/97 via-background/94 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      {/* Minimalist Professional Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Minimalist Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/8 backdrop-blur-lg px-5 py-2 rounded-full mb-16 border border-primary/15 shadow-sm">
            <FlaskConical className="text-primary" size={18} />
            <span className="text-xs font-medium text-primary tracking-wider uppercase">Innovation Hub</span>
          </div>
          
          {/* Concise Main Headline */}
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-serif font-bold text-foreground mb-12 leading-[0.8] tracking-tight text-center">
            Transform
            <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2">
              Ideas
            </span>
          </h1>
          
          {/* Minimal Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed max-w-2xl mx-auto font-sans text-center">
            Where scientific excellence meets entrepreneurial vision
          </p>
          
          {/* Refined CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Link to="/facilities">
              <Button size="lg" className="group shadow-2xl hover:shadow-3xl transition-all duration-500 text-base px-12 py-4 bg-gradient-hero hover:scale-105 border border-primary/20">
                Explore
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Button>
            </Link>
            <Link to="/collaborate">
              <Button size="lg" variant="outline" className="text-base px-12 py-4 border-2 hover:bg-muted/30 hover:scale-105 transition-all duration-500 backdrop-blur-sm">
                Connect
              </Button>
            </Link>
          </div>

          {/* Elegant Stats Grid */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="animate-scale-in bg-card/30 backdrop-blur-md p-6 rounded-xl border border-border/30 hover:border-primary/20 transition-all duration-500 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground font-medium">Startups</div>
            </div>
            <div className="animate-scale-in bg-card/30 backdrop-blur-md p-6 rounded-xl border border-border/30 hover:border-secondary/20 transition-all duration-500 hover:scale-105" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">₹10Cr+</div>
              <div className="text-sm text-muted-foreground font-medium">Funding</div>
            </div>
            <div className="animate-scale-in bg-card/30 backdrop-blur-md p-6 rounded-xl border border-border/30 hover:border-accent/20 transition-all duration-500 hover:scale-105" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Patents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
