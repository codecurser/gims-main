import { Card } from "@/components/ui/card";
import { Heart, Users, Lightbulb, Shield, Stethoscope, Activity } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Innovation",
      description: "Every breakthrough we support is designed with one goal: improving patient outcomes and quality of life through cutting-edge medical technology."
    },
    {
      icon: Stethoscope,
      title: "Clinical Excellence",
      description: "We partner with medical professionals and researchers to ensure our startups develop solutions that meet the highest clinical standards and regulatory requirements."
    },
    {
      icon: Users,
      title: "Healthcare Community",
      description: "Building bridges between hospitals, medical professionals, researchers, and entrepreneurs to create a collaborative ecosystem that accelerates medical innovation."
    },
    {
      icon: Shield,
      title: "Medical Safety First",
      description: "Patient safety is paramount. We ensure all medical technologies undergo rigorous testing and validation before reaching healthcare providers and patients."
    },
    {
      icon: Lightbulb,
      title: "Breakthrough Research",
      description: "Supporting groundbreaking medical research that addresses critical healthcare challenges, from chronic diseases to emergency care innovations."
    },
    {
      icon: Activity,
      title: "Healthcare Impact",
      description: "Measuring success not just by business metrics, but by the positive impact on healthcare delivery, patient care, and medical outcomes."
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-section relative overflow-hidden">
      {/* Medical Professional Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)),transparent_50%)]"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-24 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-20 h-0.5 bg-gradient-hero mx-auto mb-4"></div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase">Our Healthcare Mission</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-8 tracking-tight text-center">
            Transforming Healthcare Through Innovation
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            At GIMS Medical Innovation Hub, we're dedicated to accelerating healthcare startups that are 
            revolutionizing patient care, medical diagnostics, and treatment outcomes through cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="group p-10 bg-gradient-card border border-border/40 hover:border-primary/25 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in-up text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Medical-themed Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-hero rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl mx-auto">
                  <value.icon className="text-primary-foreground" size={36} />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 tracking-tight text-center">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base text-center">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
