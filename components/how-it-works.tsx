/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Search, BookOpen, PenTool, Share2 } from "lucide-react";
import Image from "next/image";
import type { LandingDictionary } from "@/lib/i18n-shared";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Step({ number, title, description, icon }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-foreground">
        {icon}
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium text-muted-foreground">
          Step {number}
        </div>
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

interface HowItWorksProps {
  copy: LandingDictionary["howItWorks"];
}

export default function HowItWorks({ copy }: HowItWorksProps) {
  const steps = [
    {
      title: copy.steps[0].title,
      description: copy.steps[0].description,
      bgUrl: "/bg-01.png",
      imageUrl: "/book-stack.png",
      onRight: false,
    },
    {
      title: copy.steps[1].title,
      description: copy.steps[1].description,
      bgUrl: "/bg-02.png",
      imageUrl: "/feed.png",
      onRight: false,
    },
    {
      title: copy.steps[2].title,
      description: copy.steps[2].description,
      bgUrl: "/bg-03.png",
      imageUrl: "/ai-search.png",
      onRight: true,
    },
    {
      title: copy.steps[3].title,
      description: copy.steps[3].description,
      bgUrl: "/bg-04.png",
      imageUrl: "/reading-session.png",
      onRight: false,
    },
    {
      title: copy.steps[4].title,
      description: copy.steps[4].description,
      bgUrl: "/bg-05.png",
      imageUrl: "/composer.png",
      onRight: true,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 py-16 md:py-24" id="how-it-works">
      <div className="mx-auto w-full max-w-[1360px] space-y-10">
        <div className="space-y-3 text-left">
          <h2 className="text-2xl tracking-[-0.01em] leading-[100%] text-foreground font-serif md:text-3xl">
            {copy.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base max-w-2xl">
            {copy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              className={cn("md:col-span-1", i === 0 ? "md:col-span-2" : "")}
              key={i}
            >
              <FeatureCard
                bgUrl={step.bgUrl!}
                imageUrl={step.imageUrl!}
                description={step.description}
                title={step.title}
                onRight={step.onRight}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title?: string;
  description?: string;
  bgUrl: string;
  imageUrl: string;
  onRight: boolean;
}

function FeatureCard({
  title,
  description,
  bgUrl,
  imageUrl,
  onRight,
}: FeatureCardProps) {
  return (
    <>
      <div className="group flex h-full flex-col">
        <div
          className="relative h-[280px] sm:h-[360px] md:h-[440px] overflow-hidden"
          aria-label={title}
        >
          <div className="relative h-[280px] sm:h-[360px] md:h-[440px] overflow-hidden">
            <Image
              src={bgUrl}
              alt=""
              loading="lazy"
              decoding="async"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="pointer-events-none select-none object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div
            className={cn(
              "absolute inset-0 flex items-center p-6 justify-center",
              onRight ? "pr-0 justify-end" : "",
            )}
          >
            <img
              src={imageUrl}
              alt={title}
              className="pointer-events-none select-none drop-shadow-lg max-h-[80%] w-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 px-0.5 py-5">
          <h3 className="text-base font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
