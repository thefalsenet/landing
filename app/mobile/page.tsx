import { Icons } from "@/components/icons";
import LightRays from "@/components/LightRays/LightRays";
import { Toaster } from "@/components/ui/sonner";
import { MobileWaitlistForm } from "./MobileWaitlistForm";

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
            A quiet place for readers.
          </h1>
          <p className="text-2xl text-muted-foreground text-center">
            Sign-ups are paused while we keep things calm and usable.
          </p>
        </div>

        <MobileWaitlistForm />
      </div>
    </div>
  );
}
