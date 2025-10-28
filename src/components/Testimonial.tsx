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
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-10 bg-gradient-card border-2 border-primary/20 shadow-xl animate-fade-in hover:shadow-glow transition-all duration-500">
            <Quote className="text-primary mb-4 opacity-50" size={36} />
            <blockquote className="text-lg md:text-xl font-medium text-foreground leading-relaxed mb-6 tracking-tight">
              "GIMS CMI provided us the perfect ecosystem to develop and validate MATRI. From clinical 
              mentorship to hospital infrastructure access, they supported us at every step. Showcasing on 
              Shark Tank India was a dream, but the real success is the thousands of women we're helping 
              with menstrual pain relief. GIMS CMI doesn't just incubate startups—they create impact."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-primary-foreground">MT</span>
              </div>
              <div>
                <div className="font-bold text-lg text-foreground mb-1">MATRI Team</div>
                <div className="text-sm text-muted-foreground font-medium">Women's Health Innovation | Featured on Shark Tank India</div>
                <div className="text-xs text-primary font-semibold mt-1.5 inline-block px-2.5 py-1 bg-primary/10 rounded-full">
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
