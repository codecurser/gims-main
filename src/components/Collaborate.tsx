import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Stethoscope, Building, Users, GraduationCap } from "lucide-react";
import collaborationImage from "@/assets/collaboration.jpg";

const Collaborate = () => {
  const opportunities = [
    {
      icon: Heart,
      title: "Medical Startup Founders",
      description: "Transform your healthcare innovation into a thriving business with our comprehensive medical incubation program.",
      cta: "Apply for Incubation"
    },
    {
      icon: Stethoscope,
      title: "Medical Professionals",
      description: "Partner with us to develop and commercialize your clinical innovations and medical device ideas.",
      cta: "Partner With Us"
    },
    {
      icon: Building,
      title: "Hospital Partners",
      description: "Collaborate with cutting-edge medical startups and leverage our ecosystem for healthcare innovation.",
      cta: "Explore Partnerships"
    },
    {
      icon: Users,
      title: "Healthcare Investors",
      description: "Discover promising medical ventures and be part of transformative healthcare breakthroughs.",
      cta: "View Portfolio"
    },
    {
      icon: GraduationCap,
      title: "Medical Researchers",
      description: "Access our facilities and collaborate with industry experts to bring your research to market.",
      cta: "Research Collaboration"
    },
    {
      icon: Heart,
      title: "Patient Advocates",
      description: "Help shape the future of healthcare by providing input on patient-centered medical innovations.",
      cta: "Join Our Network"
    }
  ];

  return (
    <section id="collaborate" className="py-32 bg-gradient-section relative overflow-hidden">
      {/* Medical-themed background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-20 h-0.5 bg-gradient-hero mb-4"></div>
              <span className="text-sm font-medium text-primary tracking-wider uppercase">Healthcare Collaboration</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">
              Let's Transform Healthcare Together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're a medical entrepreneur, healthcare professional, hospital administrator, researcher, 
              or investor, GIMS Medical Innovation Hub offers unique opportunities to collaborate and create 
              meaningful impact in healthcare.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Our doors are open to those who share our passion for medical innovation and commitment to 
              advancing patient care through cutting-edge technology.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl animate-scale-in border border-border/50 group">
            <img 
              src={collaborationImage} 
              alt="Medical professionals collaborating on healthcare innovation" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Medical-themed background accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-hero opacity-5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <opportunity.icon className="text-primary-foreground" size={26} />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4 tracking-tight">{opportunity.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {opportunity.description}
                </p>
                <Button variant="outline" size="sm" className="group/btn border-2 hover:bg-muted/50 font-semibold w-full">
                  {opportunity.cta}
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
