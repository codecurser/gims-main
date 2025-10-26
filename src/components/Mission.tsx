import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To accelerate biotechnology innovation by providing entrepreneurs with the resources, expertise, and community they need to transform groundbreaking research into impactful solutions."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We champion bold ideas and cutting-edge research, creating an environment where scientific curiosity meets entrepreneurial ambition."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Success in biotech requires partnership. We foster a vibrant community where knowledge sharing and collaboration drive collective growth."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Impact",
      description: "We're committed to supporting ventures that create lasting positive change in healthcare, agriculture, and environmental sustainability."
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-section relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-16 h-0.5 bg-gradient-hero mx-auto mb-4"></div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase">Our Foundation</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-8 tracking-tight text-center">
            Empowering the Next Generation of Biotech Leaders
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            At GIMS Bioincubator, we believe that the future of biotechnology is built on 
            collaboration, innovation, and unwavering support for visionary entrepreneurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="group p-12 bg-gradient-card border border-border/40 hover:border-primary/25 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 animate-fade-in-up text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Subtle Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-hero rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl mx-auto">
                  <value.icon className="text-primary-foreground" size={36} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 tracking-tight text-center">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg text-center">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
