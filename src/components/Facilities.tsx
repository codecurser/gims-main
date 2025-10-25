import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, FlaskRound, Cpu, BookOpen } from "lucide-react";
import facilityImage from "@/assets/facility-lab.jpg";

const Facilities = () => {
  const facilities = [
    {
      icon: Microscope,
      title: "Advanced Research Labs",
      description: "State-of-the-art molecular biology, microbiology, and biochemistry laboratories equipped with cutting-edge instruments.",
      badge: "Core Facility"
    },
    {
      icon: FlaskRound,
      title: "Bioprocessing Units",
      description: "Pilot-scale bioreactors and downstream processing equipment for developing and scaling biotech products.",
      badge: "Manufacturing"
    },
    {
      icon: Cpu,
      title: "Computational Biology",
      description: "High-performance computing infrastructure for genomics, proteomics, and bioinformatics research.",
      badge: "Analytics"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Comprehensive access to scientific journals, patents, regulatory guidelines, and industry databases.",
      badge: "Knowledge Hub"
    }
  ];

  return (
    <section id="facilities" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            World-Class Infrastructure
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Access cutting-edge facilities designed to support every stage of your biotech journey, 
            from early research to commercial production.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl animate-scale-in border border-border/50">
          <img 
            src={facilityImage} 
            alt="State-of-the-art biotechnology laboratory facility" 
            className="w-full h-[450px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Facility Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <facility.icon className="text-primary-foreground" size={26} />
              </div>
              <Badge variant="secondary" className="mb-4 font-semibold">{facility.badge}</Badge>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4 tracking-tight">{facility.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{facility.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
