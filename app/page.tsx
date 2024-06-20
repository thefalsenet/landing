import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center lg:p-40 p-10 w-full">
      {" "}
      <div className="flex justify-center flex-col items-center absolute z-10 my-auto p-40 top-0 h-screen">
        {" "}
        <h1 className="text-8xl font-bold text-center tracking-tighter my-2">
          {" "}
          coming soon.{" "}
        </h1>{" "}
        <p className="text-xl text-center">
          {" "}
          stay tuned for updates. follow us on{" "}
          <Link
            href="https://twitter.com/thefalsedotnet"
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "text-lg p-0"
            )}
          >
            {" "}
            x (twitter){" "}
          </Link>{" "}
          <Link
            href="https://instagram.com/thefalsedotnet"
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "text-lg p-0"
            )}
          >
            {" "}
            instagram{" "}
          </Link>{" "}
        </p>{" "}
      </div>{" "}
      <div className="lg:flex xl:gap-18 md:gap-6 w-full h-full lg:px-16 justify-center hidden">
        {" "}
        <div className="flex flex-1 self-stretch h-full pointer-events-none">
          {" "}
          <Image
            src="/figure-2.png"
            alt="figure"
            fill
            className="h-full w-full object-cover !relative"
          />{" "}
        </div>{" "}
        <div className="flex flex-1 self-stretch h-full pointer-events-none">
          {" "}
          <Image
            src="/figure-1.png"
            alt="figure"
            fill
            className="h-full w-full object-cover !relative"
          />{" "}
        </div>{" "}
        <div className="flex flex-1 self-stretch h-full pointer-events-none">
          {" "}
          <Image
            src="/figure-3.png"
            alt="figure"
            fill
            className="h-full w-full object-cover !relative"
          />{" "}
        </div>{" "}
        <div className="flex flex-1 self-stretch h-full pointer-events-none">
          {" "}
          <Image
            src="/figure-4.png"
            alt="figure"
            fill
            className="h-full w-full object-cover !relative"
          />{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
