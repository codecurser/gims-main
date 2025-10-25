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
    <section id="startups" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Innovation Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the pioneering companies we're proud to support. Each one is transforming their 
            sector through innovative biotechnology solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center bg-card hover:shadow-md transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="text-primary" size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Startup Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {startups.map((startup, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{startup.name}</h3>
                  <Badge className={startup.color}>{startup.sector}</Badge>
                </div>
                <Badge variant="outline">{startup.funding}</Badge>
              </div>
              <p className="text-muted-foreground mb-4">{startup.achievement}</p>
              <div className="flex items-center text-sm text-primary font-medium">
                <TrendingUp size={16} className="mr-2" />
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
