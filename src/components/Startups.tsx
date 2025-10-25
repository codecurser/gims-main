import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Award, Users2 } from "lucide-react";

const Startups = () => {
  const startups = [
    {
      name: "BioGenix Solutions",
      sector: "Diagnostics",
      achievement: "Developed rapid COVID-19 testing kit",
      funding: "Series A",
      color: "bg-primary/10 text-primary"
    },
    {
      name: "AgriTech Innovations",
      sector: "Agriculture",
      achievement: "Biofortified crops for nutrition",
      funding: "Seed",
      color: "bg-secondary/10 text-secondary"
    },
    {
      name: "MediCare Therapeutics",
      sector: "Pharmaceuticals",
      achievement: "Novel cancer treatment in trials",
      funding: "Series B",
      color: "bg-accent/10 text-accent"
    },
    {
      name: "EcoGen Systems",
      sector: "Environment",
      achievement: "Bioremediation technology",
      funding: "Angel",
      color: "bg-secondary/10 text-secondary"
    }
  ];

  const stats = [
    { icon: Building2, value: "50+", label: "Active Startups" },
    { icon: TrendingUp, value: "85%", label: "Success Rate" },
    { icon: Award, value: "15+", label: "Awards Won" },
    { icon: Users2, value: "200+", label: "Jobs Created" }
  ];

  return (
    <section id="startups" className="py-32 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-8 tracking-tight text-center">
            Our Innovation Portfolio
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Meet the pioneering companies we're proud to support. Each one is transforming their 
            sector through innovative biotechnology solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-10 text-center bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 animate-scale-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <stat.icon className="text-primary-foreground" size={32} />
              </div>
              <div className="text-5xl font-bold text-foreground mb-3">{stat.value}</div>
              <div className="text-lg font-medium text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Startup Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {startups.map((startup, index) => (
            <Card 
              key={index}
              className="p-12 bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 tracking-tight text-center">{startup.name}</h3>
                <div className="flex justify-center gap-3 mb-6">
                  <Badge className={`${startup.color} text-sm font-semibold px-4 py-2`}>{startup.sector}</Badge>
                  <Badge variant="outline" className="font-semibold border-2 text-sm px-4 py-2">{startup.funding}</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg text-center">{startup.achievement}</p>
              <div className="flex items-center justify-center text-lg text-primary font-semibold group-hover:translate-x-1 transition-transform">
                <TrendingUp size={20} className="mr-3" />
                Growing rapidly
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Startups;
