"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribe } from "@/lib/actions/subscribe";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="py-3 px-6 h-auto" disabled={pending}>
      {pending ? "getting early access..." : "get early access"}
    </Button>
  );
}

export default function Form() {
  async function handleSubscribe(formData: FormData) {
    const result = await subscribe(formData);

    if (result.success) {
      toast.success(result.message);
      // Reset form
      const form = document.getElementById("subscribe-form") as HTMLFormElement;
      form.reset();
    } else {
      toast.error(result.message);
    }
  }
  return (
    <form
      className="flex flex-col sm:flex-row gap-2 w-full"
      id="subscribe-form"
      action={handleSubscribe}
    >
      <Input
        type="email"
        placeholder="enter your email"
        className="h-auto w-full"
        required
      />
      <SubmitButton />
    </form>
  );
}
