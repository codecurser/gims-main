import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, Stethoscope, Heart, Brain, Shield, Activity, Building2 } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: Building2,
      title: "15,000 sq. ft. Incubator Space",
      description: "State-of-the-art incubation center with prototyping labs, clinical trial units, and modern co-working spaces for healthcare startups.",
      badge: "Infrastructure"
    },
    {
      icon: Stethoscope,
      title: "630-Bed NABH Hospital Access",
      description: "Clinical access to a fully functional NABH-accredited hospital providing real-world validation opportunities for healthcare innovations.",
      badge: "Clinical Access"
    },
    {
      icon: Heart,
      title: "Startup Clinics",
      description: "Direct doctor-entrepreneur collaboration through dedicated startup clinics enabling idea validation and clinical mentorship.",
      badge: "Mentorship"
    },
    {
      icon: Microscope,
      title: "Clinical Trial Units",
      description: "Dedicated facilities for conducting clinical trials with regulatory support and expert guidance for healthcare innovations.",
      badge: "Research"
    },
    {
      icon: Shield,
      title: "Strategic Partnerships",
      description: "Collaborations with Stanford Biodesign, BIRAC, IITs, and leading hospitals to support startup growth and validation.",
      badge: "Partnerships"
    },
    {
      icon: Activity,
      title: "Zero-Cost Incubation Support",
      description: "Comprehensive incubation support for early-stage healthcare ventures at zero cost, including mentorship and infrastructure.",
      badge: "Support"
    }
  ];

  return (
    <section id="facilities" className="py-16 bg-background relative overflow-hidden">
      {/* Medical Professional Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-hero rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary to-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="w-20 h-0.5 bg-gradient-hero mx-auto mb-2"></div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase">Medical Infrastructure</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight text-center">
            Our Facilities & Support
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            GIMS CMI provides comprehensive infrastructure and strategic support to nurture healthcare startups 
            from ideation to commercialization with clinical access and world-class facilities.
          </p>
        </div>

        {/* Enhanced Photo Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              className="group relative p-6 bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/60 hover:shadow-xl transition-all duration-500 animate-fade-in-up hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Top section with icon and badge */}
              <div className="relative flex items-start justify-between mb-5">
                {/* Icon */}
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <facility.icon className="text-white" size={28} strokeWidth={2.5} />
                  </div>
                </div>
                
                {/* Badge */}
                <Badge className="bg-primary/10 text-primary border-primary/30 text-xs px-3 py-1 font-semibold">
                  {facility.badge}
                </Badge>
              </div>
              
              {/* Content */}
              <div className="relative space-y-3">
                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {facility.description}
                </p>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
