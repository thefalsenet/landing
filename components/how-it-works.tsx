import { Check } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10  bg-primary flex items-center justify-center text-primary-foreground font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 max-w-[1440px] w-full mx-auto">
      <div className="flex flex-col flex-none items-center justify-center">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-display font-bold font-serif">
            How it works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-snug text-center">
            Getting started with thefalse is easy and takes just a few
            minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <Step
              number={1}
              title="Create your account"
              description="Sign up and create your reader profile with your favorite genres and books."
            />
            <Step
              number={2}
              title="Build your library"
              description="Add books you've read, are currently reading, or want to read to your virtual bookshelf."
            />
            <Step
              number={3}
              title="Connect with readers"
              description="Find friends and follow readers with similar tastes to discover new books."
            />
            <Step
              number={4}
              title="Share your journey"
              description="Track your progress, share notes, and discuss books with your community."
            />
          </div>

          <div className="bg-muted/30 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">what you&apos;ll get</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green" />
                <span>Personalized reading dashboard</span>
              </li> */}
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green" />
                <span>Connect with fellow book lovers</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green" />
                <span>Track your reading goals</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green" />
                <span>Discover new books and authors</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green" />
                <span>Join virtual book clubs</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green" />
                <span>Share reading notes and highlights</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
