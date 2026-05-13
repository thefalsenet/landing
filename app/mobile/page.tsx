import { Metadata } from "next";
import { Icons } from "@/components/icons";
import LightRays from "@/components/LightRays/LightRays";
import { Toaster } from "@/components/ui/sonner";
import { MobileWaitlistForm } from "./MobileWaitlistForm";

export const metadata: Metadata = {
  title: "TheFalse Mobile · Early access",
  description:
    "Join early access for TheFalse Mobile, a calm reading product built around in-app reading, highlights, and reflection.",
};

export default function Mobile() {
  return (
    <div className="">
      <Toaster />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4">
        <div className="flex items-center gap-2">
          <Icons.logo className="size-12" />
          <span className="text-3xl font-medium font-serif">Mobile</span>
        </div>

        <div>
          <h1 className="text-4xl font-medium text-balance text-center font-serif">
            A calm reading app, built for mobile.
          </h1>
          <p className="text-2xl text-muted-foreground text-center">
            Early access is open while we shape the reading, highlights, and
            reflection loop.
          </p>
        </div>

        <MobileWaitlistForm />
      </div>
    </div>
  );
}
