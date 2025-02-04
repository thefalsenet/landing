"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useFormStatus } from "react-dom";
import { subscribe } from "@/lib/actions/subscribe";
import { toast } from "sonner";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium border-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90"
      disabled={pending}
    >
      {pending ? "Subscribing..." : "Notify Me"}
    </Button>
  );
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    <div className="grid min-h-screen w-full lg:grid-cols-12 bg-black dark">
      <div className="flex flex-col gap-4 p-6 md:p-10 col-span-3">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="/"
            className="flex items-center gap-2 self-center text-xl font-bold text-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                d="M7.8367 17.0565L10.2857 12.8076C10.4451 12.5311 10.2451 12.185 9.92558 12.185H5.02992C4.88149 12.185 4.744 12.1061 4.66979 11.9772L2.05596 7.44092C1.8966 7.16438 2.09658 6.81832 2.41609 6.81832H7.54297C7.6914 6.81832 7.82889 6.73942 7.9031 6.61053L10.4412 2.20779C10.5154 2.0789 10.6529 2 10.8013 2H21.5839C21.9034 2 22.1034 2.34606 21.944 2.6226L19.545 6.78473C19.4708 6.91363 19.3333 6.99252 19.1849 6.99252H8.696C8.37728 6.99252 8.17729 7.33703 8.33509 7.61356L10.7255 11.8007C10.7997 11.9304 10.9372 12.01 11.0864 12.01H15.8118C16.1313 12.01 16.3313 12.3561 16.1719 12.6326L10.97 21.6584C10.8099 21.9357 10.4099 21.9357 10.2505 21.6584L7.8367 17.4705C7.76249 17.3432 7.76249 17.1846 7.8367 17.0565Z"
                fill="currentColor"
              />
            </svg>
            {siteConfig.name}
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm absolute bottom-12 left-12 space-y-8 z-20">
            <h1 className="text-9xl font-bold tracking-tighter leading-[6rem] text-white">
              coming
              <br />
              soon.
            </h1>
            <p className="text-lg text-muted-foreground">
              a new way to read and discover books. join the waitlist to be the
              first to know when we launch.
            </p>

            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <form
              id="subscribe-form"
              action={handleSubscribe}
              className="flex max-w-md gap-2"
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex w-full rounded-none border border-dashed border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block col-span-9">
        <div className="flex h-full w-full justify-center gap-2 md:gap-3">
          {[
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/figure-1-aQQB4IU8mwoO1L3iYLcPn9Kt38inad.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/figure-2-Joj1tRUxuYflMO4MgGrymwWpyhIq9c.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/figure-3-cjh9NQcxeOsSl6WtvIFBHgz3jTapPQ.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/figure-4-TcVarEdNf8wlqNRcVJcoSb9128WjVi.png",
          ].map((src, index) => (
            <div
              key={src}
              className="pointer-events-none flex h-full flex-1 self-stretch"
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Background section ${index + 1}`}
                width={400}
                height={600}
                className="!relative h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
