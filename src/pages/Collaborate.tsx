import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Handshake, Users, Lightbulb, Target, ArrowRight, CheckCircle } from "lucide-react";

const Collaborate = () => {
  const partnershipTypes = [
    {
      title: "Research Collaborations",
      description: "Joint research projects with academic institutions and industry partners",
      icon: Lightbulb,
      benefits: [
        "Access to cutting-edge research facilities",
        "Shared intellectual property opportunities",
        "Joint publication and patent opportunities",
        "Cross-disciplinary expertise"
      ]
    },
    {
      title: "Industry Partnerships",
      description: "Strategic alliances with pharmaceutical and biotech companies",
      icon: Handshake,
      benefits: [
        "Technology transfer opportunities",
        "Co-development agreements",
        "Market access and distribution",
        "Regulatory pathway support"
      ]
    },
    {
      title: "Academic Alliances",
      description: "Collaborations with universities and research institutions",
      icon: Users,
      benefits: [
        "Student internship programs",
        "Faculty exchange programs",
        "Joint research grants",
        "Technology commercialization"
      ]
    },
    {
      title: "Government Initiatives",
      description: "Partnerships with government agencies and public institutions",
      icon: Target,
      benefits: [
        "Public funding opportunities",
        "Regulatory guidance and support",
        "Policy development input",
        "Public health initiatives"
      ]
    }
  ];

  const currentPartners = [
    { name: "AIIMS Delhi", logo: "AIIMS", type: "Academic" },
    { name: "Fortis Healthcare", logo: "FH", type: "Industry" },
    { name: "Government of UP", logo: "UP", type: "Government" },
    { name: "PGI Chandigarh", logo: "PGI", type: "Academic" },
    { name: "Apollo Hospitals", logo: "AH", type: "Industry" },
    { name: "CSIR", logo: "CSIR", type: "Government" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Partnership Opportunities
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Collaborate for Innovation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Join forces with GIMS Startup Clinic to accelerate medical innovation and 
              bring transformative healthcare technologies to patients faster than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to collaborate and drive innovation together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <partnership.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-serif">{partnership.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {partnership.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-6 group-hover:bg-primary/10 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                  <span className="text-lg font-bold text-primary">{partner.logo}</span>
                </div>
                <h3 className="font-semibold text-sm mb-1">{partner.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {partner.type}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">How We Collaborate</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to building successful partnerships
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Initial Discussion</h3>
                <p className="text-sm text-muted-foreground">
                  We explore your goals and identify collaboration opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Proposal Development</h3>
                <p className="text-sm text-muted-foreground">
                  We create a detailed collaboration proposal tailored to your needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Agreement & Launch</h3>
                <p className="text-sm text-muted-foreground">
                  We finalize terms and launch the collaboration with clear milestones
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                <p className="text-sm text-muted-foreground">
                  We provide continuous support and evaluate progress regularly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Collaboration Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from our strategic partnerships
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">AIIMS</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-serif">AIIMS Delhi Collaboration</CardTitle>
                    <CardDescription className="text-primary font-medium">Academic Partnership</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Our collaboration with GIMS Startup Clinic has enabled joint clinical research and mentorship programs. 
                  The access to real patient data and clinical expertise has been invaluable for validating our healthcare innovations."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Prof. Dr. Rajesh Verma</div>
                    <div className="text-sm text-muted-foreground">Head of Innovation, AIIMS Delhi</div>
                  </div>
                  <Badge variant="secondary">2 Years Partnership</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">FH</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-serif">Fortis Healthcare Alliance</CardTitle>
                    <CardDescription className="text-primary font-medium">Industry Partnership</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "The partnership with GIMS Startup Clinic has allowed us to pilot innovative medical devices and 
                  digital health solutions in our network. Their incubated startups have provided cutting-edge solutions."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Dr. Ashish Gupta</div>
                    <div className="text-sm text-muted-foreground">Chief Innovation Officer, Fortis Healthcare</div>
                  </div>
                  <Badge variant="secondary">1.5 Years Partnership</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how we can work together to accelerate medical innovation and bring 
              breakthrough healthcare solutions to patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all">
                Start a Partnership
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all">
                Download Partnership Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collaborate;
