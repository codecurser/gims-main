import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  specs?: string[];
}

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Sample images - replace with your actual images
  const images: CarouselImage[] = [
    {
      id: 1,
      src: "/src/assets/hero-lab.jpg",
      alt: "Advanced Medical Laboratory",
      title: "State-of-the-Art Medical Facilities",
      description: "Cutting-edge laboratory equipment and research infrastructure for breakthrough medical innovations.",
      specs: ["ISO 9001 Certified", "FDA Approved", "24/7 Monitoring", "Advanced Analytics"]
    },
    {
      id: 2,
      src: "/src/assets/facility-lab.jpg",
      alt: "Medical Research Center",
      title: "Innovation Hub",
      description: "Dedicated spaces for medical startups to develop and test revolutionary healthcare solutions.",
      specs: ["Collaborative Workspaces", "Expert Mentorship", "Funding Support", "Regulatory Guidance"]
    },
    {
      id: 3,
      src: "/src/assets/collaboration.jpg",
      alt: "Medical Collaboration",
      title: "Healthcare Partnerships",
      description: "Connecting medical professionals, researchers, and entrepreneurs for transformative healthcare solutions.",
      specs: ["Network of Experts", "Clinical Trials", "Research Collaboration", "Industry Partnerships"]
    },
    {
      id: 4,
      src: "/src/assets/innovation-bg.jpg",
      alt: "Medical Innovation",
      title: "Future of Healthcare",
      description: "Pioneering the next generation of medical technology and patient care innovations.",
      specs: ["AI Integration", "Telemedicine", "Precision Medicine", "Digital Health"]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Main Carousel Container */}
      <div 
        className="relative w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Slides */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <div className="animate-fade-in-up">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-lg px-4 py-2 rounded-full mb-8 border border-primary/20">
                  <Play className="text-primary" size={16} />
                  <span className="text-sm font-semibold text-primary tracking-wider uppercase">Featured</span>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 leading-tight">
                  {images[currentIndex].title}
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                  {images[currentIndex].description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {images[currentIndex].specs?.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-card/60 backdrop-blur-lg px-4 py-2 rounded-full border border-border/40 hover:border-primary/40 transition-all duration-300 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-sm font-medium text-foreground">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg px-8 py-4 bg-gradient-hero hover:scale-105">
                    Explore More
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-muted/30 hover:scale-105 transition-all duration-500 backdrop-blur-sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="w-12 h-12 bg-card/80 backdrop-blur-lg border-border/40 hover:border-primary/40 hover:bg-card/90 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlayPause}
            className="w-12 h-12 bg-card/80 backdrop-blur-lg border-border/40 hover:border-primary/40 hover:bg-card/90 transition-all duration-300 shadow-lg"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </Button>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="w-12 h-12 bg-card/80 backdrop-blur-lg border-border/40 hover:border-primary/40 hover:bg-card/90 transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125 shadow-lg"
                  : "bg-card/60 hover:bg-card/80 border border-border/40"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20">
          <div 
            className="h-full bg-gradient-hero transition-all duration-100 ease-linear"
            style={{ 
              width: `${((currentIndex + 1) / images.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
