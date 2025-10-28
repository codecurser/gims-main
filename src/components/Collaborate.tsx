import collaborationImage from "@/assets/collaboration.jpg";

const Collaborate = () => {

  return (
    <section id="collaborate" className="py-16 bg-gradient-section relative overflow-hidden">
      {/* Medical-themed background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-20 h-0.5 bg-gradient-hero mb-4"></div>
              <span className="text-sm font-medium text-primary tracking-wider uppercase">Healthcare Collaboration</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">
              Let's Transform Healthcare Together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're a medical entrepreneur, healthcare professional, hospital administrator, researcher, 
              or investor, GIMS CMI offers unique opportunities to collaborate and create meaningful impact in 
              healthcare through our 630-bed hospital ecosystem.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Join India's first public hospital-based medical incubator and be part of transforming healthcare 
              with clinical excellence, strategic support, and world-class infrastructure.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl animate-scale-in border border-border/50 group">
            <img 
              src={collaborationImage} 
              alt="Medical professionals collaborating on healthcare innovation" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
