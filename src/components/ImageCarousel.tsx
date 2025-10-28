import { useState, useEffect, useMemo } from "react";
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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const [typewriterText, setTypewriterText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const messages = [
    "Welcome Innovators",
    "Welcome to GIMS",
    "Next generation medical innovation",
    "Transforming Healthcare",
  ];

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

  // Typewriter effect
  useEffect(() => {
    const currentMessage = messages[messageIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (typewriterText.length < currentMessage.length) {
          setTypewriterText(currentMessage.substring(0, typewriterText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (typewriterText.length > 0) {
          setTypewriterText(currentMessage.substring(0, typewriterText.length - 1));
        } else {
          // Finished deleting, move to next message
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typewriterText, messageIndex, isDeleting, messages]);

  // Preload adjacent images
  useEffect(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;
    
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(currentIndex);
      newSet.add(prevIndex);
      newSet.add(nextIndex);
      return newSet;
    });
  }, [currentIndex, slides.length]);

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
    <section className="relative w-full h-[780px] overflow-visible bg-gray-100">
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
              {loadedImages.has(index) ? (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse" />
              )}
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
        <div className="absolute bottom-72 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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
          <div className="relative h-72">
            {/* SVG Curve - Deeper Concave Upward Parabolic */}
            <svg
              className="absolute top-0 w-full h-28"
              viewBox="0 0 1440 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,112 Q720,0 1440,112 L1440,112 L0,112 Z"
                fill="white"
              />
            </svg>
            
            {/* White Background for Text */}
            <div className="absolute top-28 left-0 right-0 bottom-0 bg-white"></div>
            
            {/* Text Content - Compact */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3 h-12 flex items-center">
                {typewriterText}
                <span className="typewriter-cursor">|</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-5 animate-fade-in-delay">
                Empowering global healthcare through innovation
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
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
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
        
        .typewriter-cursor {
          display: inline-block;
          margin-left: 4px;
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;
