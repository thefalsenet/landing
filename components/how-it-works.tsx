import { Search, BookOpen, PenTool, Share2 } from "lucide-react";

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
    <section className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-tight mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A simple flow, built around reading.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
