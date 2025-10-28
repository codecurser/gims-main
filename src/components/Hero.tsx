import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Stethoscope, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lab.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Medical Professional Background with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern medical technology laboratory" 
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/92 to-background/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        {/* Medical-themed overlay pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>

      {/* Medical Professional Content */}
      <div className="container mx-auto px-6 relative z-10 pt-28">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Medical Innovation Badge */}
          <div className="inline-flex items-center space-x-3 bg-primary/10 backdrop-blur-lg px-6 py-3 rounded-full mb-16 border border-primary/20 shadow-lg">
            <Heart className="text-primary animate-pulse" size={20} />
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">Medical Innovation Hub</span>
          </div>
          
          {/* Medical-Focused Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-foreground mb-12 leading-[0.85] tracking-tight text-center">
            Healthcare
            <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2 animate-gradient">
              Innovation
            </span>
          </h1>
          
          {/* Medical Mission Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto font-sans text-center">
            India's first public hospital-based medical incubator - bridging clinical excellence and entrepreneurial spirit
          </p>
          
          {/* Medical CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link to="/facilities">
              <Button size="lg" className="group shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg px-14 py-5 bg-gradient-hero hover:scale-105 border border-primary/20 hover:border-primary/40">
                Explore Facilities
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Button>
            </Link>
            <Link to="/collaborate">
              <Button size="lg" variant="outline" className="text-lg px-14 py-5 border-2 hover:bg-muted/30 hover:scale-105 transition-all duration-500 backdrop-blur-sm hover:border-primary/40">
                Join Our Network
              </Button>
            </Link>
          </div>

          {/* Medical Stats Grid with Enhanced Animations */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-scale-in bg-card/40 backdrop-blur-md p-8 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="text-white" size={28} />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">15K+</div>
              <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">sq ft Incubation Space</div>
            </div>
            <div className="animate-scale-in bg-card/40 backdrop-blur-md p-8 rounded-2xl border border-border/30 hover:border-secondary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl group" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={28} />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-3">630+</div>
              <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Bed Hospital Access</div>
            </div>
            <div className="animate-scale-in bg-card/40 backdrop-blur-md p-8 rounded-2xl border border-border/30 hover:border-accent/30 transition-all duration-500 hover:scale-105 hover:shadow-xl group" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-white" size={28} />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-accent mb-3">10+</div>
              <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Startups Incubated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
