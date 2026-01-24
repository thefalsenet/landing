"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { unsubscribeUser } from "@/lib/actions/unsubscribe";

export function UnsubscribeForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [status, setStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  async function handleUnsubscribe() {
    if (!email) {
      setStatus({
        success: false,
        message: "Invalid unsubscribe link. Please check your email.",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await unsubscribeUser(email);
      setStatus(result);
    } catch (error) {
      setStatus({
        success: false,
        message: "Something didn’t work. You can try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (status.message) {
    return (
      <Card className="p-6 text-center">
        <p className={status.success ? "text-green-600" : "text-red-600"}>
          {status.message}
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-muted-foreground">
        {email ? (
          <>
            You’ll stop receiving emails from TheFalse for
            <br />
            <span className="font-medium">{email}</span>.
          </>
        ) : (
          "This unsubscribe link isn’t valid."
        )}
      </p>
      <div className="flex justify-center">
        <Button onClick={handleUnsubscribe} disabled={isLoading || !email}>
          {isLoading ? "Updating…" : "Unsubscribe"}
        </Button>
      </div>
    </div>
  );
}
