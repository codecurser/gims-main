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
              "GIMS CMI provided us the perfect ecosystem to develop and validate MATRI. From clinical 
              mentorship to hospital infrastructure access, they supported us at every step. Showcasing on 
              Shark Tank India was a dream, but the real success is the thousands of women we're helping 
              with menstrual pain relief. GIMS CMI doesn't just incubate startups—they create impact."
            </blockquote>
            <div className="flex items-center space-x-5">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-primary-foreground">MT</span>
              </div>
              <div>
                <div className="font-bold text-xl text-foreground mb-1">MATRI Team</div>
                <div className="text-muted-foreground font-medium">Women's Health Innovation | Featured on Shark Tank India</div>
                <div className="text-sm text-primary font-semibold mt-2 inline-block px-3 py-1 bg-primary/10 rounded-full">
                  Incubated 2024 | Shark Tank Showcase
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
