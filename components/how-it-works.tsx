/* eslint-disable @next/next/no-img-element */
import { Search, BookOpen, PenTool, Share2 } from "lucide-react";
import Image from "next/image";

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

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Add a book",
      description: "Search by title or author and start reading in seconds.",
      icon: <Search className="size-6 stroke-[1.5]" />,
    },
    {
      number: 2,
      title: "Read & track",
      description:
        "Track your progress and reading sessions automatically or manually.",
      icon: <BookOpen className="size-6 stroke-[1.5]" />,
    },
    {
      number: 3,
      title: "Think & write",
      description:
        "Highlight passages, write short thoughts, or save private notes.",
      icon: <PenTool className="size-6 stroke-[1.5]" />,
    },
    {
      number: 4,
      title: "Share & discuss",
      description:
        "Share reflections, follow readers, or join discussions when you want.",
      icon: <Share2 className="size-6 stroke-[1.5]" />,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 py-16 md:py-24" id="how-it-works">
      <div className="mx-auto w-full max-w-[1360px] space-y-10">
        <div className="space-y-3 text-left">
          <h2 className="text-2xl tracking-[-0.01em] leading-[100%] text-foreground font-serif md:text-3xl">
            How it works
          </h2>
          <p className="text-sm text-muted-foreground md:text-base max-w-2xl">
            Connect your reading. TheFalse handles the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-2"></div>
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
}

function FeatureCard({
  title,
  description,
  bgUrl,
  imageUrl,
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
          <div className="absolute inset-0 flex items-center p-6 justify-center">
            <img
              src="/images/onboarding/mail-stack.svg"
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
