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
      className="cursor-pointer sm:h-9 flex items-center justify-center bg-primary text-primary-foreground disabled:bg-muted dark:disabled:text-background transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 z-10 w-[46px] sm:w-9 flex-shrink-0"
      aria-label="Submit email to join mobile waitlist"
    >
      {pending ? (
        <Icons.spinner className="size-4 animate-spin" />
      ) : (
        <svg
          data-testid="geist-icon"
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
      className="w-full my-4 max-w-[340px] flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
      style={{ animationDelay: "320ms" }}
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
        <div className="flex flex-row w-full">
          <Input
            type="email"
            name="email"
            required
            data-slot="input"
            className="bg-border border shadow-none border-foreground !text-[16px] sm:!text-[14px] placeholder:text-muted-foreground pl-[15px] focus-visible:border-foreground focus-visible:ring-none focus-visible:ring-0 h-[46px] sm:h-9 w-full min-w-0 rounded-r-none"
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
