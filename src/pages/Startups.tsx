import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Award, ArrowRight, Star } from "lucide-react";

const Startups = () => {
  const portfolioCompanies = [
    {
      name: "NeuroTech Solutions",
      description: "Developing AI-powered diagnostic tools for neurological disorders",
      stage: "Series A",
      funding: "$15M",
      employees: "25",
      founded: "2022",
      logo: "NT"
    },
    {
      name: "BioCell Innovations",
      description: "Revolutionary stem cell therapies for regenerative medicine",
      stage: "Seed",
      funding: "$8M",
      employees: "18",
      founded: "2023",
      logo: "BC"
    },
    {
      name: "GeneFlow Therapeutics",
      description: "Next-generation gene editing technologies for rare diseases",
      stage: "Series B",
      funding: "$32M",
      employees: "45",
      founded: "2021",
      logo: "GF"
    },
    {
      name: "MediSense Labs",
      description: "Wearable biosensors for continuous health monitoring",
      stage: "Pre-Seed",
      funding: "$3M",
      employees: "12",
      founded: "2024",
      logo: "MS"
    },
    {
      name: "PharmaAI",
      description: "Machine learning platform for drug discovery optimization",
      stage: "Series A",
      funding: "$22M",
      employees: "35",
      founded: "2022",
      logo: "PA"
    },
    {
      name: "Cellular Dynamics",
      description: "Advanced cell culture systems for personalized medicine",
      stage: "Seed",
      funding: "$12M",
      employees: "28",
      founded: "2023",
      logo: "CD"
    }
  ];

  const successMetrics = [
    { label: "Portfolio Companies", value: "50+", icon: TrendingUp },
    { label: "Total Funding Raised", value: "$500M+", icon: DollarSign },
    { label: "Jobs Created", value: "800+", icon: Users },
    { label: "Patents Filed", value: "150+", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Our Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Building Tomorrow's Biotech Leaders
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Discover the innovative startups we're nurturing and the groundbreaking technologies 
              they're developing to transform healthcare and biotechnology.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Portfolio Companies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the innovative startups that are shaping the future of biotechnology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCompanies.map((company, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{company.logo}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {company.stage}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                    {company.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {company.description}
                  </CardDescription>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Funding</div>
                      <div className="font-semibold text-foreground">{company.funding}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Team Size</div>
                      <div className="font-semibold text-foreground">{company.employees}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Founded</div>
                      <div className="font-semibold text-foreground">{company.founded}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Stage</div>
                      <div className="font-semibold text-foreground">{company.stage}</div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-full mt-4 group-hover:bg-primary/10 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from our portfolio companies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle className="text-xl font-serif">NeuroTech Solutions</CardTitle>
                <CardDescription className="text-primary font-medium">Series A Success</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground leading-relaxed mb-4">
                  "GIMS Bioincubator provided us with the perfect environment to develop our AI diagnostic platform. 
                  Their facilities, mentorship, and network connections were instrumental in securing our Series A funding."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">JS</span>
                  </div>
                  <div>
                    <div className="font-semibold">Dr. Jane Smith</div>
                    <div className="text-sm text-muted-foreground">CEO, NeuroTech Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle className="text-xl font-serif">BioCell Innovations</CardTitle>
                <CardDescription className="text-primary font-medium">Breakthrough Discovery</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground leading-relaxed mb-4">
                  "The collaborative environment at GIMS Bioincubator accelerated our research timeline by 40%. 
                  We achieved our first clinical trial milestone six months ahead of schedule."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">MJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Dr. Michael Johnson</div>
                    <div className="text-sm text-muted-foreground">CTO, BioCell Innovations</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Our Investment Focus</h2>
              <p className="text-xl text-muted-foreground">
                We invest in companies that are transforming healthcare through innovative biotechnology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold mb-4">Therapeutic Areas</h3>
                <div className="space-y-3">
                  {[
                    "Oncology & Immunotherapy",
                    "Neurological Disorders",
                    "Rare & Genetic Diseases",
                    "Regenerative Medicine",
                    "Infectious Diseases",
                    "Cardiovascular Health"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold mb-4">Technology Platforms</h3>
                <div className="space-y-3">
                  {[
                    "Gene & Cell Therapy",
                    "AI/ML in Drug Discovery",
                    "Biomarker Development",
                    "Diagnostic Technologies",
                    "Drug Delivery Systems",
                    "Synthetic Biology"
                  ].map((platform, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Join Our Portfolio?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              If you're building the next breakthrough in biotechnology, we want to hear from you. 
              Let's discuss how we can accelerate your journey to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all">
                Apply for Investment
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all">
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Startups;
