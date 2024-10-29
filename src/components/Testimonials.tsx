import { useState, useEffect, useRef, TouchEvent } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mountain Biking Enthusiast",
    content: "The quality and service at VeloVibe is unmatched. My new mountain bike exceeds all expectations!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Michael Chen",
    role: "Professional Cyclist",
    content: "As a pro cyclist, I'm particular about my gear. VeloVibe consistently delivers top-notch products.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Emma Thompson",
    role: "Adventure Cyclist",
    content: "VeloVibe's expertise helped me find the perfect bike for my cross-country adventures. Couldn't be happier!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "David Rodriguez",
    role: "City Commuter",
    content: "The urban bike I got from VeloVibe transformed my daily commute. Their attention to detail is remarkable.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?w=1600')] opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold mb-12 text-center animate-slide-up">
          What Our Customers Say
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 p-2 rounded-full bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-12 p-2 rounded-full bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            className="overflow-hidden touch-pan-y"
            ref={slideRef}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="group glass-effect p-6 sm:p-8 rounded-2xl relative animate-slide-up hover:bg-white/20 transition-colors duration-300">
                    <Quote className="absolute top-4 right-4 text-yellow-400 transform transition-transform duration-300 group-hover:rotate-12" size={24} />
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md scale-110 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover relative transform transition duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg group-hover:text-yellow-400 transition-colors duration-300">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm sm:text-base text-yellow-400/80">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-400 w-6'
                    : 'bg-yellow-400/50 hover:bg-yellow-400/80'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}