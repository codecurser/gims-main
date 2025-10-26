import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, Stethoscope, Heart, Brain, Shield, Activity } from "lucide-react";
import facilityImage from "@/assets/facility-lab.jpg";
import collaborationImage from "@/assets/collaboration.jpg";
import innovationImage from "@/assets/innovation-bg.jpg";

const Facilities = () => {
  const facilities = [
    {
      icon: Microscope,
      title: "Advanced Medical Research Labs",
      description: "State-of-the-art pathology, microbiology, and clinical research laboratories with cutting-edge diagnostic equipment and sterile environments.",
      badge: "Research Core",
      image: facilityImage
    },
    {
      icon: Stethoscope,
      title: "Clinical Testing Facilities",
      description: "Comprehensive clinical trial infrastructure with patient monitoring systems, data collection tools, and regulatory compliance support.",
      badge: "Clinical Trials",
      image: collaborationImage
    },
    {
      icon: Heart,
      title: "Cardiology Innovation Center",
      description: "Specialized cardiac care technology development lab with advanced imaging systems, monitoring devices, and treatment protocols.",
      badge: "Cardiology",
      image: innovationImage
    },
    {
      icon: Brain,
      title: "Neurology & AI Lab",
      description: "AI-powered diagnostic tools, brain imaging technology, and neurological treatment innovation center with machine learning capabilities.",
      badge: "AI Medicine",
      image: facilityImage
    },
    {
      icon: Shield,
      title: "Medical Device Testing",
      description: "FDA-compliant testing facilities for medical devices, surgical instruments, and patient safety equipment validation.",
      badge: "Device Testing",
      image: collaborationImage
    },
    {
      icon: Activity,
      title: "Telemedicine Innovation Hub",
      description: "Remote patient monitoring systems, virtual consultation platforms, and digital health solution development center.",
      badge: "Digital Health",
      image: innovationImage
    }
  ];

  return (
    <section id="facilities" className="py-32 bg-background relative overflow-hidden">
      {/* Medical Professional Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-hero rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary to-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-24 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-20 h-0.5 bg-gradient-hero mx-auto mb-4"></div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase">Medical Infrastructure</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-8 tracking-tight text-center">
            World-Class Medical Facilities
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            Access cutting-edge medical facilities designed to support every stage of healthcare innovation, 
            from research and development to clinical trials and commercialization.
          </p>
        </div>

        {/* Enhanced Photo Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto">
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

        {/* Featured Medical Technology Showcase */}
        <div className="rounded-3xl overflow-hidden shadow-2xl animate-scale-in border border-border/40 max-w-6xl mx-auto relative group">
          <img 
            src={facilityImage} 
            alt="State-of-the-art medical technology laboratory facility" 
            className="w-full h-[600px] md:h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-card/90 backdrop-blur-lg p-8 rounded-2xl border border-border/40">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Advanced Medical Research Center</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our flagship facility houses the latest in medical technology, from AI-powered diagnostic tools 
                to precision medicine research labs, all designed to accelerate healthcare innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">FDA Approved</Badge>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2">ISO Certified</Badge>
                <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">24/7 Support</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
