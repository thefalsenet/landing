"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, MessageSquare, Users, Mic } from "lucide-react";

interface Feature {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    number: "1",
    title: "Track your reading",
    description:
      "Keep track of what you're reading, what you've finished, and what's next — without clutter.",
    icon: <BookOpen className="size-5" />,
  },
  {
    number: "2",
    title: "Share thoughts & highlights",
    description:
      "Write short reflections, save quotes, and share them with people who care about the same books.",
    icon: <MessageSquare className="size-5" />,
  },
  {
    number: "3",
    title: "Follow readers & books",
    description:
      "Discover ideas through people, not trends. Follow readers, books, and conversations.",
    icon: <Users className="size-5" />,
  },
];

// Phone mockup visual components
const PhoneVisual1 = () => (
  <div className="w-full h-full bg-background p-4">
    <div className="w-full h-full bg-muted/30 rounded-[1.5rem] overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="h-4 bg-foreground/20 w-24" />
          <div className="h-3 bg-muted-foreground/20 w-32" />
        </div>
        <div className="space-y-3 mt-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-background  border border-border/50"
            >
              <div className="w-12 h-16 bg-primary/10 flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-foreground/20 w-3/4" />
                <div className="h-2 bg-muted-foreground/20 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PhoneVisual2 = () => (
  <div className="w-full h-full bg-background p-4">
    <div className="w-full h-full bg-muted/30 rounded-[1.5rem] overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="h-4 bg-foreground/20 w-28" />
          <div className="h-3 bg-muted-foreground/20 w-36" />
        </div>
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-background  border-l-4 border-primary border">
            <div className="h-3 bg-foreground/20 w-full mb-2" />
            <div className="h-3 bg-foreground/20 w-3/4 mb-2" />
            <div className="h-2 bg-muted-foreground/20 w-20 mt-3" />
          </div>
          <div className="flex items-center gap-3 p-3 bg-background  border border-border/50">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-2 bg-foreground/20 w-24" />
              <div className="h-2 bg-muted-foreground/20 w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PhoneVisual3 = () => (
  <div className="w-full h-full bg-background p-4">
    <div className="w-full h-full bg-muted/30 rounded-[1.5rem] overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="h-4 bg-foreground/20 w-32" />
          <div className="h-3 bg-muted-foreground/20 w-40" />
        </div>
        <div className="mt-6 space-y-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-background  border border-border/50"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-foreground/20 w-28" />
                <div className="h-2 bg-muted-foreground/20 w-20" />
              </div>
            </div>
          ))}
          <div className="p-3 bg-background  border border-border/50">
            <div className="h-3 bg-foreground/20 w-full mb-2" />
            <div className="h-2 bg-muted-foreground/20 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const phoneVisuals = [
  <PhoneVisual1 key="1" />,
  <PhoneVisual2 key="2" />,
  <PhoneVisual3 key="3" />,
];

export default function WhatYouCanDo() {
  const [activeFeature, setActiveFeature] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = featureRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveFeature(index);
          }
        }
      });
    }, observerOptions);

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left side - Text content */}
        <div className="space-y-12">
          {/* Section Title */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-tight mb-4">
              Everything you need for a thoughtful reading life
            </h2>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  featureRefs.current[index] = el;
                }}
                onMouseEnter={() => setActiveFeature(index)}
                className={`transition-opacity duration-300 ${
                  activeFeature === index ? "opacity-100" : "opacity-50"
                }`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="size-10 bg-muted flex items-center justify-center text-sm font-medium">
                      {feature.number}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-medium leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Phone mockup */}
        <div className="sticky top-24 hidden lg:block">
          <div className="relative w-full max-w-sm mx-auto p-6">
            {/* Phone frame */}
            <div className="relative aspect-[9/16]">
              {/* Phone outer frame */}
              <div className="absolute inset-0 bg-background border-8 border-border rounded-[2.5rem] shadow-2xl" />

              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-border rounded-b-2xl z-20 border-x border-b border-border/50" />

              {/* Phone screen content */}
              <div className="absolute inset-[0.5rem] rounded-[2rem] overflow-hidden">
                {phoneVisuals.map((visual, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      activeFeature === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {visual}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Show phone mockup below on small screens */}
        <div className="lg:hidden">
          <div className="relative w-full max-w-sm mx-auto">
            <div className="relative aspect-[9/16]">
              {/* Phone outer frame */}
              <div className="absolute inset-0 bg-background border-8 border-border rounded-[2.5rem] shadow-2xl" />

              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl z-20 border-x border-b border-border/50" />

              {/* Phone screen content */}
              <div className="absolute inset-[0.5rem] rounded-[2rem] overflow-hidden">
                {phoneVisuals[activeFeature]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
