import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb, Heart, Stethoscope } from "lucide-react";

const Mission = () => {
  const visionGoals = {
    icon: Target,
    title: "Our Mission & Vision",
    description: "The GIMS Centre for Medical Innovation (CMI) is where clinical excellence meets visionary entrepreneurship. Located within the Government Institute of Medical Sciences, Greater Noida, CMI is India's first public hospital-based medical incubator. We bridge the critical gap between real-world clinical needs and transformative healthcare solutions.",
    goals: [
      {
        icon: Target,
        title: "Our Mission",
        description: "To empower healthcare innovators to translate ideas into validated solutions that revolutionize patient care."
      },
      {
        icon: Lightbulb,
        title: "Our Vision 2030",
        description: "To establish India's most trusted medical innovation ecosystem, propelling homegrown solutions to global impact."
      },
      {
        icon: Heart,
        title: "Affordable Healthcare",
        description: "Creating impactful, affordable healthcare solutions for India and beyond through indigenous innovation."
      },
      {
        icon: Stethoscope,
        title: "Clinical Excellence",
        description: "Embedding startups within a 630-bed hospital ecosystem to validate ideas and conduct clinical trials."
      }
    ]
  };

  return (
    <section id="about" className="relative w-full pb-16 pt-4 overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Animated Background Elements - Matched with ImageCarousel */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient overlay for consistency */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)),transparent_50%)]"></div>
        </div>
        
        {/* Enhanced animated circles with staggered timing */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Additional subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/10 pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-4 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Vision Section - Header with Enhanced Animations */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-block mb-4 animate-fade-in-down">
              <div className="w-20 h-0.5 bg-gradient-hero mx-auto mb-2"></div>
              <span className="text-sm font-medium text-primary tracking-wider uppercase">{visionGoals.title}</span>
            </div>
            
            {/* Title with gradient animation */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 tracking-tight animate-fade-in-up">
              Transforming Healthcare Through Innovation
            </h2>
            
            {/* Description with smooth fade */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                {visionGoals.description}
              </p>
            </div>
          </div>

          {/* Goals Grid - Professional Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {visionGoals.goals.map((goal, index) => (
              <Card
                key={index}
                className="group p-6 bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/40 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                {/* Enhanced Animated Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-[0.08] rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  {/* Icon with enhanced hover effect */}
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <goal.icon className="text-primary-foreground" size={24} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {goal.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {goal.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
