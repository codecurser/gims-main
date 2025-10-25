import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Users, Briefcase, GraduationCap, DollarSign, ArrowRight } from "lucide-react";

const JoinUs = () => {
  const membershipTypes = [
    {
      title: "Startup Membership",
      description: "Perfect for early-stage biotech companies",
      price: "Starting at $2,500/month",
      icon: Briefcase,
      features: [
        "Access to core laboratory facilities",
        "Shared office space",
        "Basic mentorship program",
        "Networking events",
        "Legal and IP consultation",
        "Investor pitch preparation"
      ],
      popular: false
    },
    {
      title: "Premium Membership",
      description: "Comprehensive support for growing companies",
      price: "Starting at $5,000/month",
      icon: Users,
      features: [
        "Full facility access 24/7",
        "Private office space",
        "Dedicated mentorship team",
        "Priority investor connections",
        "Regulatory guidance",
        "Marketing and PR support",
        "Clinical trial planning"
      ],
      popular: true
    },
    {
      title: "Enterprise Partnership",
      description: "Strategic partnership for established companies",
      price: "Custom pricing",
      icon: DollarSign,
      features: [
        "Custom facility arrangements",
        "Joint research opportunities",
        "Technology transfer programs",
        "Co-development agreements",
        "Market access support",
        "Global expansion assistance",
        "Executive advisory board"
      ],
      popular: false
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application form with your company details and business plan"
    },
    {
      step: "2",
      title: "Initial Review",
      description: "Our team reviews your application and conducts initial due diligence"
    },
    {
      step: "3",
      title: "Interview Process",
      description: "Meet with our team for a comprehensive interview and facility tour"
    },
    {
      step: "4",
      title: "Final Decision",
      description: "Receive our decision and begin your journey with GIMS Bioincubator"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Join Our Community
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Accelerate Your Biotech Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Join the most innovative biotech community and gain access to world-class facilities, 
              expert mentorship, and a network of industry leaders to accelerate your success.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Membership Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the membership level that best fits your company's needs and growth stage
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {membershipTypes.map((membership, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative ${
                membership.popular ? 'ring-2 ring-primary' : ''
              }`}>
                {membership.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <membership.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-serif">{membership.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {membership.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">
                    {membership.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {membership.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full mt-6 ${membership.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={membership.popular ? 'default' : 'outline'}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Application Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to join our community of innovators
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4">Apply Now</h2>
              <p className="text-xl text-muted-foreground">
                Ready to join our community? Fill out the application form below.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Company Application</CardTitle>
                <CardDescription>
                  Please provide detailed information about your company and team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input id="companyName" placeholder="Enter your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="foundedYear">Founded Year *</Label>
                    <Input id="foundedYear" type="number" placeholder="2024" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companyDescription">Company Description *</Label>
                  <Textarea 
                    id="companyDescription" 
                    placeholder="Describe your company, technology, and mission"
                    rows={4}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 employees</SelectItem>
                        <SelectItem value="6-15">6-15 employees</SelectItem>
                        <SelectItem value="16-50">16-50 employees</SelectItem>
                        <SelectItem value="50+">50+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fundingStage">Funding Stage *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select funding stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                        <SelectItem value="seed">Seed</SelectItem>
                        <SelectItem value="series-a">Series A</SelectItem>
                        <SelectItem value="series-b">Series B</SelectItem>
                        <SelectItem value="series-c">Series C+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email *</Label>
                  <Input id="contactEmail" type="email" placeholder="contact@company.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessPlan">Business Plan</Label>
                  <Textarea 
                    id="businessPlan" 
                    placeholder="Briefly describe your business model and go-to-market strategy"
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="membershipType">Preferred Membership Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select membership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup Membership</SelectItem>
                      <SelectItem value="premium">Premium Membership</SelectItem>
                      <SelectItem value="enterprise">Enterprise Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and privacy policy *
                  </Label>
                </div>
                
                <Button size="lg" className="w-full shadow-lg hover:shadow-xl transition-all">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Why Join GIMS Bioincubator?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of being part of our innovative community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Mentorship</h3>
              <p className="text-muted-foreground">
                Access to industry veterans and successful entrepreneurs who guide your journey to success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Network Access</h3>
              <p className="text-muted-foreground">
                Connect with investors, partners, and industry leaders through our extensive network.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">World-Class Facilities</h3>
              <p className="text-muted-foreground">
                State-of-the-art laboratories and equipment to accelerate your research and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
