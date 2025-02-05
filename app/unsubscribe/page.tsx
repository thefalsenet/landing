import { Frame } from "lucide-react";
import { UnsubscribeForm } from "./unsubscribe-form";
import { Icons } from "@/components/icons";
import { Suspense } from "react";

export default function UnsubscribePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-8">
        <Icons.logo className="w-12 h-12" />
      </div>
      <div className="w-full max-w-md">
        <div className="bg-background shadow-sm rounded-lg border">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-xl font-semibold text-center mb-6">
              Unsubscribe from thefalse
            </h1>
            <Suspense>
              <UnsubscribeForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
