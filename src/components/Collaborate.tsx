import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carouselImg1 from "@/assets/carousel-img-1.jpg";
import carouselImg2 from "@/assets/carousel-img-2.jpg";
import carouselImg3 from "@/assets/carousel-img-3.jpg";
import carouselImg4 from "@/assets/carousel-img-4.jpg";
import startupEcosystemBanner from "@/assets/startup-ecosystem-banner.jpg";
import proudMomentBanner from "@/assets/proud-moment-banner.png";

const Collaborate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: carouselImg1, alt: "GIMS CMI Facility 1" },
    { src: carouselImg2, alt: "GIMS CMI Facility 2" },
    { src: carouselImg3, alt: "GIMS CMI Facility 3" },
    { src: carouselImg4, alt: "GIMS CMI Facility 4" },
    { src: startupEcosystemBanner, alt: "GIMS CMI Startup Ecosystem" },
    { src: proudMomentBanner, alt: "GIMS CMI Proud Moment" }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

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
          <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-scale-in border border-border/50 h-[500px] group">
            {/* Carousel Images */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain bg-gray-100"
                />
              </div>
            ))}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "bg-white w-8 h-2"
                      : "bg-white/60 hover:bg-white/80 w-2 h-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
