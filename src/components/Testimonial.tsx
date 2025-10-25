import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-card border-2 border-primary/10 shadow-glow animate-fade-in">
            <Quote className="text-primary mb-6" size={48} />
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
              "GIMS Bioincubator has been instrumental in transforming our research from the lab bench 
              to a viable commercial product. The mentorship, resources, and collaborative ecosystem 
              here are unparalleled. They don't just provide space—they believe in your vision and 
              work alongside you to make it reality."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">DS</span>
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">Dr. Sneha Patel</div>
                <div className="text-muted-foreground">Founder & CEO, BioGenix Solutions</div>
                <div className="text-sm text-primary font-medium mt-1">Batch 2021 | Series A Funded</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
