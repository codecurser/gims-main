import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, FlaskConical, Shield, Zap, Users, Calendar } from "lucide-react";

const Facilities = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              State-of-the-Art Facilities
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              World-Class Research Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our cutting-edge facilities provide everything you need to accelerate your biotech innovation, 
              from advanced laboratory equipment to collaborative workspaces designed for breakthrough discoveries.
            </p>
          </div>
        </div>
      </section>

      {/* Core Facilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Core Research Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive infrastructure to support every stage of biotech development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Microscope className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Molecular Biology Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  Fully equipped with PCR machines, gel electrophoresis systems, and advanced microscopy 
                  equipment for cutting-edge molecular research.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Real-time PCR systems</li>
                  <li>• Fluorescence microscopes</li>
                  <li>• Cell culture facilities</li>
                  <li>• Protein analysis equipment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <FlaskConical className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Chemistry Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  State-of-the-art chemical synthesis and analysis facilities for drug discovery 
                  and pharmaceutical development.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• HPLC and LC-MS systems</li>
                  <li>• NMR spectroscopy</li>
                  <li>• Automated synthesis platforms</li>
                  <li>• High-throughput screening</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">BSL-3 Laboratory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  High-containment facility for working with infectious agents and hazardous materials 
                  in a safe, controlled environment.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Negative pressure systems</li>
                  <li>• HEPA filtration</li>
                  <li>• Personal protective equipment</li>
                  <li>• Emergency response systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Bioinformatics Center</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  High-performance computing resources and software for genomic analysis, 
                  drug discovery, and data science applications.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• GPU computing clusters</li>
                  <li>• Cloud computing access</li>
                  <li>• Bioinformatics software suite</li>
                  <li>• Data visualization tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Collaborative Workspaces</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  Modern office spaces and meeting rooms designed to foster collaboration 
                  and innovation among our portfolio companies.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Open-plan offices</li>
                  <li>• Conference rooms</li>
                  <li>• Breakout spaces</li>
                  <li>• Video conferencing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">Event Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  Professional event venues for seminars, workshops, and networking events 
                  to connect our community of innovators.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Auditorium (200 seats)</li>
                  <li>• Seminar rooms</li>
                  <li>• Networking lounges</li>
                  <li>• Catering facilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Why Choose Our Facilities?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">24/7 Access</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock access to facilities ensures your research never stops, 
                      with secure keycard entry and monitoring systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                    <p className="text-muted-foreground">
                      Dedicated technical staff and facility managers to help you maximize 
                      the potential of our equipment and resources.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Regulatory Compliance</h3>
                    <p className="text-muted-foreground">
                      All facilities meet FDA, EMA, and other regulatory standards to ensure 
                      your research meets industry requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Microscope className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Facility Tour Available</p>
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
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Access Our Facilities?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our community of innovators and gain access to world-class research infrastructure 
              that will accelerate your biotech journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all">
                Schedule a Tour
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
