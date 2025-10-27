import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Award, ArrowRight, Star } from "lucide-react";

const Startups = () => {
  const portfolioCompanies = [
    {
      name: "MedInnovate Solutions",
      description: "AI-powered diagnostic tools for early disease detection and prevention",
      stage: "Incubation",
      funding: "₹2.5Cr",
      employees: "8",
      founded: "2023",
      logo: "MI"
    },
    {
      name: "CareConnect Technologies",
      description: "Telemedicine platform connecting rural patients with urban specialists",
      stage: "Incubation",
      funding: "₹1.8Cr",
      employees: "12",
      founded: "2023",
      logo: "CC"
    },
    {
      name: "HealthTrack Devices",
      description: "Wearable medical devices for chronic disease management",
      stage: "Early Stage",
      funding: "₹95L",
      employees: "6",
      founded: "2024",
      logo: "HT"
    },
    {
      name: "SmartTherapy Systems",
      description: "IoT-enabled rehabilitation equipment with remote monitoring",
      stage: "Incubation",
      funding: "₹1.5Cr",
      employees: "10",
      founded: "2023",
      logo: "ST"
    },
    {
      name: "RapidLab Diagnostics",
      description: "Point-of-care diagnostic devices for faster disease detection",
      stage: "Early Stage",
      funding: "₹80L",
      employees: "5",
      founded: "2024",
      logo: "RL"
    },
    {
      name: "MedSupply Chain",
      description: "Blockchain-based solution for pharmaceutical supply chain transparency",
      stage: "Incubation",
      funding: "₹2.2Cr",
      employees: "9",
      founded: "2023",
      logo: "MS"
    }
  ];

  const successMetrics = [
    { label: "Incubated Startups", value: "12+", icon: TrendingUp },
    { label: "Total Funding Raised", value: "₹10Cr+", icon: DollarSign },
    { label: "Jobs Created", value: "60+", icon: Users },
    { label: "IPs Filed", value: "25+", icon: Award }
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
              Building Tomorrow's Medical Innovators
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Discover the innovative startups we're incubating and the groundbreaking healthcare technologies 
              they're developing to transform patient care and medical innovation.
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
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Portfolio Companies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the innovative startups that are shaping the future of medical innovation
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
      <section className="py-12 bg-background">
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
                <CardTitle className="text-xl font-serif">MedInnovate Solutions</CardTitle>
                <CardDescription className="text-primary font-medium">Incubation Success</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground leading-relaxed mb-4">
                  "GIMS Startup Clinic provided us with invaluable clinical insights from experienced doctors. 
                  Their mentorship and access to hospital infrastructure helped us refine our AI diagnostic platform and prepare for clinical trials."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">RP</span>
                  </div>
                  <div>
                    <div className="font-semibold">Dr. Rajesh Patel</div>
                    <div className="text-sm text-muted-foreground">Founder & CEO, MedInnovate Solutions</div>
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
                <CardTitle className="text-xl font-serif">CareConnect Technologies</CardTitle>
                <CardDescription className="text-primary font-medium">Healthcare Impact</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground leading-relaxed mb-4">
                  "Being part of GIMS Startup Clinic gave us direct access to clinical validation and patient feedback. 
                  We've connected thousands of rural patients with specialists through our telemedicine platform."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">SK</span>
                  </div>
                  <div>
                    <div className="font-semibold">Dr. Sunita Kumar</div>
                    <div className="text-sm text-muted-foreground">Co-Founder, CareConnect Technologies</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Our Focus Areas</h2>
              <p className="text-xl text-muted-foreground">
                We incubate startups that are transforming healthcare through innovative medical technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold mb-4">Medical Focus Areas</h3>
                <div className="space-y-3">
                  {[
                    "Telemedicine & Remote Care",
                    "AI-Powered Diagnostics",
                    "Medical Devices",
                    "Point-of-Care Testing",
                    "Chronic Disease Management",
                    "Rural Healthcare Solutions"
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
                    "AI/ML in Healthcare",
                    "IoT Medical Devices",
                    "Blockchain for Health Data",
                    "Wearable Health Tech",
                    "Clinical Decision Support",
                    "Healthcare ERP Systems"
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

      {/* Startup Clinic Application Form */}
      <section id="startup-clinic-form" className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Join the Clinic
              </Badge>
              <h2 className="text-4xl font-serif font-bold mb-4">Apply to GIMS Startup Clinic</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Ready to revolutionize healthcare? Submit your application to join our innovative startup clinic 
                and gain access to clinical expertise, facilities, and mentorship from experienced medical professionals.
              </p>
              
              <Button 
                size="lg" 
                className="shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScIWoJw21Vh8tV9PgUsggHwTk4clkoJcfrmOYlM3sp0nBTReg/viewform', '_blank')}
              >
                Open Application Form
                <ArrowRight className="w-5 h-5 ml-2" />
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
