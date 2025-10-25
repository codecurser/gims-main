import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Handshake, GraduationCap, Building, Rocket } from "lucide-react";
import collaborationImage from "@/assets/collaboration.jpg";

const Collaborate = () => {
  const opportunities = [
    {
      icon: Rocket,
      title: "Startup Founders",
      description: "Turn your biotech innovation into a thriving business with our comprehensive incubation program.",
      cta: "Apply for Incubation"
    },
    {
      icon: GraduationCap,
      title: "Researchers",
      description: "Access our facilities and collaborate with industry experts to commercialize your research.",
      cta: "Partner With Us"
    },
    {
      icon: Building,
      title: "Industry Partners",
      description: "Connect with cutting-edge startups and leverage our ecosystem for innovation.",
      cta: "Explore Partnerships"
    },
    {
      icon: Handshake,
      title: "Investors",
      description: "Discover promising biotech ventures and be part of transformative scientific breakthroughs.",
      cta: "View Portfolio"
    }
  ];

  return (
    <section id="collaborate" className="py-32 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
              Let's Build the Future Together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're a visionary entrepreneur, accomplished researcher, industry leader, or investor, 
              GIMS Bioincubator offers unique opportunities to collaborate and create meaningful impact in biotechnology.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Our doors are open to those who share our passion for innovation and commitment to advancing 
              life sciences for the benefit of society.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl animate-scale-in border border-border/50">
            <img 
              src={collaborationImage} 
              alt="Collaborative workspace fostering innovation and partnerships" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <opportunity.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight">{opportunity.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {opportunity.description}
              </p>
              <Button variant="outline" size="sm" className="group/btn border-2 hover:bg-muted/50 font-semibold">
                {opportunity.cta}
                <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
