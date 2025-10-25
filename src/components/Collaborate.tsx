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
    <section id="collaborate" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're a visionary entrepreneur, accomplished researcher, industry leader, or investor, 
              GIMS Bioincubator offers unique opportunities to collaborate and create meaningful impact in biotechnology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our doors are open to those who share our passion for innovation and commitment to advancing 
              life sciences for the benefit of society.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg animate-scale-in">
            <img 
              src={collaborationImage} 
              alt="Collaborative workspace fostering innovation and partnerships" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <opportunity.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{opportunity.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {opportunity.description}
              </p>
              <Button variant="outline" size="sm" className="group/btn">
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
