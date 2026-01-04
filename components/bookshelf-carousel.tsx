"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  BookCheck,
  Clock,
  Pause,
  Play,
  MessageSquare,
  Users,
  Hash,
  Mic,
  Radio,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  headline: string;
  description: string;
  visual: React.ReactNode;
  message: string;
}

// Visual Components for each slide
const Slide1Visual = () => (
  <div className="w-full max-w-sm mx-auto">
    <div className="bg-background border p-6 shadow-lg">
      <div className="space-y-4">
        <div>
          <p className="text-xs text-muted-foreground mb-2">
            Currently reading
          </p>
          <div className="flex items-center gap-3 p-3 bg-muted/30 -lg">
            <div className="w-12 h-16 bg-primary/20  flex-shrink-0" />
            <div className="flex-1">
              <div className="h-3 bg-foreground/20  w-3/4 mb-2" />
              <div className="h-2 bg-muted-foreground/20  w-1/2" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2">Finished</p>
          <div className="flex flex-col gap-2">
            {[1, 2].map((i) => (
              <div className="flex items-center gap-3 p-3 bg-muted/30 -lg">
                <div className="w-12 h-16 bg-primary/20  flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-3 bg-foreground/20  w-3/4 mb-2" />
                  <div className="h-2 bg-muted-foreground/20  w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide2Visual = () => (
  <div className="w-full max-w-sm mx-auto">
    <div className="bg-background border border-border p-6 shadow-lg">
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-medium">42%</span>
          </div>
          <div className="h-2 bg-muted overflow-hidden">
            <div className="h-full bg-primary/40" style={{ width: "42%" }} />
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-muted/20">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1">
            <div className="h-3 bg-foreground/20  w-24 mb-1" />
            <div className="h-2 bg-muted-foreground/20  w-16" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Pause className="h-4 w-4" />
          <span>Paused</span>
        </div>
      </div>
    </div>
  </div>
);

const Slide3Visual = () => (
  <div className="w-full max-w-sm mx-auto">
    <div className="bg-background border border-border -2xl p-6 shadow-lg">
      <div className="space-y-4">
        <div className="p-4 bg-primary/5 border-l-4 border-primary ">
          <p className="text-sm italic text-foreground/80 mb-2">
            "The best way to find out if you can trust somebody is to trust
            them."
          </p>
          <p className="text-xs text-muted-foreground">
            — The Catcher in the Rye
          </p>
        </div>
        <div className="flex items-start gap-3 p-3 bg-muted/20 -lg">
          <div className="w-8 h-8 bg-primary/20 flex-shrink-0" />
          <div className="flex-1">
            <div className="h-2 bg-foreground/20  w-20 mb-2" />
            <div className="h-2 bg-muted-foreground/20  w-full mb-1" />
            <div className="h-2 bg-muted-foreground/20  w-3/4" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide4Visual = () => (
  <div className="w-full max-w-sm mx-auto">
    <div className="bg-background border border-border -2xl p-6 shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-muted/20 -lg">
          <div className="w-10 h-10 bg-primary/20 flex-shrink-0" />
          <div className="flex-1">
            <div className="h-3 bg-foreground/20  w-32 mb-1" />
            <div className="h-2 bg-muted-foreground/20  w-24" />
          </div>
        </div>
        <div className="p-4 bg-muted/10 -lg border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <Hash className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Philosophy</span>
          </div>
          <div className="h-2 bg-foreground/20  w-full mb-1" />
          <div className="h-2 bg-muted-foreground/20  w-3/4" />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>12 readers discussing</span>
        </div>
      </div>
    </div>
  </div>
);

const slides: Slide[] = [
  {
    headline: "Your reading space",
    description:
      "Track what you're reading, what you've finished, and what's waiting for you — all in one quiet place.",
    visual: <Slide1Visual />,
    message: "This is your space, not a dashboard.",
  },
  {
    headline: "Read at your pace",
    description:
      "Track reading sessions and progress naturally. No pressure, no streak anxiety — just honest reading.",
    visual: <Slide2Visual />,
    message: "Consistency without guilt.",
  },
  {
    headline: "Share what you feel",
    description:
      "Post thoughts, highlights, and reflections as you read — privately or with others who care about the same books.",
    visual: <Slide3Visual />,
    message: "Reading is emotional, not mechanical.",
  },
  {
    headline: "Find readers like you",
    description:
      "Discover books through people, not algorithms. Follow readers, join discussions, and explore ideas together.",
    visual: <Slide4Visual />,
    message: "People before recommendations.",
  },
];

export default function BookshelfCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-advance slides slowly (every 8 seconds)
  useEffect(() => {
    if (!isAutoPlaying) return;

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Slow auto-scroll

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Resume after 30 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 30000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    handleUserInteraction();
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    handleUserInteraction();
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    handleUserInteraction();
  };

  return (
    <section className="relative py-24 px-6 max-w-[1440px] w-full mx-auto">
      <div className="flex flex-col items-center">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-display font-bold font-serif mb-4">
            Library:
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-snug">
            Read together. Think deeper.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-5xl overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slides */}
          <div className="relative h-[700px] md:h-[800px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full px-6 md:px-12 text-center space-y-8">
                  {/* Headline */}
                  <h3 className="text-xl md:text-3xl font-serif font-bold leading-tight max-w-4xl">
                    {slide.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Visual */}
                  <div className="w-full mt-8">{slide.visual}</div>

                  {/* Message */}
                  <p className="text-sm md:text-base italic mt-4">
                    {slide.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-foreground"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
