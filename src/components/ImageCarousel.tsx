import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Award, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  specs?: string[];
  stats?: { value: string; label: string; icon: any }[];
}

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Enhanced images with more dynamic content
  const images: CarouselImage[] = [
    {
      id: 1,
      src: "/src/assets/hero-lab.jpg",
      alt: "Advanced Medical Laboratory",
      title: "Revolutionary",
      subtitle: "Medical Innovation",
      description: "Transforming healthcare through cutting-edge technology, AI-powered diagnostics, and breakthrough medical solutions that save lives.",
      specs: ["AI-Powered Diagnostics", "FDA Approved", "24/7 Monitoring", "Global Impact"],
      stats: [
        { value: "500K+", label: "Lives Saved", icon: Heart },
        { value: "95%", label: "Success Rate", icon: Star },
        { value: "50+", label: "FDA Approvals", icon: Award }
      ]
    },
    {
      id: 2,
      src: "/src/assets/facility-lab.jpg",
      alt: "Medical Research Center",
      title: "Next-Gen",
      subtitle: "Research Facilities",
      description: "State-of-the-art laboratories equipped with the world's most advanced medical technology and research infrastructure.",
      specs: ["ISO 9001 Certified", "Advanced Analytics", "Expert Mentorship", "Funding Support"],
      stats: [
        { value: "₹25Cr+", label: "Research Funding", icon: Zap },
        { value: "75+", label: "Active Projects", icon: Star },
        { value: "200+", label: "Researchers", icon: Award }
      ]
    },
    {
      id: 3,
      src: "/src/assets/collaboration.jpg",
      alt: "Medical Collaboration",
      title: "Global",
      subtitle: "Healthcare Network",
      description: "Connecting medical professionals, researchers, and entrepreneurs worldwide to create transformative healthcare solutions.",
      specs: ["Global Network", "Clinical Trials", "Industry Partnerships", "Expert Collaboration"],
      stats: [
        { value: "100+", label: "Countries", icon: Star },
        { value: "1000+", label: "Partners", icon: Award },
        { value: "50K+", label: "Patients", icon: Heart }
      ]
    },
    {
      id: 4,
      src: "/src/assets/innovation-bg.jpg",
      alt: "Medical Innovation",
      title: "Future",
      subtitle: "of Healthcare",
      description: "Pioneering the next generation of medical technology with AI integration, telemedicine, and precision medicine breakthroughs.",
      specs: ["AI Integration", "Telemedicine", "Precision Medicine", "Digital Health"],
      stats: [
        { value: "92%", label: "Accuracy Rate", icon: Star },
        { value: "24/7", label: "Support", icon: Zap },
        { value: "10K+", label: "Innovations", icon: Award }
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Increased to 6 seconds for better impact

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, images.length]);

  // Load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90 pt-28">
      {/* Animated Background Elements - Matched with Mission Section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient overlay for consistency */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)),transparent_50%)]"></div>
        </div>
        
        {/* Enhanced animated circles with staggered timing */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Additional subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/10 pointer-events-none"></div>
      </div>

      {/* Main Carousel Container */}
      <div 
        className="relative w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Slides with Enhanced Effects */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-all duration-[2500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                index === currentIndex
                  ? "opacity-100 scale-100 blur-0"
                  : "opacity-0 scale-110 blur-sm"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Enhanced Gradient Overlay with smooth transitions */}
              <div className={`absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent transition-opacity duration-[2500ms] ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`} />
              <div className={`absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent transition-opacity duration-[2500ms] ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`} />
              
              {/* Subtle parallax effect */}
              <div className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_0%,hsl(var(--background)/20)_100%)] transition-opacity duration-[2500ms] ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Content Overlay */}
        <div className="absolute inset-0 flex items-center z-0">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Premium Badge */}
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-primary/30 shadow-2xl">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-primary tracking-wider uppercase">Premium Medical Innovation</span>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                </div>

                {/* Dynamic Title with Split Animation */}
                <div className="mb-8">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4 leading-[0.9] tracking-tight">
                    <span className="block animate-fade-in-up">{images[currentIndex].title}</span>
                    <span className="block bg-gradient-hero bg-clip-text text-transparent animate-gradient animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                      {images[currentIndex].subtitle}
                    </span>
                  </h1>
                </div>

                {/* Enhanced Description */}
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-4xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  {images[currentIndex].description}
                </p>

                {/* Enhanced Specs with Icons */}
                <div className="flex flex-wrap gap-4 mb-10">
                  {images[currentIndex].specs?.map((spec, index) => (
                    <div
                      key={index}
                      className="group bg-card/70 backdrop-blur-xl px-6 py-3 rounded-full border border-border/40 hover:border-primary/60 transition-all duration-500 animate-scale-in hover:scale-105 hover:shadow-xl"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Dynamic Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-2xl">
                  {images[currentIndex].stats?.map((stat, index) => (
                    <div
                      key={index}
                      className="group bg-card/60 backdrop-blur-xl p-4 rounded-2xl border border-border/40 hover:border-primary/40 transition-all duration-500 animate-scale-in hover:scale-105 hover:shadow-xl"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <stat.icon className="text-primary-foreground" size={20} />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "1s" }}>
                  <Button size="lg" className="group shadow-2xl hover:shadow-3xl transition-all duration-500 text-base px-8 py-4 bg-gradient-hero hover:scale-105 border border-primary/20 hover:border-primary/40">
                    Discover Innovation
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8 py-4 border-2 hover:bg-muted/30 hover:scale-105 transition-all duration-500 backdrop-blur-sm hover:border-primary/40">
                    Join Our Mission
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Controls - Compact and Professional */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="w-10 h-10 bg-card/90 backdrop-blur-xl border-border/50 hover:border-primary/60 hover:bg-card/95 transition-all duration-300 ease-out shadow-lg hover:scale-105"
          >
            <ChevronLeft size={18} />
          </Button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="w-10 h-10 bg-card/90 backdrop-blur-xl border-border/50 hover:border-primary/60 hover:bg-card/95 transition-all duration-300 ease-out shadow-lg hover:scale-105"
          >
            <ChevronRight size={18} />
          </Button>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-700 ease-out ${
                index === currentIndex
                  ? "bg-primary scale-125 w-5 h-5 shadow-xl shadow-primary/50 ring-2 ring-primary/30"
                  : "bg-card/60 hover:bg-card/80 border border-border/40 hover:scale-125 w-4 h-4"
              }`}
            />
          ))}
        </div>

        {/* Enhanced Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/10 backdrop-blur-sm z-30">
          <div 
            className="h-full bg-gradient-hero transition-all duration-700 ease-out shadow-lg"
            style={{ 
              width: `${((currentIndex + 1) / images.length) * 100}%` 
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
    </section>
  );
};

export default ImageCarousel;
