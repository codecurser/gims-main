import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Stethoscope, Brain, Shield, Activity, TrendingUp } from "lucide-react";
import startupEcosystemBanner from "@/assets/startup-ecosystem-banner.jpg";
import proudMomentBanner from "@/assets/proud-moment-banner.png";

const Startups = () => {
  const startups = [
    {
      name: "MATRI",
      sector: "Women's Health",
      achievement: "Wearable menstrual pain relief technology - Featured on Shark Tank India",
      funding: "Incubated 2024",
      color: "bg-primary/10 text-primary",
      icon: Heart,
      patients: "5K+"
    },
    {
      name: "HealthTech Innovation",
      sector: "Medical Devices",
      achievement: "Affordable diagnostic devices for rural healthcare",
      funding: "Seed Stage",
      color: "bg-secondary/10 text-secondary",
      icon: Stethoscope,
      patients: "10K+"
    },
    {
      name: "AI Diagnostics Pro",
      sector: "AI Healthcare",
      achievement: "AI-powered disease detection and prediction platform",
      funding: "Early Stage",
      color: "bg-accent/10 text-accent",
      icon: Brain,
      patients: "3K+"
    },
    {
      name: "MedTech Solutions",
      sector: "Surgery Tech",
      achievement: "Innovative surgical instruments for minimally invasive procedures",
      funding: "Pre-Seed",
      color: "bg-primary/10 text-primary",
      icon: Shield,
      patients: "2K+"
    },
    {
      name: "TeleCare India",
      sector: "Telemedicine",
      achievement: "Connecting rural patients with specialist doctors remotely",
      funding: "Seed Stage",
      color: "bg-secondary/10 text-secondary",
      icon: Activity,
      patients: "15K+"
    },
    {
      name: "BioPharma Innovate",
      sector: "Pharmaceuticals",
      achievement: "Developing affordable biosimilars for chronic diseases",
      funding: "Early Stage",
      color: "bg-accent/10 text-accent",
      icon: Stethoscope,
      patients: "1K+"
    }
  ];

  const stats = [
    { icon: Heart, value: "10+", label: "Startups Incubated" },
    { icon: TrendingUp, value: "100+", label: "Startup Clinics Conducted" },
    { icon: Shield, value: "630+", label: "Bed Hospital Access" },
    { icon: Activity, value: "15,000+", label: "sq ft Incubation Space" }
  ];

  return (
    <section id="startups" className="py-16 bg-gradient-section relative overflow-hidden">
      {/* Medical-themed background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="w-20 h-0.5 bg-gradient-hero mx-auto mb-2"></div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase">Startup Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight text-center">
            Our Proud Moment
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            Startups nurtured at GIMS CMI are shaping India's future. From MATRI's Shark Tank showcase to 
            breakthrough innovations in affordable healthcare - success is measured in lives touched and challenges overcome.
          </p>
        </div>

        {/* Proud Moment Banner */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 animate-fade-in border border-border/40 max-w-6xl mx-auto">
          <img 
            src={proudMomentBanner} 
            alt="GIMS CMI Proud Moment - Startup Success" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 animate-scale-in hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <stat.icon className="text-primary-foreground" size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Enhanced Medical Startup Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {startups.map((startup, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Medical-themed background accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-hero opacity-5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <startup.icon className="text-primary-foreground" size={22} />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 tracking-tight text-center">{startup.name}</h3>
                
                <div className="flex justify-center gap-2 mb-4">
                  <Badge className={`${startup.color} text-xs font-semibold px-3 py-1`}>{startup.sector}</Badge>
                  <Badge variant="outline" className="font-semibold border-2 text-xs px-3 py-1">{startup.funding}</Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-center">{startup.achievement}</p>
                
                <div className="flex items-center justify-center text-sm text-primary font-semibold group-hover:translate-x-1 transition-transform mb-3">
                  <Heart size={16} className="mr-2" />
                  {startup.patients} Patients
                </div>
                
                <div className="flex items-center justify-center text-xs text-muted-foreground">
                  <TrendingUp size={14} className="mr-2" />
                  Growing rapidly
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Startup Ecosystem Banner */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mt-16 animate-fade-in border border-border/40 max-w-7xl mx-auto">
          <img 
            src={startupEcosystemBanner} 
            alt="GIMS CMI Startup Ecosystem" 
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Startups;
