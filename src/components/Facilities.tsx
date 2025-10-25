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
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            World-Class Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground">
            Access cutting-edge facilities designed to support every stage of your biotech journey, 
            from early research to commercial production.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-lg animate-scale-in">
          <img 
            src={facilityImage} 
            alt="State-of-the-art biotechnology laboratory facility" 
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Facility Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-glow transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <facility.icon className="text-primary-foreground" size={24} />
              </div>
              <Badge variant="secondary" className="mb-3">{facility.badge}</Badge>
              <h3 className="text-xl font-bold text-foreground mb-3">{facility.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{facility.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
