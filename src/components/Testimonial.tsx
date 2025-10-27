import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="p-12 md:p-16 bg-gradient-card border-2 border-primary/20 shadow-2xl animate-fade-in hover:shadow-glow transition-all duration-500">
            <Quote className="text-primary mb-8 opacity-50" size={56} />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed mb-10 tracking-tight">
              "GIMS Startup Clinic has been instrumental in transforming our healthcare innovation from concept 
              to clinical reality. The direct access to medical professionals, hospital infrastructure, and 
              patient validation here is unparalleled. They don't just provide incubation—they connect you with 
              real clinical needs and help you solve them."
            </blockquote>
            <div className="flex items-center space-x-5">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-primary-foreground">AK</span>
              </div>
              <div>
                <div className="font-bold text-xl text-foreground mb-1">Dr. Amit Kumar</div>
                <div className="text-muted-foreground font-medium">Founder & CEO, MedInnovate Solutions</div>
                <div className="text-sm text-primary font-semibold mt-2 inline-block px-3 py-1 bg-primary/10 rounded-full">
                  Incubated 2023 | ₹2.5Cr Funded
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
