import { Icons } from "@/components/icons";
import LightRays from "@/components/LightRays/LightRays";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/sonner";
import { MobileWaitlistForm } from "./MobileWaitlistForm";

export default function Mobile() {
  return (
    <div className="h-screen w-screen !dark">
      <Toaster />
      <LightRays
        raysOrigin="top-center"
        raysColor="#fff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4">
        <div className="flex items-center gap-2">
          <Icons.logo className="size-12" />
          <Badge className="h-8 px-4 text-xl">mobile</Badge>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-balance text-center font-serif">
            Your Books. Your Thoughts. Anywhere.
          </h1>
          <p className="text-2xl text-muted-foreground text-center">
            sign up for early access and be part of the first wave of readers.
          </p>
        </div>

        <MobileWaitlistForm />
      </div>
    </div>
  );
}