import type React from "react";
import {
  BookOpen,
  Users,
  Star,
  MessageSquare,
  BookMarked,
  Sparkles,
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-start p-6 border rounded-lg">
      <div className="p-2 bg-primary/10 rounded-md mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 max-w-[1440px] w-full border mx-auto">
      <div className="flex flex-col flex-none items-center justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4 font-serif">
            Features you&apos;ll love
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover all the ways thefalse.net helps you connect with books and
            fellow readers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature
            icon={<BookOpen className="h-6 w-6" />}
            title="Reading Tracker"
            description="Keep track of your reading progress, set goals, and celebrate your achievements."
          />
          <Feature
            icon={<Users className="h-6 w-6" />}
            title="Book Clubs"
            description="Create or join virtual book clubs to discuss your favorite reads with others."
          />
          <Feature
            icon={<Star className="h-6 w-6" />}
            title="Personalized Recommendations"
            description="Get AI-powered book recommendations based on your reading history and preferences."
          />
          <Feature
            icon={<MessageSquare className="h-6 w-6" />}
            title="Social Notes"
            description="Share your thoughts and highlights with friends as you read."
          />
          <Feature
            icon={<BookMarked className="h-6 w-6" />}
            title="Reading Lists"
            description="Create and share curated reading lists for any occasion or interest."
          />
          <Feature
            icon={<Sparkles className="h-6 w-6" />}
            title="Reading Insights"
            description="Gain insights into your reading habits and discover new patterns."
          />
        </div>
      </div>
    </section>
  );
}
