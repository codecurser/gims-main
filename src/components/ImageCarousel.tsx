import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import gimsStartupPoster from "@/assets/gims-startup-poster.png";
import heroLab from "@/assets/hero-lab.jpg";
import facilityLab from "@/assets/facility-lab.jpg";
import collaboration from "@/assets/collaboration.jpg";
import innovationBg from "@/assets/innovation-bg.jpg";

interface CarouselSlide {
  id: number;
  src: string;
  alt: string;
}

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel slides with GIMS poster and other images
  const slides: CarouselSlide[] = [
    {
      id: 1,
      src: gimsStartupPoster,
      alt: "GIMS Startup - Centre for Medical Innovation",
    },
    {
      id: 2,
      src: heroLab,
      alt: "Advanced Medical Laboratory",
    },
    {
      id: 3,
      src: facilityLab,
      alt: "Medical Research Facility",
    },
    {
      id: 4,
      src: collaboration,
      alt: "Medical Collaboration",
    },
    {
      id: 5,
      src: innovationBg,
      alt: "Medical Innovation",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[700px] overflow-visible bg-gray-100">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - SIIC IIT Kanpur Style */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-64 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
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

        {/* Curved Bottom Section with Text - SIIC IIT Kanpur Style */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          {/* Curved Background */}
          <div className="relative h-64">
            {/* SVG Curve - Concave Upward Parabolic */}
            <svg
              className="absolute top-0 w-full h-20"
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z"
                fill="white"
              />
            </svg>
            
            {/* White Background for Text */}
            <div className="absolute top-20 left-0 right-0 bottom-0 bg-white"></div>
            
            {/* Text Content - Compact */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3 animate-fade-in">
                Welcome to GIMS
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-5 animate-fade-in-delay">
                Next generation medical innovation for global healthcare
              </p>
              <div className="flex gap-3 animate-fade-in-delay-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm">
                  Incubate with us
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm">
                  News & Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          opacity: 0;
          animation: fade-in 1s ease-out 0.3s forwards;
        }
        
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 1s ease-out 0.6s forwards;
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;
