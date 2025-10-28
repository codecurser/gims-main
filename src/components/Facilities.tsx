import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, Stethoscope, Heart, Brain, Shield, Activity, Building2 } from "lucide-react";
import facilityImage from "@/assets/facility-lab.jpg";
import collaborationImage from "@/assets/collaboration.jpg";
import innovationImage from "@/assets/innovation-bg.jpg";

const Facilities = () => {
  const facilities = [
    {
      icon: Building2,
      title: "15,000 sq. ft. Incubator Space",
      description: "State-of-the-art incubation center with prototyping labs, clinical trial units, and modern co-working spaces for healthcare startups.",
      badge: "Infrastructure",
      image: facilityImage
    },
    {
      icon: Stethoscope,
      title: "630-Bed NABH Hospital Access",
      description: "Clinical access to a fully functional NABH-accredited hospital providing real-world validation opportunities for healthcare innovations.",
      badge: "Clinical Access",
      image: collaborationImage
    },
    {
      icon: Heart,
      title: "Startup Clinics",
      description: "Direct doctor-entrepreneur collaboration through dedicated startup clinics enabling idea validation and clinical mentorship.",
      badge: "Mentorship",
      image: innovationImage
    },
    {
      icon: Microscope,
      title: "Clinical Trial Units",
      description: "Dedicated facilities for conducting clinical trials with regulatory support and expert guidance for healthcare innovations.",
      badge: "Research",
      image: facilityImage
    },
    {
      icon: Shield,
      title: "Strategic Partnerships",
      description: "Collaborations with Stanford Biodesign, BIRAC, IITs, and leading hospitals to support startup growth and validation.",
      badge: "Partnerships",
      image: collaborationImage
    },
    {
      icon: Activity,
      title: "Zero-Cost Incubation Support",
      description: "Comprehensive incubation support for early-stage healthcare ventures at zero cost, including mentorship and infrastructure.",
      badge: "Support",
      image: innovationImage
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
              className="group p-0 bg-gradient-card border border-border/40 hover:border-primary/25 hover:shadow-2xl transition-all duration-700 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 font-semibold text-sm px-3 py-1">
                    {facility.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                    <facility.icon className="text-primary-foreground" size={24} />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 tracking-tight">{facility.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
