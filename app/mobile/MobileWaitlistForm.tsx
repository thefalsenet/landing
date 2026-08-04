"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { subscribe } from "@/lib/actions/subscribe";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

interface MobileWaitlistFormProps {
  placeholder?: string;
  ariaLabel?: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      tabIndex={0}
      size="icon"
      /* Inset in the field rather than welded to its edge: the app's search
         bar is one capsule, and a send glyph lives inside it. Two half-pills
         butted together read as a control that broke in half. */
      className="absolute right-1 top-1 z-10 size-10 shrink-0 cursor-pointer rounded-full disabled:bg-primary/30 disabled:text-muted-foreground disabled:opacity-100"
      aria-label="Submit email to join mobile waitlist"
    >
      {pending ? (
        <Icons.spinner className="size-4 animate-spin" />
      ) : (
        <svg
          height="16"
          strokeLinejoin="round"
          style={{ color: "currentColor" }}
          viewBox="0 0 16 16"
          width="16"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"
            fill="currentColor"
          />
        </svg>
      )}
    </Button>
  );
}

export function MobileWaitlistForm({
  placeholder = "Join the waitlist…",
  ariaLabel = "Email address for mobile waitlist",
}: MobileWaitlistFormProps) {
  async function handleSubscribe(formData: FormData) {
    const result = await subscribe(formData);

    if (result.success) {
      toast.success(result.message);
      const form = document.getElementById(
        "mobile-waitlist-form",
      ) as HTMLFormElement;
      form?.reset();
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div
      id="waitlist"
      className="w-full my-4 max-w-[360px] flex flex-col items-center animate-in fade-in slide-in-from-bottom-2 duration-450 fill-mode-both"
      style={{ animationDelay: "180ms" }}
    >
      <form
        id="mobile-waitlist-form"
        action={handleSubscribe}
        className="relative w-full"
      >
        <input type="hidden" name="source" value="mobile" />
        <label htmlFor="agent-waitlist-form" className="sr-only">
          {ariaLabel}
        </label>
        {/* 48px, the app's control floor — `sm:h-9` put the desktop field at
            36px, under it. 16px text at every width so iOS never zooms in. */}
        <div className="relative w-full">
          <Input
            type="email"
            name="email"
            required
            data-slot="input"
            className="h-12 w-full min-w-0 rounded-full pl-5 pr-14 !text-[16px] shadow-none"
            placeholder={placeholder}
            autoCapitalize="off"
            spellCheck={false}
            id="agent-waitlist-form"
            tabIndex={0}
            autoComplete="email"
            data-1p-ignore="true"
            data-lpignore="true"
            data-form-type="other"
            aria-label={ariaLabel}
            aria-required={true}
          />
          <SubmitButton />
        </div>
        <div
          className="mt-2 w-full flex items-center justify-center h-5"
          aria-live="polite"
        >
          <div
            id="error-message"
            className="flex gap-2 items-center justify-center transition-all duration-300 invisible"
            role="alert"
            aria-atomic="true"
          >
            <span className="text-[11px] font-semibold text-red" />
          </div>
        </div>
      </form>
    </div>
  );
}
