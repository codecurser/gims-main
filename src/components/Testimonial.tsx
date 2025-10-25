import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
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
              "GIMS Bioincubator has been instrumental in transforming our research from the lab bench 
              to a viable commercial product. The mentorship, resources, and collaborative ecosystem 
              here are unparalleled. They don't just provide space—they believe in your vision and 
              work alongside you to make it reality."
            </blockquote>
            <div className="flex items-center space-x-5">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-primary-foreground">DS</span>
              </div>
              <div>
                <div className="font-bold text-xl text-foreground mb-1">Dr. Sneha Patel</div>
                <div className="text-muted-foreground font-medium">Founder & CEO, BioGenix Solutions</div>
                <div className="text-sm text-primary font-semibold mt-2 inline-block px-3 py-1 bg-primary/10 rounded-full">
                  Batch 2021 | Series A Funded
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
